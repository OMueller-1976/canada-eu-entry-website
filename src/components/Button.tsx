import Link from "next/link";
import { ReactNode } from "react";

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-sm bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-700 focus-visible:outline-eublue"
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-sm border-2 border-eublue px-7 py-3.5 text-sm font-semibold text-eublue transition-colors hover:bg-eublue hover:text-white"
    >
      {children}
    </Link>
  );
}
