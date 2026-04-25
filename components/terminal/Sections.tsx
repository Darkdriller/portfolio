"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Prompt, scrollToWithPhantom } from "./util";

/* ------------------------- Section wrapper + phantom prompt ------------------------- */

function Section({ id, phantomCmd, children }: { id: string; phantomCmd: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-12 sm:mt-16 scroll-mt-16">
      <div data-phantom className="opacity-0 transition-opacity duration-200 mb-2 text-[12px] sm:text-[13px]">
        <Prompt cmd={phantomCmd} />
      </div>
      {children}
    </section>
  );
}

/* ----------------------------------- NAV ----------------------------------- */

const NAV_ITEMS: { label: string; target: string; href?: string }[] = [
  { label: "./about.md", target: "about" },
  { label: "./experience.log", target: "experience" },
  { label: "./tech_stack.json", target: "tech" },
  { label: "./projects/", target: "projects" },
  { label: "./contact.sh", target: "contact" },
  {
    label: "./resume.pdf",
    target: "_resume",
    href: "https://drive.google.com/file/d/13B2fEL67qc-z1EVBlqqpXLEQ4BQnvcmS/view?usp=sharing",
  },
];

const PHANTOM_CMD: Record<string, string> = {
  about: "cat about.md",
  experience: "tail -f experience.log",
  tech: "cat tech_stack.json | jq",
  projects: "ls projects/",
  contact: "./contact.sh",
};

