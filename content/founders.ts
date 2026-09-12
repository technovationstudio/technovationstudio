export interface Founder {
	id: string;
	name: string;
	role: string;
	tagline: string;
	avatarPlaceholder: string;
	avatarBg: string;
	metrics: { label: string; value: string }[];
	socials: {
		github?: string;
		linkedin?: string;
		twitter?: string;
	};
}

export const founders: Founder[] = [
	{
		id: "irly-fizaharis",
		name: "Irly Fizaharis",
		role: "FRONTEND DEVELOPER",
		tagline: "UI, Design & User Experience",
		avatarPlaceholder: "IF",
		avatarBg: "from-surface to-background",
		metrics: [
			{ label: "Focus", value: "User Experience" },
			{ label: "Design", value: "Accessible" },
		],
		socials: {
			github: "https://github.com",
			linkedin: "https://linkedin.com",
			twitter: "https://x.com",
		},
	},
	{
		id: "yudhistira-fachri-muhammad",
		name: "Yudhistira Fachri Muhammad",
		role: "BACKEND DEVELOPER",
		tagline: "Backend, Systems & Database",
		avatarPlaceholder: "YM",
		avatarBg: "from-surface to-background",
		metrics: [
			{ label: "Focus", value: "Infrastructure" },
			{ label: "Systems", value: "Reliable" },
		],
		socials: {
			github: "https://github.com",
			linkedin: "https://linkedin.com",
			twitter: "https://x.com",
		},
	},
];
