export const gradeLevels = [
  "Kindergarten",
  "1st grade",
  "2nd grade",
  "3rd grade",
  "4th grade",
  "5th grade",
  "6th grade",
  "7th grade",
  "8th grade",
  "9th grade",
  "10th grade",
  "11th grade",
  "12th grade",
  "College / alumni",
  "Parent / community member",
] as const;

export const memberInterests = [
  "Cleanups & environment",
  "Food banks & community care",
  "Fundraising",
  "Music & senior performances",
  "Research & water quality",
  "Public speaking & outreach",
  "Team building",
] as const;

export const activityProjects = [
  "First Step clean environment / trash cleanup",
  "Chattahoochee Nature Center",
  "CFF Great Strides",
  "Food bank",
  "MedShare",
  "Salvation Army",
  "Senior center performance",
  "Fundraising",
  "Research & water quality",
  "Team building",
  "Other First Step project",
] as const;

export type FieldErrors = Record<string, string>;

export type MemberApplicationInput = {
  fullName: string;
  preferredName: string | null;
  studentEmail: string | null;
  parentGuardianName: string | null;
  parentGuardianEmail: string | null;
  phone: string;
  school: string;
  gradeLevel: (typeof gradeLevels)[number];
  graduationYear: number | null;
  city: string;
  interests: string[];
  motivation: string;
  heardAboutUs: string;
  contactPreference: "Email" | "Text message" | "Either";
  permissionConfirmed: true;
};

export type ActivitySubmissionInput = {
  memberName: string;
  memberEmail: string;
  activityName: string;
  activityDate: string;
  projectType: (typeof activityProjects)[number];
  location: string;
  sponsor: string;
  totalMinutes: number;
  description: string;
  otherMembers: string | null;
  evidenceUrl: string | null;
  accuracyConfirmed: true;
};

type ValidationResult<T> =
  | { success: true; data: T }
  | { success: false; fieldErrors: FieldErrors };

function text(value: unknown) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";
}

function multiline(value: unknown) {
  return typeof value === "string" ? value.trim().replace(/\r\n/g, "\n") : "";
}

function email(value: unknown) {
  const normalized = text(value).toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized) ? normalized : null;
}

function isHttpUrl(value: string) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}

function required(
  errors: FieldErrors,
  field: string,
  value: string,
  label: string,
  minLength = 1,
  maxLength = 200,
) {
  if (value.length < minLength) {
    errors[field] = `${label} is required.`;
  } else if (value.length > maxLength) {
    errors[field] = `${label} must be ${maxLength} characters or fewer.`;
  }
}

