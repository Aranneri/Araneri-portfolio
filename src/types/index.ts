export interface NavLink {
  readonly label: string;
  readonly href: "/" | `/${string}`;
}

export interface MediaImage {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

export interface Service {
  readonly title: string;
  readonly description: string;
  readonly image: MediaImage;
  readonly href: "/services" | `/${string}`;
  readonly externalHref?: string;
}

export interface Product {
  readonly title: string;
  readonly description: string;
  readonly image: MediaImage;
  readonly href: "/products" | `/${string}`;
  readonly highlight: string;
}

export interface Launch {
  readonly title: string;
  readonly description: string;
  readonly image: MediaImage;
  readonly date: string;
}

export interface BlogPost {
  readonly title: string;
  readonly excerpt: string;
  readonly category: string;
  readonly date: string;
  readonly image: MediaImage;
}

export interface TeamMember {
  readonly name: string;
  readonly role: string;
  readonly description: string;
  readonly image: MediaImage;
  readonly portfolioUrl?: string;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface TimelineItem {
  readonly title: string;
  readonly description: string;
  readonly year: string;
}

export interface Initiative {
  readonly title: string;
  readonly description: string;
}

export interface SiteMeta {
  readonly name: string;
  readonly description: string;
  readonly url: string;
}
