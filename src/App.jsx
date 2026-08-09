import { useMemo, useState } from "react";
import {
  ArrowUpRight, Github, Mail, ExternalLink, Menu, X,
  ShieldCheck, Cpu, Activity, Layers3, TerminalSquare
} from "lucide-react";
import { projects, skills } from "./data/projects";

function SectionTitle({ kicker, title, text }) {
  return (
    <div className="section-title">
      <div className="kicker">{kicker}</div>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  const filters = ["All", "UVM", "RTL", "RISC-V", "AXI4-Lite", "Formal"];

  const visibleProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter(p => p.tags.includes(filter));
  }, [filter]);

  const nav = ["projects", "verification", "skills", "about"];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      <header className="nav">
        <a className="brand" href="#top" onClick={closeMenu}>
          AK<span>/</span>DV
        </a>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21}/> : <Menu size={21}/>}
        </button>
        <nav className={menuOpen ? "navlinks open" : "navlinks"}>
          {nav.map(item => (
            <a key={item} href={`#${item}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-github" href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <Github size={16}/> GitHub
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <div className="status"><span/> OPEN TO DESIGN VERIFICATION OPPORTUNITIES</div>
            <h1>Design Verification<br/><em>Engineer.</em></h1>
            <p className="hero-lead">
              I build and verify RTL systems using <b>SystemVerilog, UVM, assertions,
              coverage and formal verification</b> — with a focus on reusable,
              debuggable verification environments.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">View projects <ArrowUpRight size={17}/></a>
              <a className="btn secondary" href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                <Github size={17}/> GitHub
              </a>
            </div>
          </div>

          <div className="terminal-card">
            <div className="terminal-top"><span/><span/><span/><label>dv_profile.sv</label></div>
            <pre>{`class dv_engineer extends uvm_test;

  // verification stack
  SystemVerilog;
  UVM;
  SVA;
  Coverage;
  Formal;

  // current focus
  RISC_V_SOC;
  AXI4_LITE;
  SoC_INTEGRATION;

  function void verify();
    build_env();
    run_sequences();
    check_scoreboard();
    assert_properties();
    measure_coverage();
  endfunction

endclass`}</pre>
          </div>
        </section>

        <section className="metrics">
          <div><strong>06</strong><span>featured projects</span></div>
          <div><strong>UVM</strong><span>verification methodology</span></div>
          <div><strong>SVA</strong><span>assertion-based checking</span></div>
          <div><strong>SBY</strong><span>formal verification flow</span></div>
        </section>

        <section id="projects" className="section">
          <SectionTitle
            kicker="01 / PROJECTS"
            title="Verification work that can be inspected."
            text="Each project is presented around the DUT, verification strategy, tools and evidence — not just a technology list."
          />
          <div className="filters">
            {filters.map(f => (
              <button className={filter === f ? "filter active" : "filter"} key={f} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
          <div className="project-grid">
            {visibleProjects.map((p, i) => (
              <article className={i === 0 ? "project featured" : "project"} key={p.title}>
                <div className="project-head">
                  <div>
                    <div className="eyebrow">{p.eyebrow}</div>
                    <h3>{p.title}</h3>
                  </div>
                  <span className="project-status">{p.status}</span>
                </div>
                <p>{p.description}</p>
                <ul>{p.highlights.map(h => <li key={h}>{h}</li>)}</ul>
                <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                <a className="project-link" href={p.github} target="_blank" rel="noreferrer">
                  <Github size={16}/> Inspect on GitHub <ExternalLink size={14}/>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="verification" className="section dark-section">
          <SectionTitle
            kicker="02 / VERIFICATION METHODOLOGY"
            title="A verification flow, not a collection of testbenches."
            text="The portfolio emphasizes the engineering decisions behind the verification environment."
          />
          <div className="flow">
            {[
              ["01", "Plan", "Identify features, interfaces, risks, corner cases and coverage goals."],
              ["02", "Stimulate", "Generate directed and constrained-random transactions with UVM sequences."],
              ["03", "Observe", "Capture DUT behavior through monitors and transaction-level analysis."],
              ["04", "Check", "Compare expected vs actual behavior using scoreboards and assertions."],
              ["05", "Measure", "Use functional coverage and regression results to find verification gaps."],
              ["06", "Prove", "Apply formal properties where exhaustive checking adds value."]
            ].map(([n,t,d]) => (
              <div className="flow-item" key={n}>
                <span>{n}</span><div><h3>{t}</h3><p>{d}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <SectionTitle kicker="03 / TOOLKIT" title="Verification stack." />
          <div className="skill-grid">
            {skills.map(([name, desc], i) => (
              <div className="skill" key={name}>
                <span>{String(i+1).padStart(2,"0")}</span>
                <div><h3>{name}</h3><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="architecture">
          <div>
            <div className="kicker">04 / CURRENT SYSTEM</div>
            <h2>RISCV-VDP-SoC</h2>
            <p>
              A compact RISC-V SoC used as the main system-level verification case study.
              The CPU uses its native memory interface while AXI4-Lite remains the external
              control path.
            </p>
          </div>
          <div className="arch-diagram">
            <div className="arch-node cpu"><Cpu size={18}/> PicoRV32</div>
            <div className="arch-arrow">→</div>
            <div className="arch-node"><Layers3 size={18}/> Memory Interconnect</div>
            <div className="arch-arrow">→</div>
            <div className="arch-stack">
              <span>RAM</span><span>GPIO</span><span>RF</span><span>Sensor</span><span>VDP</span>
            </div>
            <div className="axi-note"><ShieldCheck size={16}/> External AXI4-Lite control path</div>
          </div>
        </section>

        <section id="about" className="section about">
          <div>
            <div className="kicker">05 / ABOUT</div>
            <h2>Focused on becoming a strong DV engineer.</h2>
          </div>
          <div>
            <p>
              My work spans RTL design, interface verification and SoC integration.
              I am particularly interested in turning specifications into executable
              verification plans, reusable UVM components and measurable verification evidence.
            </p>
            <p>
              Current technical focus: <b>SystemVerilog, UVM, RISC-V, AXI4-Lite,
              assertions, functional coverage, formal verification and simulation debug.</b>
            </p>
          </div>
        </section>

        <section className="contact">
          <TerminalSquare size={30}/>
          <div>
            <div className="kicker">LET'S CONNECT</div>
            <h2>Have a DV opportunity or project to discuss?</h2>
          </div>
          <div className="contact-actions">
           // <a className="btn primary" href="mailto:akapoor.akk@gmail.com"><Mail size={16}/> Email</a>
            <a
            className="btn primary"
            href="mailto:akapoor.akk@gmail.com"
          >
            <Mail size={16} /> Email
          </a>
            <a className="btn secondary" href="https://github.com/KapoorAkshit18" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
          </div>
        </section>
      </main>

      <footer>
        <span>AK/DV</span>
        <span>SystemVerilog • UVM • RTL • RISC-V • Formal</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}

export default App;