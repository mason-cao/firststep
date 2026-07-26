import {
  ArrowSquareOut,
  CheckCircle,
  ClockCountdown,
  EnvelopeSimple,
  File,
  SignOut,
  UserPlus,
  WarningCircle,
  XCircle,
} from "@phosphor-icons/react/dist/ssr";
import { redirect } from "next/navigation";
import { getLeadershipSession } from "@/lib/auth";
import {
  listActivitySubmissions,
  listMemberApplications,
  type ActivitySubmissionRecord,
  type MemberApplicationRecord,
} from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Leadership Review Desk",
  description: "Private member and service-hour review workspace for First Step Team leadership.",
  robots: { index: false, follow: false },
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeZone: "America/New_York",
});

function formatDate(value: string) {
  return dateFormatter.format(new Date(value));
}

function formatMinutes(total: number) {
  const hours = Math.floor(total / 60);
  const minutes = total % 60;
  if (!hours) return `${minutes} min`;
  return minutes ? `${hours} hr ${minutes} min` : `${hours} hr`;
}

function ActivityStatus({ status }: { status: ActivitySubmissionRecord["status"] }) {
  const classes = {
    pending: "border-ink/20 bg-volt/55 text-ink",
    approved: "border-river/35 bg-sky text-river",
    rejected: "border-signal/35 bg-signal/10 text-signal",
  }[status];
  return <span className={`mono-tag rounded-md border-2 px-2.5 py-1 ${classes}`}>{status}</span>;
}

function MemberStatus({ status }: { status: MemberApplicationRecord["status"] }) {
  const classes = {
    new: "border-ink/20 bg-volt/55 text-ink",
    contacted: "border-river/35 bg-sky text-river",
    active: "border-ink/25 bg-river text-shell",
    archived: "border-ink/15 bg-paper text-ink/55",
  }[status];
  return <span className={`mono-tag rounded-md border-2 px-2.5 py-1 ${classes}`}>{status}</span>;
}

