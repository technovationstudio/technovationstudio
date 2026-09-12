"use client";

import React, { useState, useEffect } from "react";
import { Layers, Activity, Rocket, RefreshCw } from "lucide-react";

export default function Capabilities() {
  // Animated bar heights for the telemetry visualization
  const [telemetryBars, setTelemetryBars] = useState([
    30, 45, 60, 40, 75, 90, 65, 80, 55, 70, 95, 85, 60, 75, 90, 80,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetryBars((prev) =>
        prev.map((val) => {
          const delta = (Math.random() - 0.48) * 15;
          return Math.min(100, Math.max(20, Math.round(val + delta)));
        }),
      );
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="services"
      className="py-24 relative z-10 border-t border-[#1E293B]/60"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              Architected for Extreme Scale
            </h2>
          </div>
          <p className="text-[#94A3B8] max-w-md text-sm sm:text-base leading-relaxed">
            Eliminate traditional agency overhead. Work directly with seasoned
            software architects handling implementation end-to-end.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Full-Stack Web Engineering */}
          <div className="bg-[#111827]/80 backdrop-blur-md border border-[#1E293B] hover:border-[#7C3AED]/50 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white transition-all">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono tracking-wider text-[#06B6D4]">
                  01 // PRODUCTION
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                A System That Just Works, Every Day
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                We build simple, solid internal systems for your team — no
                crashing, no confusing bugs, no waiting around. Just something
                that works the same way every single day.
              </p>
            </div>

            {/* Code preview block */}
            <div className="rounded-lg bg-[#090D16] border border-[#1E293B] p-4 font-mono text-xs overflow-x-auto shadow-inner">
              <pre className="text-[#94A3B8] leading-relaxed">
                <span>
                  Always Online:{" "}
                  <span className="text-white font-bold">Yes</span>
                  {"\n"}
                </span>
                <span>
                  Easy for Your Team to Use:{" "}
                  <span className="text-white font-bold">Yes</span>
                  {"\n"}
                </span>
              </pre>
            </div>
          </div>

          {/* Card 2: Data Analytics & Real-Time Dashboards */}
          <div className="bg-[#111827]/80 backdrop-blur-md border border-[#1E293B] hover:border-[#06B6D4]/50 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center justify-center text-[#06B6D4] group-hover:bg-[#06B6D4] group-hover:text-black transition-all">
                  <Activity className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono tracking-wider text-[#06B6D4]">
                  02 // TELEMETRY
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                See Your Business Numbers, Instantly
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                No more asking staff to compile reports by hand. Sales, stock,
                or activity — all shown clearly in one place, updated
                automatically.
              </p>
            </div>

            {/* Ingestion Rate Visualizer */}
            <div className="rounded-lg bg-[#090D16] border border-[#1E293B] p-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <pre className="text-[#94A3B8] leading-relaxed">
                  <span>
                    Updates:{" "}
                    <span className="text-white font-bold">In Real Time</span>
                    {"\n"}
                  </span>
                  <span>
                    Manual Reporting Needed:{" "}
                    <span className="text-white font-bold">None</span>
                    {"\n"}
                  </span>
                </pre>
              </div>
            </div>
          </div>

          {/* Card 3: MVP & Venture Acceleration */}
          <div className="bg-[#111827]/80 backdrop-blur-md border border-[#1E293B] hover:border-[#FFB784]/50 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,183,132,0.15)] group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#FFB784]/10 border border-[#FFB784]/30 flex items-center justify-center text-[#FFB784] group-hover:bg-[#FFB784] group-hover:text-black transition-all">
                  <Rocket className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono tracking-wider text-[#FFB784]">
                  03 // 0-TO-1 SPRINT
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                Get Your System Running in Weeks, Not Months
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                Still using spreadsheets or manual processes? We build you a
                simple, working system fast — so your team can start using it
                right away.
              </p>
            </div>

            {/* Fast Stats Row */}
            <div className="grid grid-cols-2 gap-3 rounded-lg bg-[#090D16] border border-[#1E293B] p-4">
              <div>
                <div className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider mb-1">
                  Ready to Use In
                </div>
                <div className="text-sm font-semibold font-mono text-[#F8FAFC]">
                  30 Days
                </div>
              </div>
              <div className="border-l border-[#1E293B] pl-3">
                <div className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider mb-1">
                  Can Be Expanded Later
                </div>
                <div className="text-sm font-semibold font-mono text-[#A855F7]">
                  Yes
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Codebase Modernization & Audits */}
          <div className="bg-[#111827]/80 backdrop-blur-md border border-[#1E293B] hover:border-[#7C3AED]/50 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white transition-all">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono tracking-wider text-[#7C3AED]">
                  04 // REFACTORING
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                Make Your Old System Fast and Cheap to Run Again
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                Old system feels slow or costs too much to maintain? We clean it
                up so it runs smoother, costs less, and is easier to update
                whenever you need changes.
              </p>
            </div>

            {/* Lighthouse Scores Widget */}
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-[#090D16] border border-[#1E293B] p-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111827] border border-[#1E293B] text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#06B6D4] shadow-[0_0_8px_#06B6D4]" />
                <span className="text-[#94A3B8]">Perf:</span>
                <span className="text-white font-bold">100</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111827] border border-[#1E293B] text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" />
                <span className="text-[#94A3B8]">A11y:</span>
                <span className="text-white font-bold">100</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111827] border border-[#1E293B] text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#06B6D4] shadow-[0_0_8px_#06B6D4]" />
                <span className="text-[#94A3B8]">SEO:</span>
                <span className="text-white font-bold">100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
