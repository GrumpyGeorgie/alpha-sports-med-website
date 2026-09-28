// Types for condition page data (see README.md in this folder) and the conditions hub.

export interface Link { label: string; href: string; external?: boolean }
export interface Faq { question: string; answer: string }
export interface Step { title: string; copy: string }

export interface ConditionPage {
  seo: { title: string; description: string };
  breadcrumb: string;
  hero: { eyebrow: string; heading: string; subheading: string; trust?: string[] };
  urgent: { eyebrow: string; heading: string; paragraphs?: string[]; copy?: string; linkLabel?: string; linkUrl?: string };
  pattern?: { ghost?: string; eyebrow: string; heading: string; intro?: string; items: { title: string; kicker?: string; copy: string; link?: Link }[] };
  explainer?: { ghost?: string; eyebrow: string; heading: string; paragraphs: string[]; link?: Link };
  focus?: { eyebrow: string; heading: string; paragraphs: string[]; link?: Link; caption: string; image?: string; imageAlt?: string };
  process: { eyebrow: string; heading: string; steps: Step[] };
  note?: { eyebrow: string; heading: string; paragraphs: string[]; icon?: string };
  servicesHeading?: string;
  services: { title: string; copy: string; href: string; icon: string }[];
  related: { title: string; href: string }[];
  locationsEyebrow: string;
  faqHeading: string;
  faqs: Faq[];
  closing: { eyebrow: string; heading: string; copy: string };
}

export interface HubItem { title: string; href: string; copy: string; children?: { title: string; href: string }[] }

export interface ConditionsHub {
  seo: { title: string; description: string };
  hero: { eyebrow: string; heading: string; subheading: string; trust: string[] };
  unsure: { eyebrow: string; heading: string; paragraphs: string[] };
  groups: { id: string; title: string; items: HubItem[] }[];
  approach: { eyebrow: string; heading: string; steps: Step[] };
  services: { heading: string; copy: string; items: { title: string; href: string; icon: string }[] };
  faqs: Faq[];
  closing: { eyebrow: string; heading: string; copy: string };
}
