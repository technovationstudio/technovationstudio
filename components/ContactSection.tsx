"use client";

import React, { useState } from "react";
import {
  Calendar,
  Send,
  CheckCircle2,
  Clock,
  Users,
  ShieldCheck,
  ChevronDown,
  Loader2,
  Sparkles,
  ExternalLink,
} from "lucide-react";

interface ContactSectionProps {
  onOpenBookingModal?: () => void;
}

export default function ContactSection({
  onOpenBookingModal,
}: ContactSectionProps) {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "Full-Stack Web Engineering (Next.js)",
    budget: "$10k-$25k",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Booking Card State
  const [timezone, setTimezone] = useState(
    "(UTC-05:00) Eastern Time (US & Canada)",
  );
  const [selectedDay, setSelectedDay] = useState("Tue, Sep 15");
  const [selectedTime, setSelectedTime] = useState("02:00 PM");
  const [slotReserved, setSlotReserved] = useState(false);

  const budgetOptions = ["< $10k", "$10k-$25k", "$25k-$50k", "$50k+"];

  const days = [
    { label: "Mon", date: "Sep 14" },
    { label: "Tue", date: "Sep 15" },
    { label: "Wed", date: "Sep 16" },
    { label: "Thu", date: "Sep 17" },
  ];

  const times = ["10:00 AM", "02:00 PM", "04:30 PM"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit project brief.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative z-10 border-t border-[#1E293B]/60"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
            Let&apos;s Build Something Exceptional
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8]">
            Reach out via our technical brief form or book an immediate
            30-minute discovery call directly with Irly and Yudhis.
          </p>
        </div>

        {/* 2-Column Grid matching screen.png */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Instant Booking Card */}
          <div className="lg:col-span-5 bg-[#111827]/90 backdrop-blur-md border border-[#1E293B] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#06B6D4]/10 blur-[60px] pointer-events-none rounded-full" />

            <div>
              {/* Badge & Modal Opener */}
              <div className="flex items-center justify-between mb-4">
                {onOpenBookingModal && (
                  <button
                    onClick={onOpenBookingModal}
                    type="button"
                    className="text-[11px] font-mono text-[#94A3B8] hover:text-[#06B6D4] flex items-center gap-1"
                  >
                    <span>Expand Modal</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                30-Min Technical Discovery Session
              </h3>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6 font-normal">
                Review your architecture, evaluate scope feasibility, and
                establish an immediate sprint timeline with the founders.
              </p>

              {/* Perks / Badges list */}
              <div className="space-y-2.5 mb-6 text-xs text-[#DFE2EF] font-mono">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#06B6D4] shrink-0" />
                  <span>30 min via Zoom or Google Meet</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#7C3AED] shrink-0" />
                  <span>100% Direct with Irly &amp; Yudhis</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Mutual NDA honored by default</span>
                </div>
              </div>

              {/* Timezone Selector */}
              <div className="mb-5">
                <label className="block text-[10px] font-mono text-[#64748B] uppercase tracking-wider mb-1.5">
                  YOUR CURRENT TIMEZONE
                </label>
                <div className="relative">
                  <select
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    className="w-full bg-[#090D16] border border-[#1E293B] rounded-lg px-3 py-2 text-xs font-mono text-white appearance-none focus:outline-none focus:border-[#7C3AED]"
                  >
                    <option value="(UTC-05:00) Eastern Time (US & Canada)">
                      (UTC-05:00) Eastern Time (US &amp; Canada)
                    </option>
                    <option value="(UTC-08:00) Pacific Time (US & Canada)">
                      (UTC-08:00) Pacific Time (US &amp; Canada)
                    </option>
                    <option value="(UTC+00:00) London / GMT">
                      (UTC+00:00) London / GMT
                    </option>
                    <option value="(UTC+01:00) Central European Time">
                      (UTC+01:00) Central European Time
                    </option>
                    <option value="(UTC+07:00) Indochina Time / Bangkok">
                      (UTC+07:00) Indochina Time / Bangkok
                    </option>
                    <option value="(UTC+08:00) Singapore / Hong Kong">
                      (UTC+08:00) Singapore / Hong Kong
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#64748B] absolute right-3 top-2.5 pointer-events-none" />
                </div>
              </div>

              {/* Slot Day Picker */}
              <div className="mb-4">
                <label className="block text-[10px] font-mono text-[#64748B] uppercase tracking-wider mb-2">
                  AVAILABLE SESSIONS NEXT WEEK
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {days.map((d) => {
                    const id = `${d.label}, ${d.date}`;
                    const isSelected = selectedDay === id;
                    return (
                      <button
                        type="button"
                        key={id}
                        onClick={() => setSelectedDay(id)}
                        className={`p-2 rounded-lg border text-center transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#7C3AED]/20 border-[#7C3AED] text-white"
                            : "bg-[#090D16] border-[#1E293B] text-[#94A3B8] hover:border-[#334155]"
                        }`}
                      >
                        <div className="text-[10px] font-mono">{d.label}</div>
                        <div className="text-xs font-semibold">{d.date}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Slot Time Picker */}
              <div className="mb-6">
                <div className="grid grid-cols-3 gap-2">
                  {times.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`py-1.5 px-2 rounded-lg border text-xs font-mono text-center transition-all cursor-pointer ${
                        selectedTime === t
                          ? "bg-[#06B6D4]/20 border-[#06B6D4] text-[#06B6D4] font-semibold"
                          : "bg-[#090D16] border-[#1E293B] text-[#94A3B8] hover:border-[#334155]"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reserve Button */}
              {slotReserved ? (
                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-center text-xs font-mono text-emerald-400">
                  ✓ Slot Reserved for {selectedDay} at {selectedTime}! Direct
                  invite sent.
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setSlotReserved(true)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-[#06B6D4] hover:bg-[#22D3EE] text-black font-semibold text-xs sm:text-sm font-mono transition-all duration-200 shadow-[0_0_20px_rgba(6,182,212,0.35)] cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Discovery Slot</span>
                </button>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#1E293B] text-center text-[11px] font-mono text-[#64748B]">
              Guaranteed response within 12 hours
            </div>
          </div>

          {/* Right Column: Technical Brief Form */}
          <div className="lg:col-span-7 bg-[#111827]/90 backdrop-blur-md border border-[#1E293B] rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#7C3AED]/10 blur-[60px] pointer-events-none rounded-full" />

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  Project Brief Delivered
                </h3>
                <p className="text-[#94A3B8] max-w-md mx-auto text-sm leading-relaxed">
                  Thank you,{" "}
                  <span className="text-white font-semibold">
                    {formData.name}
                  </span>
                  . Irly and Yudhis have received your specifications and will
                  respond directly to{" "}
                  <span className="text-[#06B6D4] font-mono">
                    {formData.email}
                  </span>{" "}
                  within 12 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      serviceType: "Full-Stack Web Engineering (Next.js)",
                      budget: "$10k-$25k",
                      description: "",
                    });
                  }}
                  className="mt-4 px-4 py-2 rounded-md bg-[#111827] border border-[#1E293B] text-xs font-mono text-[#94A3B8] hover:text-white"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMsg && (
                  <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/40 text-xs text-red-300 font-mono">
                    {errorMsg}
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-[#64748B] uppercase tracking-wider mb-2">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-[#090D16] border border-[#1E293B] focus:border-[#7C3AED] rounded-lg px-4 py-2.5 text-sm text-white placeholder-[#475569] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#64748B] uppercase tracking-wider mb-2">
                      WORK EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="sarah@company.com"
                      className="w-full bg-[#090D16] border border-[#1E293B] focus:border-[#7C3AED] rounded-lg px-4 py-2.5 text-sm text-white placeholder-[#475569] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-[11px] font-mono text-[#64748B] uppercase tracking-wider mb-2">
                    SERVICE TYPE
                  </label>
                  <div className="relative">
                    <select
                      value={formData.serviceType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          serviceType: e.target.value,
                        })
                      }
                      className="w-full bg-[#090D16] border border-[#1E293B] focus:border-[#7C3AED] rounded-lg px-4 py-2.5 text-sm text-white appearance-none focus:outline-none transition-colors"
                    >
                      <option value="Full-Stack Web Engineering (Next.js)">
                        Full-Stack Web Engineering (Next.js)
                      </option>
                      <option value="Data Analytics & Real-Time Dashboards">
                        Data Analytics &amp; Real-Time Dashboards
                      </option>
                      <option value="MVP & Venture Acceleration">
                        MVP &amp; Venture Acceleration
                      </option>
                      <option value="Codebase Modernization & Audits">
                        Codebase Modernization &amp; Audits
                      </option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#64748B] absolute right-4 top-3.5 pointer-events-none" />
                  </div>
                </div>

                {/* Estimated Budget Pills */}
                <div>
                  <label className="block text-[11px] font-mono text-[#64748B] uppercase tracking-wider mb-2">
                    ESTIMATED SPRINT BUDGET
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetOptions.map((opt) => {
                      const isSelected = formData.budget === opt;
                      return (
                        <button
                          type="button"
                          key={opt}
                          onClick={() =>
                            setFormData({ ...formData, budget: opt })
                          }
                          className={`py-2 px-3 rounded-lg border text-xs font-mono font-medium transition-all cursor-pointer text-center ${
                            isSelected
                              ? "bg-[#7C3AED] border-[#7C3AED] text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]"
                              : "bg-[#090D16] border-[#1E293B] text-[#94A3B8] hover:border-[#334155] hover:text-white"
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-[11px] font-mono text-[#64748B] uppercase tracking-wider mb-2">
                    PROJECT DESCRIPTION &amp; REQUIREMENTS
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="Tell us about what you're building, target timeline, and key technical bottlenecks..."
                    className="w-full bg-[#090D16] border border-[#1E293B] focus:border-[#7C3AED] rounded-lg p-4 text-sm text-white placeholder-[#475569] focus:outline-none transition-colors resize-none leading-relaxed"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] disabled:opacity-50 text-white font-medium text-sm transition-all duration-200 shadow-[0_0_25px_rgba(124,58,237,0.4)] hover:shadow-[0_0_35px_rgba(124,58,237,0.6)] cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Brief...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Brief</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
