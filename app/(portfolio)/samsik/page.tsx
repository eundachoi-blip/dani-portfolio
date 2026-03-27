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
    <div style={{ minHeight: "calc(100vh - 60px)", padding: "60px 40px", maxWidth: "720px", margin: "0 auto" }}>

      {/* 헤더 */}
      <div style={{ marginBottom: "56px" }}>
        <div style={{ fontSize: "12px", color: "#444", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}>
          Companion
        </div>
        <h1 style={{ fontSize: "40px", fontWeight: "800", letterSpacing: "-0.03em", margin: "0 0 12px 0" }}>
          SAMSIK
        </h1>
        <p style={{ fontSize: "14px", color: "#555", margin: 0 }}>
          반려동물 삼식이와의 기록
        </p>
      </div>

      {/* 포스트 목록 */}
      <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
        {posts.map((post) => (
          <article key={post.id} style={{ borderTop: "1px solid #1a1a1a", paddingTop: "32px" }}>

            {/* 날짜 + 태그 */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <span style={{ fontSize: "12px", color: "#444" }}>{post.date}</span>
              {post.tags.map((tag) => (
                <span key={tag} style={{
                  fontSize: "11px", color: "#555",
                  border: "1px solid #222",
                  padding: "2px 10px", borderRadius: "100px",
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* 제목 */}
            <h2 style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "-0.02em", margin: "0 0 20px 0" }}>
              {post.title}
            </h2>

            {/* 이미지 */}
            {post.image && (
              <div style={{ width: "100%", borderRadius: "10px", overflow: "hidden", marginBottom: "20px" }}>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            )}

            {/* 영상 */}
            {post.video && (
              <div style={{ width: "100%", borderRadius: "10px", overflow: "hidden", marginBottom: "20px", background: "#111" }}>
                <video
                  src={post.video}
                  controls
                  playsInline
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            )}

            {/* 본문 */}
            <p style={{ fontSize: "15px", color: "#888", lineHeight: "1.8", margin: 0 }}>
              {post.content}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}
