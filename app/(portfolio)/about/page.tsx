"use client"

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">

      {/* 헤더 */}
      <div className="mb-14">
        <p className="mb-4 text-xs font-normal uppercase tracking-widest" style={{ color: "var(--fg-subtle)" }}>
          About
        </p>
        <h1 className="mb-3 text-4xl font-bold tracking-tight" style={{ color: "var(--fg)" }}>
          Dani
        </h1>
        <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
          AI와 인터랙션을 접점으로 사람 중심의 경험을 설계합니다.
        </p>
      </div>

      {/* 본문 */}
      <div className="space-y-12">

        {/* 섹션 1 */}
        <section>
          <h2
            className="mb-4 text-xs font-normal uppercase tracking-widest"
            style={{ color: "var(--fg-subtle)" }}
          >
            This Portfolio
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
            이 포트폴리오 사이트는{" "}
            <span className="font-bold" style={{ color: "var(--fg)" }}>Claude Code</span>
            로 제작되었습니다. 단순히 툴을 사용한 것이 아니라, 디자이너의 관점으로
            타이포그래피·여백·인터랙션·컬러 시스템까지 직접 개입하며 디테일하게 다듬어 왔습니다.
            AI가 초안을 만들면, <br></br>사용자 경험을 고려한 판단으로 완성합니다.
          </p>
        </section>

        {/* 구분선 */}
        <div style={{ borderTop: "1px solid var(--border-muted)" }} />

        {/* 섹션 2 */}
        <section>
          <h2
            className="mb-4 text-xs font-normal uppercase tracking-widest"
            style={{ color: "var(--fg-subtle)" }}
          >
            How I Work
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
            저는{" "}
            <span className="font-bold" style={{ color: "var(--fg)" }}>AI를 효율적으로 활용하는 UX 디자이너</span>
            입니다. 반복적인 작업은 AI에게 위임하고, 사용성·접근성·디테일에 <br></br>대한 판단은
            직접 내립니다. 코드를 작성하지 않아도 제품을 만들 수 있는 시대에,
            디자이너가 어떤 방식으로 <br></br>주도권을 가져갈 수 있는지를 탐구하고 있습니다.
          </p>
        </section>

        {/* 구분선 */}
        <div style={{ borderTop: "1px solid var(--border-muted)" }} />

        {/* 섹션 3 */}
        <section>
          <h2
            className="mb-4 text-xs font-normal uppercase tracking-widest"
            style={{ color: "var(--fg-subtle)" }}
          >
            Focus
          </h2>
          <ul className="space-y-2">
            {[
              "AI 기반 인터페이스 설계",
              "사용성을 고려한 인터랙션 디자인",
              "디자인 시스템 구축 및 관리",
              "개발 친화적 디자인 협업",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "var(--fg-muted)" }}>
                <span className="mt-[5px] size-1.5 shrink-0 rounded-full" style={{ backgroundColor: "var(--btn-bg)" }} />
                {item}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  )
}
