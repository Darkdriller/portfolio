"use client";

import { useState } from "react";
import { Section } from "./Section";
import { Prompt } from "./Prompt";
import { PHANTOM_CMD, TECH } from "@/lib/constants";

export function Tech() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <Section id="tech" phantomCmd={PHANTOM_CMD.tech}>
      <div className="text-[12px] sm:text-[13px] mb-2">
        <Prompt cmd="cat tech_stack.json | jq" />
      </div>
      <div className="rounded-[4px] border border-term-border bg-term-card p-4 text-[12px] leading-[1.7] overflow-x-auto">
        <div className="text-term-muted">{"{"}</div>
        {Object.entries(TECH).map(([k, v], i, arr) => {
          const dim = hovered && hovered !== k;
          return (
            <div
              key={k}
              className="pl-4 transition-opacity duration-150"
              style={{ opacity: dim ? 0.4 : 1 }}
              onMouseEnter={() => setHovered(k)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="text-term-muted">{'"'}</span>
              <span className="text-term-blue">{k}</span>
              <span className="text-term-muted">{'": '}</span>
              <span className="text-term-muted">[</span>
              {v.map((s, j) => (
                <span key={s}>
                  <span className="text-term-muted">{'"'}</span>
                  <span
                    className="text-term-blue2 transition-[text-shadow] duration-150"
                    style={{ textShadow: hovered === k ? "0 0 8px #79c0ff" : undefined }}
                  >
                    {s}
                  </span>
                  <span className="text-term-muted">{'"'}</span>
                  {j < v.length - 1 && <span className="text-term-muted">{", "}</span>}
                </span>
              ))}
              <span className="text-term-muted">]{i < arr.length - 1 ? "," : ""}</span>
            </div>
          );
        })}
        <div className="text-term-muted">{"}"}</div>
      </div>
    </Section>
  );
}
