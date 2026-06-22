"use client";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Sparkles,
  Droplets,
  Flower2,
  Wind,
  Sun,
  Moon,
  Star,
  ArrowRight,
  Check,
  Shield,
  Clock,
  Gift,
} from "lucide-react";
import "./custom.css";

export default function CustomPerfume() {
  const [selectedNotes, setSelectedNotes] = useState({
    top: "",
    heart: "",
    base: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    occasion: "",
    character: "",
    message: "",
  });

  const topNotes = [
    { value: "bergamot", label: "Bergamot", desc: "Fresh, citrusy, uplifting" },
    { value: "mandarin", label: "Mandarin", desc: "Sweet, bright, cheerful" },
    { value: "pink-pepper", label: "Pink Pepper", desc: "Spicy, vibrant, modern" },
    { value: "neroli", label: "Neroli", desc: "Floral, honeyed, luminous" },
  ];

  const heartNotes = [
    { value: "rose-de-mai", label: "Rose de Mai", desc: "Velvet, romantic, timeless" },
    { value: "jasmine", label: "Jasmine", desc: "Sensual, narcotic, lush" },
    { value: "iris", label: "Iris", desc: "Powdery, elegant, sophisticated" },
    { value: "ylang-ylang", label: "Ylang Ylang", desc: "Exotic, sweet, intoxicating" },
  ];

  const baseNotes = [
    { value: "oud", label: "Oud", desc: "Woody, intense, mysterious" },
    { value: "amber", label: "Amber", desc: "Warm, resinous, enveloping" },
    { value: "sandalwood", label: "Sandalwood", desc: "Creamy, soft, meditative" },
    { value: "vanilla", label: "Vanilla", desc: "Sweet, comforting, addictive" },
  ];

  const occasions = [
    "Daily Signature",
    "Evening & Events",
    "Wedding",
    "Gift",
    "Special Collection",
    "Other",
  ];

  const characters = [
    "Bold & Confident",
    "Elegant & Refined",
    "Mysterious & Intriguing",
    "Fresh & Energetic",
    "Warm & Comforting",
    "Romantic & Sensual",
  ];

  const allSelected = selectedNotes.top && selectedNotes.heart && selectedNotes.base;

  const handleNoteSelect = (category: "top" | "heart" | "base", value: string) => {
    setSelectedNotes((prev) => ({ ...prev, [category]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ selectedNotes, formData });
    alert("Thank you! Our perfumer will contact you within 48 hours to begin your bespoke creation.");
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="custom-page">
        {/* ============ HERO ============ */}
        <section className="custom-hero">
          <div className="custom-overlay" />
          <div className="custom-content">
            <p className="eyebrow">Bespoke Perfumery</p>
            <h1>
              Create Your <em>Signature</em>
            </h1>
            <p>
              Compose a fragrance that is unmistakably yours — guided by our
              master perfumers, crafted from the world's rarest ingredients.
            </p>
            <div className="hero-cta">
              <a href="#creator" className="btn-gold">
                Begin Your Creation
              </a>
              <a href="#process" className="btn-ghost">
                How It Works
              </a>
            </div>
          </div>
          <div className="scroll-hint">
            <span className="scroll-line" />
            <span>Scroll</span>
          </div>
        </section>

        {/* ============ HOW IT WORKS ============ */}
        <section id="process" className="process">
          <div className="process-header">
            <p className="eyebrow-dark">The Journey</p>
            <h2>
              How Your <em>Signature</em> Scent Is Born
            </h2>
            <div className="divider" />
          </div>

          <div className="process-grid">
            {[
              {
                step: "01",
                icon: <Sparkles size={28} />,
                title: "Consultation",
                text: "Share your story, preferences, and the emotions you want your fragrance to evoke.",
              },
              {
                step: "02",
                icon: <Droplets size={28} />,
                title: "Composition",
                text: "Our master perfumer selects and blends rare ingredients to match your vision.",
              },
              {
                step: "03",
                icon: <Clock size={28} />,
                title: "Refinement",
                text: "You receive samples to wear and refine. We adjust until it is perfect.",
              },
              {
                step: "04",
                icon: <Gift size={28} />,
                title: "Delivery",
                text: "Your signature scent is bottled, engraved, and delivered in a bespoke coffret.",
              },
            ].map((item) => (
              <div key={item.step} className="process-card">
                <div className="process-step">{item.step}</div>
                <div className="process-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ CREATOR ============ */}
        <section id="creator" className="creator">
          <div className="creator-header">
            <p className="eyebrow-dark">The Creator</p>
            <h2>
              Compose Your <em>Fragrance</em>
            </h2>
            <p className="creator-subtitle">
              Select one note from each layer to define your unique olfactory
              signature
            </p>
            <div className="divider" />
          </div>

          {/* Note Pyramid Visualization */}
          <div className="pyramid">
            <div className="pyramid-level pyramid-top">
              <span className="pyramid-label">Top Notes</span>
              <span className="pyramid-desc">First impression · Evaporates quickly</span>
              {selectedNotes.top && (
                <span className="pyramid-selected">
                  {topNotes.find((n) => n.value === selectedNotes.top)?.label}
                </span>
              )}
            </div>
            <div className="pyramid-level pyramid-heart">
              <span className="pyramid-label">Heart Notes</span>
              <span className="pyramid-desc">The soul · Lasts 2-4 hours</span>
              {selectedNotes.heart && (
                <span className="pyramid-selected">
                  {heartNotes.find((n) => n.value === selectedNotes.heart)?.label}
                </span>
              )}
            </div>
            <div className="pyramid-level pyramid-base">
              <span className="pyramid-label">Base Notes</span>
              <span className="pyramid-desc">Foundation · Lingers all day</span>
              {selectedNotes.base && (
                <span className="pyramid-selected">
                  {baseNotes.find((n) => n.value === selectedNotes.base)?.label}
                </span>
              )}
            </div>
          </div>

          {/* Note Selection Grids */}
          <div className="notes-section">
            <h3 className="notes-section-title">
              <Wind size={20} /> Top Notes
            </h3>
            <div className="notes-grid">
              {topNotes.map((note) => (
                <button
                  key={note.value}
                  onClick={() => handleNoteSelect("top", note.value)}
                  className={`note-box ${
                    selectedNotes.top === note.value ? "selected" : ""
                  }`}
                >
                  <span className="note-icon">
                    <Sun size={32} />
                  </span>
                  <h4>{note.label}</h4>
                  <p>{note.desc}</p>
                  {selectedNotes.top === note.value && (
                    <span className="check-mark">
                      <Check size={18} />
                    </span>
                  )}
                </button>
              ))}
            </div>

            <h3 className="notes-section-title">
              <Flower2 size={20} /> Heart Notes
            </h3>
            <div className="notes-grid">
              {heartNotes.map((note) => (
                <button
                  key={note.value}
                  onClick={() => handleNoteSelect("heart", note.value)}
                  className={`note-box ${
                    selectedNotes.heart === note.value ? "selected" : ""
                  }`}
                >
                  <span className="note-icon">
                    <Flower2 size={32} />
                  </span>
                  <h4>{note.label}</h4>
                  <p>{note.desc}</p>
                  {selectedNotes.heart === note.value && (
                    <span className="check-mark">
                      <Check size={18} />
                    </span>
                  )}
                </button>
              ))}
            </div>

            <h3 className="notes-section-title">
              <Moon size={20} /> Base Notes
            </h3>
            <div className="notes-grid">
              {baseNotes.map((note) => (
                <button
                  key={note.value}
                  onClick={() => handleNoteSelect("base", note.value)}
                  className={`note-box ${
                    selectedNotes.base === note.value ? "selected" : ""
                  }`}
                >
                  <span className="note-icon">
                    <Moon size={32} />
                  </span>
                  <h4>{note.label}</h4>
                  <p>{note.desc}</p>
                  {selectedNotes.base === note.value && (
                    <span className="check-mark">
                      <Check size={18} />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Preview */}
          {allSelected && (
            <div className="preview">
              <div className="preview-header">
                <Star size={20} />
                <h2>Your Composition</h2>
                <div className="divider" />
              </div>

              <div className="preview-grid">
                <div className="preview-item">
                  <label>Top</label>
                  <p>{topNotes.find((n) => n.value === selectedNotes.top)?.label}</p>
                </div>
                <div className="preview-item">
                  <label>Heart</label>
                  <p>{heartNotes.find((n) => n.value === selectedNotes.heart)?.label}</p>
                </div>
                <div className="preview-item">
                  <label>Base</label>
                  <p>{baseNotes.find((n) => n.value === selectedNotes.base)?.label}</p>
                </div>
              </div>

              <p className="preview-description">
                A{" "}
                {topNotes.find((n) => n.value === selectedNotes.top)?.desc.toLowerCase()}{" "}
                opening reveals a{" "}
                {heartNotes.find((n) => n.value === selectedNotes.heart)?.desc.toLowerCase()}{" "}
                heart, resting on a{" "}
                {baseNotes.find((n) => n.value === selectedNotes.base)?.desc.toLowerCase()}{" "}
                foundation.
              </p>

              <a href="#details" className="btn-gold">
                Continue to Personalize
                <ArrowRight size={16} />
              </a>
            </div>
          )}
        </section>

        {/* ============ DETAILS FORM ============ */}
        {allSelected && (
          <section id="details" className="details">
            <div className="details-header">
              <p className="eyebrow-dark">Personalize</p>
              <h2>
                Tell Us About <em>Your Vision</em>
              </h2>
              <p className="details-subtitle">
                Help our perfumer understand exactly what you're looking for
              </p>
              <div className="divider" />
            </div>

            <form onSubmit={handleSubmit} className="details-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Charlotte Dubois"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="charlotte@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Occasion</label>
                  <select
                    value={formData.occasion}
                    onChange={(e) =>
                      setFormData({ ...formData, occasion: e.target.value })
                    }
                    required
                  >
                    <option value="">Select occasion...</option>
                    {occasions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Desired Character</label>
                  <select
                    value={formData.character}
                    onChange={(e) =>
                      setFormData({ ...formData, character: e.target.value })
                    }
                    required
                  >
                    <option value="">Select character...</option>
                    {characters.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group full">
                <label>Additional Notes for the Perfumer</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about scents you love, memories you want to capture, or anything else that will help us create your perfect fragrance..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button type="submit" className="btn-gold submit-btn">
                Submit Your Creation
                <ArrowRight size={16} />
              </button>

              <p className="form-note">
                Our perfumer will personally contact you within 48 hours to
                begin the creation process.
              </p>
            </form>
          </section>
        )}

        {/* ============ ATELIER ============ */}
        <section className="atelier">
          <div className="atelier-content">
            <div className="atelier-text">
              <p className="eyebrow">The Atelier</p>
              <h2>
                Where <em>Magic</em> Happens
              </h2>
              <p>
                In our Paris atelier, master perfumers work with over 2,000 raw
                materials, composing each bespoke fragrance entirely by hand.
                Every creation is a dialogue between your story and their
                expertise.
              </p>
              <div className="atelier-stats">
                <div className="stat">
                  <span>2,000+</span>
                  <label>Raw Materials</label>
                </div>
                <div className="stat">
                  <span>6-8</span>
                  <label>Weeks Creation</label>
                </div>
                <div className="stat">
                  <span>100%</span>
                  <label>Handcrafted</label>
                </div>
              </div>
              <Link href="/about" className="btn-outline-light">
                Visit the Atelier
              </Link>
            </div>
            <div className="atelier-image">
              <img
                src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80"
                alt="Noiré Atelier"
              />
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIALS ============ */}
        <section className="bespoke-testimonials">
          <div className="process-header">
            <p className="eyebrow-dark">Bespoke Stories</p>
            <h2>
              Creations <em>Brought to Life</em>
            </h2>
            <div className="divider" />
          </div>

          <div className="bespoke-grid">
            {[
              {
                quote:
                  "My bespoke scent captured our wedding day in a bottle. Every time I wear it, I'm back in that moment.",
                name: "Sophie L.",
                occasion: "Wedding Fragrance",
              },
              {
                quote:
                  "The perfumer understood exactly what I wanted before I could even articulate it. Pure artistry.",
                name: "Marcus R.",
                occasion: "Signature Scent",
              },
              {
                quote:
                  "I had a fragrance created for my mother's 70th. She wept when she smelled it. That is the power of bespoke.",
                name: "Elena V.",
                occasion: "Gift Creation",
              },
            ].map((item) => (
              <div key={item.name} className="bespoke-card">
                <div className="quote-mark">"</div>
                <p>{item.quote}</p>
                <div className="bespoke-divider" />
                <strong>{item.name}</strong>
                <span>{item.occasion}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="faq">
          <div className="process-header">
            <p className="eyebrow-dark">Questions</p>
            <h2>
              Frequently <em>Asked</em>
            </h2>
            <div className="divider" />
          </div>

          <div className="faq-grid">
            {[
              {
                q: "How long does the process take?",
                a: "From initial consultation to final delivery, the bespoke process typically takes 6-8 weeks. This includes sample creation, your feedback, and final refinement.",
              },
              {
                q: "What is the cost of a bespoke fragrance?",
                a: "Bespoke creations start at $1,200, which includes the consultation, sample iterations, and your final 100ml bottle in a custom coffret. Additional bottles can be ordered.",
              },
              {
                q: "Can I reorder my bespoke scent?",
                a: "Absolutely. We keep your formula on file, and you can reorder at any time. Many clients order annually or for special occasions.",
              },
              {
                q: "Do you ship internationally?",
                a: "Yes, we ship worldwide. Our bespoke fragrances are carefully packaged and shipped with full insurance and tracking.",
              },
            ].map((item) => (
              <div key={item.q} className="faq-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}