export function Nav() {
  return (
    <section id="nav" className="mt-10">
      <div className="text-[12px] sm:text-[13px] mb-2">
        <Prompt cmd="ls --commands" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2 text-[11px] sm:text-[12px]">
        {NAV_ITEMS.map((it) =>
          it.href ? (
            <a
              key={it.label}
              href={it.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-term-blue hover:underline"
            >
              {it.label}
            </a>
          ) : (
            <button
              key={it.label}
              onClick={() => scrollToWithPhantom(it.target)}
              className="text-term-blue hover:underline text-left"
            >
              {it.label}
            </button>
          ),
        )}
      </div>
    </section>
  );
}

/* ---------------------------------- ABOUT ---------------------------------- */

const TILES = [
  { label: "WEB DEV" },
  { label: "BACKEND" },
  { label: "DATA ENG" },
  { label: "CLOUD" },
];

export function About() {
  return (
    <Section id="about" phantomCmd={PHANTOM_CMD.about}>
      <div className="text-[12px] sm:text-[13px] mb-2">
        <Prompt cmd="cat about.md" />
      </div>
      <div className="rounded-[4px] border border-term-border bg-term-card p-4">
        <div className="text-term-purple text-[14px] mb-2">{"# INTRODUCTION"}</div>
        <p className="text-[12px] sm:text-[13px] leading-[1.7] text-term-fg">
          B.Tech in Data Science &amp; AI. Full-stack developer with experience across Python (Django), React,
          Three.js, SQL and AWS cloud services. Passionate about web dev and the intersection of ML/AI in
          production systems.
        </p>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
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

/* -------------------------------- EXPERIENCE ------------------------------- */

const EXPERIENCE = [
  {
    span: "2024-01 → 2024-07",
    company: "GE Digital",
    role: "Digital Technology Intern",
    bullets: [
      "Built CI/CD pipeline (Jenkins) for AWS ELB deployments",
      "Integrated testing tool for 3-point data flow validation",
    ],
  },
  {
    span: "2023-05 → 2023-07",
    company: "Moody's Analytics",
    role: "Software Engineering Intern",
    bullets: [
      "SFTP → AWS Lambda/S3/Glue/Redshift data pipeline",
      "Workflow scheduling + reusable code libraries",
    ],
  },
];

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

/* --------------------------------- TECH JSON ------------------------------- */

const TECH = {
  languages: ["python", "js", "ts", "rust", "c#"],
  frameworks: ["django", "react", "tailwind", "three.js"],
  data: ["airflow", "sql", "mongodb"],
  infra: ["aws", "docker", "git"],
};

export function TechStack() {
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

/* --------------------------------- PROJECTS -------------------------------- */

type Proj = {
  slug: string;
  name: string;
  desc: string;
  loc: string;
  tags: string[];
  long: string;
  href: string;
};

const PROJECTS: Proj[] = [
  {
    slug: "local-llm",
    name: "local-llm/",
    desc: "PowerToys Run plugin · C# .Net · Ollama API",
    loc: "12.4K LOC",
    tags: ["C#", ".Net", "PowerToys", "Ollama"],
    long: "PowerToys Run plugin that lets you query local LLMs through Ollama endpoints from anywhere on your desktop. Built on C#/.Net, talks to Ollama's HTTP API, and surfaces inference results inside the PowerToys Run launcher.",
    href: "https://github.com/Darkdriller/PowerToys-Run-LocalLLm",
  },
  {
    slug: "simple-lang",
    name: "simple-lang/",
    desc: "Compiler for 8-bit CPU · Rust · Verilog",
    loc: "8.1K LOC",
    tags: ["Rust", "Verilog", "Compiler"],
    long: "A minimal compiler for SimpleLang, a small high-level language targeting an 8-bit CPU implemented in Verilog. Supports variable declarations, assignment, arithmetic, and conditionals — end-to-end from source to instruction stream.",
    href: "https://github.com/Darkdriller/SimpleLang",
  },
  {
    slug: "rural-clustering",
    name: "rural-clustering/",
    desc: "SIH 2022 winner · Python regression · React",
    loc: "15.2K LOC",
    tags: ["Python", "Regression", "React"],
    long: "Web app that clusters rural areas by amenities, population density, and connectivity, then ranks each cluster with a polynomial regression model. Winner of Smart India Hackathon 2022.",
    href: "https://github.com/Darkdriller/sih_code_of_duty_1",
  },
];

export function Projects() {
  const [active, setActive] = useState<Proj | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <Section id="projects" phantomCmd={PHANTOM_CMD.projects}>
      <div className="text-[12px] sm:text-[13px] mb-2">
        <Prompt cmd="ls projects/" />
      </div>
      <div className="space-y-3 text-[11px] sm:text-[12px]">
        {PROJECTS.map((p) => (
          <button
            key={p.slug}
            onClick={() => setActive(p)}
            className="w-full text-left border border-term-border rounded-[2px] p-3 hover:border-term-accent transition-colors grid grid-cols-[1fr_auto] sm:grid-cols-[200px_1fr_100px_80px] gap-3 items-center"
          >
            <span className="text-term-blue truncate">{p.name}</span>
            <span className="hidden sm:block text-term-fg truncate">{p.desc}</span>
            <span className="hidden sm:block text-term-muted">{p.loc}</span>
            <span className="text-term-accent text-right">[ open → ]</span>
            <span className="sm:hidden col-span-2 text-term-fg text-[11px] -mt-1">{p.desc}</span>
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 flex items-end sm:items-center justify-center p-0 sm:p-6 animate-fadeUp"
          onClick={() => setActive(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full sm:max-w-[680px] bg-term-tab border border-term-border rounded-t-lg sm:rounded-lg overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-term-border bg-term-tab text-[11px] text-term-muted">
              <span>cat projects/{active.slug}/README.md</span>
              <button onClick={() => setActive(null)} className="text-term-muted hover:text-white">
                × close
              </button>
            </div>
            <div className="p-4 sm:p-5 text-[12px] sm:text-[13px] leading-[1.7] bg-term-card">
              <div className="text-term-purple text-[14px] mb-2"># {active.name}</div>
              <p className="text-term-fg mb-3">{active.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {active.tags.map((t) => (
                  <span key={t} className="text-term-accent border border-term-accent/40 px-2 py-[2px] text-[11px] rounded-[2px]">
                    [{t}]
                  </span>
                ))}
              </div>
              <p className="text-term-fg mb-4">{active.long}</p>
              <a
                href={active.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-term-accent border border-term-accent px-3 py-1 inline-block text-[12px] hover:bg-term-accent/10"
              >
                [ git clone → ]
              </a>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}

/* ---------------------------------- CONTACT -------------------------------- */

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [v, setV] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState<string>("");
  const [focused, setFocused] = useState<keyof typeof v | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!v.name) return setErrMsg("missing field <name>");
    if (!v.email) return setErrMsg("missing field <email>");
    if (!v.message) return setErrMsg("missing field <message>");
    setErrMsg("");
    setStatus("sending");
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: v.name,
            to_name: "Dhruvjyoti Swain",
            from_email: v.email,
            to_email: "swaindhruv28@gmail.com",
            message: v.message,
          },
          publicKey,
        );
      } else {
        await new Promise((r) => setTimeout(r, 600));
      }
      setStatus("sent");
    } catch {
      setStatus("error");
      setErrMsg("network error · try mailto fallback below");
    }
  };

  const reset = () => {
    setV({ name: "", email: "", message: "" });
    setStatus("idle");
    setErrMsg("");
  };

  const inputCls = "w-full bg-transparent border-0 border-b border-term-border2 outline-none px-0 pb-2 text-[13px] text-term-fg caret-term-accent";

  return (
    <Section id="contact" phantomCmd={PHANTOM_CMD.contact}>
      <div className="text-[12px] sm:text-[13px] mb-2">
        <Prompt cmd="./contact.sh" />
      </div>
      <div className="rounded-[4px] border border-term-border bg-term-card p-4">
        <div className="text-term-muted text-[12px] mb-3">{"> Initiating contact handshake..."}</div>

        {status !== "sent" ? (
          <form onSubmit={submit}>
            <div className="mb-4">
              <div className="text-[11px] text-term-muted mb-1">name:</div>
              <input
                value={v.name}
                onChange={(e) => setV({ ...v, name: e.target.value })}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                className={inputCls}
              />
            </div>
            <div className="mb-4">
              <div className="text-[11px] text-term-muted mb-1">email:</div>
              <input
                type="email"
                value={v.email}
                onChange={(e) => setV({ ...v, email: e.target.value })}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                className={inputCls}
              />
            </div>
            <div className="mb-4">
              <div className="text-[11px] text-term-muted mb-1">message:</div>
              <textarea
                rows={4}
                value={v.message}
                onChange={(e) => setV({ ...v, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className={`${inputCls} resize-none`}
              />
            </div>
            {/* focused-empty-field caret indicator */}
            {focused && v[focused] === "" && (
              <div className="text-term-muted text-[11px] mb-2">
                <span className="text-term-accent">_</span> waiting for input in {focused}
              </div>
            )}

            {errMsg && (
              <div className="text-term-red text-[12px] mb-3">{"> error: "}{errMsg}</div>
            )}
            {status === "sending" && (
              <div className="text-term-muted text-[12px] mb-3">{"> sending..."}</div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="text-term-accent border border-term-accent px-4 py-[6px] text-[12px] inline-block hover:bg-term-accent/10 disabled:opacity-50"
            >
              [ ./send --message ]
            </button>
            <div className="text-term-muted text-[11px] mt-3">
              fallback ·{" "}
              <a className="text-term-blue hover:underline" href="mailto:swaindhruv28@gmail.com">
                mailto:swaindhruv28@gmail.com
              </a>
            </div>
          </form>
        ) : (
          <div className="text-[12px]">
            <div className="text-term-accent">[ OK ] message dispatched · 200</div>
            <div className="text-term-fg mt-2">{"> thanks — will reply soon."}</div>
            <button onClick={reset} className="text-term-blue hover:underline text-[12px] mt-3">
              [ retry ]
            </button>
          </div>
        )}
      </div>
    </Section>
  );
}
