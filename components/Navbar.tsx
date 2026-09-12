"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, Command, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenBooking?: () => void;
  onOpenCommand?: () => void;
}

export default function Navbar({ onOpenBooking, onOpenCommand }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "Founders", href: "#founders" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            : "bg-background/80 backdrop-blur-md py-4 border-b border-border/60"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Availability Pill */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-8 h-8 rounded-lg bg-accent p-[1.5px] transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-background rounded-[7px] flex items-center justify-center">
                  <div className="w-3.5 h-3.5 border-2 border-accent rotate-45 group-hover:border-accent transition-colors" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold tracking-wider text-foreground flex items-center gap-1.5 leading-none font-mono">
                  TECHNOVATION
                </span>
                <span className="text-[9px] uppercase tracking-widest text-foreground-muted font-mono leading-tight mt-1">
                  DIGITAL PRODUCT STUDIO
                </span>
              </div>
            </Link>

            {/* Availability Pill (from screen.png) */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-foreground-muted text-[11px] font-mono tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground-muted opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground-muted"></span>
              </span>
              AVAILABLE
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] text-foreground-muted hover:text-foreground transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Quick Command Palette Button */}
            <button
              onClick={onOpenCommand}
              title="Open Command Palette (⌘K)"
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-surface-elevated border border-border text-foreground-muted hover:text-foreground hover:border-border-strong text-xs font-mono transition-colors"
            >
              <Command className="w-3.5 h-3.5 text-accent" />
              <span>⌘K</span>
            </button>

            {/* Book Discovery Call Button */}
            <button
              onClick={onOpenBooking}
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent hover:bg-accent/90 text-accent-foreground text-xs sm:text-[13px] font-medium transition-all duration-200 cursor-pointer"
            >
              <span>Book Discovery Call</span>
              <Calendar className="w-3.5 h-3.5 text-accent-foreground/90" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md bg-surface-elevated border border-border text-foreground-muted hover:text-foreground"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-2xl px-6 py-6 space-y-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-foreground-muted text-[11px] font-mono tracking-wider w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground-muted opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground-muted"></span>
              </span>
              AVAILABLE
            </div>

            <div className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-foreground-muted hover:text-foreground py-1 flex items-center justify-between border-b border-border/40"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-foreground-faint" />
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking?.();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md bg-accent text-accent-foreground text-sm font-medium"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Discovery Call</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommand?.();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-md bg-surface-elevated border border-border text-foreground-muted text-xs font-mono"
              >
                <Command className="w-3.5 h-3.5 text-accent" />
                <span>Open Command Palette (⌘K)</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}