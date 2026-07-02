import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "Services", "Expertise", "Design Flow", "Projects", "Contact"];

const SERVICES = [
  { icon: "◈", title: "Flip Chip", sub: "CSP & MCM", desc: "Chip Scale Packaging and Multi Chip Module designs with advanced bump technology." },
  { icon: "⬡", title: "Multi-Layer Organic", sub: "MLO Substrate", desc: "High-density organic substrate designs following Fujitsu, UMJ, Kyocera DFM specs." },
  { icon: "◆", title: "Multi-Layer Ceramic", sub: "MLC Substrate", desc: "Robust ceramic substrate solutions for high-reliability applications." },
  { icon: "⬢", title: "Interposer", sub: "Si / Organic", desc: "Advanced interposer designs bridging die and package substrate layers." },
  { icon: "◉", title: "Core-less Substrate", sub: "MLTF", desc: "Ultra-thin multi-layer thin film substrates for compact packaging solutions." },
];

const TOOLS = [
  { cat: "Schematic", items: ["OrCAD Capture", "Concept HDL", "Design View", "DX Designer"] },
  { cat: "Layout", items: ["Cadence Allegro Layout 16.5/16.6/17.2", "Cadence Allegro Package Designer 16.5/16.6/17.2", "Mentor Graphics Expedition Vx-2.6/Vx-2.10"] },
  { cat: "Validation", items: ["CAM350 Gerber Validation"] },
];

const EXPERTISE = [
  "200+ IC Packaging designs delivered",
  "Multi-SITE substrate configurations",
  "Core, Core-Less & Thin Film + MLO/MLC stack-ups",
  "Loopback routing & interface expertise",
  "Stack-up design & material selection",
  "Impedance calculation via Polar SI & Saturn PCB",
  "Micro via / Blind Buried via technology",
  "DFM compliance: Fujitsu, UMJ, Kyocera",
];

const FLOW_STEPS = [
  "Layout Setup", "Layer Estimation", "Cross Section Definition",
  "DIE Generation", "BGA Generation", "Constraint Setup", "DIE & BGA Fanout",
  "IO Routing & Ball Assignment", "Power & Ground Planes", "Stitching Via Addition",
  "Fiducial & Degassing", "Artwork & Gerber", "DFM Validation", "Final Delivery",
];

const PROJECTS = [
  {
    name: "Design Model 1",
    badge: "MLO · KYOCERA",
    stats: [
      ["C4 Pads", "1,310"], ["DIE Pitch", "150μm"], ["BGA Balls", "725"],
      ["BGA Pitch", "800μm"], ["Package", "23×23mm"], ["Stack-up", "3+2+3"],
      ["Signals", "360"], ["Diff Pairs", "20"], ["Powers", "15"], ["Lead Time", "1.5 wks"],
    ],
    challenges: ["SI-optimized high-speed routing with cutouts beneath BGA fanout", "Ground shielding via stitching vias with 5X diff pair spacing", "PDN compliance with strategic power via placement", "USB, PCIe, SerDes & DDR4 interface routing with simulations"],
    tool: "Cadence Allegro Package Designer 17.2",
  },
  {
    name: "Design Model 2",
    badge: "MLO · FICT · 4-Site",
    stats: [
      ["C4 Pads", "2,414"], ["Sites", "4"], ["DIE Pitch", "140μm"], ["BGA/Site", "969"],
      ["BGA Pitch", "800μm"], ["Package", "53×55mm"], ["Stack-up", "3+6+3"],
      ["Signals", "350/site"], ["Diff Pairs", "35/site"], ["Lead Time", "1.5 wks"],
    ],
    challenges: ["Fixed one-to-one BGA assignment with restricted layer count", "Complex criss-crossing nets resolved via jogging via technique", "Multi-site power plane segmentation with common ground", "Signal planning across 4 identical sites with length matching"],
    tool: "Cadence Allegro Package Designer 16.6",
  },
];

