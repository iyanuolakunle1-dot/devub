/**
 * api.js
 * ------
 * Central API layer for Devub Technologies website.
 *
 * HOW IT WORKS:
 * - When VITE_USE_MOCK=true  → returns local mock data (no server needed)
 * - When VITE_USE_MOCK=false → fetches real data from your backend server
 *
 * HOW TO SWITCH TO REAL BACKEND:
 * 1. Open .env file in the root directory
 * 2. Change:  VITE_USE_MOCK=true  →  VITE_USE_MOCK=false
 * 3. Set:    VITE_API_BASE_URL=http://your-server.com/api
 * 4. Restart the dev server: npm run dev
 *
 * No changes needed in any component file!
 */

import {
  portfolioProjects,
  caseStudies,
  faqItems,
  processItems,
  heroStats,
} from "../data/mockData";

const USE_MOCK = import.meta.env.VITE_USE_MOCK !== "false";
const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

// ─── Generic fetch helper ─────────────────────────────────────────────────────
async function request(endpoint, options = {}) {
  const token = localStorage.getItem("token"); // JWT from login
  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...options,
  });
  if (!res.ok) throw new Error(`API error: ${res.status} ${res.statusText}`);
  return res.json();
}

// ─── Simulate network delay for mock data ────────────────────────────────────
const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

// ─── API Functions ────────────────────────────────────────────────────────────

/**
 * GET /api/portfolio
 * Returns all portfolio projects.
 * Optional query: ?category=Design|Development|Others
 */
export async function getPortfolio(category = null) {
  if (USE_MOCK) {
    await delay();
    return category
      ? portfolioProjects.filter((p) => p.category === category)
      : portfolioProjects;
  }
  const query = category ? `?category=${category}` : "";
  return request(`/portfolio${query}`);
}

/**
 * GET /api/case-studies
 * Returns all case study entries.
 */
export async function getCaseStudies() {
  if (USE_MOCK) {
    await delay();
    return caseStudies;
  }
  return request("/case-studies");
}

/**
 * GET /api/faq
 * Returns all FAQ items.
 */
export async function getFaq() {
  if (USE_MOCK) {
    await delay();
    return faqItems;
  }
  return request("/faq");
}

/**
 * GET /api/process
 * Returns creative process bento grid items.
 */
export async function getProcess() {
  if (USE_MOCK) {
    await delay();
    return processItems;
  }
  return request("/process");
}

/**
 * GET /api/hero-stats
 * Returns hero section stat numbers.
 */
export async function getHeroStats() {
  if (USE_MOCK) {
    await delay();
    return heroStats;
  }
  return request("/hero-stats");
}

/**
 * POST /api/contact
 * Submits the contact form.
 *
 * Body: { name, email, company, message }
 * Response: { success: true, message: "We'll be in touch!" }
 */
export async function submitContact(formData) {
  if (USE_MOCK) {
    await delay(600);
    console.log("Mock contact form submission:", formData);
    return { success: true, message: "We'll be in touch!" };
  }
  return request("/contact", {
    method: "POST",
    body: JSON.stringify(formData),
  });
}

