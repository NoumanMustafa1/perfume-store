"use client";

import Head from "next/head";
import Link from "next/link";
import { CSSProperties, useEffect, useState } from "react";
import { ArrowUpRight, Quote } from "lucide-react";


/* ----------------------------- DATA ----------------------------- */

const NOTES = [
  "BERGAMOT", "OUD", "ROSE DE MAI", "AMBERGRIS", "SAFFRON",
  "VETIVER", "TONKA BEAN", "JASMINE", "SANDALWOOD", "BLACK PEPPER",
];

const FEATURED = [
  {
    name: "Oud Imperial",
    note: "Woody · Intense",
    price: "$285",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "Rose Noir",
    note: "Floral · Velvet",
    price: "$245",
    image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "Midnight Amber",
    note: "Oriental · Warm",
    price: "$260",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "Santal Mystique",
    note: "Woody · Creamy",
    price: "$270",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=900&q=80&auto=format&fit=crop",
  },
];

const CRAFT_STEPS = [
  {
    n: "01",
    title: "Sourced",
    text: "Rare oud, ambergris, and botanical absolutes gathered from growers across Grasse, Mysore, and the Hadhramaut valley.",
    image: "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=900&q=80&auto=format&fit=crop",
  },
  {
    n: "02",
    title: "Composed",
    text: "Master perfumers layer top, heart, and base notes over months, balancing each accord by hand and by memory.",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=900&q=80&auto=format&fit=crop",
  },
  {
    n: "03",
    title: "Aged & Bottled",
    text: "Every batch rests in dark glass for a minimum of six weeks before it is hand-poured into its final vessel.",
    image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=900&q=80&auto=format&fit=crop",
  },
];

const TESTIMONIALS = [
  {
    quote: "It doesn't smell like a perfume. It smells like a memory I haven't had yet.",
    name: "Élodie M.",
    role: "Paris, France",
  },
  {
    quote: "Oud Imperial lasted through a sixteen hour flight and still turned heads at arrival.",
    name: "James R.",
    role: "Dubai, UAE",
  },
  {
    quote: "I had a scent composed for my wedding. Five years later, it still undoes me.",
    name: "Hana K.",
    role: "Lahore, Pakistan",
  },
];

const PRESS = ["Vogue", "Monocle", "Wallpaper*", "Harper's Bazaar", "GQ"];


