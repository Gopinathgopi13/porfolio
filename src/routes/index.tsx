import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Nav } from "@/components/nav";
import { Reveal } from "@/components/reveal";
import { HERO_TAGS, ROLES, SKILL_GROUPS } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gopinath Kathirvel — Full-Stack Software Engineer" },
      { name: "description", content: "Portfolio of Gopinath Kathirvel — building scalable web apps, distributed systems, and real-time platforms with React, TypeScript, Node.js & Go." },
    ],
  }),
  component: Index,
});

const SKILL_CLUSTERS = [
  {
    label: "Application layer",
    description: "Languages, UI, and backend systems",
    titles: ["Languages", "Frontend", "Backend"],
  },
  {
    label: "Data & realtime",
    description: "Storage, queues, and live communication",
    titles: ["Databases", "Messaging & Realtime"],
  },
  {
    label: "Ship & integrate",
    description: "Tooling, ops, and hardware boundaries",
    titles: ["Testing & Quality", "DevOps & Tooling", "Integration & Security", "Ways of Working"],
  },
] as const;

const TOTAL_SKILLS = SKILL_GROUPS.reduce((sum, group) => sum + group.items.length, 0);

function getExperienceDuration(startDate: string, endDate = new Date()) {
  const start = new Date(`${startDate}T00:00:00`);
  let months = (endDate.getFullYear() - start.getFullYear()) * 12 + endDate.getMonth() - start.getMonth();
  if (endDate.getDate() < start.getDate()) months -= 1;
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  return [years > 0 ? `${years}+ year${years === 1 ? "" : "s"}` : "", remainingMonths > 0 ? `${remainingMonths} month${remainingMonths === 1 ? "" : "s"}` : ""]
    .filter(Boolean)
    .join(" ");
}

function getTotalExperience() {
  const earliestStart = ROLES.map((role) => role.startDate).sort()[0];
  return getExperienceDuration(earliestStart);
}

function SectionHeader({ index, title, kicker }: { index: string; title: string; kicker?: string }) {
  return (
    <div className="mb-10 flex flex-col gap-2 md:mb-14">
      <div className="section-index">
        {index} <span className="text-muted-foreground/60">/</span>{" "}
        <span className="text-muted-foreground">{title}</span>
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {kicker ?? title}
      </h2>
    </div>
  );
}

function Section({ id, children, className = "" }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const email = "gopinathkathirvel13@gmail.com";
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        } catch {}
      }}
      className="group relative inline-flex items-center gap-2 rounded-md border border-border bg-surface-elevated px-4 py-2 font-mono text-sm text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
      {copied ? "copied!" : "copy email"}
    </button>
  );
}

