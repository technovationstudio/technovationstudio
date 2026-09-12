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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl">
      <div
        className="w-full max-w-lg rounded-2xl bg-surface-elevated border border-border shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span className="text-xs font-mono tracking-wider text-accent uppercase">
              Schedule Technical Discovery Call
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-foreground-faint hover:text-foreground p-1 rounded hover:bg-border"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {booked ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-accent-muted border border-accent/40 flex items-center justify-center mx-auto text-accent">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">
              Discovery Call Confirmed!
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed max-w-sm mx-auto">
              We have reserved{" "}
              <strong className="text-foreground">{selectedDate}</strong> at{" "}
              <strong className="text-accent">{selectedTime}</strong>. A
              Google Meet invitation has been dispatched to{" "}
              <strong className="text-foreground">{email}</strong>.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setBooked(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground text-xs font-mono"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-1">
                Direct Architecture Review with Irly &amp; Yudhis
              </h4>
              <p className="text-xs text-foreground-muted">
                30-minute private call to evaluate feasibility, estimate budget,
                and architect your roadmap.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div>
                <label className="text-[10px] text-foreground-faint uppercase block mb-1">
                  Selected Slot
                </label>
                <div className="p-2.5 rounded-md bg-surface border border-border text-accent">
                  {selectedDate}
                </div>
              </div>
              <div>
                <label className="text-[10px] text-foreground-faint uppercase block mb-1">
                  Time
                </label>
                <div className="p-2.5 rounded-md bg-surface border border-border text-foreground">
                  {selectedTime}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-[10px] font-mono text-foreground-faint uppercase block mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Marcus Vance"
                  className="w-full bg-surface border border-border focus:border-accent rounded-md px-3 py-2 text-xs text-foreground focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-foreground-faint uppercase block mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="marcus@startup.io"
                  className="w-full bg-surface border border-border focus:border-accent rounded-md px-3 py-2 text-xs text-foreground focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-foreground-faint uppercase block mb-1">
                  Project Notes / Key Questions
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Briefly describe your stack, timeline, or key technical challenge..."
                  className="w-full bg-surface border border-border focus:border-accent rounded-md p-3 text-xs text-foreground focus:outline-none resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground font-medium text-xs font-mono transition-all cursor-pointer mt-2"
            >
              Confirm 30-Min Discovery Session
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
