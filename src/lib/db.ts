import "server-only";

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { randomUUID } from "node:crypto";
import { Pool, type PoolConfig } from "pg";
import type { ActivitySubmissionInput, MemberApplicationInput } from "@/lib/forms";

const globalForDatabase = globalThis as typeof globalThis & {
  firstStepPostgresPool?: Pool;
};

let schemaReady: Promise<void> | null = null;

function databaseUrl() {
  const url = process.env.DATABASE_URL?.trim();
  if (!url) {
    throw new Error(
      "DATABASE_URL is required. Add a Railway PostgreSQL reference variable; see README.md.",
    );
  }
  return url;
}

function getPool() {
  if (globalForDatabase.firstStepPostgresPool) {
    return globalForDatabase.firstStepPostgresPool;
  }

  const configuredMax = Number(process.env.DATABASE_POOL_MAX || 5);
  const config: PoolConfig = {
    connectionString: databaseUrl(),
    max: Number.isFinite(configuredMax) ? Math.min(Math.max(configuredMax, 1), 20) : 5,
    connectionTimeoutMillis: 10_000,
    idleTimeoutMillis: 30_000,
  };

  // Railway services in the same project use private networking. Set this only
  // when connecting through an external PostgreSQL URL that requires TLS.
  if (process.env.DATABASE_SSL === "require") {
    config.ssl = { rejectUnauthorized: false };
  }

  const pool = new Pool(config);
  pool.on("error", (error) => {
    console.error("Unexpected PostgreSQL pool error", error);
  });
  globalForDatabase.firstStepPostgresPool = pool;
  return pool;
}

async function initializeSchema() {
  const schema = readFileSync(resolve(process.cwd(), "db/schema.sql"), "utf8");
  const statements = schema
    .split(";")
    .map((statement) => statement.trim())
    .filter(Boolean);

  for (const statement of statements) {
    await getPool().query(statement);
  }
}

async function ensureSchema() {
  if (!schemaReady) {
    schemaReady = initializeSchema().catch((error) => {
      schemaReady = null;
      throw error;
    });
  }
  await schemaReady;
}

function asTimestamp(value: unknown) {
  if (value instanceof Date) return value.toISOString();
  const parsed = new Date(String(value));
  return Number.isNaN(parsed.getTime()) ? String(value) : parsed.toISOString();
}

function asInterests(value: unknown) {
  if (Array.isArray(value)) return value.map(String);
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value) as unknown;
      if (Array.isArray(parsed)) return parsed.map(String);
    } catch {
      return [];
    }
  }
  return [];
}

export type MemberApplicationRecord = {
  id: string;
  fullName: string;
  preferredName: string | null;
  studentEmail: string | null;
  parentGuardianName: string | null;
  parentGuardianEmail: string | null;
  phone: string;
  school: string;
  gradeLevel: string;
  graduationYear: number | null;
  city: string;
  interests: string[];
  motivation: string;
  heardAboutUs: string;
  contactPreference: string;
  status: "new" | "contacted" | "active" | "archived";
  reviewedBy: string | null;
  reviewedAt: string | null;
  createdAt: string;
};

export type ActivitySubmissionRecord = {
  id: string;
  memberName: string;
  memberEmail: string;
  activityName: string;
  activityDate: string;
  projectType: string;
  location: string;
  sponsor: string;
  totalMinutes: number;
  description: string;
  otherMembers: string | null;
  evidenceUrl: string | null;
  evidenceFileName: string | null;
  status: "pending" | "approved" | "rejected";
  reviewerEmail: string | null;
  reviewedAt: string | null;
  reviewNote: string | null;
  createdAt: string;
};

type MemberRow = {
  id: string;
  full_name: string;
  preferred_name: string | null;
  student_email: string | null;
  parent_guardian_name: string | null;
  parent_guardian_email: string | null;
  phone: string;
  school: string;
  grade_level: string;
  graduation_year: number | null;
  city: string;
  interests: unknown;
  motivation: string;
  heard_about_us: string;
  contact_preference: string;
  status: MemberApplicationRecord["status"];
  reviewed_by: string | null;
  reviewed_at: Date | null;
  created_at: Date;
};

