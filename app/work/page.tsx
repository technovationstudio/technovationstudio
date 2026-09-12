import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/content/projects";
import { ArrowUpRight, ArrowLeft, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Selected Case Studies & Engineering Work — TECHNOVATION Studio",
  description:
    "Explore our production deployments: Enterprise Telemetry SaaS, Algorithmic Trade Settlement, and HIPAA-Compliant Telehealth.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:text-accent/80"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-border text-foreground-muted text-xs font-mono mb-4">
              <Layers className="w-3.5 h-3.5 text-accent" />
              SELECTED CASE STUDIES
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              Proven Systems In Production
            </h1>
            <p className="text-base text-foreground-muted">
              Browse detailed engineering write-ups documenting real technical challenges,
              architectural decisions, code snippets, and quantifiable business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div
                key={p.slug}
                className="bg-surface-elevated/80 border border-border hover:border-accent/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-foreground-faint mb-4">
                    <span className="text-accent">{p.category}</span>
                    <span>{p.date}</span>
                  </div>

                  <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-foreground">
                    {p.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed mb-6 font-normal">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-surface border border-border text-[11px] font-mono text-foreground-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <div>
                      <div className="text-xl font-bold font-mono text-accent">
                        {p.metrics[0].value}
                      </div>
                      <div className="text-[10px] font-mono text-foreground-faint uppercase">
                        {p.metrics[0].label}
                      </div>
                    </div>

                    <Link
                      href={`/work/${p.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:text-accent/80 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
