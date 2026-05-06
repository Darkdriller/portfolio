import { Section } from "./Section";
import { Prompt } from "./Prompt";
import { PHANTOM_CMD, PUBS } from "@/lib/constants";

export function Publications() {
  return (
    <Section id="publications" phantomCmd={PHANTOM_CMD.publications}>
      <div className="text-[12px] sm:text-[13px] mb-2">
        <Prompt cmd="cat publications.bib" />
      </div>
      <div className="rounded-[4px] border border-term-border bg-term-card p-4 text-[12px] leading-[1.7] overflow-x-auto">
        {PUBS.map((p) => (
          <div key={p.key} className="mb-4 last:mb-0">
            <div>
              <span className="text-term-muted">@</span>
              <span className="text-term-purple">{p.type}</span>
              <span className="text-term-muted">{"{"}</span>
              <span className="text-term-blue">{p.key}</span>
              <span className="text-term-muted">,</span>
            </div>
            <div className="pl-4 sm:pl-6">
              <span className="text-term-muted">title </span>
              <span className="text-term-muted">= </span>
              <span className="text-term-blue2">&quot;{p.title}&quot;</span>
              <span className="text-term-muted">,</span>
            </div>
            <div className="pl-4 sm:pl-6">
              <span className="text-term-muted">author </span>
              <span className="text-term-muted">= </span>
              <span className="text-term-blue2">&quot;{p.authors}&quot;</span>
              <span className="text-term-muted">,</span>
            </div>
            <div className="pl-4 sm:pl-6">
              <span className="text-term-muted">venue </span>
              <span className="text-term-muted">= </span>
              <span className="text-term-blue2">&quot;{p.venue}&quot;</span>
              <span className="text-term-muted">,</span>
            </div>
            <div className="pl-4 sm:pl-6">
              <span className="text-term-muted">year </span>
              <span className="text-term-muted">= </span>
              <span className="text-term-blue2">{p.year}</span>
              {p.meta && (
                <>
                  <span className="text-term-muted">,  </span>
                  <span className="text-term-muted"># {p.meta}</span>
                </>
              )}
            </div>
            <div className="pl-4 sm:pl-6">
              <span className="text-term-muted">url </span>
              <span className="text-term-muted">= </span>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-term-accent hover:underline break-all"
              >
                [ open → ]
              </a>
            </div>
            <div className="text-term-muted">{"}"}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
