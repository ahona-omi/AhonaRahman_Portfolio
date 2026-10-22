"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  BookOpen,
  CircleDot,
  Code2,
  Download,
  GraduationCap,
  Mail,
  Menu,
  Moon,
  Orbit,
  Phone,
  Quote,
  RotateCcw,
  Sun,
  X,
  Zap,
} from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/ahona-omi", icon: Code2 },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ahona-rahman-omi/",
    icon: CircleDot,
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=PtEkgn4AAAAJ&hl=en",
    icon: BookOpen,
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0009-0009-9809-4626",
    icon: CircleDot,
  },
];

const interests = [
  [
    "01",
    "Quantum Machine Learning",
    "Quantum-enhanced learning algorithms, variational quantum circuits, and emerging approaches to machine learning using quantum computation.",
    "QML",
  ],
  [
    "02",
    "Hybrid Quantum-Classical Computing",
    "Computational architectures that combine classical models with parameterized quantum circuits.",
    "HQCC",
  ],
  [
    "03",
    "Machine Learning & Deep Learning",
    "Computational approaches for intelligent systems, representation learning, and predictive modeling.",
    "ML / DL",
  ],
  [
    "04",
    "Computer Vision",
    "Image processing, feature extraction, and deep learning-based visual recognition.",
    "CV",
  ],
  [
    "05",
    "Intelligent Software Applications",
    "Practical software solutions that integrate intelligent algorithms, modern architectures, and data-driven technologies.",
    "ISA",
  ],
];

const skillGroups = [
  ["Programming Languages", "Python", "C", "C++", "C#", "Java", "JavaScript"],
  [
    "Machine Learning & Deep Learning",
    "PyTorch",
    "Scikit-learn",
    "NumPy",
    "Matplotlib",
    "Deep Learning",
    "Model Evaluation",
  ],
  [
    "Quantum Computing",
    "PennyLane",
    "Quantum Machine Learning",
    "Hybrid Quantum-Classical Computing",
    "Variational Quantum Circuits",
  ],
  [
    "Frontend Development",
    "HTML5",
    "CSS3",
    "React.js",
    "Bootstrap",
    "Tailwind CSS",
  ],
  ["Backend Development", "Node.js", ".NET", "REST APIs"],
  ["Databases & Cloud", "MySQL", "SQLite", "Firebase", "Microsoft Azure"],
  [
    "Development & Research Tools",
    "Git",
    "GitHub",
    "Linux",
    "Jupyter Notebook",
    "LaTeX",
    "Figma",
    "Postman",
    "Visual Studio Code",
  ],
  [
    "Other Tools",
    "Flutter",
    "WordPress",
    "Microsoft Word",
    "Microsoft PowerPoint",
  ],
];

const projects = [
  {
    number: "01",
    name: "CraftCraze",
    category: "E-commerce Application",
    description:
      "A multi-vendor e-commerce platform connecting artisans with buyers through product listings, purchasing, and role-based order management.",
    tech: "Flutter · Dart · Firebase · Realtime Database",
    href: "https://lnkd.in/p/gEYjw-7f",
    accent: "violet",
    image: "/craftcraze-project.png",
  },
  {
    number: "02",
    name: "OTJS",
    category: "Social Media Web Application",
    description:
      "A social networking platform for sharing posts, discovering users, interacting through likes, and managing content dynamically.",
    tech: "React.js · Tailwind CSS · React Query · Appwrite",
    href: "https://github.com/ahona-omi/OTJS-Social-Web",
    accent: "cyan",
    image: "/otjs-project.png",
  },
  {
    number: "03",
    name: "Smart Academic Manager",
    category: "Student Management System",
    description:
      "A centralized academic management application for performance, schedules, tasks, grading, attendance, and course information.",
    tech: "Java · JavaFX · CSS · FXML · MySQL",
    href: "https://github.com/afia-lubaina/Smart-Academic-Manager/tree/SAM",
    accent: "blue",
    image: "/academic-manager-project.png",
  },
  {
    number: "04",
    name: "PageTrade",
    category: "Mobile Application / Digital Marketplace",
    description:
      "A marketplace for buying and selling physical books and PDF documents with online payment and cash-on-delivery transactions.",
    tech: "Java · Firebase · Realtime Database",
    href: "https://lnkd.in/p/giBYTVRP",
    accent: "pink",
    image: "/pagetrade-project.png",
  },
];

