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
    <div className="mx-auto max-w-5xl px-6 py-12">

      {/* 헤더 */}
      <div className="mb-10">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest" style={{ color: "var(--fg-subtle)" }}>
          dani-robotegra
        </p>
        <h1 className="text-2xl font-bold tracking-tight" style={{ color: "var(--fg)" }}>
          프로젝트 허브
        </h1>
        <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
          작업 중인 페이지를 한눈에 확인하세요
        </p>
      </div>

      {/* 카드 그리드 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => {
          const url = `http://localhost:${project.port}${project.route}`
          return (
            <div
              key={project.route}
              className="relative overflow-hidden rounded-xl p-6 flex flex-col gap-4 transition-colors duration-200"
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              {/* 상단 색상 바 */}
              <div
                className="absolute inset-x-0 top-0 h-0.5"
                style={{ backgroundColor: project.color }}
              />

              {/* 프로젝트명 */}
              <div className="flex-1">
                <p className="mb-1.5 font-semibold" style={{ color: "var(--fg)" }}>
                  {project.name}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  {project.description}
                </p>
              </div>

              {/* URL 행 */}
              <div
                className="flex items-center justify-between gap-3 rounded-lg px-3.5 py-2.5 transition-colors duration-200"
                style={{
                  backgroundColor: "var(--surface-2)",
                  border: "1px solid var(--border)",
                }}
              >
                <code
                  className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-xs"
                  style={{ color: "var(--fg-muted)" }}
                >
                  localhost:{project.port}
                  <span style={{ color: project.color }}>{project.route}</span>
                </code>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-md px-3 py-1 text-xs font-semibold text-white"
                  style={{ backgroundColor: project.color }}
                >
                  열기 →
                </a>
              </div>

              {/* 태그 */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-2.5 py-0.5 text-[11px] transition-colors duration-200"
                    style={{
                      border: "1px solid var(--border)",
                      color: "var(--fg-muted)",
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

      {/* 하단 */}
      <div
        className="mt-12 pt-6 transition-colors duration-200"
        style={{ borderTop: "1px solid var(--border-muted)" }}
      >
        <span className="text-sm" style={{ color: "var(--fg-muted)" }}>
          총 {projects.length}개 프로젝트
        </span>
      </div>
    </div>
  )
}
