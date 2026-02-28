import React, { useEffect, useState } from "react";
import {
  Moon,
  Sun,
  ArrowUpRight,
  Mail,
  Linkedin,
  Github,
  Phone,
  BookOpen,
  CalendarDays,
} from "lucide-react";
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

  const Section = ({
    id,
    title,
    children,
  }: {
    id: string;
    title: string;
    children: React.ReactNode;
  }) => (
    <section
      id={id}
      className="scroll-mt-28 w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14"
    >
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
        {title}
      </h2>
      <div className="space-y-4 text-base leading-relaxed">{children}</div>
    </section>
  );

  const Item = ({
    heading,
    sub,
    meta,
    children,
  }: {
    heading: string;
    sub?: string;
    meta?: string;
    children?: React.ReactNode;
  }) => (
    <Card className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <CardContent className="p-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="font-medium text-lg">{heading}</h3>
            {sub && (
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {sub}
              </p>
            )}
          </div>
          {meta && (
            <span className="text-xs rounded-full px-3 py-1 border border-neutral-200 dark:border-neutral-700">
              {meta}
            </span>
          )}
        </div>
        {children && (
          <div className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
            {children}
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div
      style={{ fontFamily: "Poppins, sans-serif" }}
      className="min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-neutral-100"
    >
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Header / Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-200 dark:border-neutral-800">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">
            Teshan Jayakody
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:opacity-70" href="#about">
              Me
            </a>
            <a className="hover:opacity-70" href="#skills">
              Skills
            </a>
            <a className="hover:opacity-70" href="#experience">
              Experience
            </a>
            <a className="hover:opacity-70" href="#education">
              Education
            </a>
            <a className="hover:opacity-70" href="#projects">
              Projects
            </a>
            <a className="hover:opacity-70" href="#contact">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              onClick={() => setDark((d) => !d)}
            >
              {dark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <a id="top" />
      <section id="about" className="max-w-4xl mx-auto px-5 py-14 md:py-20">
        <div className="flex flex-col md:flex-row items-center md:items-center text-center md:text-left gap-6 md:gap-10">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border border-neutral-200 dark:border-neutral-800 overflow-hidden select-none">
            <img
              key={dark ? "dark" : "light"} // re-render to trigger animation
              src={dark ? "/avatar-dark.png" : "/avatar-light.png"}
              alt="Teshan Jayakody avatar"
              className="w-full h-full object-cover transition-all duration-500 ease-in-out transform hover:scale-105 opacity-100 animate-fade-in"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight tracking-tight mb-3">
              Hi, I’m Teshan. <br />
            </h1>
            <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto md:mx-0 text-base sm:text-lg">
              At the intersection of product, UX, and engineering — I help ideas
              become clear, usable, and real.
            </p>
            <ul className="list-disc text-left mx-auto md:mx-0 pl-5 mt-3 space-y-2 text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
              <li>
                <strong>2+ years</strong> of experience in tech.
              </li>
              <li>
                Currently working as a Business Analyst @{" "}
                <a
                  href="https://www.xeynergy.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors font-medium"
                >
                  <strong>Xeynergy™</strong>
                </a>
              </li>
              <li className="relative">
                Proud Madridista —{" "}
                <button
                  onClick={() => {
                    // Create overlay
                    const overlay = document.createElement("div");
                    overlay.style.position = "fixed";
                    overlay.style.top = "0";
                    overlay.style.left = "0";
                    overlay.style.width = "100vw";
                    overlay.style.height = "100vh";
                    overlay.style.background = "rgba(0,0,0,0.4)";
                    overlay.style.backdropFilter = "blur(5px)";
                    overlay.style.opacity = "0";
                    overlay.style.transition = "opacity 0.3s ease-in-out";
                    overlay.style.zIndex = "9998";
                    document.body.appendChild(overlay);

                    // Create container
                    const container = document.createElement("div");
                    container.style.position = "fixed";
                    container.style.top = "50%";
                    container.style.left = "50%";
                    container.style.transform =
                      "translate(-50%, -50%) scale(0.9)";
                    container.style.display = "flex";
                    container.style.flexDirection = "column";
                    container.style.alignItems = "center";
                    container.style.opacity = "0";
                    container.style.transition =
                      "opacity 0.3s ease-in-out, transform 0.4s ease-in-out";
                    container.style.zIndex = "9999";

                    // Logo
                    const img = document.createElement("img");
                    img.src =
                      "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg";
                    img.alt = "Real Madrid logo";
                    img.style.width = "120px";

                    // Text
                    const text = document.createElement("span");
                    text.textContent = "¡Hala Madrid!";
                    text.style.color = "white";
                    text.style.fontSize = "1.5rem";
                    text.style.fontWeight = "600";
                    text.style.marginTop = "12px";
                    text.style.textShadow = "0 2px 6px rgba(0,0,0,0.5)";

                    container.appendChild(img);
                    container.appendChild(text);
                    document.body.appendChild(container);

                    // Trigger fade-in
                    requestAnimationFrame(() => {
                      overlay.style.opacity = "1";
                      container.style.opacity = "1";
                      container.style.transform =
                        "translate(-50%, -50%) scale(1)";
                    });

                    // Fade-out and cleanup
                    setTimeout(() => {
                      overlay.style.opacity = "0";
                      container.style.opacity = "0";
                      container.style.transform =
                        "translate(-50%, -50%) scale(0.8)";
                      setTimeout(() => {
                        overlay.remove();
                        container.remove();
                      }, 500);
                    }, 1500);
                  }}
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors font-medium cursor-pointer"
                >
                  <strong>¡Hala Madrid Y Nada Más!</strong>
                </button>
              </li>
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap items-center sm:items-start gap-3">
              <a
                href="https://www.linkedin.com/in/teshanjayakody/"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 text-sm border px-4 py-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn{" "}
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/teshanj7"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 text-sm border px-4 py-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
              >
                <Github className="w-4 h-4" /> GitHub{" "}
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://medium.com/@teshanj"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 text-sm border px-4 py-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
              >
                <BookOpen className="w-4 h-4" /> Medium{" "}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid sm:grid-cols-2 gap-4">
          <Item
            heading="Business Analysis"
            sub="Requirements • Research • Analyze"
          >
            Identify business needs and turn them into clear, practical
            solutions. Work closely with stakeholders to gather and understand
            requirements, analyze existing processes, and define structured
            acceptance criteria. Conduct product and market research to stay
            aligned with industry trends and business goals.
          </Item>
          <Item
            heading="Wireframing & Prototyping"
            sub="Clarity • Design • Usability Testing"
          >
            Create wireframes to design draft versions of products using tools
            like Figma. Work closely with UX designers to refine layouts and
            user flows. Develop interactive prototypes and conduct usability
            testing to validate design decisions. Use AI-powered tools to
            accelerate prototyping and improve design efficiency.
          </Item>
          <Item
            heading="Project Management"
            sub="Planning • Coordination • Delivery"
          >
            Lead cross-functional teams by facilitating Scrum ceremonies and
            ensuring smooth collaboration. Support team members in resolving
            challenges and maintaining momentum. Communicate effectively with
            stakeholders and represent the team in discussions. Ensure delivery
            aligns with planned roadmaps and project goals.
          </Item>
          <Item
            heading="Technical Writing"
            sub="Documentation • Specifications • API Docs"
          >
            Create clear and structured product documentation for end users,
            including detailed user flows and feature explanations. Develop SRS,
            and BRD documents to support project clarity and alignment. Produce
            technical documentation such as API documentations. Build and
            maintain documentation sites from scratch to ensure easy access to
            product knowledge.
          </Item>
          <Item
            heading="Engineering Foundation"
            sub="Development • Database • Clean Code"
          >
            Strong background in frontend and backend development with solid
            expertise in SQL and DBMS. This engineering foundation enables
            effective collaboration with technical teams and ensures business
            solutions are technically sound and scalable.
          </Item>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <Item
          heading="Xeynergy™"
          sub="Business Analyst / Design & Documentation Specialist"
          meta="2025 Oct – Present"
        >
          Supporting a North American logistics product across Business
          Analysis, Project Management, and Technical Writing. Managing sprint
          execution, maintaining structured documentation, reviewing test cases,
          conducting testing sessions, leveraging AI for task automation, and
          researching on tools & techniques to optimize development workflows.
        </Item>

        <Item
          heading="Rootcode"
          sub="Intern Business Analyst"
          meta="2024 Sept – 2025 Sept"
        >
          Contributed to client projects in the Healthcare and Analytics domains
          within the North American region, working in an Agile environment.
          Supported requirement mapping, stakeholder coordination,
          documentation, and facilitated SCRUM ceremonies. Collaborated with
          cross-functional teams to deliver features on time and improve
          productivity. <br /> <br /> Played the Business Analyst & Product
          Owner roles in Skapp that won Awards at NBQSA 2025 and was also
          recognized at the Asia Pacific ICT Awards 2025. Contributed to
          requirement analysis, roadmap definition, market research, competitor
          analysis, and close collaboration with UX teams on wireframing and
          usability testing. Leveraged tools such as Jira and GitHub Projects
          for effective project tracking and visibility.
        </Item>

        <Item
          heading="LB Finance PLC"
          sub="Associate Software Engineer"
          meta="2024 Mar – 2024 Sept"
        >
          Worked as a Full-Stack Developer on Eclipse, the enterprise core
          system supporting business operations. Contributed to the Deposit and
          General Ledger modules using Angular and ASP.NET, while designing and
          optimizing SQL Server procedures and queries. Collaborated within an
          Agile environment, conducted tech talks, and supported intern
          engineers through knowledge-sharing sessions.
        </Item>

        <Item
          heading="LB Finance PLC"
          sub="Intern Software Engineer"
          meta="2023 Aug – 2024 Feb"
        >
          The very first experience in a <b>tech role!</b> Worked as an Intern
          Full-Stack Developer on Eclipse, the core enterprise system supporting
          key business operations. Developed frontend components using Angular
          and backend services with ASP.NET, while designing SQL Server
          procedures and functions for efficient data handling. Applied Clean
          Code and TDD practices within an Agile environment and collaborated
          with cross-functional teams to deliver business-aligned features.
        </Item>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <Item
          heading="BSc in Information Technology (Hons) – Specializing in SWE"
          sub="Sri Lanka Institute of Information Technology (SLIIT)"
          meta="2021 Jul – 2025 Jul"
        >
          Graduated with <b>Second Class Honours</b> from a four-year Software
          Engineering degree program focused on designing and developing
          software systems. Gained strong knowledge in programming, databases,
          and core software engineering principles, supported by hands-on
          experience through academic and industry-based projects.
        </Item>

        <Item
          heading="Advanced Level & Ordinary Level"
          sub="St. Peter's College, Colombo 04"
          meta="2006 – 2019"
        >
          Completed primary and secondary education from Grade 1 to Grade 13.
          Pursued Advanced Level studies in the Physical Science stream.
          Actively participated in extracurricular activities, contributing to
          teamwork, and overall personal development.
        </Item>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Let’s Connect!">
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
          Whether you need a Business Analyst to translate business needs into
          clear solutions, support product strategy, or collaborate on
          delivering meaningful outcomes, I’m always open to new opportunities.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3">
          {/* Primary Button */}
          <a
            href="https://calendly.com/YOUR_USERNAME/YOUR_EVENT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm px-5 py-2.5 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-black hover:opacity-90 transition"
          >
            <CalendarDays className="w-4 h-4" />
            Book a Meeting
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Secondary Buttons */}
          <a
            href="mailto:teshan@jayakodylk.com"
            className="inline-flex items-center gap-2 text-sm border px-4 py-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
          >
            <Mail className="w-4 h-4" />
            Email me
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/teshanjayakody/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm border px-4 py-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
          >
            <Linkedin className="w-4 h-4" />
            Connect on LinkedIn
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto px-5 py-10 text-sm flex items-center justify-between">
          <span>© {new Date().getFullYear()} Teshan Jayakody</span>
          <a href="#top" className="text-xs underline underline-offset-4">
            Back to top
          </a>
        </div>
      </footer>

      {/* Minimal scroll behavior */}
      <style>{`html{scroll-behavior:smooth}`}</style>
    </div>
  );
}
