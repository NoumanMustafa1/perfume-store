import "./contact.css";

export default function Contact() {
  return (
    <main className="contact-root">
      {/* Hero */}
      <section className="contact-hero">
        <img
          src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=1400&q=80&auto=format&fit=crop"
          alt="Perfume atelier"
          className="contact-hero-img"
        />
        <div className="contact-overlay" />
        <div className="contact-hero-content">
          <p className="contact-eyebrow">NOIRÉ · Atelier</p>
          <h1 className="contact-hero-title">Get in Touch</h1>
          <p className="contact-hero-text">
            Every conversation begins with a single note.
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="contact-section">
        {/* Left — info */}
        <div className="contact-info-col">
          <p className="contact-section-label">Where to find us</p>
          <h2 className="contact-info-heading">
            The <em className="contact-em">atelier</em> is always open
          </h2>
          <div className="contact-hairline" />
          <p className="contact-info-body">
            Whether you seek a bespoke consultation, a private sampling
            session, or simply wish to learn more about our craft — we welcome
            every inquiry with the same care we give to our fragrances.
          </p>
          <div className="contact-details">
            {[
              { label: "Studio", value: "12 Rue du Faubourg, Paris 75008" },
              { label: "Boutique", value: "Jumeirah Bay, Dubai" },
              { label: "Email", value: "atelier@noire.com" },
              { label: "Hours", value: "Mon – Sat, 10 am – 7 pm" },
            ].map(({ label, value }) => (
              <div key={label} className="contact-detail-row">
                <span className="contact-detail-label">{label}</span>
                <span className="contact-detail-value">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="contact-form-col">
          <p className="contact-section-label">Send a message</p>
          <form className="contact-form">
            <div className="contact-field-group">
              <label className="contact-label">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="contact-input"
              />
            </div>
            <div className="contact-field-group">
              <label className="contact-label">Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="contact-input"
              />
            </div>
            <div className="contact-field-group">
              <label className="contact-label">Subject</label>
              <select className="contact-select">
                <option value="">Select an inquiry</option>
                <option>Bespoke Fragrance</option>
                <option>Order Enquiry</option>
                <option>Press &amp; Media</option>
                <option>General</option>
              </select>
            </div>
            <div className="contact-field-group">
              <label className="contact-label">Message</label>
              <textarea
                rows={5}
                placeholder="Tell us about your inquiry…"
                className="contact-textarea"
              />
            </div>
            <button className="contact-button">Send Message</button>
          </form>
        </div>
      </section>

      {/* Stats strip */}
      <div className="contact-strip">
        {[
          { num: "24h", label: "Response time" },
          { num: "2", label: "Global ateliers" },
          { num: "12+", label: "Years of craft" },
        ].map(({ num, label }) => (
          <div key={label} className="contact-strip-item">
            <span className="contact-strip-num">{num}</span>
            <span className="contact-strip-label">{label}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="contact-footer">
        <span className="contact-footer-logo">NOIRÉ</span>
        <span className="contact-footer-text">Luxury fragrances · Since 2017</span>
      </footer>
    </main>
  );
}