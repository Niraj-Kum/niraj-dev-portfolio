/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTheme } from "@mui/material";
import "./Details.css";

const skillData = [
  { label: "Frontend",       tags: ["React", "TypeScript", "Dashboards", "Admin Panels"] },
  { label: "Backend",        tags: ["Java 21", "Spring Boot", "Python", "FastAPI", "REST APIs"] },
  { label: "AI & ML",        tags: ["RAG", "LangChain", "Gemini", "GPT-4o", "Qdrant", "Weaviate"] },
  { label: "Messaging",      tags: ["Kafka KRaft", "Redis", "Async Pipelines"] },
  { label: "Infrastructure", tags: ["Kubernetes", "Helm", "Docker", "GCP", "AWS"] },
  { label: "DevOps",         tags: ["Jenkins CI/CD", "HPA", "Prometheus", "Keycloak OAuth 2.0"] },
];

const experienceData = [
  {
    company: "OC Academy",
    role:    "Senior Software Engineer — Backend",
    period:  "Nov 2024–Present · Bangalore",
    tags:    ["RAG Pipeline", "Keycloak OAuth", "67% API improvement", "Multi-cloud CI/CD"],
  },
  {
    company: "Philips Healthcare",
    role:    "Software Development Engineer",
    period:  "Aug 2021–Oct 2024 · Bangalore",
    tags:    ["Remote Mgmt Platform", "20+ medical devices", "Java 8→17 migration", "HSDP Cloud"],
  },
  {
    company: "Ingenuity Gaming",
    role:    "Game Developer",
    period:  "Feb 2019–Apr 2020 · Noida",
    tags:    ["TypeScript", "Phaser.js", "5+ platforms"],
  },
];

const educationData = [
  { company: "Chandigarh University",        role: "M.E. — Computer Science", period: "2020–2022" },
  { company: "Chandigarh Engineering College", role: "B.Tech — Computer Science", period: "2015–2019" },
];

const Details = ({ sectionRef, id, ...props }: any) => {
  const theme = useTheme();
  const mode = theme.palette.mode || "dark";

  return (
    <section
      ref={sectionRef}
      id={id}
      {...props}
      className={`details-section details--${mode} ${props.className || ""}`}
    >
      <div className="det-label">BACKGROUND</div>

      {/* ── Intro split ── */}
      <div className="det-intro-split">
        <div className="det-intro-left">
          <h2 className="det-hi-heading">
            Hi, I'm<br />Niraj.
          </h2>
          <div className="det-intro-bio">
            <p>
              I'm a <b>Senior Software Engineer</b> who operates across the full stack — from
              designing React interfaces to provisioning Kubernetes clusters. I don't just write
              features; I own systems end-to-end.
            </p>
            <p>
              At <b>Philips Healthcare</b>, I built a Remote Management Platform that processed
              400+ daily commands across 20+ medical imaging devices in enterprise hospital
              networks — reliability is non-negotiable, compliance is mandatory.
            </p>
            <p>
              Now I build <b>AI-first systems</b>. Synapse is solo-built and production-deployed:
              React UI, Java/Python microservices, Kafka pipelines, Qdrant vector search, and
              Kubernetes on GCP. One engineer. Full ownership.
            </p>
            <p>
              Open to <b>senior engineering roles</b> and AI/backend consulting engagements globally.
            </p>
          </div>
        </div>
        <div className="det-intro-right">
          <div className="det-profile-circle">NK</div>
        </div>
      </div>

      {/* ── Skills + Experience ── */}
      <div className="det-bottom-grid">
        {/* Left: skills */}
        <div>
          <div className="det-section-subhead">SKILLS</div>
          <div className="det-skills-stack">
            {skillData.map((row, i) => (
              <div key={i} className="det-skill-row">
                <div className="det-skill-label">{row.label}</div>
                <div className="det-skill-tags">
                  {row.tags.map((tag, ti) => (
                    <div key={ti} className="det-skill-tag">{tag}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: experience + education */}
        <div>
          <div className="det-section-subhead">EXPERIENCE</div>
          <div className="det-list">
            {experienceData.map((item, i) => (
              <div key={i} className="det-item">
                <div className="det-item-company">{item.company}</div>
                <div className="det-item-role">{item.role}</div>
                <div className="det-item-period">{item.period}</div>
                <div className="det-item-tags">
                  {item.tags.map((tag, ti) => (
                    <div key={ti} className="det-item-tag">{tag}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="det-section-subhead" style={{ marginTop: "48px" }}>EDUCATION</div>
          <div className="det-list">
            {educationData.map((item, i) => (
              <div key={i} className="det-item">
                <div className="det-item-company">{item.company}</div>
                <div className="det-item-role">{item.role}</div>
                <div className="det-item-period">{item.period}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
