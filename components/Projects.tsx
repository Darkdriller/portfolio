"use client";

import { useState } from "react";
import { Section } from "./Section";
import { Prompt } from "./Prompt";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { PHANTOM_CMD, PROJECTS, type Project } from "@/lib/constants";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section id="projects" phantomCmd={PHANTOM_CMD.projects}>
      <div className="text-[12px] sm:text-[13px] mb-2">
        <Prompt cmd="ls projects/" />
      </div>
      <div className="space-y-3 text-[11px] sm:text-[12px]">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.slug} project={p} onOpen={() => setActive(p)} />
        ))}
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </Section>
  );
}
