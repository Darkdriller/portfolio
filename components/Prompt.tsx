/** Stylised prompt: dhruv@portfolio:~$ <cmd> */
export function Prompt({ cmd, host = "dhruv@portfolio", path = "~" }: { cmd: string; host?: string; path?: string }) {
  return (
    <span className="font-mono">
      <span className="text-term-accent">{host}</span>
      <span className="text-term-muted">:</span>
      <span className="text-term-blue">{path}</span>
      <span className="text-term-muted">$ </span>
      <span className="text-white">{cmd}</span>
    </span>
  );
}