export function validateMemberApplication(
  input: Record<string, unknown>,
): ValidationResult<MemberApplicationInput> {
  const errors: FieldErrors = {};
  const fullName = text(input.fullName);
  const preferredName = text(input.preferredName) || null;
  const studentEmailRaw = text(input.studentEmail);
  const parentGuardianName = text(input.parentGuardianName) || null;
  const parentGuardianEmailRaw = text(input.parentGuardianEmail);
  const studentEmail = studentEmailRaw ? email(studentEmailRaw) : null;
  const parentGuardianEmail = parentGuardianEmailRaw ? email(parentGuardianEmailRaw) : null;
  const phone = text(input.phone);
  const school = text(input.school);
  const gradeLevel = text(input.gradeLevel);
  const graduationYearRaw = text(input.graduationYear);
  const city = text(input.city);
  const interests = Array.isArray(input.interests)
    ? input.interests.map(text).filter(Boolean)
    : [];
  const motivation = multiline(input.motivation);
  const heardAboutUs = text(input.heardAboutUs);
  const contactPreference = text(input.contactPreference);
  const permissionConfirmed = input.permissionConfirmed === true;

  required(errors, "fullName", fullName, "Member name", 2, 100);
  if (preferredName && preferredName.length > 60) {
    errors.preferredName = "Preferred name must be 60 characters or fewer.";
  }
  if (studentEmailRaw && !studentEmail) {
    errors.studentEmail = "Enter a valid student email address.";
  }
  if (parentGuardianEmailRaw && !parentGuardianEmail) {
    errors.parentGuardianEmail = "Enter a valid parent or guardian email address.";
  }
  if (!studentEmail && !parentGuardianEmail) {
    errors.studentEmail = "Enter at least one email address so the team can respond.";
  }
  if (!/^[+()\-\s.\d]{7,24}$/.test(phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  required(errors, "school", school, "School or organization", 2, 120);
  if (!gradeLevels.includes(gradeLevel as (typeof gradeLevels)[number])) {
    errors.gradeLevel = "Choose a grade or member type.";
  }
  const isK12 = gradeLevels.slice(0, 13).includes(gradeLevel as (typeof gradeLevels)[number]);
  if (isK12 && !parentGuardianName) {
    errors.parentGuardianName = "A parent or guardian name is required for K-12 members.";
  }
  if (isK12 && !parentGuardianEmail) {
    errors.parentGuardianEmail = "A parent or guardian email is required for K-12 members.";
  }
  const graduationYear = graduationYearRaw ? Number(graduationYearRaw) : null;
  const currentYear = new Date().getFullYear();
  if (
    graduationYear !== null &&
    (!Number.isInteger(graduationYear) || graduationYear < currentYear - 10 || graduationYear > currentYear + 20)
  ) {
    errors.graduationYear = "Enter a valid four-digit graduation year.";
  }
  required(errors, "city", city, "City", 2, 80);
  if (interests.length === 0) {
    errors.interests = "Choose at least one area of interest.";
  } else if (interests.some((interest) => !memberInterests.includes(interest as (typeof memberInterests)[number]))) {
    errors.interests = "Choose interests from the list.";
  }
  required(errors, "motivation", motivation, "Why you want to join", 20, 1200);
  required(errors, "heardAboutUs", heardAboutUs, "How you heard about First Step", 2, 120);
  if (!["Email", "Text message", "Either"].includes(contactPreference)) {
    errors.contactPreference = "Choose a contact preference.";
  }
  if (!permissionConfirmed) {
    errors.permissionConfirmed = "Confirm that the information is accurate and contact is permitted.";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, fieldErrors: errors };
  }

  return {
    success: true,
    data: {
      fullName,
      preferredName,
      studentEmail,
      parentGuardianName,
      parentGuardianEmail,
      phone,
      school,
      gradeLevel: gradeLevel as MemberApplicationInput["gradeLevel"],
      graduationYear,
      city,
      interests,
      motivation,
      heardAboutUs,
      contactPreference: contactPreference as MemberApplicationInput["contactPreference"],
      permissionConfirmed: true,
    },
  };
}

export function validateActivitySubmission(
  input: Record<string, unknown>,
): ValidationResult<ActivitySubmissionInput> {
  const errors: FieldErrors = {};
  const memberName = text(input.memberName);
  const memberEmail = email(input.memberEmail);
  const memberEmailRaw = text(input.memberEmail);
  const activityName = text(input.activityName);
  const activityDate = text(input.activityDate);
  const projectType = text(input.projectType);
  const location = text(input.location);
  const sponsor = text(input.sponsor);
  const hours = Number(text(input.hours) || "0");
  const minutes = Number(text(input.minutes) || "0");
  const description = multiline(input.description);
  const otherMembers = multiline(input.otherMembers) || null;
  const evidenceUrl = text(input.evidenceUrl) || null;
  const accuracyConfirmed = input.accuracyConfirmed === true;

  required(errors, "memberName", memberName, "Member name", 2, 100);
  if (!memberEmail) {
    errors.memberEmail = memberEmailRaw
      ? "Enter a valid member email address."
      : "Member email is required.";
  }
  required(errors, "activityName", activityName, "Activity name", 3, 160);
  const parsedDate = new Date(`${activityDate}T12:00:00`);
  const today = new Date();
  const oldestAllowed = new Date();
  oldestAllowed.setFullYear(today.getFullYear() - 3);
  const newestAllowed = new Date();
  newestAllowed.setDate(today.getDate() + 1);
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(activityDate) ||
    Number.isNaN(parsedDate.getTime()) ||
    parsedDate < oldestAllowed ||
    parsedDate > newestAllowed
  ) {
    errors.activityDate = "Choose an activity date from the last three years.";
  }
  if (!activityProjects.includes(projectType as (typeof activityProjects)[number])) {
    errors.projectType = "Choose the closest First Step project.";
  }
  required(errors, "location", location, "Location", 2, 160);
  required(errors, "sponsor", sponsor, "Sponsor or host", 2, 160);
  if (!Number.isInteger(hours) || hours < 0 || hours > 24) {
    errors.hours = "Hours must be a whole number from 0 to 24.";
  }
  if (!Number.isInteger(minutes) || minutes < 0 || minutes > 59) {
    errors.minutes = "Minutes must be a whole number from 0 to 59.";
  }
  const totalMinutes = hours * 60 + minutes;
  if (totalMinutes < 15 || totalMinutes > 1440) {
    errors.hours = "Enter a total between 15 minutes and 24 hours.";
  }
  required(errors, "description", description, "Activity description", 20, 2000);
  if (otherMembers && otherMembers.length > 1000) {
    errors.otherMembers = "Other members must be 1,000 characters or fewer.";
  }
  if (evidenceUrl && !isHttpUrl(evidenceUrl)) {
    errors.evidenceUrl = "Enter a full http or https link.";
  }
  if (!accuracyConfirmed) {
    errors.accuracyConfirmed = "Confirm that the hours and activity details are accurate.";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, fieldErrors: errors };
  }

  return {
    success: true,
    data: {
      memberName,
      memberEmail: memberEmail as string,
      activityName,
      activityDate,
      projectType: projectType as ActivitySubmissionInput["projectType"],
      location,
      sponsor,
      totalMinutes,
      description,
      otherMembers,
      evidenceUrl,
      accuracyConfirmed: true,
    },
  };
}