function External({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const saved = localStorage.getItem("ahona-theme");
    const isDark = saved
      ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("ahona-theme", next ? "dark" : "light");
  };
  return (
    <button
      className="icon-button"
      onClick={toggle}
      aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
    >
      {dark ? <Sun /> : <Moon />}
    </button>
  );
}

function QuantumGraphic() {
  return (
    <div className="quantum-graphic" aria-hidden="true">
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="orb orb-c" />
      <div className="orbit-ring ring-one" />
      <div className="orbit-ring ring-two" />
      <svg viewBox="0 0 500 220">
        <path d="M20 160 C90 30 160 190 245 80 S390 40 475 130" />
        <path d="M20 70 C120 170 170 20 260 130 S385 190 475 40" />
      </svg>
      <span className="q-label">Q = |ψ⟩</span>
    </div>
  );
}

function ContactStatement() {
  const words = ["meaningful", "creative", "innovative"];
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(words[0]);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!hovered) {
      setVisible(words[0]);
      setWordIndex(0);
      return;
    }
    let character = 0;
    let current = words[wordIndex];
    setVisible("");
    const typing = window.setInterval(() => {
      character += 1;
      setVisible(current.slice(0, character));
      if (character >= current.length) window.clearInterval(typing);
    }, 85);
    return () => window.clearInterval(typing);
  }, [hovered, wordIndex]);

  useEffect(() => {
    if (!hovered) return;
    const cycle = window.setInterval(
      () => setWordIndex((current) => (current + 1) % words.length),
      1700,
    );
    return () => window.clearInterval(cycle);
  }, [hovered]);

  return (
    <h2
      className="contact-statement"
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      Let&apos;s connect
      <br />
      and build something{" "}
      <span className="contact-word">
        {visible}
        <i aria-hidden="true" />
      </span>
      .
    </h2>
  );
}

