export interface Project {
  id: string
  name: string
  description: string
  route: string
  tags: string[]
  color: string
  thumbnail: string | null
}

export interface SamsikPost {
  id: number
  date: string
  title: string
  content: string
  image: string | null
  video: string | null
  tags: string[]
}

export interface PortfolioContent {
  hero: {
    role: string
    name: string
    bio: string
  }
  skills: string[]
  footer: {
    copyright: string
    tagline: string
  }
  projects: Project[]
  samsik: SamsikPost[]
}

export const DEFAULT_CONTENT: PortfolioContent = {
  hero: {
    role: "Designer",
    name: "Dani",
    bio: "AI와 인터랙션을 접점으로 사람 중심의 경험을 설계합니다.",
  },
  skills: ["AI", "UX", "Interaction", "Design System Manager"],
  footer: {
    copyright: "© 2026 Dani",
    tagline: "Designer · AI · UX · Interaction · Design System",
  },
  projects: [
    {
      id: "robotegra-landing",
      name: "Robotegra 랜딩 페이지",
      description: "로보테그라 모바일 메인 랜딩 페이지 (375px, 다크 테마)",
      route: "/landing",
      tags: ["Mobile", "Landing", "Robotegra"],
      color: "#008000",
      thumbnail: "/thumbnails/landing.png",
    },
    {
      id: "imun-dashboard",
      name: "이문아이파크 전력제어",
      description: "VCB/ACB 상태 모니터링, 계통도, 구간별 계측 데이터 대시보드",
      route: "/dashboard",
      tags: ["Dashboard", "전력제어", "모니터링"],
      color: "#008000",
      thumbnail: "/thumbnails/dashboard.png",
    },
  ],
  samsik: [
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
  ],
}
