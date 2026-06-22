"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Shield,
  Truck,
  Lock,
  CreditCard,
  Check,
} from "lucide-react";

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      setOrderPlaced(true);
    }
  };

  const subtotal = 285;
  const shipping = 0;
  const tax = 28.5;
  const total = subtotal + shipping + tax;

  if (orderPlaced) {
    return (
      <main style={s.root}>
        <div style={s.confirmationContainer}>
          <div style={s.confirmationIcon}>
            <Check size={48} color="#C9A96E" />
          </div>
          <h1 style={s.confirmationTitle}>
            Order <em style={{ fontStyle: "italic", color: "#C9A96E" }}>Confirmed</em>
          </h1>
          <p style={s.confirmationText}>
            Thank you for your purchase. Your order #NOIRÉ-2025-{Math.floor(Math.random() * 9000) + 1000} has been placed.
          </p>
          <p style={s.confirmationSubtext}>
            You will receive a confirmation email shortly with your order details and tracking information.
          </p>
          <div style={s.confirmationDetails}>
            <div style={s.detailRow}>
              <span>Estimated Delivery</span>
              <strong>3-5 Business Days</strong>
            </div>
            <div style={s.detailRow}>
              <span>Order Total</span>
              <strong style={{ color: "#C9A96E" }}>${total.toFixed(2)}</strong>
            </div>
          </div>
          <Link href="/shop" style={s.continueShoppingBtn}>
            Continue Shopping
          </Link>
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
            Back to Shop
          </Link>
          <div style={s.steps}>
            <span style={{ ...s.stepIndicator, ...(step >= 1 ? s.stepActive : {}) }}>
              1. Shipping
            </span>
            <span style={s.stepSeparator}>→</span>
            <span style={{ ...s.stepIndicator, ...(step >= 2 ? s.stepActive : {}) }}>
              2. Payment
            </span>
            <span style={s.stepSeparator}>→</span>
            <span style={{ ...s.stepIndicator, ...(step >= 3 ? s.stepActive : {}) }}>
              3. Review
            </span>
          </div>
        </div>

        <div style={s.mainGrid}>
          {/* Form Section */}
          <div style={s.formSection}>
            <form onSubmit={handleSubmit}>
              {/* Step 1: Shipping */}
              {step === 1 && (
                <div>
                  <h2 style={s.sectionTitle}>Shipping Information</h2>
                  <div style={s.formRow}>
                    <div style={s.formGroup}>
                      <label style={s.label}>First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        style={s.input}
                        placeholder="John"
                      />
                    </div>
                    <div style={s.formGroup}>
                      <label style={s.label}>Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        style={s.input}
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div style={s.formRow}>
                    <div style={s.formGroup}>
                      <label style={s.label}>Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        style={s.input}
                        placeholder="john@email.com"
                      />
                    </div>
                    <div style={s.formGroup}>
                      <label style={s.label}>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        style={s.input}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div style={s.formGroup}>
                    <label style={s.label}>Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      style={s.input}
                      placeholder="123 Main Street, Apt 4B"
                    />
                  </div>

                  <div style={s.formRow}>
                    <div style={s.formGroup}>
                      <label style={s.label}>City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        style={s.input}
                        placeholder="New York"
                      />
                    </div>
                    <div style={s.formGroup}>
                      <label style={s.label}>Country *</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        style={s.select}
                      >
                        <option value="">Select country</option>
                        <option value="US">United States</option>
                        <option value="FR">France</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="PK">Pakistan</option>
                        <option value="JP">Japan</option>
                        <option value="AU">Australia</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ ...s.formGroup, maxWidth: "200px" }}>
                    <label style={s.label}>Postal Code *</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      required
                      style={s.input}
                      placeholder="10001"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Payment */}
              {step === 2 && (
                <div>
                  <h2 style={s.sectionTitle}>Payment Details</h2>
                  <div style={s.secureBadge}>
                    <Lock size={14} color="#C9A96E" />
                    <span>Secured by SSL encryption</span>
                  </div>

                  <div style={s.formGroup}>
                    <label style={s.label}>Card Number *</label>
                    <div style={s.cardInputWrap}>
                      <CreditCard size={18} color="#6B6660" />
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                        style={{ ...s.input, border: "none", paddingLeft: "0.5rem" }}
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                  </div>

                  <div style={s.formGroup}>
                    <label style={s.label}>Name on Card *</label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      required
                      style={s.input}
                      placeholder="John Doe"
                    />
                  </div>

                  <div style={s.formRow}>
                    <div style={s.formGroup}>
                      <label style={s.label}>Expiry Date *</label>
                      <input
                        type="text"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleInputChange}
                        required
                        style={s.input}
                        placeholder="MM/YY"
                      />
                    </div>
                    <div style={s.formGroup}>
                      <label style={s.label}>CVV *</label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                        style={s.input}
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Review */}
              {step === 3 && (
                <div>
                  <h2 style={s.sectionTitle}>Review Your Order</h2>
                  
                  <div style={s.reviewSection}>
                    <h3 style={s.reviewTitle}>Shipping Address</h3>
                    <p style={s.reviewText}>
                      {formData.firstName} {formData.lastName}<br />
                      {formData.address}<br />
                      {formData.city}, {formData.postalCode}<br />
                      {formData.country}
                    </p>
                  </div>

                  <div style={s.reviewSection}>
                    <h3 style={s.reviewTitle}>Payment Method</h3>
                    <p style={s.reviewText}>
                      Card ending in {formData.cardNumber.slice(-4)}<br />
                      {formData.cardName}
                    </p>
                  </div>

                  <div style={s.reviewSection}>
                    <h3 style={s.reviewTitle}>Items</h3>
                    <div style={s.reviewItem}>
                      <img
                        src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=120&q=80"
                        alt="Oud Imperial"
                        style={s.reviewImage}
                      />
                      <div style={s.reviewItemInfo}>
                        <strong>Oud Imperial</strong>
                        <span style={{ color: "#6B6660" }}>Eau de Parfum · 50ml</span>
                        <span>Qty: 1</span>
                      </div>
                      <strong style={{ color: "#C9A96E" }}>$285.00</strong>
                    </div>
                  </div>
                </div>
              )}

              <div style={s.buttonRow}>
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    style={s.backButton}
                  >
                    <ArrowLeft size={16} />
                    Back
                  </button>
                )}
                <button type="submit" style={s.submitButton}>
                  {step === 3 ? "Place Order" : "Continue to " + (step === 1 ? "Payment" : "Review")}
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div style={s.sidebar}>
            <h2 style={s.sidebarTitle}>Order Summary</h2>
            
            <div style={s.sidebarItem}>
              <img
                src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=200&q=80"
                alt="Oud Imperial"
                style={s.sidebarImage}
              />
              <div style={s.sidebarItemInfo}>
                <strong style={{ fontSize: "0.9rem" }}>Oud Imperial</strong>
                <span style={{ color: "#6B6660", fontSize: "0.8rem" }}>Eau de Parfum · 50ml</span>
                <span style={{ color: "#C9A96E", fontSize: "0.85rem" }}>$285.00</span>
              </div>
            </div>

            <div style={s.divider} />

            <div style={s.summaryRow}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div style={s.summaryRow}>
              <span>Shipping</span>
              <span style={{ color: "#4CAF50" }}>Free</span>
            </div>
            <div style={s.summaryRow}>
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            
            <div style={s.divider} />
            
            <div style={{ ...s.summaryRow, fontWeight: 600 }}>
              <span>Total</span>
              <strong style={{ color: "#C9A96E", fontSize: "1.2rem" }}>${total.toFixed(2)}</strong>
            </div>

            <div style={s.trustBadges}>
              <div style={s.trustBadge}>
                <Shield size={14} color="#C9A96E" />
                <span>Secure Checkout</span>
              </div>
              <div style={s.trustBadge}>
                <Truck size={14} color="#C9A96E" />
                <span>Free Shipping over $150</span>
              </div>
              <div style={s.trustBadge}>
                <Lock size={14} color="#C9A96E" />
                <span>SSL Encrypted</span>
              </div>
            </div>
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
    flexWrap: "wrap",
    gap: "1rem",
  },

  breadcrumbLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "#6B6660",
    textDecoration: "none",
    fontSize: "0.85rem",
  },

  steps: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    fontSize: "0.8rem",
  },

  stepIndicator: {
    color: "#B0ABA4",
    letterSpacing: "0.05em",
  },

  stepActive: {
    color: "#C9A96E",
    fontWeight: 500,
  },

  stepSeparator: {
    color: "#B0ABA4",
  },

  mainGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 380px",
    gap: "3rem",
    alignItems: "start",
  },

  formSection: {
    background: "white",
    padding: "2.5rem",
    border: "1px solid rgba(0,0,0,0.06)",
  },

  sectionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.6rem",
    fontWeight: 400,
    marginBottom: "1.5rem",
  },

  formRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    marginBottom: "1rem",
  },

  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
    marginBottom: "1rem",
    flex: 1,
  },

  label: {
    fontSize: "0.75rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#6B6660",
    fontWeight: 500,
  },

  input: {
    padding: "0.8rem 1rem",
    border: "1px solid rgba(0,0,0,0.12)",
    fontSize: "0.9rem",
    fontFamily: "'Jost', sans-serif",
    outline: "none",
    background: "#FAF8F4",
    width: "100%",
    boxSizing: "border-box" as const,
  },

  select: {
    padding: "0.8rem 1rem",
    border: "1px solid rgba(0,0,0,0.12)",
    fontSize: "0.9rem",
    fontFamily: "'Jost', sans-serif",
    outline: "none",
    background: "#FAF8F4",
    width: "100%",
    cursor: "pointer",
  },

  cardInputWrap: {
    display: "flex",
    alignItems: "center",
    border: "1px solid rgba(0,0,0,0.12)",
    background: "#FAF8F4",
    padding: "0 1rem",
  },

  secureBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "0.75rem",
    color: "#6B6660",
    marginBottom: "1.5rem",
    background: "rgba(201, 169, 110, 0.1)",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
  },

  reviewSection: {
    marginBottom: "1.5rem",
    paddingBottom: "1.5rem",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
  },

  reviewTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.1rem",
    fontWeight: 400,
    marginBottom: "0.5rem",
  },

  reviewText: {
    color: "#4A4540",
    lineHeight: 1.6,
    fontSize: "0.9rem",
  },

  reviewItem: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },

  reviewImage: {
    width: "60px",
    height: "60px",
    objectFit: "cover" as const,
  },

  reviewItemInfo: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.2rem",
    flex: 1,
    fontSize: "0.85rem",
  },

  buttonRow: {
    display: "flex",
    gap: "1rem",
    marginTop: "2rem",
  },

  backButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.9rem 1.5rem",
    background: "transparent",
    border: "1px solid rgba(0,0,0,0.15)",
    color: "#6B6660",
    fontSize: "0.85rem",
    cursor: "pointer",
    fontFamily: "'Jost', sans-serif",
  },

  submitButton: {
    flex: 1,
    padding: "0.9rem 2rem",
    background: "#C9A96E",
    color: "#1C1A17",
    border: "none",
    fontSize: "0.85rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: "'Jost', sans-serif",
  },

  sidebar: {
    background: "white",
    padding: "2rem",
    border: "1px solid rgba(0,0,0,0.06)",
    position: "sticky" as const,
    top: "2rem",
  },

  sidebarTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.3rem",
    fontWeight: 400,
    marginBottom: "1.5rem",
  },

  sidebarItem: {
    display: "flex",
    gap: "1rem",
    marginBottom: "1rem",
  },

  sidebarImage: {
    width: "70px",
    height: "70px",
    objectFit: "cover" as const,
  },

  sidebarItemInfo: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.2rem",
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
    marginBottom: "0.5rem",
    color: "#4A4540",
  },

  trustBadges: {
    marginTop: "1.5rem",
    display: "flex",
    flexDirection: "column" as const,
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

  confirmationContainer: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "6rem 2rem",
    textAlign: "center" as const,
  },

  confirmationIcon: {
    marginBottom: "1.5rem",
    display: "flex",
    justifyContent: "center",
  },

  confirmationTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "2.5rem",
    fontWeight: 400,
    marginBottom: "1rem",
  },

  confirmationText: {
    fontSize: "1.1rem",
    color: "#4A4540",
    marginBottom: "0.5rem",
    lineHeight: 1.6,
  },

  confirmationSubtext: {
    fontSize: "0.9rem",
    color: "#6B6660",
    marginBottom: "2rem",
  },

  confirmationDetails: {
    background: "white",
    padding: "1.5rem",
    border: "1px solid rgba(0,0,0,0.06)",
    marginBottom: "2rem",
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.8rem",
  },

  detailRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "0.9rem",
  },

  continueShoppingBtn: {
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
};