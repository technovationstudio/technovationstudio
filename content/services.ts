export interface ServiceCapability {
  id: string;
  tag: string;
  tagColor: "cyan" | "violet" | "orange" | "purple";
  title: string;
  description: string;
  codeSnippet?: {
    filename: string;
    code: string;
  };
  metricsWidget?: {
    type: "telemetry" | "stats" | "lighthouse";
    title?: string;
    statLeft?: { label: string; value: string };
    statRight?: { label: string; value: string };
  };
}

export const capabilities: ServiceCapability[] = [
  {
    id: "web-engineering",
    tag: "01 // PRODUCTION",
    tagColor: "cyan",
    title: "Full-Stack Web Engineering",
    description:
      "Custom enterprise SaaS platforms, Next.js App Router design, resilient serverless backends, sub-second latency, and hardened production deployments.",
    codeSnippet: {
      filename: "// app/api/pipeline/route.ts",
      code: `export async function POST(req: Request) {
  const stream = await edgeExecutor(req);
  return new Response(stream);
}`,
    },
  },
  {
    id: "data-analytics",
    tag: "02 // TELEMETRY",
    tagColor: "cyan",
    title: "Data Analytics & Real-Time Dashboards",
    description:
      "Interactive telemetry portals, high-throughput charting engines, live WebSockets, data pipelines, and executive dashboards with instantaneous querying.",
    metricsWidget: {
      type: "telemetry",
      title: "METRIC INGESTION RATE",
      statLeft: { label: "RATE", value: "99.8K / 12.4K req/s" },
    },
  },
  {
    id: "mvp-acceleration",
    tag: "03 // 0-TO-1 SPRINT",
    tagColor: "orange",
    title: "MVP & Venture Acceleration",
    description:
      "Rapid 4-to-8 week 0-to-1 launches. We transform ideas into tested, investor-ready codebases with clean architectural patterns built to support Series A scale.",
    metricsWidget: {
      type: "stats",
      statLeft: { label: "TIME TO MARKET", value: "30 Days Flat" },
      statRight: { label: "CODE ARCHITECTURE", value: "Modular Monorepo" },
    },
  },
  {
    id: "modernization-audits",
    tag: "04 // REFACTORING",
    tagColor: "purple",
    title: "Codebase Modernization & Audits",
    description:
      "Legacy monolith-to-modular refactoring, technical debt liquidation, Lighthouse 100 performance tuning, and automated CI/CD pipeline modernization.",
    metricsWidget: {
      type: "lighthouse",
    },
  },
];
