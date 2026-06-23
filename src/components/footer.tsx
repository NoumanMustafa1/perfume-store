import Link from "next/link";
import "./footer.css";

const SHOP_LINKS = [
  { href: "/shop", label: "All Perfumes" },
  { href: "/collections", label: "Collections" },
  { href: "/custom-perfume", label: "Custom Perfume" },
  { href: "/shop?filter=new", label: "New Arrivals" },
];

const CUSTOMER_LINKS = [
  { href: "/account", label: "My Account" },
  { href: "/account/register", label: "Create Account" },
  { href: "/about", label: "Our Story" },
  { href: "/contact#faq", label: "FAQ" },
];

const SOCIAL_LINKS = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://pinterest.com", label: "Pinterest" },
  { href: "https://tiktok.com", label: "TikTok" },
];

const MAIN_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/custom-perfume", label: "Custom Perfume" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/account", label: "Account" },
];

export default function Footer() {
  return (
    <footer className="footer-root">
      {/* Utility Bar */}
      <div className="footer-utility-bar">
        <span className="footer-utility-text">
          Free shipping on orders over $150
        </span>
        <Link href="/store-locator" className="footer-utility-link">
          Store locator
        </Link>
        <div className="footer-utility-sep" />
        <Link href="/" className="footer-utility-link">
          EN / USD
        </Link>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main-grid">
        {/* Brand */}
        <div className="footer-brand-col">
          <span className="footer-logo">NOIRÉ</span>
          <p className="footer-tagline">
            Handcrafted fragrances born from memory, worn with intention.
          </p>
          <div className="footer-hairline" />
          <p className="footer-address">
            12 Rue du Faubourg
            <br />
            Paris 75008
            <br />
            <br />
            Jumeirah Bay
            <br />
            Dubai
          </p>
        </div>

        {/* Shop Links */}
        <div className="footer-link-col">
          <p className="footer-col-heading">Shop</p>
          <div className="footer-col-links">
            {SHOP_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className="footer-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Customer */}
        <div className="footer-link-col">
          <p className="footer-col-heading">Customer</p>
          <div className="footer-col-links">
            {CUSTOMER_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className="footer-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Social */}
        <div className="footer-link-col">
          <p className="footer-col-heading">Follow</p>
          <div className="footer-col-links">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="footer-nav-row">
        {MAIN_LINKS.map((item) => (
          <Link key={item.href} href={item.href} className="footer-nav-link">
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Bottom */}
      <div className="footer-bottom-bar">
        <span className="footer-bottom-text">
          © 2026 NOIRÉ. All rights reserved.
        </span>
        <div className="footer-legal-links">
          <Link href="/privacy" className="footer-legal-link">
            Privacy Policy
          </Link>
          <div className="footer-utility-sep" />
          <Link href="/terms" className="footer-legal-link">
            Terms Of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}