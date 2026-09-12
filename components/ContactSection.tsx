"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ChevronDown, Loader2 } from "lucide-react";

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
			id='contact'
			className='py-24 relative z-10 border-t border-border/60'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center max-w-3xl mx-auto mb-16'>
					<h2 className='text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4'>
						Let's Connect
					</h2>
					<p className='text-sm sm:text-base text-foreground-muted'>
						Reach out via our technical brief form or book an immediate
						30-minute discovery call directly with Irly and Yudhis.
					</p>
				</div>

				{/* 2-Column Grid matching screen.png */}
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
					{/* Right Column: Technical Brief Form */}
					<div className='lg:col-span-12 bg-surface-elevated/90 backdrop-blur-md border border-border rounded-2xl p-6 sm:p-8 shadow-2xl relative'>
						{submitted ? (
							<div className='py-12 text-center space-y-4'>
								<div className='w-14 h-14 rounded-full bg-accent-muted border border-accent/40 flex items-center justify-center mx-auto text-accent'>
									<CheckCircle2 className='w-8 h-8' />
								</div>
								<h3 className='text-2xl font-semibold text-foreground'>
									Project Brief Delivered
								</h3>
								<p className='text-foreground-muted max-w-md mx-auto text-sm leading-relaxed'>
									Thank you,{" "}
									<span className='text-foreground font-semibold'>
										{formData.name}
									</span>
									. Irly and Yudhis have received your specifications and will
									respond directly to{" "}
									<span className='text-accent font-mono'>
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
									className='mt-4 px-4 py-2 rounded-md bg-surface-elevated border border-border text-xs font-mono text-foreground-muted hover:text-foreground'>
									Send another inquiry
								</button>
							</div>
						) : (
							<form onSubmit={handleSubmit} className='space-y-5'>
								{errorMsg && (
									<div className='p-3 rounded-lg bg-red-950/40 border border-red-500/40 text-xs text-red-300 font-mono'>
										{errorMsg}
									</div>
								)}

								{/* Name & Email Row */}
								<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
									<div>
										<label className='block text-[11px] font-mono text-foreground-faint uppercase tracking-wider mb-2'>
											YOUR NAME
										</label>
										<input
											type='text'
											required
											value={formData.name}
											onChange={(e) =>
												setFormData({ ...formData, name: e.target.value })
											}
											placeholder='e.g. John Doe'
											className='w-full bg-surface border border-border focus:border-accent rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-foreground-faint focus:outline-none transition-colors'
										/>
									</div>

									<div>
										<label className='block text-[11px] font-mono text-foreground-faint uppercase tracking-wider mb-2'>
											WORK EMAIL
										</label>
										<input
											type='email'
											required
											value={formData.email}
											onChange={(e) =>
												setFormData({ ...formData, email: e.target.value })
											}
											placeholder='johndoe@company.com'
											className='w-full bg-surface border border-border focus:border-accent rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-foreground-faint focus:outline-none transition-colors'
										/>
									</div>
								</div>

								{/* Service Type */}
								<div>
									<label className='block text-[11px] font-mono text-foreground-faint uppercase tracking-wider mb-2'>
										SERVICE TYPE
									</label>
									<div className='relative'>
										<select
											value={formData.serviceType}
											onChange={(e) =>
												setFormData({
													...formData,
													serviceType: e.target.value,
												})
											}
											className='w-full bg-surface border border-border focus:border-accent rounded-lg px-4 py-2.5 text-sm text-foreground appearance-none focus:outline-none transition-colors'>
											<option value='Management System Development'>
												Management System Development
											</option>
											<option value='POS (Point of Sale) System'>
												POS (Point of Sale) System
											</option>
											<option value='Custom System / Tailored Solutions'>
												Custom System / Tailored Solutions
											</option>
											<option value='Legacy System Modernization & Audits'>
												Legacy System Modernization &amp; Audits
											</option>
										</select>
										<ChevronDown className='w-4 h-4 text-foreground-faint absolute right-4 top-3.5 pointer-events-none' />
									</div>
								</div>

								{/* Estimated Budget Pills */}
								<div>
									<label className='block text-[11px] font-mono text-foreground-faint uppercase tracking-wider mb-2'>
										ESTIMATED SPRINT BUDGET
									</label>
									<div className='grid grid-cols-2 sm:grid-cols-4 gap-2'>
										{budgetOptions.map((opt) => {
											const isSelected = formData.budget === opt;
											return (
												<button
													type='button'
													key={opt}
													onClick={() =>
														setFormData({ ...formData, budget: opt })
													}
													className={`py-2 px-3 rounded-lg border text-xs font-mono font-medium transition-all cursor-pointer text-center ${
														isSelected
															? "bg-accent border-accent text-accent-foreground"
															: "bg-surface border-border text-foreground-muted hover:border-border-strong hover:text-foreground"
													}`}>
													{opt}
												</button>
											);
										})}
									</div>
								</div>

								{/* Project Description */}
								<div>
									<label className='block text-[11px] font-mono text-foreground-faint uppercase tracking-wider mb-2'>
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
										className='w-full bg-surface border border-border focus:border-accent rounded-lg p-4 text-sm text-foreground placeholder:text-foreground-faint focus:outline-none transition-colors resize-none leading-relaxed'
									/>
								</div>

								{/* Submit Button */}
								<button
									type='submit'
									disabled={loading}
									className='w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-lg bg-accent hover:bg-accent/90 disabled:opacity-50 text-accent-foreground font-medium text-sm transition-all duration-200 cursor-pointer'>
									{loading ? (
										<>
											<Loader2 className='w-4 h-4 animate-spin' />
											<span>Transmitting Brief...</span>
										</>
									) : (
										<>
											<Send className='w-4 h-4' />
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
