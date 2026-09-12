import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
	display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title:
		"TECHNOVATION — IT Service Provider | High-Performance Web & Data Systems",
	description:
		"We partner with venture-backed startups and high-growth businesses to architect, build, and scale world-class full-stack digital products, Next.js applications, and data systems with zero agency bloat.",
	keywords: [
		"Next.js Development",
		"Full-Stack Web Engineering",
		"React 19",
		"Tailwind CSS v4",
		"Data Analytics Dashboards",
		"ClickHouse",
		"Supabase",
		"Digital Product Studio",
		"Technical Founders",
	],
	authors: [{ name: "Irly Fizaharis" }, { name: "Yudhistira Fachri Muhammad" }],
	creator: "TECHNOVATION Studio",
	publisher: "TECHNOVATION Studio LLC",
	metadataBase: new URL("https://technovationstudio.com"),
	openGraph: {
		title:
			"TECHNOVATION — IT Service Provider | High-Performance Web & Data Systems",
		description:
			"Engineering high-performance web applications and data systems. 2-person elite engineering studio with direct founder access.",
		url: "https://technovationstudio.com",
		siteName: "TECHNOVATION Studio",
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "TECHNOVATION — IT Service Provider",
		description:
			"Engineering high-performance web applications & data systems with zero agency bloat.",
		creator: "@technovation",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={`${geistSans.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
			<head>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "ProfessionalService",
							name: "TECHNOVATION Studio",
							image: "https://technovationstudio.com/og.png",
							description:
								"High-performance 2-person digital product studio engineering Next.js web applications, dynamic enterprise platforms, and precision data analytics dashboards.",
							address: {
								"@type": "PostalAddress",
								addressCountry: "US",
							},
							founder: [
								{
									"@type": "Person",
									name: "Irly Fizaharis",
									jobTitle: "Co-Founder & Lead Systems Architect",
								},
								{
									"@type": "Person",
									name: "Yudhistira Fachri Muhammad",
									jobTitle: "Co-Founder & Lead Product Engineer",
								},
							],
							offers: {
								"@type": "Offer",
								itemOffered: {
									"@type": "Service",
									name: "Full-Stack Web Engineering & Data Dashboards",
								},
							},
						}),
					}}
				/>
			</head>
			<body className='min-h-screen bg-background text-foreground antialiased selection:bg-accent/30 selection:text-accent-foreground flex flex-col font-sans'>
				{children}
			</body>
		</html>
	);
}
