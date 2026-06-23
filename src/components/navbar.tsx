"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShoppingBag,
  User,
  Search,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import "./navbar.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/custom-perfume", label: "Custom Perfume" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

interface NavbarProps {
  cartCount?: number;
}

export default function Navbar({ cartCount = 0 }: NavbarProps) {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="navbar-root">
      {/* Top Utility Bar */}
      <div className="navbar-utility-bar">
        <span className="navbar-utility-text">
          Free shipping on orders over $150
        </span>
        <Link href="/store-locator" className="navbar-utility-link">
          Store locator
        </Link>
        <div className="navbar-utility-sep" />
        <Link href="/" className="navbar-utility-link">
          EN / USD
        </Link>
      </div>

      {/* Main Navbar */}
      <div className="navbar-main-row">
        {/* Mobile menu button */}
        <button
          className="navbar-mobile-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Search */}
        <div className="navbar-search-wrap">
          <Search size={15} color="#B0ABA4" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search fragrances..."
            className="navbar-search-input"
          />
        </div>

        {/* Logo */}
        <Link href="/" className="navbar-logo">
          NOIRÉ
        </Link>

        {/* Actions */}
        <div className="navbar-actions">
          <Link href="/account" className="navbar-icon-btn">
            <User size={18} />
          </Link>
          <div className="navbar-action-sep" />
          <Link href="/cart" className="navbar-cart-btn">
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="navbar-badge">{cartCount}</span>
            )}
          </Link>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="navbar-nav-row">
        {NAV_LINKS.map(({ href, label }) => {
          const active = href === "/"
            ? pathname === "/"
            : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              className="navbar-nav-link"
              style={{
                color: active ? "#FAF8F4" : "#B0ABA4",
                borderBottomColor: active ? "#C9A96E" : "transparent",
              }}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav className="navbar-mobile-menu">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="navbar-mobile-link"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}