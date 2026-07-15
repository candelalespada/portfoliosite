import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Your Name",
  description: "Get in touch with me.",
};

const contactLinks = [
  {
    label: "Email",
    value: "candela.lespada@gmail.com",
    href: "mailto:candela.lespada@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/candelalespada",
    href: "https://github.com/candelalespada",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/candela-lespada",
    href: "https://linkedin.com/in/candela-lespada",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mt-3 text-foreground/70 whitespace-nowrap">
        Have a question or want to work together? Reach out through any of
        the channels below.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label !== "Email" ? "_blank" : undefined}
            rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
            className="rounded-xl border border-accent/30 p-5 transition-colors hover:bg-accent-light/40"
          >
            <p className="text-sm font-medium text-foreground/60">
              {link.label}
            </p>
            <p className="mt-1 font-medium">{link.value}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