function SkillsToolkit() {
  const [playing, setPlaying] = useState(false);
  const [placed, setPlaced] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [dragged, setDragged] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [victory, setVictory] = useState(false);
  const [skillOrder, setSkillOrder] = useState<string[]>([]);
  const allSkills = skillGroups.flatMap(([category, ...skills]) =>
    skills.map((skill) => ({ skill, category })),
  );

  const startGame = () => {
    setSkillOrder(
      [...allSkills.map(({ skill }) => skill)].sort(() => Math.random() - 0.5),
    );
    setPlaying(true);
    setPlaced({});
    setSelected(null);
    setDragged(null);
    setError(null);
    setVictory(false);
  };
  const reset = () => {
    setPlaying(false);
    setPlaced({});
    setSelected(null);
    setDragged(null);
    setError(null);
    setVictory(false);
    setSkillOrder([]);
  };
  useEffect(() => {
    if (Object.keys(placed).length !== allSkills.length || victory) return;
    setVictory(true);
    const timer = window.setTimeout(() => {
      reset();
    }, 2000);
    return () => window.clearTimeout(timer);
  }, [placed, allSkills.length, victory]);
  const place = (skill: string, category: string) => {
    const item = allSkills.find((entry) => entry.skill === skill);
    if (!item) return;
    if (item.category !== category) {
      setError(`That skill does not belong in this category. Try again.`);
      return;
    }
    setPlaced((current) => ({ ...current, [skill]: category }));
    setSelected(null);
    setDragged(null);
    setError(null);
  };
  const normal = (
    <div className="skills-grid">
      {skillGroups.map(([title, ...skills]) => (
        <article key={title}>
          <h3>{title}</h3>
          <div>
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
  if (!playing)
    return (
      <div
        className="skills-game-trigger"
        role="button"
        tabIndex={0}
        onClick={startGame}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") startGame();
        }}
        aria-label="Start the skills sorting game"
      >
        <span className="skills-game-hint">
          <Zap /> Click the toolkit for fun
        </span>
        {normal}
      </div>
    );
  return (
    <div className={`skills-game is-playing ${victory ? "is-victory" : ""}`}>
      {victory && (
        <div className="skills-victory" role="status">
          <span>Toolkit complete</span>
          <strong>Everything found its place.</strong>
          <button
            type="button"
            className="skills-victory-reset"
            onClick={reset}
          >
            Show toolkit <RotateCcw />
          </button>
          <i aria-hidden="true" />
          <i aria-hidden="true" />
          <i aria-hidden="true" />
        </div>
      )}
      <div className="skills-game-toolbar">
        <p>Drag or tap a skill, then place it in the correct category.</p>
        <button type="button" onClick={reset}>
          Reset <X />
        </button>
      </div>
      {error && (
        <p className="skills-game-error" role="alert">
          {error}
        </p>
      )}
      <div className="skills-pile" aria-label="Unsorted skills">
        {skillOrder
          .filter((skill) => !placed[skill])
          .map((skill) => (
            <button
              key={skill}
              type="button"
              draggable
              onDragStart={() => setDragged(skill)}
              onClick={() => {
                setSelected(skill === selected ? null : skill);
                setError(null);
              }}
              className={selected === skill ? "is-selected" : ""}
            >
              {skill}
            </button>
          ))}
      </div>
      <div className="skills-dropzones">
        {skillGroups.map(([category]) => {
          const items = allSkills.filter(
            (item) => placed[item.skill] === category,
          );
          return (
            <div
              key={category}
              className="skills-dropzone"
              onDragOver={(event) => event.preventDefault()}
              onDrop={() => dragged && place(dragged, category)}
              onClick={() => selected && place(selected, category)}
            >
              <h3>{category}</h3>
              <div>
                {items.map(({ skill }) => (
                  <span key={skill} className="skill-placed">
                    {skill}
                  </span>
                ))}
              </div>
              <small>
                {selected ? "Tap to place selected skill" : "Drop skills here"}
              </small>
            </div>
          );
        })}
      </div>
      {Object.keys(placed).length === allSkills.length && (
        <p className="skills-complete" role="status">
          Toolkit sorted. Nice work.
        </p>
      )}
    </div>
  );
}

function PortfolioCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);
  const [active, setActive] = useState(false);
  const [clickable, setClickable] = useState(false);
  const [logoHover, setLogoHover] = useState(false);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      const next = { x: event.clientX, y: event.clientY };
      setPosition(next);
      setTrail((previous) => [next, ...previous].slice(0, 9));
      setActive(true);
      const target = event.target as HTMLElement;
      setLogoHover(Boolean(target.closest(".wordmark")));
      setClickable(Boolean(target.closest('a,button,[role="button"]')));
    };
    const leave = () => {
      setActive(false);
      setLogoHover(false);
      setTrail([]);
    };
    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <>
      <div
        className={`portfolio-trail ${active ? "is-visible" : ""}`}
        aria-hidden="true"
      >
        {trail.map((point, index) => (
          <i
            key={`${point.x}-${point.y}-${index}`}
            style={{
              left: point.x,
              top: point.y,
              opacity: 1 - index / 10,
              transform: `translate(-50%, -50%) scale(${1 - index * 0.07})`,
            }}
          />
        ))}
      </div>
      <div
        className={`portfolio-cursor ${active ? "is-visible" : ""} ${clickable ? "is-clickable" : ""} ${logoHover ? "is-logo" : ""}`}
        style={{ left: position.x, top: position.y }}
        aria-hidden="true"
      />
    </>
  );
}

