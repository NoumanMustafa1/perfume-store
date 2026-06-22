import Link from "next/link";
import { prisma } from "../../lib/prisma";
import { Star, ShoppingBag, Shield, Truck, Gift, ArrowRight } from "lucide-react";
import "./shop.css";

export default async function Shop() {
  const products = await prisma.product.findMany({
    orderBy: {
      id: "desc"
    }
  });

  const categories = [
    "All",
    "Men",
    "Women",
    "Unisex",
    "Oud",
    "Luxury",
    "Limited Edition"
  ];

  return (
    <main className="luxury-page">
      {/* ============ HERO ============ */}
      <section className="hero">
        <img
          src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1600&q=80"
          alt="Luxury perfume"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">NOIRÉ COLLECTION · 2025</p>
          <h1>
            The Art of <em>Fragrance</em>
          </h1>
          <p className="hero-description">
            Handcrafted perfumes distilled from rare botanical origins. Each
            bottle tells a story of craftsmanship, passion, and timeless
            elegance.
          </p>
          <div className="hero-buttons">
            <a href="#collection" className="btn-primary">
              Explore Collection
            </a>
            <a href="#story" className="btn-secondary">
              Our Story
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <span className="scroll-line" />
          <span className="scroll-text">Scroll to discover</span>
        </div>
      </section>

      {/* ============ FEATURES BAR ============ */}
      <section className="features-bar">
        <div className="features-grid">
          <div className="feature-item">
            <Truck size={20} color="#C9A96E" />
            <div>
              <h4>Free Shipping</h4>
              <p>On orders over $150</p>
            </div>
          </div>
          <div className="feature-item">
            <Shield size={20} color="#C9A96E" />
            <div>
              <h4>Authenticity Guaranteed</h4>
              <p>100% genuine fragrances</p>
            </div>
          </div>
          <div className="feature-item">
            <Gift size={20} color="#C9A96E" />
            <div>
              <h4>Luxury Gift Wrapping</h4>
              <p>Complimentary on every order</p>
            </div>
          </div>
          <div className="feature-item">
            <ShoppingBag size={20} color="#C9A96E" />
            <div>
              <h4>Easy Returns</h4>
              <p>30-day return policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STORY / PROVENANCE ============ */}
      <section id="story" className="provenance">
        <div className="provenance-header">
          <p className="eyebrow">Notre Savoir-Faire</p>
          <h2>
            The <em>Noiré</em> Difference
          </h2>
          <p className="provenance-subtitle">
            Every fragrance is a work of art, composed with patience and
            precision
          </p>
        </div>

        <div className="provenance-grid">
          {[
            {
              number: "I",
              title: "Rare Ingredients",
              text: "Each formula begins with rare botanical origins sourced from the finest growers across Grasse, Mysore, and the Hadhramaut valley.",
              image: "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=600&q=80"
            },
            {
              number: "II",
              title: "Master Perfumers",
              text: "Created by experienced fragrance artists who layer top, heart, and base notes over months, balancing each accord by hand.",
              image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&q=80"
            },
            {
              number: "III",
              title: "Artisan Production",
              text: "Small batches handcrafted in our Paris atelier, aged in dark glass for a minimum of six weeks before bottling.",
              image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=600&q=80"
            }
          ].map((item) => (
            <article key={item.number} className="provenance-item">
              <div className="provenance-image">
                <img src={item.image} alt={item.title} />
                <span className="provenance-number">{item.number}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link href="/about" className="provenance-link">
                Learn more <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ============ CATEGORY FILTER ============ */}
      <section className="category-filter">
        <div className="filter-container">
          {categories.map((category) => (
            <button key={category} className="filter-btn">
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* ============ COLLECTION ============ */}
      <section id="collection" className="collection">
        <header className="section-header">
          <p className="eyebrow">THE COLLECTION</p>
          <h2>
            Signature <em>Perfumes</em>
          </h2>
          <p className="section-subtitle">
            {products.length} fragrances crafted for those who appreciate the
            extraordinary
          </p>
          <div className="header-line" />
        </header>

        <div className="product-grid">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.id}`}
              className="product-card"
            >
              <div className="product-image-wrapper">
                <img
                  src={
                    product.image ??
                    "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=800"
                  }
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-overlay">
                  <span className="quick-view">Quick View</span>
                </div>
                <span className="product-badge">New</span>
              </div>

              <div className="product-info">
                <p className="product-category">
                  {product.category || "Eau de Parfum"}
                </p>
                <h3>{product.name}</h3>
                <p className="product-size">Eau de Parfum · 50ml</p>
                
                <div className="product-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={12}
                      color="#C9A96E"
                      fill="#C9A96E"
                    />
                  ))}
                  <span className="rating-count">(24)</span>
                </div>

                <div className="product-price-row">
                  <strong>${product.price}</strong>
                  <button className="add-to-cart-btn">
                    <ShoppingBag size={16} />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="collection-footer">
          <Link href="/collections" className="btn-outline">
            View All Collections
          </Link>
        </div>
      </section>

      {/* ============ BESTSELLERS ============ */}
      <section className="bestsellers">
        <header className="section-header">
          <p className="eyebrow">MOST LOVED</p>
          <h2>
            Bestselling <em>Fragrances</em>
          </h2>
          <div className="header-line" />
        </header>

        <div className="bestseller-grid">
          {[
            {
              name: "Oud Imperial",
              description: "Woody · Intense · Long-lasting",
              price: "$285",
              image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=80",
              badge: "#1 Bestseller"
            },
            {
              name: "Rose Noir",
              description: "Floral · Velvet · Romantic",
              price: "$245",
              image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=600&q=80",
              badge: "Editor's Choice"
            },
            {
              name: "Ambre Mystique",
              description: "Oriental · Warm · Enveloping",
              price: "$320",
              image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&q=80",
              badge: "Limited Edition"
            }
          ].map((item) => (
            <Link href="/shop" key={item.name} className="bestseller-card">
              <div className="bestseller-image">
                <img src={item.image} alt={item.name} />
                <span className="bestseller-badge">{item.badge}</span>
              </div>
              <div className="bestseller-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="bestseller-price">
                  <span>From</span>
                  <strong>{item.price}</strong>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ CUSTOM SCENT CTA ============ */}
      <section className="custom-cta">
        <div className="custom-cta-content">
          <p className="eyebrow">Bespoke Service</p>
          <h2>
            Create Your <em>Signature</em> Scent
          </h2>
          <p>
            Work one-on-one with our master perfumers to compose a fragrance
            that is unmistakably yours. Choose your notes, define your
            character, and wear a scent no one else will ever possess.
          </p>
          <Link href="/custom-perfume" className="btn-primary">
            Start Your Creation
          </Link>
        </div>
      </section>

      {/* ============ MAISON BANNER ============ */}
      <section id="maison" className="banner">
        <img
          src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1600&q=80"
          alt="atelier"
          className="banner-image"
        />
        <div className="banner-overlay" />
        <div className="banner-content">
          <p className="banner-eyebrow">MAISON NOIRÉ</p>
          <h2>
            Crafted in Paris.
            <br />
            Felt Everywhere.
          </h2>
          <p className="banner-description">
            Since 2017, we have been creating fragrances that transcend
            borders and become part of your most cherished memories.
          </p>
          <Link href="/about" className="btn-outline-light">
            Discover Our Story
          </Link>
        </div>
      </section>

      {/* ============ PRESS ============ */}
      <section className="press">
        <p className="press-label">AS FEATURED IN</p>
        <div className="press-list">
          {[
            "Vogue Paris",
            "Harper's Bazaar",
            "Le Monde",
            "Wallpaper*",
            "Monocle",
            "GQ"
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="testimonials">
        <header className="section-header">
          <h2>
            Words from <em>Our Clients</em>
          </h2>
          <div className="header-line" />
        </header>

        <div className="testimonial-grid">
          {[
            {
              text: "The most transportive scent I have ever worn. It lingers in memory long after it fades from the skin.",
              author: "Cécile M.",
              role: "Paris, France",
              rating: 5
            },
            {
              text: "A perfume that creates unforgettable memories. I've never received so many compliments on a fragrance.",
              author: "Amara T.",
              role: "Lagos, Nigeria",
              rating: 5
            },
            {
              text: "Noiré understands true luxury. The craftsmanship in every bottle is evident from the first spray.",
              author: "Yuki H.",
              role: "Tokyo, Japan",
              rating: 5
            },
            {
              text: "I had a custom scent created for my wedding. Three years later, it still brings me to tears.",
              author: "Isabella R.",
              role: "Milan, Italy",
              rating: 5
            }
          ].map((item) => (
            <article key={item.author} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={14} color="#C9A96E" fill="#C9A96E" />
                ))}
              </div>
              <p className="testimonial-text">{item.text}</p>
              <div className="testimonial-divider" />
              <cite>
                <strong>{item.author}</strong>
                <span>{item.role}</span>
              </cite>
            </article>
          ))}
        </div>
      </section>

      {/* ============ NEWSLETTER ============ */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2>
            Join the <em>Noiré</em> Circle
          </h2>
          <p>
            Subscribe for exclusive access to limited releases, member-only
            pricing, and invitations to private events.
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
          <p className="newsletter-note">
            No spam. Only the finest things in life.
          </p>
        </div>
      </section>
    </main>
  );
}