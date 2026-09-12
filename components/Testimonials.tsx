"use client";

import { Star } from "lucide-react";
import { testimonials } from "@/content/testimonials";

export default function Testimonials() {
  return (
    <section className="py-24 relative z-10 border-t border-border/60">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Engineered by Principals. No Juniors.
          </h2>
          <p className="text-sm sm:text-base text-foreground-muted">
            Feedback from venture-backed founders and engineering executives who
            needed high-velocity results without delegation overhead.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-surface-elevated/80 backdrop-blur-md border border-border hover:border-border-strong rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] group"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-foreground-muted text-foreground-muted"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-foreground leading-relaxed italic mb-8 font-normal">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-5 border-t border-border/70">
                <div
                  className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-mono font-bold text-xs text-accent-foreground shrink-0 shadow-md"
                >
                  {t.avatarInitials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    {t.author}
                  </div>
                  <div className="text-xs font-mono text-foreground-muted">
                    {t.role}, {t.company}
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
