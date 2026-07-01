import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "project", label: "Project" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      setProgress(scrolled * 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 h-0.5 bg-transparent">
        <div
          className="h-full bg-primary transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header className="fixed left-0 right-0 top-0 z-40 backdrop-blur-xl">
        <div className="border-b border-border/60 bg-background/70">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="#top" className="group flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-md border border-border bg-surface-elevated font-mono text-xs text-primary">
                gk
              </span>
              <span className="hidden font-mono text-sm text-muted-foreground sm:inline">
                gopinath<span className="text-primary">.</span>dev
              </span>
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              {SECTIONS.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`group flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors ${
                    active === s.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="font-mono text-[0.7rem] text-primary/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{s.label}</span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="grid h-9 w-9 place-items-center rounded-md border border-border bg-surface-elevated text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                )}
              </button>
              <button
                onClick={() => setOpen(!open)}
                className="grid h-9 w-9 place-items-center rounded-md border border-border bg-surface-elevated text-muted-foreground md:hidden"
                aria-label="Menu"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  {open ? <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></> : <><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>}
                </svg>
              </button>
            </div>
          </div>

          {open && (
            <nav className="border-t border-border/60 px-6 py-3 md:hidden">
              {SECTIONS.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2 rounded-md px-2 py-2 text-sm ${
                    active === s.id ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  <span className="font-mono text-xs text-primary/70">{String(i + 1).padStart(2, "0")}</span>
                  {s.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
