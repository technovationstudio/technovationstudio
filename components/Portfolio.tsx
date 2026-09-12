"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Shield, CheckCircle } from "lucide-react";

export default function Portfolio() {
  return (
    <section
      id="work"
      className="py-24 relative z-10 border-t border-border/60"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Engineered for Velocity &amp; Proof
          </h2>
          <p className="text-sm sm:text-base text-foreground-muted">
            Real architectures deployed to real production environments.
            Verified impact, measurable performance multipliers, and
            institutional-grade stability.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-16 lg:space-y-24">
          {/* Case 1: Synapse AI (Text Left, Visual Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-surface-elevated/40 rounded-2xl border border-border hover:border-accent/40 p-6 sm:p-8 lg:p-10 transition-all duration-300 group">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-surface border border-border text-foreground-muted text-[11px] font-mono tracking-wider">
                    TELEMETRY SAAS
                  </span>
                  <span className="text-xs font-mono text-foreground-faint">
                    Q1 2026
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4 group-hover:text-foreground transition-colors">
                  Synapse AI — Enterprise Telemetry &amp; Analytics Platform
                </h3>

                <p className="text-sm sm:text-base text-foreground-muted leading-relaxed mb-6 font-normal">
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
                      className="px-2.5 py-1 rounded-md bg-surface border border-border text-xs font-mono text-foreground-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics Box */}
              <div className="pt-6 border-t border-border/70 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-semibold font-mono text-accent mb-1">
                    +310%
                  </div>
                  <div className="text-xs font-mono text-foreground-muted uppercase">
                    Query Acceleration
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-semibold font-mono text-foreground mb-1">
                    $18M
                  </div>
                  <div className="text-xs font-mono text-foreground-muted uppercase">
                    Series A Capital Secured
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/work/synapse-ai"
                  className="inline-flex items-center gap-2 text-sm font-mono text-accent hover:text-accent/80 group/link"
                >
                  <span>Read Full Engineering Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Right Visual: Interactive Simulated Telemetry Interface */}
            <div className="lg:col-span-6">
              <div className="rounded-xl bg-surface border border-border overflow-hidden shadow-2xl relative">
                {/* Window Header */}
                <div className="bg-surface-elevated px-4 py-3 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-foreground-muted/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-foreground-muted/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-foreground-muted/30" />
                    <span className="text-[11px] font-mono text-foreground-muted ml-2">
                      synapse-telemetry-cluster // us-east-1
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-surface border border-border text-foreground-muted text-[10px] font-mono">
                    LIVE STREAMING
                  </span>
                </div>

                {/* Window Body */}
                <div className="p-5 space-y-4 font-mono text-xs">
                  {/* Top Stats Strip */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-2.5 rounded bg-surface-elevated/70 border border-border">
                      <div className="text-[10px] text-foreground-faint">
                        LATENCY TTFB
                      </div>
                      <div className="text-base text-accent font-bold">
                        18.2ms
                      </div>
                    </div>
                    <div className="p-2.5 rounded bg-surface-elevated/70 border border-border">
                      <div className="text-[10px] text-foreground-faint">
                        EVENTS / SEC
                      </div>
                      <div className="text-base text-foreground font-bold">
                        142,800
                      </div>
                    </div>
                    <div className="p-2.5 rounded bg-surface-elevated/70 border border-border">
                      <div className="text-[10px] text-foreground-faint">
                        INDEX SHARDS
                      </div>
                      <div className="text-base text-foreground font-bold">
                        64 / 64
                      </div>
                    </div>
                  </div>

                  {/* Visual Chart Wave */}
                  <div className="p-3 rounded bg-surface-elevated/50 border border-border">
                    <div className="flex justify-between text-[10px] text-foreground-faint mb-2">
                      <span>AGGREGATED QUERY VOLUME</span>
                      <span className="text-foreground-muted">
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
                          className="flex-1 bg-accent/80 rounded-xs"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Terminal Log Stream */}
                  <div className="p-3 rounded bg-surface border border-border text-[11px] space-y-1 text-foreground-muted">
                    <div className="flex items-center gap-2">
                      <span className="text-accent">➜</span>
                      <span className="text-foreground-faint">0.012s</span>
                      <span className="text-foreground-muted">[200 OK]</span>
                      <span>
                        SELECT bucket, count(*) FROM cluster_metrics_100k
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-accent">➜</span>
                      <span className="text-foreground-faint">0.018s</span>
                      <span className="text-foreground-muted">[RSC STREAM]</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-surface-elevated/40 rounded-2xl border border-border hover:border-accent/40 p-6 sm:p-8 lg:p-10 transition-all duration-300 group">
            {/* Left Visual: Trading Platform Mockup */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-xl bg-surface border border-border overflow-hidden shadow-2xl">
                {/* Window Header */}
                <div className="bg-surface-elevated px-4 py-3 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-foreground-muted/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-foreground-muted/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-foreground-muted/30" />
                    <span className="text-[11px] font-mono text-foreground-muted ml-2">
                      vortex-order-book // OTC-MATCH
                    </span>
                  </div>
                  <span className="text-xs font-mono text-accent font-semibold">
                    42ms LATENCY
                  </span>
                </div>

                {/* Trading Desk Mockup */}
                <div className="p-5 space-y-3 font-mono text-xs">
                  {/* Pair Title */}
                  <div className="flex items-center justify-between border-b border-border pb-2">
                    <div>
                      <span className="text-foreground font-bold text-sm">
                        USDC / USD LIQUIDITY POOL
                      </span>
                      <span className="text-foreground-faint text-[10px] ml-2">
                        INSTITUTIONAL TIER
                      </span>
                    </div>
                    <span className="text-foreground font-bold">
                      $1.0001 (+0.01%)
                    </span>
                  </div>

                  {/* Mini Order Ladder */}
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex justify-between text-foreground-faint text-[10px]">
                      <span>SETTLEMENT ID</span>
                      <span>AMOUNT</span>
                      <span>RECON STATUS</span>
                    </div>
                    <div className="flex justify-between items-center p-1.5 rounded bg-surface border border-border text-foreground-muted">
                      <span>#TX-948102</span>
                      <span className="font-semibold text-foreground">$2,450,000.00</span>
                      <span className="text-[10px] bg-foreground-muted/10 px-1.5 py-0.5 rounded text-foreground-muted">
                        RECONCILED
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-1.5 rounded bg-surface border border-border text-foreground-muted">
                      <span>#TX-948103</span>
                      <span className="font-semibold text-foreground">$1,820,000.00</span>
                      <span className="text-[10px] bg-foreground-muted/10 px-1.5 py-0.5 rounded text-foreground-muted">
                        RECONCILED
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-1.5 rounded bg-surface border border-border text-foreground-muted">
                      <span>#TX-948104</span>
                      <span className="font-semibold text-foreground">
                        $4,100,000.00
                      </span>
                      <span className="text-[10px] text-accent bg-accent-muted px-1.5 py-0.5 rounded border border-accent/30">
                        PENDING (8ms)
                      </span>
                    </div>
                  </div>

                  {/* Summary Bar */}
                  <div className="p-2.5 rounded bg-surface-elevated border border-border flex items-center justify-between text-[11px]">
                    <span className="text-foreground-faint">
                      DAILY VOLUME RECONCILED
                    </span>
                    <span className="text-foreground font-bold">
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
                  <span className="px-2.5 py-1 rounded-full bg-surface border border-border text-foreground-muted text-[11px] font-mono tracking-wider">
                    FINTECH SYSTEMS
                  </span>
                  <span className="text-xs font-mono text-foreground-faint">
                    Q4 2025
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4 group-hover:text-foreground transition-colors">
                  Vortex Financial — Algorithmic Trade Settlement Engine
                </h3>

                <p className="text-sm sm:text-base text-foreground-muted leading-relaxed mb-6 font-normal">
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
                        className="px-2.5 py-1 rounded-md bg-surface border border-border text-xs font-mono text-foreground-muted"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Metrics Box */}
              <div className="pt-6 border-t border-border/70 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-semibold font-mono text-accent mb-1">
                    42ms
                  </div>
                  <div className="text-xs font-mono text-foreground-muted uppercase">
                    Median Latency
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-semibold font-mono text-foreground mb-1">
                    $120M+
                  </div>
                  <div className="text-xs font-mono text-foreground-muted uppercase">
                    Monthly Settlement Volume
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/work/vortex-financial"
                  className="inline-flex items-center gap-2 text-sm font-mono text-accent hover:text-accent/80 group/link"
                >
                  <span>Read Full Engineering Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Case 3: HyperScale Health (Text Left, Visual Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-surface-elevated/40 rounded-2xl border border-border hover:border-accent/40 p-6 sm:p-8 lg:p-10 transition-all duration-300 group">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-surface border border-border text-foreground-muted text-[11px] font-mono tracking-wider">
                    HEALTHTECH / HIPAA
                  </span>
                  <span className="text-xs font-mono text-foreground-faint">
                    Q3 2025
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4 group-hover:text-foreground transition-colors">
                  HyperScale Health — HIPAA-Compliant Telehealth Ecosystem
                </h3>

                <p className="text-sm sm:text-base text-foreground-muted leading-relaxed mb-6 font-normal">
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
                        className="px-2.5 py-1 rounded-md bg-surface border border-border text-xs font-mono text-foreground-muted"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Metrics Box */}
              <div className="pt-6 border-t border-border/70 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-semibold font-mono text-accent mb-1">
                    140k+
                  </div>
                  <div className="text-xs font-mono text-foreground-muted uppercase">
                    Active Telehealth Patients
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-semibold font-mono text-foreground mb-1">
                    7 Weeks
                  </div>
                  <div className="text-xs font-mono text-foreground-muted uppercase">
                    Total 0-to-1 Sprint Time
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/work/hyperscale-health"
                  className="inline-flex items-center gap-2 text-sm font-mono text-accent hover:text-accent/80 group/link"
                >
                  <span>Read Full Engineering Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Right Visual: Telehealth System Mockup */}
            <div className="lg:col-span-6">
              <div className="rounded-xl bg-surface border border-border overflow-hidden shadow-2xl">
                {/* Window Header */}
                <div className="bg-surface-elevated px-4 py-3 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-foreground-muted/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-foreground-muted/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-foreground-muted/30" />
                    <span className="text-[11px] font-mono text-foreground-muted ml-2">
                      hyperscale-telehealth-portal // E2EE Room
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-surface border border-border text-foreground-muted text-[10px] font-mono flex items-center gap-1">
                    <Shield className="w-3 h-3 text-accent" /> HIPAA SECURE
                  </span>
                </div>

                {/* Telehealth Room Mockup */}
                <div className="p-5 space-y-4 font-mono text-xs">
                  <div className="p-4 rounded-lg bg-surface-elevated border border-border flex items-center justify-between">
                    <div>
                      <div className="text-foreground font-bold text-sm">
                        PATIENT TELECONSULT #8201
                      </div>
                      <div className="text-[11px] text-foreground-faint">
                        DR. EMILY VANCE ➔ NEUROLOGY
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-surface border border-border text-foreground-muted text-xs font-bold">
                      CONNECTED (60 FPS)
                    </span>
                  </div>

                  {/* Vitals Bar */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2.5 rounded bg-surface border border-border">
                      <div className="text-[10px] text-foreground-faint">
                        HEART RATE
                      </div>
                      <div className="text-sm font-bold text-foreground">
                        72 BPM
                      </div>
                    </div>
                    <div className="p-2.5 rounded bg-surface border border-border">
                      <div className="text-[10px] text-foreground-faint">
                        SPO2 LEVEL
                      </div>
                      <div className="text-sm font-bold text-foreground">
                        98.5%
                      </div>
                    </div>
                    <div className="p-2.5 rounded bg-surface border border-border">
                      <div className="text-[10px] text-foreground-faint">
                        ZERO-K ENCLAVE
                      </div>
                      <div className="text-sm font-bold text-foreground">
                        VERIFIED
                      </div>
                    </div>
                  </div>

                  {/* Prescription Integration Alert */}
                  <div className="p-3 rounded bg-surface border border-border text-foreground-muted text-[11px] flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
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