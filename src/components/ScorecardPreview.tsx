export default function ScorecardPreview({
  categories,
  ratings,
}: {
  categories: string[];
  ratings: string[];
}) {
  // Deterministic demo pattern — purely illustrative, no real assessment.
  const demoRatings = [1, 0, 2, 1, 3, 2, 0, 1, 2, 3];
  const ratingStyles: Record<number, string> = {
    0: "bg-eublue text-white",
    1: "bg-eublue/20 text-navy",
    2: "bg-accent/15 text-navy",
    3: "border border-dashed border-navy/25 text-graphite/70",
  };

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {categories.map((cat, i) => {
        const ratingIndex = demoRatings[i % demoRatings.length];
        return (
          <div
            key={cat}
            className="flex items-center justify-between gap-4 border border-navy/10 bg-white p-4"
          >
            <span className="text-sm font-medium text-navy">{cat}</span>
            <span
              className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${ratingStyles[ratingIndex]}`}
            >
              {ratings[ratingIndex]}
            </span>
          </div>
        );
      })}
    </div>
  );
}