function ActivityReview({ report }: { report: ActivitySubmissionRecord }) {
  return (
    <details id={report.id} className="group border-b-2 border-ink/10 last:border-b-0 open:bg-sky/20">
      <summary className="grid cursor-pointer list-none gap-3 px-5 py-5 marker:content-none md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)_auto] md:items-center md:px-6">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2.5">
            <ActivityStatus status={report.status} />
            <span className="mono-data text-ink/50">{report.id}</span>
          </div>
          <h3 className="mt-2 font-display text-xl font-bold leading-tight">{report.activityName}</h3>
          <p className="mt-1 text-sm text-ink/60">{report.memberName} · {formatMinutes(report.totalMinutes)}</p>
        </div>
        <div className="text-sm text-ink/65">
          <p className="font-bold text-ink">{formatDate(`${report.activityDate}T12:00:00`)}</p>
          <p className="mt-1 truncate">{report.location}</p>
        </div>
        <span className="mono-tag text-signal group-open:hidden">Review</span>
        <span className="mono-tag hidden text-signal group-open:block">Close</span>
      </summary>

      <div className="grid gap-7 border-t-2 border-ink/10 px-5 py-6 md:px-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="grid gap-6">
          <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
            <div><p className="mono-tag text-ink/45">Member email</p><a className="mt-1 inline-flex items-center gap-1.5 font-semibold text-river hover:underline" href={`mailto:${report.memberEmail}`}><EnvelopeSimple className="size-4" weight="bold" />{report.memberEmail}</a></div>
            <div><p className="mono-tag text-ink/45">Project</p><p className="mt-1 font-semibold">{report.projectType}</p></div>
            <div><p className="mono-tag text-ink/45">Sponsor / host</p><p className="mt-1 font-semibold">{report.sponsor}</p></div>
            <div><p className="mono-tag text-ink/45">Submitted</p><p className="mt-1 font-semibold">{formatDate(report.createdAt)}</p></div>
          </div>
          <div>
            <p className="mono-tag text-ink/45">Work completed</p>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-ink/75">{report.description}</p>
          </div>
          {report.otherMembers && (
            <div><p className="mono-tag text-ink/45">Other members listed</p><p className="mt-2 whitespace-pre-wrap text-sm text-ink/75">{report.otherMembers}</p></div>
          )}
          <div className="flex flex-wrap gap-3">
            {report.evidenceFileName && (
              <a href={`/api/leadership/evidence/${report.id}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border-2 border-ink bg-shell px-3.5 py-2 text-sm font-bold shadow-[2px_2px_0_0_var(--color-ink)]">
                <File className="size-4 text-signal" weight="bold" /> Open {report.evidenceFileName}
              </a>
            )}
            {report.evidenceUrl && (
              <a href={report.evidenceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border-2 border-ink bg-shell px-3.5 py-2 text-sm font-bold shadow-[2px_2px_0_0_var(--color-ink)]">
                <ArrowSquareOut className="size-4 text-signal" weight="bold" /> Open evidence link
              </a>
            )}
          </div>
          {report.reviewerEmail && (
            <div className="rounded-lg border-2 border-ink/12 bg-paper p-4 text-sm">
              <p className="font-bold">Last reviewed by {report.reviewerEmail}</p>
              {report.reviewedAt && <p className="mt-1 text-ink/55">{formatDate(report.reviewedAt)}</p>}
              {report.reviewNote && <p className="mt-2 whitespace-pre-wrap text-ink/70">{report.reviewNote}</p>}
            </div>
          )}
        </div>

        <form method="post" action={`/api/leadership/activities/${report.id}/review`} className="h-max rounded-lg border-2 border-ink bg-paper p-5">
          <label className="block text-sm font-bold">
            Review note
            <textarea name="reviewNote" rows={5} defaultValue={report.reviewNote || ""} placeholder="Required when rejecting. Optional when approving." className="mt-2 w-full rounded-md border-2 border-ink/25 bg-shell px-3.5 py-3 text-sm outline-none focus:border-signal" />
          </label>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <button name="status" value="approved" className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-ink bg-river px-4 py-2.5 text-sm font-bold text-shell shadow-[3px_3px_0_0_var(--color-ink)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">
              <CheckCircle className="size-4" weight="bold" /> Approve hours
            </button>
            <button name="status" value="rejected" className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-ink bg-shell px-4 py-2.5 text-sm font-bold text-signal shadow-[3px_3px_0_0_var(--color-ink)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">
              <XCircle className="size-4" weight="bold" /> Reject
            </button>
          </div>
        </form>
      </div>
    </details>
  );
}

function MemberReview({ application }: { application: MemberApplicationRecord }) {
  const email = application.studentEmail || application.parentGuardianEmail;
  return (
    <details id={application.id} className="group border-b-2 border-ink/10 last:border-b-0 open:bg-volt/10">
      <summary className="grid cursor-pointer list-none gap-3 px-5 py-5 marker:content-none md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)_auto] md:items-center md:px-6">
        <div>
          <div className="flex flex-wrap items-center gap-2.5"><MemberStatus status={application.status} /><span className="mono-data text-ink/50">{application.id}</span></div>
          <h3 className="mt-2 font-display text-xl font-bold">{application.fullName}</h3>
          {application.preferredName && <p className="mt-1 text-sm text-ink/60">Goes by {application.preferredName}</p>}
        </div>
        <div className="text-sm"><p className="font-bold">{application.gradeLevel}</p><p className="mt-1 text-ink/60">{application.school} · {application.city}</p></div>
        <span className="mono-tag text-signal group-open:hidden">Review</span>
        <span className="mono-tag hidden text-signal group-open:block">Close</span>
      </summary>

      <div className="grid gap-7 border-t-2 border-ink/10 px-5 py-6 md:px-6 lg:grid-cols-[1fr_0.75fr]">
        <div className="grid gap-6">
          <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
            <div><p className="mono-tag text-ink/45">Student email</p><p className="mt-1 break-all font-semibold">{application.studentEmail || "Not provided"}</p></div>
            <div><p className="mono-tag text-ink/45">Phone</p><a href={`tel:${application.phone}`} className="mt-1 block font-semibold text-river hover:underline">{application.phone}</a></div>
            <div><p className="mono-tag text-ink/45">Parent / guardian</p><p className="mt-1 font-semibold">{application.parentGuardianName || "Not provided"}</p></div>
            <div><p className="mono-tag text-ink/45">Parent email</p><p className="mt-1 break-all font-semibold">{application.parentGuardianEmail || "Not provided"}</p></div>
            <div><p className="mono-tag text-ink/45">Graduation year</p><p className="mt-1 font-semibold">{application.graduationYear || "Not provided"}</p></div>
            <div><p className="mono-tag text-ink/45">Contact preference</p><p className="mt-1 font-semibold">{application.contactPreference}</p></div>
          </div>
          <div><p className="mono-tag text-ink/45">Interests</p><div className="mt-2 flex flex-wrap gap-2">{application.interests.map((interest) => <span key={interest} className="rounded-md border border-ink/15 bg-sky px-2.5 py-1 text-xs font-semibold">{interest}</span>)}</div></div>
          <div><p className="mono-tag text-ink/45">Why they want to join</p><p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-ink/75">{application.motivation}</p></div>
          <div><p className="mono-tag text-ink/45">How they heard about First Step</p><p className="mt-2 text-sm text-ink/75">{application.heardAboutUs}</p></div>
          <p className="text-xs text-ink/45">Submitted {formatDate(application.createdAt)}{application.reviewedBy ? ` · Last updated by ${application.reviewedBy}` : ""}</p>
        </div>

        <div className="h-max rounded-lg border-2 border-ink bg-paper p-5">
          {email && (
            <a href={`mailto:${email}`} className="inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-ink bg-river px-4 py-2.5 text-sm font-bold text-shell shadow-[3px_3px_0_0_var(--color-ink)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">
              <EnvelopeSimple className="size-4" weight="bold" /> Email applicant
            </a>
          )}
          <form method="post" action={`/api/leadership/members/${application.id}/status`} className="mt-5">
            <label className="block text-sm font-bold">
              Application status
              <select name="status" defaultValue={application.status} className="mt-2 w-full rounded-md border-2 border-ink/25 bg-shell px-3.5 py-3 text-sm outline-none focus:border-signal">
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="active">Active member</option>
                <option value="archived">Archived</option>
              </select>
            </label>
            <button className="mt-3 w-full rounded-md border-2 border-ink bg-shell px-4 py-2.5 text-sm font-bold shadow-[3px_3px_0_0_var(--color-ink)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">Save status</button>
          </form>
        </div>
      </div>
    </details>
  );
}

export default async function LeadershipPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; reviewed?: string; memberUpdated?: string }>;
}) {
  const session = await getLeadershipSession();
  if (!session) redirect("/leadership/login");

  const [applications, reports] = await Promise.all([
    listMemberApplications(),
    listActivitySubmissions(),
  ]);
  const params = await searchParams;
  const newMembers = applications.filter((item) => item.status === "new").length;
  const pendingHours = reports.filter((item) => item.status === "pending").length;
  const approvedMinutes = reports
    .filter((item) => item.status === "approved")
    .reduce((total, item) => total + item.totalMinutes, 0);

  return (
    <section className="min-h-screen bg-paper px-5 pb-24 pt-28 md:pt-32">
      <div className="page-shell">
        <div className="flex flex-col gap-6 border-b-2 border-ink pb-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Private leadership workspace</p>
            <h1 className="display-lg mt-4">Review desk</h1>
            <p className="mt-3 text-sm text-ink/60">Signed in as {session.email}</p>
          </div>
          <form method="post" action="/api/leadership/logout">
            <button className="inline-flex items-center gap-2 rounded-md border-2 border-ink bg-shell px-4 py-2.5 text-sm font-bold shadow-[3px_3px_0_0_var(--color-ink)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">
              <SignOut className="size-4" weight="bold" /> Sign out
            </button>
          </form>
        </div>

        {(params.error || params.reviewed || params.memberUpdated) && (
          <div className={`mt-6 flex items-start gap-3 rounded-lg border-2 p-4 text-sm font-semibold ${params.error ? "border-signal bg-signal/10" : "border-river bg-sky"}`} role="status">
            {params.error ? <WarningCircle className="mt-0.5 size-5 shrink-0 text-signal" weight="fill" /> : <CheckCircle className="mt-0.5 size-5 shrink-0 text-river" weight="fill" />}
            {params.error === "rejection-note" ? "Add a review note before rejecting an hours report." : params.reviewed ? `${params.reviewed} was reviewed.` : `${params.memberUpdated} was updated.`}
          </div>
        )}

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <a href="#hours" className="rounded-lg border-2 border-ink bg-volt/45 p-5 shadow-[4px_4px_0_0_var(--color-ink)]">
            <ClockCountdown className="size-6" weight="bold" /><span className="mt-4 block font-display text-4xl font-extrabold">{pendingHours}</span><span className="mono-tag mt-1 block text-ink/55">Hours reports pending</span>
          </a>
          <a href="#members" className="rounded-lg border-2 border-ink bg-sky p-5 shadow-[4px_4px_0_0_var(--color-ink)]">
            <UserPlus className="size-6" weight="bold" /><span className="mt-4 block font-display text-4xl font-extrabold">{newMembers}</span><span className="mono-tag mt-1 block text-ink/55">New applications</span>
          </a>
          <div className="rounded-lg border-2 border-ink bg-shell p-5 shadow-[4px_4px_0_0_var(--color-ink)]">
            <CheckCircle className="size-6 text-river" weight="bold" /><span className="mt-4 block font-display text-4xl font-extrabold">{formatMinutes(approvedMinutes)}</span><span className="mono-tag mt-1 block text-ink/55">Approved in this system</span>
          </div>
        </div>

        <section id="hours" className="scroll-mt-28 pt-16">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div><p className="mono-tag text-signal">Approval queue</p><h2 className="heading-md mt-2">Activity & hours reports</h2></div>
            <span className="mono-data text-ink/50">{reports.length} total</span>
          </div>
          <div className="overflow-hidden rounded-xl border-2 border-ink bg-shell shadow-[5px_5px_0_0_var(--color-ink)]">
            {reports.length ? reports.map((report) => <ActivityReview key={report.id} report={report} />) : (
              <div className="p-10 text-center"><ClockCountdown className="mx-auto size-9 text-ink/35" weight="bold" /><h3 className="heading-sm mt-4">No hours reports yet</h3><p className="copy mt-2 text-sm">Member submissions will appear here for review.</p></div>
            )}
          </div>
        </section>

        <section id="members" className="scroll-mt-28 pt-16">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div><p className="mono-tag text-signal">Member intake</p><h2 className="heading-md mt-2">Applications</h2></div>
            <span className="mono-data text-ink/50">{applications.length} total</span>
          </div>
          <div className="overflow-hidden rounded-xl border-2 border-ink bg-shell shadow-[5px_5px_0_0_var(--color-ink)]">
            {applications.length ? applications.map((application) => <MemberReview key={application.id} application={application} />) : (
              <div className="p-10 text-center"><UserPlus className="mx-auto size-9 text-ink/35" weight="bold" /><h3 className="heading-sm mt-4">No applications yet</h3><p className="copy mt-2 text-sm">New signup forms will appear here.</p></div>
            )}
          </div>
        </section>
      </div>
    </section>
  );
}
