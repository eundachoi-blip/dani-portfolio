
const projects = [
  {
    name: "Robotegra 랜딩 페이지",
    description: "로보테그라 모바일 메인 랜딩 페이지 (375px, 다크 테마)",
    route: "/landing",
    port: 3000,
    tags: ["Mobile", "Landing", "Robotegra"],
    color: "#f45f00",
  },
  {
    name: "이문아이파크 전력제어",
    description: "VCB/ACB 상태 모니터링, 계통도, 구간별 계측 데이터 대시보드",
    route: "/dashboard",
    port: 3000,
    tags: ["Dashboard", "전력제어", "모니터링"],
    color: "#22c55e",
  },
]

export default function ProjectsPage() {
  return (
    <div style={{ fontFamily: "sans-serif", background: "#0f0f0f", color: "#fff", minHeight: "100vh", padding: "40px 32px" }}>
      {/* 헤더 */}
      <div style={{ marginBottom: "40px" }}>
        <div style={{ fontSize: "12px", color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
          dani-robotegra
        </div>
        <h1 style={{ fontSize: "28px", fontWeight: "bold", margin: 0 }}>프로젝트 허브</h1>
        <p style={{ color: "#666", marginTop: "8px", fontSize: "14px" }}>작업 중인 페이지를 한눈에 확인하세요</p>
      </div>

      {/* 프로젝트 카드 목록 */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "16px" }}>
        {projects.map((project) => {
          const url = `http://localhost:${project.port}${project.route}`
          return (
            <div
              key={project.route}
              style={{
                background: "#1a1a1a",
                border: "1px solid #2a2a2a",
                borderRadius: "12px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* 상단 색상 바 */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: project.color, borderRadius: "12px 12px 0 0" }} />

              {/* 프로젝트명 */}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "17px", fontWeight: "bold", marginBottom: "6px" }}>{project.name}</div>
                <div style={{ fontSize: "13px", color: "#888", lineHeight: "1.5" }}>{project.description}</div>
              </div>

              {/* URL */}
              <div style={{ background: "#111", borderRadius: "8px", padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                <code style={{ fontSize: "12px", color: "#aaa", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  localhost:{project.port}
                  <span style={{ color: project.color }}>{project.route}</span>
                </code>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: project.color,
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: "bold",
                    padding: "4px 12px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  열기 →
                </a>
              </div>

              {/* 태그 */}
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "#222",
                      border: "1px solid #333",
                      color: "#aaa",
                      fontSize: "11px",
                      padding: "3px 10px",
                      borderRadius: "20px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* 하단 안내 */}
      <div style={{ marginTop: "48px", borderTop: "1px solid #222", paddingTop: "24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: "13px", color: "#444" }}>총 {projects.length}개 프로젝트</span>
        <span style={{ fontSize: "13px", color: "#444" }} />
      </div>
    </div>
  )
}
