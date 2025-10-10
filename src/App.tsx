import React, { useEffect, useState } from "react";
import { Moon, Sun, ArrowUpRight, Mail, Linkedin, Github, Phone } from "lucide-react";
import { Card, CardContent } from "../src/components/card";
import { Button } from "../src/components/button";

export default function Portfolio() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    // Apply dark class to <html> for proper dark styles
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
    <section id={id} className="scroll-mt-28 max-w-4xl mx-auto px-5 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">{title}</h2>
      <div className="space-y-4 text-base leading-relaxed">{children}</div>
    </section>
  );

  const Item = ({ heading, sub, meta, children }: { heading: string; sub?: string; meta?: string; children?: React.ReactNode }) => (
    <Card className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <CardContent className="p-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="font-medium text-lg">{heading}</h3>
            {sub && <p className="text-sm text-neutral-600 dark:text-neutral-400">{sub}</p>}
          </div>
          {meta && <span className="text-xs rounded-full px-3 py-1 border border-neutral-200 dark:border-neutral-700">{meta}</span>}
        </div>
        {children && <div className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">{children}</div>}
      </CardContent>
    </Card>
  );

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }} className="min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-neutral-100">
      {/* Google Font */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />

      {/* Header / Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto px-5 h-16 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">Teshan Jayakody</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:opacity-70" href="#about">Me</a>
            <a className="hover:opacity-70" href="#skills">Skills</a>
            <a className="hover:opacity-70" href="#experience">Experience</a>
            <a className="hover:opacity-70" href="#education">Education</a>
            <a className="hover:opacity-70" href="#projects">Projects</a>
            <a className="hover:opacity-70" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={() => setDark(d => !d)}>
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <a id="top" />
      <section id="about" className="max-w-4xl mx-auto px-5 py-14 md:py-20">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
          {/* Avatar placeholder */}
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center select-none">
            <span className="text-3xl md:text-4xl font-semibold">TJ</span>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight mb-3">
              Hi, I’m Teshan. <br />
            </h1>
            <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl">
              Minimalist by taste, product-thinker by practice. I bridge <strong>business analysis</strong>, 
              <strong> UX documentation</strong>, and a foundation in <strong>software engineering</strong> to help teams ship clearer, 
              faster, and with confidence.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-sm border px-3 py-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900">
                <Mail className="w-4 h-4" /> Email
              </a>
              <a href="https://www.linkedin.com/in/teshanjayakody/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm border px-3 py-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900">
                <Linkedin className="w-4 h-4" /> LinkedIn <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm border px-3 py-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900">
                <Github className="w-4 h-4" /> GitHub <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid sm:grid-cols-2 gap-4">
          <Item heading="Business & Product" sub="Discovery • Requirements • Roadmapping">
            Stakeholder interviews, user stories & acceptance criteria, process modeling, prioritization (MoSCoW/RICE), backlog grooming, 
            release planning, KPI/OKR alignment, documentation (SRS/BRD/PRD), accessibility checks (WCAG).
          </Item>
          <Item heading="UX & Documentation" sub="Clarity • Consistency • Accessibility">
            Wireframes & flows (Figma), interaction specs, content design, alt-text, ARIA roles, usability notes, 
            release notes & change logs, design systems hygiene.
          </Item>
          <Item heading="Engineering Foundation" sub="Software Engineering @ SLIIT">
            Node.js, React, TypeScript, Java, Kafka/Streams, MongoDB, REST, Git, basic Docker/K8s, CI/CD awareness, 
            unit/integration testing mindset.
          </Item>
          <Item heading="Tools" sub="Daily drivers">
            Jira, Confluence/Wikis, GitHub Projects, Figma, Excalidraw, Postman, Miro, Notion, Google Workspace.
          </Item>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="space-y-4">
          <Item heading="Xeynergy™" sub="Design & Documentation Specialist" meta="2025 – Present">
            Establishing lightweight documentation standards, aligning requirements with design and delivery, and maintaining a shareable knowledge base.
          </Item>
          <Item heading="Rootcode" sub="Intern Business Analyst" meta="2024 – 2025">
            Supported discovery and delivery for multiple product teams; authored user stories, acceptance criteria, and helped refine backlogs and flows.
          </Item>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <Item heading="BSc in Information Technology (Hons) – Software Engineering" sub="Sri Lanka Institute of Information Technology (SLIIT)" meta="Graduated 2025">
          Second Class. Coursework across software design/engineering, quality assurance, ML, cloud, and professional practice.
        </Item>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-4">
          <Item heading="Thulawa – Kafka Streams+" sub="Java • Stream Processing">
            Research & prototype of priority-aware, micro-batched event scheduling and custom state stores to extend Kafka Streams behavior.
          </Item>
          <Item heading="OrthoPoP" sub="AI • 3D Anatomy • MedTech">
            Learning & diagnostic aids with pain-point flows, ICD‑10 mapping, and structured triage for common orthopedic cases.
          </Item>
          <Item heading="Skapp" sub="SaaS Suite • PM/OKR/Time">
            A modular business-management concept (e‑signature, PM, OKRs, time tracking) with strong documentation and accessibility focus.
          </Item>
          <Item heading="Rootiego" sub="PWA • Carpooling • Sustainability">
            Internal ride-sharing concept with points/carbon tracking, trip creation, role-based flows, and mobile-first UX.
          </Item>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact me">
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-sm border px-3 py-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900"><Mail className="w-4 h-4"/>hello@example.com</a>
          <a href="tel:+94XXXXXXXXX" className="inline-flex items-center gap-2 text-sm border px-3 py-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900"><Phone className="w-4 h-4"/>+94 XX XXX XXXX</a>
          <a href="https://www.linkedin.com/in/teshanjayakody/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm border px-3 py-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900"><Linkedin className="w-4 h-4"/>linkedin.com/in/teshanjayakody <ArrowUpRight className="w-4 h-4"/></a>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">Replace placeholders with your email/phone. The avatar shows initials; swap with your photo easily.</p>
      </Section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto px-5 py-10 text-sm flex items-center justify-between">
          <span>© {new Date().getFullYear()} Teshan Jayakody</span>
          <a href="#top" className="text-xs underline underline-offset-4">Back to top</a>
        </div>
      </footer>

      {/* Minimal scroll behavior */}
      <style>{`html{scroll-behavior:smooth}`}</style>
    </div>
  );
}
