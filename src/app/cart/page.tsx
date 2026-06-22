"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Trash2,
  Minus,
  Plus,
  Heart,
  ArrowRight,
  Truck,
  Shield,
  Gift,
  ArrowLeft,
} from "lucide-react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Oud Imperial",
      category: "Eau de Parfum",
      size: "50ml",
      price: 285,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&q=80",
    },
    {
      id: 2,
      name: "Rose Noir",
      category: "Eau de Parfum",
      size: "30ml",
      price: 185,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=400&q=80",
    },
    {
      id: 3,
      name: "Santal Mystique",
      category: "Extrait de Parfum",
      size: "50ml",
      price: 320,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&q=80",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [discount, setDiscount] = useState(0);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    if (newQuantity > 10) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const applyPromo = () => {
    if (promoCode.toUpperCase() === "NOIRE15") {
      setPromoApplied(true);
      setDiscount(subtotal * 0.15);
    } else if (promoCode.toUpperCase() === "WELCOME10") {
      setPromoApplied(true);
      setDiscount(subtotal * 0.1);
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 150 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax - discount;

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <main style={s.root}>
        <div style={s.emptyContainer}>
          <div style={s.emptyIcon}>
            <ShoppingBag size={64} color="#C9A96E" strokeWidth={1} />
          </div>
          <h1 style={s.emptyTitle}>
            Your Cart is <em style={{ fontStyle: "italic", color: "#C9A96E" }}>Empty</em>
          </h1>
          <p style={s.emptyText}>
            You haven't added any fragrances to your cart yet. Explore our
            collection to find your perfect scent.
          </p>
          <Link href="/shop" style={s.emptyBtn}>
            Explore Collection
            <ArrowRight size={16} />
          </Link>
          <div style={s.emptySuggestions}>
            <h3 style={s.suggestionsTitle}>You Might Like</h3>
            <div style={s.suggestionsGrid}>
              {[
                {
                  name: "Oud Imperial",
                  price: "$285",
                  image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&q=80",
                },
                {
                  name: "Rose Noir",
                  price: "$245",
                  image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=400&q=80",
                },
                {
                  name: "Midnight Amber",
                  price: "$260",
                  image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&q=80",
                },
              ].map((item) => (
                <Link
                  key={item.name}
                  href="/shop"
                  style={s.suggestionCard}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={s.suggestionImage}
                  />
                  <div style={s.suggestionInfo}>
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

  return (
    <main style={s.root}>
      <div style={s.container}>
        {/* Breadcrumb */}
        <div style={s.breadcrumb}>
          <Link href="/shop" style={s.breadcrumbLink}>
            <ArrowLeft size={16} />
            Continue Shopping
          </Link>
          <div style={s.breadcrumbRight}>
            <span style={s.breadcrumbCount}>
              {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>

        {/* Title */}
        <div style={s.header}>
          <h1 style={s.title}>
            Shopping <em style={{ fontStyle: "italic", color: "#C9A96E" }}>Cart</em>
          </h1>
          <div style={s.headerLine} />
        </div>

        <div style={s.mainGrid}>
          {/* Cart Items */}
          <div style={s.itemsSection}>
            {cartItems.map((item) => (
              <div key={item.id} style={s.cartItem}>
                <div style={s.itemImage}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div style={s.itemDetails}>
                  <div style={s.itemHeader}>
                    <div>
                      <p style={s.itemCategory}>{item.category}</p>
                      <h3 style={s.itemName}>{item.name}</h3>
                      <p style={s.itemSize}>{item.size}</p>
                    </div>
                    <strong style={s.itemPrice}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </strong>
                  </div>

                  <div style={s.itemActions}>
                    <div style={s.quantityControls}>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={s.quantityBtn}
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={14} />
                      </button>
                      <span style={s.quantityDisplay}>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={s.quantityBtn}
                        disabled={item.quantity >= 10}
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <div style={s.itemActionBtns}>
                      <button style={s.wishlistBtn}>
                        <Heart size={14} />
                        Save
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        style={s.removeBtn}
                      >
                        <Trash2 size={14} />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div style={s.summarySection}>
            <div style={s.summaryCard}>
              <h2 style={s.summaryTitle}>Order Summary</h2>

              {/* Promo Code */}
              <div style={s.promoSection}>
                <div style={s.promoInputWrap}>
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Promo code"
                    style={s.promoInput}
                    disabled={promoApplied}
                  />
                  <button
                    onClick={applyPromo}
                    style={s.promoBtn}
                    disabled={promoApplied || !promoCode}
                  >
                    {promoApplied ? "Applied ✓" : "Apply"}
                  </button>
                </div>
                {promoApplied && (
                  <p style={s.promoSuccess}>
                    Promo code applied! You saved ${discount.toFixed(2)}
                  </p>
                )}
                {!promoApplied && (
                  <p style={s.promoHint}>
                    Try <strong>NOIRE15</strong> or <strong>WELCOME10</strong>
                  </p>
                )}
              </div>

              <div style={s.divider} />

              {/* Price Breakdown */}
              <div style={s.summaryRow}>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div style={s.summaryRow}>
                <span>Shipping</span>
                {shipping === 0 ? (
                  <span style={{ color: "#4CAF50" }}>Free</span>
                ) : (
                  <span>${shipping.toFixed(2)}</span>
                )}
              </div>
              <div style={s.summaryRow}>
                <span>Tax (est.)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div style={{ ...s.summaryRow, color: "#4CAF50" }}>
                  <span>Discount</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}

              <div style={s.divider} />

              <div style={s.totalRow}>
                <span>Total</span>
                <strong style={{ color: "#C9A96E", fontSize: "1.4rem" }}>
                  ${total.toFixed(2)}
                </strong>
              </div>

              {shipping > 0 && (
                <p style={s.shippingHint}>
                  Add ${(150 - subtotal).toFixed(2)} more for free shipping
                </p>
              )}

              <Link href="/checkout" style={s.checkoutBtn}>
                Proceed to Checkout
                <ArrowRight size={16} />
              </Link>

              <div style={s.trustBadges}>
                <div style={s.trustBadge}>
                  <Truck size={14} color="#C9A96E" />
                  <span>Free shipping over $150</span>
                </div>
                <div style={s.trustBadge}>
                  <Shield size={14} color="#C9A96E" />
                  <span>Secure checkout</span>
                </div>
                <div style={s.trustBadge}>
                  <Gift size={14} color="#C9A96E" />
                  <span>Complimentary gift wrapping</span>
                </div>
              </div>
            </div>

            {/* Gift Message */}
            <div style={s.giftSection}>
              <Gift size={16} color="#C9A96E" />
              <span style={s.giftText}>
                All orders include complimentary luxury gift wrapping
              </span>
            </div>
          </div>
        </div>

        {/* You Might Also Like */}
        <div style={s.recommendations}>
          <h2 style={s.recTitle}>
            You Might <em style={{ fontStyle: "italic", color: "#C9A96E" }}>Also Like</em>
          </h2>
          <div style={s.recGrid}>
            {[
              {
                name: "Ambre Mystique",
                price: "$320",
                image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6a?w=400&q=80",
              },
              {
                name: "Jasmine Nuit",
                price: "$210",
                image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&q=80",
              },
              {
                name: "Cuir Obscur",
                price: "$350",
                image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=400&q=80",
              },
              {
                name: "Fleur d'Oranger",
                price: "$195",
                image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&q=80",
              },
            ].map((item) => (
              <Link
                key={item.name}
                href="/shop"
                style={s.recCard}
              >
                <div style={s.recImageWrap}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={s.recImage}
                  />
                </div>
                <div style={s.recInfo}>
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

  breadcrumb: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
    paddingBottom: "1.5rem",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
  },

  breadcrumbLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "#6B6660",
    textDecoration: "none",
    fontSize: "0.85rem",
  },

  breadcrumbRight: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },

  breadcrumbCount: {
    fontSize: "0.8rem",
    color: "#6B6660",
  },

  header: {
    marginBottom: "2.5rem",
  },

  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "2.5rem",
    fontWeight: 400,
    margin: 0,
  },

  headerLine: {
    width: "50px",
    height: "1px",
    background: "#C9A96E",
    marginTop: "1rem",
  },

  mainGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 380px",
    gap: "3rem",
    alignItems: "start",
  },

  itemsSection: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },

  cartItem: {
    display: "flex",
    gap: "1.5rem",
    background: "white",
    padding: "1.5rem",
    border: "1px solid rgba(0,0,0,0.06)",
  },

  itemImage: {
    width: "120px",
    height: "140px",
    overflow: "hidden",
    flexShrink: 0,
  },

  itemDetails: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  itemHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  itemCategory: {
    fontSize: "0.65rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    color: "#9C8B6E",
    margin: "0 0 0.3rem",
  },

  itemName: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.2rem",
    fontWeight: 400,
    margin: "0 0 0.3rem",
  },

  itemSize: {
    fontSize: "0.8rem",
    color: "#6B6660",
    margin: 0,
  },

  itemPrice: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.2rem",
    color: "#1C1A17",
  },

  itemActions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "1rem",
  },

  quantityControls: {
    display: "flex",
    alignItems: "center",
    border: "1px solid rgba(0,0,0,0.12)",
  },

  quantityBtn: {
    background: "none",
    border: "none",
    padding: "0.5rem 0.7rem",
    cursor: "pointer",
    color: "#1C1A17",
    display: "flex",
    alignItems: "center",
  },

  quantityDisplay: {
    padding: "0.5rem 1rem",
    fontSize: "0.9rem",
    borderLeft: "1px solid rgba(0,0,0,0.12)",
    borderRight: "1px solid rgba(0,0,0,0.12)",
    minWidth: "40px",
    textAlign: "center" as const,
  },

  itemActionBtns: {
    display: "flex",
    gap: "1rem",
  },

  wishlistBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    background: "none",
    border: "none",
    color: "#6B6660",
    fontSize: "0.8rem",
    cursor: "pointer",
    fontFamily: "'Jost', sans-serif",
  },

  removeBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    background: "none",
    border: "none",
    color: "#6B6660",
    fontSize: "0.8rem",
    cursor: "pointer",
    fontFamily: "'Jost', sans-serif",
  },

  summarySection: {
    position: "sticky" as const,
    top: "2rem",
  },

  summaryCard: {
    background: "white",
    padding: "2rem",
    border: "1px solid rgba(0,0,0,0.06)",
  },

  summaryTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.3rem",
    fontWeight: 400,
    margin: "0 0 1.5rem",
  },

  promoSection: {
    marginBottom: "1rem",
  },

  promoInputWrap: {
    display: "flex",
    border: "1px solid rgba(0,0,0,0.12)",
  },

  promoInput: {
    flex: 1,
    padding: "0.7rem 1rem",
    border: "none",
    outline: "none",
    fontFamily: "'Jost', sans-serif",
    fontSize: "0.85rem",
    background: "#FAF8F4",
  },

  promoBtn: {
    padding: "0.7rem 1.2rem",
    background: "#1C1A17",
    color: "#FAF8F4",
    border: "none",
    fontSize: "0.75rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    cursor: "pointer",
    fontFamily: "'Jost', sans-serif",
    fontWeight: 500,
  },

  promoSuccess: {
    fontSize: "0.75rem",
    color: "#4CAF50",
    marginTop: "0.5rem",
  },

  promoHint: {
    fontSize: "0.7rem",
    color: "#B0ABA4",
    marginTop: "0.5rem",
  },

  divider: {
    height: "1px",
    background: "rgba(0,0,0,0.06)",
    margin: "1rem 0",
  },

  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "0.85rem",
    marginBottom: "0.6rem",
    color: "#4A4540",
  },

  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1rem",
    fontWeight: 500,
    marginBottom: "1rem",
  },

  shippingHint: {
    fontSize: "0.75rem",
    color: "#6B6660",
    marginBottom: "1rem",
    fontStyle: "italic",
  },

  checkoutBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    width: "100%",
    padding: "1rem",
    background: "#C9A96E",
    color: "#1C1A17",
    textDecoration: "none",
    fontSize: "0.85rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    fontWeight: 500,
    fontFamily: "'Jost', sans-serif",
    marginBottom: "1.5rem",
    boxSizing: "border-box" as const,
  },

  trustBadges: {
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
    paddingTop: "1rem",
    borderTop: "1px solid rgba(0,0,0,0.06)",
  },

  trustBadge: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "0.75rem",
    color: "#6B6660",
  },

  giftSection: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    marginTop: "1rem",
    padding: "1rem",
    background: "white",
    border: "1px solid rgba(0,0,0,0.06)",
  },

  giftText: {
    fontSize: "0.8rem",
    color: "#4A4540",
    lineHeight: 1.5,
  },

  recommendations: {
    marginTop: "5rem",
    paddingTop: "3rem",
    borderTop: "1px solid rgba(0,0,0,0.06)",
  },

  recTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.8rem",
    fontWeight: 400,
    marginBottom: "2rem",
  },

  recGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1.5rem",
  },

  recCard: {
    textDecoration: "none",
    color: "#1C1A17",
    display: "block",
  },

  recImageWrap: {
    height: "220px",
    overflow: "hidden",
    marginBottom: "0.8rem",
  },

  recImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  },

  recInfo: {
    textAlign: "center" as const,
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
    fontSize: "0.9rem",
  },

  // Empty cart states
  emptyContainer: {
    maxWidth: "700px",
    margin: "0 auto",
    padding: "6rem 2rem",
    textAlign: "center" as const,
  },

  emptyIcon: {
    marginBottom: "2rem",
    display: "flex",
    justifyContent: "center",
  },

  emptyTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "2.5rem",
    fontWeight: 400,
    marginBottom: "1rem",
  },

  emptyText: {
    fontSize: "1.1rem",
    color: "#6B6660",
    maxWidth: "400px",
    margin: "0 auto 2rem",
    lineHeight: 1.6,
  },

  emptyBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    background: "#C9A96E",
    color: "#1C1A17",
    padding: "0.9rem 2.5rem",
    textDecoration: "none",
    fontSize: "0.85rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    fontWeight: 500,
    fontFamily: "'Jost', sans-serif",
  },

  emptySuggestions: {
    marginTop: "4rem",
    textAlign: "center" as const,
  },

  suggestionsTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.3rem",
    fontWeight: 400,
    marginBottom: "1.5rem",
  },

  suggestionsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem",
  },

  suggestionCard: {
    textDecoration: "none",
    color: "#1C1A17",
    display: "block",
  },

  suggestionImage: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    marginBottom: "0.5rem",
  },

  suggestionInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
    fontSize: "0.85rem",
  },
};