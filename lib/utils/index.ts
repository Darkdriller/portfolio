"use client";

import { useEffect, useRef, useState } from "react";

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Types `text` char-by-char at `cps` ms/char. Resolves `done=true` when complete. */
export function useTypewriter(text: string, cps: number, start = true, skip = false) {
  const [out, setOut] = useState(skip ? text : "");
  const [done, setDone] = useState(skip);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (skip || !start) {
      setOut(text);
      setDone(true);
      return;
    }
    let i = 0;
    setOut("");
    setDone(false);
    const tick = () => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) {
        setDone(true);
        return;
      }
      timer.current = window.setTimeout(tick, cps);
    };
    timer.current = window.setTimeout(tick, cps);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [text, cps, start, skip]);

  return { out, done };
}

/** Used for nav-link smooth scroll + phantom-prompt ripple at the destination. */
export function scrollToWithPhantom(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  const phantom = el.querySelector<HTMLElement>("[data-phantom]");
  if (phantom) {
    phantom.classList.remove("opacity-0");
    phantom.classList.add("opacity-100");
    window.setTimeout(() => {
      phantom.classList.remove("opacity-100");
      phantom.classList.add("opacity-0");
    }, 1400);
  }
}

/** Format Date as `Last login: Mmm dd HH:MM on ttys001`. */
export function bootLine(d: Date = new Date()) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const m = months[d.getMonth()];
  const day = String(d.getDate()).padStart(2, " ");
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `Last login: ${m} ${day} ${hh}:${mm} on ttys001`;
}