/* ----------------------------- PAGE ----------------------------- */

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 860);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style jsx global>{`
        @keyframes noire-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .noire-featured-card:hover img {
          transform: scale(1.06);
        }
        @media (prefers-reduced-motion: reduce) {
          .noire-marquee-track {
            animation: none !important;
          }
        }
      `}</style>

      <main style={s.root}>

        {/* ============ HERO ============ */}
        <section style={s.hero}>
          <img
            src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1800&q=80&auto=format&fit=crop"
            alt="Maison Noiré fragrance"
            style={s.heroImg}
          />
          <div style={s.heroOverlay} />

          <div style={s.heroContent}>
            <p style={s.eyebrowLight}>Maison Noiré · Paris</p>

            <h1 style={{ ...s.heroTitle, fontSize: isMobile ? "2.8rem" : "5rem" }}>
              The Art Of
              <br />
              <span style={s.heroTitleItalic}>Fragrance</span>
            </h1>

            <p style={s.heroSub}>
              Handcrafted perfumes composed from rare ingredients,
              timeless memory, and emotion.
            </p>

            <div style={s.heroActions}>
              <Link href="/shop" style={s.btnGold}>
                Explore Collection
              </Link>
              <Link href="/custom-perfume" style={s.btnGhost}>
                Create Your Scent
              </Link>
            </div>
          </div>

          <div style={s.heroScrollHint}>
            <span style={s.heroScrollLine} />
            <span style={s.heroScrollText}>Scroll</span>
          </div>
        </section>


        {/* ============ NOTES MARQUEE (signature element) ============ */}
        <section style={s.marqueeSection} aria-label="Olfactory notes">
          <div style={s.marqueeTrack} className="noire-marquee-track">
            {[...NOTES, ...NOTES].map((note, i) => (
              <span key={i} style={s.marqueeItem}>
                {note}
                <span style={s.marqueeDot}>·</span>
              </span>
            ))}
          </div>
        </section>


        {/* ============ INTRODUCTION ============ */}
        <section style={{ ...s.intro, padding: isMobile ? "4rem 1.5rem" : "6.5rem 2.5rem" }}>
          <div style={{ ...s.introGrid, gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr" }}>
            <div style={s.introText}>
              <p style={s.eyebrowDark}>The Noiré Experience</p>
              <h2 style={s.introTitle}>
                A Fragrance
                <br />
                Beyond Ordinary
              </h2>
              <p style={s.introBody}>
                Every Noiré perfume is composed like a piece of art —
                rare botanicals, master craftsmanship, and modern
                elegance combined to create a signature that is
                unmistakably yours.
              </p>
              <Link href="/about" style={s.textLink}>
                Our Story <ArrowUpRight size={14} />
              </Link>
            </div>

            <div style={{ ...s.introImages, height: isMobile ? 340 : 480, marginTop: isMobile ? "1rem" : 0 }}>
              <img
                src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=700&q=80&auto=format&fit=crop"
                alt="Perfume composition"
                style={s.introImgMain}
              />
              <img
                src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&q=80&auto=format&fit=crop"
                alt="Fragrance ingredients"
                style={s.introImgSmall}
              />
            </div>
          </div>
        </section>


        {/* ============ FEATURED COLLECTION ============ */}
        <section style={{ ...s.featured, padding: isMobile ? "4rem 0" : "6.5rem 0" }}>
          <div style={{ ...s.featuredInner, padding: isMobile ? "0 1.5rem" : "0 2.5rem" }}>
            <div style={s.featuredHead}>
              <div>
                <p style={s.eyebrowLight}>Signature Pieces</p>
                <h2 style={s.featuredTitle}>Featured Fragrances</h2>
              </div>
              <Link href="/shop" style={s.viewAllLink}>
                View All <ArrowUpRight size={14} />
              </Link>
            </div>

            <div style={{ ...s.featuredGrid, gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)" }}>
              {FEATURED.map((item) => (
                <Link
                  key={item.name}
                  href="/shop"
                  style={s.featuredCard}
                  className="noire-featured-card"
                >
                  <div style={{ ...s.featuredImgWrap, height: isMobile ? 220 : 380 }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={s.featuredImg}
                    />
                  </div>
                  <div style={s.featuredInfo}>
                    <h3 style={s.featuredName}>{item.name}</h3>
                    <p style={s.featuredNote}>{item.note}</p>
                    <p style={s.featuredPrice}>{item.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>


        {/* ============ BESPOKE / CUSTOM PERFUME ============ */}
        <section style={s.bespoke}>
          <img
            src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6a?w=1600&q=80&auto=format&fit=crop"
            alt="Custom perfume creation"
            style={s.bespokeImg}
          />
          <div style={s.bespokeOverlay} />

          <div style={s.bespokeContent}>
            <p style={s.eyebrowLight}>Bespoke Perfume</p>
            <h2 style={{ ...s.bespokeTitle, fontSize: isMobile ? "2.1rem" : "2.9rem" }}>
              Create A Scent
              <br />
              That Is Only Yours
            </h2>
            <p style={s.bespokeText}>
              Choose your notes, define your character, and create a
              fragrance crafted entirely around your identity.
            </p>
            <Link href="/custom-perfume" style={s.btnGold}>
              Start Creation
            </Link>
          </div>
        </section>


        {/* ============ CRAFTSMANSHIP ============ */}
        <section style={{ ...s.craft, padding: isMobile ? "4rem 1.5rem" : "6.5rem 2.5rem" }}>
          <div style={s.craftHead}>
            <p style={s.eyebrowDark}>From Field To Flacon</p>
            <h2 style={s.craftTitle}>The Making Of A Noiré</h2>
          </div>

          <div style={{ ...s.craftGrid, gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)" }}>
            {CRAFT_STEPS.map((step) => (
              <div key={step.n} style={s.craftCard}>
                <div style={s.craftImgWrap}>
                  <img
                    src={step.image}
                    alt={step.title}
                    style={s.craftImg}
                  />
                  <span style={s.craftNumber}>{step.n}</span>
                </div>
                <h3 style={s.craftCardTitle}>{step.title}</h3>
                <p style={s.craftCardText}>{step.text}</p>
              </div>
            ))}
          </div>
        </section>


        {/* ============ EDITORIAL IMAGE BAND ============ */}
        <section style={{ ...s.editorial, gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr" }}>
          <img
            src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=700&q=80&auto=format&fit=crop"
            alt="Editorial fragrance shot"
            style={{ ...s.editorialImgTall, height: isMobile ? 320 : 460 }}
          />
          <img
            src="https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=700&q=80&auto=format&fit=crop"
            alt="Fragrance bottle detail"
            style={{ ...s.editorialImgShort, height: isMobile ? 320 : 460 }}
          />
          <img
            src="https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=700&q=80&auto=format&fit=crop"
            alt="Perfume ingredients detail"
            style={{ ...s.editorialImgTall, height: isMobile ? 320 : 460 }}
          />
        </section>


        {/* ============ TESTIMONIALS ============ */}
        <section style={{ ...s.testimonials, padding: isMobile ? "4rem 1.5rem" : "6.5rem 2.5rem" }}>
          <p style={s.eyebrowLight}>In Their Words</p>
          <h2 style={s.testimonialsTitle}>Worn, Remembered, Loved</h2>

          <div style={{ ...s.testimonialsGrid, gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)" }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} style={s.testimonialCard}>
                <Quote size={20} color="#C9A96E" />
                <p style={s.testimonialQuote}>{t.quote}</p>
                <div style={s.testimonialDivider} />
                <p style={s.testimonialName}>{t.name}</p>
                <p style={s.testimonialRole}>{t.role}</p>
              </div>
            ))}
          </div>
        </section>


        {/* ============ NEWSLETTER ============ */}
        <section style={{ ...s.newsletter, padding: isMobile ? "4rem 1.5rem" : "6.5rem 2.5rem" }}>
          <div style={s.newsletterInner}>
            <p style={s.eyebrowDark}>Private Collection</p>
            <h2 style={s.newsletterTitle}>
              Be First To Discover
              <br />
              New Compositions
            </h2>
            <p style={s.newsletterText}>
              Join our private list for early access to limited
              releases, member-only pricing, and invitations to
              Maison Noiré events.
            </p>

            <form style={{ ...s.newsletterForm, flexDirection: isMobile ? "column" : "row" }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={s.newsletterInput}
              />
              <button type="submit" style={s.newsletterBtn}>
                Subscribe
              </button>
            </form>
          </div>
        </section>


        {/* ============ PRESS ============ */}
        <section style={s.press}>
          <p style={s.pressLabel}>As Featured In</p>
          <div style={s.pressRow}>
            {PRESS.map((name) => (
              <span key={name} style={s.pressName}>
                {name}
              </span>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}


/* ----------------------------- STYLES ----------------------------- */

const s: Record<string, CSSProperties> = {

  root: {
    background: "#0A0A09",
    color: "#FAF8F4",
    fontFamily: "'Jost', sans-serif",
    overflowX: "hidden",
  },

  /* ---------- HERO ---------- */

  hero: {
    position: "relative",
    height: "100vh",
    minHeight: 640,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  heroImg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.55,
  },

  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, rgba(10,10,9,.35) 0%, rgba(10,10,9,.55) 55%, #0A0A09 100%)",
  },

  heroContent: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    padding: "0 1.5rem",
    maxWidth: 900,
  },

  eyebrowLight: {
    fontSize: ".72rem",
    letterSpacing: ".4em",
    textTransform: "uppercase",
    color: "#C9A96E",
    marginBottom: "1.5rem",
  },

  eyebrowDark: {
    fontSize: ".72rem",
    letterSpacing: ".4em",
    textTransform: "uppercase",
    color: "#9C8B6E",
    marginBottom: "1.2rem",
  },

  heroTitle: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 400,
    fontSize: "5rem",
    lineHeight: 1.08,
    margin: 0,
  },

  heroTitleItalic: {
    fontStyle: "italic",
    color: "#C9A96E",
  },

  heroSub: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.35rem",
    color: "#D8D2C8",
    maxWidth: 560,
    margin: "1.8rem auto 0",
    lineHeight: 1.6,
  },

  heroActions: {
    display: "flex",
    justifyContent: "center",
    gap: "1.2rem",
    marginTop: "2.6rem",
    flexWrap: "wrap",
  },

  btnGold: {
    background: "#C9A96E",
    color: "#0A0A09",
    padding: "1rem 2.6rem",
    fontSize: ".78rem",
    letterSpacing: ".2em",
    textTransform: "uppercase",
    textDecoration: "none",
    fontWeight: 500,
  },

  btnGhost: {
    border: "1px solid rgba(250,248,244,.4)",
    color: "#FAF8F4",
    padding: "1rem 2.6rem",
    fontSize: ".78rem",
    letterSpacing: ".2em",
    textTransform: "uppercase",
    textDecoration: "none",
  },

  heroScrollHint: {
    position: "absolute",
    bottom: 36,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: ".6rem",
    zIndex: 2,
  },

  heroScrollLine: {
    width: 1,
    height: 36,
    background: "linear-gradient(to bottom, rgba(201,169,110,0), #C9A96E)",
  },

  heroScrollText: {
    fontSize: ".62rem",
    letterSpacing: ".3em",
    textTransform: "uppercase",
    color: "#9C8B6E",
  },

  /* ---------- MARQUEE ---------- */

  marqueeSection: {
    background: "#11100E",
    borderTop: "1px solid rgba(255,255,255,.06)",
    borderBottom: "1px solid rgba(255,255,255,.06)",
    padding: "1.4rem 0",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },

  marqueeTrack: {
    display: "inline-flex",
    alignItems: "center",
    animation: "noire-marquee 32s linear infinite",
  },

  marqueeItem: {
    fontFamily: "'Playfair Display', serif",
    fontStyle: "italic",
    fontSize: "1.05rem",
    color: "#6B6660",
    padding: "0 1.6rem",
    display: "inline-flex",
    alignItems: "center",
    gap: "1.6rem",
  },

  marqueeDot: {
    color: "#C9A96E",
  },

  /* ---------- INTRO ---------- */

  intro: {
    background: "#FAF8F4",
    color: "#1C1A17",
    padding: "6.5rem 2.5rem",
  },

  introGrid: {
    maxWidth: 1240,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
    alignItems: "center",
  },

  introText: {
    maxWidth: 460,
  },

  introTitle: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 400,
    fontSize: "2.8rem",
    lineHeight: 1.15,
    margin: "0 0 1.6rem",
  },

  introBody: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.2rem",
    lineHeight: 1.75,
    color: "#4A4540",
    marginBottom: "2rem",
  },

  textLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: ".5rem",
    color: "#1C1A17",
    textDecoration: "none",
    fontSize: ".78rem",
    letterSpacing: ".18em",
    textTransform: "uppercase",
    borderBottom: "1px solid #1C1A17",
    paddingBottom: 4,
  },

  introImages: {
    position: "relative",
    height: 480,
  },

  introImgMain: {
    width: "82%",
    height: "100%",
    objectFit: "cover",
  },

  introImgSmall: {
    position: "absolute",
    bottom: -40,
    right: 0,
    width: "52%",
    height: "60%",
    objectFit: "cover",
    border: "8px solid #FAF8F4",
    boxShadow: "0 25px 50px rgba(0,0,0,.18)",
  },

  /* ---------- FEATURED ---------- */

  featured: {
    background: "#0A0A09",
    padding: "6.5rem 0",
  },

  featuredInner: {
    maxWidth: 1320,
    margin: "0 auto",
    padding: "0 2.5rem",
  },

  featuredHead: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "3rem",
    flexWrap: "wrap",
    gap: "1rem",
  },

  featuredTitle: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 400,
    fontSize: "2.6rem",
    margin: 0,
  },

  viewAllLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: ".5rem",
    color: "#C9A96E",
    textDecoration: "none",
    fontSize: ".78rem",
    letterSpacing: ".18em",
    textTransform: "uppercase",
  },

  featuredGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1.8rem",
  },

  featuredCard: {
    textDecoration: "none",
    color: "#FAF8F4",
    display: "block",
  },

  featuredImgWrap: {
    overflow: "hidden",
    height: 380,
  },

  featuredImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform .7s ease",
  },

  featuredInfo: {
    marginTop: "1.2rem",
    textAlign: "center",
  },

  featuredName: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 400,
    fontSize: "1.3rem",
    margin: "0 0 .4rem",
  },

  featuredNote: {
    fontSize: ".7rem",
    letterSpacing: ".12em",
    textTransform: "uppercase",
    color: "#9C8B6E",
    margin: "0 0 .6rem",
  },

  featuredPrice: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.1rem",
    color: "#C9A96E",
    margin: 0,
  },

  /* ---------- BESPOKE ---------- */

  bespoke: {
    position: "relative",
    padding: "9rem 2rem",
    overflow: "hidden",
    textAlign: "center",
  },

  bespokeImg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.35,
  },

  bespokeOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(10,10,9,.65)",
  },

  bespokeContent: {
    position: "relative",
    zIndex: 2,
    maxWidth: 720,
    margin: "0 auto",
  },

  bespokeTitle: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 400,
    fontSize: "2.9rem",
    lineHeight: 1.2,
    margin: "1rem 0 1.4rem",
  },

  bespokeText: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.25rem",
    color: "#D8D2C8",
    lineHeight: 1.7,
    marginBottom: "2.4rem",
  },

  /* ---------- CRAFT ---------- */

  craft: {
    background: "#FAF8F4",
    color: "#1C1A17",
    padding: "6.5rem 2.5rem",
  },

  craftHead: {
    textAlign: "center",
    maxWidth: 600,
    margin: "0 auto 3.5rem",
  },

  craftTitle: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 400,
    fontSize: "2.6rem",
    margin: 0,
  },

  craftGrid: {
    maxWidth: 1240,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2.5rem",
  },

  craftCard: {
    textAlign: "left",
  },

  craftImgWrap: {
    position: "relative",
    height: 280,
    overflow: "hidden",
    marginBottom: "1.6rem",
  },

  craftImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  craftNumber: {
    position: "absolute",
    bottom: 14,
    left: 14,
    fontFamily: "'Playfair Display', serif",
    fontStyle: "italic",
    fontSize: "1.6rem",
    color: "#FAF8F4",
    background: "rgba(10,10,9,.55)",
    padding: ".3rem .9rem",
  },

  craftCardTitle: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 400,
    fontSize: "1.5rem",
    margin: "0 0 .7rem",
  },

  craftCardText: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.08rem",
    lineHeight: 1.7,
    color: "#4A4540",
    margin: 0,
  },
  /* ---------- EDITORIAL ---------- */

  editorial: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 2,
    background: "#0A0A09",
  },

  editorialImgTall: {
    width: "100%",
    height: 460,
    objectFit: "cover",
    display: "block",
  },

  editorialImgShort: {
    width: "100%",
    height: 460,
    objectFit: "cover",
    display: "block",
    alignSelf: "center",
  },

  /* ---------- TESTIMONIALS ---------- */

  testimonials: {
    background: "#11100E",
    padding: "6.5rem 2.5rem",
    textAlign: "center",
  },

  testimonialsTitle: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 400,
    fontSize: "2.6rem",
    margin: "0 0 3.5rem",
  },

  testimonialsGrid: {
    maxWidth: 1180,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2rem",
  },

  testimonialCard: {
    background: "#0A0A09",
    border: "1px solid rgba(255,255,255,.07)",
    padding: "2.4rem 2rem",
    textAlign: "left",
  },

  testimonialQuote: {
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "1.2rem",
    lineHeight: 1.6,
    color: "#D8D2C8",
    margin: "1.2rem 0 1.6rem",
  },

  testimonialDivider: {
    width: 28,
    height: 1,
    background: "#C9A96E",
    marginBottom: "1.2rem",
  },

  testimonialName: {
    fontSize: ".85rem",
    letterSpacing: ".05em",
    margin: 0,
    color: "#FAF8F4",
  },

  testimonialRole: {
    fontSize: ".72rem",
    color: "#6B6660",
    margin: ".3rem 0 0",
  },

  /* ---------- NEWSLETTER ---------- */

  newsletter: {
    background: "#FAF8F4",
    color: "#1C1A17",
    padding: "6.5rem 2.5rem",
    textAlign: "center",
  },

  newsletterInner: {
    maxWidth: 600,
    margin: "0 auto",
  },

  newsletterTitle: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 400,
    fontSize: "2.6rem",
    lineHeight: 1.2,
    margin: "1rem 0 1.4rem",
  },

  newsletterText: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.15rem",
    color: "#4A4540",
    lineHeight: 1.7,
    marginBottom: "2.4rem",
  },

  newsletterForm: {
    display: "flex",
    maxWidth: 440,
    margin: "0 auto",
    border: "1px solid #1C1A17",
  },

  newsletterInput: {
    flex: 1,
    padding: "1rem 1.2rem",
    border: "none",
    outline: "none",
    background: "transparent",
    fontFamily: "'Jost', sans-serif",
    fontSize: ".9rem",
  },

  newsletterBtn: {
    padding: "1rem 1.6rem",
    background: "#1C1A17",
    color: "#FAF8F4",
    border: "none",
    fontSize: ".75rem",
    letterSpacing: ".15em",
    textTransform: "uppercase",
    cursor: "pointer",
  },

  /* ---------- PRESS ---------- */

  press: {
    background: "#0A0A09",
    padding: "4.5rem 2.5rem",
    textAlign: "center",
  },

  pressLabel: {
    fontSize: ".72rem",
    letterSpacing: ".35em",
    textTransform: "uppercase",
    color: "#6B6660",
    marginBottom: "2rem",
  },

  pressRow: {
    display: "flex",
    justifyContent: "center",
    gap: "3rem",
    flexWrap: "wrap",
  },

  pressName: {
    fontFamily: "'Playfair Display', serif",
    fontStyle: "italic",
    fontSize: "1.5rem",
    color: "#8A847C",
  },

};