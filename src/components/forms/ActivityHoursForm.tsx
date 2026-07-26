"use client";

import { useRef, useState, type FormEvent } from "react";
import { CheckCircle, CircleNotch, FileArrowUp, WarningCircle } from "@phosphor-icons/react";
import { activityProjects, type FieldErrors } from "@/lib/forms";

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

export function ActivityHoursForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [message, setMessage] = useState("");
  const [confirmationId, setConfirmationId] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [fileName, setFileName] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");
    setErrors({});

    try {
      const response = await fetch("/api/activity-submissions", {
        method: "POST",
        body: new FormData(event.currentTarget),
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
      setFileName("");
      event.currentTarget.reset();
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
        <p className="mono-tag mt-6 text-ink/60">Report {confirmationId}</p>
        <h2 className="heading-md mt-3">Submitted for leadership review.</h2>
        <p className="copy mt-4 max-w-xl">
          Your hours are pending, not approved yet. Leadership can now check the activity details and evidence in the private review desk.
        </p>
        <button
          type="button"
          onClick={() => {
            setConfirmationId("");
            setStatus("idle");
            queueMicrotask(() => formRef.current?.querySelector<HTMLInputElement>("input")?.focus());
          }}
          className="mt-7 rounded-lg border-2 border-ink bg-shell px-5 py-3 text-sm font-bold uppercase tracking-wider shadow-[3px_3px_0_0_var(--color-ink)] transition-transform active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
        >
          Report another activity
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="rounded-xl border-2 border-ink bg-shell shadow-[6px_6px_0_0_var(--color-ink)]">
      <div className="border-b-2 border-ink bg-sky px-6 py-5 md:px-8">
        <p className="mono-tag text-ink/55">Activity & hours report</p>
        <h2 className="heading-md mt-2">Put the service on the record</h2>
        <p className="copy mt-2 text-sm">Submit one member&apos;s time per report. Leadership reviews every entry before approval.</p>
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
            Who volunteered
          </legend>
          <div className="grid gap-5 md:grid-cols-2">
            <label className={labelClass}>
              Member name <span className="text-signal">*</span>
              <input name="memberName" autoComplete="name" className={inputClass} aria-invalid={Boolean(errors.memberName)} aria-describedby={errors.memberName ? "memberName-error" : undefined} />
              <ErrorText name="memberName" errors={errors} />
            </label>
            <label className={labelClass}>
              Member email <span className="text-signal">*</span>
              <input name="memberEmail" type="email" autoComplete="email" className={inputClass} aria-invalid={Boolean(errors.memberEmail)} aria-describedby={errors.memberEmail ? "memberEmail-error" : undefined} />
              <ErrorText name="memberEmail" errors={errors} />
            </label>
          </div>
        </fieldset>

        <fieldset disabled={submitting} className="grid gap-5 border-t-2 border-ink/10 pt-8">
          <legend className="mb-5 flex items-center gap-3 font-display text-2xl font-extrabold">
            <span className="grid size-8 place-items-center rounded-md border-2 border-ink bg-volt font-ledger text-xs">02</span>
            Activity details
          </legend>
          <div className="grid gap-5 md:grid-cols-2">
            <label className={`${labelClass} md:col-span-2`}>
              Activity name <span className="text-signal">*</span>
              <input name="activityName" placeholder="Sweep the Hooch cleanup" className={inputClass} aria-invalid={Boolean(errors.activityName)} aria-describedby={errors.activityName ? "activityName-error" : undefined} />
              <ErrorText name="activityName" errors={errors} />
            </label>
            <label className={labelClass}>
              Date <span className="text-signal">*</span>
              <input name="activityDate" type="date" max={new Date().toISOString().slice(0, 10)} className={inputClass} aria-invalid={Boolean(errors.activityDate)} aria-describedby={errors.activityDate ? "activityDate-error" : undefined} />
              <ErrorText name="activityDate" errors={errors} />
            </label>
            <label className={labelClass}>
              First Step project <span className="text-signal">*</span>
              <select name="projectType" defaultValue="" className={inputClass} aria-invalid={Boolean(errors.projectType)} aria-describedby={errors.projectType ? "projectType-error" : undefined}>
                <option value="" disabled>Choose the closest project</option>
                {activityProjects.map((project) => <option key={project}>{project}</option>)}
              </select>
              <ErrorText name="projectType" errors={errors} />
            </label>
            <label className={labelClass}>
              Location <span className="text-signal">*</span>
              <input name="location" placeholder="Jones Bridge Park, Peachtree Corners" className={inputClass} aria-invalid={Boolean(errors.location)} aria-describedby={errors.location ? "location-error" : undefined} />
              <ErrorText name="location" errors={errors} />
            </label>
            <label className={labelClass}>
              Sponsor or host <span className="text-signal">*</span>
              <input name="sponsor" placeholder="First Step Team or partner organization" className={inputClass} aria-invalid={Boolean(errors.sponsor)} aria-describedby={errors.sponsor ? "sponsor-error" : undefined} />
              <ErrorText name="sponsor" errors={errors} />
            </label>
            <div className="md:col-span-2">
              <p className={labelClass}>Your service time <span className="text-signal">*</span></p>
              <div className="mt-2 grid grid-cols-2 gap-3 sm:max-w-md">
                <label className="text-xs font-bold uppercase tracking-wider text-ink/60">
                  Hours
                  <input name="hours" type="number" inputMode="numeric" min="0" max="24" defaultValue="0" className={inputClass} aria-invalid={Boolean(errors.hours)} aria-describedby={errors.hours ? "hours-error" : undefined} />
                </label>
                <label className="text-xs font-bold uppercase tracking-wider text-ink/60">
                  Minutes
                  <input name="minutes" type="number" inputMode="numeric" min="0" max="59" defaultValue="0" className={inputClass} aria-invalid={Boolean(errors.minutes)} aria-describedby={errors.minutes ? "minutes-error" : undefined} />
                </label>
              </div>
              <ErrorText name="hours" errors={errors} />
              <ErrorText name="minutes" errors={errors} />
            </div>
            <label className={`${labelClass} md:col-span-2`}>
              What did you do? <span className="text-signal">*</span>
              <textarea name="description" rows={5} className={inputClass} placeholder="Describe the work completed, your role, and any outcome leadership should know." aria-invalid={Boolean(errors.description)} aria-describedby={errors.description ? "description-error" : undefined} />
              <ErrorText name="description" errors={errors} />
            </label>
            <label className={`${labelClass} md:col-span-2`}>
              Other First Step members who attended
              <textarea name="otherMembers" rows={3} className={inputClass} placeholder="List names only. Each member should submit their own hours." aria-invalid={Boolean(errors.otherMembers)} aria-describedby={errors.otherMembers ? "otherMembers-error" : undefined} />
              <ErrorText name="otherMembers" errors={errors} />
            </label>
          </div>
        </fieldset>

        <fieldset disabled={submitting} className="grid gap-5 border-t-2 border-ink/10 pt-8">
          <legend className="mb-5 flex items-center gap-3 font-display text-2xl font-extrabold">
            <span className="grid size-8 place-items-center rounded-md border-2 border-ink bg-river font-ledger text-xs text-shell">03</span>
            Evidence for review
          </legend>
          <p className="copy -mt-2 text-sm">Upload one photo or supporting document, or paste a shareable link. Evidence stays private to leadership.</p>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="flex min-h-36 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-ink/35 bg-paper p-5 text-center transition-colors hover:border-ink hover:bg-volt/20">
                <FileArrowUp className="size-8 text-signal" weight="bold" />
                <span className="mt-3 text-sm font-bold">{fileName || "Choose evidence file"}</span>
                <span className="mt-1 text-xs text-ink/55">JPG, PNG, WebP, HEIC, or PDF. 5 MB max.</span>
                <input
                  name="evidenceFile"
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/heic,image/heif,application/pdf"
                  className="sr-only"
                  onChange={(event) => setFileName(event.target.files?.[0]?.name || "")}
                  aria-invalid={Boolean(errors.evidenceFile)}
                  aria-describedby={errors.evidenceFile ? "evidenceFile-error" : undefined}
                />
              </label>
              <ErrorText name="evidenceFile" errors={errors} />
            </div>
            <label className={labelClass}>
              Or paste an evidence link
              <input name="evidenceUrl" type="url" inputMode="url" placeholder="https://drive.google.com/..." className={inputClass} aria-invalid={Boolean(errors.evidenceUrl)} aria-describedby={errors.evidenceUrl ? "evidenceUrl-error" : undefined} />
              <span className="mt-2 block text-xs font-normal leading-relaxed text-ink/55">Make sure leadership can open the link.</span>
              <ErrorText name="evidenceUrl" errors={errors} />
            </label>
          </div>
        </fieldset>

        <div className="border-t-2 border-ink/10 pt-8">
          <label className="flex cursor-pointer items-start gap-3 rounded-lg border-2 border-ink bg-paper p-4 text-sm font-semibold">
            <input type="checkbox" name="accuracyConfirmed" className="mt-0.5 size-5 shrink-0 accent-signal" disabled={submitting} aria-invalid={Boolean(errors.accuracyConfirmed)} aria-describedby={errors.accuracyConfirmed ? "accuracyConfirmed-error" : undefined} />
            <span>I confirm the activity details and service time are accurate. I understand the hours remain pending until a First Step leader reviews them.</span>
          </label>
          <ErrorText name="accuracyConfirmed" errors={errors} />

          <label className="absolute -left-[10000px]" aria-hidden="true">
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>

          <button type="submit" disabled={submitting} className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border-2 border-ink bg-signal px-6 py-3 text-sm font-bold uppercase tracking-wider text-ink shadow-[4px_4px_0_0_var(--color-ink)] transition-[transform,box-shadow,opacity] duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--color-ink)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none disabled:cursor-not-allowed disabled:opacity-65 md:w-auto">
            {submitting ? <><CircleNotch className="size-5 animate-spin" weight="bold" /> Saving report</> : "Submit for approval"}
          </button>
        </div>
      </div>
    </form>
  );
}
