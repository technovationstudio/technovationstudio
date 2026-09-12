"use client";

import React from "react";
import { founders } from "@/content/founders";

export default function Founders() {
  return (
    <section
      id="founders"
      className="py-24 relative z-10 border-t border-border/60"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Direct Access to Studio Founders
          </h2>
          <p className="text-sm sm:text-base text-foreground-muted">
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
              className="bg-surface-elevated/80 backdrop-blur-md border border-border hover:border-accent/50 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 transition-all duration-300 group"
            >
              {/* Founder Avatar / Graphic */}
              <div className="w-full sm:w-44 h-48 sm:h-auto rounded-xl bg-surface-elevated border border-border flex flex-col items-center justify-between p-4 shrink-0 relative overflow-hidden">
                {/* Top status indicator */}
                <div className="w-full flex items-center justify-between text-[10px] font-mono text-foreground-faint z-10">
                  <span>FOUNDER</span>
                  <span className="w-2 h-2 rounded-full bg-accent" />
                </div>

                {/* Styled Center Avatar Icon & Initials */}
                <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center font-mono font-bold text-xl text-foreground shadow-xl z-10 group-hover:scale-105 transition-transform group-hover:border-accent">
                  {f.avatarPlaceholder}
                </div>

                {/* Tech tag pill at bottom of photo card */}
                <div className="z-10 text-[10px] font-mono text-foreground-muted px-2 py-0.5 rounded bg-surface border border-border">
                  {f.id === "irly-fizaharis"
                    ? "SYSTEMS ARCHITECT"
                    : "PRODUCT ENGINEER"}
                </div>
              </div>

              {/* Founder Details */}
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-foreground">
                      {f.name}
                    </h3>
                  </div>

                  <div className="text-xs font-mono tracking-wider text-accent uppercase mb-3">
                    {f.role}
                  </div>

                  <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed mb-6 font-normal">
                    {f.bio}
                  </p>
                </div>

                <div>
                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/70">
                    {f.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-surface border border-border text-xs font-mono text-foreground-muted"
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