function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Portfolio contact from ${data.get("name") || "a visitor"}`;
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ahona.omi0818@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <>
      <button
        className="floating-contact-trigger"
        type="button"
        onClick={() => {
          setOpen(!open);
          setSent(false);
        }}
        aria-label="Open contact form"
        aria-expanded={open}
        aria-controls="floating-contact-form"
      >
        <Mail />
      </button>
      {open && (
        <aside
          id="floating-contact-form"
          className="floating-contact-panel"
          aria-label="Quick contact form"
        >
          <div className="floating-contact-head">
            <div>
              <span>OPEN CHANNEL</span>
              <h2>Say hello.</h2>
            </div>
            <button
              type="button"
              className="floating-contact-close"
              onClick={() => setOpen(false)}
              aria-label="Close contact form"
            >
              <X />
            </button>
          </div>
          <p>Send a note directly to Ahona&apos;s inbox.</p>
          <form onSubmit={submit}>
            <label htmlFor="quick-name">
              Name
              <input id="quick-name" name="name" required autoComplete="name" />
            </label>
            <label htmlFor="quick-email">
              Email
              <input
                id="quick-email"
                name="email"
                type="email"
                required
                autoComplete="email"
              />
            </label>
            <label htmlFor="quick-message">
              Message
              <textarea id="quick-message" name="message" rows={4} required />
            </label>
            <button className="floating-contact-submit" type="submit">
              <Mail /> Send message
            </button>
            {sent && (
              <span className="floating-contact-status" role="status">
                Your email app should open with the message ready to send.
              </span>
            )}
          </form>
        </aside>
      )}
    </>
  );
}

function FloatingHome() {
  return (
    <a
      className="floating-home-trigger"
      href="#home"
      aria-label="Go to first page"
    >
      <ArrowUp />
    </a>
  );
}

function FooterWordmark() {
  const images = [
    "/ahona-gallery/IMG_20220711_190207.jpg",
    "/ahona-gallery/IMG_20220712_184831.jpg",
    "/ahona-gallery/IMG_20220721_183042.jpg",
    "/ahona-gallery/IMG_20240521_220645_488.jpg",
    "/ahona-gallery/IMG_20240706_201127.jpg",
    "/ahona-gallery/IMG_20250611_103512.jpg",
    "/ahona-gallery/IMG_20250730_124458.jpg",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % images.length),
      1000,
    );
    return () => window.clearInterval(timer);
  }, [images.length]);

  return (
    <section className="footer-wordmark" aria-label="Ahona visual signature">
      <span style={{ backgroundImage: `url(${images[index]})` }}>AHONA</span>
    </section>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "about"],
    ["Research", "publications"],
    ["Work", "projects"],
    ["Contact", "contact"],
  ];
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Ahona Rahman home">
        <span className="logo-mark" aria-hidden="true">
          <i>A</i>
        </span>
        <span className="sr-only">Ahona Rahman</span>
      </a>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map(([label, id]) => (
          <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
          Let&apos;s connect <ArrowUpRight />
        </a>
      </nav>
      <div className="nav-tools">
        <ThemeToggle />
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{children}</span>
      <i />
    </div>
  );
}

function WelcomeOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 4200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;
  return (
    <div className="welcome-overlay" role="status" aria-live="polite">
      <div className="welcome-overlay-inner">
        <span className="welcome-arabic" lang="ar" dir="rtl">
          السلام عليكم
        </span>
        <span className="welcome-english">As-salamu alaykum</span>
        <span className="welcome-peace">(Peace be upon you)</span>
        <i aria-hidden="true" />
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="portfolio-shell">
      <WelcomeOverlay />
      <PortfolioCursor />
      <FloatingContact />
      <FloatingHome />
      <Nav />
      <main>
        <section
          id="home"
          data-cursor-section="home"
          className="hero section-wrap"
        >
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="status-dot" /> MSc student · IT Apprentice
              </p>
              <h1 className="hero-name">
                Ahona
                <br />
                <em>Rahman</em>
              </h1>
              <p className="hero-tagline">
                Exploring the intersection of <strong>quantum computing</strong>
                , machine learning &amp; software engineering.
              </p>
              <p className="hero-intro">
                Computer Science and Engineering graduate from the University of
                Dhaka, building research and software at the edge of intelligent
                systems.
              </p>
              <div className="hero-actions">
                <a href="#publications" className="button button-primary">
                  Explore my research <ArrowDown />
                </a>
                <a href="#projects" className="text-link">
                  View projects <ArrowUpRight />
                </a>
              </div>
            </div>
            <div className="hero-art">
              <div className="hero-signal" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <div className="hero-data-stream" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <QuantumGraphic />
              <div className="portrait-card">
                <div className="portrait-placeholder">
                  <img
                    src="/ahona-portrait.png"
                    alt="Ahona Rahman working at a laptop"
                  />
                  <div className="portrait-grid" />
                </div>
                <div className="portrait-caption">
                  <span>Dhaka, Bangladesh</span>
                  <span>23° 48&apos; N / 90° 24&apos; E</span>
                </div>
              </div>
              <div className="hero-stamp">
                CS
                <br />
                <span>RESEARCH</span>
                <br />/ 2026
              </div>
            </div>
          </div>
          <div className="scroll-cue">
            <span>Scroll to explore</span>
            <ArrowDown />
          </div>
        </section>

        <section
          id="about"
          data-cursor-section="about"
          className="section-wrap about-section"
        >
          <SectionLabel number="01">Profile</SectionLabel>
          <div className="about-grid">
            <div>
              <p className="display-statement">
                Curious about the questions that live between{" "}
                <span>theory and application.</span>
              </p>
            </div>
            <div className="about-body">
              <p>
                I am a Computer Science and Engineering graduate from the
                University of Dhaka, Bangladesh, interested in exploring the
                intersection of quantum computing and machine learning.
              </p>
              <p>
                I currently work as an IT Apprentice at IDLC Finance PLC while
                developing my research and engineering expertise. I enjoy
                investigating research problems, implementing computational
                approaches, and building practical software solutions.
              </p>
              <div className="highlight-list">
                <div>
                  <b>01</b>
                  <span>University of Dhaka graduate</span>
                </div>
                <div>
                  <b>02</b>
                  <span>MSc student in CSE</span>
                </div>
                <div>
                  <b>03</b>
                  <span>IT Apprentice at IDLC Finance PLC</span>
                </div>
                <div>
                  <b>04</b>
                  <span>Research interest in QML</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="education"
          data-cursor-section="education"
          className="section-wrap education-section"
        >
          <SectionLabel number="02">Education / Formation</SectionLabel>
          <div className="education-layout">
            <div>
              <h2>
                Building a <em>foundation</em>
                <br />
                for what comes next.
              </h2>
              <p className="muted-copy">
                An academic path grounded in computer science, technical
                curiosity, and a desire to keep asking better questions.
              </p>
            </div>
            <div className="timeline">
              <article>
                <span className="timeline-year">2026 — present</span>
                <GraduationCap />
                <div>
                  <h3>
                    Master&apos;s of Science in Computer Science and Engineering
                  </h3>
                  <p>University of Dhaka · Dhaka, Bangladesh</p>
                </div>
              </article>
              <article>
                <span className="timeline-year">2022 — 2026</span>
                <GraduationCap />
                <div>
                  <h3>
                    Bachelor of Science in Computer Science and Engineering
                  </h3>
                  <p>University of Dhaka · Dhaka, Bangladesh</p>
                  <strong>CGPA 3.24 / 4.00</strong>
                </div>
              </article>
              <article>
                <span className="timeline-year">2018 · 2020</span>
                <GraduationCap />
                <div>
                  <h3>
                    Secondary &amp; Higher Secondary Certificate in Science
                  </h3>
                  <p>
                    Viqarunnisa Noon School &amp; College · Dhaka, Bangladesh
                  </p>
                  <strong>GPA 5.00 / 5.00</strong>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          id="experience"
          data-cursor-section="experience"
          className="section-wrap experience-section"
        >
          <SectionLabel number="04">Experience / Industry</SectionLabel>
          <div className="experience-heading">
            <span className="experience-scan" aria-hidden="true" />
            <div>
              <p className="eyebrow">September 2026 — present · Full-time</p>
              <h2>
                IT Apprentice <span>at IDLC</span>
              </h2>
            </div>
            <p className="experience-note">
              Tech Acceleration Programme
              <br />
              Dhaka, Bangladesh
            </p>
          </div>
          <div className="experience-cards">
            <article>
              <span className="card-index">PROJECT 01</span>
              <h3>
                Employee Verification
                <br />
                <em>Web Application</em>
              </h3>
              <p>
                A responsive verification workflow combining National ID OCR,
                face verification, real-time facial gesture detection, and
                integrated APIs.
              </p>
              <div className="tech-line">
                React.js · Tailwind CSS · C# · WebSockets · REST APIs
              </div>
            </article>
            <article>
              <span className="card-index">PROJECT 02</span>
              <h3>
                Automated Account
                <br />
                <em>Opening Form Processing</em>
              </h3>
              <p>
                A C# / ASP.NET Core API that automates document processing, SQL
                Server association, storage, logging, and resilient batch
                operations.
              </p>
              <div className="tech-line">
                C# · ASP.NET Core · SQL Server · File Operations
              </div>
            </article>
          </div>
          <p className="confidential-note">
            <Zap /> Professional projects presented at a high level without
            confidential company information, customer data, or proprietary
            implementation details.
          </p>
        </section>

        <section
          id="research"
          data-cursor-section="research"
          className="section-wrap research-section"
        >
          <SectionLabel number="05">Research / Questions</SectionLabel>
          <div className="research-intro">
            <span className="research-pulse" aria-hidden="true" />
            <h2>
              Where computation
              <br />
              <em>gets curious.</em>
            </h2>
            <p>
              Research interests spanning quantum intelligence, visual learning,
              and the practical systems that make ideas useful.
            </p>
          </div>
          <div className="interest-grid">
            {interests.map(([num, title, desc, code]) => (
              <article key={num} className="interest-card">
                <span className="interest-number">{num}</span>
                <span className="interest-code">{code}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <ArrowUpRight />
              </article>
            ))}
          </div>
        </section>

        <section
          id="skills"
          data-cursor-section="skills"
          className="section-wrap skills-section"
        >
          <SectionLabel number="06">Skills / Toolkit</SectionLabel>
          <div className="skills-heading">
            <div>
              <h2>
                A toolkit for
                <br />
                <em>making ideas real.</em>
              </h2>
              <p>
                Just the technologies I use to learn, experiment, and build.
              </p>
            </div>
            <div className="skills-orbit" aria-hidden="true">
              <span className="skills-orbit-ring skills-orbit-ring-one" />
              <span className="skills-orbit-ring skills-orbit-ring-two" />
              <span className="skills-orbit-dot skills-orbit-dot-one" />
              <span className="skills-orbit-dot skills-orbit-dot-two" />
              <span className="skills-orbit-core" />
            </div>
          </div>
          <SkillsToolkit />
        </section>

        <section
          id="publications"
          data-cursor-section="publications"
          className="section-wrap publications-section"
        >
          <SectionLabel number="03">
            Research &amp; Publications / Record
          </SectionLabel>
          <div className="pub-heading">
            <h2>
              Ideas in <em>public.</em>
            </h2>
            <p>
              Contributions, preprints, and the ongoing work of making complex
              questions legible.
            </p>
          </div>
          <div className="pub-list">
            <article className="publication-card featured">
              <div className="pub-meta">
                <span>Conference Poster Presentation</span>
                <span>Poster 162 · Oct 08, 2026</span>
              </div>
              <h3>
                Quantum AI Digital Pathology: A Bio-Quantum Intelligence
                Framework for Early Blood Cancer Detection
              </h3>
              <p>
                This work explores a hybrid quantum-classical machine learning
                framework for automated leukemia diagnosis from blood cell
                images, combining deep learning feature extraction with
                variational quantum circuits.
              </p>
              <div className="pub-footer">
                <span>
                  Early Detection of Cancer Conference 2026
                  <br />
                  Edinburgh, United Kingdom · Abstract in official booklet, p.
                  174
                </span>
                <External
                  href="https://drive.google.com/file/d/1ulEw9I0DjD-IYbHNhYuzq8YfbRe1JhrE/view?usp=sharing"
                  className="publication-link"
                >
                  View abstract <ArrowUpRight />
                </External>
              </div>
            </article>
            <article className="publication-card">
              <div className="pub-meta">
                <span>SSRN Preprint</span>
                <span>Dec 09, 2025</span>
              </div>
              <h3>
                QUANT-HemoDx: Quantum AI Computing for Clinical Diagnosis of
                Acute Lymphoblastic Leukemia
              </h3>
              <p>
                A hybrid Quantum AI model combining ResNet-based feature
                extraction with variational quantum circuits for leukemia
                detection from blood smear images. The reported experiment
                achieved up to 96.7% diagnostic accuracy using the{" "}
                <External
                  href="https://cancerimagingarchive.net/collection/c-nmc-2019"
                  className="dataset-link"
                >
                  C-NMC 2019 dataset
                </External>
                .
              </p>
              <div className="pub-footer">
                <span>
                  Reported experimental result; not clinically validated
                  diagnostic performance.
                </span>
                <External
                  href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=PtEkgn4AAAAJ&citation_for_view=PtEkgn4AAAAJ:u5HHmVD_uO8C"
                  className="publication-link"
                >
                  Scholar page <ArrowUpRight />
                </External>
              </div>
            </article>
          </div>
        </section>

        <section
          id="projects"
          data-cursor-section="projects"
          className="section-wrap projects-section"
        >
          <SectionLabel number="07">Selected Work / Builds</SectionLabel>
          <div className="projects-heading">
            <h2>
              Software with
              <br />
              <em>somewhere to go.</em>
            </h2>
            <a href="#contact" className="text-link">
              Collaborate with me <ArrowUpRight />
            </a>
          </div>
          <div className="projects-grid">
            {projects.map((p) => (
              <article className={`project-card ${p.accent}`} key={p.name}>
                <div className={`project-art${p.image ? " has-image" : ""}`}>
                  <span>{p.number}</span>
                  {p.image ? (
                    <img src={p.image} alt={`${p.name} mobile app preview`} />
                  ) : (
                    <>
                      <Code2 />
                      <div className="project-lines" />
                    </>
                  )}
                </div>
                <div className="project-copy">
                  <span className="card-index">{p.category}</span>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <div className="tech-line">{p.tech}</div>
                  <External href={p.href} className="project-link">
                    Open project <ArrowUpRight />
                  </External>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="services"
          data-cursor-section="services"
          className="section-wrap services-section"
        >
          <SectionLabel number="08">What I Do / Focus</SectionLabel>
          <div className="services-grid">
            <article>
              <Orbit />
              <h3>Quantum Machine Learning Research</h3>
              <p>
                Research and experimentation involving quantum machine learning,
                variational quantum circuits, and hybrid quantum-classical
                approaches.
              </p>
            </article>
            <article>
              <Zap />
              <h3>Machine Learning &amp; Deep Learning</h3>
              <p>
                Development and experimentation with intelligent computational
                models, deep learning architectures, and machine learning
                workflows.
              </p>
            </article>
            <article>
              <Quote />
              <h3>Research Collaboration &amp; Technical Consulting</h3>
              <p>
                Collaborating on research ideas, experimental implementations,
                technical exploration, and computational problem-solving.
              </p>
            </article>
            <article>
              <Code2 />
              <h3>Full-Stack Development &amp; Software Engineering</h3>
              <p>
                Developing responsive web applications, backend services, API
                integrations, and practical software solutions.
              </p>
            </article>
          </div>
        </section>

        <section
          id="contact"
          data-cursor-section="contact"
          className="contact-section"
        >
          <div className="section-wrap contact-inner">
            <SectionLabel number="09">Contact / Open channel</SectionLabel>
            <div className="contact-heading">
              <span className="contact-beacon" aria-hidden="true" />
              <ContactStatement />
              <p>
                Interested in research collaboration, quantum machine learning,
                AI research, or software engineering opportunities? Feel free to
                reach out.
              </p>
            </div>
            <div className="contact-grid">
              <div className="contact-links">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ahona.omi0818@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Mail />
                  ahona.omi0818@gmail.com
                  <ArrowUpRight />
                </a>
                <a
                  href="https://wa.me/8801516190424"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Phone />
                  +880 1516 190424
                  <ArrowUpRight />
                </a>
                <span>
                  <CircleDot />
                  Dhaka, Bangladesh
                </span>
              </div>
              <div className="cv-panel">
                <p className="eyebrow">Documents / CV</p>
                <div>
                  <External
                    href="https://drive.google.com/file/d/1mtOd7-KXDzmur40r_uNji8fHPOvunq2S/view?usp=drive_link"
                    className="cv-button"
                  >
                    <Download />
                    Professional CV <ArrowUpRight />
                  </External>
                  <External
                    href="https://drive.google.com/file/d/1iZ0wLxetIEE-CSwlpozXWoAO4vgpRzOD/view?usp=sharing"
                    className="cv-button"
                  >
                    <Download />
                    Scholarship CV <ArrowUpRight />
                  </External>
                </div>
              </div>
            </div>
            <div className="social-row">
              {socials.map(({ label, href, icon: Icon }) => (
                <External
                  href={href}
                  key={label}
                  className="social-link"
                  aria-label={label}
                >
                  <Icon /> <span>{label}</span>
                </External>
              ))}
              <External
                href="https://www.facebook.com/ahona.omiii/"
                className="social-link"
                aria-label="Facebook"
              >
                <span>f</span>
                <span>Facebook</span>
              </External>
              <External
                href="https://www.instagram.com/shakcunni_____404/"
                className="social-link"
                aria-label="Instagram"
              >
                <CircleDot />
                <span>Instagram</span>
              </External>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div>
          <a className="wordmark" href="#home" aria-label="Ahona Rahman home">
            <span className="logo-mark" aria-hidden="true">
              <i>A</i>
            </span>
          </a>
          <p>
            Exploring intelligent systems at the intersection of quantum
            computing, machine learning, and software engineering.
          </p>
        </div>
        <div className="footer-nav">
          <a href="#about">About</a>
          <a href="#publications">Research</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Ahona Rahman</p>
      </footer>
      <FooterWordmark />
    </div>
  );
}
