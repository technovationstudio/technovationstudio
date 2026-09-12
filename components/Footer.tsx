"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0E17] border-t border-[#1E293B] pt-16 pb-12 text-[#94A3B8] text-xs font-mono relative z-10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1E293B]/80">
          {/* Studio Brand Bio */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] p-[1.5px]">
                <div className="w-full h-full bg-[#090D16] rounded-[7px] flex items-center justify-center">
                  <div className="w-3.5 h-3.5 border-2 border-[#06B6D4] rotate-45" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold tracking-wider text-white leading-none font-mono">
                  TECHNOVATION
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#64748B] font-mono mt-1">
                  DIGITAL PRODUCT STUDIO
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#94A3B8] font-sans leading-relaxed max-w-sm">
              High-performance 2-person digital product studio engineering Next.js web
              applications, dynamic enterprise platforms, and precision data analytics dashboards.
            </p>

            {/* Operational Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#1E293B] text-[11px] text-[#06B6D4]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
              </span>
              <span>ALL SYSTEMS OPERATIONAL • v2.4.0-prod</span>
            </div>
          </div>

          {/* Column 1: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-white text-xs font-semibold uppercase tracking-wider mb-2">
              QUICK LINKS
            </div>
            <ul className="space-y-2 text-[#94A3B8]">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Core Capabilities
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Selected Portfolio
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Sprint Workflow
                </a>
              </li>
              <li>
                <a href="#founders" className="hover:text-white transition-colors">
                  About Founders
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Inquire Studio
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Tech Stack */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-white text-xs font-semibold uppercase tracking-wider mb-2">
              TECH STACK
            </div>
            <ul className="space-y-2 text-[#94A3B8]">
              <li className="text-[#06B6D4]">Next.js 16</li>
              <li>Tailwind CSS v4</li>
              <li>TypeScript</li>
              <li>Supabase</li>
              <li>PostgreSQL</li>
              <li>ClickHouse</li>
            </ul>
          </div>

          {/* Column 3: Network */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-white text-xs font-semibold uppercase tracking-wider mb-2">
              NETWORK
            </div>
            <ul className="space-y-2 text-[#94A3B8]">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#64748B]" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>X / Twitter</span>
                  <ArrowUpRight className="w-3 h-3 text-[#64748B]" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[#64748B]" />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Discord Community</span>
                  <ArrowUpRight className="w-3 h-3 text-[#64748B]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#64748B]">
          <div>
            © 2026 TECHNOVATION Studio LLC. Engineered for mechanical precision and low-latency
            digital experiences.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
