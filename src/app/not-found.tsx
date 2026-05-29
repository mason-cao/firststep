import { PageHero } from "@/components/ui/PageHero";
import { PrimaryLink } from "@/components/ui/PrimaryLink";

export default function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title="This page is not in the current impact record."
      description="The site has been reorganized into a cleaner structure. Start from the homepage or explore the impact archive."
    >
      <div className="mt-10 flex flex-wrap gap-3">
        <PrimaryLink href="/">Go Home</PrimaryLink>
        <PrimaryLink href="/impact" variant="outline">
          Explore Impact
        </PrimaryLink>
      </div>
    </PageHero>
  );
}
