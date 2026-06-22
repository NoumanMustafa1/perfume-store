"use client";

import Head from "next/head";
import { CSSProperties, useState } from "react";
import Link from "next/link";
import { ArrowRight, Star, Sparkles, Shield, Clock, Gem } from "lucide-react";

const collections = [
  {
    name: "Men",
    description: "Bold compositions with depth, character and timeless elegance.",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=900&q=80&auto=format&fit=crop",
    items: 24,
    featured: "Oud Imperial",
  },
  {
    name: "Women",
    description: "Delicate floral accords blended with modern sophistication.",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1200&q=80&auto=format&fit=crop",
    items: 32,
    featured: "Rose Noir",
  },
  {
    name: "Unisex",
    description: "Balanced fragrances created beyond traditional boundaries.",
    image:
      "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=1200&q=80&auto=format&fit=crop",
    items: 18,
    featured: "Santal Mystique",
  },
  {
    name: "Oud",
    description: "Rare oriental woods with a rich and unforgettable presence.",
    image:
      "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=900&q=80&auto=format&fit=crop",
    items: 12,
    featured: "Oud Majestic",
  },
  {
    name: "Luxury",
    description: "Exclusive creations crafted from rare ingredients.",
    image:
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=900&q=80&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=80&auto=format&fit=crop",
    tag: "Bestseller",
  },
  {
    name: "Rose Noir",
    category: "Women",
    price: "$245",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=600&q=80&auto=format&fit=crop",
    tag: "Popular",
  },
  {
    name: "Santal Mystique",
    category: "Unisex",
    price: "$270",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&q=80&auto=format&fit=crop",
    tag: "New",
  },
  {
    name: "Midnight Amber",
    category: "Luxury",
    price: "$450",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=80&auto=format&fit=crop",
    tag: "Limited",
  },
];

const features = [
  {
    icon: <Gem size={24} color="#C9A96E" />,
    title: "Rare Ingredients",
    description:
      "Sourced from the finest growers across Grasse, Mysore, and beyond.",
  },
  {
    icon: <Shield size={24} color="#C9A96E" />,
    title: "Master Craftsmanship",
    description:
      "Each fragrance is composed by hand over months of careful refinement.",
  },
  {
    icon: <Sparkles size={24} color="#C9A96E" />,
    title: "Signature Scents",
    description:
      "Unique compositions that become unmistakably yours over time.",
  },
  {
    icon: <Clock size={24} color="#C9A96E" />,
    title: "Aged to Perfection",
    description:
      "Every batch rests for weeks before being bottled for maximum depth.",
  },
];

const testimonials = [
  {
    quote:
      "The Oud collection is unlike anything I've ever worn. It lingers for days in the most beautiful way.",
    name: "Alexander V.",
    role: "Loyal Client",
  },
  {
    quote:
      "I had a Rose Noir composed for my wedding. Three years later, it still brings tears to my eyes.",
    name: "Isabella M.",
    role: "Bespoke Client",
  },
];

