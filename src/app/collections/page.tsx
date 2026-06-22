"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Star, Sparkles, Shield, Clock, Gem } from "lucide-react";
import "./collections.css";

const collections = [
  {
    name: "Men",
    description: "Bold compositions with depth, character and timeless elegance.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=900&q=80&auto=format&fit=crop",
    items: 24,
    featured: "Oud Imperial",
  },
  {
    name: "Women",
    description: "Delicate floral accords blended with modern sophistication.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1200&q=80&auto=format&fit=crop",
    items: 32,
    featured: "Rose Noir",
  },
  {
    name: "Unisex",
    description: "Balanced fragrances created beyond traditional boundaries.",
    image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=1200&q=80&auto=format&fit=crop",
    items: 18,
    featured: "Santal Mystique",
  },
  {
    name: "Oud",
    description: "Rare oriental woods with a rich and unforgettable presence.",
    image: "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=900&q=80&auto=format&fit=crop",
    items: 12,
    featured: "Oud Majestic",
  },
  {
    name: "Luxury",
    description: "Exclusive creations crafted from rare ingredients.",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=900&q=80&auto=format&fit=crop",
    items: 8,
    featured: "Amber Absolute",
  },
];

const bestSellers = [
  {
    name: "Oud Imperial",
    category: "Men",
    price: "$285",
    rating: 5,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=80&auto=format&fit=crop",
    tag: "Bestseller",
  },
  {
    name: "Rose Noir",
    category: "Women",
    price: "$245",
    rating: 5,
    image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=600&q=80&auto=format&fit=crop",
    tag: "Popular",
  },
  {
    name: "Santal Mystique",
    category: "Unisex",
    price: "$270",
    rating: 4,
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&q=80&auto=format&fit=crop",
    tag: "New",
  },
  {
    name: "Midnight Amber",
    category: "Luxury",
    price: "$450",
    rating: 5,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=80&auto=format&fit=crop",
    tag: "Limited",
  },
];

const features = [
  { icon: <Gem size={24} color="#C9A96E" />, title: "Rare Ingredients", description: "Sourced from the finest growers across Grasse, Mysore, and beyond." },
  { icon: <Shield size={24} color="#C9A96E" />, title: "Master Craftsmanship", description: "Each fragrance is composed by hand over months of careful refinement." },
  { icon: <Sparkles size={24} color="#C9A96E" />, title: "Signature Scents", description: "Unique compositions that become unmistakably yours over time." },
  { icon: <Clock size={24} color="#C9A96E" />, title: "Aged to Perfection", description: "Every batch rests for weeks before being bottled for maximum depth." },
];

const testimonials = [
  { quote: "The Oud collection is unlike anything I've ever worn. It lingers for days in the most beautiful way.", name: "Alexander V.", role: "Loyal Client" },
  { quote: "I had a Rose Noir composed for my wedding. Three years later, it still brings tears to my eyes.", name: "Isabella M.", role: "Bespoke Client" },
];

