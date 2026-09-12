"use client";

import React from "react";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
	onOpenBooking?: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
	const metrics = [
		{ value: "100%", label: "ON-TIME DELIVERY", highlight: false },
		{ value: "Next.js", label: "REACT ARCHITECTURE", highlight: false },
		{ value: "< 1.0s", label: "FCP / 99+ LIGHTHOUSE", highlight: false },
		{ value: "$42M+", label: "CLIENT FUNDING RAISED", highlight: true },
	];

	const techBadges = [
		{ name: "Next.js 16", prefix: "▲" },
		{ name: "TypeScript", prefix: "TS" },
		{ name: "Tailwind CSS v4", prefix: "⚡" },
		{ name: "React 19", prefix: "⚛" },
		{ name: "Golang", prefix: "G" },
		{ name: "Supabase", prefix: "⚡" },
		{ name: "PostgreSQL", prefix: "🐘" },
		{ name: "Prisma", prefix: "▲" },
		{ name: "GraphQL", prefix: "◇" },
		{ name: "Vercel", prefix: "▲" },
		{ name: "Node.js", prefix: "⬢" },
		{ name: "Stripe", prefix: "S" },
		{ name: "Redis", prefix: "◆" },
	];

	return (
		<section className='relative pt-36 sm:pt-44 pb-20 overflow-hidden bg-grid-cyber'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center'>
				{/* Top Tag Pill */}

				{/* Main Title */}
				<h1 className='text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground max-w-5xl mx-auto leading-[1.12] mb-6'>
					<span className='text-accent'>Ease-to-Use </span> Web & Data Solutions
					for Your Business
				</h1>

				{/* Subtitle */}
				<p className='text-base sm:text-lg lg:text-xl text-foreground-muted max-w-3xl mx-auto font-normal leading-relaxed mb-10'>
					We partner with venture-backed startups and high-growth businesses to
					architect, build, and scale world-class full-stack digital products
					with zero agency bloat.
				</p>

				{/* Action Buttons */}
				<div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-16'>
					<button
						onClick={onOpenBooking}
						className='w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-accent hover:bg-accent/90 text-accent-foreground text-sm font-medium transition-all duration-200 hover:scale-[1.02] cursor-pointer'>
						<Calendar className='w-4 h-4 text-accent-foreground/90' />
						<span>Get in Touch / Book Call</span>
					</button>

					<a
						href='#work'
						className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-border text-foreground-muted hover:text-foreground hover:border-border-strong text-sm font-medium transition-all duration-200'>
						<span>Explore Case Studies</span>
						<ArrowRight className='w-4 h-4 text-foreground-muted' />
					</a>
				</div>

				{/* 4 Metric Cards Strip (from screen.png) */}
				<div className='grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-20'>
					{metrics.map((metric, i) => (
						<div
							key={i}
							className='bg-surface-elevated/80 backdrop-blur-md border border-border hover:border-border-strong rounded-lg p-4 sm:p-5 text-center transition-all duration-300 hover:shadow-[0_4px_25px_rgba(0,0,0,0.5)]'>
							<div
								className={`text-2xl sm:text-3xl font-semibold tracking-tight mb-1 font-mono ${
									metric.highlight ? "text-accent" : "text-foreground"
								}`}>
								{metric.value}
							</div>
							<div className='text-[11px] font-mono tracking-wider text-foreground-muted uppercase'>
								{metric.label}
							</div>
						</div>
					))}
				</div>

				{/* Technology Ticker / Social Proof */}
				<div className='pt-8 pb-4'>
					<p className='text-[11px] tracking-widest text-foreground-muted font-mono uppercase mb-5'>
						TRUSTED BY INNOVATIVE FOUNDERS &amp; SCALING ENGINEERING TEAMS
					</p>

					<div className='flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto'>
						{techBadges.map((badge, idx) => (
							<div
								key={idx}
								className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-elevated/60 border border-border hover:border-border-strong hover:bg-surface-elevated text-xs font-mono text-foreground-muted hover:text-foreground transition-all cursor-default'>
								<span className='text-foreground-muted font-bold text-[11px]'>
									{badge.prefix}
								</span>
								<span>{badge.name}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