function Index() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative pt-32 md:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-60" />
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/60 px-3 py-1 font-mono text-xs text-muted-foreground">
              <span className="relative grid h-2 w-2 place-items-center">
                <span className="absolute h-2 w-2 animate-ping rounded-full bg-primary/60" />
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>
              Coimbatore, Tamil Nadu, India
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-5xl font-semibold tracking-tight text-foreground md:text-7xl">
              Gopinath
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-foreground bg-clip-text text-transparent">
                Kathirvel
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-6 flex items-center gap-3 font-mono text-sm">
              <span className="h-px w-8 bg-primary" />
              <span className="text-muted-foreground">Full-Stack Software Engineer</span>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Building scalable web apps, distributed systems, and real-time platforms with{" "}
              <span className="text-foreground">React</span>,{" "}
              <span className="text-foreground">TypeScript</span>,{" "}
              <span className="text-foreground">Node.js</span> &{" "}
              <span className="text-foreground">Go</span>.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#experience"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                View Work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface-elevated px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
              >
                Get in Touch
              </a>
            </div>
          </Reveal>

          <Reveal delay={400} className="mt-16">
            <div className="relative -mx-6 overflow-hidden border-y border-border/60 bg-surface/40 py-4">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
              <div className="marquee-track flex w-max gap-3 pl-6">
                {[...HERO_TAGS, ...HERO_TAGS, ...HERO_TAGS].map((t, i) => (
                  <span key={i} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about">
        <SectionHeader index="01" title="About" kicker="Engineer who ships end-to-end." />
        <div className="grid gap-8 lg:grid-cols-1">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Full-Stack Software Engineer with <span className="text-foreground">{getTotalExperience()}</span> of experience building scalable web applications,
              distributed systems, and enterprise-grade platforms using{" "}
              <span className="text-foreground">React.js</span>,{" "}
              <span className="text-foreground">TypeScript</span>,{" "}
              <span className="text-foreground">Node.js</span>, and{" "}
              <span className="text-foreground">Go</span>. Skilled in designing end-to-end solutions
              across hospitality, device management, and enterprise security domains — covering
              modern frontend architectures, backend microservices, REST APIs, and cloud-native
              deployments. Experienced in access management, multi-tenant architecture, and team leadership, as well as event-driven systems, real-time communication (MQTT,
              WebSockets, RabbitMQ), background job processing with BullMQ & Redis, and database
              design with SQL and NoSQL technologies.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience">
        <SectionHeader index="02" title="Experience" kicker="Where I've shipped." />
        <div className="space-y-14">
          {ROLES.map((role) => (
            <Reveal key={role.company}>
              <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <div className="font-mono text-xs uppercase tracking-wider text-primary">{role.meta}</div>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{role.title}</h3>
                  <div className="mt-1 text-sm text-muted-foreground">{role.company}</div>
                </div>

                <div className="space-y-4">
                  {role.projects.map((p) => (
                    <div
                      key={p.name}
                      className="glow-card glow-card-hover rounded-xl border border-border bg-surface p-6"
                    >
                      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-3">
                        <h4 className="text-lg font-semibold text-foreground">{p.name}</h4>
                      </div>
                      <div className="mb-4 flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                      </div>
                      <ul className="space-y-2.5">
                        {p.bullets.map((b, i) => (
                          <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PROJECT */}
      <Section id="project">
        <SectionHeader index="03" title="Personal Projects" kicker="Tools I've built." />
        <div className="space-y-6">
        <Reveal>
          <div className="glow-card glow-card-hover relative overflow-hidden rounded-2xl border border-border bg-surface p-8 md:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <span className="text-primary">Python</span><span>·</span><span>Desktop &amp; CLI</span>
                </div>
                <h3 className="mt-3 font-mono text-3xl font-semibold tracking-tight text-foreground md:text-4xl">JobSprint</h3>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  Built a cross-platform job application assistant that automates job search and application workflows across Naukri, Hirist, and Foundit. It combines browser automation, resume-based matching, reusable form answers, and application tracking.
                </p>
                <ul className="mt-5 max-w-3xl space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <li>Browser automation with Playwright, skip rules, and supported application form filling.</li>
                  <li>Resume parsing and job-fit scoring, with deterministic fuzzy matching against a local SQLite knowledge base and user-in-the-loop answers remembered for future applications.</li>
                  <li>Excel application and session tracking, plus an optional FastAPI desktop dashboard with live progress and profile management, sharing the CLI application engine.</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {["Python", "Playwright", "FastAPI", "SQLite", "RapidFuzz", "pdfplumber", "openpyxl", "JavaScript", "HTML", "CSS"].map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
              <a
                href="https://github.com/Gopinathgopi13/job-agent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-fit items-center gap-2 self-start rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                GitHub link coming soon
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="glow-card glow-card-hover relative overflow-hidden rounded-2xl border border-border bg-surface p-8 md:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <span className="text-primary">npm</span>
                  <span>·</span>
                  <span>TypeScript / Node.js</span>
                </div>
                <h3 className="mt-3 font-mono text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  error-shield
                </h3>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  A TypeScript-first Node.js &amp; Express utility that standardizes API errors through
                  custom classes and centralized middleware — eliminating repetitive try/catch boilerplate.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-border/80 bg-background/50 p-4 transition-colors hover:border-primary/40">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="grid h-8 w-8 place-items-center rounded-md border border-border bg-surface-elevated font-mono text-xs text-primary">
                        01
                      </span>
                      <span className="font-mono text-2xl font-semibold tracking-tight text-primary">40+</span>
                    </div>
                    <h4 className="text-sm font-medium text-foreground">HTTP error creators</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Pre-built 4xx/5xx factories for consistent responses without manual status-code mapping.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border/80 bg-background/50 p-4 transition-colors hover:border-primary/40">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="grid h-8 w-8 place-items-center rounded-md border border-border bg-surface-elevated font-mono text-xs text-primary">
                        02
                      </span>
                      <span className="font-mono text-2xl font-semibold tracking-tight text-primary">~30%</span>
                    </div>
                    <h4 className="text-sm font-medium text-foreground">Less boilerplate</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Async wrappers and middleware factories cut repetitive error-handling code in Express apps.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border/80 bg-background/50 p-4 transition-colors hover:border-primary/40">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="grid h-8 w-8 place-items-center rounded-md border border-border bg-surface-elevated font-mono text-xs text-primary">
                        03
                      </span>
                      <span className="rounded-full border border-border bg-surface-elevated px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-primary">
                        OSS
                      </span>
                    </div>
                    <h4 className="text-sm font-medium text-foreground">Drop-in middleware</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Published on npm with a single integration point for structured errors across your stack.
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="https://github.com/Gopinathgopi13/error-shield"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-fit items-center gap-2 self-start rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                View on GitHub
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M7 7h10v10" /></svg>
              </a>
            </div>
          </div>
        </Reveal>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills">
        <SectionHeader index="04" title="Skills" kicker="The stack I reach for." />

        <Reveal>
          <div className="mb-8 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 py-2 font-mono text-xs text-muted-foreground">
              <span className="text-primary">{SKILL_GROUPS.length}</span>
              domains
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 py-2 font-mono text-xs text-muted-foreground">
              <span className="text-primary">{TOTAL_SKILLS}</span>
              technologies
            </div>
          </div>
        </Reveal>

        <div className="space-y-6">
          {SKILL_CLUSTERS.map((cluster, clusterIndex) => {
            const groups = cluster.titles
              .map((title) => SKILL_GROUPS.find((group) => group.title === title))
              .filter((group): group is (typeof SKILL_GROUPS)[number] => group != null);

            return (
              <Reveal key={cluster.label} delay={clusterIndex * 80}>
                <div className="overflow-hidden rounded-2xl border border-border bg-surface">
                  <div className="border-b border-border/60 bg-surface-elevated/40 px-6 py-5 md:px-8">
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">{cluster.label}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{cluster.description}</p>
                  </div>

                  <div className="divide-y divide-border/60">
                    {groups.map((group) => {
                      const groupIndex = SKILL_GROUPS.findIndex((item) => item.title === group.title) + 1;

                      return (
                        <div
                          key={group.title}
                          className="group flex flex-col gap-4 px-6 py-5 transition-colors hover:bg-background/30 md:flex-row md:items-start md:gap-8 md:px-8"
                        >
                          <div className="flex shrink-0 items-start gap-3 md:w-56">
                            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-background font-mono text-xs text-primary">
                              {String(groupIndex).padStart(2, "0")}
                            </span>
                            <div className="min-w-0">
                              <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
                              <p className="mt-0.5 font-mono text-[0.65rem] text-muted-foreground">
                                {group.items.length} {group.items.length === 1 ? "tool" : "tools"}
                              </p>
                            </div>
                          </div>

                          <div className="flex min-w-0 flex-1 flex-wrap gap-2">
                            {group.items.map((skill) => (
                              <span
                                key={skill}
                                className="inline-flex items-center rounded-md border border-border/80 bg-background/50 px-2.5 py-1.5 font-mono text-[0.72rem] text-muted-foreground transition-colors group-hover:border-primary/25 hover:border-primary/50 hover:text-foreground"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education">
        <SectionHeader index="05" title="Education" kicker="Foundations." />
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="glow-card glow-card-hover h-full rounded-xl border border-border bg-surface p-6">
              <div className="font-mono text-xs uppercase tracking-wider text-primary">2019 – 2023 · Tamil Nadu</div>
              <h3 className="mt-3 text-lg font-semibold text-foreground">Bachelor of Engineering — Computer Science & Engineering</h3>
              <div className="mt-1 text-sm text-muted-foreground">Mahendra Engineering College</div>
              <div className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-foreground">
                <span className="text-muted-foreground">CGPA</span> 8.0 <span className="text-muted-foreground">/ 10</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="glow-card glow-card-hover h-full rounded-xl border border-border bg-surface p-6">
              <div className="font-mono text-xs uppercase tracking-wider text-primary">Jun 2023 – Dec 2024 · Bangalore</div>
              <h3 className="mt-3 text-lg font-semibold text-foreground">MERN Stack Development</h3>
              <div className="mt-1 text-sm text-muted-foreground">JSpiders</div>
              <div className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
                Certification
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="pb-32">
        <SectionHeader index="06" title="Contact" kicker="Let's build something." />
        <Reveal>
          <div className="glow-card glow-card-hover relative overflow-hidden rounded-2xl border border-border bg-surface p-8 md:p-12">
            <div className="pointer-events-none absolute inset-0 dot-bg opacity-40" />
            <div className="relative grid gap-10 md:grid-cols-2">
              <div>
                <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                  Open to full-stack roles, distributed-systems work, and collaborations on
                  ambitious products. The fastest way to reach me is email.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:gopinathkathirvel13@gmail.com"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Email me
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </a>
                  <CopyEmailButton />
                  <a
                    href="https://www.linkedin.com/in/gopinathkathirvel13/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-surface-elevated px-4 py-2 font-mono text-sm text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" /></svg>
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="space-y-4 font-mono text-sm">
                <div className="rounded-lg border border-border bg-background/40 p-4">
                  <div className="text-xs text-muted-foreground">email</div>
                  <a href="mailto:gopinathkathirvel13@gmail.com" className="mt-1 block text-foreground hover:text-primary">
                    gopinathkathirvel13@gmail.com
                  </a>
                </div>
                <div className="rounded-lg border border-border bg-background/40 p-4">
                  <div className="text-xs text-muted-foreground">phone</div>
                  <a href="tel:+916369907822" className="mt-1 block text-foreground hover:text-primary">
                    +91 63699 07822
                  </a>
                </div>
                <div className="rounded-lg border border-border bg-background/40 p-4">
                  <div className="text-xs text-muted-foreground">location</div>
                  <div className="mt-1 text-foreground">Coimbatore, Tamil Nadu, India</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-8 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>Gopinath Kathirvel · © 2026</div>
          <div>Built with </div>
        </div>
      </footer>
    </div>
  );
}
