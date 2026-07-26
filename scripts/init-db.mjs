import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import nextEnv from "@next/env";
import pg from "pg";

const { loadEnvConfig } = nextEnv;
const { Pool } = pg;
const projectRoot = resolve(import.meta.dirname, "..");

loadEnvConfig(projectRoot);

const databaseUrl = process.env.DATABASE_URL?.trim();
if (!databaseUrl) {
  throw new Error(
    "DATABASE_URL is required. Add Railway PostgreSQL to .env.local or the Railway service variables.",
  );
}

const pool = new Pool({
  connectionString: databaseUrl,
  max: 1,
  connectionTimeoutMillis: 10_000,
  ssl: process.env.DATABASE_SSL === "require" ? { rejectUnauthorized: false } : undefined,
});

const schema = readFileSync(resolve(projectRoot, "db/schema.sql"), "utf8");
const statements = schema
  .split(";")
  .map((statement) => statement.trim())
  .filter(Boolean);

try {
  for (const statement of statements) {
    await pool.query(statement);
  }
  console.log("First Step PostgreSQL schema is ready");
} finally {
  await pool.end();
}
