import { Prompt } from "./Prompt";

/** Section wrapper with a phantom prompt that fades in when nav-scrolled to. */
export function Section({
  id,
  phantomCmd,
  children,
}: {
  id: string;
  phantomCmd: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-12 sm:mt-16 scroll-mt-16">
      <div data-phantom className="opacity-0 transition-opacity duration-200 mb-2 text-[12px] sm:text-[13px]">
        <Prompt cmd={phantomCmd} />
      </div>
      {children}
    </section>
  );
}
