import type { Project } from "@/lib/constants";

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="w-full text-left border border-term-border rounded-[2px] p-3 hover:border-term-accent transition-colors grid grid-cols-[1fr_auto] sm:grid-cols-[200px_1fr_100px_80px] gap-3 items-center"
    >
      <span className="text-term-blue truncate">{project.name}</span>
      <span className="hidden sm:block text-term-fg truncate">{project.desc}</span>
      <span className="hidden sm:block text-term-muted">{project.loc}</span>
      <span className="text-term-accent text-right">[ open → ]</span>
      <span className="sm:hidden col-span-2 text-term-fg text-[11px] -mt-1">{project.desc}</span>
    </button>
  );
}
