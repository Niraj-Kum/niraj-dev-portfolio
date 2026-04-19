/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useTheme } from "@mui/material";
import "./Contact.css";

const Contact = ({ sectionRef, id, ...props }: any) => {
  const theme = useTheme();
  const mode = theme.palette.mode || "dark";
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      {...props}
      className={`contact-section contact--${mode} ${props.className || ""}`}
    >
      {/* ── Hero heading ── */}
      <div className="con-hero">
        <div className="con-label">GET IN TOUCH</div>
        <h2 className="con-big-title">
          Let's build<br />something.
        </h2>
        <p className="con-tagline">
          Senior engineering roles · AI/backend consulting · ambitious products
        </p>

        {/* Inline contact links */}
        <div className="con-links-row">
          <a
            className="con-link"
            href="mailto:nirajkum165@gmail.com"
          >
            Email
          </a>
          <span className="con-link-sep">·</span>
          <a
            className="con-link"
            href="https://linkedin.com/in/niraj-kumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span className="con-link-sep">·</span>
          <a
            className="con-link"
            href="https://github.com/Niraj-Kum"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* ── Minimal form ── */}
      <form className="con-form" onSubmit={handleSubmit}>
        <div className="con-field-row">
          <div className="con-field">
            <label className="con-field-label">YOUR NAME</label>
            <input type="text" className="con-input" placeholder="Jane Smith" required />
          </div>
          <div className="con-field">
            <label className="con-field-label">EMAIL</label>
            <input type="email" className="con-input" placeholder="jane@company.com" required />
          </div>
        </div>

        <div className="con-field">
          <label className="con-field-label">WHAT ARE YOU BUILDING?</label>
          <textarea className="con-textarea" placeholder="Tell me about your project or role..." required />
        </div>

        {!formSubmitted ? (
          <button type="submit" className="con-submit-btn">Send Message →</button>
        ) : (
          <div className="con-success-msg">Thanks — I'll be in touch soon.</div>
        )}
      </form>

      {/* ── Footer ── */}
      <footer className="con-footer">
        <div className="con-footer-name">NIRAJ KUMAR</div>
        <div className="con-footer-info">Bangalore, India · 2025</div>
      </footer>
    </section>
  );
};

export default Contact;
