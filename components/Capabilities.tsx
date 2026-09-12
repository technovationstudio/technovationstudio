"use client";

import React, { useState, useEffect } from "react";
import { Layers, Activity, Rocket, RefreshCw } from "lucide-react";

export default function Capabilities() {
	// Animated bar heights for the telemetry visualization
	const [telemetryBars, setTelemetryBars] = useState([
		30, 45, 60, 40, 75, 90, 65, 80, 55, 70, 95, 85, 60, 75, 90, 80,
	]);

	useEffect(() => {
		const interval = setInterval(() => {
			setTelemetryBars((prev) =>
				prev.map((val) => {
					const delta = (Math.random() - 0.48) * 15;
					return Math.min(100, Math.max(20, Math.round(val + delta)));
				}),
			);
		}, 1200);
		return () => clearInterval(interval);
	}, []);

	return (
		<section
			id='services'
			className='py-24 relative z-10 border-t border-border/60'>
			<div className='max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<div className='flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16'>
					<div>
						<h2 className='text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground'>
							Ready to Grow With Your Business
						</h2>
					</div>
					<p className='text-foreground-muted max-w-md text-sm sm:text-base leading-relaxed'>
						Eliminate traditional agency overhead. Work directly with seasoned
						software architects handling implementation end-to-end.
					</p>
				</div>

				{/* 4-Card Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{/* Card 1: Full-Stack Web Engineering */}
					<div className='bg-surface-elevated backdrop-blur-md border border-border hover:border-accent/50 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group'>
						<div>
							<div className='flex items-center justify-between mb-6'>
								<div className='w-10 h-10 rounded-lg bg-surface border border-border group-hover:border-accent flex items-center justify-center text-accent group-hover:text-accent-foreground transition-all'>
									<Layers className='w-5 h-5' />
								</div>
								<span className='text-xs font-mono tracking-wider text-foreground-muted'>
									01 // PRODUCTION
								</span>
							</div>

							<h3 className='text-xl font-semibold text-foreground mb-3'>
								A System That Just Works, Every Day
							</h3>
							<p className='text-sm text-foreground-muted leading-relaxed mb-6'>
								We build simple, solid internal systems for your team — no
								crashing, no confusing bugs, no waiting around. Just something
								that works the same way every single day.
							</p>
						</div>

						{/* Code preview block */}
						<div className='rounded-lg bg-surface border border-border p-4 font-mono text-xs overflow-x-auto shadow-inner'>
							<pre className='text-foreground-muted leading-relaxed'>
								<span>
									Always Online:{" "}
									<span className='text-foreground font-bold'>Yes</span>
									{"\n"}
								</span>
								<span>
									Easy for Your Team to Use:{" "}
									<span className='text-foreground font-bold'>Yes</span>
									{"\n"}
								</span>
							</pre>
						</div>
					</div>

					{/* Card 2: Data Analytics & Real-Time Dashboards */}
					<div className='bg-surface-elevated/80 backdrop-blur-md border border-border hover:border-accent/50 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group'>
						<div>
							<div className='flex items-center justify-between mb-6'>
								<div className='w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-accent group-hover:border-accent group-hover:text-accent-foreground transition-all'>
									<Activity className='w-5 h-5' />
								</div>
								<span className='text-xs font-mono tracking-wider text-foreground-muted'>
									02 // TELEMETRY
								</span>
							</div>

							<h3 className='text-xl font-semibold text-foreground mb-3'>
								See Your Business Numbers, Instantly
							</h3>
							<p className='text-sm text-foreground-muted leading-relaxed mb-6'>
								No more asking staff to compile reports by hand. Sales, stock,
								or activity — all shown clearly in one place, updated
								automatically.
							</p>
						</div>

						{/* Ingestion Rate Visualizer */}
						<div className='rounded-lg bg-surface border border-border p-4'>
							<div className='flex items-center justify-between text-xs font-mono'>
								<pre className='text-foreground-muted leading-relaxed'>
									<span>
										Updates:{" "}
										<span className='text-foreground font-bold'>
											In Real Time
										</span>
										{"\n"}
									</span>
									<span>
										Manual Reporting Needed:{" "}
										<span className='text-foreground font-bold'>None</span>
										{"\n"}
									</span>
								</pre>
							</div>
						</div>
					</div>

					{/* Card 3: MVP & Venture Acceleration */}
					<div className='bg-surface-elevated/80 backdrop-blur-md border border-border hover:border-accent/50 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group'>
						<div>
							<div className='flex items-center justify-between mb-6'>
								<div className='w-10 h-10 rounded-lg bg-surface border border-border group-hover:border-accent flex items-center justify-center text-accent group-hover:text-accent-foreground transition-all'>
									<Rocket className='w-5 h-5' />
								</div>
								<span className='text-xs font-mono tracking-wider text-foreground-muted'>
									03 // 0-TO-1 SPRINT
								</span>
							</div>

							<h3 className='text-xl font-semibold text-foreground mb-3'>
								Get Your System Running in Weeks, Not Months
							</h3>
							<p className='text-sm text-foreground-muted leading-relaxed mb-6'>
								Still using spreadsheets or manual processes? We build you a
								simple, working system fast — so your team can start using it
								right away.
							</p>
						</div>

						{/* Fast Stats Row */}
						<div className='grid grid-cols-2 gap-3 rounded-lg bg-surface border border-border p-4'>
							<div>
								<div className='text-[10px] font-mono text-foreground-faint uppercase tracking-wider mb-1'>
									Ready to Use In
								</div>
								<div className='text-sm font-semibold font-mono text-foreground'>
									30 Days
								</div>
							</div>
							<div className='border-l border-border pl-3'>
								<div className='text-[10px] font-mono text-foreground-faint uppercase tracking-wider mb-1'>
									Can Be Expanded Later
								</div>
								<div className='text-sm font-semibold font-mono text-accent'>
									Yes
								</div>
							</div>
						</div>
					</div>

					{/* Card 4: Codebase Modernization & Audits */}
					<div className='bg-surface-elevated/80 backdrop-blur-md border border-border hover:border-accent/50 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group'>
						<div>
							<div className='flex items-center justify-between mb-6'>
								<div className='w-10 h-10 rounded-lg bg-surface border border-border group-hover:border-accent flex items-center justify-center text-accent group-hover:text-accent-foreground transition-all'>
									<RefreshCw className='w-5 h-5' />
								</div>
								<span className='text-xs font-mono tracking-wider text-foreground-muted'>
									04 // REFACTORING
								</span>
							</div>

							<h3 className='text-xl font-semibold text-foreground mb-3'>
								Make Your Old System Fast and Cheap to Run Again
							</h3>
							<p className='text-sm text-foreground-muted leading-relaxed mb-6'>
								Old system feels slow or costs too much to maintain? We clean it
								up so it runs smoother, costs less, and is easier to update
								whenever you need changes.
							</p>
						</div>

						{/* Lighthouse Scores Widget */}
						<div className='flex flex-wrap items-center justify-between gap-2 rounded-lg bg-surface border border-border p-4'>
							<div className='flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-elevated border border-border text-xs font-mono'>
								<span className='w-2 h-2 rounded-full bg-foreground-muted' />
								<span className='text-foreground-muted'>Perf:</span>
								<span className='text-foreground font-bold'>100</span>
							</div>

							<div className='flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-elevated border border-border text-xs font-mono'>
								<span className='w-2 h-2 rounded-full bg-foreground-muted' />
								<span className='text-foreground-muted'>A11y:</span>
								<span className='text-foreground font-bold'>100</span>
							</div>

							<div className='flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-elevated border border-border text-xs font-mono'>
								<span className='w-2 h-2 rounded-full bg-foreground-muted' />
								<span className='text-foreground-muted'>SEO:</span>
								<span className='text-foreground font-bold'>100</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
