import Link from "next/link";
import type { Industry } from "@/content/industries";

export default function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <Link
      href={`/industries/${industry.slug}`}
      className="group flex h-full flex-col border border-navy/15 bg-white p-7 transition-colors hover:border-navy"
    >
      <h3 className="font-serif text-lg font-semibold text-navy">{industry.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-graphite">{industry.whyGermany}</p>
      <span className="mt-4 inline-flex items-center text-sm font-medium text-eublue group-hover:underline">
        Explore sector notes →
      </span>
    </Link>
  );
}
