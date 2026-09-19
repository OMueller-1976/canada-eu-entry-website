import type { ComparisonRow } from "@/content/signal-sprint";

export default function ComparisonTable({ rows }: { rows: ComparisonRow[] }) {
  const cols = [
    { key: "signalSprint", label: "Germany Market Signal Sprint", price: "€4,900" },
    { key: "euEntryAudit", label: "EU Entry Audit", price: "€7,500" },
    { key: "validationSprint", label: "Germany Market Validation Sprint", price: "€35,000" },
  ] as const;

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-left text-sm">
        <thead>
          <tr>
            <th className="w-40 border-b-2 border-navy/15 pb-4 pr-4 align-bottom text-xs font-bold uppercase tracking-wider text-graphite/60">
              &nbsp;
            </th>
            {cols.map((col) => (
              <th
                key={col.key}
                className="border-b-2 border-navy/15 px-4 pb-4 align-bottom font-serif text-base font-bold text-navy"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-navy/10 align-top">
              <th
                scope="row"
                className="w-40 py-4 pr-4 text-xs font-bold uppercase tracking-wider text-graphite/70"
              >
                {row.label}
              </th>
              {cols.map((col) => (
                <td key={col.key} className="px-4 py-4 leading-relaxed text-graphite">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
