export const agentSites = [
  {
    slug: "rezigrile",
    title: "ReziGrile",
    status: "Medical exam learning platform",
    accent: "#287f70",
    image: "/rezigrile/logo/rezigrile-logo-full-color.png",
    liveUrl: "https://grilemedicina.pages.dev/",
    summary:
      "ReziGrile is a medical education platform built around a complete learning flow: choosing a specialty, solving chapter-based questions, exam simulations, progress statistics, gamification and social study features.",
    architecture:
      "The frontend is built with React, Vite, TanStack Router, TanStack Query, Zustand, Tailwind and Radix/shadcn components. The backend is an ASP.NET Core API on .NET 9 with specialized controllers and services, MongoDB persistence, Supabase authentication, role policies for admin access, SignalR for live duels, Stripe for subscriptions and health checks for deployment.",
    agents: [
      "AI-assisted generation and normalization transforms structured medical materials into standardized questions with answer variants, correct answers and metadata.",
      "The pipeline links each question to specialty, content type, chapters, categories, license materials, topics, simulations or previous exam subjects.",
      "Automatic validation checks required text, answer choices, at least one correct answer, correctAnswersCount, pages, chapter, category and specialty.",
      "Internal migration and repair tools fill missing fields, restore orphan chapters, fix categoryCodes and create indexes for efficient queries.",
      "Semantic and editorial review checks medical consistency, clarity, ambiguity and the difference between single-answer and multiple-answer questions before publishing.",
    ],
    features: [
      "Practice questions for general medicine, dental medicine and pharmacy.",
      "Filters by chapter, category, license material, topic, simulation and previous exam subjects.",
      "Interactive tests with detailed results, answer history, favorites, personal notes and weak-area detection.",
      "Scheduled simulations, leaderboards, XP, streaks, achievements, trophies and readiness score.",
      "Realtime 1v1 challenges, study groups, community posts, messaging and support tickets.",
    ],
    automation: [
      "Question documents are denormalized with specialty, contentType, categoryCodes, chapterName, pages, answers, correctAnswers and correct answer counts.",
      "MongoDB indexes support fast filtering and efficient test generation across specialties and content types.",
      "Validation rules and repair scripts keep imported content consistent before it reaches learners.",
      "SignalR powers competitive realtime flows such as live duels.",
    ],
    monetization:
      "Premium subscriptions are managed through Stripe, giving the product a recurring revenue model around advanced preparation and retention features.",
    notes: [
      "The core data model includes questions, chapters, categories, exams, userAnswers, userStats, achievements, notes, tickets, studyGroups and communityPosts.",
      "The product is positioned as an ecosystem for practice, feedback and retention, not just a question bank.",
      "AI is presented as an accelerator for content structuring and cleanup, with rule-based validation and human review keeping academic quality under control.",
      "Pitch: ReziGrile turns medical exam preparation from static memorization into an interactive, measurable and personalized training experience.",
    ],
    stack: [
      "React",
      "Vite",
      "TanStack Router",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
      "Radix UI",
      "shadcn/ui",
      "ASP.NET Core",
      ".NET 9",
      "MongoDB",
      "Supabase Auth",
      "SignalR",
      "Stripe",
      "Health checks",
    ],
    metrics: [
      { label: "Question types", value: "6" },
      { label: "Achievement pool", value: "88" },
      { label: "Readiness score", value: "Live" },
    ],
  },
  {
    slug: "infridge",
    title: "inFridge",
    status: "AI recipe iOS app in progress",
    accent: "#ff4f87",
    image: "/inFrigde/logo.png",
    summary:
      "inFridge is a SwiftUI iOS app that generates and saves recipes from the ingredients a user already has, with Supabase Auth, a .NET API, OpenAI recipe generation, permanent caching, and RevenueCat Premium.",
    architecture:
      "The SwiftUI app owns the user experience while the ASP.NET backend owns JWT validation, Free/Premium limits, OpenAI recipe generation, response validation, permanent recipe cache, and Supabase persistence. Supabase handles Auth and Postgres data, while RevenueCat syncs Premium state back into profiles.plan.",
    agents: [
      "RecipeGenerationOrchestrator coordinates the generation flow in C#.",
      "PrimaryRecipeGenerationAgent asks OpenAI Responses API for recipes using gpt-4.1-nano.",
      "RecipeValidationAgent validates AI output and only returns valid recipes.",
      "The backend returns up to 3 valid AI recipes and does not fill gaps with mock recipes.",
    ],
    features: [
      "Login and register through Supabase Auth.",
      "Add pantry ingredients manually, by photo, or by voice.",
      "Generate recipes, swipe through results, open details, save and delete saved recipes.",
      "Manage profile, dietary preferences, shopping list, pantry and Premium paywall.",
      "RevenueCat purchase and restore flows keep Premium access in sync.",
    ],
    automation: [
      "Permanent recipe_cache avoids repeat OpenAI calls for the same ingredient and preference combination.",
      "Free users get 5 generations per day and 5 saved recipes.",
      "Premium users get unlimited generations and unlimited saved recipes.",
      "Cache keys include ingredients, meal type, time preference, avoid ingredients, preferences, dietary restrictions and schema version.",
    ],
    monetization:
      "RevenueCat powers the Premium subscription in the iOS app. The backend stores the active plan in Supabase profiles.plan and applies usage rules server-side.",
    notes: [
      "Backend lives in backend/InFridge.Api.",
      "Users can start from typed cravings, ingredient photos, voice notes, quick suggestions or pantry staples.",
      "Supabase stores profiles, preferences, saved recipes, recipe generations, recipe cache, daily usage, pantry and shopping list data.",
    ],
    stack: [
      "SwiftUI",
      "iOS",
      "Supabase Auth",
      "Supabase Postgres",
      "ASP.NET Core",
      ".NET",
      "OpenAI Responses API",
      "gpt-4.1-nano",
      "RevenueCat",
      "C# agents",
      "JWT validation",
      "Recipe cache",
    ],
    metrics: [
      { label: "Free generations", value: "5/day" },
      { label: "AI recipes", value: "3" },
      { label: "Premium limits", value: "Unlimited" },
    ],
    idea:
      "The core product idea is simple: turn whatever is already in the fridge into a swipeable set of practical recipe options, then keep the expensive AI work behind server-side validation and cache.",
    flow: [
      {
        title: "Capture",
        text: "The user adds ingredients or describes what they have through text, photo or voice.",
      },
      {
        title: "Generate",
        text: "The .NET orchestrator calls OpenAI, validates recipes and checks limits.",
      },
      {
        title: "Save",
        text: "Recipes, pantry items and shopping lists are persisted in Supabase.",
      },
    ],
    charts: [
      { label: "SwiftUI UX", value: 86 },
      { label: ".NET API", value: 90 },
      { label: "AI validation", value: 78 },
      { label: "Cache", value: 84 },
    ],
  },
  {
    slug: "dddmanager",
    title: "DDDManager",
    status: "AI-assisted DDD operations SaaS",
    accent: "#2563FF",
    image: "/dddManager/hero-banner.png",
    liveUrl: "https://dddmanager.ro/landing",
    summary:
      "DDDManager is a Romanian SaaS for DDD companies where AI helps import messy customer files, map them into operational records, and keep the team moving from contracts to interventions, reports and eFactura.",
    architecture:
      "React/Vite frontend, ASP.NET Core API, PostgreSQL, Cloudflare R2, Stripe and a separate Node eFactura service. The important product layer is Smart Import: the backend prepares file context, sends it to Claude or OpenAI, validates the answer and falls back to deterministic matching when needed.",
    agents: [
      "Reads CSV, TXT, Excel and Word files, then extracts headers and sample rows.",
      "Detects Client, Location, Substance, Contract, Intervention, Invoice or Unknown.",
      "Maps Romanian DDD columns like Beneficiar, CIF and Sediu social to internal fields.",
      "Returns confidence, reasoning, warnings and suggestions, with deterministic fallback if the LLM is unavailable.",
    ],
    features: [
      "Import clients, locations, substances and contracts with AI-assisted mapping.",
      "Plan DDD interventions, assign technicians and generate reports.",
      "Send invoices through ANAF eFactura and track status in the platform.",
    ],
    automation: [
      "ASP.NET backend applies Entity Framework migrations automatically at startup.",
      "EfacturaStatusPollingService keeps invoice statuses synchronized with ANAF.",
      "pg-backup-cron runs PostgreSQL backups with pg_dump, compresses them and uploads them to Cloudflare R2.",
      "Retention rules remove old database backups based on RETENTION_DAYS.",
    ],
    monetization:
      "The platform uses Premium subscriptions through Stripe, turning operational DDD software into a recurring SaaS product.",
    notes: [
      "The main backend owns authentication, Identity roles, companies, contracts, interventions, invoices, notifications, documents, AI import and subscription state.",
      "The eFactura Node service isolates ANAF OAuth, UBL XML generation, submission, status checks and downloads from the core API.",
      "Cloudflare R2 is used both for user-facing documents and for database backup storage via the S3-compatible AWS SDK.",
    ],
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "TanStack Query",
      "Axios",
      "Tailwind CSS",
      "Radix UI",
      "lucide-react",
      "Recharts",
      "ASP.NET Core",
      ".NET 10",
      "Entity Framework Core",
      "PostgreSQL",
      "Node.js",
      "Express",
      "Railway",
      "Cloudflare Pages",
      "Cloudflare R2",
      "Stripe",
      "ANAF eFactura",
      "Claude",
      "OpenAI",
      "QuestPDF",
    ],
    metrics: [
      { label: "AI import targets", value: "6+" },
      { label: "User roles", value: "4" },
      { label: "Fallback mode", value: "Yes" },
    ],
    idea:
      "The strongest part of DDDManager is the AI import layer: it turns imperfect Romanian operational files into structured records a DDD company can actually use.",
    flow: [
      {
        title: "Read",
        text: "The backend samples the uploaded file and sends useful context to the import agent.",
      },
      {
        title: "Map",
        text: "The agent identifies the dataset type and maps columns to internal fields.",
      },
      {
        title: "Confirm",
        text: "The user sees confidence, warnings and suggestions before records enter the app.",
      },
    ],
    charts: [
      { label: "CRM records", value: 88 },
      { label: "Scheduling", value: 82 },
      { label: "AI import", value: 74 },
      { label: "eFactura", value: 91 },
    ],
  },
  {
    slug: "golracu",
    title: "GolRacu",
    status: "AI football predictions platform",
    accent: "#e00000",
    image: "/golracu/image.png",
    liveUrl: "https://golracu.com",
    summary:
      "GolRacu is a football predictions product with a public picks site, admin workflows, AI-generated match analysis, evaluated results, and a transparent publishing loop.",
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
];

export const getAgentSiteBySlug = (slug) =>
  agentSites.find((site) => site.slug === slug);
