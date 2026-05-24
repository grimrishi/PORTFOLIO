import { Project, Skill, JourneyStep, MasteryNode, ServiceItem } from '../types';

export const eklavyaIdentity = {
  name: "Eklavya",
  titles: [
    "AI Systems Builder",
    "Frontend Architect",
    "Digital Product Engineer",
    "Full Stack Developer"
  ],
  taglines: [
    "Building systems beyond interfaces.",
    "Engineering intelligent digital experiences.",
    "Code. Systems. Scale.",
    "From architecture to autonomous execution."
  ],
  aboutHeadline: "I architect high-performance interfaces and design autonomous AI systems that operate at global scale.",
  bio: "I exist at the intersection of extreme frontend performance, cognitive system architectures, and flawless product-level execution. I don't build standard software; I build intelligent pipelines, responsive user ecosystems, and highly optimised platforms. Combining elite state management, complex database engineering, and low-latency AI grounding, I deliver experiences that look premium and execute perfectly.",
  technicalPhilosophy: "Real complexity should be felt in the speed, not in the layout. Elegant systems require strict modularity, localized updates, and zero extra cycles wasted on rendering or parsing.",
  statBriefs: [
    { value: "50M+", label: "API Requests Managed" },
    { value: "<100ms", label: "Core AI LLM Grounding Latency" },
    { value: "4.9s", label: "Interactive System Benchmarks" },
    { value: "99.9%", label: "Pipeline Production Uptime" }
  ]
};

export const skillsData: Skill[] = [
  // Frontend
  { name: "React 19 / Next.js", level: 98, category: "Frontend" },
  { name: "TypeScript", level: 96, category: "Frontend" },
  { name: "Tailwind CSS v4 & Motion", level: 95, category: "Frontend" },
  { name: "State Orchestration (Zustand/Signals)", level: 90, category: "Frontend" },
  
  // Backend
  { name: "Node.js / Express", level: 94, category: "Backend" },
  { name: "Go / gRPC Pipelines", level: 85, category: "Backend" },
  { name: "GraphQL & WebSockets", level: 88, category: "Backend" },
  { name: "Serverless Compute (Edge runtimes)", level: 91, category: "Backend" },

  // Database
  { name: "PostgreSQL", level: 90, category: "Database" },
  { name: "MongoDB & Redis (Caching)", level: 92, category: "Database" },
  { name: "Supabase & Firebase", level: 94, category: "Database" },
  { name: "Vector Databases (Pinecone/pgvector)", level: 88, category: "Database" },

  // AI Systems
  { name: "Gemini Developer SDK (@google/genai)", level: 96, category: "AI Systems" },
  { name: "RAG & Advanced Prompt Grounding", level: 93, category: "AI Systems" },
  { name: "Cognitive Agent Orchestration", level: 87, category: "AI Systems" },
  { name: "Model Fine-Tuning Interfaces", level: 82, category: "AI Systems" },

  // DevOps & Cloud
  { name: "Docker & Kubernetes", level: 89, category: "DevOps & Clou" },
  { name: "CI/CD & GitHub Actions", level: 92, category: "DevOps & Clou" },
  { name: "Cloud Run / AWS Infrastructure", level: 90, category: "DevOps & Clou" },
  { name: "Vercel / Edge Deployment", level: 97, category: "DevOps & Clou" },

  // System Design
  { name: "Distributed System Topology", level: 91, category: "System Design" },
  { name: "Microservices & Event-Driven Architecture", level: 93, category: "System Design" },
  { name: "High-Throughput API Gateways", level: 88, category: "System Design" },
  { name: "Premium Component Token Systems", level: 95, category: "System Design" }
];