export default function Collections() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCollections = activeTab === "all"
    ? collections
    : collections.filter((c) => c.name.toLowerCase() === activeTab);

  return (
    <main className="collections-root">
      {/* Hero */}
      <section className="collections-hero">
        <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1400&q=80&auto=format&fit=crop" alt="NOIRÉ Collections" className="collections-hero-img" />
        <div className="collections-overlay" />
        <div className="collections-hero-content">
          <p className="collections-eyebrow">NOIRÉ COLLECTIONS</p>
          <h1 className="collections-hero-title">The Art of Fragrance</h1>
          <p className="collections-hero-text">Explore our signature perfume collections, each crafted with passion and precision.</p>
        </div>
        <div className="collections-scroll-hint">
          <span className="collections-scroll-line" />
          <span className="collections-scroll-text">Scroll to explore</span>
        </div>
      </section>

      {/* Features Bar */}
      <section className="collections-features-bar">
        <div className="collections-features-grid">
          {features.map((feature) => (
            <div key={feature.title} className="collections-feature-card">
              {feature.icon}
              <div>
                <h4 className="collections-feature-title">{feature.title}</h4>
                <p className="collections-feature-desc">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collections */}
      <section className="collections-section">
        <div className="collections-heading">
          <p className="collections-label">Explore</p>
          <h2 className="collections-title">Our Collections</h2>
          <div className="collections-line" />
          <p className="collections-subtitle">Discover the perfect fragrance for every moment and every mood</p>
        </div>

        <div className="collections-filter-tabs">
          {["all", "men", "women", "unisex", "oud", "luxury"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`collections-filter-tab ${activeTab === tab ? "collections-filter-tab-active" : ""}`}
            >
              {tab === "all" ? "All" : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="collections-grid">
          {filteredCollections.map((collection) => (
            <Link key={collection.name} href={`/shop?collection=${collection.name.toLowerCase()}`} className="collections-card">
              <img src={collection.image} alt={collection.name} className="collections-card-image" />
              <div className="collections-card-overlay" />
              <div className="collections-card-content">
                <span className="collections-card-badge">{collection.items} Fragrances</span>
                <h3 className="collections-card-title">{collection.name}</h3>
                <p className="collections-card-text">{collection.description}</p>
                <div className="collections-card-featured">
                  <span className="collections-featured-label">Featured:</span> {collection.featured}
                </div>
                <button className="collections-button">Explore Collection <ArrowRight size={14} /></button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="collections-bestseller-section">
        <div className="collections-heading">
          <p className="collections-label" style={{ color: "#C9A96E" }}>Most Loved</p>
          <h2 className="collections-title" style={{ color: "#FAF8F4" }}>Bestselling Fragrances</h2>
          <div className="collections-line" />
        </div>
        <div className="collections-bestseller-grid">
          {bestSellers.map((item) => (
            <Link key={item.name} href="/shop" className="collections-bestseller-card">
              <div className="collections-bestseller-image-wrap">
                <img src={item.image} alt={item.name} className="collections-bestseller-image" />
                <span className="collections-tag">{item.tag}</span>
              </div>
              <div className="collections-bestseller-info">
                <p className="collections-bestseller-category">{item.category}</p>
                <h3 className="collections-bestseller-name">{item.name}</h3>
                <div className="collections-rating-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} color={i < item.rating ? "#C9A96E" : "#4A4540"} fill={i < item.rating ? "#C9A96E" : "none"} />
                  ))}
                </div>
                <p className="collections-bestseller-price">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="collections-center-btn">
          <Link href="/shop" className="collections-btn-gold">View All Fragrances</Link>
        </div>
      </section>

      {/* Craft */}
      <section className="collections-craft-section">
        <div className="collections-craft-grid">
          <div className="collections-craft-content">
            <p className="collections-label">The Noiré Process</p>
            <h2 className="collections-craft-title">Crafted With<br /><span className="collections-craft-title-italic">Precision</span></h2>
            <p className="collections-craft-text">Every Noiré fragrance begins with a vision. Our master perfumers source the world's rarest ingredients, composing each scent over months of meticulous refinement. The result is a collection that transcends ordinary perfumery.</p>
            <Link href="/about" className="collections-text-link">Learn more about our craft <ArrowRight size={14} /></Link>
          </div>
          <div className="collections-craft-image">
            <img src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=700&q=80&auto=format&fit=crop" alt="Perfume crafting" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="collections-testimonial-section">
        <div className="collections-heading">
          <p className="collections-label" style={{ color: "#C9A96E" }}>Client Stories</p>
          <h2 className="collections-title" style={{ color: "#FAF8F4" }}>What They Say</h2>
          <div className="collections-line" />
        </div>
        <div className="collections-testimonial-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="collections-testimonial-card">
              <div className="collections-quote-mark">"</div>
              <p className="collections-testimonial-quote">{t.quote}</p>
              <div className="collections-testimonial-divider" />
              <p className="collections-testimonial-name">{t.name}</p>
              <p className="collections-testimonial-role">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="collections-cta-section">
        <div className="collections-cta-content">
          <h2 className="collections-cta-title">Find Your<br /><span className="collections-cta-title-italic">Signature Scent</span></h2>
          <p className="collections-cta-text">Not sure where to start? Our fragrance specialists will guide you to the perfect composition.</p>
          <Link href="/custom-perfume" className="collections-btn-gold">Create Your Scent</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="collections-footer">
        <div className="collections-footer-content">
          <span className="collections-footer-logo">NOIRÉ</span>
          <span className="collections-footer-text">Luxury fragrances · Since 2017</span>
        </div>
        <div className="collections-footer-links">
          <Link href="/shop" className="collections-footer-link">Shop</Link>
          <Link href="/about" className="collections-footer-link">About</Link>
          <Link href="/contact" className="collections-footer-link">Contact</Link>
        </div>
      </footer>
    </main>
  );
}