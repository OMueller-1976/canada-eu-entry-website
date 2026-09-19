export type FaqItem = { question: string; answer: string };

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-navy/10 border-t border-b border-navy/10">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-navy">
            <span>{item.question}</span>
            <span
              aria-hidden="true"
              className="ml-2 shrink-0 text-xl text-eublue transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-graphite">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
