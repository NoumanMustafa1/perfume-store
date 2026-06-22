import { prisma } from "../../../lib/prisma";
import { Star, ShoppingBag, Heart, Share2, Truck, Shield, RotateCcw, ChevronRight } from "lucide-react";
import Link from "next/link";
import ProductActions from "./ProductActions";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await prisma.product.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!product) {
    return (
      <main style={s.root}>
        <div style={s.notFound}>
          <h1 style={s.notFoundTitle}>Product Not Found</h1>
          <p style={s.notFoundText}>
            The fragrance you're looking for doesn't exist or has been discontinued.
          </p>
          <Link href="/shop" style={s.notFoundBtn}>
            Browse Collection
          </Link>
        </div>
      </main>
    );
  }

  // Related products (sample data - replace with actual related products query)
  const relatedProducts = [
    {
      name: "Rose Noir",
      price: "$245",
      image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=400&q=80",
    },
    {
      name: "Ambre Mystique",
      price: "$320",
      image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&q=80",
    },
    {
      name: "Santal Supreme",
      price: "$270",
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&q=80",
    },
    {
      name: "Cuir Obscur",
      price: "$350",
      image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=400&q=80",
    },
  ];

  return (
    <main style={s.root}>
      <div style={s.container}>
        {/* Breadcrumb */}
        <div style={s.breadcrumb}>
          <Link href="/" style={s.breadcrumbLink}>
            Home
          </Link>
          <ChevronRight size={14} color="#B0ABA4" />
          <Link href="/shop" style={s.breadcrumbLink}>
            Shop
          </Link>
          <ChevronRight size={14} color="#B0ABA4" />
          <span style={s.breadcrumbCurrent}>{product.name}</span>
        </div>

        {/* Product Section */}
        <div style={s.productGrid}>
          {/* Image Gallery */}
          <div style={s.gallery}>
            <div style={s.mainImage}>
              <img
                src={product.image || "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80"}
                alt={product.name}
                style={s.mainImageStyle}
              />
              <span style={s.badge}>Bestseller</span>
            </div>
            <div style={s.thumbnailRow}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} style={s.thumbnail}>
                  <img
                    src={product.image || `https://images.unsplash.com/photo-1594035910387-fea47794261f?w=200&q=80`}
                    alt={`${product.name} view ${i}`}
                    style={s.thumbnailImage}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div style={s.productInfo}>
            <div style={s.productHeader}>
              <p style={s.category}>
                {product.category || "Eau de Parfum"}
              </p>
              <h1 style={s.productName}>{product.name}</h1>
              <div style={s.ratingRow}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    color="#C9A96E"
                    fill="#C9A96E"
                  />
                ))}
                <span style={s.ratingCount}>(128 reviews)</span>
              </div>
            </div>

            <div style={s.divider} />

            {/* Price */}
            <div style={s.priceSection}>
              <span style={s.price}>${product.price}</span>
              <span style={s.priceLabel}>USD</span>
              <span style={s.taxNote}>Tax included</span>
            </div>

            {/* Description */}
            <div style={s.descriptionSection}>
              <h3 style={s.sectionLabel}>About This Fragrance</h3>
              <p style={s.description}>
                {product.description || 
                  "A masterfully composed fragrance that opens with bright citrus notes, unfolds into a heart of rare florals, and settles into a warm, woody base. Each bottle is hand-filled in our Paris atelier, ensuring the highest quality and attention to detail."}
              </p>
            </div>

            {/* Notes Pyramid */}
            <div style={s.notesSection}>
              <h3 style={s.sectionLabel}>Olfactory Notes</h3>
              <div style={s.notesGrid}>
                <div style={s.noteCard}>
                  <span style={s.noteLabel}>Top</span>
                  <span style={s.noteValue}>Bergamot, Pink Pepper</span>
                </div>
                <div style={s.noteCard}>
                  <span style={s.noteLabel}>Heart</span>
                  <span style={s.noteValue}>Rose de Mai, Jasmine</span>
                </div>
                <div style={s.noteCard}>
                  <span style={s.noteLabel}>Base</span>
                  <span style={s.noteValue}>Oud, Sandalwood, Amber</span>
                </div>
              </div>
            </div>

            {/* Size Selection */}
            <div style={s.sizeSection}>
              <h3 style={s.sectionLabel}>Size</h3>
              <div style={s.sizeOptions}>
                {["30ml", "50ml", "100ml"].map((size, i) => (
                  <button
                    key={size}
                    style={{
                      ...s.sizeBtn,
                      ...(i === 1 ? s.sizeBtnActive : {}),
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <ProductActions product={product} />

            {/* Features */}
            <div style={s.features}>
              <div style={s.featureItem}>
                <Truck size={18} color="#C9A96E" />
                <div>
                  <strong>Free Shipping</strong>
                  <span>On orders over $150</span>
                </div>
              </div>
              <div style={s.featureItem}>
                <Shield size={18} color="#C9A96E" />
                <div>
                  <strong>Authenticity Guaranteed</strong>
                  <span>100% genuine fragrance</span>
                </div>
              </div>
              <div style={s.featureItem}>
                <RotateCcw size={18} color="#C9A96E" />
                <div>
                  <strong>Easy Returns</strong>
                  <span>30-day return policy</span>
                </div>
              </div>
            </div>

            {/* Share & Wishlist */}
            <div style={s.actionRow}>
              <button style={s.wishlistBtn}>
                <Heart size={16} />
                Add to Wishlist
              </button>
              <button style={s.shareBtn}>
                <Share2 size={16} />
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div style={s.tabsSection}>
          <div style={s.tabs}>
            <button style={{ ...s.tab, ...s.tabActive }}>Description</button>
            <button style={s.tab}>Ingredients</button>
            <button style={s.tab}>How to Apply</button>
            <button style={s.tab}>Shipping</button>
          </div>
          <div style={s.tabContent}>
            <div style={s.tabTextGrid}>
              <div>
                <h4 style={s.tabTitle}>The Story</h4>
                <p style={s.tabText}>
                  {product.name} was inspired by the golden hour in the gardens of
                  Versailles. Our master perfumer spent three years sourcing the
                  perfect Rose de Mai absolute from Grasse, combining it with rare
                  oud from Assam and sustainably harvested sandalwood from Mysore.
                  The result is a fragrance that captures the ephemeral beauty of
                  twilight — elegant, mysterious, and unforgettable.
                </p>
              </div>
              <div>
                <h4 style={s.tabTitle}>Craftsmanship</h4>
                <p style={s.tabText}>
                  Each bottle is hand-filled in our Paris atelier. The fragrance is
                  aged for a minimum of six weeks in dark glass vessels, allowing the
                  notes to meld and mature. The concentration is 22% perfume oil,
                  classifying it as an Eau de Parfum with exceptional longevity and
                  sillage.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div style={s.relatedSection}>
          <h2 style={s.relatedTitle}>
            You May <em style={{ fontStyle: "italic", color: "#C9A96E" }}>Also Like</em>
          </h2>
          <div style={s.relatedGrid}>
            {relatedProducts.map((item) => (
              <Link
                key={item.name}
                href="/shop"
                style={s.relatedCard}
              >
                <div style={s.relatedImageWrap}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={s.relatedImage}
                  />
                </div>
                <div style={s.relatedInfo}>
                  <strong>{item.name}</strong>
                  <span style={{ color: "#C9A96E" }}>{item.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

const s: Record<string, React.CSSProperties> = {
  root: {
    background: "#FAF8F4",
    minHeight: "100vh",
    fontFamily: "'Jost', sans-serif",
    color: "#1C1A17",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
  },

  // Not Found
  notFound: {
    textAlign: "center" as const,
    padding: "8rem 2rem",
  },

  notFoundTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "2.5rem",
    fontWeight: 400,
    marginBottom: "1rem",
  },

  notFoundText: {
    color: "#6B6660",
    fontSize: "1.1rem",
    marginBottom: "2rem",
  },

  notFoundBtn: {
    display: "inline-block",
    background: "#C9A96E",
    color: "#1C1A17",
    padding: "0.9rem 2.5rem",
    textDecoration: "none",
    fontSize: "0.85rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    fontWeight: 500,
  },

  // Breadcrumb
  breadcrumb: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "2rem",
    fontSize: "0.8rem",
  },

  breadcrumbLink: {
    color: "#6B6660",
    textDecoration: "none",
  },

  breadcrumbCurrent: {
    color: "#C9A96E",
  },

  // Product Grid
  productGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
    marginBottom: "4rem",
  },

  // Gallery
  gallery: {
    position: "sticky" as const,
    top: "2rem",
  },

  mainImage: {
    position: "relative" as const,
    height: "500px",
    overflow: "hidden",
    marginBottom: "1rem",
  },

  mainImageStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  badge: {
    position: "absolute",
    top: "15px",
    left: "15px",
    background: "#C9A96E",
    color: "#1C1A17",
    padding: "0.3rem 0.8rem",
    fontSize: "0.65rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    fontWeight: 500,
  },

  thumbnailRow: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "0.5rem",
  },

  thumbnail: {
    height: "80px",
    overflow: "hidden",
    cursor: "pointer",
    border: "2px solid transparent",
  },

  thumbnailImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  // Product Info
  productInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },

  productHeader: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },

  category: {
    fontSize: "0.7rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: "#9C8B6E",
  },

  productName: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "2.5rem",
    fontWeight: 400,
    lineHeight: 1.2,
    margin: 0,
  },

  ratingRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.2rem",
  },

  ratingCount: {
    fontSize: "0.8rem",
    color: "#6B6660",
    marginLeft: "0.5rem",
  },

  divider: {
    height: "1px",
    background: "rgba(0,0,0,0.08)",
  },

  priceSection: {
    display: "flex",
    alignItems: "baseline",
    gap: "0.8rem",
  },

  price: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "2rem",
    color: "#C9A96E",
    fontWeight: 500,
  },

  priceLabel: {
    fontSize: "0.8rem",
    color: "#6B6660",
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
  },

  taxNote: {
    fontSize: "0.75rem",
    color: "#9C8B6E",
    marginLeft: "auto",
  },

  descriptionSection: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },

  sectionLabel: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1rem",
    fontWeight: 400,
    margin: 0,
  },

  description: {
    fontSize: "0.9rem",
    color: "#4A4540",
    lineHeight: 1.7,
    margin: 0,
  },

  notesSection: {
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
  },

  notesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "0.5rem",
  },

  noteCard: {
    background: "white",
    padding: "0.8rem",
    border: "1px solid rgba(0,0,0,0.06)",
    display: "flex",
    flexDirection: "column",
    gap: "0.3rem",
  },

  noteLabel: {
    fontSize: "0.6rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    color: "#C9A96E",
    fontWeight: 500,
  },

  noteValue: {
    fontSize: "0.8rem",
    color: "#1C1A17",
  },

  sizeSection: {
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
  },

  sizeOptions: {
    display: "flex",
    gap: "0.5rem",
  },

  sizeBtn: {
    padding: "0.7rem 1.2rem",
    background: "white",
    border: "1px solid rgba(0,0,0,0.12)",
    fontSize: "0.8rem",
    cursor: "pointer",
    fontFamily: "'Jost', sans-serif",
    color: "#1C1A17",
  },

  sizeBtnActive: {
    borderColor: "#C9A96E",
    background: "rgba(201, 169, 110, 0.1)",
    color: "#C9A96E",
  },

  // Features
  features: {
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
    padding: "1.5rem",
    background: "white",
    border: "1px solid rgba(0,0,0,0.06)",
  },

  featureItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.8rem",
  },

  // Action Row
  actionRow: {
    display: "flex",
    gap: "1.5rem",
  },

  wishlistBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    background: "none",
    border: "none",
    color: "#6B6660",
    fontSize: "0.8rem",
    cursor: "pointer",
    fontFamily: "'Jost', sans-serif",
  },

  shareBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    background: "none",
    border: "none",
    color: "#6B6660",
    fontSize: "0.8rem",
    cursor: "pointer",
    fontFamily: "'Jost', sans-serif",
  },

  // Tabs
  tabsSection: {
    marginBottom: "4rem",
  },

  tabs: {
    display: "flex",
    borderBottom: "1px solid rgba(0,0,0,0.08)",
    marginBottom: "2rem",
  },

  tab: {
    padding: "1rem 2rem",
    background: "none",
    border: "none",
    borderBottom: "2px solid transparent",
    fontSize: "0.85rem",
    color: "#6B6660",
    cursor: "pointer",
    fontFamily: "'Jost', sans-serif",
    letterSpacing: "0.05em",
  },

  tabActive: {
    borderBottomColor: "#C9A96E",
    color: "#1C1A17",
  },

  tabContent: {
    maxWidth: "800px",
  },

  tabTextGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem",
  },

  tabTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.1rem",
    fontWeight: 400,
    marginBottom: "0.8rem",
  },

  tabText: {
    fontSize: "0.9rem",
    color: "#4A4540",
    lineHeight: 1.7,
    margin: 0,
  },

  // Related Products
  relatedSection: {
    paddingTop: "3rem",
    borderTop: "1px solid rgba(0,0,0,0.06)",
  },

  relatedTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.8rem",
    fontWeight: 400,
    marginBottom: "2rem",
  },

  relatedGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1.5rem",
  },

  relatedCard: {
    textDecoration: "none",
    color: "#1C1A17",
    display: "block",
  },

  relatedImageWrap: {
    height: "220px",
    overflow: "hidden",
    marginBottom: "0.8rem",
  },

  relatedImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  },

  relatedInfo: {
    textAlign: "center" as const,
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
    fontSize: "0.9rem",
  },
};