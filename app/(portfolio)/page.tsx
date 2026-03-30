import Link from "next/link"

const skills = ["AI", "UX", "Interaction", "Design System Manager"]

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-56px)] flex-col">

      {/* Hero */}
      <section className="flex flex-1 flex-col justify-center px-6 py-20 mx-auto w-full max-w-5xl">

        <p
          className="mb-6 text-xs font-medium uppercase tracking-widest"
          style={{ color: "var(--fg-subtle)" }}
        >
          Designer
        </p>

        <h1
          className="mb-10 font-extrabold leading-[0.93] tracking-[-0.04em]"
          style={{
            fontSize: "clamp(64px, 10vw, 120px)",
            color: "var(--fg)",
          }}
        >
          Dani
        </h1>

        <p
          className="mb-12 max-w-sm text-base leading-relaxed"
          style={{ color: "var(--fg-muted)" }}
        >
          AI와 인터랙션을 접점으로 사람 중심의 경험을 설계합니다.
        </p>

        {/* Skills */}
        <div className="mb-16 flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full px-4 py-1.5 text-xs tracking-wide transition-colors duration-200"
              style={{
                border: "1px solid var(--border)",
                color: "var(--fg-muted)",
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-5">
          <Link
            href="/projects"
            className="rounded-full px-7 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "var(--btn-bg)",
              color: "var(--btn-fg)",
            }}
          >
            Project Hub →
          </Link>
          <Link
            href="/samsik"
            className="text-sm transition-colors duration-150 hover:opacity-80"
            style={{ color: "var(--fg-subtle)" }}
          >
            Meet Samsik
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-6 py-5 transition-colors duration-200"
        style={{ borderTop: "1px solid var(--border-muted)" }}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="text-xs" style={{ color: "var(--fg-subtle)" }}>© 2026 Dani</span>
          <span className="text-xs" style={{ color: "var(--fg-subtle)" }}>
            Designer · AI · UX · Interaction · Design System
          </span>
        </div>
      </footer>
    </div>
  )
}
