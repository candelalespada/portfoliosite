import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Candela Lespada",
  description: "View or download my resume.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
        <a
          href="/resume.pdf"
          download
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Download PDF
        </a>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-accent/30">
        <iframe
          src="/resume.pdf"
          title="Candela Lespada's Resume"
          className="h-[85vh] w-full"
        />
      </div>
    </div>
  );
}
