"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Shield, CheckCircle } from "lucide-react";

export default function Portfolio() {
  return (
    <section
      id="work"
      className="py-24 relative z-10 border-t border-[#1E293B]/60"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
            Engineered for Velocity &amp; Proof
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8]">
            Real architectures deployed to real production environments.
            Verified impact, measurable performance multipliers, and
            institutional-grade stability.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-16 lg:space-y-24">
          {/* Case 1: Synapse AI (Text Left, Visual Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#111827]/40 rounded-2xl border border-[#1E293B] hover:border-[#7C3AED]/40 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)] group">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[#06B6D4] text-[11px] font-mono tracking-wider">
                    TELEMETRY SAAS
                  </span>
                  <span className="text-xs font-mono text-[#64748B]">
                    Q1 2026
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4 group-hover:text-[#F8FAFC] transition-colors">
                  Synapse AI — Enterprise Telemetry &amp; Analytics Platform
                </h3>

                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6 font-normal">
                  Synapse suffered severe query latency across petabyte-scale
                  distributed logs. We redesigned their query execution tier
                  with ClickHouse columnar aggregation and Next.js Streaming
                  Server Components, achieving instantaneous data render.
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    "Next.js 16",
                    "ClickHouse",
                    "Tailwind CSS",
                    "WebSockets",
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-[#090D16] border border-[#1E293B] text-xs font-mono text-[#94A3B8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics Box */}
              <div className="pt-6 border-t border-[#1E293B]/70 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-semibold font-mono text-[#06B6D4] mb-1">
                    +310%
                  </div>
                  <div className="text-xs font-mono text-[#94A3B8] uppercase">
                    Query Acceleration
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-semibold font-mono text-white mb-1">
                    $18M
                  </div>
                  <div className="text-xs font-mono text-[#94A3B8] uppercase">
                    Series A Capital Secured
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/work/synapse-ai"
                  className="inline-flex items-center gap-2 text-sm font-mono text-[#06B6D4] hover:text-[#22D3EE] group/link"
                >
                  <span>Read Full Engineering Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Right Visual: Interactive Simulated Telemetry Interface */}
            <div className="lg:col-span-6">
              <div className="rounded-xl bg-[#090D16] border border-[#1E293B] overflow-hidden shadow-2xl relative">
                {/* Window Header */}
                <div className="bg-[#111827] px-4 py-3 border-b border-[#1E293B] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="text-[11px] font-mono text-[#94A3B8] ml-2">
                      synapse-telemetry-cluster // us-east-1
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/30">
                    LIVE STREAMING
                  </span>
                </div>

                {/* Window Body */}
                <div className="p-5 space-y-4 font-mono text-xs">
                  {/* Top Stats Strip */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-2.5 rounded bg-[#111827]/70 border border-[#1E293B]">
                      <div className="text-[10px] text-[#64748B]">
                        LATENCY TTFB
                      </div>
                      <div className="text-base text-[#06B6D4] font-bold">
                        18.2ms
                      </div>
                    </div>
                    <div className="p-2.5 rounded bg-[#111827]/70 border border-[#1E293B]">
                      <div className="text-[10px] text-[#64748B]">
                        EVENTS / SEC
                      </div>
                      <div className="text-base text-[#A855F7] font-bold">
                        142,800
                      </div>
                    </div>
                    <div className="p-2.5 rounded bg-[#111827]/70 border border-[#1E293B]">
                      <div className="text-[10px] text-[#64748B]">
                        INDEX SHARDS
                      </div>
                      <div className="text-base text-white font-bold">
                        64 / 64
                      </div>
                    </div>
                  </div>

                  {/* Visual Chart Wave */}
                  <div className="p-3 rounded bg-[#111827]/50 border border-[#1E293B]">
                    <div className="flex justify-between text-[10px] text-[#64748B] mb-2">
                      <span>AGGREGATED QUERY VOLUME</span>
                      <span className="text-[#06B6D4]">
                        CLICKHOUSE VIRTUAL ENGINE
                      </span>
                    </div>
                    <div className="h-16 flex items-end gap-1">
                      {[
                        40, 65, 45, 80, 70, 95, 85, 90, 75, 88, 92, 100, 85, 90,
                        94, 88, 96, 90, 82, 89,
                      ].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-[#7C3AED]/40 to-[#06B6D4] rounded-xs"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Terminal Log Stream */}
                  <div className="p-3 rounded bg-[#0A0E17] border border-[#1E293B] text-[11px] space-y-1 text-[#94A3B8]">
                    <div className="flex items-center gap-2">
                      <span className="text-[#06B6D4]">➜</span>
                      <span className="text-[#64748B]">0.012s</span>
                      <span className="text-emerald-400">[200 OK]</span>
                      <span>
                        SELECT bucket, count(*) FROM cluster_metrics_100k
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#06B6D4]">➜</span>
                      <span className="text-[#64748B]">0.018s</span>
                      <span className="text-[#A855F7]">[RSC STREAM]</span>
                      <span>
                        Dispatched 4,820 rows to React 19 client worker
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case 2: Vortex Financial (Visual Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#111827]/40 rounded-2xl border border-[#1E293B] hover:border-[#06B6D4]/40 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] group">
            {/* Left Visual: Trading Platform Mockup */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-xl bg-[#090D16] border border-[#1E293B] overflow-hidden shadow-2xl">
                {/* Window Header */}
                <div className="bg-[#111827] px-4 py-3 border-b border-[#1E293B] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="text-[11px] font-mono text-[#94A3B8] ml-2">
                      vortex-order-book // OTC-MATCH
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#06B6D4] font-semibold">
                    42ms LATENCY
                  </span>
                </div>

                {/* Trading Desk Mockup */}
                <div className="p-5 space-y-3 font-mono text-xs">
                  {/* Pair Title */}
                  <div className="flex items-center justify-between border-b border-[#1E293B] pb-2">
                    <div>
                      <span className="text-white font-bold text-sm">
                        USDC / USD LIQUIDITY POOL
                      </span>
                      <span className="text-[#64748B] text-[10px] ml-2">
                        INSTITUTIONAL TIER
                      </span>
                    </div>
                    <span className="text-emerald-400 font-bold">
                      $1.0001 (+0.01%)
                    </span>
                  </div>

                  {/* Mini Order Ladder */}
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex justify-between text-[#64748B] text-[10px]">
                      <span>SETTLEMENT ID</span>
                      <span>AMOUNT</span>
                      <span>RECON STATUS</span>
                    </div>
                    <div className="flex justify-between items-center p-1.5 rounded bg-emerald-500/5 border border-emerald-500/20 text-emerald-400">
                      <span>#TX-948102</span>
                      <span className="font-semibold">$2,450,000.00</span>
                      <span className="text-[10px] bg-emerald-500/20 px-1.5 py-0.5 rounded">
                        RECONCILED
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-1.5 rounded bg-emerald-500/5 border border-emerald-500/20 text-emerald-400">
                      <span>#TX-948103</span>
                      <span className="font-semibold">$1,820,000.00</span>
                      <span className="text-[10px] bg-emerald-500/20 px-1.5 py-0.5 rounded">
                        RECONCILED
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-1.5 rounded bg-[#111827] border border-[#1E293B] text-[#94A3B8]">
                      <span>#TX-948104</span>
                      <span className="font-semibold text-white">
                        $4,100,000.00
                      </span>
                      <span className="text-[10px] text-[#06B6D4] bg-[#06B6D4]/10 px-1.5 py-0.5 rounded">
                        PENDING (8ms)
                      </span>
                    </div>
                  </div>

                  {/* Summary Bar */}
                  <div className="p-2.5 rounded bg-[#111827] border border-[#1E293B] flex items-center justify-between text-[11px]">
                    <span className="text-[#64748B]">
                      DAILY VOLUME RECONCILED
                    </span>
                    <span className="text-white font-bold">
                      $120,412,000.00
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#A855F7] text-[11px] font-mono tracking-wider">
                    FINTECH SYSTEMS
                  </span>
                  <span className="text-xs font-mono text-[#64748B]">
                    Q4 2025
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4 group-hover:text-[#F8FAFC] transition-colors">
                  Vortex Financial — Algorithmic Trade Settlement Engine
                </h3>

                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6 font-normal">
                  Needed institutional-grade order-matching visualization and
                  automated ledger reconciliation for high-frequency OTC
                  settlements. We implemented a memory-cached pipeline using
                  Redis clusters and React 19 concurrent transitions.
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {["React 19", "Redis", "TypeScript", "Node Workers"].map(
                    (tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-[#090D16] border border-[#1E293B] text-xs font-mono text-[#94A3B8]"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Metrics Box */}
              <div className="pt-6 border-t border-[#1E293B]/70 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-semibold font-mono text-[#06B6D4] mb-1">
                    42ms
                  </div>
                  <div className="text-xs font-mono text-[#94A3B8] uppercase">
                    Median Latency
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-semibold font-mono text-white mb-1">
                    $120M+
                  </div>
                  <div className="text-xs font-mono text-[#94A3B8] uppercase">
                    Monthly Settlement Volume
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/work/vortex-financial"
                  className="inline-flex items-center gap-2 text-sm font-mono text-[#06B6D4] hover:text-[#22D3EE] group/link"
                >
                  <span>Read Full Engineering Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Case 3: HyperScale Health (Text Left, Visual Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#111827]/40 rounded-2xl border border-[#1E293B] hover:border-[#10B981]/40 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] group">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono tracking-wider">
                    HEALTHTECH / HIPAA
                  </span>
                  <span className="text-xs font-mono text-[#64748B]">
                    Q3 2025
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4 group-hover:text-[#F8FAFC] transition-colors">
                  HyperScale Health — HIPAA-Compliant Telehealth Ecosystem
                </h3>

                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6 font-normal">
                  Constructed a zero-compromise, encrypted virtual care
                  coordination system from absolute ground zero in 7 weeks.
                  Features automated WebRTC consultations, prescription
                  workflows, and zero-knowledge patient record storage.
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Supabase Auth", "PostgreSQL", "WebRTC", "AWS Enclave"].map(
                    (tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-[#090D16] border border-[#1E293B] text-xs font-mono text-[#94A3B8]"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Metrics Box */}
              <div className="pt-6 border-t border-[#1E293B]/70 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-semibold font-mono text-emerald-400 mb-1">
                    140k+
                  </div>
                  <div className="text-xs font-mono text-[#94A3B8] uppercase">
                    Active Telehealth Patients
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-semibold font-mono text-white mb-1">
                    7 Weeks
                  </div>
                  <div className="text-xs font-mono text-[#94A3B8] uppercase">
                    Total 0-to-1 Sprint Time
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/work/hyperscale-health"
                  className="inline-flex items-center gap-2 text-sm font-mono text-[#06B6D4] hover:text-[#22D3EE] group/link"
                >
                  <span>Read Full Engineering Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Right Visual: Telehealth System Mockup */}
            <div className="lg:col-span-6">
              <div className="rounded-xl bg-[#090D16] border border-[#1E293B] overflow-hidden shadow-2xl">
                {/* Window Header */}
                <div className="bg-[#111827] px-4 py-3 border-b border-[#1E293B] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="text-[11px] font-mono text-[#94A3B8] ml-2">
                      hyperscale-telehealth-portal // E2EE Room
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/30 flex items-center gap-1">
                    <Shield className="w-3 h-3" /> HIPAA SECURE
                  </span>
                </div>

                {/* Telehealth Room Mockup */}
                <div className="p-5 space-y-4 font-mono text-xs">
                  <div className="p-4 rounded-lg bg-[#111827] border border-[#1E293B] flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-sm">
                        PATIENT TELECONSULT #8201
                      </div>
                      <div className="text-[11px] text-[#64748B]">
                        DR. EMILY VANCE ➔ NEUROLOGY
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                      CONNECTED (60 FPS)
                    </span>
                  </div>

                  {/* Vitals Bar */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2.5 rounded bg-[#0A0E17] border border-[#1E293B]">
                      <div className="text-[10px] text-[#64748B]">
                        HEART RATE
                      </div>
                      <div className="text-sm font-bold text-rose-400">
                        72 BPM
                      </div>
                    </div>
                    <div className="p-2.5 rounded bg-[#0A0E17] border border-[#1E293B]">
                      <div className="text-[10px] text-[#64748B]">
                        SPO2 LEVEL
                      </div>
                      <div className="text-sm font-bold text-[#06B6D4]">
                        98.5%
                      </div>
                    </div>
                    <div className="p-2.5 rounded bg-[#0A0E17] border border-[#1E293B]">
                      <div className="text-[10px] text-[#64748B]">
                        ZERO-K ENCLAVE
                      </div>
                      <div className="text-sm font-bold text-emerald-400">
                        VERIFIED
                      </div>
                    </div>
                  </div>

                  {/* Prescription Integration Alert */}
                  <div className="p-3 rounded bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 text-[11px] flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      Automated Surescripts electronic prescription dispatched
                      with audit token.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
