"use client";

import React from "react";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenBooking?: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const metrics = [
    { value: "100%", label: "ON-TIME DELIVERY", highlight: false },
    { value: "Next.js 16", label: "REACT ARCHITECTURE", highlight: false },
    { value: "< 1.0s", label: "FCP / 99+ LIGHTHOUSE", highlight: false },
    { value: "$42M+", label: "CLIENT FUNDING RAISED", highlight: true },
  ];

  const techBadges = [
    { name: "Next.js 16", prefix: "▲" },
    { name: "TypeScript", prefix: "TS" },
    { name: "Tailwind CSS v4", prefix: "⚡" },
    { name: "React 19", prefix: "⚛" },
    { name: "Golang", prefix: "G" },
    { name: "Supabase", prefix: "⚡" },
    { name: "PostgreSQL", prefix: "🐘" },
    { name: "Prisma", prefix: "▲" },
    { name: "GraphQL", prefix: "◇" },
    { name: "Vercel", prefix: "▲" },
    { name: "Node.js", prefix: "⬢" },
    { name: "Stripe", prefix: "S" },
    { name: "Redis", prefix: "◆" },
  ];

  return (
    <section className="relative pt-36 sm:pt-44 pb-20 overflow-hidden bg-grid-cyber">
      {/* Ambient background light orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#7C3AED]/20 via-[#06B6D4]/20 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-[#7C3AED]/15 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-[#06B6D4]/15 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Tag Pill */}

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white max-w-5xl mx-auto leading-[1.12] mb-6">
          Engineering{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] via-[#3B82F6] to-[#A855F7] drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]">
            High-Performance
          </span>{" "}
          Web Applications &amp; Data Systems
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-[#94A3B8] max-w-3xl mx-auto font-normal leading-relaxed mb-10">
          We partner with venture-backed startups and high-growth businesses to
          architect, build, and scale world-class full-stack digital products
          with zero agency bloat.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-medium transition-all duration-200 shadow-[0_0_25px_rgba(124,58,237,0.4)] hover:shadow-[0_0_35px_rgba(124,58,237,0.65)] hover:scale-[1.02] cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-white/90" />
            <span>Get in Touch / Book Call</span>
          </button>

          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#111827] hover:bg-[#1C2539] border border-[#1E293B] hover:border-[#334155] text-white text-sm font-medium transition-all duration-200"
          >
            <span>Explore Case Studies</span>
            <ArrowRight className="w-4 h-4 text-[#94A3B8]" />
          </a>
        </div>

        {/* 4 Metric Cards Strip (from screen.png) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-20">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="bg-[#111827]/80 backdrop-blur-md border border-[#1E293B] hover:border-[#334155] rounded-lg p-4 sm:p-5 text-center transition-all duration-300 hover:shadow-[0_4px_25px_rgba(0,0,0,0.5)]"
            >
              <div
                className={`text-2xl sm:text-3xl font-semibold tracking-tight mb-1 font-mono ${
                  metric.highlight
                    ? "text-[#06B6D4] drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                    : "text-white"
                }`}
              >
                {metric.value}
              </div>
              <div className="text-[11px] font-mono tracking-wider text-[#94A3B8] uppercase">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Ticker / Social Proof */}
        <div className="border-t border-[#1E293B]/70 pt-8 pb-4">
          <p className="text-[11px] tracking-widest text-[#94A3B8] font-mono uppercase mb-5">
            TRUSTED BY INNOVATIVE FOUNDERS &amp; SCALING ENGINEERING TEAMS
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
            {techBadges.map((badge, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#111827]/60 border border-[#1E293B] hover:border-[#06B6D4]/40 hover:bg-[#111827] text-xs font-mono text-[#94A3B8] hover:text-white transition-all cursor-default"
              >
                <span className="text-[#06B6D4] font-bold text-[11px]">
                  {badge.prefix}
                </span>
                <span>{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
