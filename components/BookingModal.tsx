"use client";

import React, { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selectedDate] = useState("Wednesday, Sep 16, 2026");
  const [selectedTime] = useState("02:00 PM EST");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090D16]/80 backdrop-blur-xl">
      <div
        className="w-full max-w-lg rounded-2xl bg-[#111827] border border-[#1E293B] shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#1E293B] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-ping" />
            <span className="text-xs font-mono tracking-wider text-[#06B6D4] uppercase">
              Schedule Technical Discovery Call
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#64748B] hover:text-white p-1 rounded hover:bg-[#1E293B]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {booked ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-semibold text-white">
              Discovery Call Confirmed!
            </h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-sm mx-auto">
              We have reserved{" "}
              <strong className="text-white">{selectedDate}</strong> at{" "}
              <strong className="text-[#06B6D4]">{selectedTime}</strong>. A
              Google Meet invitation has been dispatched to{" "}
              <strong className="text-white">{email}</strong>.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setBooked(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-mono"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-white mb-1">
                Direct Architecture Review with Irly &amp; Yudhis
              </h4>
              <p className="text-xs text-[#94A3B8]">
                30-minute private call to evaluate feasibility, estimate budget,
                and architect your roadmap.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div>
                <label className="text-[10px] text-[#64748B] uppercase block mb-1">
                  Selected Slot
                </label>
                <div className="p-2.5 rounded-md bg-[#090D16] border border-[#1E293B] text-[#06B6D4]">
                  {selectedDate}
                </div>
              </div>
              <div>
                <label className="text-[10px] text-[#64748B] uppercase block mb-1">
                  Time
                </label>
                <div className="p-2.5 rounded-md bg-[#090D16] border border-[#1E293B] text-white">
                  {selectedTime}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-[10px] font-mono text-[#64748B] uppercase block mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Marcus Vance"
                  className="w-full bg-[#090D16] border border-[#1E293B] focus:border-[#7C3AED] rounded-md px-3 py-2 text-xs text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-[#64748B] uppercase block mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="marcus@startup.io"
                  className="w-full bg-[#090D16] border border-[#1E293B] focus:border-[#7C3AED] rounded-md px-3 py-2 text-xs text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-[#64748B] uppercase block mb-1">
                  Project Notes / Key Questions
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Briefly describe your stack, timeline, or key technical challenge..."
                  className="w-full bg-[#090D16] border border-[#1E293B] focus:border-[#7C3AED] rounded-md p-3 text-xs text-white focus:outline-none resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-medium text-xs font-mono transition-all shadow-[0_0_20px_rgba(124,58,237,0.4)] cursor-pointer mt-2"
            >
              Confirm 30-Min Discovery Session
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