export const projectsData: Project[] = [
  {
    id: "proj_taskflow",
    title: "TaskFlow Collaborative Engine",
    category: "SaaS Platforms",
    tagline: "Beautiful-by-design task orchestration board with instant client state routing.",
    description: "An advanced collaborative environment designed for fast-paced engineering squads. Provides fluid column transitions, instant nested card-views, automated state snapshots, and highly localized re-render hooks keeping frame rates high under dense loads.",
    problemSolved: "Heavy state recalculations and lag during drag-and-drop operations on large project trees with deep task relationships.",
    keyFeatures: [
      "Highly isolated store selectors ensuring sub-5ms render responsiveness",
      "Dynamic column-mapping workflows with micro-interactions powered by motion",
      "Robust state sync recovery with offline fallback and optimistic UI updates"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Motion"],
    performanceMetric: { value: "<5ms", label: "Render Target Egress" },
    demoUrl: "https://taskflow-psi-sooty.vercel.app/",
    githubUrl: "https://github.com/NightRishi106/Taskflow"
  },
  {
    id: "proj_brick_bean",
    title: "Brick & Bean Estate Portal",
    category: "E-Commerce",
    tagline: "Premium boutique real estate listing engine and workspace discovery client.",
    description: "A gorgeous, high-contrast visual portal showcasing premium properties and designed professional workspaces. Blends refined Inter/Space Grotesk typography, immersive image loaders with custom Referrer Policies, dynamic filtering arrays, and an elegant inquiry submission channel.",
    problemSolved: "Cluttered, default-style MLS databases that fail to deliver a localized premium feel, slow filter response, and heavy page weights.",
    keyFeatures: [
      "Custom responsive bento-inspired estate card arrays with smooth hover indicators",
      "Zero-layout-shift (CLS) visual grids built with pre-calculated aspect-ratio holds",
      "Optimized client-side filtration matrix for real-time localized listings"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Motion", "Lucide React"],
    performanceMetric: { value: "100/100", label: "Lighthouse Performance" },
    demoUrl: "https://brick-and-bean.vercel.app/",
    githubUrl: "https://github.com/NightRishi106/Brick-and-Bean"
  },
  {
    id: "proj_ochre_ash",
    title: "Ochre & Ash Atelier Showcase",
    category: "SaaS Platforms",
    tagline: "Ultra-minimalist digital brand storefront for high-end architectural ceramics.",
    description: "A masterclass in editorial digital design. Built as a high-integrity virtual showcase highlighting high-end handmade ceramics, incorporating staggered entrance animations, modern grid offsets, absolute typographic control, and simple local state persistence.",
    problemSolved: "Cookie-cutter storefront checkouts that break aesthetic immersion and result in high visitor bounce rates.",
    keyFeatures: [
      "Custom staggered motion animations for tactile product discovery",
      "Elegant design balance using spacious margins and high-contrast color tones",
      "Seamless local shopping bag state matrix and quick checkout simulation"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Motion", "Zustand"],
    performanceMetric: { value: "120 FPS", label: "Scroll Render Performance" },
    demoUrl: "https://ochre-ash.vercel.app/",
    githubUrl: "https://github.com/NightRishi106/Ochre-Ash"
  },
  {
    id: "proj_pushker_investments",
    title: "Pushker Investments Platform",
    category: "Dashboards",
    tagline: "Smart mutual fund planner & portfolio visualization dashboard.",
    description: "A highly analytical fintech planner customized for personal portfolio management. Features calculation engines modeling multi-year compounding yields, interactive allocation graphs displaying dynamic growth matrices, and absolute numerical data accuracy.",
    problemSolved: "Vague, hard-to-understand compound calculators that do not dynamically visualize growth adjustments or custom risk tolerances.",
    keyFeatures: [
      "High-fidelity responsive Recharts metrics rendering dynamic compound forecasts",
      "Precision yield calculation matrix processing customizable periodic multipliers",
      "High-contrast tabulated investment overview matching premium finance dashboards"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Lucide React"],
    performanceMetric: { value: "0.02ms", label: "Advisor Engine Calculations" },
    demoUrl: "https://pushker-investments.vercel.app/",
    githubUrl: "https://github.com/NightRishi106/Pushker-Investments"
  }
];

export const journeyTimeline: JourneyStep[] = [
  {
    id: "journey_1",
    year: "2018 - 2020",
    title: "Foundation: Core systems & compilers",
    type: "learning",
    organization: "Self-Directed Mastery & Systems Lab",
    description: "Deep-dived into systems-level programming, language design patterns, and compiler mechanics. Studied low-level hardware structures, memory architectures, TCP/IP communication layers, and assembly.",
    achievements: [
      "Built a custom, lightweight interpreter for a subset of JS to understand tokenization",
      "Designed and deployed responsive static widgets in vanilla CSS/JS for clients",
      "Mastered functional data pipelines and mathematical abstractions"
    ]
  },
  {
    id: "journey_2",
    year: "2020 - 2022",
    title: "The Frontend architect shift",
    type: "building",
    organization: "Vanguard UI Studio",
    description: "Pivoted into complex application interfaces. Standardized component design tokens, built multi-tenant layout frameworks, and analyzed high-speed rendering pipelines in modern web browsers.",
    achievements: [
      "Created a high-fidelity rendering benchmark suite to identify paint-blocking JS scripts",
      "Architected responsive monorepos deploying to 20+ isolated static endpoints",
      "Achieved a 40% loading speed improvement for large SaaS analytics dashboards"
    ]
  },
  {
    id: "journey_3",
    year: "2022 - 2024",
    title: "AI & Distributed architectures",
    type: "deployment",
    organization: "Foundry AI Systems",
    description: "Merged high-end UI/UX with modern cognitive systems. Specialized in vector grounding, embedding engines, structured context delivery pipelines, and robust Node.js backend integration.",
    achievements: [
      "Successfully integrated RAG (Retrieval-Augmented Generation) memory buffers in Express servers",
      "Designed an automated schema indexing logic that slashed query execution times by half",
      "Engineered full-stack interactive portals supporting 10k+ concurrent active socket clients"
    ]
  },
  {
    id: "journey_4",
    year: "2024 - 2026",
    title: "Digital architect & Autonomous systems",
    type: "elite",
    organization: "Cognitive Labs Ltd",
    description: "Currently scaling intelligent server nodes with self-healing Docker engines, custom prompt generators, and immersive Vercel/Cloud-aligned visual platforms.",
    achievements: [
      "Serving high-integrity code solutions for world-class freelance clients and developers",
      "Evolving the Archon Mastery progression system into a production-level standard",
      "Implementing AI agent systems grounding live UTC timezone servers"
    ]
  }
];

export const archonRanks: MasteryNode[] = [
  {
    rank: "E",
    title: "Iron Core Init",
    description: "The baseline phase. Writing basic code blocks, executing manual loops, and understanding primitive structures.",
    requirements: ["Learn HTML, Basic CSS", "Write manual bubble-sort algorithm", "Commit first repository to GitHub"],
    unlocked: true,
    perks: ["Can write static page templates", "Knows differences between heap vs stack"],
    experienceNeeded: 100
  },
  {
    rank: "D",
    title: "Responsive Scribe",
    description: "Transitioning to fluid UI modules, reactive layout states, and robust CSS paradigms.",
    requirements: ["Master DOM selectors", "Build a fully responsive multi-view portfolio", "Integrate standard third-party utility scripts"],
    unlocked: true,
    perks: ["Mobile responsiveness layout guarantee", "CSS layouts with zero absolute positioning anomalies"],
    experienceNeeded: 250
  },
  {
    rank: "C",
    title: "React Tokenizer",
    description: "Embracing declarative UI, components isolation, and local state synchrony.",
    requirements: ["Deep architectural understanding of virtual DOM lifecycle", "Implement efficient custom hooks", "Deploy Next.js static structures to production"],
    unlocked: true,
    perks: ["Client-side optimization master", "Sub-microsecond local hydration execution"],
    experienceNeeded: 500
  },
  {
    rank: "B",
    title: "Stack Conductor",
    description: "Expanding into full-stack architecture, relational database schemas, and Express.js API gateways.",
    requirements: ["Design absolute index structures in PostgreSQL", "Build safe authentication middlewares", "Integrate real Redis memory caches for DB reads"],
    unlocked: true,
    perks: ["Full database schema protection", "RESTful specification compliancy"],
    experienceNeeded: 1000
  },
  {
    rank: "A",
    title: "Cognitive Integrator",
    description: "Injecting machine intelligence, vector grounding pipelines, and fast AI models.",
    requirements: ["Connect low-latency LLM stream outputs using WebSockets", "Implement vector embeddings on DB inputs", "Construct context-grounded agent prompts"],
    unlocked: true,
    perks: ["AI agent orchestration", "Sub-150ms dynamic grounding pipelines"],
    experienceNeeded: 2000
  },
  {
    rank: "S",
    title: "System Sovereign",
    description: "Mastering complete DevOps workflows, self-healing Docker containers, and live operational monitoring.",
    requirements: ["Establish reliable multi-region load-balancer nodes", "Build automated continuous-integration shell pipes", "Maintain 99.99% operational uptime on live projects"],
    unlocked: true,
    perks: ["Zero-downtime deployment pipelines", "Absolute systems orchestration"],
    experienceNeeded: 4000
  },
  {
    rank: "National",
    title: "Tech Lead Sovereign",
    description: "Leading modular teams, architecting cross-platform design databases, and structuring deep technical specifications.",
    requirements: ["Lead major core system refactoring on complex enterprise apps", "Establish proprietary React Component design libraries", "Review security topologies across external cloud APIs"],
    unlocked: false,
    perks: ["Enterprise grade security standards", "Multi-tenant layout dominance"],
    experienceNeeded: 10000
  },
  {
    rank: "Global",
    title: "Digital Architect General",
    description: "Defining future-scale web solutions, pioneering custom rendering modes, and shaping modular standards.",
    requirements: ["Create high-speed open-source packages within the tooling ecosystem", "Speak at engineering conferences regarding frontend scaling", "Author research topics about advanced RAG state buffers"],
    unlocked: false,
    perks: ["Global developer mindshare", "Direct impact on web standards"],
    experienceNeeded: 25000
  },
  {
    rank: "Monarch",
    title: "System Director Monarch",
    description: "Governing vast software architectures handling hundreds of millions of monthly page loads securely.",
    requirements: ["Oversee distributed systems serving over 100M active payloads", "Manage platform budgets exceeding millions in infrastructure credits", "Orchestrate multi-hundred engineer structures successfully"],
    unlocked: false,
    perks: ["Executive system control", "Ultimate operational agency"],
    experienceNeeded: 60000
  },
  {
    rank: "Archon",
    title: "Digital Archon",
    description: "Ultimate computational synchronization. Perfect blending of software, cognitive automation, autonomous cloud nodes, and global high-fidelity design.",
    requirements: ["Build a fully self-healing, self-sustaining visual and server environment", "Pioneer breakthrough paradigms in cognitive AI-human computation", "Deploy persistent AI digital agents guiding multi-million dollar platforms autonomousely"],
    unlocked: false,
    perks: ["Infinite computational legacy", "Absolute technological synergy"],
    experienceNeeded: 150000
  }
];

export const bentoServices: ServiceItem[] = [
  {
    id: "serv_fullstack",
    title: "Full Stack Infrastructure Development",
    description: "Scalable monorepos, highly secure Node.js APIs, multi-tenant databases, and elegant client views. Zero friction from DB cells to client pixels.",
    details: [
      "Strict static assets distribution via global CDNs",
      "Fast response Express caching algorithms using memory maps",
      "Modern relational models with precise transactional safeguards"
    ],
    iconName: "Layers",
    gridSpan: "md:col-span-2"
  },
  {
    id: "serv_ai",
    title: "Intelligent AI Product Integration",
    description: "Grounding raw models into real context. Implementing Pinecone vector indexes, optimized embedding routes, dynamic prompt structures, and interactive live streams.",
    details: [
      "Robust prompt engineering using clean system guidelines",
      "Dynamic token management and secure file grounding",
      "Clean server-side proxy loops hiding critical API credentials"
    ],
    iconName: "BrainCircuit",
    gridSpan: "col-span-1"
  },
  {
    id: "serv_frontend",
    title: "Premium Frontend Architecture",
    description: "Ultra-fast Next.js layouts, responsive CSS components, fluid motion animations, and state integrity. Flawless Vercel aesthetics combined with high frame rates.",
    details: [
      "Zero-flicker route transitions using Framer Motion",
      "Responsive layout grids with absolute focus on typography",
      "Sub-millisecond interactive inputs using optimized rendering hooks"
    ],
    iconName: "Sparkles",
    gridSpan: "col-span-1"
  },
  {
    id: "serv_automations",
    title: "Automated Workflows & Toolings",
    description: "Liberate engineering cycles. Writing custom GitHub deployment runners, complex Docker compose topologies, and self-healing error monitors.",
    details: [
      "Webhook listening grids displaying accurate live statistics",
      "Dynamic mock vector generators simulating customer test inputs",
      "Automatic failover alerts delivering details right into developers' logs"
    ],
    iconName: "Cpu",
    gridSpan: "md:col-span-2"
  }
];