const OTHER_SERVICES = [
  "Probe Card (Vertical & Cantilever)", "Load Board Designs",
  "Mother & Daughter Board", "High Speed Designs (HSD)",
  "EMI/EMC Analysis", "SI & PI Simulation", "IC Package Substrate",
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Section({ id, children, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <section id={id} ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </section>
  );
}

export default function App() {
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(n => document.getElementById(n.toLowerCase().replace(" ", "-")));
      const scrollY = window.scrollY + 120;
      sections.forEach((s, i) => {
        if (s && s.offsetTop <= scrollY) setActiveNav(NAV_LINKS[i]);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase().replace(" ", "-"));
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'DM Mono', 'Courier New', monospace", background: "#0a0c0f", color: "#e8e4dc", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Syne:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #0a0c0f; } ::-webkit-scrollbar-thumb { background: #c5773a; }
        html { scroll-behavior: smooth; }
        .cu-btn { background: transparent; border: 1px solid #c5773a; color: #c5773a; padding: 10px 24px; font-family: inherit; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; cursor: pointer; transition: all 0.25s; }
        .cu-btn:hover { background: #c5773a; color: #0a0c0f; }
        .tag { display: inline-block; background: rgba(197,119,58,0.12); border: 1px solid rgba(197,119,58,0.3); color: #c5773a; font-size: 10px; letter-spacing: 0.12em; padding: 3px 10px; }
        .grid-bg { background-image: linear-gradient(rgba(197,119,58,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(197,119,58,0.04) 1px, transparent 1px); background-size: 60px 60px; }
        .stat-card { border: 1px solid rgba(197,119,58,0.2); padding: 14px 16px; background: rgba(197,119,58,0.03); transition: all 0.2s; }
        .stat-card:hover { border-color: rgba(197,119,58,0.5); background: rgba(197,119,58,0.07); }
        .flow-step { position: relative; display: flex; flex-direction: column; align-items: center; flex: 1; min-width: 70px; }
        .flow-dot { width: 14px; height: 14px; border-radius: 50%; background: #c5773a; border: 2px solid #0a0c0f; box-shadow: 0 0 0 2px #c5773a; position: relative; z-index: 1; }
        .flow-line { position: absolute; top: 7px; left: 50%; right: -50%; height: 2px; background: linear-gradient(90deg, #c5773a, rgba(197,119,58,0.2)); z-index: 0; }
        .service-card { border: 1px solid rgba(197,119,58,0.15); padding: 28px 24px; transition: all 0.3s; cursor: default; position: relative; overflow: hidden; }
        .service-card::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(197,119,58,0.06) 0%, transparent 60%); opacity: 0; transition: opacity 0.3s; }
        .service-card:hover::before { opacity: 1; }
        .service-card:hover { border-color: rgba(197,119,58,0.45); transform: translateY(-2px); }
        .challenge-item { padding: 12px 16px; border-left: 2px solid rgba(197,119,58,0.4); margin-bottom: 8px; font-size: 13px; line-height: 1.6; color: #aaa; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, borderBottom: "1px solid rgba(197,119,58,0.2)", background: "rgba(10,12,15,0.95)", backdropFilter: "blur(16px)", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 32, height: 32, border: "1px solid #c5773a", borderRadius: 2, display: "grid", placeItems: "center", fontSize: 16 }}>◉</div>
          <div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", color: "#e8e4dc" }}>CuNest</div>
            <div style={{ fontSize: 9, letterSpacing: "0.2em", color: "#c5773a", lineHeight: 1 }}>INTERCONNECTS</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 32 }} className="hide-mobile">
          {NAV_LINKS.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{ background: "none", border: "none", color: activeNav === l ? "#c5773a" : "#888", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit", padding: "4px 0", borderBottom: activeNav === l ? "1px solid #c5773a" : "1px solid transparent", transition: "all 0.2s" }}>{l}</button>
          ))}
        </div>
        <button onClick={() => scrollTo("Contact")} className="cu-btn" style={{ fontSize: 11 }}>Get Quote</button>
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 64, position: "relative", overflow: "hidden" }} className="grid-bg">
        <div style={{ position: "absolute", top: "20%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(197,119,58,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "0%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(197,119,58,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
            <div style={{ width: 40, height: 1, background: "#c5773a" }} />
            <span style={{ fontSize: 11, letterSpacing: "0.25em", color: "#c5773a" }}>ALWAYS RELIABLE</span>
          </div>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 24 }}>
            IC Packaging<br />
            <span style={{ color: "#c5773a" }}>Design</span> Services
          </h1>
          <p style={{ fontSize: 15, color: "#888", maxWidth: 520, lineHeight: 1.8, marginBottom: 40 }}>
            Advanced substrate design solutions — Flip Chip, MLO, MLC, Interposer & Core-less — delivered with precision and proven expertise in 200+ designs.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button className="cu-btn" onClick={() => scrollTo("Services")} style={{ padding: "14px 32px" }}>Explore Services</button>
            <button className="cu-btn" onClick={() => scrollTo("Projects")} style={{ borderColor: "rgba(197,119,58,0.4)", color: "#888" }}>View Projects</button>
          </div>
          <div style={{ display: "flex", gap: 48, marginTop: 64, paddingTop: 40, borderTop: "1px solid rgba(197,119,58,0.1)" }}>
            {[["200+", "Designs Delivered"], ["1.5wk", "Avg Lead Time"], ["5+", "Package Types"]].map(([n, l]) => (
              <div key={n}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 700, color: "#c5773a" }}>{n}</div>
                <div style={{ fontSize: 11, color: "#666", letterSpacing: "0.1em", marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section id="services" className="grid-bg" style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ marginBottom: 56 }}>
            <span className="tag">SERVICES</span>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, marginTop: 16, letterSpacing: "-0.02em" }}>Package Design Technologies</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
            {SERVICES.map(s => (
              <div key={s.title} className="service-card">
                <div style={{ fontSize: 28, color: "#c5773a", marginBottom: 16 }}>{s.icon}</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{s.title}</div>
                <div style={{ fontSize: 11, color: "#c5773a", letterSpacing: "0.1em", marginBottom: 12 }}>{s.sub}</div>
                <div style={{ fontSize: 12, color: "#777", lineHeight: 1.7 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* EXPERTISE */}
      <Section id="expertise" style={{ padding: "100px 0", background: "#0d0f12" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            <div>
              <span className="tag">EXPERTISE</span>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, marginTop: 16, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Professional<br />Capabilities</h2>
              <p style={{ fontSize: 13, color: "#666", marginTop: 20, lineHeight: 1.8 }}>Our team brings deep hands-on experience across the full IC packaging design spectrum, from complex stack-up configurations to high-speed signal integrity.</p>
              <div style={{ marginTop: 40 }}>
                <div style={{ fontSize: 11, color: "#c5773a", letterSpacing: "0.15em", marginBottom: 20 }}>TOOL EXPERTISE</div>
                {TOOLS.map(t => (
                  <div key={t.cat} style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: 11, color: "#888", letterSpacing: "0.1em", marginBottom: 8 }}>{t.cat.toUpperCase()}</div>
                    {t.items.map(item => (
                      <div key={item} style={{ fontSize: 12, color: "#666", padding: "6px 0", borderBottom: "1px solid rgba(197,119,58,0.08)", display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ color: "#c5773a", fontSize: 8 }}>▸</span>{item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ display: "grid", gap: 2 }}>
                {EXPERTISE.map((e, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "16px 20px", border: "1px solid rgba(197,119,58,0.1)", background: i % 2 === 0 ? "rgba(197,119,58,0.02)" : "transparent", transition: "all 0.2s" }}>
                    <span style={{ color: "#c5773a", fontSize: 10, marginTop: 3, flexShrink: 0 }}>◈</span>
                    <span style={{ fontSize: 13, color: "#aaa", lineHeight: 1.6 }}>{e}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* DESIGN FLOW */}
      <Section id="design-flow" style={{ padding: "100px 0" }} className="grid-bg">
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>
          <span className="tag">PROCESS</span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, marginTop: 16, letterSpacing: "-0.02em", marginBottom: 56 }}>Design Flow</h2>
          <div style={{ position: "relative", overflowX: "auto", paddingBottom: 8 }}>
            <div style={{ display: "flex", gap: 0, minWidth: 900, position: "relative" }}>
              <div style={{ position: "absolute", top: 7, left: 7, right: 7, height: 2, background: "linear-gradient(90deg, #c5773a, rgba(197,119,58,0.15))", zIndex: 0 }} />
              {FLOW_STEPS.map((step, i) => (
                <div key={step} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>
                  <div style={{ width: 16, height: 16, borderRadius: "50%", background: i < 7 ? "#c5773a" : "rgba(197,119,58,0.4)", border: "2px solid #0a0c0f", boxShadow: i < 7 ? "0 0 0 2px #c5773a" : "0 0 0 2px rgba(197,119,58,0.4)", marginBottom: 12 }} />
                  <div style={{ fontSize: 10, color: i < 7 ? "#c5773a" : "#666", textAlign: "center", lineHeight: 1.4, letterSpacing: "0.05em" }}>{step}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: "#666" }}><span style={{ width: 8, height: 8, borderRadius: "50%", background: "#c5773a", display: "inline-block" }} />Phase 1: Setup & Generation</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: "#666" }}><span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(197,119,58,0.4)", display: "inline-block" }} />Phase 2: Routing & Delivery</div>
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" style={{ padding: "100px 0", background: "#0d0f12" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>
          <span className="tag">PORTFOLIO</span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, marginTop: 16, letterSpacing: "-0.02em", marginBottom: 40 }}>Design Models</h2>
          <div style={{ display: "flex", gap: 8, marginBottom: 40 }}>
            {PROJECTS.map((p, i) => (
              <button key={i} onClick={() => setActiveProject(i)} style={{ fontFamily: "inherit", fontSize: 12, letterSpacing: "0.1em", padding: "10px 24px", border: "1px solid", borderColor: activeProject === i ? "#c5773a" : "rgba(197,119,58,0.2)", background: activeProject === i ? "rgba(197,119,58,0.1)" : "transparent", color: activeProject === i ? "#c5773a" : "#666", cursor: "pointer", transition: "all 0.2s" }}>{p.name}</button>
            ))}
          </div>
          {PROJECTS.map((p, idx) => idx === activeProject && (
            <div key={idx} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 20 }}>{p.name}</span>
                  <span className="tag">{p.badge}</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 24 }}>
                  {p.stats.map(([k, v]) => (
                    <div key={k} className="stat-card">
                      <div style={{ fontSize: 10, color: "#666", letterSpacing: "0.1em", marginBottom: 4 }}>{k.toUpperCase()}</div>
                      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 18, color: "#c5773a" }}>{v}</div>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: 11, color: "#c5773a", letterSpacing: "0.15em", marginBottom: 6 }}>TOOL</div>
                <div style={{ fontSize: 12, color: "#888", padding: "10px 14px", border: "1px solid rgba(197,119,58,0.15)" }}>{p.tool}</div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: "#c5773a", letterSpacing: "0.15em", marginBottom: 16 }}>CHALLENGES & SOLUTIONS</div>
                {p.challenges.map((c, i) => (
                  <div key={i} className="challenge-item">{c}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* OTHER SERVICES */}
      <Section style={{ padding: "80px 0" }} className="grid-bg">
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>
          <span className="tag">ALSO AVAILABLE</span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700, marginTop: 16, letterSpacing: "-0.02em", marginBottom: 32 }}>Other Services</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {OTHER_SERVICES.map(s => (
              <div key={s} style={{ border: "1px solid rgba(197,119,58,0.2)", padding: "12px 20px", fontSize: 12, color: "#888", letterSpacing: "0.05em", transition: "all 0.2s", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(197,119,58,0.5)"; e.currentTarget.style.color = "#c5773a"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(197,119,58,0.2)"; e.currentTarget.style.color = "#888"; }}>
                {s}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* WHY US */}
      <section style={{ padding: "80px 0", background: "#0d0f12" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 1, border: "1px solid rgba(197,119,58,0.15)", overflow: "hidden" }}>
            {[
              ["◈", "Cost Effective", "Competitive pricing without compromising on quality or turnaround."],
              ["⏱", "Fast Turnaround", "1–1.5 weeks medium complexity · 2.5–3 weeks high complexity."],
              ["⚡", "Expedite Options", "Flexible timelines based on your project requirements."],
              ["🔒", "Confidentiality", "Full NDA compliance and strict data security between clients."],
            ].map(([icon, title, desc]) => (
              <div key={title} style={{ padding: "36px 28px", borderRight: "1px solid rgba(197,119,58,0.1)", borderBottom: "1px solid rgba(197,119,58,0.1)" }}>
                <div style={{ fontSize: 24, marginBottom: 16 }}>{icon}</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 16, marginBottom: 8 }}>{title}</div>
                <div style={{ fontSize: 12, color: "#666", lineHeight: 1.7 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <Section id="contact" style={{ padding: "100px 0" }} className="grid-bg">
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
          <span className="tag">CONTACT</span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800, marginTop: 20, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 16 }}>
            Start Your<br /><span style={{ color: "#c5773a" }}>Next Design</span>
          </h2>
          <p style={{ fontSize: 14, color: "#666", marginBottom: 40 }}>Reach out for a quote or to discuss your IC packaging requirements.</p>
          <a href="mailto:cunestinterconnects@gmail.com" style={{ display: "inline-block", fontFamily: "inherit", textDecoration: "none" }}>
            <div style={{ border: "1px solid #c5773a", padding: "20px 48px", color: "#c5773a", fontSize: 14, letterSpacing: "0.1em", transition: "all 0.25s", display: "inline-flex", alignItems: "center", gap: 12 }}
              onMouseEnter={e => { e.currentTarget.style.background = "#c5773a"; e.currentTarget.style.color = "#0a0c0f"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#c5773a"; }}>
              ✉ cunestinterconnects@gmail.com
            </div>
          </a>
        </div>
      </Section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(197,119,58,0.15)", padding: "24px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 24, height: 24, border: "1px solid rgba(197,119,58,0.4)", display: "grid", placeItems: "center", fontSize: 12 }}>◉</div>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.06em" }}>CuNest Interconnects</span>
        </div>
        <div style={{ fontSize: 11, color: "#444", letterSpacing: "0.08em" }}>IC PACKAGING DESIGN SERVICES · ALWAYS RELIABLE</div>
      </footer>
    </div>
  );
}
