import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/content/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  Layers,
  Terminal,
  Star,
  CheckCircle2,
} from "lucide-react";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found — TECHNOVATION",
    };
  }

  return {
    title: `${project.title} — Case Study | TECHNOVATION`,
    description: project.description,
    openGraph: {
      title: `${project.title} | TECHNOVATION Case Study`,
      description: project.description,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <div className="mb-8">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:text-accent/80 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Selected Work</span>
            </Link>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-2.5 py-1 rounded-full bg-surface border border-border text-foreground-muted text-[11px] font-mono tracking-wider">
                {project.category}
              </span>
              <span className="text-xs font-mono text-foreground-faint">{project.date}</span>
              <span className="text-xs font-mono text-foreground-faint">•</span>
              <span className="text-xs font-mono text-foreground-muted">{project.client}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4 leading-[1.15]">
              {project.title}
            </h1>

            <p className="text-lg text-foreground-muted leading-relaxed max-w-3xl">
              {project.fullDescription}
            </p>
          </div>

          {/* Impact Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            {project.metrics.map((m, i) => (
              <div
                key={i}
                className="bg-surface-elevated/80 backdrop-blur-md border border-border rounded-xl p-5"
              >
                <div className={`text-3xl font-semibold font-mono mb-1 ${i === 0 ? "text-accent" : "text-foreground"}`}>
                  {m.value}
                </div>
                <div className="text-xs font-mono text-foreground uppercase tracking-wider mb-1">
                  {m.label}
                </div>
                {m.subtext && (
                  <div className="text-[11px] font-mono text-foreground-faint">{m.subtext}</div>
                )}
              </div>
            ))}
          </div>

          {/* Architecture & Solution Blueprint */}
          <div className="bg-surface-elevated/80 border border-border rounded-2xl p-6 sm:p-8 mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-accent" />
              <span>{project.architecture.title}</span>
            </h2>

            {project.architecture.diagramLabel && (
              <div className="p-3 rounded-lg bg-surface border border-border text-xs font-mono text-accent mb-6 overflow-x-auto">
                <span className="text-foreground-faint mr-2">FLOW:</span>
                {project.architecture.diagramLabel}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.architecture.points.map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-foreground-muted">
                  <CheckCircle2 className="w-4 h-4 text-foreground-muted shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge & Solution 2-Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-surface-elevated/50 border border-border rounded-xl p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-foreground-muted" />
                The Core Bottleneck
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed">{project.challenge}</p>
            </div>

            <div className="bg-surface-elevated/50 border border-border rounded-xl p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                The Engineered Solution
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Code Implementation Snippet */}
          {project.codeSnippet && (
            <div className="mb-16">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-accent" />
                <span>Production Architecture Implementation</span>
              </h3>
              <div className="rounded-xl bg-surface border border-border p-5 font-mono text-xs overflow-x-auto shadow-2xl">
                <div className="text-foreground-faint text-[11px] mb-3 pb-2 border-b border-border flex items-center justify-between">
                  <span>{project.codeSnippet.filename}</span>
                  <span className="text-accent">TypeScript / Next.js</span>
                </div>
                <pre className="text-foreground leading-relaxed">
                  <code>{project.codeSnippet.code}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Tech Stack Matrix */}
          <div className="mb-16">
            <h3 className="text-lg font-semibold text-foreground mb-4">Technology Stack</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.techStack.map((stack, i) => (
                <div key={i} className="p-4 rounded-xl bg-surface-elevated/60 border border-border">
                  <div className="text-[11px] font-mono text-foreground-faint uppercase mb-2">
                    {stack.category}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {stack.items.map((item, j) => (
                      <span
                        key={j}
                        className="px-2 py-0.5 rounded bg-surface border border-border text-xs font-mono text-foreground-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Testimonial Quote */}
          <div className="p-8 rounded-2xl bg-surface-elevated/80 border border-border mb-16 relative overflow-hidden">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-foreground-muted text-foreground-muted"
                />
              ))}
            </div>
            <p className="text-base sm:text-lg text-foreground italic leading-relaxed mb-6 font-normal">
              &ldquo;{project.testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-mono font-bold text-accent-foreground text-xs">
                {project.testimonial.avatarInitials}
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">
                  {project.testimonial.author}
                </div>
                <div className="text-xs font-mono text-foreground-muted">
                  {project.testimonial.role}, {project.testimonial.company}
                </div>
              </div>
            </div>
          </div>

          {/* Next Project & Bottom CTA */}
          <div className="border-t border-border pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-mono text-foreground-faint uppercase mb-1">Next Case Study</div>
              <Link
                href={`/work/${nextProject.slug}`}
                className="text-base font-semibold text-foreground hover:text-accent flex items-center gap-2"
              >
                <span>{nextProject.title}</span>
                <ArrowRight className="w-4 h-4 text-accent" />
              </Link>
            </div>

            <Link
              href="/#contact"
              className="px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground text-xs sm:text-sm font-medium font-mono transition-all"
            >
              Discuss Your Architecture With Founders →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
