export interface ProjectMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarInitials: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  category: string;
  date: string;
  tags: string[];
  description: string;
  fullDescription: string;
  metrics: ProjectMetric[];
  challenge: string;
  solution: string;
  architecture: {
    title: string;
    points: string[];
    diagramLabel?: string;
  };
  techStack: {
    category: string;
    items: string[];
  }[];
  codeSnippet?: {
    filename: string;
    code: string;
  };
  testimonial: ProjectTestimonial;
  visualType: "telemetry" | "fintech" | "telehealth";
}

export const projects: Project[] = [
  {
    slug: "synapse-ai",
    title: "Synapse AI — Enterprise Telemetry & Analytics Platform",
    subtitle: "High-throughput distributed log indexing & real-time monitoring",
    client: "Synapse AI Inc.",
    category: "TELEMETRY SAAS",
    date: "Q1 2026",
    tags: ["Next.js 16", "ClickHouse", "Tailwind CSS", "WebSockets"],
    description:
      "Synapse suffered severe query latency across petabyte-scale distributed logs. We redesigned their query execution tier with ClickHouse columnar aggregation and Next.js Streaming Server Components, achieving instantaneous data render.",
    fullDescription:
      "Synapse AI operates an enterprise AI observability platform monitoring distributed LLM inference clusters for Fortune 500 engineering teams. As query ingestion scaled beyond 500M events/day, their existing PostgreSQL/Elasticsearch pipeline bottlenecked, causing 15+ second dashboard stalls and degraded customer experience. TECHNOVATION was brought in to architect an end-to-end telemetry overhaul.",
    metrics: [
      {
        value: "+310%",
        label: "Query Acceleration",
        subtext: "From 4.2s median down to 18ms",
      },
      {
        value: "$18M",
        label: "Series A Capital Secured",
        subtext: "Validated with enterprise customers",
      },
      {
        value: "99.99%",
        label: "Uptime SLA Maintained",
        subtext: "Zero-downtime database cutover",
      },
    ],
    challenge:
      "Legacy Elasticsearch clusters were crashing under concurrent aggregation workloads across 400M+ log lines per cluster. Dashboard users experienced 10-15 second wait times on complex filtering, preventing real-time anomaly alerts for AI model drift.",
    solution:
      "We replaced the query tier with a partitioned ClickHouse columnar database paired with Next.js App Router streaming endpoints. Using React 19 Server Components and binary WebSocket channels, telemetry metrics render progressively in under 20 milliseconds.",
    architecture: {
      title: "Streamlined Streaming Pipeline",
      points: [
        "Edge-routed Next.js API route reading from distributed ClickHouse partitions",
        "Zero-copy Arrow flight transport for ultra-dense time-series vectors",
        "React Server Component streaming via Turbopack engine for sub-50ms TTFB",
        "Client-side Canvas rendering engine capable of 60 FPS across 100k data points",
      ],
      diagramLabel: "Edge Gateway ➔ ClickHouse Vector Nodes ➔ Next.js RSC Stream ➔ Client Canvas",
    },
    techStack: [
      { category: "Frontend", items: ["Next.js 16", "React 19", "Tailwind CSS v4", "WebSockets"] },
      { category: "Data Tier", items: ["ClickHouse", "Apache Kafka", "Redis Cache"] },
      { category: "Infrastructure", items: ["Vercel Edge Network", "AWS EKS", "Docker"] },
    ],
    codeSnippet: {
      filename: "app/api/telemetry/stream/route.ts",
      code: `// Stream ClickHouse columnar telemetry directly to React RSC
export async function POST(req: Request) {
  const { clusterId, timeRange } = await req.json();
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const clickhouseStream = await queryClickHouse({
        query: "SELECT time_bucket(100, timestamp), count(*) FROM telemetry_events WHERE cluster_id = {cluster:String} GROUP BY 1 ORDER BY 1",
        params: { cluster: clusterId },
        format: "JSONEachRow"
      });
      for await (const chunk of clickhouseStream) {
        controller.enqueue(encoder.encode(\`data: \${JSON.stringify(chunk)}\\n\\n\`));
      }
      controller.close();
    }
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/event-stream", "Cache-Control": "no-cache" }
  });
}`,
    },
    testimonial: {
      quote:
        "TECHNOVATION operates at an intensity and velocity I have never seen in an agency. They rewrote our entire data pipeline in 3 weeks and we closed our $18M Series A largely on the back of the live product demo.",
      author: "Marcus Kaelen",
      role: "CTO",
      company: "Synapse AI",
      avatarInitials: "MK",
    },
    visualType: "telemetry",
  },
  {
    slug: "vortex-financial",
    title: "Vortex Financial — Algorithmic Trade Settlement Engine",
    subtitle: "High-frequency OTC settlement visualization and automated ledger balance",
    client: "Vortex Financial Markets",
    category: "FINTECH SYSTEMS",
    date: "Q4 2025",
    tags: ["React 19", "Redis", "TypeScript", "Node Workers"],
    description:
      "Needed institutional-grade order-matching visualization and automated ledger reconciliation for high-frequency OTC settlements. We implemented a memory-cached pipeline using Redis clusters and React 19 concurrent transitions.",
    fullDescription:
      "Vortex Financial facilitates OTC derivatives and private credit transactions between global institutional funds. They required a mission-critical web workstation for market makers and risk officers to monitor multimillion-dollar settlement batches, assess collateral margins in real time, and audit cross-asset transactions with millisecond precision.",
    metrics: [
      {
        value: "42ms",
        label: "Median Latency",
        subtext: "Down from 1.8s legacy lag",
      },
      {
        value: "$120M+",
        label: "Monthly Settlement Volume",
        subtext: "Handled securely with zero failures",
      },
      {
        value: "100%",
        label: "Ledger Reconciliation",
        subtext: "Mathematical audit guarantee",
      },
    ],
    challenge:
      "High trade volume caused browser tab memory leaks and UI freezing during market volatility spikes. Institutional desks couldn't tolerate inaccurate order books or desynchronized balance updates.",
    solution:
      "We engineered a distributed Node.js worker pool that reconciles ledgers against Redis in-memory tables, feeding a typed TypeScript frontend using React 19 concurrent transitions to guarantee 60 FPS order-book rendering without locking the main thread.",
    architecture: {
      title: "Sub-50ms Settlement Architecture",
      points: [
        "In-memory Redis Cluster with ACID snapshotting and WAL replication",
        "React 19 useTransition and startTransition for non-blocking ledger updates",
        "Node.js multi-threaded cluster workers for cryptographic transaction signing",
        "SOC2-compliant encryption at rest and in-transit with TLS 1.3 mutual auth",
      ],
      diagramLabel: "Trading Gateway ➔ Redis Shards ➔ Worker Reconciliation ➔ Non-blocking UI",
    },
    techStack: [
      { category: "Frontend", items: ["React 19", "Next.js 16", "Tailwind CSS v4", "Lucide"] },
      { category: "Engine", items: ["Node.js Cluster", "TypeScript", "Redis Enterprise"] },
      { category: "Security", items: ["SOC2 Type II", "HSM Signer", "PostgreSQL"] },
    ],
    codeSnippet: {
      filename: "lib/engine/orderMatcher.ts",
      code: `// High-frequency ledger reconciliation worker
export class SettlementReconciler {
  private redisCluster: RedisCluster;

  async processBatch(batchId: string, orders: TradeOrder[]): Promise<SettlementResult> {
    const pipeline = this.redisCluster.pipeline();
    orders.forEach(order => {
      pipeline.hincrbyfloat(\`ledger:\${order.account}\`, 'availableBalance', -order.amount);
      pipeline.xadd('trades:stream', '*', 'tradeId', order.id, 'status', 'SETTLED');
    });
    const results = await pipeline.exec();
    return { batchId, settledCount: orders.length, timestamp: Date.now() };
  }
}`,
    },
    testimonial: {
      quote:
        "Having direct Slack access to two veteran architects without project manager bureaucracy meant daily releases and zero translation loss. The latency benchmarks on Vortex are legendary.",
      author: "Sarah Lin",
      role: "Founder & CEO",
      company: "Vortex Financial",
      avatarInitials: "SL",
    },
    visualType: "fintech",
  },
  {
    slug: "hyperscale-health",
    title: "HyperScale Health — HIPAA-Compliant Telehealth Ecosystem",
    subtitle: "Zero-compromise virtual care platform with end-to-end encrypted consultations",
    client: "HyperScale Health",
    category: "HEALTHTECH / HIPAA",
    date: "Q3 2025",
    tags: ["Supabase Auth", "PostgreSQL", "WebRTC", "AWS Enclave"],
    description:
      "Constructed a zero-compromise, encrypted virtual care coordination system from absolute ground zero in 7 weeks. Features automated WebRTC consultations, prescription workflows, and zero-knowledge patient record storage.",
    fullDescription:
      "HyperScale Health needed to disrupt traditional telehealth by launching a specialized platform for urgent neurology and pediatric teleconsultations. The platform required strict HIPAA, BAA, and SOC2 compliance, cross-browser WebRTC video with ultra-low latency, and instant EHR synchronization across 14 hospitals.",
    metrics: [
      {
        value: "140k+",
        label: "Active Telehealth Patients",
        subtext: "Served within 6 months of rollout",
      },
      {
        value: "7 Weeks",
        label: "Total 0-to-1 Sprint Time",
        subtext: "From kickoff to production launch",
      },
      {
        value: "0 Breaches",
        label: "Security & HIPAA Record",
        subtext: "100% passing independent audit",
      },
    ],
    challenge:
      "Balancing stringent HIPAA encryption protocols with a fluid, barrier-free user experience for elderly and emergency patients. Complex prescription routing required sub-second integration with US pharmacy switches.",
    solution:
      "We built a Next.js App Router application backed by Supabase with Row Level Security (RLS) policies, client-side WebRTC with mesh fallback, and isolated AWS Nitro Enclaves for cryptographic storage of protected health information (PHI).",
    architecture: {
      title: "Encrypted Health Mesh",
      points: [
        "Supabase RLS for cryptographically validated patient record isolation",
        "WebRTC media servers with SFU fallback for peer-to-peer consultations",
        "Server Actions with automated audit logging for every PHI access request",
        "Automated Surescripts electronic prescription integration pipeline",
      ],
      diagramLabel: "Patient Client ➔ WebRTC Peer/SFU ➔ AWS Nitro Enclave ➔ Supabase Postgres RLS",
    },
    techStack: [
      { category: "Frontend", items: ["Next.js 16", "React 19", "Tailwind CSS v4", "WebRTC"] },
      { category: "Backend", items: ["Supabase", "PostgreSQL RLS", "AWS Nitro Enclave"] },
      { category: "Compliance", items: ["HIPAA BAA", "SOC2 Type II", "Surescripts API"] },
    ],
    codeSnippet: {
      filename: "app/actions/telehealth.ts",
      code: `"use server";
import { createServerActionClient } from "@/lib/supabase";

export async function authorizeEncryptedConsultation(sessionId: string) {
  const supabase = createServerActionClient();
  const { data: user } = await supabase.auth.getUser();
  if (!user?.id) throw new Error("Unauthorized");

  // Verify physician or patient access with cryptographic RLS
  const { data: session, error } = await supabase
    .from("care_sessions")
    .select("id, room_token, encryption_key")
    .eq("id", sessionId)
    .single();

  if (error || !session) throw new Error("Access Denied");
  return { token: session.room_token };
}`,
    },
    testimonial: {
      quote:
        "7 weeks to construct a complete, HIPAA-compliant patient dashboard from scratch. They write clean, thoroughly-tested TypeScript that our in-house team inherited without a single hiccup.",
      author: "David Ross",
      role: "VP of Product",
      company: "HyperScale",
      avatarInitials: "DR",
    },
    visualType: "telehealth",
  },
];
