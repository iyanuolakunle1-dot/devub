import {
  partnerLogos,
  servicesData,
  portfolioProjects,
  darkBannerStats,
  caseStudies,
  processItems,
  testimonials,
  engagementModels,
  faqItems,
} from "../data/mockData";

const USE_MOCK = import.meta.env.VITE_USE_MOCK !== "false";
const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

async function request(endpoint, options = {}) {
  const token = localStorage.getItem("token");
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

const delay = (ms = 250) => new Promise((r) => setTimeout(r, ms));

export async function getPartners() {
  if (USE_MOCK) { await delay(); return partnerLogos; }
  return request("/partners");
}

export async function getServices() {
  if (USE_MOCK) { await delay(); return servicesData; }
  return request("/services");
}

export async function getPortfolio(category = null) {
  if (USE_MOCK) {
    await delay();
    return category && category !== "All"
      ? portfolioProjects.filter((p) => p.category === category)
      : portfolioProjects;
  }
  const q = category ? `?category=${category}` : "";
  return request(`/portfolio${q}`);
}

export async function getDarkStats() {
  if (USE_MOCK) { await delay(); return darkBannerStats; }
  return request("/stats");
}

export async function getCaseStudies() {
  if (USE_MOCK) { await delay(); return caseStudies; }
  return request("/case-studies");
}

export async function getProcess() {
  if (USE_MOCK) { await delay(); return processItems; }
  return request("/process");
}

export async function getTestimonials() {
  if (USE_MOCK) { await delay(); return testimonials; }
  return request("/testimonials");
}

export async function getEngagementModels() {
  if (USE_MOCK) { await delay(); return engagementModels; }
  return request("/engagement-models");
}

export async function getFaq() {
  if (USE_MOCK) { await delay(); return faqItems; }
  return request("/faq");
}

export async function submitContact(formData) {
  if (USE_MOCK) {
    await delay(500);
    return { success: true, message: "We'll be in touch within 24 hours!" };
  }
  return request("/contact", {
    method: "POST",
    body: JSON.stringify(formData),
  });
}
