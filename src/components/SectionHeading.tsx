export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-wider text-accent">{eyebrow}</p>
      )}
      <h2 className="font-serif text-3xl font-bold leading-tight text-navy md:text-4xl">
        {title}
      </h2>
      {lede && <p className="mt-4 text-lg leading-relaxed text-graphite">{lede}</p>}
    </div>
  );
}
