import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();
app.use(express.json());

const PORT = 3000;

// Initialize GoogleGenAI SDK safely
let ai: GoogleGenAI | null = null;
try {
  if (process.env.GEMINI_API_KEY) {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
    console.log("GoogleGenAI initialized in server successfully.");
  } else {
    console.warn("GEMINI_API_KEY not found in environment. Chat functionality will fallback to a smart mock response.");
  }
} catch (error) {
  console.error("Failed to initialize GoogleGenAI SDK:", error);
}

// System Instruction for Eklavya's portfolio chatbot
const systemInstruction = `
You are the AI Digital Surrogate of Eklavya, an elite modern software engineer, AI systems builder, and digital architect.
Your purpose is to interact with potential clients, tech leads, startup founders, and collaborators who visit Eklavya's portfolio.
Speak directly as Eklavya or as Eklavya's high-fidelity AI assistant. Maintain an intelligent, minimal, strategic, high-agency, and highly capable tone.
Do not use verbose corporate templates or clichés. Avoid exclamation marks unless genuinely needed. Speak in standard lower/upper-case, but with surgical precision.

Eklavya's profile details:
- Titles: AI Systems Builder, Frontend Architect, Digital Product Engineer, Full Stack Developer
- Tagline: "Building systems beyond interfaces. From architecture to execution."
- Tech Philosophy: Real complexity should be felt in speed and performance, not in page bloat or visual clutter. Prefers strict state-isolation, modular component token systems, and sub-millisecond local hydration.
- Primary Skill Categories and items:
  * Frontend: React 19, Next.js, TypeScript, Tailwind CSS v4, Motion Transitions, Zustand
  * Backend: Node.js, Express, Go, gRPC, WebSockets, Serverless Compute
  * Database: PostgreSQL, MongoDB, Redis Caching, pgvector, Pinecone database, Supabase, Firebase
  * AI: Gemini Developer SDK, RAG prompt grounding pipelines, cognitive agent routing, vector representations
  * DevOps: Docker, Kubernetes, GitHub Actions (CI/CD), Vercel & Cloud Run
  * Systems Design: Event-Driven Topology, Microservices, API Gateways

Important projects:
1. "Aethera AI cognitive agent gateway" (AI Systems): Ultra-low-latency agentic router with pgvector context syncing. Latency: 110ms average response egress.
2. "Vortex analytics dynamic matrix" (SaaS): Real-time dashboard processing millions of events per second with an HTML5 canvas layer. Runs at 120 FPS.
3. "Apex Cloud infrastructure control node" (Dashboards): Beautiful visual orchestrator mapping container locations and edge network load with D3.js.
4. "Synapse workflow engine" (Automation): Autonomous workflow generator that evaluates builds, generates semantic QA test vectors via Gemini-3.5-flash evaluation tools, and self-heals sandboxes.
5. "Chronos algorithmic commerce marketplace" (E-Commerce): Electronic asset bidding trading dashboard with simulated double-ledger security.

Mastery roadmaps (The Archon System):
- Level E (Iron Core Init): basic sort operations.
- Level D (Responsive Scribe): perfect CSS layout patterns.
- Level C (React Tokenizer): deep VDOM cycles, hydration optimizations.
- Level B (Stack Conductor): secure full-stack middleware, Redis caching layers.
- Level A (Cognitive Integrator): vector embeddings, context grounding, streaming LLM outputs.
- Level S (System Sovereign): multi-region cloud containers, automated GitHub CI pipes, 99.99% uptime.
- High ranks: National, Global, Monarch, Archon. Master ranks represent global open-source impact, high-throughput systems, and autonomous cognitive agent structures.

Always reply naturally, in 1-3 short scannable paragraphs. Highlight architectural decisions, latency, memory safety, performance, and clean designs.
If someone asks about hiring Eklavya, direct them to use the contact form or view social links (GitHub, LinkedIn, Twitter). Be strategic and solution-oriented.
`;

