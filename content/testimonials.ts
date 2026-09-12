export interface Testimonial {
  id: string;
  rating: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarInitials: string;
  color: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "marcus-kaelen",
    rating: 5,
    quote:
      "TECHNOVATION operates at an intensity and velocity I have never seen in an agency. They rewrote our entire data pipeline in 3 weeks and we closed our $18M Series A largely on the back of the live product demo.",
    author: "Marcus Kaelen",
    role: "CTO",
    company: "Synapse AI",
    avatarInitials: "MK",
    color: "#6d28d9",
  },
  {
    id: "sarah-lin",
    rating: 5,
    quote:
      "Having direct Slack access to two veteran architects without project manager bureaucracy meant daily releases and zero translation loss. The latency benchmarks on Vortex are legendary.",
    author: "Sarah Lin",
    role: "Founder & CEO",
    company: "Vortex Financial",
    avatarInitials: "SL",
    color: "#6d28d9",
  },
  {
    id: "david-ross",
    rating: 5,
    quote:
      "7 weeks to construct a complete, HIPAA-compliant patient dashboard from scratch. They write clean, thoroughly-tested TypeScript that our in-house team inherited without a single hiccup.",
    author: "David Ross",
    role: "VP of Product",
    company: "HyperScale",
    avatarInitials: "DR",
    color: "#6d28d9",
  },
];
