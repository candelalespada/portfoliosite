import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import FormattedText from "@/components/FormattedText";

export default function Home() {
  const featured = projects.slice(0, 2);

  return (
    <div className="mx-auto max-w-4xl px-6">
      <section className="flex flex-col-reverse items-center gap-10 py-20 sm:flex-row sm:items-center sm:py-28">
        <div>
          <p className="text-lg font-medium text-foreground/70">
            Hi, I&apos;m
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Candela Lespada
          </h1>
          <div className="mt-4 max-w-xl space-y-4 text-lg text-foreground/70">
            <p>
              A Computer Science major with a Machine Learning concentration and Business minor at the University of Maryland&apos;s
              Honors College. This site is where I document the projects I&apos;m building and the thinking behind them.
            </p>
            <p>
              I build end-to-end, from writing the code to shaping the strategy behind it. My flagship project, Ganarlo,
              is a habit-formation app I designed and built using React Native and Supabase, where I&apos;ve owned everything from the technical
              architecture to the product decisions that shape how people actually use it.
            </p>
            <p>
              As Chapter President of Alpha Chi Omega, I managed a large team and executive board, which has sharpened how I think about
              stakeholder alignment and execution at scale. I&apos;m also bilingual in English and Spanish, which has shaped how I think
              about building products for diverse users.
            </p>
            <p>
              I&apos;m drawn to AI product roles where technical depth and business judgment meet - and I&apos;m always looking for the
              next problem worth solving.
            </p>
          </div>
          <div className="mt-8 flex gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              View my projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-accent px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent-light/40"
            >
              Get in touch
            </Link>
          </div>
        </div>
        <Image
          src="/headshot.jpg"
          alt="Candela Lespada"
          width={288}
          height={288}
          priority
          className="h-56 w-56 shrink-0 rounded-full border-4 border-accent-light object-cover sm:h-64 sm:w-64"
        />
      </section>

      <section className="pb-24">
        <h2 className="text-xl font-semibold tracking-tight">
          Featured work
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {featured.map((project) => (
            <div
              key={project.slug}
              className="rounded-xl border border-accent/30 p-6"
            >
              <h3 className="font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">
                <FormattedText text={project.description} />
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent-light px-2.5 py-1 text-xs text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-6 inline-block text-sm font-medium text-foreground/70 underline-offset-4 hover:text-accent hover:underline"
        >
          See all projects →
        </Link>
      </section>
    </div>
  );
}
