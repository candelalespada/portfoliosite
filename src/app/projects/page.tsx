import type { Metadata } from "next";
import { projects } from "@/data/projects";
import FormattedText from "@/components/FormattedText";

export const metadata: Metadata = {
  title: "Projects — Candela Lespada",
  description: "A collection of projects I've built.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
      <p className="mt-3 text-foreground/70">
        A selection of things I&apos;ve built.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="flex flex-col rounded-xl border border-accent/30 p-6"
          >
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <p className="mt-2 flex-1 text-base text-foreground/70">
              <FormattedText text={project.description} />
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent-light px-2.5 py-1 text-sm text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-sm font-medium">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  Live site →
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 underline-offset-4 hover:text-accent hover:underline"
                >
                  Source →
                </a>
              )}
              {project.docs && (
                <a
                  href={project.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 underline-offset-4 hover:text-accent hover:underline"
                >
                  Doc →
                </a>
              )}
              {project.slides && (
                <a
                  href={project.slides}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 underline-offset-4 hover:text-accent hover:underline"
                >
                  Slides →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
