import type { Metadata } from "next";

import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Ice apple and palmyra sprout offerings from Araneri.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <div
      className="theme-page space-y-12 bg-[var(--bg-primary)] text-[var(--text-primary)]"
      data-theme="products"
    >
      <ScrollReveal className="space-y-8">
        <SectionHeader
          eyebrow="Ice Apple & Palmyra Sprout"
          title="Products that honor the palm"
          description="A curated constellation of ritual objects, tastings, and community gatherings."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
