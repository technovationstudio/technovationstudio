"use client";

import React from "react";
import { GitCommit, CheckCircle2 } from "lucide-react";
import { processSteps } from "@/content/process";

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 relative z-10 border-t border-[#1E293B]/60"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
            The 4-Step Sprint Architecture
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8]">
            Disciplined agile execution engineered to eliminate bottlenecks,
            minimize churn, and guarantee reliable ship dates.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-[#111827]/80 backdrop-blur-md border border-[#1E293B] hover:border-[#7C3AED]/50 rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_25px_rgba(124,58,237,0.12)] group relative"
            >
              <div>
                {/* Step Number Badge */}
                <div className="w-10 h-10 rounded-lg bg-[#090D16] border border-[#1E293B] flex items-center justify-center font-mono font-bold text-sm text-[#06B6D4] group-hover:border-[#7C3AED] group-hover:text-white transition-all mb-6">
                  {step.stepNumber}
                </div>

                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#F8FAFC]">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6 font-normal">
                  {step.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-6 border-t border-[#1E293B]/60 pt-4">
                  {step.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-[11px] text-[#94A3B8]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#06B6D4] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Estimate Footer */}
              <div className="pt-4 border-t border-[#1E293B] flex items-center justify-between text-xs font-mono text-[#64748B]">
                <span className="text-[#06B6D4] tracking-wider">
                  {step.estimate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
