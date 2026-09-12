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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090D16]/85 backdrop-blur-xl">
      <div
        className="w-full max-w-2xl rounded-2xl bg-[#111827] border border-[#1E293B] shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#1E293B] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calculator className="w-4 h-4 text-[#06B6D4]" />
            <span className="text-xs font-mono tracking-wider text-white uppercase">
              Interactive Sprint Estimator
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#64748B] hover:text-white p-1 rounded hover:bg-[#1E293B]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Project Type */}
          <div>
            <label className="text-[11px] font-mono text-[#64748B] uppercase block mb-2">
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
                      ? "bg-[#7C3AED]/20 border-[#7C3AED] text-white"
                      : "bg-[#090D16] border-[#1E293B] text-[#94A3B8] hover:border-[#334155]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Deliverables / Scope */}
          <div>
            <label className="text-[11px] font-mono text-[#64748B] uppercase block mb-2">
              2. Core Capabilities Needed
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <button
                type="button"
                onClick={() => setHasAuth(!hasAuth)}
                className={`p-2.5 rounded-lg border flex items-center justify-between ${
                  hasAuth
                    ? "bg-[#06B6D4]/15 border-[#06B6D4] text-white"
                    : "bg-[#090D16] border-[#1E293B] text-[#64748B]"
                }`}
              >
                <span>Auth &amp; RBAC Security</span>
                {hasAuth && <Check className="w-3.5 h-3.5 text-[#06B6D4]" />}
              </button>

              <button
                type="button"
                onClick={() => setHasBilling(!hasBilling)}
                className={`p-2.5 rounded-lg border flex items-center justify-between ${
                  hasBilling
                    ? "bg-[#06B6D4]/15 border-[#06B6D4] text-white"
                    : "bg-[#090D16] border-[#1E293B] text-[#64748B]"
                }`}
              >
                <span>Stripe Billing &amp; Subscriptions</span>
                {hasBilling && <Check className="w-3.5 h-3.5 text-[#06B6D4]" />}
              </button>

              <button
                type="button"
                onClick={() => setHasRealtime(!hasRealtime)}
                className={`p-2.5 rounded-lg border flex items-center justify-between ${
                  hasRealtime
                    ? "bg-[#06B6D4]/15 border-[#06B6D4] text-white"
                    : "bg-[#090D16] border-[#1E293B] text-[#64748B]"
                }`}
              >
                <span>WebSockets &amp; Real-time Streams</span>
                {hasRealtime && <Check className="w-3.5 h-3.5 text-[#06B6D4]" />}
              </button>

              <button
                type="button"
                onClick={() => setHasDesignSystem(!hasDesignSystem)}
                className={`p-2.5 rounded-lg border flex items-center justify-between ${
                  hasDesignSystem
                    ? "bg-[#06B6D4]/15 border-[#06B6D4] text-white"
                    : "bg-[#090D16] border-[#1E293B] text-[#64748B]"
                }`}
              >
                <span>Custom Tailwind Design System</span>
                {hasDesignSystem && <Check className="w-3.5 h-3.5 text-[#06B6D4]" />}
              </button>
            </div>
          </div>

          {/* Speed */}
          <div>
            <label className="text-[11px] font-mono text-[#64748B] uppercase block mb-2">
              3. Delivery Velocity
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setSpeed("standard")}
                className={`p-3 rounded-lg border text-xs font-mono text-left ${
                  speed === "standard"
                    ? "bg-[#111827] border-[#06B6D4] text-white"
                    : "bg-[#090D16] border-[#1E293B] text-[#64748B]"
                }`}
              >
                <div className="font-semibold text-white">Standard Cadence</div>
                <div className="text-[11px] text-[#94A3B8]">Iterative weekly releases</div>
              </button>

              <button
                type="button"
                onClick={() => setSpeed("accelerated")}
                className={`p-3 rounded-lg border text-xs font-mono text-left ${
                  speed === "accelerated"
                    ? "bg-[#7C3AED]/20 border-[#7C3AED] text-white"
                    : "bg-[#090D16] border-[#1E293B] text-[#64748B]"
                }`}
              >
                <div className="font-semibold text-white flex items-center gap-1">
                  <span>Accelerated Blitz</span>
                  <Sparkles className="w-3 h-3 text-[#FFB784]" />
                </div>
                <div className="text-[11px] text-[#94A3B8]">Dedicated dual-founder focus</div>
              </button>
            </div>
          </div>

          {/* Results calculation display */}
          <div className="p-4 rounded-xl bg-[#090D16] border border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-[10px] font-mono text-[#64748B] uppercase">ESTIMATED TIMELINE</div>
              <div className="text-xl font-bold font-mono text-white">
                ~{baseWeeks} Weeks to Production
              </div>
            </div>

            <div className="sm:text-right">
              <div className="text-[10px] font-mono text-[#64748B] uppercase">ESTIMATED INVESTMENT</div>
              <div className="text-xl font-bold font-mono text-[#06B6D4]">
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
            className="w-full py-3 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-mono text-xs flex items-center justify-center gap-2 cursor-pointer transition-all shadow-[0_0_20px_rgba(124,58,237,0.4)]"
          >
            <span>Apply Estimate to Technical Brief</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
