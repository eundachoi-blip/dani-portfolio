import Link from "next/link"

const skills = ["AI", "UX", "Interaction", "Design System"]

export default function Home() {
  return (
    <div style={{ minHeight: "calc(100vh - 60px)", display: "flex", flexDirection: "column" }}>

      {/* Hero */}
      <section style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 40px",
        maxWidth: "900px",
        margin: "0 auto",
        width: "100%",
      }}>
        <div style={{ fontSize: "12px", color: "#444", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "24px" }}>
          Designer
        </div>

        <h1 style={{
          fontSize: "clamp(64px, 10vw, 120px)",
          fontWeight: "800",
          letterSpacing: "-0.04em",
          lineHeight: "0.95",
          margin: "0 0 40px 0",
          color: "#fff",
        }}>
          Dani
        </h1>

        <p style={{
          fontSize: "16px",
          color: "#555",
          lineHeight: "1.7",
          maxWidth: "420px",
          margin: "0 0 48px 0",
        }}>
          AI와 인터랙션을 접점으로 사람 중심의 경험을 설계합니다.
        </p>

        {/* Skills */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "64px" }}>
          {skills.map((skill) => (
            <span key={skill} style={{
              border: "1px solid #2a2a2a",
              color: "#888",
              fontSize: "12px",
              padding: "6px 16px",
              borderRadius: "100px",
              letterSpacing: "0.05em",
            }}>
              {skill}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Link href="/projects" style={{
            background: "#fff",
            color: "#000",
            fontSize: "13px",
            fontWeight: "600",
            padding: "12px 28px",
            borderRadius: "100px",
            textDecoration: "none",
          }}>
            Project Hub →
          </Link>
          <Link href="/samsik" style={{
            color: "#555",
            fontSize: "13px",
            textDecoration: "none",
          }}>
            Meet Samsik
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "24px 40px",
        borderTop: "1px solid #1a1a1a",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <span style={{ fontSize: "12px", color: "#333" }}>© 2026 Dani</span>
        <span style={{ fontSize: "12px", color: "#333" }}>Designer · AI · UX · Interaction · Design System</span>
      </footer>
    </div>
  )
}
