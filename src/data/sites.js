import spaceshipImage from "../assets/light-spaceship-4.webp";
import backendImage from "../assets/backend.png";
import workermanImage from "../assets/workerman.webp";

export const agentSites = [
  {
    slug: "golracu",
    title: "GolRacu",
    status: "AI football predictions platform",
    accent: "#e00000",
    image: spaceshipImage,
    summary:
      "GolRacu turns messy football data into clear AI predictions for Romanian bettors: what to play, why it matters, how confident the model is, and what risks to watch.",
    architecture:
      "The public app runs on Next.js 14 App Router with TypeScript, Tailwind, shadcn/ui, Radix UI, Framer Motion and lucide-react. Public pages fetch from Convex server-side through fetchQuery and use ISR with revalidate = 3600, while the admin is client-side and realtime through Convex useQuery, useMutation and useAction. Supabase Auth protects /admin/* routes.",
    agents: [
      "Data pipeline imports fixtures, results, standings, injuries, odds and recent team statistics from API-Football.",
      "Analysis pipeline gathers form, H2H, table context, injuries, odds, rest days and recent performance before building a versioned prompt.",
      "Claude receives a strict bilingual JSON request and returns the main prediction, confidence, alternative markets, reasoning, risks and key factors.",
      "Validation checks consistency before a draft can be published manually or automatically.",
    ],
    features: [
      "Public homepage with hero, recent predictions, stats, newsletter and affiliate banners.",
      "Weekly predictions page and detailed match pages with odds, confidence, alternative markets and bet calculator.",
      "Transparent prediction history with evaluated results.",
      "Legal pages for terms, privacy and responsible gambling.",
      "Admin dashboard for matches, predictions, subscribers, success rate, logs and validations.",
    ],
    automation: [
      "Fetch fixtures, standings, injuries and results through Convex cron jobs.",
      "Generate and publish predictions on Tuesday and Friday schedules.",
      "Evaluate results daily and update the track record.",
      "Send newsletters through Resend with React Email templates.",
    ],
    monetization:
      "Affiliate banners and tracked bookmaker links, currently centered around 1xBet placements: leaderboard, rectangle, skyscraper and mobile banner. The UI includes responsible gambling and 18+ messaging.",
    notes: [
      "The real AI integration uses @anthropic-ai/sdk and Claude, even though some docs still mention Codex naming.",
      "README and some docs are still closer to planning notes than current product documentation.",
      "The active prompt is versioned as PROMPT_VERSION = v5.1 and requests strict Romanian and English JSON output.",
    ],
    stack: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Convex",
      "Supabase Auth",
      "Anthropic Claude",
      "API-Football",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "Framer Motion",
      "Resend",
      "React Email",
      "PostHog",
      "pnpm",
    ],
    metrics: [
      { label: "Success rate", value: "84.3%" },
      { label: "Evaluated predictions", value: "150+" },
      { label: "Estimated ROI", value: "+75%" },
    ],
    idea:
      "The product is built around one simple promise: collect the context a serious bettor would check manually, let AI reason over it, then publish a clean prediction page that is easy to trust and fast to read.",
    flow: [
      {
        title: "Collect",
        text: "Fixtures, odds, standings, injuries, form, H2H and recent stats come in automatically.",
      },
      {
        title: "Analyze",
        text: "Convex builds a versioned prompt and Claude returns a strict bilingual JSON analysis.",
      },
      {
        title: "Publish",
        text: "Admins review drafts or let cron publish predictions and newsletters on schedule.",
      },
    ],
    charts: [
      { label: "Data sync", value: 92 },
      { label: "AI analysis", value: 78 },
      { label: "Validation", value: 64 },
      { label: "Publishing", value: 86 },
    ],
  },
  {
    slug: "ai-site-builder",
    title: "AI Site Builder",
    status: "Prototype",
    accent: "#F95738",
    image: backendImage,
    summary:
      "A website generation workspace where agents transform briefs into structured pages, content blocks, and implementation tasks.",
    architecture:
      "Placeholder architecture for brief parsing, component planning, content generation, visual QA, and deployment preparation.",
    agents: [
      "Brief agent extracts goals, audience, and constraints.",
      "Design agent proposes page structure and reusable sections.",
      "QA agent checks copy, responsiveness, and missing states.",
    ],
    stack: ["React", "Lucide", "Design systems", "AI planning"],
  },
  {
    slug: "knowledge-agent-hub",
    title: "Knowledge Agent Hub",
    status: "Discovery",
    accent: "#62E796",
    image: workermanImage,
    summary:
      "A knowledge layer for projects where agents index docs, summarize architecture, and keep implementation decisions searchable.",
    architecture:
      "Placeholder architecture for document ingestion, embeddings, project memory, citations, and agent-facing retrieval tools.",
    agents: [
      "Indexer agent keeps project context fresh.",
      "Explainer agent turns architecture into readable walkthroughs.",
      "Support agent answers implementation questions with citations.",
    ],
    stack: ["Retrieval", "Embeddings", "Project docs", "AI support"],
  },
];

export const getAgentSiteBySlug = (slug) =>
  agentSites.find((site) => site.slug === slug);
