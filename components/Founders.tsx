"use client";

import React from "react";
import { founders } from "@/content/founders";

export default function Founders() {
  return (
    <section
      id="founders"
      className="py-24 relative z-10 border-t border-[#1E293B]/60"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
            Direct Access to Studio Founders
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8]">
            No junior delegates, account managers, or outsourced contractors.
            Every line of code and architectural decision comes directly from
            the founders.
          </p>
        </div>

        {/* 2-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((f) => (
            <div
              key={f.id}
              className="bg-[#111827]/80 backdrop-blur-md border border-[#1E293B] hover:border-[#7C3AED]/50 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 transition-all duration-300 hover:shadow-[0_0_35px_rgba(124,58,237,0.15)] group"
            >
              {/* Founder Avatar / Graphic */}
              <div className="w-full sm:w-44 h-48 sm:h-auto rounded-xl bg-gradient-to-br from-[#1E293B] to-[#090D16] border border-[#1E293B] flex flex-col items-center justify-between p-4 shrink-0 relative overflow-hidden">
                {/* Background glow and subtle mesh */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 via-transparent to-[#06B6D4]/10 pointer-events-none" />

                {/* Top status indicator */}
                <div className="w-full flex items-center justify-between text-[10px] font-mono text-[#64748B] z-10">
                  <span>FOUNDER</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981]" />
                </div>

                {/* Styled Center Avatar Icon & Initials */}
                <div className="w-16 h-16 rounded-full bg-[#090D16] border border-[#334155] flex items-center justify-center font-mono font-bold text-xl text-white shadow-xl z-10 group-hover:scale-105 transition-transform group-hover:border-[#06B6D4]">
                  {f.avatarPlaceholder}
                </div>

                {/* Tech tag pill at bottom of photo card */}
                <div className="z-10 text-[10px] font-mono text-[#06B6D4] px-2 py-0.5 rounded bg-[#090D16]/90 border border-[#1E293B]">
                  {f.id === "irly-fizaharis"
                    ? "SYSTEMS ARCHITECT"
                    : "PRODUCT ENGINEER"}
                </div>
              </div>

              {/* Founder Details */}
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#F8FAFC]">
                      {f.name}
                    </h3>
                  </div>

                  <div className="text-xs font-mono tracking-wider text-[#06B6D4] uppercase mb-3">
                    {f.role}
                  </div>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6 font-normal">
                    {f.bio}
                  </p>
                </div>

                <div>
                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1E293B]/70">
                    {f.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-[#090D16] border border-[#1E293B] text-xs font-mono text-[#DFE2EF]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