type ActivityRow = {
  id: string;
  member_name: string;
  member_email: string;
  activity_name: string;
  activity_date: string;
  project_type: string;
  location: string;
  sponsor: string;
  total_minutes: number;
  description: string;
  other_members: string | null;
  evidence_url: string | null;
  evidence_file_name: string | null;
  status: ActivitySubmissionRecord["status"];
  reviewer_email: string | null;
  reviewed_at: Date | null;
  review_note: string | null;
  created_at: Date;
};

export async function createMemberApplication(input: MemberApplicationInput) {
  await ensureSchema();
  const id = `MEM-${randomUUID().slice(0, 8).toUpperCase()}`;
  const now = new Date();

  await getPool().query(
    `
      INSERT INTO member_applications (
        id, full_name, preferred_name, student_email, parent_guardian_name,
        parent_guardian_email, phone, school, grade_level, graduation_year,
        city, interests, motivation, heard_about_us, contact_preference,
        permission_confirmed, created_at, updated_at
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9,
        $10, $11, $12::jsonb, $13, $14, $15, $16, $17, $18
      )
    `,
    [
      id,
      input.fullName,
      input.preferredName,
      input.studentEmail,
      input.parentGuardianName,
      input.parentGuardianEmail,
      input.phone,
      input.school,
      input.gradeLevel,
      input.graduationYear,
      input.city,
      JSON.stringify(input.interests),
      input.motivation,
      input.heardAboutUs,
      input.contactPreference,
      true,
      now,
      now,
    ],
  );

  return id;
}

export async function createActivitySubmission(
  input: ActivitySubmissionInput,
  evidence: {
    fileName: string | null;
    mimeType: string | null;
    bytes: Uint8Array | null;
  },
) {
  await ensureSchema();
  const id = `HRS-${randomUUID().slice(0, 8).toUpperCase()}`;
  const now = new Date();

  await getPool().query(
    `
      INSERT INTO activity_submissions (
        id, member_name, member_email, activity_name, activity_date,
        project_type, location, sponsor, total_minutes, description,
        other_members, evidence_url, evidence_file_name, evidence_mime_type,
        evidence_blob, accuracy_confirmed, created_at, updated_at
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9,
        $10, $11, $12, $13, $14, $15, $16, $17, $18
      )
    `,
    [
      id,
      input.memberName,
      input.memberEmail,
      input.activityName,
      input.activityDate,
      input.projectType,
      input.location,
      input.sponsor,
      input.totalMinutes,
      input.description,
      input.otherMembers,
      input.evidenceUrl,
      evidence.fileName,
      evidence.mimeType,
      evidence.bytes ? Buffer.from(evidence.bytes) : null,
      true,
      now,
      now,
    ],
  );

  return id;
}

export async function listMemberApplications(): Promise<MemberApplicationRecord[]> {
  await ensureSchema();
  const result = await getPool().query<MemberRow>(`
    SELECT id, full_name, preferred_name, student_email, parent_guardian_name,
      parent_guardian_email, phone, school, grade_level, graduation_year, city,
      interests, motivation, heard_about_us, contact_preference, status,
      reviewed_by, reviewed_at, created_at
    FROM member_applications
    ORDER BY CASE status
      WHEN 'new' THEN 0 WHEN 'contacted' THEN 1 WHEN 'active' THEN 2 ELSE 3 END,
      created_at DESC
  `);

  return result.rows.map((row) => ({
    id: row.id,
    fullName: row.full_name,
    preferredName: row.preferred_name,
    studentEmail: row.student_email,
    parentGuardianName: row.parent_guardian_name,
    parentGuardianEmail: row.parent_guardian_email,
    phone: row.phone,
    school: row.school,
    gradeLevel: row.grade_level,
    graduationYear: row.graduation_year,
    city: row.city,
    interests: asInterests(row.interests),
    motivation: row.motivation,
    heardAboutUs: row.heard_about_us,
    contactPreference: row.contact_preference,
    status: row.status,
    reviewedBy: row.reviewed_by,
    reviewedAt: row.reviewed_at ? asTimestamp(row.reviewed_at) : null,
    createdAt: asTimestamp(row.created_at),
  }));
}

