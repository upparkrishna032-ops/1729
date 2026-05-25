import "./App.css";
import { Step } from "./Step";

function App() {
  return (
    <div className="site">
      {/* 01. NAVIGATION */}
      <header className="header">
        <div className="container nav">
          <a href="/" className="logo">
            <div className="logo-content">
              <img
                src="/ramanujan-sketch.png"
                alt="Ramanujan Sketch"
                className="logo-bg-image"
              />
              <span className="logo-text">
                1729<span>.</span>
              </span>
            </div>
          </a>
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#contact" className="nav-contact-link">
              Contact Us→
            </a>
          </nav>
        </div>
      </header>
      <p>fd</p>
      <main>
        {/* 02. HERO */}
        <section className="hero">
          <div className="container hero-content">
            <div className="hero-text-wrapper">
              <h1 className="hero-title">
                1729.
                <br />
                <span className="text-gradient">Engineers Lab</span>
              </h1>
              <p className="hero-subtitle">
                We design, build, and deploy custom web applications for
                industrial operations. By merging full-stack MERN development
                with real mechanical expertise, we turn complex manufacturing
                workflows into seamless digital infrastructure.
              </p>
              <div
                className="hero-actions"
                style={{
                  display: "flex",
                  gap: "16px",
                  justifyContent: "center",
                }}
              >
                <a
                  href="mailto:laxmi.b.uppar@gmail.com"
                  className="btn btn-primary"
                >
                  Request a Project
                </a>
                <a href="#work" className="btn btn-secondary">
                  See Our Work
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 03. CAPABILITIES */}
        <section className="section section-muted" id="services">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Capabilities</p>
              <h2>How we help your work</h2>
            </div>
            <div className="grid grid-2x2">
              <div className="card">
                <h3>Workshop Automation</h3>
                <p>
                  We replace messy, manual paperwork with custom dashboards to
                  track job stages, inventory levels, and operator logs in
                  real-time.
                </p>
              </div>
              <div className="card">
                <h3>Client Portals</h3>
                <p>
                  Stop the endless "is my order ready?" phone calls. Give
                  clients a private, professional space to check status and
                  download quotes.
                </p>
              </div>
              <div className="card">
                <h3>Custom Web Presence</h3>
                <p>
                  High-performance, static websites built for speed and SEO. We
                  create digital storefronts that turn your manufacturing
                  expertise into leads.
                </p>
              </div>
              <div className="card">
                <h3>Production Insights</h3>
                <p>
                  Ditch the broken spreadsheets. We visualize your machine
                  downtime, job profitability, and delivery timelines to help
                  you make better decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 04. PROCESS */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Process</p>
              <h2>The roadmap to results</h2>
            </div>
            <div className="grid grid-4">
              <Step
                num="01"
                title="Audit"
                desc="We analyze your manual processes and find where you are losing time."
              />
              <Step
                num="02"
                title="Blueprint"
                desc="We map out a custom software architecture designed for your budget."
              />
              <Step
                num="03"
                title="Build"
                desc="We engineer your system cleanly, testing it against real shop floor conditions."
              />
              <Step
                num="04"
                title="Deploy"
                desc="We seamlessly launch your tool and train your team for a zero-friction transition."
              />
            </div>
          </div>
        </section>

        {/* 05. TOOLKIT */}
        <section className="section section-muted" id="tech">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">The Toolkit</p>
              <h2>
                We choose the right tool <br /> for the job.
              </h2>
            </div>
            <div className="tech-grid">
              <div className="tech-card">
                <h3>MERN Stack</h3>
                <p>MongoDB, Express, React, Node.js</p>
                <small>
                  Best for real-time dashboards and high-speed apps.
                </small>
              </div>
              <div className="tech-card">
                <h3>PHP Systems</h3>
                <p>Laravel, MySQL, CMS Integrations</p>
                <small>
                  Best for reliable, secure, and established business platforms.
                </small>
              </div>
            </div>
          </div>
        </section>

        {/* 06. SHOWCASE */}
        <section className="section showcase-section" id="work">
          <div className="container">
            <div className="case-box">
              <div className="case-content">
                <p className="eyebrow">Featured Project</p>
                <h2>Kalam Kaam</h2>
                <p>
                  A specialized hiring platform built for the manufacturing
                  sector.
                </p>

                <div className="metrics-row">
                  <div className="metric-box">
                    <span className="metric-label">Real-time</span>
                    <p>Instant matching</p>
                  </div>
                  <div className="metric-box">
                    <span className="metric-label">Scalable</span>
                    <p>10k+ active users</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="team">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">The Team</p>
              <h2>Meet the Engineers</h2>
              <p>
                Building high-performance digital solutions with mechanical
                precision.
              </p>
            </div>
            <div className="team-grid">
              <div className="founder-card">
                <img
                  src="/founder1.png"
                  alt="Founder 1"
                  className="founder-img"
                />
                <h3>Sangeetha Soni</h3>
                <p className="role">Co-Founder & Operations</p>
              </div>
              <div className="founder-card">
                <img
                  src="/founder2.png"
                  alt="Founder 2"
                  className="founder-img"
                />
                <h3>Laxmiputtra Uppar</h3>
                <p className="role">Co-Founder & Lead Engineer</p>
              </div>
            </div>
          </div>
        </section>

        {/* 07. CONTACT */}
        <section className="section contact-cta" id="contact">
          <div className="container cta-box">
            <div className="cta-content">
              <h2>Ready to eliminate the paperwork?</h2>
              <p className="cta-subtitle">
                Let's find out how much time we can save you.
              </p>
            </div>
            <div className="cta-channels">
              <div className="cta-channel-item">
                <span className="channel-label">Call / WhatsApp:</span>
                <a href="tel:+916360626362" className="channel-link">
                  +91 63606 26362
                </a>
              </div>
              <div className="cta-channel-item">
                <span className="channel-label">Direct Email:</span>
                <a
                  href="mailto:laxmi.b.uppar@gmail.com"
                  className="channel-link"
                >
                  laxmi.b.uppar@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} 1729. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
