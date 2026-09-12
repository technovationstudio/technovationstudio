import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 pt-32 pb-24 max-w-3xl mx-auto px-4 sm:px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-accent mb-8">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="space-y-4 text-sm text-foreground-muted leading-relaxed">
          <p>
            TECHNOVATION Studio LLC respects your privacy. We strictly safeguard all client information,
            architectural blueprints, proprietary codebases, and correspondence.
          </p>
          <p>
            We sign and adhere to mutual Non-Disclosure Agreements (NDAs) prior to inspecting any private
            repositories or proprietary production infrastructure.
          </p>
          <p>
            For privacy-related inquiries, reach out directly to security@technovationstudio.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
