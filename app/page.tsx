"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Founders from "@/components/Founders";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import BookingModal from "@/components/BookingModal";
import ProjectEstimatorModal from "@/components/ProjectEstimatorModal";

export default function HomePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [estimatorModalOpen, setEstimatorModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenCommand = () => setCommandPaletteOpen(true);
    window.addEventListener("open-command-palette", handleOpenCommand);
    return () =>
      window.removeEventListener("open-command-palette", handleOpenCommand);
  }, []);

  return (
    <div className="min-h-screen bg-[#090D16] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#06B6D4]/25 selection:text-[#06B6D4] relative">
      {/* Pinned Sticky Glassmorphic Navbar */}
      <Navbar
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenCommand={() => setCommandPaletteOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section with Metric Strip & Tech Ticker */}
        <Hero onOpenBooking={() => setBookingModalOpen(true)} />

        {/* 4 Core Capabilities ("Architected for Extreme Scale") */}
        <Capabilities />

        {/* Selected Portfolio Case Studies ("Engineered for Velocity & Proof") */}
        <Portfolio />

        {/* Verified Founder Testimonials ("Engineered by Principals. No Juniors.") */}
        {/* <Testimonials /> */}

        {/* 4-Step Execution Protocol ("The 4-Step Sprint Architecture") */}
        <Process />

        {/* Studio Founders Spotlight ("Direct Access to Studio Founders") */}
        <Founders />

        {/* Contact Form & 30-Min Discovery Booking ("Let's Build Something Exceptional") */}
        <ContactSection onOpenBookingModal={() => setBookingModalOpen(true)} />
      </main>

      {/* Modern Studio Footer */}
      <Footer />

      {/* Global Command Palette (⌘K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenEstimator={() => setEstimatorModalOpen(true)}
      />

      {/* Direct 30-Min Discovery Session Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* Interactive Sprint Budget & Timeline Estimator */}
      <ProjectEstimatorModal
        isOpen={estimatorModalOpen}
        onClose={() => setEstimatorModalOpen(false)}
      />
    </div>
  );
}
