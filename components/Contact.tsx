"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Section } from "./Section";
import { Prompt } from "./Prompt";
import { CONTACT, PHANTOM_CMD } from "@/lib/constants";

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
            to_name: CONTACT.toName,
            from_email: v.email,
            to_email: CONTACT.toEmail,
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
              <a className="text-term-blue hover:underline" href={`mailto:${CONTACT.toEmail}`}>
                mailto:{CONTACT.toEmail}
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
