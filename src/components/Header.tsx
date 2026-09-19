"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, PRIMARY_CTA, SECONDARY_CTA, SITE } from "@/lib/site";
import Container from "./Container";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-offwhite/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex items-center -space-x-1" aria-hidden="true">
            <Image
              src="/canada-flag.png"
              alt=""
              width={30}
              height={16}
              className="h-4 w-auto rounded-[1px] ring-1 ring-white"
            />
            <Image
              src="/eu-flag.png"
              alt=""
              width={30}
              height={19}
              className="h-4 w-auto rounded-[1px] ring-1 ring-white"
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-2xl font-bold uppercase tracking-tight text-navy">
              {SITE.brand}
            </span>
            <span className="text-xs font-medium text-accent">{SITE.byline}</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-graphite transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={SECONDARY_CTA.href}
            className="text-sm font-medium text-navy underline-offset-4 hover:underline"
          >
            {SECONDARY_CTA.label}
          </Link>
          <Link
            href={PRIMARY_CTA.href}
            className="inline-flex items-center justify-center rounded-sm bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-700"
          >
            {PRIMARY_CTA.label}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-navy/20 p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="#0B1E33" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        </button>
      </Container>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-navy/10 bg-offwhite lg:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-navy"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-3">
              <Link
                href={SECONDARY_CTA.href}
                className="text-sm font-medium text-navy underline-offset-4 hover:underline"
                onClick={() => setOpen(false)}
              >
                {SECONDARY_CTA.label}
              </Link>
              <Link
                href={PRIMARY_CTA.href}
                className="inline-flex items-center justify-center rounded-sm bg-accent px-5 py-3 text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                {PRIMARY_CTA.label}
              </Link>
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