export async function listActivitySubmissions(): Promise<ActivitySubmissionRecord[]> {
  await ensureSchema();
  const result = await getPool().query<ActivityRow>(`
    SELECT id, member_name, member_email, activity_name,
      activity_date::text AS activity_date, project_type, location, sponsor,
      total_minutes, description, other_members, evidence_url, evidence_file_name,
      status, reviewer_email, reviewed_at, review_note, created_at
    FROM activity_submissions
    ORDER BY CASE status WHEN 'pending' THEN 0 WHEN 'rejected' THEN 1 ELSE 2 END,
      created_at DESC
  `);

  return result.rows.map((row) => ({
    id: row.id,
    memberName: row.member_name,
    memberEmail: row.member_email,
    activityName: row.activity_name,
    activityDate: row.activity_date,
    projectType: row.project_type,
    location: row.location,
    sponsor: row.sponsor,
    totalMinutes: row.total_minutes,
    description: row.description,
    otherMembers: row.other_members,
    evidenceUrl: row.evidence_url,
    evidenceFileName: row.evidence_file_name,
    status: row.status,
    reviewerEmail: row.reviewer_email,
    reviewedAt: row.reviewed_at ? asTimestamp(row.reviewed_at) : null,
    reviewNote: row.review_note,
    createdAt: asTimestamp(row.created_at),
  }));
}

export async function reviewActivitySubmission(
  id: string,
  status: "approved" | "rejected",
  reviewerEmail: string,
  reviewNote: string | null,
) {
  await ensureSchema();
  const now = new Date();
  const result = await getPool().query(
    `
      UPDATE activity_submissions
      SET status = $1, reviewer_email = $2, reviewed_at = $3,
        review_note = $4, updated_at = $5
      WHERE id = $6
    `,
    [status, reviewerEmail, now, reviewNote, now, id],
  );
  return (result.rowCount ?? 0) > 0;
}

export async function updateMemberApplicationStatus(
  id: string,
  status: MemberApplicationRecord["status"],
  reviewerEmail: string,
) {
  await ensureSchema();
  const now = new Date();
  const result = await getPool().query(
    `
      UPDATE member_applications
      SET status = $1, reviewed_by = $2, reviewed_at = $3, updated_at = $4
      WHERE id = $5
    `,
    [status, reviewerEmail, now, now, id],
  );
  return (result.rowCount ?? 0) > 0;
}

export async function getActivityEvidence(id: string) {
  await ensureSchema();
  const result = await getPool().query<{
    evidence_file_name: string | null;
    evidence_mime_type: string | null;
    evidence_blob: Buffer | null;
  }>(
    `
      SELECT evidence_file_name, evidence_mime_type, evidence_blob
      FROM activity_submissions WHERE id = $1
    `,
    [id],
  );
  const row = result.rows[0];
  if (!row?.evidence_blob) return null;

  return {
    fileName: row.evidence_file_name || "evidence",
    mimeType: row.evidence_mime_type || "application/octet-stream",
    bytes: new Uint8Array(row.evidence_blob),
  };
}

export async function incrementSubmissionRate(
  kind: "member" | "activity",
  fingerprint: string,
) {
  await ensureSchema();
  const now = new Date();
  const hourBucket = now.toISOString().slice(0, 13);
  const key = `${kind}:${fingerprint}:${hourBucket}`;

  const result = await getPool().query<{ submission_count: number }>(
    `
      INSERT INTO submission_rate_limits (bucket_key, submission_count, created_at)
      VALUES ($1, 1, $2)
      ON CONFLICT (bucket_key) DO UPDATE
        SET submission_count = submission_rate_limits.submission_count + 1
      RETURNING submission_count
    `,
    [key, now],
  );

  if (Math.random() < 0.02) {
    const cutoff = new Date(now.getTime() - 48 * 60 * 60 * 1000);
    await getPool().query(
      "DELETE FROM submission_rate_limits WHERE created_at < $1",
      [cutoff],
    );
  }

  return result.rows[0]?.submission_count ?? 1;
}

export async function checkDatabaseHealth() {
  await ensureSchema();
  await getPool().query("SELECT 1");
}
