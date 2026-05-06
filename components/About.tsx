import { Section } from "./Section";
import { Prompt } from "./Prompt";
import { ABOUT_INTRO, EDUCATION, PHANTOM_CMD, TILES } from "@/lib/constants";

export function About() {
  return (
    <Section id="about" phantomCmd={PHANTOM_CMD.about}>
      <div className="text-[12px] sm:text-[13px] mb-2">
        <Prompt cmd="cat about.md" />
      </div>
      <div className="rounded-[4px] border border-term-border bg-term-card p-4">
        <div className="text-term-purple text-[14px] mb-2">{"# INTRODUCTION"}</div>
        <p className="text-[12px] sm:text-[13px] leading-[1.7] text-term-fg">{ABOUT_INTRO}</p>

        <div className="text-term-purple text-[14px] mt-5 mb-2">{"## EDUCATION"}</div>
        <div className="text-[12px] sm:text-[13px] leading-[1.7] text-term-fg space-y-2">
          {EDUCATION.map((e) => (
            <div key={e.span}>
              <div>
                <span className="text-term-muted">[{e.span}]</span>{" "}
                <span className="text-white">{e.degree}</span>{" "}
                <span className="text-term-muted">·</span>{" "}
                <span className="text-term-blue">{e.school}</span>
              </div>
              <div className="pl-6 sm:pl-8 text-term-muted">→ grade {e.grade}</div>
            </div>
          ))}
        </div>

        <div className="text-term-purple text-[14px] mt-5 mb-2">{"## STACK"}</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {TILES.map((t) => (
            <div
              key={t.label}
              className="border border-dashed border-term-border2 rounded-[2px] p-3 text-center text-term-accent text-[11px]"
            >
              <div className="text-[14px] mb-1">[▣]</div>
              <div>{t.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
