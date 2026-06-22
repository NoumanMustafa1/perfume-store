"use client";

import { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";

interface ProductActionsProps {
  product: {
    id: number;
    name: string;
    price: number;
  };
}

export default function ProductActions({ product }: ProductActionsProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    // Here you would add the product to your cart state/context
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {/* Quantity */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <span style={{ fontSize: "0.85rem", color: "#6B6660" }}>Quantity:</span>
        <div style={{ display: "flex", border: "1px solid rgba(0,0,0,0.12)" }}>
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            style={{
              padding: "0.6rem 0.8rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              color: "#1C1A17",
            }}
          >
            −
          </button>
          <span
            style={{
              padding: "0.6rem 1.2rem",
              borderLeft: "1px solid rgba(0,0,0,0.12)",
              borderRight: "1px solid rgba(0,0,0,0.12)",
              fontSize: "0.9rem",
            }}
          >
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(Math.min(10, quantity + 1))}
            style={{
              padding: "0.6rem 0.8rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              color: "#1C1A17",
            }}
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.8rem",
          width: "100%",
          padding: "1.1rem 2rem",
          background: added ? "#4CAF50" : "#C9A96E",
          color: "#1C1A17",
          border: "none",
          fontSize: "0.85rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          fontWeight: 500,
          cursor: "pointer",
          fontFamily: "'Jost', sans-serif",
          transition: "background 0.3s ease",
        }}
      >
        {added ? (
          <>
            <Check size={18} />
            Added to Cart
          </>
        ) : (
          <>
            <ShoppingBag size={18} />
            Add to Cart — ${(product.price * quantity).toFixed(2)}
          </>
        )}
      </button>

      {/* Buy Now */}
      <button
        style={{
          width: "100%",
          padding: "1.1rem 2rem",
          background: "#1C1A17",
          color: "#FAF8F4",
          border: "none",
          fontSize: "0.85rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          fontWeight: 500,
          cursor: "pointer",
          fontFamily: "'Jost', sans-serif",
        }}
      >
        Buy Now
      </button>
    </div>
  );
}