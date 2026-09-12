"use client";

import React, { useState } from "react";
import { X, Calculator, Check, ArrowRight, Sparkles } from "lucide-react";

interface ProjectEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBudget?: (budget: string) => void;
}

type ProjectType = "mvp" | "saas" | "telemetry" | "audit";

export default function ProjectEstimatorModal({
  isOpen,
  onClose,
  onSelectBudget,
}: ProjectEstimatorModalProps) {
  const [projectType, setProjectType] = useState<ProjectType>("saas");
  const [hasAuth, setHasAuth] = useState(true);
  const [hasBilling, setHasBilling] = useState(true);
  const [hasRealtime, setHasRealtime] = useState(false);
  const [hasDesignSystem, setHasDesignSystem] = useState(true);
  const [speed, setSpeed] = useState<"standard" | "accelerated">("standard");

  if (!isOpen) return null;

  // Base calculations
  let baseWeeks = 4;
  let basePrice = 12000;

  if (projectType === "mvp") {
    baseWeeks = 3;
    basePrice = 9500;
  } else if (projectType === "saas") {
    baseWeeks = 5;
    basePrice = 16000;
  } else if (projectType === "telemetry") {
    baseWeeks = 6;
    basePrice = 22000;
  } else if (projectType === "audit") {
    baseWeeks = 2;
    basePrice = 6500;
  }

  if (hasAuth) {
    baseWeeks += 0.5;
    basePrice += 2000;
  }
  if (hasBilling) {
    baseWeeks += 0.5;
    basePrice += 2500;
  }
  if (hasRealtime) {
    baseWeeks += 1;
    basePrice += 3500;
  }
  if (hasDesignSystem) {
    baseWeeks += 1;
    basePrice += 3000;
  }

  if (speed === "accelerated") {
    baseWeeks = Math.max(2, Math.round(baseWeeks * 0.7));
    basePrice = Math.round(basePrice * 1.25);
  }

  const estimatedBudgetRange =
    basePrice < 10000
      ? "< $10k"
      : basePrice <= 25000
      ? "$10k-$25k"
      : basePrice <= 50000
      ? "$25k-$50k"
      : "$50k+";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/85 backdrop-blur-xl">
      <div
        className="w-full max-w-2xl rounded-2xl bg-surface-elevated border border-border shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calculator className="w-4 h-4 text-accent" />
            <span className="text-xs font-mono tracking-wider text-foreground uppercase">
              Interactive Sprint Estimator
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-foreground-faint hover:text-foreground p-1 rounded hover:bg-border"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Project Type */}
          <div>
            <label className="text-[11px] font-mono text-foreground-faint uppercase block mb-2">
              1. Project Category
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: "mvp" as ProjectType, label: "0-to-1 MVP" },
                { id: "saas" as ProjectType, label: "Enterprise SaaS" },
                { id: "telemetry" as ProjectType, label: "Data Telemetry" },
                { id: "audit" as ProjectType, label: "Code Audit / Perf" },
              ].map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setProjectType(item.id)}
                  className={`p-2.5 rounded-lg border text-xs font-mono text-center transition-all ${
                    projectType === item.id
                      ? "bg-accent-muted border-accent text-foreground"
                      : "bg-surface border-border text-foreground-muted hover:border-border-strong"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Deliverables / Scope */}
          <div>
            <label className="text-[11px] font-mono text-foreground-faint uppercase block mb-2">
              2. Core Capabilities Needed
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <button
                type="button"
                onClick={() => setHasAuth(!hasAuth)}
                className={`p-2.5 rounded-lg border flex items-center justify-between ${
                  hasAuth
                    ? "bg-accent-muted border-accent text-foreground"
                    : "bg-surface border-border text-foreground-faint"
                }`}
              >
                <span>Auth &amp; RBAC Security</span>
                {hasAuth && <Check className="w-3.5 h-3.5 text-accent" />}
              </button>

              <button
                type="button"
                onClick={() => setHasBilling(!hasBilling)}
                className={`p-2.5 rounded-lg border flex items-center justify-between ${
                  hasBilling
                    ? "bg-accent-muted border-accent text-foreground"
                    : "bg-surface border-border text-foreground-faint"
                }`}
              >
                <span>Stripe Billing &amp; Subscriptions</span>
                {hasBilling && <Check className="w-3.5 h-3.5 text-accent" />}
              </button>

              <button
                type="button"
                onClick={() => setHasRealtime(!hasRealtime)}
                className={`p-2.5 rounded-lg border flex items-center justify-between ${
                  hasRealtime
                    ? "bg-accent-muted border-accent text-foreground"
                    : "bg-surface border-border text-foreground-faint"
                }`}
              >
                <span>WebSockets &amp; Real-time Streams</span>
                {hasRealtime && <Check className="w-3.5 h-3.5 text-accent" />}
              </button>

              <button
                type="button"
                onClick={() => setHasDesignSystem(!hasDesignSystem)}
                className={`p-2.5 rounded-lg border flex items-center justify-between ${
                  hasDesignSystem
                    ? "bg-accent-muted border-accent text-foreground"
                    : "bg-surface border-border text-foreground-faint"
                }`}
              >
                <span>Custom Tailwind Design System</span>
                {hasDesignSystem && <Check className="w-3.5 h-3.5 text-accent" />}
              </button>
            </div>
          </div>

          {/* Speed */}
          <div>
            <label className="text-[11px] font-mono text-foreground-faint uppercase block mb-2">
              3. Delivery Velocity
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setSpeed("standard")}
                className={`p-3 rounded-lg border text-xs font-mono text-left ${
                  speed === "standard"
                    ? "bg-surface-elevated border-accent text-foreground"
                    : "bg-surface border-border text-foreground-faint"
                }`}
              >
                <div className="font-semibold text-foreground">Standard Cadence</div>
                <div className="text-[11px] text-foreground-muted">Iterative weekly releases</div>
              </button>

              <button
                type="button"
                onClick={() => setSpeed("accelerated")}
                className={`p-3 rounded-lg border text-xs font-mono text-left ${
                  speed === "accelerated"
                    ? "bg-accent-muted border-accent text-foreground"
                    : "bg-surface border-border text-foreground-faint"
                }`}
              >
                <div className="font-semibold text-foreground flex items-center gap-1">
                  <span>Accelerated Blitz</span>
                  <Sparkles className="w-3 h-3 text-accent" />
                </div>
                <div className="text-[11px] text-foreground-muted">Dedicated dual-founder focus</div>
              </button>
            </div>
          </div>

          {/* Results calculation display */}
          <div className="p-4 rounded-xl bg-surface border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-[10px] font-mono text-foreground-faint uppercase">ESTIMATED TIMELINE</div>
              <div className="text-xl font-bold font-mono text-foreground">
                ~{baseWeeks} Weeks to Production
              </div>
            </div>

            <div className="sm:text-right">
              <div className="text-[10px] font-mono text-foreground-faint uppercase">ESTIMATED INVESTMENT</div>
              <div className="text-xl font-bold font-mono text-accent">
                ~${basePrice.toLocaleString()} ({estimatedBudgetRange})
              </div>
            </div>
          </div>

          {/* CTA button */}
          <button
            onClick={() => {
              onSelectBudget?.(estimatedBudgetRange);
              onClose();
              const contactEl = document.getElementById("contact");
              contactEl?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full py-3 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground font-mono text-xs flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <span>Apply Estimate to Technical Brief</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
