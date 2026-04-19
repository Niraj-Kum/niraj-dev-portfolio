/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTheme } from "@mui/material";
import "./Articles.css";

const articles = [
  {
    num: "01",
    tag: "AI ENGINEERING",
    title: "Building a Production RAG Pipeline: From Architecture to 75× Speedup",
    excerpt: "How Synapse processes documents through async Kafka events, Gemini embeddings, Qdrant vector search, and Redis caching to hit sub-40ms cached queries.",
    active: true,
  },
  {
    num: "02",
    tag: "INFRASTRUCTURE",
    title: "Helm Charts in Production: Multi-Environment Deployments and Cloud Cost Optimisation",
    excerpt: "Real lessons from authoring Helm charts for dev/staging/prod and right-sizing Kubernetes workloads to reduce cloud spend significantly.",
    active: true,
  },
  {
    num: "03",
    tag: "BACKEND",
    title: "Java 17 Migration: 40% Latency Reduction and 95% Fewer Code Smells",
    excerpt: "What actually changed migrating a healthcare platform from Java 8 to Java 17 — wins, breaking changes, and what the benchmarks showed.",
    active: false,
  },
  {
    num: "04",
    tag: "SYSTEM DESIGN",
    title: "Remote Device Management at Scale: Designing for 400+ Daily Commands",
    excerpt: "Architecture decisions behind managing 20+ medical imaging devices remotely across enterprise hospital networks with full audit compliance.",
    active: false,
  },
];

const Articles = ({ sectionRef, id, ...props }: any) => {
  const theme = useTheme();
  const mode = theme.palette.mode || "dark";

  return (
    <section
      ref={sectionRef}
      id={id}
      {...props}
      className={`articles-section articles--${mode} ${props.className || ""}`}
    >
      <div className="art-header">
        <div className="art-label">WRITING</div>
        <h2 className="art-title">Articles<span>.</span></h2>
        <p className="art-subtitle">
          Technical writing on AI engineering, backend systems, and infrastructure.
        </p>
      </div>

      <div className="art-list">
        {articles.map((article, i) => (
          <div
            key={i}
            className={`art-list-item ${article.active ? "art-list-item--active" : "art-list-item--dimmed"}`}
          >
            <div className="art-item-num">{article.num}</div>
            <div className="art-item-body">
              <div className="art-item-meta">
                <span className="art-tag">{article.tag}</span>
                {!article.active && <span className="art-coming-soon-badge">COMING SOON</span>}
              </div>
              <h3 className="art-item-title">{article.title}</h3>
              <p className="art-item-excerpt">{article.excerpt}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="art-footer-note">
        More articles coming — follow on LinkedIn for updates.
      </div>
    </section>
  );
};

export default Articles;
