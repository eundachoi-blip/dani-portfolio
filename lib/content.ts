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
}
