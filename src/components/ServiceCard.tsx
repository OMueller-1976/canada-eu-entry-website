import Link from "next/link";
import type { Service } from "@/content/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group flex h-full flex-col border p-7 transition-colors ${
        service.availableOnRequest
          ? "border-dashed border-navy/25 bg-white/60 hover:border-navy/50"
          : "border-navy/15 bg-white hover:border-navy"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-bold uppercase tracking-wider text-eublue">{service.stage}</p>
        {service.availableOnRequest && (
          <span className="rounded-full bg-navy/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-graphite/70">
            Available on request
          </span>
        )}
      </div>
      <h3 className="mt-2 font-serif text-lg font-bold text-navy">{service.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-graphite">{service.summary}</p>
      <p className="mt-4 text-sm font-semibold text-navy">{service.priceLabel}</p>
      <span className="mt-4 inline-flex items-center text-sm font-medium text-accent group-hover:underline">
        View program details →
      </span>
    </Link>
  );
}
