"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  const anchor = (hash: string) => (pathname === "/" ? hash : `/${hash}`);
  return (
    <footer className="bg-surface border-t border-border pt-16 pb-12 text-foreground-muted text-xs font-mono relative z-10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-border/80">
          {/* Studio Brand Bio */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-accent p-[1.5px]">
                <div className="w-full h-full bg-background rounded-[7px] flex items-center justify-center">
                  <div className="w-3.5 h-3.5 border-2 border-accent rotate-45" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold tracking-wider text-foreground leading-none font-mono">
                  TECHNOVATION
                </span>
                <span className="text-[9px] uppercase tracking-widest text-foreground-faint font-mono mt-1">
                  DIGITAL PRODUCT STUDIO
                </span>
              </div>
            </Link>

            <p className="text-xs text-foreground-muted font-sans leading-relaxed max-w-sm">
              High-performance 2-person digital product studio engineering Next.js web
              applications, dynamic enterprise platforms, and precision data analytics dashboards.
            </p>

            {/* Operational Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-border text-[11px] text-foreground-muted">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground-muted opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground-muted"></span>
              </span>
              <span>ALL SYSTEMS OPERATIONAL • v2.4.0-prod</span>
            </div>
          </div>

          {/* Column 1: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-foreground text-xs font-semibold uppercase tracking-wider mb-2">
              QUICK LINKS
            </div>
            <ul className="space-y-2 text-foreground-muted">
              <li>
                <a href={anchor("#services")} className="hover:text-foreground transition-colors">
                  Core Capabilities
                </a>
              </li>
              <li>
                <a href={anchor("#work")} className="hover:text-foreground transition-colors">
                  Selected Portfolio
                </a>
              </li>
              <li>
                <a href={anchor("#process")} className="hover:text-foreground transition-colors">
                  Sprint Workflow
                </a>
              </li>
              <li>
                <a href={anchor("#founders")} className="hover:text-foreground transition-colors">
                  About Founders
                </a>
              </li>
              <li>
                <a href={anchor("#contact")} className="hover:text-foreground transition-colors">
                  Inquire Studio
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Tech Stack */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-foreground text-xs font-semibold uppercase tracking-wider mb-2">
              TECH STACK
            </div>
            <ul className="space-y-2 text-foreground-muted">
              <li>Next.js 16</li>
              <li>Tailwind CSS v4</li>
              <li>TypeScript</li>
              <li>Supabase</li>
              <li>PostgreSQL</li>
              <li>ClickHouse</li>
            </ul>
          </div>

          {/* Column 3: Network */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-foreground text-xs font-semibold uppercase tracking-wider mb-2">
              NETWORK
            </div>
            <ul className="space-y-2 text-foreground-muted">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-foreground-faint" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  <span>X / Twitter</span>
                  <ArrowUpRight className="w-3 h-3 text-foreground-faint" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-foreground-faint" />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  <span>Discord Community</span>
                  <ArrowUpRight className="w-3 h-3 text-foreground-faint" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-foreground-faint">
          <div>
            © 2026 TECHNOVATION Studio LLC. Engineered for mechanical precision and low-latency
            digital experiences.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}