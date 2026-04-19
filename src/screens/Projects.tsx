/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTheme } from "@mui/material";
import "./Projects.css";

const metrics = [
  { val: "75×",  label: "Query speedup"    },
  { val: "<3s",  label: "Response time"    },
  { val: "40ms", label: "Cached latency"   },
  { val: "10",   label: "K8s containers"   },
];

const tagList = [
  "React", "Java", "Python", "Spring Boot", "Kafka",
  "Qdrant", "Redis", "Docker", "Kubernetes", "LangChain",
  "Gemini", "GPT-4o", "Keycloak",
];

const comingSoon = [
  {
    id: "02",
    title: "AI Code Review Bot",
    desc: "GitHub PR reviewer using LLMs — automated feedback on code quality, security, and performance.",
    tags: ["Python", "LangChain", "GitHub API"],
  },
  {
    id: "03",
    title: "Real-time Analytics Platform",
    desc: "Kafka ingestion pipeline feeding a live React dashboard with sub-second latency.",
    tags: ["Java", "Kafka", "React", "Redis"],
  },
  {
    id: "04",
    title: "Multi-tenant SaaS Starter Kit",
    desc: "Auth, payments, RBAC, and Helm charts — the boilerplate I wish existed.",
    tags: ["Spring Boot", "Keycloak", "Helm", "Razorpay"],
  },
];

const Projects = ({ sectionRef, id, ...props }: any) => {
  const theme = useTheme();
  const mode = theme.palette.mode || "dark";

  return (
    <section
      ref={sectionRef}
      id={id}
      {...props}
      className={`projects-section projects--${mode} ${props.className || ""}`}
    >
      {/* ── Full-viewport Synapse showcase ── */}
      <div className="pj-featured-viewport">
        <span className="pj-ghost-number" aria-hidden>01</span>

        <div className="pj-featured-layout">
          {/* Left: text */}
          <div className="pj-featured-left">
            <div className="pj-label">SELECTED WORK</div>

            <h2 className="pj-project-name">Synapse</h2>
            <p className="pj-project-subtitle">AI Document Intelligence Platform</p>

            <p className="pj-project-desc">
              Built entirely solo — <span>frontend to infrastructure</span>.
              React UI · Java/Python microservices · RAG pipeline · Kubernetes on GCP.
              Production-deployed with full ownership from commit to cluster.
            </p>

            <div className="pj-metrics-row">
              {metrics.map((m, i) => (
                <div key={i} className="pj-metric-item">
                  <div className="pj-metric-val">{m.val}</div>
                  <div className="pj-metric-label">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="pj-tech-tags">
              {tagList.map((tag, i) => (
                <span key={i} className="pj-tag">{tag}</span>
              ))}
            </div>

            <div className="pj-github-link">
              <span>View on GitHub</span>
              <span className="pj-link-arrow">↗</span>
            </div>
          </div>

          {/* Right: mockup frame */}
          <div className="pj-featured-right">
            <div className="pj-mockup-frame">
              <div className="pj-mockup-titlebar">
                <div className="pj-mockup-dot" />
                <div className="pj-mockup-dot" />
                <div className="pj-mockup-dot" />
                <div className="pj-mockup-urlbar" />
              </div>
              <div className="pj-mockup-body">
                <div className="pj-mockup-sidebar" />
                <div className="pj-mockup-content-area">
                  <div className="pj-mockup-glow" />
                  <div className="pj-mockup-placeholder-text">
                    <span>Synapse UI</span>
                    <span className="pj-mockup-hint">Replace with screenshot</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pj-scroll-hint">Scroll to explore ↓</div>
      </div>

      {/* ── Coming-soon cards ── */}
      <div className="pj-upcoming-section">
        <div className="pj-upcoming-label">MORE PROJECTS</div>
        <div className="pj-coming-soon-grid">
          {comingSoon.map((c, i) => (
            <div key={i} className="pj-cs-card">
              <div className="pj-cs-num">{c.id}</div>
              <div className="pj-cs-title">{c.title}</div>
              <p className="pj-cs-desc">{c.desc}</p>
              <div className="pj-cs-tags">
                {c.tags.map((t, ti) => (
                  <span key={ti} className="pj-cs-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
