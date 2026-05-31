"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const timelineOptions = [
  "Immediately",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Just exploring",
];

const budgetOptions = [
  "Under ₦500,000",
  "₦500,000 – ₦1,000,000",
  "₦1,000,000 – ₦5,000,000",
  "₦5,000,000+",
  "Not sure yet",
];

const services = [
  "Website Design & Development",
  "Digital Marketing",
  "Brand Identity",
  "SEO & Content Strategy",
  "E-commerce",
  "Mobile App",
];

export default function RequestQuotePage() {
  const [form, setForm] = useState({
    project: "",
    timeline: "",
    budget: "",
    fullName: "",
    email: "",
    phone: "",
    company: "",
    contactMethod: "",
    role: "",
    services: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleService = (s: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter((x) => x !== s)
        : [...prev.services, s],
    }));
  };

  const handleSubmit = async (
  e: React.MouseEvent<HTMLButtonElement>
) => {
  e.preventDefault();

  if (!form.fullName.trim()) {
    alert("Please enter your full name.");
    return;
  }

  if (!form.email.trim()) {
    alert("Please enter your email address.");
    return;
  }

  if (!form.project.trim()) {
    alert("Please describe your project.");
    return;
  }

  setLoading(true);

  try {
    const response = await fetch("/api/request-quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      setSubmitted(true);

      setForm({
        project: "",
        timeline: "",
        budget: "",
        fullName: "",
        email: "",
        phone: "",
        company: "",
        contactMethod: "",
        role: "",
        services: [],
      });
    } else {
      alert(data.error || "Failed to submit request.");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <Navbar />

      <main style={{ background: "#f9fafb", fontFamily: "var(--font-poppins), sans-serif" }}>

        {/* HERO */}
        <section className="bg-black pt-44 pb-32 text-white relative">
          <div className="absolute inset-0 bg-orange-500/10"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <span className="text-orange-500 uppercase tracking-[4px] font-semibold">
              Request a Quote
            </span>

            <h1 className="text-5xl md:text-7xl font-black mt-6 mb-8">
              Building Digital Foundations For Growth
            </h1>

            <p className="max-w-4xl mx-auto text-white text-xl leading-9">
              Tell us about your project and we will get back within 24hrs with a tailored proposal
            </p>
          </div>
        </section>

        {/* ── BODY ── */}
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "56px 32px 72px",
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          gap: "36px",
          alignItems: "start",
        }}
          className="body-grid"
        >

          {/* ── SIDEBAR ── */}
          <aside style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            {/* Steps */}
            <div style={{
              background: "#ffffff",
              borderRadius: "12px",
              padding: "28px 24px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            }}>
              <p style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                color: "#f97316",
                margin: "0 0 6px",
              }}>Process</p>
              <h3 style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "#111827",
                margin: "0 0 22px",
              }}>What happens next?</h3>
              <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "18px" }}>
                {[
                  "We review your submission within 24 hrs",
                  "A team member contacts you to clarify details",
                  "We prepare and share a custom cost estimate",
                  "We schedule a discovery call or meeting",
                ].map((step, i) => (
                  <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{
                      background: "#f97316",
                      color: "#fff",
                      borderRadius: "5px",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      padding: "2px 7px",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}>0{i + 1}</span>
                    <span style={{ fontSize: "0.855rem", color: "#4b5563", lineHeight: 1.5 }}>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Stats */}
            {[
              { stat: "10+", label: "Years delivering digital excellence in Nigeria" },
              { stat: "200+", label: "Projects successfully delivered" },
            ].map(({ stat, label }) => (
              <div key={stat} style={{
                background: "#111827",
                borderRadius: "12px",
                padding: "24px",
                border: "1px solid #1f2937",
                textAlign: "center",
              }}>
                <div style={{
                  fontSize: "2.8rem",
                  fontWeight: 800,
                  color: "#f97316",
                  lineHeight: 1,
                  marginBottom: "10px",
                }}>{stat}</div>
                <p style={{ fontSize: "0.82rem", color: "#9ca3af", margin: 0, lineHeight: 1.5 }}>{label}</p>
              </div>
            ))}
          </aside>

          {/* ── FORM ── */}
          <div>
            {submitted ? (
              <div style={{
                background: "#fff",
                borderRadius: "14px",
                padding: "72px 40px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                textAlign: "center",
              }}>
                <div style={{
                  width: "68px", height: "68px",
                  background: "#f97316",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                  color: "#fff",
                  margin: "0 auto 24px",
                }}>✓</div>
                <h2 style={{ fontSize: "1.8rem", color: "#111827", margin: "0 0 12px", fontWeight: 700 }}>
                  Request Received!
                </h2>
                <p style={{ color: "#6b7280", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "380px", margin: "0 auto 32px" }}>
                  We&rsquo;ll review your project details and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    padding: "11px 28px",
                    border: "2px solid #f97316",
                    background: "transparent",
                    color: "#f97316",
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "var(--font-poppins), sans-serif",
                  }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <div style={{
                background: "#ffffff",
                borderRadius: "14px",
                padding: "40px 40px 44px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
              }}>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#111827", margin: "0 0 4px", letterSpacing: "-0.3px" }}>
                  Start a Project
                </h2>
                <p style={{ fontSize: "0.875rem", color: "#6b7280", margin: "0 0 32px" }}>
                  Fill out the form below and we&rsquo;ll get started.
                </p>

                {/* Services */}
                <div style={{ marginBottom: "28px" }}>
                  <p style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.2px", color: "#6b7280", margin: "0 0 12px" }}>
                    Services you&rsquo;re interested in
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleService(s)}
                        style={{
                          padding: "8px 16px",
                          borderRadius: "999px",
                          border: form.services.includes(s) ? "2px solid #f97316" : "1.5px solid #e5e7eb",
                          background: form.services.includes(s) ? "#f97316" : "transparent",
                          color: form.services.includes(s) ? "#fff" : "#4b5563",
                          fontSize: "0.82rem",
                          fontWeight: form.services.includes(s) ? 600 : 400,
                          cursor: "pointer",
                          transition: "all 0.15s",
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project description */}
                <Field label="Describe your project *">
                  <textarea
                    name="project"
                    rows={4}
                    placeholder="Give us an overview of what you need..."
                    value={form.project}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </Field>

                {/* Timeline & Budget */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px", marginBottom: "18px" }}>
                  <Field label="When to begin?">
                    <select name="timeline" value={form.timeline} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                      <option value="" disabled>Select timeline</option>
                      {timelineOptions.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </Field>
                  <Field label="Budget range">
                    <select name="budget" value={form.budget} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                      <option value="" disabled>Select budget</option>
                      {budgetOptions.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </Field>
                </div>

                {/* Divider */}
                <div style={{ borderTop: "1px solid #f3f4f6", margin: "8px 0 24px" }} />
                <p style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.2px", color: "#6b7280", margin: "0 0 18px" }}>
                  Your Details
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px", marginBottom: "18px" }}>
                  <Field label="Full Name *">
                    <input name="fullName" type="text" placeholder="John Doe" value={form.fullName} onChange={handleChange} style={inputStyle} />
                  </Field>
                  <Field label="Job Title / Role">
                    <input name="role" type="text" placeholder="CEO, Marketing Manager..." value={form.role} onChange={handleChange} style={inputStyle} />
                  </Field>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px", marginBottom: "18px" }}>
                  <Field label="Email Address *">
                    <input name="email" type="email" placeholder="you@company.com" value={form.email} onChange={handleChange} style={inputStyle} />
                  </Field>
                  <Field label="Phone Number">
                    <input name="phone" type="tel" placeholder="+234 800 000 0000" value={form.phone} onChange={handleChange} style={inputStyle} />
                  </Field>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px", marginBottom: "28px" }}>
                  <Field label="Company Name">
                    <input name="company" type="text" placeholder="Your company" value={form.company} onChange={handleChange} style={inputStyle} />
                  </Field>
                  <Field label="Preferred Contact">
                    <input name="contactMethod" type="text" placeholder="Phone / Email / WhatsApp" value={form.contactMethod} onChange={handleChange} style={inputStyle} />
                  </Field>
                </div>

                <button
                  onClick={handleSubmit}
                  style={{
                    width: "100%",
                    padding: "15px 24px",
                    background: "#f97316",
                    color: "#fff",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    letterSpacing: "0.3px",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    fontFamily: "var(--font-poppins), sans-serif",
                  }}
                >
                  Submit Request <span style={{ fontSize: "1.1rem" }}>→</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ── TESTIMONIALS ── */}
        <div style={{ background: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <Testimonials />
        </div>
      </main>

      <Footer />

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 860px) {
          .body-grid {
            grid-template-columns: 1fr !important;
            padding: 36px 20px 56px !important;
          }
        }
        input:focus, textarea:focus, select:focus {
          outline: none;
          border-color: #f97316 !important;
          box-shadow: 0 0 0 3px rgba(249,115,22,0.12);
        }
        textarea { resize: vertical; }
        select { appearance: none; }
      `}</style>
    </>
  );
}

/* ── Helper components ── */
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "7px", marginBottom: "18px" }}>
      <label style={{
        fontSize: "0.72rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "1px",
        color: "#6b7280",
        fontFamily: "var(--font-poppins), sans-serif",
      }}>
        {label}
      </label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "11px 14px",
  border: "1.5px solid #e5e7eb",
  borderRadius: "8px",
  fontSize: "0.875rem",
  color: "#111827",
  background: "#fff",
  width: "100%",
  boxSizing: "border-box",
  fontFamily: "var(--font-poppins), sans-serif",
  transition: "border-color 0.15s",
};
