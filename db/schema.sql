CREATE TABLE IF NOT EXISTS member_applications (
  id TEXT PRIMARY KEY,
  full_name TEXT NOT NULL,
  preferred_name TEXT,
  student_email TEXT,
  parent_guardian_name TEXT,
  parent_guardian_email TEXT,
  phone TEXT NOT NULL,
  school TEXT NOT NULL,
  grade_level TEXT NOT NULL,
  graduation_year INTEGER,
  city TEXT NOT NULL,
  interests JSONB NOT NULL DEFAULT '[]'::jsonb,
  motivation TEXT NOT NULL,
  heard_about_us TEXT NOT NULL,
  contact_preference TEXT NOT NULL,
  permission_confirmed BOOLEAN NOT NULL DEFAULT FALSE,
  status TEXT NOT NULL DEFAULT 'new'
    CHECK (status IN ('new', 'contacted', 'active', 'archived')),
  reviewed_by TEXT,
  reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_member_applications_status_created
  ON member_applications (status, created_at DESC);

CREATE TABLE IF NOT EXISTS activity_submissions (
  id TEXT PRIMARY KEY,
  member_name TEXT NOT NULL,
  member_email TEXT NOT NULL,
  activity_name TEXT NOT NULL,
  activity_date DATE NOT NULL,
  project_type TEXT NOT NULL,
  location TEXT NOT NULL,
  sponsor TEXT NOT NULL,
  total_minutes INTEGER NOT NULL CHECK (total_minutes > 0 AND total_minutes <= 1440),
  description TEXT NOT NULL,
  other_members TEXT,
  evidence_url TEXT,
  evidence_file_name TEXT,
  evidence_mime_type TEXT,
  evidence_blob BYTEA,
  accuracy_confirmed BOOLEAN NOT NULL DEFAULT FALSE,
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'approved', 'rejected')),
  reviewer_email TEXT,
  reviewed_at TIMESTAMPTZ,
  review_note TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_activity_submissions_status_created
  ON activity_submissions (status, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_activity_submissions_member_email
  ON activity_submissions (member_email, activity_date DESC);

CREATE TABLE IF NOT EXISTS submission_rate_limits (
  bucket_key TEXT PRIMARY KEY,
  submission_count INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_submission_rate_limits_created
  ON submission_rate_limits (created_at);