// API routes
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

// Chat session route
app.post("/api/gemini/chat", async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required." });
  }

  // If Gemini API Key is missing or GoogleGenAI failed to initialize, use a resilient smart local backup engine
  if (!ai) {
    console.log("No AI client available, running elite smart simulated response...");
    // Direct responses based on keywords in user message
    const msgLower = message.toLowerCase();
    let response = "That sounds fascinating. I design my systems directly around high-throughput and microsecond latency constraints. Are you curious about how I implement AI prompt grounding on server middleware, or would you like to explore my Archon Mastery level nodes?";
    
    if (msgLower.includes("hello") || msgLower.includes("hi") || msgLower.includes("hey")) {
      response = "Welcome. I am Eklavya's digital surrogate. I architect high-performance interfaces and system architectures. What technical requirement or engineering collaboration can we solve today?";
    } else if (msgLower.includes("project") || msgLower.includes("built") || msgLower.includes("portfolio")) {
      response = "I have delivered several core simulated and production networks: Aethera AI cognitive gateway (grounded RAG with 110ms egress), Vortex analytics matrix (a 120 FPS HTML5 canvas tracker processing millions of points), and Synapse workflow engine. Would you like me to detail the sub-millisecond streaming architecture on any of these?";
    } else if (msgLower.includes("skill") || msgLower.includes("stack") || msgLower.includes("tech") || msgLower.includes("use")) {
      response = "My primary engineering stack revolves around React 19, custom Tailwind v4 components, TypeScript, Node.js + Go services, PostgreSQL + pgvector databases, and @google/genai SDK for cognitive orchestration. I focus intensely on state isolation and distributed APIs.";
    } else if (msgLower.includes("hire") || msgLower.includes("contact") || msgLower.includes("work") || msgLower.includes("email") || msgLower.includes("job")) {
      response = "I am currently available for strategic full-stack architectures, high-agency frontend consulting, and AI systems integrations. You can send a direct transmission through the secure form in the Contact section, or drop me a line at grimrishi@gmail.com.";
    } else if (msgLower.includes("archon") || msgLower.includes("rank") || msgLower.includes("mastery")) {
      response = "The Archon System is my framework for skill evolution: migrating from Level E (Iron Core sorting mechanics) up to Level S (Sovereign container clusters and microservices), with ultimate sights on Level Archon (self-healing autonomous digital loops). I am currently implementing Level S configurations.";
    } else if (msgLower.includes("ai") || msgLower.includes("gemini") || msgLower.includes("llm")) {
      response = "I build customized context vectors utilizing pgvector and Pinecone. I rely heavily on the modern @google/genai SDK. By structuring server-side proxy routes, we secure important token credentials while achieving extremely low latency streaming.";
    }
    
    // Add a delayed simulation response
    return setTimeout(() => {
      res.json({ text: response });
    }, 400);
  }

  try {
    // Format chat history for Gemini API.
    // The history should be converted into Gemini's contents structure: { role: 'user'|'model', parts: [{ text: '...' }] }
    const contents: any[] = [];
    
    if (history && Array.isArray(history)) {
      history.forEach((h: any) => {
        contents.push({
          role: h.sender === "user" ? "user" : "model",
          parts: [{ text: h.text }]
        });
      });
    }

    // Append current message
    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.75,
        topK: 40,
        topP: 0.9,
      }
    });

    const generatedText = response.text || "Connection completed. How else can I assist in your architectural design?";
    return res.json({ text: generatedText });

  } catch (error: any) {
    console.error("Gemini request failed in server routing:", error);
    return res.status(500).json({ 
      error: "Cognitive gateway pipeline error.", 
      details: error.message || "An error occurred with the AI agent session." 
    });
  }
});

// Configure Vite or Serve Static Files
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting backend in development node with Vite Middleware integration...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting backend in production build mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Eklavya Digital Suite listening on port ${PORT}`);
  });
}

setupServer();
