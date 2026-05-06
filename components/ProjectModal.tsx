"use client";

import { useEffect } from "react";
import type { Project } from "@/lib/constants";

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 flex items-end sm:items-center justify-center p-0 sm:p-6 animate-fadeUp"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:max-w-[680px] bg-term-tab border border-term-border rounded-t-lg sm:rounded-lg overflow-hidden"
      >
        <div className="flex items-center justify-between px-4 py-2 border-b border-term-border bg-term-tab text-[11px] text-term-muted">
          <span>cat projects/{project.slug}/README.md</span>
          <button onClick={onClose} className="text-term-muted hover:text-white">
            × close
          </button>
        </div>
        <div className="p-4 sm:p-5 text-[12px] sm:text-[13px] leading-[1.7] bg-term-card">
          <div className="text-term-purple text-[14px] mb-2"># {project.name}</div>
          <p className="text-term-fg mb-3">{project.desc}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((t) => (
              <span key={t} className="text-term-accent border border-term-accent/40 px-2 py-[2px] text-[11px] rounded-[2px]">
                [{t}]
              </span>
            ))}
          </div>
          <p className="text-term-fg mb-4">{project.long}</p>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-term-accent border border-term-accent px-3 py-1 inline-block text-[12px] hover:bg-term-accent/10"
          >
            [ git clone → ]
          </a>
        </div>
      </div>
    </div>
  );
}
