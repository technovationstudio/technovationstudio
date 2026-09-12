export interface Founder {
  id: string;
  name: string;
  role: string;
  tagline: string;
  bio: string;
  avatarPlaceholder: string;
  avatarBg: string;
  skills: string[];
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
    bio: "Frontend developer focused on building beautiful, easy-to-use interfaces. Specializes in turning complex data into clear charts and ensuring applications are accessible to everyone.",
    avatarPlaceholder: "IF",
    avatarBg: "from-surface to-background",
    skills: ["User Interface Design", "Data & Charts", "Accessibility"],
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
    bio: "Backend developer dedicated to building the invisible engines that power applications. Specializes in setting up secure databases, connecting systems, and keeping servers running reliably.",
    avatarPlaceholder: "YM",
    avatarBg: "from-surface to-background",
    skills: ["Backend Systems", "Databases", "Server Reliability"],
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
