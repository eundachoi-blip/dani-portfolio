const posts = [
  {
    id: 1,
    date: "2026.03.27",
    title: "오렌지 후드 입고 질주",
    content: "오렌지 옷 입고 달려오는 삼식이. 귀가 펄럭이고 입이 활짝 열렸다. 행복이 뭔지 몸으로 보여주는 녀석.",
    image: "/samsik/samsik-run.jpeg",
    video: null,
    tags: ["산책", "질주"],
  },
  {
    id: 2,
    date: "2026.03.27",
    title: "사무실 삼식",
    content: "목줄에 이름표 달고 사무실에서 진지한 표정으로 앉아있는 삼식이. 뒤에 걸린 클림트 그림이랑 왠지 잘 어울린다.",
    image: "/samsik/samsik-portrait.jpeg",
    video: null,
    tags: ["일상", "사무실"],
  },
  {
    id: 3,
    date: "2026.03.27",
    title: "간식 주세요",
    content: "눈빛으로 다 말하는 삼식이. 말은 못 해도 의사 표현은 누구보다 확실하다.",
    image: null,
    video: "/samsik/samsik-video.mp4",
    tags: ["영상"],
  },
]

export default function SamsikPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">

      {/* 헤더 */}
      <div className="mb-14">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest" style={{ color: "var(--fg-subtle)" }}>
          Companion
        </p>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight" style={{ color: "var(--fg)" }}>
          SAMSIK
        </h1>
        <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
          반려동물 삼식이와의 기록
        </p>
      </div>

      {/* 포스트 목록 */}
      <div className="flex flex-col gap-14">
        {posts.map((post) => (
          <article
            key={post.id}
            className="pt-8 transition-colors duration-200"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            {/* 날짜 + 태그 */}
            <div className="mb-4 flex items-center gap-3">
              <span className="text-xs" style={{ color: "var(--fg-subtle)" }}>
                {post.date}
              </span>
              {post.tags.map((tag) => (
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

            {/* 제목 */}
            <h2 className="mb-5 text-lg font-bold tracking-tight" style={{ color: "var(--fg)" }}>
              {post.title}
            </h2>

            {/* 이미지 */}
            {post.image && (
              <div className="mb-5 overflow-hidden rounded-xl">
                <img src={post.image} alt={post.title} className="block h-auto w-full" />
              </div>
            )}

            {/* 영상 */}
            {post.video && (
              <div
                className="mb-5 overflow-hidden rounded-xl transition-colors duration-200"
                style={{ backgroundColor: "var(--surface)" }}
              >
                <video src={post.video} controls playsInline className="block w-full" />
              </div>
            )}

            {/* 본문 */}
            <p className="text-sm leading-loose" style={{ color: "var(--fg-muted)" }}>
              {post.content}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}
