// --- Business Categories & Industry Specifics ---
export const INDUSTRIES = [
  { emoji: "🍔", label: "Food & Beverage", grants: 14, licenses: 7 },
  { emoji: "🛍️", label: "Retail & E-commerce", grants: 11, licenses: 5 },
  { emoji: "🔨", label: "Trades & Construction", grants: 9, licenses: 8 },
  { emoji: "💆", label: "Health & Wellness", grants: 12, licenses: 6 },
  { emoji: "💻", label: "Tech & Creative", grants: 16, licenses: 4 },
  { emoji: "🏨", label: "Hospitality", grants: 10, licenses: 9 },
  { emoji: "🌾", label: "Agriculture", grants: 13, licenses: 5 },
  { emoji: "🚚", label: "Transportation", grants: 8, licenses: 7 },
];

// --- Success Stories (Case Studies) ---
export const CASE_STUDIES = [
  {
    emoji: "🍕",
    title: "Pita Palace",
    location: "Toronto, ON",
    industry: "Food & Beverage",
    quote: "Amir needed 9 licenses, 3 registrations, and had no idea about $22,000 in grants as a newcomer entrepreneur.",
    results: ["Saved $6,000 in legal fees", "Secured $22,000 in grants", "Opened 6 weeks early"],
    detail: {
      challenge: "Amir needed to navigate federal incorporation, Ontario business registration, Toronto municipal license, food handler cert, liquor license, health inspection, and sign permit — simultaneously, in the right order.",
      how: "ScaleReady generated a 9-step roadmap with exact fees, timelines, and form links.",
      docs: ["Federal Incorporation", "Ontario Business Registration", "CRA Business Number", "Toronto Business Licence"],
    }
  },
  // Add NovaBuild and BloomWell here from the original code...
];

// --- Funding & Grant Programs ---
export const FUNDING_PROGRAMS = [
  { name: "Canada Small Business Financing Program", amount: "Up to $1.15M", type: "Federal Loan", match: 94, deadline: "Rolling", color: "green" },
  { name: "BDC Small Business Loans", amount: "Various", type: "Federal Loan", match: 88, deadline: "Rolling", color: "green" },
  { name: "Canada Digital Adoption Program", amount: "Up to $15,000", type: "Federal Grant", match: 91, deadline: "Apr 30, 2026", color: "yellow" },
  { name: "Women Entrepreneurship Strategy", amount: "$100,000", type: "Profile Grant", match: 96, deadline: "Mar 31, 2026", color: "red" },
];

// --- Legal & Tax Documents ---
export const DOCUMENTS = [
  { name: "Federal Incorporation (Form 1)", category: "Legal", status: "ready", icon: "📄" },
  { name: "Ontario Business Registration", category: "Legal", status: "ready", icon: "📋" },
  { name: "CRA Business Number Registration", category: "Tax", status: "ready", icon: "🏦" },
  { name: "GST/HST Registration (RC1)", category: "Tax", status: "ready", icon: "💰" },
];

// --- Standard Roadmap Sequence ---
export const ROADMAP_STEPS = [
  { title: "Register Business Name", level: "Provincial", cost: "$60", time: "45 min", status: "done" },
  { title: "Federal Incorporation", level: "Federal", cost: "$200", time: "2 hrs", status: "done" },
  { title: "CRA Business Number", level: "Federal", cost: "Free", time: "20 min", status: "progress" },
  { title: "GST/HST Registration", level: "Federal", cost: "Free", time: "30 min", status: "todo" },
];

// --- Frequently Asked Questions ---
export const FAQS = [
  { q: "Is ScaleReady actual legal advice?", a: "ScaleReady provides document templates and structured guidance. It is not a law firm." },
  { q: "Does ScaleReady work for Quebec businesses?", a: "Yes. ScaleReady fully supports Quebec businesses with bilingual support and Civil Code compliance." },
];
