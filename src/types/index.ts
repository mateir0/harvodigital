/* ---------------------------------------------------------
   HARVO DIGITAL — Shared Type Definitions
   --------------------------------------------------------- */

/** Navigation link item */
export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

/** Service card data */
export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  slug: string;
}

/** Portfolio / case study project */
export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  thumbnail: string;
  slug: string;
  featured?: boolean;
}

/** Client testimonial */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  quote: string;
  rating?: number;
}

/** Blog post (future) */
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  slug: string;
  coverImage?: string;
}

/** Generic API response wrapper */
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

/** Site metadata / SEO */
export interface SeoMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}
