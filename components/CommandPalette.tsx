"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Layers,
  Briefcase,
  GitCommit,
  Users,
  Send,
  Calendar,
  Calculator,
  X,
} from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
  onOpenEstimator?: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenBooking,
  onOpenEstimator,
}: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          const evt = new CustomEvent("open-command-palette");
          window.dispatchEvent(evt);
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: "services",
      title: "Core Capabilities & Engineering Services",
      category: "Navigation",
      icon: Layers,
      action: () => {
        router.push("/#services");
        onClose();
      },
    },
    {
      id: "work",
      title: "Featured Case Studies & Work",
      category: "Navigation",
      icon: Briefcase,
      action: () => {
        router.push("/#work");
        onClose();
      },
    },
    {
      id: "synapse",
      title: "Case Study: Synapse AI (Telemetry SaaS)",
      category: "Projects",
      icon: Briefcase,
      action: () => {
        router.push("/work/synapse-ai");
        onClose();
      },
    },
    {
      id: "vortex",
      title: "Case Study: Vortex Financial (Fintech Engine)",
      category: "Projects",
      icon: Briefcase,
      action: () => {
        router.push("/work/vortex-financial");
        onClose();
      },
    },
    {
      id: "hyperscale",
      title: "Case Study: HyperScale Health (HIPAA Telehealth)",
      category: "Projects",
      icon: Briefcase,
      action: () => {
        router.push("/work/hyperscale-health");
        onClose();
      },
    },
    {
      id: "process",
      title: "The 4-Step Sprint Architecture",
      category: "Navigation",
      icon: GitCommit,
      action: () => {
        router.push("/#process");
        onClose();
      },
    },
    {
      id: "founders",
      title: "About Founders (Irly Fizaharis & Yudhistira Fachri Muhammad)",
      category: "Navigation",
      icon: Users,
      action: () => {
        router.push("/#founders");
        onClose();
      },
    },
    {
      id: "book",
      title: "Book 30-Min Technical Discovery Session",
      category: "Action",
      icon: Calendar,
      action: () => {
        onClose();
        onOpenBooking();
      },
    },
    {
      id: "estimator",
      title: "Open Interactive Sprint Budget Estimator",
      category: "Tool",
      icon: Calculator,
      action: () => {
        onClose();
        onOpenEstimator?.();
      },
    },
    {
      id: "contact",
      title: "Submit Technical Brief / Project Inquiry",
      category: "Action",
      icon: Send,
      action: () => {
        router.push("/#contact");
        onClose();
      },
    },
  ];

  const filtered = actions.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-32 px-4 bg-background/80 backdrop-blur-xl transition-all">
      <div
        className="w-full max-w-xl rounded-xl bg-surface-elevated border border-border shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border">
          <Search className="w-4 h-4 text-accent" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section..."
            className="w-full bg-transparent text-sm text-foreground placeholder:text-foreground-faint focus:outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="text-foreground-faint hover:text-foreground p-1 rounded hover:bg-border"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs text-foreground-faint font-mono">
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg text-left text-xs text-foreground-muted hover:text-foreground hover:bg-surface border border-transparent hover:border-border transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-foreground-muted group-hover:text-accent transition-colors" />
                    <span className="font-mono text-[13px]">{item.title}</span>
                  </div>
                  <span className="text-[10px] font-mono text-foreground-faint px-1.5 py-0.5 rounded bg-border">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2 bg-surface border-t border-border flex items-center justify-between text-[11px] font-mono text-foreground-faint">
          <span>Navigation Shortcuts</span>
          <span>Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
}
