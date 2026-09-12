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
    <div className="min-h-screen bg-[#090D16] text-[#F8FAFC] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <div className="mb-8">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#06B6D4] hover:text-[#22D3EE] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Selected Work</span>
            </Link>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-2.5 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[#06B6D4] text-[11px] font-mono tracking-wider">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#64748B]">{project.date}</span>
              <span className="text-xs font-mono text-[#64748B]">•</span>
              <span className="text-xs font-mono text-[#94A3B8]">{project.client}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-[1.15]">
              {project.title}
            </h1>

            <p className="text-lg text-[#94A3B8] leading-relaxed max-w-3xl">
              {project.fullDescription}
            </p>
          </div>

          {/* Impact Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            {project.metrics.map((m, i) => (
              <div
                key={i}
                className="bg-[#111827]/80 backdrop-blur-md border border-[#1E293B] rounded-xl p-5"
              >
                <div className="text-3xl font-semibold font-mono text-[#06B6D4] mb-1">
                  {m.value}
                </div>
                <div className="text-xs font-mono text-white uppercase tracking-wider mb-1">
                  {m.label}
                </div>
                {m.subtext && (
                  <div className="text-[11px] font-mono text-[#64748B]">{m.subtext}</div>
                )}
              </div>
            ))}
          </div>

          {/* Architecture & Solution Blueprint */}
          <div className="bg-[#111827]/80 border border-[#1E293B] rounded-2xl p-6 sm:p-8 mb-12">
            <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#7C3AED]" />
              <span>{project.architecture.title}</span>
            </h2>

            {project.architecture.diagramLabel && (
              <div className="p-3 rounded-lg bg-[#090D16] border border-[#1E293B] text-xs font-mono text-[#06B6D4] mb-6 overflow-x-auto">
                <span className="text-[#64748B] mr-2">FLOW:</span>
                {project.architecture.diagramLabel}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.architecture.points.map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-[#94A3B8]">
                  <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge & Solution 2-Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#111827]/50 border border-[#1E293B] rounded-xl p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                The Core Bottleneck
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">{project.challenge}</p>
            </div>

            <div className="bg-[#111827]/50 border border-[#1E293B] rounded-xl p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                The Engineered Solution
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Code Implementation Snippet */}
          {project.codeSnippet && (
            <div className="mb-16">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#06B6D4]" />
                <span>Production Architecture Implementation</span>
              </h3>
              <div className="rounded-xl bg-[#090D16] border border-[#1E293B] p-5 font-mono text-xs overflow-x-auto shadow-2xl">
                <div className="text-[#64748B] text-[11px] mb-3 pb-2 border-b border-[#1E293B] flex items-center justify-between">
                  <span>{project.codeSnippet.filename}</span>
                  <span className="text-[#06B6D4]">TypeScript / Next.js</span>
                </div>
                <pre className="text-[#DFE2EF] leading-relaxed">
                  <code>{project.codeSnippet.code}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Tech Stack Matrix */}
          <div className="mb-16">
            <h3 className="text-lg font-semibold text-white mb-4">Technology Stack</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.techStack.map((stack, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#111827]/60 border border-[#1E293B]">
                  <div className="text-[11px] font-mono text-[#64748B] uppercase mb-2">
                    {stack.category}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {stack.items.map((item, j) => (
                      <span
                        key={j}
                        className="px-2 py-0.5 rounded bg-[#090D16] border border-[#1E293B] text-xs font-mono text-[#DFE2EF]"
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
          <div className="p-8 rounded-2xl bg-[#111827]/80 border border-[#1E293B] mb-16 relative overflow-hidden">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B] drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]"
                />
              ))}
            </div>
            <p className="text-base sm:text-lg text-white italic leading-relaxed mb-6 font-normal">
              &ldquo;{project.testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#7C3AED] flex items-center justify-center font-mono font-bold text-white text-xs">
                {project.testimonial.avatarInitials}
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  {project.testimonial.author}
                </div>
                <div className="text-xs font-mono text-[#94A3B8]">
                  {project.testimonial.role}, {project.testimonial.company}
                </div>
              </div>
            </div>
          </div>

          {/* Next Project & Bottom CTA */}
          <div className="border-t border-[#1E293B] pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-mono text-[#64748B] uppercase mb-1">Next Case Study</div>
              <Link
                href={`/work/${nextProject.slug}`}
                className="text-base font-semibold text-white hover:text-[#06B6D4] flex items-center gap-2"
              >
                <span>{nextProject.title}</span>
                <ArrowRight className="w-4 h-4 text-[#06B6D4]" />
              </Link>
            </div>

            <Link
              href="/#contact"
              className="px-6 py-3 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs sm:text-sm font-medium font-mono transition-all shadow-[0_0_20px_rgba(124,58,237,0.4)]"
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
