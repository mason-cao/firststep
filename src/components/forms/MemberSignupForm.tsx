"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle, CircleNotch, WarningCircle } from "@phosphor-icons/react";
import { gradeLevels, memberInterests, type FieldErrors } from "@/lib/forms";

const inputClass =
  "mt-2 w-full rounded-lg border-2 border-ink/25 bg-shell px-4 py-3 text-base text-ink outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-ink/35 hover:border-ink/45 focus:border-signal focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-signal)_18%,transparent)] disabled:cursor-not-allowed disabled:opacity-60";
const labelClass = "block text-sm font-bold text-ink";

function ErrorText({ name, errors }: { name: string; errors: FieldErrors }) {
  const message = errors[name];
  if (!message) return null;
  return (
    <p id={`${name}-error`} className="mt-1.5 flex items-start gap-1.5 text-sm font-semibold text-signal">
      <WarningCircle className="mt-0.5 size-4 shrink-0" weight="fill" />
      {message}
    </p>
  );
}

export function MemberSignupForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [message, setMessage] = useState("");
  const [confirmationId, setConfirmationId] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");
    setErrors({});

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      fullName: formData.get("fullName"),
      preferredName: formData.get("preferredName"),
      studentEmail: formData.get("studentEmail"),
      parentGuardianName: formData.get("parentGuardianName"),
      parentGuardianEmail: formData.get("parentGuardianEmail"),
      phone: formData.get("phone"),
      school: formData.get("school"),
      gradeLevel: formData.get("gradeLevel"),
      graduationYear: formData.get("graduationYear"),
      city: formData.get("city"),
      interests: formData.getAll("interests"),
      motivation: formData.get("motivation"),
      heardAboutUs: formData.get("heardAboutUs"),
      contactPreference: formData.get("contactPreference"),
      permissionConfirmed: formData.get("permissionConfirmed") === "on",
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/members", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        message?: string;
        confirmationId?: string;
        fieldErrors?: FieldErrors;
      };

      if (!response.ok) {
        setErrors(result.fieldErrors || {});
        setMessage(result.message || "Check the form and try again.");
        setStatus("idle");
        return;
      }

      setConfirmationId(result.confirmationId || "Received");
      setStatus("success");
      form.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setMessage("We could not reach the server. Check your connection and try again.");
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border-2 border-ink bg-volt/45 p-7 shadow-[5px_5px_0_0_var(--color-ink)] md:p-10" role="status">
        <CheckCircle className="size-12 text-ink" weight="fill" />
        <p className="mono-tag mt-6 text-ink/60">Application {confirmationId}</p>
        <h2 className="heading-md mt-3">Your first step is on the record.</h2>
        <p className="copy mt-4 max-w-xl">
          Leadership received your information and will follow up using your preferred contact method.
          Save the application number above in case you need to ask about it.
        </p>
        <button
          type="button"
          onClick={() => {
            setConfirmationId("");
            setStatus("idle");
          }}
          className="mt-7 rounded-lg border-2 border-ink bg-shell px-5 py-3 text-sm font-bold uppercase tracking-wider shadow-[3px_3px_0_0_var(--color-ink)] transition-transform active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
        >
          Submit another application
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-xl border-2 border-ink bg-shell shadow-[6px_6px_0_0_var(--color-ink)]">
      <div className="border-b-2 border-ink bg-sky px-6 py-5 md:px-8">
        <p className="mono-tag text-ink/55">Member application</p>
        <h2 className="heading-md mt-2">Tell us who is joining</h2>
        <p className="copy mt-2 text-sm">Use the student or member&apos;s name so future service hours stay under the right record.</p>
      </div>

      {message && (
        <div className="mx-6 mt-6 flex items-start gap-3 rounded-lg border-2 border-signal bg-signal/10 p-4 text-sm font-semibold md:mx-8" role="alert">
          <WarningCircle className="mt-0.5 size-5 shrink-0 text-signal" weight="fill" />
          {message}
        </div>
      )}

      <div className="grid gap-10 p-6 md:p-8">
        <fieldset disabled={submitting} className="grid gap-5">
          <legend className="mb-5 flex items-center gap-3 font-display text-2xl font-extrabold">
            <span className="grid size-8 place-items-center rounded-md border-2 border-ink bg-signal font-ledger text-xs">01</span>
            Member details
          </legend>
          <div className="grid gap-5 md:grid-cols-2">
            <label className={labelClass}>
              Full name <span className="text-signal">*</span>
              <input name="fullName" autoComplete="name" className={inputClass} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? "fullName-error" : undefined} />
              <ErrorText name="fullName" errors={errors} />
            </label>
            <label className={labelClass}>
              Preferred name
              <input name="preferredName" autoComplete="nickname" className={inputClass} aria-invalid={Boolean(errors.preferredName)} aria-describedby={errors.preferredName ? "preferredName-error" : undefined} />
              <ErrorText name="preferredName" errors={errors} />
            </label>
            <label className={labelClass}>
              School or organization <span className="text-signal">*</span>
              <input name="school" autoComplete="organization" className={inputClass} aria-invalid={Boolean(errors.school)} aria-describedby={errors.school ? "school-error" : undefined} />
              <ErrorText name="school" errors={errors} />
            </label>
            <label className={labelClass}>
              Current grade or member type <span className="text-signal">*</span>
              <select name="gradeLevel" defaultValue="" className={inputClass} aria-invalid={Boolean(errors.gradeLevel)} aria-describedby={errors.gradeLevel ? "gradeLevel-error" : undefined}>
                <option value="" disabled>Choose one</option>
                {gradeLevels.map((grade) => <option key={grade}>{grade}</option>)}
              </select>
              <ErrorText name="gradeLevel" errors={errors} />
            </label>
            <label className={labelClass}>
              Graduation year
              <input name="graduationYear" type="number" inputMode="numeric" min={new Date().getFullYear() - 10} max={new Date().getFullYear() + 20} placeholder="2030" className={inputClass} aria-invalid={Boolean(errors.graduationYear)} aria-describedby={errors.graduationYear ? "graduationYear-error" : undefined} />
              <ErrorText name="graduationYear" errors={errors} />
            </label>
            <label className={labelClass}>
              City <span className="text-signal">*</span>
              <input name="city" autoComplete="address-level2" placeholder="Johns Creek" className={inputClass} aria-invalid={Boolean(errors.city)} aria-describedby={errors.city ? "city-error" : undefined} />
              <ErrorText name="city" errors={errors} />
            </label>
          </div>
        </fieldset>

        <fieldset disabled={submitting} className="grid gap-5 border-t-2 border-ink/10 pt-8">
          <legend className="mb-5 flex items-center gap-3 font-display text-2xl font-extrabold">
            <span className="grid size-8 place-items-center rounded-md border-2 border-ink bg-volt font-ledger text-xs">02</span>
            Contact information
          </legend>
          <p className="copy -mt-2 text-sm">K-12 applicants need a parent or guardian contact. At least one email address is required.</p>
          <div className="grid gap-5 md:grid-cols-2">
            <label className={labelClass}>
              Student or member email
              <input name="studentEmail" type="email" autoComplete="email" className={inputClass} aria-invalid={Boolean(errors.studentEmail)} aria-describedby={errors.studentEmail ? "studentEmail-error" : undefined} />
              <ErrorText name="studentEmail" errors={errors} />
            </label>
            <label className={labelClass}>
              Phone number <span className="text-signal">*</span>
              <input name="phone" type="tel" autoComplete="tel" className={inputClass} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} />
              <ErrorText name="phone" errors={errors} />
            </label>
            <label className={labelClass}>
              Parent or guardian name
              <input name="parentGuardianName" autoComplete="name" className={inputClass} aria-invalid={Boolean(errors.parentGuardianName)} aria-describedby={errors.parentGuardianName ? "parentGuardianName-error" : undefined} />
              <ErrorText name="parentGuardianName" errors={errors} />
            </label>
            <label className={labelClass}>
              Parent or guardian email
              <input name="parentGuardianEmail" type="email" autoComplete="email" className={inputClass} aria-invalid={Boolean(errors.parentGuardianEmail)} aria-describedby={errors.parentGuardianEmail ? "parentGuardianEmail-error" : undefined} />
              <ErrorText name="parentGuardianEmail" errors={errors} />
            </label>
            <label className={`${labelClass} md:col-span-2`}>
              Best way to follow up <span className="text-signal">*</span>
              <select name="contactPreference" defaultValue="" className={inputClass} aria-invalid={Boolean(errors.contactPreference)} aria-describedby={errors.contactPreference ? "contactPreference-error" : undefined}>
                <option value="" disabled>Choose one</option>
                <option>Email</option>
                <option>Text message</option>
                <option>Either</option>
              </select>
              <ErrorText name="contactPreference" errors={errors} />
            </label>
          </div>
        </fieldset>

        <fieldset disabled={submitting} className="grid gap-5 border-t-2 border-ink/10 pt-8">
          <legend className="mb-5 flex items-center gap-3 font-display text-2xl font-extrabold">
            <span className="grid size-8 place-items-center rounded-md border-2 border-ink bg-river font-ledger text-xs text-shell">03</span>
            What you care about
          </legend>
          <div>
            <p className={labelClass}>Areas of interest <span className="text-signal">*</span></p>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {memberInterests.map((interest) => (
                <label key={interest} className="flex cursor-pointer items-start gap-3 rounded-lg border-2 border-ink/12 bg-paper p-3 text-sm font-semibold transition-colors hover:border-ink/35 has-[:checked]:border-ink has-[:checked]:bg-volt/35">
                  <input type="checkbox" name="interests" value={interest} className="mt-0.5 size-4 accent-signal" />
                  {interest}
                </label>
              ))}
            </div>
            <ErrorText name="interests" errors={errors} />
          </div>
          <label className={labelClass}>
            Why do you want to join First Step? <span className="text-signal">*</span>
            <textarea name="motivation" rows={5} className={inputClass} placeholder="Tell us what kind of service you hope to do and what you want to learn." aria-invalid={Boolean(errors.motivation)} aria-describedby={errors.motivation ? "motivation-error" : undefined} />
            <ErrorText name="motivation" errors={errors} />
          </label>
          <label className={labelClass}>
            How did you hear about us? <span className="text-signal">*</span>
            <input name="heardAboutUs" placeholder="Family, friends, Instagram, school..." className={inputClass} aria-invalid={Boolean(errors.heardAboutUs)} aria-describedby={errors.heardAboutUs ? "heardAboutUs-error" : undefined} />
            <ErrorText name="heardAboutUs" errors={errors} />
          </label>
        </fieldset>

        <div className="border-t-2 border-ink/10 pt-8">
          <label className="flex cursor-pointer items-start gap-3 rounded-lg border-2 border-ink bg-paper p-4 text-sm font-semibold">
            <input type="checkbox" name="permissionConfirmed" className="mt-0.5 size-5 shrink-0 accent-signal" disabled={submitting} aria-invalid={Boolean(errors.permissionConfirmed)} aria-describedby={errors.permissionConfirmed ? "permissionConfirmed-error" : undefined} />
            <span>I confirm this information is accurate. If the applicant is under 18, a parent or guardian has given permission for First Step Team to make contact.</span>
          </label>
          <ErrorText name="permissionConfirmed" errors={errors} />

          <label className="absolute -left-[10000px]" aria-hidden="true">
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>

          <button type="submit" disabled={submitting} className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border-2 border-ink bg-signal px-6 py-3 text-sm font-bold uppercase tracking-wider text-ink shadow-[4px_4px_0_0_var(--color-ink)] transition-[transform,box-shadow,opacity] duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--color-ink)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none disabled:cursor-not-allowed disabled:opacity-65 md:w-auto">
            {submitting ? <><CircleNotch className="size-5 animate-spin" weight="bold" /> Saving application</> : "Submit member application"}
          </button>
        </div>
      </div>
    </form>
  );
}
