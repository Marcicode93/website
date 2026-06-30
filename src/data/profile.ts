export const siteConfig = {
  name: "Marcel Steffen",
  title: "AI Product Builder",
  subtitle: "Product Owner with software development knowledge",
  location: "Donaueschingen, Baden-Württemberg, Germany",
  email: "marcel.steffen@hotmail.de",
  linkedin: "https://www.linkedin.com/in/marcel-steffen-3b650b305",
  summary:
    "Product Owner with experience in AI platforms, digital products, mobile applications, and cloud services. Strong background in product strategy, roadmap development, stakeholder management, and agile collaboration with senior cross-functional engineering teams. I combine business and technical understanding from frontend development, with extensive experience in automotive and platform-based environments.",
};

export const skills = [
  "Strategic Planning",
  "Artificial Intelligence",
  "Stakeholder Management",
  "Product Strategy",
  "Agile & Scrum",
  "Roadmap Development",
  "Go-to-Market",
  "Frontend Development",
];

export const certifications = [
  "Certified SAFe® Product Owner / Product Manager",
  "Digital Product Management: Modern Fundamentals",
  "Introduction to User Experience Principles and Processes",
];

export type CareerEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  featured?: boolean;
};

export const career: CareerEntry[] = [
  {
    company: "Haufe Akademie",
    role: "Product Owner — Digital Learning Solutions (NEXT · AI)",
    period: "Jul 2025 — Present",
    location: "Freiburg im Breisgau",
    featured: true,
    highlights: [
      "Development and continuous improvement of an API platform and AI-based services with a senior development team",
      "Responsibility for product roadmap, backlog prioritization, user stories, and key deliverables",
      "Planning of go-to-market strategy and regular reporting to stakeholders and senior management",
      "Introduction of agile team processes, including Scrum, to improve collaboration and decision-making",
    ],
  },
  {
    company: "Continental",
    role: "Product Manager — Digital Services & Mobile Apps",
    period: "Oct 2020 — Sep 2024",
    location: "Villingen-Schwenningen",
    highlights: [
      "Product management for mobile applications and digital cloud archiving solutions in automotive",
      "Built and led a senior development team for mobile download and cloud archiving solutions",
      "Managed agile product development, backlog, sprint planning, and stakeholder communication",
      "Owned customer journeys, release quality, budget control, and go-to-market activities",
    ],
  },
  {
    company: "Continental",
    role: "Business Development Manager / Software Project Manager",
    period: "Oct 2018 — Sep 2020",
    location: "Villingen-Schwenningen",
    highlights: [
      "Growth and further development of the TruckOn online booking platform for truck workshop services",
      "Developed business models and growth strategies based on market and user insights",
      "Managed external software suppliers and built strategic partnerships",
    ],
  },
  {
    company: "Continental",
    role: "Cooperative Education Student — International Business",
    period: "Oct 2015 — Sep 2018",
    location: "Villingen-Schwenningen",
    highlights: [
      "Focus on International Marketing, Controlling & Finance, and Spanish (B1)",
      "Dual studies program combining academic theory with hands-on corporate experience",
    ],
  },
  {
    company: "Continental",
    role: "HR Manager",
    period: "Jan 2015 — Oct 2015",
    location: "Villingen-Schwenningen",
    highlights: [
      "People operations and organizational development within a global automotive enterprise",
    ],
  },
  {
    company: "Continental",
    role: "Industrial Clerk — International Business",
    period: "Sep 2012 — Jan 2015",
    location: "Villingen-Schwenningen",
    highlights: [
      "Vocational training with additional qualifications in Spanish and international business",
    ],
  },
];

export const education = [
  {
    institution: "Developer Akademie",
    degree: "Frontend Developer",
    period: "Sep 2024 — Mar 2025",
  },
  {
    institution: "Duale Hochschule Baden-Württemberg",
    degree: "Bachelor of Arts — International Business",
    period: "2015 — 2018",
  },
];

export const portfolioItems = [
  {
    title: "AI Learning Platform",
    description: "NEXT — API platform and AI-based digital learning services at Haufe Akademie.",
    status: "coming-soon" as const,
    tags: ["AI", "API Platform", "EdTech"],
  },
  {
    title: "Mobile & Cloud Archiving",
    description: "Automotive mobile applications and cloud archiving solutions at Continental.",
    status: "coming-soon" as const,
    tags: ["Mobile", "Cloud", "Automotive"],
  },
  {
    title: "TruckOn Platform",
    description: "Online booking platform for truck workshop services — business development & growth.",
    status: "coming-soon" as const,
    tags: ["Platform", "B2B", "Growth"],
  },
];
