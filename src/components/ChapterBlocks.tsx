import type { Block } from "@/content/first-steps";

export default function ChapterBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-onetitel">
      {blocks.map((block, i) => {
        if (block.type === "p") return <p key={i}>{block.text}</p>;
        if (block.type === "h3") return <h3 key={i}>{block.text}</h3>;
        if (block.type === "note")
          return (
            <p key={i} className="border-l-2 border-eublue pl-4 text-sm italic text-graphite/80">
              {block.text}
            </p>
          );
        return (
          <ul key={i}>
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}
