"use client";

import { useEffect, useState } from "react";

function bootLine() {
  const d = new Date();
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const m = months[d.getMonth()];
  const day = String(d.getDate()).padStart(2, " ");
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `Last login: ${m} ${day} ${hh}:${mm} on ttys001`;
}

export function Shell({ children }: { children: React.ReactNode }) {
  const [boot, setBoot] = useState<string>("Last login: Apr 26 14:22 on ttys001");
  useEffect(() => setBoot(bootLine()), []);

  return (
    <div className="min-h-screen bg-term-bg flex justify-center px-2 py-2 sm:px-6 sm:py-6">
      <div className="w-full max-w-[1200px] flex flex-col rounded-lg sm:rounded-lg border border-[#1e293b] overflow-hidden bg-term-bg shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
        {/* sticky chrome */}
        <div className="sticky top-0 z-20 bg-term-tab border-b border-term-border px-4 py-[10px] flex items-center">
          {/* traffic lights — desktop only */}
          <div className="hidden sm:flex items-center gap-[6px]">
            <span className="block w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="block w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="block w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex-1 text-center text-[11px] text-term-muted select-none">
            <span className="hidden sm:inline">~/dhruvjyoti — zsh — 120×40</span>
            <span className="sm:hidden">~/dhruvjyoti $</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[10px] text-term-muted">
            <span className="inline-block w-[6px] h-[6px] rounded-full bg-term-accent animate-pulseDot" />
            <span>connected</span>
          </div>
        </div>

        {/* body */}
        <div className="bg-term-bg text-term-fg leading-[1.7] text-[13px] px-[18px] py-[18px] sm:px-12 sm:py-8 overflow-x-hidden">
          <div className="text-term-muted text-[12px] sm:text-[13px] mb-4">{boot}</div>
          {children}
        </div>
      </div>
    </div>
  );
}
