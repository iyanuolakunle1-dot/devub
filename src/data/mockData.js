/**
 * mockData.js
 * -----------
 * All static/mock content for the website.
 * When your brother adds the backend, he replaces these with real API calls
 * from src/services/api.js — the components don't need to change at all.
 */

// ─── Portfolio projects ───────────────────────────────────────────────────────
export const portfolioProjects = [
  {
    id: 1,
    category: "Design",
    title: "Apex Labs Dashboard",
    description:
      "A high-fidelity design system for a scaling fintech platform, featuring modular components and a consistent visual language.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    id: 2,
    category: "Design",
    title: "Nova Health Companion",
    description:
      "Mobile onboarding flows and core screens designed for clarity, accessibility, and a premium user experience.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  },
  {
    id: 3,
    category: "Development",
    title: "Stellar Logistics Portal",
    description:
      "A high-performance web application built with Next.js and serverless APIs, optimized for fast routing and real-time updates.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  },
  {
    id: 4,
    category: "Development",
    title: "Vertex Mobile Client",
    description:
      "Native mobile application development with a focus on performance, offline support, and seamless authentication flows.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
  },
  {
    id: 5,
    category: "Others",
    title: "Brand Identity Kit",
    description:
      "A comprehensive brand system including typography, iconography, and visual guidelines for product marketing teams.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80",
  },
  {
    id: 6,
    category: "Others",
    title: "AI Pipeline Prototype",
    description:
      "An internal prototype exploring how LLM integrations can be surfaced in a lightweight, developer-friendly interface.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
  },
];

// ─── Case studies ─────────────────────────────────────────────────────────────
export const caseStudies = [
  {
    id: 1,
    tag: "Cloud / Automation",
    title: "FlowState Financial",
    description:
      "Discover how Devub Technologies designed a highly available cluster that reduced load-testing overhead by 42%.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
  },
  {
    id: 2,
    tag: "AI / Mobile Dev",
    title: "Nova Health Companion",
    description:
      "Discover how Devub Technologies designed a highly available cluster that reduced load-testing overhead by 42%.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
  },
  {
    id: 3,
    tag: "NextJS Systems",
    title: "Stellar Logistics",
    description:
      "Discover how Devub Technologies designed a highly available cluster that reduced load-testing overhead by 42%.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
];

// ─── FAQ items ────────────────────────────────────────────────────────────────
export const faqItems = [
  {
    id: 1,
    question: "How long does a custom dashboard setup take?",
    answer:
      "Typically our custom application stack is delivered within 4–6 weeks from signed architecture sign-off.",
  },
  {
    id: 2,
    question: "Do you integrate directly with internal dev ops tools?",
    answer:
      "Yes, our cloud team works directly inside your Git pipelines, AWS, or GCP environments seamlessly.",
  },
  {
    id: 3,
    question: "Is post-launch hosting support guaranteed?",
    answer:
      "Every production launch comes with a standard SLA representing continuous uptime monitoring.",
  },
  {
    id: 4,
    question: "Can we request a revision mid-project?",
    answer:
      "Absolutely. We follow an agile delivery model, so we accommodate scope changes at defined sprint boundaries without disrupting the timeline significantly.",
  },
  {
    id: 5,
    question: "What tech stack do you typically work with?",
    answer:
      "We build on React, Next.js, Node.js, and Python for most projects. Cloud platforms include AWS, GCP, and Azure depending on client preference.",
  },
];

// ─── Creative process grid ────────────────────────────────────────────────────
export const processItems = [
  {
    id: 1,
    type: "image",        // "image" | "quote"
    label: "DESIGN",
    title: "Design workshops",
    subtitle: "Aligning product vision with a clear, scalable UI system.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    size: "large",        // "large" | "medium" | "small"
  },
  {
    id: 2,
    type: "image",
    label: null,
    title: null,
    subtitle: null,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    size: "medium",
  },
  {
    id: 3,
    type: "image",
    label: null,
    title: null,
    subtitle: null,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
    size: "small",
  },
  {
    id: 4,
    type: "quote",
    label: "STRATEGY",
    quote: '"We don\'t just build UI — we build systems that scale."',
    author: "DEVUB TECHNOLOGIES",
    size: "small",
  },
  {
    id: 5,
    type: "image",
    label: "DEVELOPMENT",
    title: null,
    subtitle: null,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    size: "medium",
  },
  {
    id: 6,
    type: "image",
    label: "SPRINT REVIEW",
    title: null,
    subtitle: null,
    image: "https://images.unsplash.com/photo-1573165231977-3f0e27806045?w=400&q=80",
    size: "small",
  },
];

// ─── Hero stats (shown below hero headline) ───────────────────────────────────
export const heroStats = [
  { value: "120+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "4–6wk", label: "Avg. Delivery Time" },
];

