"use client";

import { Prompt } from "./Prompt";
import { scrollToWithPhantom } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";

export function Nav() {
  return (
    <section id="nav" className="mt-10">
      <div className="text-[12px] sm:text-[13px] mb-2">
        <Prompt cmd="ls --commands" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2 text-[11px] sm:text-[12px]">
        {NAV_ITEMS.map((it) =>
          it.href ? (
            <a
              key={it.label}
              href={it.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-term-blue hover:underline"
            >
              {it.label}
            </a>
          ) : (
            <button
              key={it.label}
              onClick={() => scrollToWithPhantom(it.target)}
              className="text-term-blue hover:underline text-left"
            >
              {it.label}
            </button>
          ),
        )}
      </div>
    </section>
  );
}
