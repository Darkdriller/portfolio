"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "./Section";
import { Prompt } from "./Prompt";
import { EXPERIENCE, PHANTOM_CMD } from "@/lib/constants";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  let lineIdx = 0;
  const line = (content: React.ReactNode, key: string) => {
    const i = lineIdx++;
    return (
      <div
        key={key}
        className={visible ? "animate-fadeUp" : "opacity-0"}
        style={visible ? { animationDelay: `${i * 120}ms` } : undefined}
      >
        {content}
      </div>
    );
  };

  return (
    <Section id="experience" phantomCmd={PHANTOM_CMD.experience}>
      <div className="text-[12px] sm:text-[13px] mb-2">
        <Prompt cmd="tail -f experience.log" />
      </div>
      <div ref={ref} className="text-[11px] sm:text-[12px] leading-[1.8]">
        {EXPERIENCE.map((e) => (
          <div key={e.company} className="mb-4">
            {line(
              <div>
                <span className="text-term-muted">[{e.span}]</span>{" "}
                <span className="text-term-accent">INFO</span>{" "}
                <span className="text-white">{e.company}</span>{" "}
                <span className="text-term-muted">·</span>{" "}
                <span className="text-term-fg">{e.role}</span>
              </div>,
              `${e.company}-h`,
            )}
            {e.bullets.map((b, j) =>
              line(
                <div className="pl-6 sm:pl-8 text-term-fg">
                  <span className="text-term-muted">→</span> {b}
                </div>,
                `${e.company}-b${j}`,
              ),
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
