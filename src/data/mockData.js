/**
 * mockData.js
 * -----------
 * All mock data for the Devub landing page based on the full design.
 * When the backend is ready, toggle VITE_USE_MOCK=false in .env.
 */

// 1. Partner / Tech Logos under Hero
export const partnerLogos = [
  { name: "AppMaster", icon: "appmaster" },
  { name: "Segment", icon: "segment" },
  { name: "Webflow", icon: "webflow" },
  { name: "Intercom", icon: "intercom" },
  { name: "Retool", icon: "retool" },
];

// 2. Services (4 cards in 2x2 grid)
export const servicesData = [
  {
    id: 1,
    title: "Custom Web Applications",
    description: "Enterprise grade, modular web systems built on modern full-stack architectures engineered for scale.",
    badge: "01",
    tag: "Next.js / React / Node"
  },
  {
    id: 2,
    title: "Dedicated Dev Teams",
    description: "Pre-vetted software engineers, UX designers, and system architects integrated directly into your workflow.",
    badge: "02",
    tag: "Staff Augmentation"
  },
  {
    id: 3,
    title: "Cloud & DevOps Architecture",
    description: "Zero-downtime CI/CD pipelines, container orchestration, and serverless infrastructures on AWS / GCP.",
    badge: "03",
    tag: "AWS / Docker / K8s"
  },
  {
    id: 4,
    title: "API & Microservices",
    description: "High-throughput REST and GraphQL backend services designed for real-time data sync and security.",
    badge: "04",
    tag: "PostgreSQL / Redis / Golang"
  }
];

// 3. Portfolio Projects
export const portfolioProjects = [
  {
    id: 1,
    category: "Design",
    title: "Apex Labs Dashboard",
    description: "A high-fidelity design system for a scaling fintech platform, featuring modular components and a consistent visual language.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["UI/UX", "Dashboard", "Fintech"]
  },
  {
    id: 2,
    category: "Design",
    title: "Nova Health Companion",
    description: "Mobile onboarding flows and core screens designed for clarity, accessibility, and a premium user experience.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["Mobile", "HealthTech", "Figma"]
  },
  {
    id: 3,
    category: "Development",
    title: "Stellar Logistics Portal",
    description: "A high-performance web application built with Next.js and serverless APIs, optimized for fast routing and real-time updates.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    tags: ["Full Stack", "Supply Chain", "Next.js"]
  },
  {
    id: 4,
    category: "Development",
    title: "Vertex Mobile Client",
    description: "Native mobile application development with a focus on performance, offline support, and seamless authentication flows.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    tags: ["React Native", "Offline-first", "Auth"]
  },
  {
    id: 5,
    category: "Others",
    title: "Brand Identity Kit",
    description: "A comprehensive brand system including typography, iconography, and visual guidelines for product marketing teams.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    tags: ["Branding", "Design System", "Styleguide"]
  },
  {
    id: 6,
    category: "Others",
    title: "AI Pipeline Prototype",
    description: "An internal prototype exploring how LLM integrations can be surfaced in a lightweight, developer-friendly interface.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    tags: ["Generative AI", "Python", "FastAPI"]
  }
];

// 4. Black Banner Stats
export const darkBannerStats = [
  { value: "99.9%", label: "System Uptime Guaranteed" },
  { value: "120+", label: "Production Deployments" },
  { value: "45M+", label: "Daily API Calls Handled" },
  { value: "24/7", label: "DevOps SLA Monitoring" },
];

// 5. Case Studies
export const caseStudies = [
  {
    id: 1,
    tag: "Cloud / Automation",
    title: "FlowState Financial",
    description: "Discover how Devub Technologies designed a highly available cluster that reduced load-testing overhead by 42%.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
  },
  {
    id: 2,
    tag: "AI / Mobile Dev",
    title: "Nova Health Companion",
    description: "Discover how Devub Technologies engineered a distributed telemetry engine processing real-time vitals with sub-100ms latency.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
  },
  {
    id: 3,
    tag: "NextJS Systems",
    title: "Stellar Logistics",
    description: "Discover how Devub Technologies overhauled a multi-region warehousing portal to achieve 99.99% fault tolerance.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
];

// 6. Bento Grid Process Items
export const processItems = [
  {
    id: 1,
    type: "image",
    label: "DESIGN",
    title: "Design workshops",
    subtitle: "Aligning product vision with a clear, scalable UI system.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
  {
    id: 2,
    type: "image",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  },
  {
    id: 3,
    type: "image",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
  },
  {
    id: 4,
    type: "quote",
    label: "STRATEGY",
    quote: '"We don\'t just build UI — we build systems that scale."',
    author: "DEVUB TECHNOLOGIES",
  },
  {
    id: 5,
    type: "image",
    label: "DEVELOPMENT",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  },
  {
    id: 6,
    type: "image",
    label: "INNOVATION",
    image: "https://images.unsplash.com/photo-1573165231977-3f0e27806045?w=400&q=80",
  },
];

// 7. Testimonials
export const testimonials = [
  {
    id: 1,
    quote: "Devub Technologies completely reimagined our core product infrastructure. Their team delivered two weeks ahead of schedule and our API latency dropped by 65%.",
    name: "Alex Thorne",
    role: "VP of Engineering at FinScale",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80"
  },
  {
    id: 2,
    quote: "Working with Devub felt like having a senior staff-plus engineering team in-house. Clear PRs, robust test coverage, and frictionless handoff.",
    name: "Marcus Vance",
    role: "Chief Product Officer at Apex",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
  }
];

// 8. Engagement Models / Packages
export const engagementModels = [
  {
    id: 1,
    title: "Dedicated Team",
    subtitle: "Scale your roadmap with dedicated engineers.",
    tagline: "Monthly Sprint Retainer",
    features: ["Dedicated tech lead & engineers", "Full Git repository ownership", "Bi-weekly sprint planning", "Direct Slack & async standups"]
  },
  {
    id: 2,
    title: "Fixed Scope",
    subtitle: "Turnkey MVP or major platform redesign.",
    tagline: "Milestone Deliverables",
    features: ["Defined timeline (4-8 weeks)", "Guaranteed SLA delivery", "Architecture & design signoff", "30 days post-launch warranty"]
  },
  {
    id: 3,
    title: "Staff Support",
    subtitle: "Senior cloud, DevOps, or QA architects.",
    tagline: "Flexible On-Demand Hours",
    features: ["Fractional staff architects", "Production incident escalations", "Cloud cost optimization audits", "CI/CD & security hardening"]
  }
];

// 9. FAQ Items
export const faqItems = [
  {
    id: 1,
    question: "How long does a custom dashboard setup take?",
    answer: "Typically our custom application stack is delivered within 4-6 weeks from signed architecture sign-off."
  },
  {
    id: 2,
    question: "Do you integrate directly with internal dev ops tools?",
    answer: "Yes, our cloud team works directly inside your Git pipelines, AWS, or GCP environments seamlessly."
  },
  {
    id: 3,
    question: "Is post-launch hosting support guaranteed?",
    answer: "Every production launch comes with a standard SLA representing continuous uptime monitoring."
  }
];
