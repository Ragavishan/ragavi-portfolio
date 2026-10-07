"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="top" className="min-h-screen bg-[#f4f1ef] text-[#053534]">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-[#d8d0cc] bg-[#f4f1ef]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="text-xl font-bold tracking-tight"
          >
            RAGAVI S<span className="text-[#9c5223]">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-7 text-sm text-[#365452] lg:flex">
            <a href="#about" className="transition hover:text-[#9c5223]">
              About
            </a>

            <a href="#skills" className="transition hover:text-[#9c5223]">
              Skills
            </a>

            <a href="#projects" className="transition hover:text-[#9c5223]">
              Projects
            </a>

            <a href="#ai" className="transition hover:text-[#9c5223]">AI</a>

            <a href="#education" className="transition hover:text-[#9c5223]">
              Education
            </a>

            <a
              href="#certifications"
              className="transition hover:text-[#9c5223]"
            >
              Certifications
            </a>

            <a href="#experience" className="transition hover:text-[#9c5223]">
              Experience
            </a>

            <a href="#journey" className="transition hover:text-[#9c5223]">
              Recent Project Journey
            </a>

            <a href="#contact" className="transition hover:text-[#9c5223]">
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden rounded-full border border-[#9c5223]/40 px-5 py-2 text-sm font-medium text-[#9c5223] transition hover:bg-[#053534] hover:text-white lg:block"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-[#d8d0cc] px-3 py-2 text-xl text-[#365452] transition hover:border-[#9c5223]/40 hover:text-[#9c5223] lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-[#d8d0cc] bg-[#f4f1ef] px-6 py-5 lg:hidden">
            <div className="flex max-h-[75vh] flex-col gap-1 overflow-y-auto text-sm text-[#365452]">
              <MobileNavLink
                href="#about"
                label="About"
                onClick={() => setMenuOpen(false)}
              />

              <MobileNavLink
                href="#skills"
                label="Skills"
                onClick={() => setMenuOpen(false)}
              />

              <MobileNavLink
                href="#projects"
                label="Projects"
                onClick={() => setMenuOpen(false)}
              />

              <MobileNavLink
                href="#ai"
                label="AI / ML"
                onClick={() => setMenuOpen(false)}
              />

              <MobileNavLink
                href="#education"
                label="Education"
                onClick={() => setMenuOpen(false)}
              />

              <MobileNavLink
                href="#certifications"
                label="Certifications"
                onClick={() => setMenuOpen(false)}
              />

              <MobileNavLink
                href="#experience"
                label="Experience"
                onClick={() => setMenuOpen(false)}
              />

              <MobileNavLink
                href="#achievements"
                label="Awards"
                onClick={() => setMenuOpen(false)}
              />

              <MobileNavLink
                href="#journey"
                label="Journey"
                onClick={() => setMenuOpen(false)}
              />

              <MobileNavLink
                href="#contact"
                label="Contact"
                onClick={() => setMenuOpen(false)}
              />

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 rounded-full bg-[#053534] px-5 py-3 text-center font-semibold text-white transition hover:bg-[#9c5223]"
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </nav>


      {/* Hero */}
      <section className="relative flex items-center overflow-hidden px-6 py-10 sm:py-12">
        {/* Background Glow */}
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#ccb7ba]/30 blur-3xl" />

        <div className="relative mx-auto w-full max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">

            {/* LEFT SIDE */}
            <div className="max-w-4xl">

              <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-[#9c5223]">
                Data Analyst • ML Engineer • Developer
              </p>

              <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-[#053534] to-[#9c5223] bg-clip-text text-transparent">
                  Ragavi.S
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#536260] sm:text-xl">
                I build data-driven solutions, intelligent machine learning
                applications, and modern web experiences.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href="#projects"
                  className="rounded-full bg-[#053534] px-7 py-3.5 font-semibold text-white transition hover:bg-[#9c5223]"
                >
                  View My Projects
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-[#cfc5c0] px-7 py-3.5 font-semibold text-[#053534] transition hover:border-[#9c5223]/50 hover:bg-[#ccb7ba]/25"
                >
                  Contact Me
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="rounded-full border border-[#9c5223]/40 px-7 py-3.5 font-semibold text-[#7b3f1b] transition hover:bg-[#053534] hover:text-[#053534]"
                >
                  Download Resume ↓
                </a>

              </div>

              {/* Quick Stats */}
              <div className="mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
                <StatCard value="9.34" label="M.Sc CGPA" />
                <StatCard value="2+" label="Internships" />
                <StatCard value="AI/ML" label="Projects" />
                <StatCard value="2" label="Live Websites" />
              </div>

            </div>

            {/* RIGHT SIDE - PROFILE */}
            <div className="flex translate-y-10 justify-center md:justify-end">

              <div className="relative w-[290px] sm:w-[310px]">

                {/* Cyan Glow */}
                <div className="absolute -inset-4 rounded-[2rem] bg-[#9c5223]/10 blur-3xl" />

                <div className="relative h-[390px] w-full overflow-hidden rounded-[2rem] border border-[#d8d0cc] shadow-2xl">
                  <img
                    src="/images/profile/ragavi-profile.png"
                    alt="Ragavi S"
                    className="h-full w-full object-cover object-[50%_70%]"
                  />
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#9c5223]">
              About Me
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Data-driven thinking.
              <br />
              <span className="text-[#536260]">
                Intelligent solutions.
              </span>
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#536260]">
            <p>
              I am a Data Science professional with hands-on experience in
              machine learning, data analysis, Python development, and
              intelligent application development.
            </p>

            <p>
              My experience includes building AI-powered detection systems,
              machine learning models, data analysis projects, and web-based
              applications.
            </p>

            <p>
              I enjoy learning new technologies and turning real-world
              problems into practical, data-driven solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-y border-[#d8d0cc] bg-[#ccb7ba]/25/40 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-[#9c5223]">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Technologies I work with
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <SkillCard
              title="Programming"
              skills={["Python", "SQL", "JavaScript", "TypeScript"]}
            />

            <SkillCard
              title="Data & Analytics"
              skills={["Power BI", "Excel", "Pandas", "NumPy"]}
            />

            <SkillCard
              title="AI / Machine Learning"
              skills={[
                "Scikit-learn",
                "TensorFlow",
                "PyTorch",
                "YOLOv8",
                "OpenCV",
              ]}
            />

            <SkillCard
              title="Development"
              skills={[
                "React",
                "Next.js",
                "Tailwind CSS",
                "Flask",
                "FastAPI",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Websites */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.25em] text-[#9c5223]">
          Featured Projects
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Websites I have built
        </h2>

        <p className="mt-5 max-w-2xl text-[#536260]">
          Real-world websites designed and developed with modern web
          technologies, responsive interfaces, and practical functionality.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Iswarya */}
          <article className="group overflow-hidden rounded-3xl border border-[#d8d0cc] bg-white transition duration-300 hover:-translate-y-2 hover:border-[#9c5223]/30">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/images/projects/iswarya-hospital.png"
                alt="Iswarya Hospital website"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-[#f4f1ef]/20" />
            </div>

            <div className="p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">
                    Iswarya | Best Multi-Spaciality Hospital, Palani
                  </h3>

                  <p className="mt-3 leading-7 text-[#536260]">
                    A modern hospital website designed to present healthcare
                    services, departments, facilities, and patient-focused
                    information through a responsive web experience.
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-[#9c5223]/20 bg-[#9c5223]/10 px-3 py-1 text-xs text-[#9c5223]">
                  Live
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "TypeScript",
                  "React",
                  "Tailwind CSS",
                  "MongoDB",
                ].map((tech) => (
                  <TechBadge key={tech} text={tech} />
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://www.iswaryahospitalpalani.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#053534] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#9c5223]"
                >
                  Live Website ↗
                </a>

                <a
                  href="https://github.com/Ragavishan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#d8d0cc] px-5 py-2.5 text-sm font-semibold text-[#053534] transition hover:border-[#9c5223]/50 hover:bg-[#ccb7ba]/25"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </article>

          {/* Chengene */}
          <article className="group overflow-hidden rounded-3xl border border-[#d8d0cc] bg-white transition duration-300 hover:-translate-y-2 hover:border-[#9c5223]/30">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/images/projects/chengene.png"
                alt="Chengene biotechnology research website"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-[#f4f1ef]/20" />
            </div>

            <div className="p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">
                    Chengene Private Limited
                  </h3>

                  <p className="mt-3 leading-7 text-[#536260]">
                    A biotechnology and research-focused website developed to
                    present scientific work, research initiatives, and the
                    organization's biotechnology-focused identity through a
                    modern responsive web experience.
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
                  Live
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "TypeScript",
                  "React",
                  "Next.js",
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                  "JavaScript",
                  "JSON",
                  "Git",
                  "PowerShell",
                ].map((tech) => (
                  <TechBadge key={tech} text={tech} />
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://www.chengene.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#053534] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#9c5223]"
                >
                  Live Website ↗
                </a>

                <a
                  href="https://github.com/Ragavishan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#d8d0cc] px-5 py-2.5 text-sm font-semibold text-[#053534] transition hover:border-[#9c5223]/50 hover:bg-[#ccb7ba]/25"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* AI / ML Projects */}
      <section id="ai" className="bg-[#f4f1ef] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Section Header */}
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#9c5223]">
              AI & Machine Learning
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[#053534] sm:text-4xl">
              Featured AI / ML Projects
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[#536260]">
              Practical projects focused on artificial intelligence, machine
              learning, computer vision, data analysis and intelligent systems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2">

            {/* Project 1 */}
            <MLProjectCard
              icon="🛡️"
              title="AI-Based Kindergarten Safety Monitoring System"
              description="An AI-based safety monitoring system designed to support kindergarten environments by identifying and monitoring safety-related situations."
              technologies={[
                "Python",
                "Machine Learning",
                "Computer Vision",
                "OpenCV",
              ]}
              number="01"
            />

            {/* Project 2 */}
            <MLProjectCard
              icon="🐾"
              title="AI-Powered Smart Animal Detection & Scaring System"
              description="An intelligent computer vision system that detects animals using a custom-trained YOLOv8 model and supports automated animal-scaring functionality."
              technologies={[
                "Python",
                "YOLOv8",
                "OpenCV",
                "FastAPI",
                "Raspberry Pi",
                "SQLite",
              ]}
              number="02"
            />

            {/* Project 3 */}
            <MLProjectCard
              icon="🔐"
              title="AI-Driven Security Analysis of Reverse-Text CAPTCHAs"
              description="A security-focused project that analyzes reverse-text CAPTCHA mechanisms and explores machine learning based approaches for CAPTCHA recognition."
              technologies={[
                "Python",
                "Flask",
                "Machine Learning",
                "SQLite",
                "REST API",
                "HTML",
                "CSS",
                "JavaScript",
              ]}
              number="03"
            />

            {/* Project 4 */}
            <MLProjectCard
              icon="📊"
              title="Student Performance Data Analysis"
              description="A data analysis project focused on exploring student performance data, identifying patterns and generating meaningful insights from academic information."
              technologies={[
                "Python",
                "Data Analysis",
                "Pandas",
                "Data Visualization",
              ]}
              number="04"
            />

          </div>
        </div>
      </section>
      
      {/* Education */}
      <section id="education" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#9c5223]">
              Academic Journey
            </p>

            <h2 className="text-3xl font-bold text-[#053534] sm:text-4xl">
              Education
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[#536260]">
              My academic background in computer science, information technology,
              and data science.
            </p>
          </div>

          <div className="relative">

            {/* Timeline Line */}
            <div className="absolute left-4 top-0 hidden h-full w-px bg-white border border-[#d8d0cc] sm:left-1/2 sm:block" />

            <div className="space-y-10">

              {/* M.Sc */}
              <EducationCard
                year="2024 – 2026"
                degree="M.Sc Data Science"
                institution="Postgraduate Degree"
                score="CGPA 9.34"
                description="Advanced study focused on data science, machine learning, artificial intelligence, analytics and computational techniques."
                side="left"
              />

              {/* B.Ed */}
              <EducationCard
                year="2019 – 2021"
                degree="B.Ed Computer Science"
                institution="Bachelor of Education"
                score="CGPA 8.43"
                description="Academic background combining computer science knowledge with teaching and educational methodologies."
                side="right"
              />

              {/* B.Sc */}
              <EducationCard
                year="2016 – 2019"
                degree="B.Sc Information Technology"
                institution="Undergraduate Degree"
                score="CGPA 7.26"
                description="Foundation in information technology, programming, software concepts and computer applications."
                side="left"
              />

            </div>
          </div>
        </div>
      </section>


      {/* Certifications & Research */}
      <section id="certifications" className="bg-[#f4f1ef] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          {/* Header */}
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#9c5223]">
              Research & Achievements
            </p>

            <h2 className="text-3xl font-bold text-[#053534] sm:text-4xl">
              Certifications & Research
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[#536260]">
              Academic research and professional learning that support my journey
              in artificial intelligence, machine learning and data science.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Research */}
            <div className="group rounded-3xl border border-[#d8d0cc] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#9c5223]/30">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#9c5223]/20 bg-[#9c5223]/10 text-2xl">
                🔬
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-widest text-[#9c5223]">
                Research Paper
              </p>

              <h3 className="mt-3 text-2xl font-bold leading-snug text-[#053534] group-hover:text-[#9c5223]">
                AI-Based Emergency Victim Identification using ML
              </h3>

              <p className="mt-5 leading-7 text-[#536260]">
                Research work focused on applying machine learning techniques
                toward emergency victim identification and intelligent
                identification systems.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <span className="rounded-full border border-[#d8d0cc] bg-[#ccb7ba]/25 px-3 py-1.5 text-xs text-[#365452]">
                  Artificial Intelligence
                </span>

                <span className="rounded-full border border-[#d8d0cc] bg-[#ccb7ba]/25 px-3 py-1.5 text-xs text-[#365452]">
                  Machine Learning
                </span>

                <span className="rounded-full border border-[#d8d0cc] bg-[#ccb7ba]/25 px-3 py-1.5 text-xs text-[#365452]">
                  Research
                </span>
              </div>
            </div>

            {/* Professional Learning */}
            <div className="group rounded-3xl border border-[#d8d0cc] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#9c5223]/30">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#9c5223]/20 bg-[#9c5223]/10 text-2xl">
                🏆
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-widest text-[#9c5223]">
                Professional Development
              </p>

              <h3 className="mt-3 text-2xl font-bold leading-snug text-[#053534] group-hover:text-[#9c5223]">
                Continuous Learning
              </h3>

              <p className="mt-5 leading-7 text-[#536260]">
                Continuously building practical knowledge through technical
                projects, internships, research activities and hands-on work in
                data science, machine learning and software development.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <span className="rounded-xl border border-[#d8d0cc] bg-[#ccb7ba]/25 px-3 py-3 text-center text-xs text-[#365452]">
                  Python
                </span>

                <span className="rounded-xl border border-[#d8d0cc] bg-[#ccb7ba]/25 px-3 py-3 text-center text-xs text-[#365452]">
                  Data Science
                </span>

                <span className="rounded-xl border border-[#d8d0cc] bg-[#ccb7ba]/25 px-3 py-3 text-center text-xs text-[#365452]">
                  Machine Learning
                </span>

                <span className="rounded-xl border border-[#d8d0cc] bg-[#ccb7ba]/25 px-3 py-3 text-center text-xs text-[#365452]">
                  AI
                </span>

                <span className="rounded-xl border border-[#d8d0cc] bg-[#ccb7ba]/25 px-3 py-3 text-center text-xs text-[#365452]">
                  Computer Vision
                </span>

                <span className="rounded-xl border border-[#d8d0cc] bg-[#ccb7ba]/25 px-3 py-3 text-center text-xs text-[#365452]">
                  Analytics
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Recent Project Journey */}
      <section
        id="journey"
        className="bg-[#f4f1ef] px-6 py-16 sm:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#9c5223]">
              Recent Project Journey
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[#053534] sm:text-4xl">
              From Ideas to Live Projects
            </h2>

            <p className="mt-4 text-base leading-7 text-[#536260]">
              From building my personal portfolio to developing and launching
              real-world websites.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <ProjectJourneyCard
              number="01"
              date="July 2026"
              title="Personal Portfolio"
              type="Personal Project"
              description="Designed and developed my personal portfolio website to showcase my skills, projects, education, experience, and technical journey."
              tags={["TypeScript", "React", "Next.js", "Tailwind CSS"]}
            />

            <ProjectJourneyCard
              number="02"
              date="August 2026"
              title="Hospital Website"
              type="Live Website"
              description="Developed a modern responsive hospital website with structured healthcare services, departments, emergency information, gallery, and patient-focused content."
              tags={["TypeScript", "React", "Next.js", "Tailwind CSS"]}
            />

            <ProjectJourneyCard
              number="03"
              date="September 2026"
              title="Chengene Website"
              type="Live Website"
              description="Developed a biotechnology and research-focused website to present scientific work, research initiatives, and the organization’s biotechnology-focused identity."
              tags={["TypeScript", "React", "Next.js", "Tailwind CSS"]}
            />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-[#f4f1ef] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Header */}
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#9c5223]">
              Career Journey
            </p>

            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#053534] sm:text-5xl">
                  Experience & Work
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-[#536260]">
                  My professional journey across technology, education, public
                  service and practical learning experiences.
                </p>
              </div>

              <div className="hidden text-right lg:block">
                <p className="text-5xl font-black text-[#053534]/10">06</p>
                <p className="text-xs uppercase tracking-[0.25em] text-[#536260]">
                  Experiences
                </p>
              </div>
            </div>
          </div>

          

          {/* Experience List */}
          <div className="space-y-5">

            <ExperienceCard
              number="01"
              period="Dec 2024 — Mar 2025"
              role="Technical Intern"
              organization="CodeTech IT Solutions"
              type="TECHNICAL INTERNSHIP"
              description="Gained practical exposure to software development, programming and real-world technical project implementation."
            />

            <ExperienceCard
              number="02"
              period="Apr 2025 — May 2025"
              role="Technical Intern"
              organization="Stax Tech IT Solutions"
              type="TECHNICAL INTERNSHIP"
              description="Worked on technical development activities and strengthened practical skills through real-world project exposure."
            />

            <ExperienceCard
              number="03"
              period="2022 — 2024"
              role="BT. Assistant"
              organization="Bharath Matriculation School, Trichy"
              type="EDUCATION"
              description="Supported classroom activities, student learning and academic responsibilities in a school environment."
            />

            <ExperienceCard
              number="04"
              period="2023 & 2024"
              role="Public Exam Hall Supervisor"
              organization="Government of Tamil Nadu, India"
              type="PUBLIC SERVICE"
              description="Supported public examination procedures and helped maintain an organized and responsible examination environment."
            />

            <ExperienceCard
              number="05"
              period="2021 — 2022"
              role="BT. Assistant"
              organization="S.R Vidhyalaya Matric Higher Secondary School, Trichy"
              type="EDUCATION"
              description="Assisted with classroom activities, student support and teaching-related responsibilities."
            />

            <ExperienceCard
              number="06"
              period="Volunteer Experience"
              role="Illam Thedi Kalvi"
              organization="Government of Tamil Nadu"
              type="VOLUNTEER"
              description="Participated in educational outreach and supported learning activities as a volunteer."
            />

          </div>
        </div>
      </section>

      {/* Awards & Achievements */}
      <section
        id="achievements"
        className="relative overflow-hidden bg-[#f4f1ef] px-6 py-20 sm:px-10 lg:px-20"
      >
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#ccb7ba]/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#9c5223]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d8d0cc] bg-white px-4 py-2 shadow-sm">
                <span className="text-sm">🏆</span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9c5223]">
                  Recognition & Milestones
                </span>
              </div>

              <h2 className="text-4xl font-black tracking-tight text-[#053534] sm:text-5xl lg:text-6xl">
                Awards &
                <span className="block text-[#9c5223]">
                  Achievements
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#536260]">
                A collection of achievements earned through academics, sports,
                competitions and professional contributions throughout my journey.
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-3xl border border-[#d8d0cc] bg-white px-8 py-6 text-center shadow-[0_20px_50px_rgba(5,53,52,0.10)]">
                <p className="text-5xl font-black text-[#053534]">08</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.25em] text-[#6b7775]">
                  Recognitions
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* 01 Academic */}
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-[#d8d0cc] bg-white p-6 shadow-[0_15px_40px_rgba(5,53,52,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#9c5223]/30 hover:shadow-[0_25px_60px_rgba(156,82,35,0.14)]">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#ccb7ba]/30 blur-2xl" />
              <div className="relative">
                <div className="flex items-start justify-between"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ccb7ba]/25 text-2xl">🥈</div><span className="text-4xl font-black text-[#053534]/5">01</span></div>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#9c5223]">Academic Achievement</p>
                <h3 className="mt-2 text-xl font-black text-[#053534]">2nd Place</h3>
                <p className="mt-3 text-sm leading-6 text-[#536260]">Academic Achievement — 2024 to 2026</p>
                <div className="mt-6 h-1 w-10 rounded-full bg-[#9c5223] transition-all duration-300 group-hover:w-16" />
              </div>
            </div>

            {/* 02 Academic */}
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-[#d8d0cc] bg-white p-6 shadow-[0_15px_40px_rgba(5,53,52,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#9c5223]/30 hover:shadow-[0_25px_60px_rgba(156,82,35,0.14)]">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#ccb7ba]/30 blur-2xl" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ccb7ba]/25 text-2xl">🥇</div>
                  <span className="text-4xl font-black text-[#053534]/5">02</span>
                </div>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#9c5223]">Academic Achievement</p>
                <h3 className="mt-2 text-xl font-black text-[#053534]">1st Place</h3>
                <p className="mt-3 text-sm leading-6 text-[#536260]">Academic Achievement — 2019 to 2020</p>
                <div className="mt-6 h-1 w-10 rounded-full bg-[#9c5223] transition-all duration-300 group-hover:w-16" />
              </div>
            </div>

            {/* 03 Teacher */}
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-[#d8d0cc] bg-white p-6 shadow-[0_15px_40px_rgba(5,53,52,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#9c5223]/30 hover:shadow-[0_25px_60px_rgba(156,82,35,0.14)]">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#ccb7ba]/30 blur-2xl" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ccb7ba]/25 text-2xl">🏆</div>
                  <span className="text-4xl font-black text-[#053534]/5">03</span>
                </div>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#9c5223]">Professional Recognition</p>
                <h3 className="mt-2 text-xl font-black text-[#053534]">Best Teacher & Best Well-Wisher</h3>
                <p className="mt-3 text-sm leading-6 text-[#536260]">Awards received in 2023 & 2024</p>
                <div className="mt-6 h-1 w-10 rounded-full bg-[#9c5223] transition-all duration-300 group-hover:w-16" />
              </div>
            </div>

            {/* 04 Sports */}
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-[#d8d0cc] bg-white p-6 shadow-[0_15px_40px_rgba(5,53,52,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#9c5223]/30 hover:shadow-[0_25px_60px_rgba(156,82,35,0.14)]">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#ccb7ba]/30 blur-2xl" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ccb7ba]/25 text-2xl">🏅</div>
                  <span className="text-4xl font-black text-[#053534]/5">04</span>
                </div>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#9c5223]">Sports Achievement</p>
                <h3 className="mt-2 text-xl font-black text-[#053534]">1st Place</h3>
                <p className="mt-3 text-sm leading-6 text-[#536260]">100m & 400m — Annual Sports Meet 2019 to 2020</p>
                <div className="mt-6 h-1 w-10 rounded-full bg-[#9c5223] transition-all duration-300 group-hover:w-16" />
              </div>
            </div>

            {/* 05 Poetry */}
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-[#d8d0cc] bg-white p-6 shadow-[0_15px_40px_rgba(5,53,52,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#9c5223]/30 hover:shadow-[0_25px_60px_rgba(156,82,35,0.14)]">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#ccb7ba]/30 blur-2xl" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ccb7ba]/25 text-2xl">✍️</div>
                  <span className="text-4xl font-black text-[#053534]/5">05</span>
                </div>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#9c5223]">Competition</p>
                <h3 className="mt-2 text-xl font-black text-[#053534]">1st Place</h3>
                <p className="mt-3 text-sm leading-6 text-[#536260]">Poetry Competition — WINGS&apos;19</p>
                <div className="mt-6 h-1 w-10 rounded-full bg-[#9c5223] transition-all duration-300 group-hover:w-16" />
              </div>
            </div>

            {/* 06 Sports */}
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-[#d8d0cc] bg-white p-6 shadow-[0_15px_40px_rgba(5,53,52,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#9c5223]/30 hover:shadow-[0_25px_60px_rgba(156,82,35,0.14)]">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#ccb7ba]/30 blur-2xl" />
              <div className="relative">
                <div className="flex items-start justify-between"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ccb7ba]/25 text-2xl">🥈</div><span className="text-4xl font-black text-[#053534]/5">06</span></div>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#9c5223]">Sports Achievement</p>
                <h3 className="mt-2 text-xl font-black text-[#053534]">2nd Place</h3>
                <p className="mt-3 text-sm leading-6 text-[#536260]">Throwball & Shot Put — Annual Sports Meet 2019 to 2020</p>
                <div className="mt-6 h-1 w-10 rounded-full bg-[#9c5223] transition-all duration-300 group-hover:w-16" />
              </div>
            </div>

            {/* 07 Athletics */}
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-[#d8d0cc] bg-white p-6 shadow-[0_15px_40px_rgba(5,53,52,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#9c5223]/30 hover:shadow-[0_25px_60px_rgba(156,82,35,0.14)]">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#ccb7ba]/30 blur-2xl" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ccb7ba]/25 text-2xl">🥉</div>
                <span className="absolute right-0 top-0 text-4xl font-black text-[#053534]/5">07</span>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#9c5223]">Athletics</p>
                <h3 className="mt-2 text-xl font-black text-[#053534]">3rd Place</h3>
                <p className="mt-3 text-sm leading-6 text-[#536260]">District-Level Athletics Meet — 2022</p>
                <div className="mt-6 h-1 w-10 rounded-full bg-[#9c5223] transition-all duration-300 group-hover:w-16" />
              </div>
            </div>

            {/* 08 Poetry */}
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-[#d8d0cc] bg-white p-6 shadow-[0_15px_40px_rgba(5,53,52,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#9c5223]/30 hover:shadow-[0_25px_60px_rgba(156,82,35,0.14)]">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#ccb7ba]/30 blur-2xl" />
              <div className="relative">
                <div className="flex items-start justify-between"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ccb7ba]/25 text-2xl">🥈</div><span className="text-4xl font-black text-[#053534]/5">08</span></div>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#9c5223]">Competition</p>
                <h3 className="mt-2 text-xl font-black text-[#053534]">2nd Place</h3>
                <p className="mt-3 text-sm leading-6 text-[#536260]">Poetry — DEXTER FEST&apos;24</p>
                <div className="mt-6 h-1 w-10 rounded-full bg-[#9c5223] transition-all duration-300 group-hover:w-16" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#9c5223]/10 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#ccb7ba]/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            {/* Left */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#9c5223]">
                Get In Touch
              </p>

              <h2 className="max-w-xl text-4xl font-bold tracking-tight text-[#053534] sm:text-5xl">
                Let’s build something
                <span className="block text-[#9c5223]">
                  meaningful together.
                </span>
              </h2>

              <p className="mt-6 max-w-lg leading-7 text-[#536260]">
                I’m open to opportunities, collaborations and projects related to
                data science, machine learning, data analytics and software
                development.
              </p>

              {/* Contact Details */}
              <div className="mt-10 space-y-5">

                <a
                  href="mailto:ragavisri50@gmail.com"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d8d0cc] bg-[#ccb7ba]/25 text-xl transition group-hover:border-[#9c5223]/40">
                    ✉
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#536260]">
                      Email
                    </p>

                    <p className="mt-1 text-sm font-medium text-[#536260] transition group-hover:text-[#9c5223]">
                      ragavisri50@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/Ragavishan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d8d0cc] bg-[#ccb7ba]/25 transition group-hover:border-[#9c5223]/40">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current text-[#536260] transition group-hover:text-[#9c5223]"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.72c-2.78.63-3.37-1.38-3.37-1.38-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.59 2.36 1.13 2.94.86.09-.67.35-1.13.64-1.39-2.22-.26-4.56-1.15-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.17 9.17 0 0 1 12 8.1c.85 0 1.7.12 2.49.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.95.68 1.92v2.84c0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#536260]">
                      GitHub
                    </p>

                    <p className="mt-1 text-sm font-medium text-[#536260] transition group-hover:text-[#9c5223]">
                      github.com/Ragavishan
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/ragavi-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d8d0cc] bg-[#ccb7ba]/25 text-xl transition group-hover:border-[#9c5223]/40">
                    in
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#536260]">
                      LinkedIn
                    </p>

                    <p className="mt-1 text-sm font-medium text-[#536260] transition group-hover:text-[#9c5223]">
                      linkedin.com/in/ragavi-s
                    </p>
                  </div>
                </a>

              </div>
            </div>

            {/* Right - Contact Card */}
            <div className="rounded-3xl border border-[#d8d0cc] bg-[#f4f1ef]/70 p-6 shadow-2xl backdrop-blur sm:p-8">

              <div className="mb-7">
                <h3 className="text-2xl font-bold text-[#053534]">
                  Send a message
                </h3>

                <p className="mt-2 text-sm text-[#536260]">
                  Have an opportunity or project in mind? Feel free to reach out.
                </p>
              </div>

              <form
                action="mailto:ragavisri50@gmail.com"
                method="POST"
                encType="text/plain"
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-[#365452]"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="Name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-[#d8d0cc] bg-[#ccb7ba]/25 px-4 py-3 text-sm text-[#053534] outline-none placeholder:text-[#536260] transition focus:border-[#9c5223]/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-[#365452]"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="Email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-[#d8d0cc] bg-[#ccb7ba]/25 px-4 py-3 text-sm text-[#053534] outline-none placeholder:text-[#536260] transition focus:border-[#9c5223]/50"
                    />
                  </div>

                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-[#365452]"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="Subject"
                    type="text"
                    required
                    placeholder="What would you like to discuss?"
                    className="w-full rounded-xl border border-[#d8d0cc] bg-[#ccb7ba]/25 px-4 py-3 text-sm text-[#053534] outline-none placeholder:text-[#536260] transition focus:border-[#9c5223]/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-[#365452]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="Message"
                    rows={5}
                    required
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-xl border border-[#d8d0cc] bg-[#ccb7ba]/25 px-4 py-3 text-sm text-[#053534] outline-none placeholder:text-[#536260] transition focus:border-[#9c5223]/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#053534] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#9c5223] hover:shadow-lg hover:shadow-cyan-400/20"
                >
                  Send Message →
                </button>
              </form>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#d8d0cc] bg-[#f4f1ef]">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

          <div className="grid gap-10 md:grid-cols-3">

            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold tracking-wide text-[#053534]">
                RAGAVI<span className="text-[#9c5223]">.</span>
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-6 text-[#536260]">
                Data Analyst, ML Engineer and Developer focused on building
                practical solutions with data, artificial intelligence and
                modern web technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#053534]">
                Quick Links
              </h4>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <a
                  href="#about"
                  className="text-[#536260] transition hover:text-[#9c5223]"
                >
                  About
                </a>

                <a
                  href="#skills"
                  className="text-[#536260] transition hover:text-[#9c5223]"
                >
                  Skills
                </a>

                <a
                  href="#projects"
                  className="text-[#536260] transition hover:text-[#9c5223]"
                >
                  Projects
                </a>

                <a
                  href="#ai"
                  className="text-[#536260] transition hover:text-[#9c5223]"
                >
                  AI / ML
                </a>

                <a
                  href="#education"
                  className="text-[#536260] transition hover:text-[#9c5223]"
                >
                  Education
                </a>

                <a
                  href="#experience"
                  className="text-[#536260] transition hover:text-[#9c5223]"
                >
                  Experience
                </a>

                <a
                  href="#certifications"
                  className="text-[#536260] transition hover:text-[#9c5223]"
                >
                  Research
                </a>

                <a
                  href="#contact"
                  className="text-[#536260] transition hover:text-[#9c5223]"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#053534]">
                Connect
              </h4>

              <div className="mt-5 space-y-3">

                <a
                  href="mailto:ragavisri50@gmail.com"
                  className="block text-sm text-[#536260] transition hover:text-[#9c5223]"
                >
                  ragavisri50@gmail.com
                </a>

                <a
                  href="https://github.com/Ragavishan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-[#536260] transition hover:text-[#9c5223]"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://linkedin.com/in/ragavi-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-[#536260] transition hover:text-[#9c5223]"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="inline-block pt-1 text-sm font-semibold text-[#9c5223] transition hover:text-[#9c5223]"
                >
                  Download Resume ↓
                </a>

              </div>
            </div>

          </div>

          {/* Bottom */}
          <div className="mt-12 flex flex-col gap-4 border-t border-[#d8d0cc] pt-6 text-sm text-[#536260] sm:flex-row sm:items-center sm:justify-between">

            <p>
              © {new Date().getFullYear()} Ragavi S. All rights reserved.
            </p>

            <a
              href="#top"
              className="transition hover:text-[#9c5223]"
            >
              Back to top ↑
            </a>

          </div>

        </div>
      </footer>

    </main>
  );
}

/* Mobile Navigation Link */
function MobileNavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="rounded-lg px-4 py-3 transition hover:bg-[#ccb7ba]/25 hover:text-[#9c5223]"
    >
      {label}
    </a>
  );
}

/* Stat Card */
function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-[#d8d0cc] bg-white p-5">
      <p className="text-2xl font-bold text-[#053534]">{value}</p>

      <p className="mt-1 text-sm text-[#536260]">{label}</p>
    </div>
  );
}

/* Skill Card */
function SkillCard({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div className="rounded-3xl border border-[#d8d0cc] bg-[#f4f1ef] p-6 transition hover:-translate-y-1 hover:border-[#9c5223]/30">
      <h3 className="text-lg font-semibold">{title}</h3>

      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <TechBadge key={skill} text={skill} />
        ))}
      </div>
    </div>
  );
}

/* Technology Badge */
function TechBadge({
  text,
  cyan = false,
}: {
  text: string;
  cyan?: boolean;
}) {
  return (
    <span
      className={
        cyan
          ? "rounded-full border border-[#9c5223]/20 bg-[#9c5223]/10 px-3 py-1.5 text-xs text-[#9c5223]"
          : "rounded-full border border-[#d8d0cc] bg-white/[0.04] px-3 py-1.5 text-xs text-[#365452]"
      }
    >
      {text}
    </span>
  );
}

function MLProjectCard({
  icon,
  title,
  description,
  technologies,
  number,
}: {
  icon: string;
  title: string;
  description: string;
  technologies: string[];
  number: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-[#d8d0cc] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#9c5223]/40 hover:bg-[#ccb7ba]/25">

      {/* Project Number */}
      <div className="absolute right-6 top-5 text-5xl font-black text-[#053534]/[0.04]">
        {number}
      </div>

      {/* Icon */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#9c5223]/20 bg-[#9c5223]/10 text-2xl">
        {icon}
      </div>

      {/* Title */}
      <h3 className="max-w-xl text-xl font-bold leading-snug text-[#053534] transition-colors duration-300 group-hover:text-[#9c5223]">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-[#536260]">
        {description}
      </p>

      {/* Technologies */}
      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-[#d8d0cc] bg-[#ccb7ba]/25 px-3 py-1.5 text-xs font-medium text-[#365452]"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Bottom line */}
      <div className="mt-8 h-px w-full bg-gradient-to-r from-cyan-400/40 via-white/10 to-transparent" />

      <p className="mt-4 text-sm font-medium text-[#9c5223]">
        AI • ML • Intelligent Systems
      </p>
    </div>
  );
}

function ExperienceCard({
  number,
  period,
  role,
  organization,
  type,
  description,
}: {
  number: string;
  period: string;
  role: string;
  organization: string;
  type: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#d8d0cc] bg-white/[0.025] transition-all duration-300 hover:border-[#9c5223]/30 hover:bg-white/[0.045]">

      {/* Hover Accent */}
      <div className="absolute left-0 top-0 h-full w-1 bg-transparent transition-all duration-300 group-hover:bg-[#053534]" />

      <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[90px_220px_1fr_auto] lg:items-center">

        {/* Number */}
        <div className="hidden lg:block">
          <span className="text-4xl font-black tracking-tight text-[#053534]/10 transition-colors duration-300 group-hover:text-[#9c5223]/30">
            {number}
          </span>
        </div>

        {/* Period */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9c5223]">
            {period}
          </p>

          <div className="mt-3 h-px w-12 bg-[#9c5223]/40" />
        </div>

        {/* Main Content */}
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-bold text-[#053534] transition-colors duration-300 group-hover:text-[#9c5223]">
              {role}
            </h3>

            <span className="rounded-full border border-[#d8d0cc] bg-[#ccb7ba]/25 px-3 py-1 text-[10px] font-semibold tracking-wider text-[#536260]">
              {type}
            </span>
          </div>

          <p className="mt-2 font-medium text-[#365452]">
            {organization}
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#536260]">
            {description}
          </p>
        </div>

        {/* Arrow */}
        <div className="hidden lg:flex h-11 w-11 items-center justify-center rounded-full border border-[#d8d0cc] text-lg text-[#536260] transition-all duration-300 group-hover:border-[#9c5223]/30 group-hover:text-[#9c5223]">
          →
        </div>

      </div>
    </div>
  );
}

/* Certificate Item */
function CertificateItem({
  provider,
  title,
  note,
}: {
  provider: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="rounded-2xl border border-[#d8d0cc] bg-white p-4">
      <p className="text-sm font-medium text-[#9c5223]">
        {provider}
      </p>

      <p className="mt-1 font-medium text-[#053534]">
        {title}
      </p>

      {note && (
        <p className="mt-1 text-xs text-[#536260]">
          {note}
        </p>
      )}
    </div>
  );
}

/* Achievement Card */
function AchievementCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-[#d8d0cc] bg-[#f4f1ef] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#9c5223]/30">
      <span className="text-2xl">🏆</span>

      <h3 className="mt-5 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-[#536260]">
        {description}
      </p>
    </div>
  );
}

function EducationCard({
  year,
  degree,
  institution,
  score,
  description,
  side,
}: {
  year: string;
  degree: string;
  institution: string;
  score: string;
  description: string;
  side: "left" | "right";
}) {
  return (
    <div
      className={`relative sm:flex sm:items-center ${
        side === "right" ? "sm:justify-end" : "sm:justify-start"
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#9c5223] bg-[#053534] sm:left-1/2 sm:block" />

      <div className="w-full sm:w-[46%]">
        <div className="group rounded-3xl border border-[#d8d0cc] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#9c5223]/30 hover:bg-[#ccb7ba]/25">

          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-sm font-semibold text-[#9c5223]">
              {year}
            </span>

            <span className="rounded-full border border-[#9c5223]/20 bg-[#9c5223]/10 px-3 py-1 text-xs font-semibold text-[#9c5223]">
              {score}
            </span>
          </div>

          <h3 className="mt-5 text-xl font-bold text-[#053534] group-hover:text-[#9c5223]">
            {degree}
          </h3>

          <p className="mt-2 text-sm font-medium text-[#365452]">
            {institution}
          </p>

          <p className="mt-4 leading-7 text-[#536260]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function ProjectJourneyCard({
  number,
  date,
  title,
  type,
  description,
  tags,
}: {
  number: string;
  date: string;
  title: string;
  type: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#d8d0cc] bg-white/70 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#9c5223]/40 hover:bg-white">
      <div className="flex items-start justify-between">
        <span className="text-5xl font-black tracking-tight text-[#053534] transition-colors duration-300 group-hover:text-[#053534]">
          {number}
        </span>

        <span className="rounded-full border border-[#9c5223]/20 bg-[#9c5223]/10 px-3 py-1 text-xs font-medium text-[#9c5223]">
          {type}
        </span>
      </div>

      <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-[#9c5223]">
        {date}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-[#053534]">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-[#536260]">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-lg border border-[#cfc5c0] bg-[#f4f1ef] px-3 py-1.5 text-xs font-medium text-[#365452]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-7 h-px w-full bg-gradient-to-r from-[#9c5223]/50 via-[#d8d0cc] to-transparent" />
    </div>
  );
}