export default function Collections() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCollections =
    activeTab === "all"
      ? collections
      : collections.filter((c) => c.name.toLowerCase() === activeTab);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Cormorant+Garamond:wght@300;400&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main style={styles.root}>
        {/* ============ HERO ============ */}
        <section style={styles.hero}>
          <img
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1400&q=80&auto=format&fit=crop"
            alt="NOIRÉ Collections"
            style={styles.heroImg}
          />
          <div style={styles.overlay} />

          <div style={styles.heroContent}>
            <p style={styles.eyebrow}>NOIRÉ COLLECTIONS</p>
            <h1 style={styles.heroTitle}>The Art of Fragrance</h1>
            <p style={styles.heroText}>
              Explore our signature perfume collections, each crafted with
              passion and precision.
            </p>
          </div>

          <div style={styles.scrollHint}>
            <span style={styles.scrollLine} />
            <span style={styles.scrollText}>Scroll to explore</span>
          </div>
        </section>

        {/* ============ FEATURES BAR ============ */}
        <section style={styles.featuresBar}>
          <div style={styles.featuresGrid}>
            {features.map((feature) => (
              <div key={feature.title} style={styles.featureCard}>
                {feature.icon}
                <div>
                  <h4 style={styles.featureTitle}>{feature.title}</h4>
                  <p style={styles.featureDesc}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ COLLECTIONS SECTION ============ */}
        <section style={styles.section}>
          <div style={styles.heading}>
            <p style={styles.label}>Explore</p>
            <h2 style={styles.title}>Our Collections</h2>
            <div style={styles.line} />
            <p style={styles.subtitle}>
              Discover the perfect fragrance for every moment and every mood
            </p>
          </div>

          {/* Collection Filters */}
          <div style={styles.filterTabs}>
            {["all", "men", "women", "unisex", "oud", "luxury"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  ...styles.filterTab,
                  ...(activeTab === tab ? styles.filterTabActive : {}),
                }}
              >
                {tab === "all" ? "All" : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div style={styles.grid}>
            {filteredCollections.map((collection) => (
              <Link
                key={collection.name}
                href={`/shop?collection=${collection.name.toLowerCase()}`}
                style={styles.card}
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  style={styles.cardImage}
                />
                <div style={styles.cardOverlay} />

                <div style={styles.cardContent}>
                  <span style={styles.cardBadge}>
                    {collection.items} Fragrances
                  </span>
                  <h3 style={styles.cardTitle}>{collection.name}</h3>
                  <p style={styles.cardText}>{collection.description}</p>
                  <div style={styles.cardFeatured}>
                    <span style={styles.featuredLabel}>Featured:</span>{" "}
                    {collection.featured}
                  </div>
                  <button style={styles.button}>
                    Explore Collection <ArrowRight size={14} />
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ============ BEST SELLERS ============ */}
        <section style={styles.bestSellerSection}>
          <div style={styles.heading}>
            <p style={{ ...styles.label, color: "#C9A96E" }}>Most Loved</p>
            <h2 style={{ ...styles.title, color: "#FAF8F4" }}>
              Bestselling Fragrances
            </h2>
            <div style={styles.line} />
          </div>

          <div style={styles.bestSellerGrid}>
            {bestSellers.map((item) => (
              <Link
                key={item.name}
                href="/shop"
                style={styles.bestSellerCard}
              >
                <div style={styles.bestSellerImageWrap}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={styles.bestSellerImage}
                  />
                  <span style={styles.tag}>{item.tag}</span>
                </div>
                <div style={styles.bestSellerInfo}>
                  <p style={styles.bestSellerCategory}>{item.category}</p>
                  <h3 style={styles.bestSellerName}>{item.name}</h3>
                  <div style={styles.ratingRow}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        color={i < item.rating ? "#C9A96E" : "#4A4540"}
                        fill={i < item.rating ? "#C9A96E" : "none"}
                      />
                    ))}
                  </div>
                  <p style={styles.bestSellerPrice}>{item.price}</p>
                </div>
              </Link>
            ))}
          </div>

          <div style={styles.centerBtn}>
            <Link href="/shop" style={styles.btnGold}>
              View All Fragrances
            </Link>
          </div>
        </section>

        {/* ============ CRAFT SECTION ============ */}
        <section style={styles.craftSection}>
          <div style={styles.craftGrid}>
            <div style={styles.craftContent}>
              <p style={styles.label}>The Noiré Process</p>
              <h2 style={styles.craftTitle}>
                Crafted With
                <br />
                <span style={styles.craftTitleItalic}>Precision</span>
              </h2>
              <p style={styles.craftText}>
                Every Noiré fragrance begins with a vision. Our master
                perfumers source the world's rarest ingredients, composing
                each scent over months of meticulous refinement. The result
                is a collection that transcends ordinary perfumery.
              </p>
              <Link href="/about" style={styles.textLink}>
                Learn more about our craft <ArrowRight size={14} />
              </Link>
            </div>

            <div style={styles.craftImage}>
              <img
                src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=700&q=80&auto=format&fit=crop"
                alt="Perfume crafting"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIALS ============ */}
        <section style={styles.testimonialSection}>
          <div style={styles.heading}>
            <p style={{ ...styles.label, color: "#C9A96E" }}>Client Stories</p>
            <h2 style={{ ...styles.title, color: "#FAF8F4" }}>
              What They Say
            </h2>
            <div style={styles.line} />
          </div>

          <div style={styles.testimonialGrid}>
            {testimonials.map((t) => (
              <div key={t.name} style={styles.testimonialCard}>
                <div style={styles.quoteMark}>"</div>
                <p style={styles.testimonialQuote}>{t.quote}</p>
                <div style={styles.testimonialDivider} />
                <p style={styles.testimonialName}>{t.name}</p>
                <p style={styles.testimonialRole}>{t.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section style={styles.ctaSection}>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>
              Find Your
              <br />
              <span style={styles.ctaTitleItalic}>Signature Scent</span>
            </h2>
            <p style={styles.ctaText}>
              Not sure where to start? Our fragrance specialists will guide
              you to the perfect composition.
            </p>
            <Link href="/custom-perfume" style={styles.btnGold}>
              Create Your Scent
            </Link>
          </div>
        </section>

        {/* ============ FOOTER ============ */}
        <footer style={styles.footer}>
          <div style={styles.footerContent}>
            <span style={styles.footerLogo}>NOIRÉ</span>
            <span style={styles.footerText}>
              Luxury fragrances · Since 2017
            </span>
          </div>
          <div style={styles.footerLinks}>
            <Link href="/shop" style={styles.footerLink}>
              Shop
            </Link>
            <Link href="/about" style={styles.footerLink}>
              About
            </Link>
            <Link href="/contact" style={styles.footerLink}>
              Contact
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
}

const styles: Record<string, CSSProperties> = {
  root: {
    background: "#FAF8F4",
    minHeight: "100vh",
    fontFamily: "'Jost', sans-serif",
    color: "#1C1A17",
  },

  /* ========== HERO ========== */
  hero: {
    height: "75vh",
    minHeight: 500,
    position: "relative",
    overflow: "hidden",
  },

  heroImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, rgba(0,0,0,.3) 0%, rgba(250,248,244,.95) 100%)",
  },

  heroContent: {
    position: "absolute",
    bottom: 80,
    left: 0,
    right: 0,
    textAlign: "center" as const,
    padding: "0 2rem",
  },

  scrollHint: {
    position: "absolute",
    bottom: 30,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "0.5rem",
  },

  scrollLine: {
    width: 1,
    height: 30,
    background: "linear-gradient(to bottom, #C9A96E, transparent)",
  },

  scrollText: {
    fontSize: ".6rem",
    letterSpacing: ".25em",
    textTransform: "uppercase" as const,
    color: "#9C8B6E",
  },

  eyebrow: {
    fontSize: ".7rem",
    letterSpacing: ".3em",
    textTransform: "uppercase" as const,
    color: "#C9A96E",
  },

  heroTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "3.5rem",
    fontStyle: "italic",
    fontWeight: 400,
    margin: "15px 0",
    color: "#1C1A17",
  },

  heroText: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.3rem",
    color: "#4A4540",
    maxWidth: 500,
    margin: "0 auto",
  },

  /* ========== FEATURES BAR ========== */
  featuresBar: {
    padding: "3rem 2.5rem",
    borderBottom: "1px solid rgba(0,0,0,.06)",
  },

  featuresGrid: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "2rem",
  },

  featureCard: {
    display: "flex",
    gap: "1rem",
    alignItems: "flex-start",
  },

  featureTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1rem",
    fontWeight: 400,
    margin: "0 0 .3rem",
  },

  featureDesc: {
    fontSize: ".78rem",
    color: "#6B6660",
    lineHeight: 1.5,
    margin: 0,
  },

  /* ========== COLLECTIONS ========== */
  section: {
    padding: "5rem 2.5rem",
    maxWidth: 1400,
    margin: "0 auto",
  },

  heading: {
    textAlign: "center" as const,
    marginBottom: "3rem",
  },

  label: {
    fontSize: ".7rem",
    letterSpacing: ".3em",
    textTransform: "uppercase" as const,
    color: "#9C8B6E",
  },

  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "2.4rem",
    fontWeight: 400,
    fontStyle: "italic",
    margin: "0.5rem 0",
  },

  subtitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.1rem",
    color: "#4A4540",
    maxWidth: 500,
    margin: "1rem auto 0",
  },

  line: {
    width: 50,
    height: "1px",
    background: "#C9A96E",
    margin: "1.5rem auto",
  },

  filterTabs: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    marginBottom: "3rem",
    flexWrap: "wrap" as const,
  },

  filterTab: {
    padding: "0.6rem 1.5rem",
    background: "transparent",
    border: "1px solid rgba(0,0,0,.1)",
    color: "#4A4540",
    fontSize: ".72rem",
    letterSpacing: ".15em",
    textTransform: "uppercase" as const,
    cursor: "pointer",
    fontFamily: "'Jost', sans-serif",
  },

  filterTabActive: {
    background: "#1C1A17",
    color: "#FAF8F4",
    borderColor: "#1C1A17",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2rem",
  },

  card: {
    height: 480,
    position: "relative",
    overflow: "hidden",
    textDecoration: "none",
    display: "block",
    cursor: "pointer",
  },

  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.7s ease",
  },

  cardOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to top, rgba(0,0,0,.8) 0%, rgba(0,0,0,.2) 40%, transparent 100%)",
  },

  cardContent: {
    position: "absolute",
    bottom: 30,
    left: 30,
    right: 30,
    color: "#FAF8F4",
    textAlign: "center" as const,
  },

  cardBadge: {
    display: "inline-block",
    fontSize: ".6rem",
    letterSpacing: ".2em",
    textTransform: "uppercase" as const,
    background: "rgba(201,169,110,.2)",
    border: "1px solid rgba(201,169,110,.3)",
    color: "#C9A96E",
    padding: "0.3rem 0.8rem",
    marginBottom: "1rem",
  },

  cardTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "2rem",
    fontWeight: 400,
    fontStyle: "italic",
    margin: "0 0 0.5rem",
  },

  cardText: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.05rem",
    lineHeight: 1.5,
    marginBottom: "0.8rem",
    opacity: 0.9,
  },

  cardFeatured: {
    fontSize: ".7rem",
    color: "#C9A96E",
    marginBottom: "1rem",
    letterSpacing: ".1em",
  },

  featuredLabel: {
    color: "#B0ABA4",
  },

  button: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "10px 25px",
    background: "transparent",
    border: "1px solid #C9A96E",
    color: "#FAF8F4",
    letterSpacing: ".15em",
    fontSize: ".7rem",
    textTransform: "uppercase" as const,
    cursor: "pointer",
    fontFamily: "'Jost', sans-serif",
  },

  /* ========== BEST SELLERS ========== */
  bestSellerSection: {
    background: "#1C1A17",
    padding: "5rem 2.5rem",
  },

  bestSellerGrid: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1.5rem",
  },

  bestSellerCard: {
    textDecoration: "none",
    color: "#FAF8F4",
    display: "block",
  },

  bestSellerImageWrap: {
    position: "relative",
    height: 280,
    overflow: "hidden",
    marginBottom: "1rem",
  },

  bestSellerImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  tag: {
    position: "absolute",
    top: 12,
    left: 12,
    fontSize: ".6rem",
    letterSpacing: ".15em",
    textTransform: "uppercase" as const,
    background: "#C9A96E",
    color: "#1C1A17",
    padding: "0.2rem 0.6rem",
    fontWeight: 500,
  },

  bestSellerInfo: {
    textAlign: "center" as const,
  },

  bestSellerCategory: {
    fontSize: ".65rem",
    letterSpacing: ".15em",
    textTransform: "uppercase" as const,
    color: "#6B6660",
    margin: "0 0 0.3rem",
  },

  bestSellerName: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.15rem",
    fontWeight: 400,
    margin: "0 0 0.5rem",
  },

  ratingRow: {
    display: "flex",
    justifyContent: "center",
    gap: "0.15rem",
    marginBottom: "0.5rem",
  },

  bestSellerPrice: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.1rem",
    color: "#C9A96E",
    margin: 0,
  },

  centerBtn: {
    textAlign: "center" as const,
    marginTop: "3rem",
  },

  btnGold: {
    display: "inline-block",
    background: "#C9A96E",
    color: "#1C1A17",
    padding: "0.9rem 2.2rem",
    fontSize: ".72rem",
    letterSpacing: ".2em",
    textTransform: "uppercase" as const,
    textDecoration: "none",
    fontWeight: 500,
    fontFamily: "'Jost', sans-serif",
  },

  /* ========== CRAFT ========== */
  craftSection: {
    padding: "5rem 2.5rem",
    background: "#FAF8F4",
  },

  craftGrid: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
    alignItems: "center",
  },

  craftContent: {
    maxWidth: 480,
  },

  craftTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "2.4rem",
    fontWeight: 400,
    lineHeight: 1.2,
    margin: "0.5rem 0 1.5rem",
  },

  craftTitleItalic: {
    fontStyle: "italic",
    color: "#C9A96E",
  },

  craftText: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.15rem",
    lineHeight: 1.7,
    color: "#4A4540",
    marginBottom: "1.5rem",
  },

  textLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "#1C1A17",
    textDecoration: "none",
    fontSize: ".75rem",
    letterSpacing: ".15em",
    textTransform: "uppercase" as const,
    borderBottom: "1px solid #1C1A17",
    paddingBottom: "4px",
  },

  craftImage: {
    height: 450,
    overflow: "hidden",
  },

  /* ========== TESTIMONIALS ========== */
  testimonialSection: {
    background: "#11100E",
    padding: "5rem 2.5rem",
  },

  testimonialGrid: {
    maxWidth: 900,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "2rem",
  },

  testimonialCard: {
    background: "rgba(255,255,255,.03)",
    border: "1px solid rgba(255,255,255,.06)",
    padding: "2.5rem",
    textAlign: "center" as const,
  },

  quoteMark: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "4rem",
    color: "#C9A96E",
    lineHeight: 1,
    marginBottom: "1rem",
    fontStyle: "italic",
  },

  testimonialQuote: {
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "1.1rem",
    lineHeight: 1.6,
    color: "#D8D2C8",
    margin: "0 0 1.5rem",
  },

  testimonialDivider: {
    width: 30,
    height: 1,
    background: "#C9A96E",
    margin: "0 auto 1rem",
  },

  testimonialName: {
    fontSize: ".85rem",
    color: "#FAF8F4",
    margin: 0,
    letterSpacing: ".05em",
  },

  testimonialRole: {
    fontSize: ".7rem",
    color: "#6B6660",
    margin: ".3rem 0 0",
    letterSpacing: ".1em",
    textTransform: "uppercase" as const,
  },

  /* ========== CTA ========== */
  ctaSection: {
    padding: "6rem 2.5rem",
    textAlign: "center" as const,
    background:
      "linear-gradient(to bottom, #FAF8F4, rgba(201,169,110,.05))",
  },

  ctaContent: {
    maxWidth: 600,
    margin: "0 auto",
  },

  ctaTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "2.8rem",
    fontWeight: 400,
    lineHeight: 1.2,
    margin: "0 0 1.5rem",
  },

  ctaTitleItalic: {
    fontStyle: "italic",
    color: "#C9A96E",
  },

  ctaText: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.2rem",
    color: "#4A4540",
    lineHeight: 1.6,
    marginBottom: "2rem",
  },

  /* ========== FOOTER ========== */
  footer: {
    background: "#1C1A17",
    padding: "2rem 2.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#FAF8F4",
    borderTop: "1px solid rgba(255,255,255,.06)",
  },

  footerContent: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
  },

  footerLogo: {
    fontFamily: "'Playfair Display', serif",
    fontStyle: "italic",
    letterSpacing: ".25em",
    fontSize: "1.1rem",
  },

  footerText: {
    fontSize: ".7rem",
    letterSpacing: ".15em",
    textTransform: "uppercase" as const,
    color: "#6B6660",
  },

  footerLinks: {
    display: "flex",
    gap: "2rem",
  },

  footerLink: {
    color: "#6B6660",
    textDecoration: "none",
    fontSize: ".72rem",
    letterSpacing: ".12em",
    textTransform: "uppercase" as const,
  },

  /* ========== RESPONSIVE ========== */
  "@media (maxWidth: 768px)": {
    featuresGrid: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    grid: {
      gridTemplateColumns: "1fr",
    },
    bestSellerGrid: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    craftGrid: {
      gridTemplateColumns: "1fr",
    },
    testimonialGrid: {
      gridTemplateColumns: "1fr",
    },
  },
};