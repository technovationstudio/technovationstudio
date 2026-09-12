export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  estimate: string;
  deliverables: string[];
}

export const processSteps: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Understanding What You Need",
    description:
      "We start by listening. We talk through what you need, map out how it should work, and turn it into a clear plan — so there's no confusion later about what's being built." /* */,
    estimate: "Week 1",
    deliverables: [
      "A clear plan of how the system will work",
      "A map of what data will be stored",
      "A list of exactly what the system will do",
    ],
  },
  {
    stepNumber: "02",
    title: "Building It, Step by Step",
    description:
      "We build the system in small pieces so you can see progress every week — not just at the very end. You'll get regular updates and can give feedback along the way.",
    estimate: "Weeks 2–5",
    deliverables: [
      "You can preview the system as it's being built",
      "Regular updates (video or chat) on progress",
      "Every part is tested as it's finished",
    ],
  },
  {
    stepNumber: "03",
    title: "Testing & Making It Fast",
    description:
      "Before going live, we test everything thoroughly and make sure the system runs fast and smoothly — even when several people use it at once. We also check for security gaps.",
    estimate: "Week 6",
    deliverables: [
      "Full testing to catch issues before launch",
      "Made faster and smoother to use",
      "Checked for security risks",
    ],
  },
  {
    stepNumber: "04",
    title: "Going Live & Support After Launch",
    description:
      "We launch your system with no downtime, move your existing data over safely, and hand you clear instructions on how to use it. For 60 days after launch, we're still here if anything comes up.",
    estimate: "Launch",
    deliverables: [
      "Smooth launch, no data lost",
      "Easy-to-follow guide on how to use it",
      "60 days of direct support after launch",
    ],
  },
];
