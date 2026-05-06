"use client";

import { useEffect, useState } from "react";
import { Prompt } from "./Prompt";
import { prefersReducedMotion, useTypewriter } from "@/lib/utils";
import { HERO } from "@/lib/constants";

export function Hero() {
  const [skip, setSkip] = useState(false);
  const [phase, setPhase] = useState<0 | 1 | 2 | 3 | 4>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (prefersReducedMotion() || sessionStorage.getItem("heroAnimDone") === "1") {
      setSkip(true);
      setPhase(4);
      return;
    }
    const onAny = () => setSkip(true);
    window.addEventListener("keydown", onAny, { once: true });
    window.addEventListener("click", onAny, { once: true });
    window.addEventListener("wheel", onAny, { once: true, passive: true });
    window.addEventListener("touchstart", onAny, { once: true, passive: true });
    return () => {
      window.removeEventListener("keydown", onAny);
      window.removeEventListener("click", onAny);
      window.removeEventListener("wheel", onAny);
      window.removeEventListener("touchstart", onAny);
    };
  }, []);

  useEffect(() => {
    if (phase === 4) sessionStorage.setItem("heroAnimDone", "1");
  }, [phase]);

  const cmd = useTypewriter("whoami", 30, phase === 0, skip);
  useEffect(() => {
    if (cmd.done && phase === 0) {
      const t = window.setTimeout(() => setPhase(1), skip ? 0 : 200);
      return () => window.clearTimeout(t);
    }
  }, [cmd.done, phase, skip]);

  const name = useTypewriter(HERO.name, 50, phase >= 1, skip);
  useEffect(() => {
    if (name.done && phase === 1) {
      const t = window.setTimeout(() => setPhase(2), skip ? 0 : 300);
      return () => window.clearTimeout(t);
    }
  }, [name.done, phase, skip]);

  const tag = useTypewriter(HERO.tagline, 20, phase >= 2, skip);
  useEffect(() => {
    if (tag.done && phase === 2) setPhase(3);
  }, [tag.done, phase]);

  useEffect(() => {
    if (phase === 3) {
      const t = window.setTimeout(() => setPhase(4), skip ? 0 : 400);
      return () => window.clearTimeout(t);
    }
  }, [phase, skip]);

  return (
    <section className="mt-2">
      <div>
        <Prompt cmd={cmd.out} />
        {!cmd.done && <span className="inline-block w-[8px] h-[14px] bg-term-accent align-middle ml-[1px] animate-blink" />}
      </div>

      {phase >= 1 && (
        <h1 className="mt-4 sm:mt-6 text-white font-bold leading-[1.05] tracking-[-1px] sm:tracking-[-2px] text-[26px] sm:text-[64px] break-words">
          <span className="whitespace-pre-wrap">{name.out}</span>
          <span
            aria-hidden
            className={`inline-block align-middle ml-2 bg-term-accent w-[12px] h-[22px] sm:w-[32px] sm:h-[56px] ${name.done ? "animate-blink" : ""}`}
          />
        </h1>
      )}

      {phase >= 2 && (
        <p className="mt-4 sm:mt-5 text-[14px] sm:text-[18px] text-term-fg">
          <span className="text-term-accent">{"> "}</span>
          {tag.out}
        </p>
      )}

      {phase >= 4 && (
        <p className="mt-4 text-[12px] sm:text-[13px] text-term-muted animate-fadeUp">
          type <span className="text-term-accent">help</span> to see available commands · ↓ scroll to explore
        </p>
      )}
    </section>
  );
}
