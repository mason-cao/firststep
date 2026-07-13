type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  size?: "md" | "lg";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  size = "lg",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={`${size === "lg" ? "display-lg" : "heading-md"} mt-4`}>{title}</h2>
      {lead && <p className="copy-lg mt-5 max-w-2xl">{lead}</p>}
    </div>
  );
}
