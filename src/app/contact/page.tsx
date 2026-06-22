import Head from "next/head";
import { CSSProperties } from "react";

export default function Contact() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main style={styles.root}>

        {/* Hero */}
        <section style={styles.hero}>
          <img
            src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=1400&q=80&auto=format&fit=crop"
            alt="Perfume atelier"
            style={styles.heroImg}
          />
          <div style={styles.overlay} />
          <div style={styles.heroContent}>
            <p style={styles.eyebrow}>NOIRÉ · Atelier</p>
            <h1 style={styles.heroTitle}>Get in Touch</h1>
            <p style={styles.heroText}>
              Every conversation begins with a single note.
            </p>
          </div>
        </section>

        {/* Two-column layout */}
        <section style={styles.section}>

          {/* Left — info */}
          <div style={styles.infoCol}>

            <p style={styles.sectionLabel}>Where to find us</p>

            <h2 style={styles.infoHeading}>
              The <em style={styles.em}>atelier</em> is always open
            </h2>

            <div style={styles.hairline} />

            <p style={styles.infoBody}>
              Whether you seek a bespoke consultation, a private sampling
              session, or simply wish to learn more about our craft — we welcome
              every inquiry with the same care we give to our fragrances.
            </p>

            <div style={styles.contactDetails}>
              {[
                { label: "Studio", value: "12 Rue du Faubourg, Paris 75008" },
                { label: "Boutique", value: "Jumeirah Bay, Dubai" },
                { label: "Email", value: "atelier@noire.com" },
                { label: "Hours", value: "Mon – Sat, 10 am – 7 pm" },
              ].map(({ label, value }) => (
                <div key={label} style={styles.detailRow}>
                  <span style={styles.detailLabel}>{label}</span>
                  <span style={styles.detailValue}>{value}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right — form */}
          <div style={styles.formCol}>

            <p style={styles.sectionLabel}>Send a message</p>

            <form style={styles.form}>

              <div style={styles.fieldGroup}>
                <label style={styles.label}>Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  style={styles.input}
                />
              </div>

              <div style={styles.fieldGroup}>
                <label style={styles.label}>Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  style={styles.input}
                />
              </div>

              <div style={styles.fieldGroup}>
                <label style={styles.label}>Subject</label>
                <select style={styles.select}>
                  <option value="">Select an inquiry</option>
                  <option>Bespoke Fragrance</option>
                  <option>Order Enquiry</option>
                  <option>Press &amp; Media</option>
                  <option>General</option>
                </select>
              </div>

              <div style={styles.fieldGroup}>
                <label style={styles.label}>Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your inquiry…"
                  style={styles.textarea}
                />
              </div>

              <button style={styles.button}>
                Send Message
              </button>

            </form>

          </div>

        </section>

        {/* Bottom strip */}
        <div style={styles.strip}>
          {[
            { num: "24h", label: "Response time" },
            { num: "2", label: "Global ateliers" },
            { num: "12+", label: "Years of craft" },
          ].map(({ num, label }) => (
            <div key={label} style={styles.stripItem}>
              <span style={styles.stripNum}>{num}</span>
              <span style={styles.stripLabel}>{label}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer style={styles.footer}>
          <span style={styles.footerLogo}>NOIRÉ</span>
          <span style={styles.footerText}>Luxury fragrances · Since 2017</span>
        </footer>

      </main>
    </>
  );
}

const styles: Record<string, CSSProperties> = {

  root: {
    background: "#FAF8F4",
    minHeight: "100vh",
    color: "#1C1A17",
    fontFamily: "'Jost', sans-serif",
  },

  // ── Hero ──────────────────────────────────────────────
  hero: {
    height: 420,
    position: "relative",
    overflow: "hidden",
  },
  heroImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center 40%",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, rgba(0,0,0,.15), rgba(250,248,244,.95))",
  },
  heroContent: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    textAlign: "center",
  },
  eyebrow: {
    fontSize: "0.7rem",
    letterSpacing: ".25em",
    textTransform: "uppercase",
    color: "#9C8B6E",
  },
  heroTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "3rem",
    fontStyle: "italic",
    fontWeight: 400,
    margin: "10px 0",
  },
  heroText: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.2rem",
    color: "#4A4540",
  },

  // ── Two-column section ────────────────────────────────
  section: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
    padding: "5rem 4rem",
    maxWidth: 1100,
    margin: "0 auto",
  },

  // ── Left info column ──────────────────────────────────
  infoCol: {
    paddingTop: "0.5rem",
  },
  sectionLabel: {
    fontSize: "0.65rem",
    letterSpacing: ".25em",
    textTransform: "uppercase",
    color: "#9C8B6E",
    marginBottom: "1.2rem",
  },
  infoHeading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "2rem",
    fontWeight: 400,
    lineHeight: 1.3,
    marginBottom: "1.2rem",
  },
  em: {
    fontStyle: "italic",
    color: "#7A6A52",
  },
  hairline: {
    width: 40,
    height: "0.5px",
    background: "#C8B99A",
    margin: "1.5rem 0",
  },
  infoBody: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.1rem",
    lineHeight: 1.85,
    color: "#4A4540",
    fontWeight: 300,
    marginBottom: "2.5rem",
  },
  contactDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  detailRow: {
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
    paddingBottom: "1rem",
    borderBottom: "0.5px solid #E4DDD4",
  },
  detailLabel: {
    fontSize: "0.62rem",
    letterSpacing: ".2em",
    textTransform: "uppercase",
    color: "#9C8B6E",
  },
  detailValue: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.05rem",
    color: "#1C1A17",
  },

  // ── Right form column ─────────────────────────────────
  formCol: {
    paddingTop: "0.5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    marginTop: "1.2rem",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  },
  label: {
    fontSize: "0.65rem",
    letterSpacing: ".15em",
    textTransform: "uppercase",
    color: "#6B6660",
  },
  input: {
    padding: "14px",
    border: "1px solid #D8D0C5",
    outline: "none",
    fontFamily: "'Jost', sans-serif",
    fontSize: "0.9rem",
    background: "#FAF8F4",
    color: "#1C1A17",
  },
  select: {
    padding: "14px",
    border: "1px solid #D8D0C5",
    outline: "none",
    fontFamily: "'Jost', sans-serif",
    fontSize: "0.9rem",
    background: "#FAF8F4",
    color: "#1C1A17",
    appearance: "none",
    cursor: "pointer",
  },
  textarea: {
    padding: "14px",
    border: "1px solid #D8D0C5",
    outline: "none",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1rem",
    background: "#FAF8F4",
    color: "#1C1A17",
    resize: "vertical",
    lineHeight: 1.7,
  },
  button: {
    marginTop: "0.5rem",
    padding: "15px",
    background: "#1C1A17",
    color: "#FAF8F4",
    border: "none",
    letterSpacing: ".2em",
    textTransform: "uppercase",
    fontSize: "0.7rem",
    cursor: "pointer",
    fontFamily: "'Jost', sans-serif",
  },

  // ── Stats strip ───────────────────────────────────────
  strip: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1px",
    background: "#E4DDD4",
    border: "1px solid #E4DDD4",
    margin: "0 2.5rem 4rem",
  },
  stripItem: {
    background: "#FAF8F4",
    padding: "2rem 1.5rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  },
  stripNum: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "2.2rem",
    fontStyle: "italic",
    color: "#9C8B6E",
  },
  stripLabel: {
    fontSize: "0.65rem",
    letterSpacing: ".15em",
    textTransform: "uppercase",
    color: "#6B6660",
  },

  // ── Footer ────────────────────────────────────────────
  footer: {
    background: "#1C1A17",
    padding: "2rem 2.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#FAF8F4",
  },
  footerLogo: {
    fontFamily: "'Playfair Display', serif",
    fontStyle: "italic",
    letterSpacing: ".2em",
  },
  footerText: {
    fontSize: ".7rem",
    letterSpacing: ".15em",
    textTransform: "uppercase",
    color: "#6B6660",
  },
};