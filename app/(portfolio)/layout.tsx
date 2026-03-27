"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Project Hub", href: "/projects" },
  { label: "SAMSIK", href: "/samsik" },
]

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#fff", fontFamily: "var(--font-geist-sans), sans-serif" }}>
      {/* Nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 40px", height: "60px",
        borderBottom: "1px solid #1a1a1a",
        background: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(12px)",
      }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontSize: "15px", fontWeight: "700", color: "#fff", letterSpacing: "-0.02em" }}>Dani</span>
        </Link>
        <div style={{ display: "flex", gap: "32px" }}>
          {navItems.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: active ? "600" : "400",
                  color: active ? "#fff" : "#555",
                  transition: "color 0.2s",
                }}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Page content */}
      <div style={{ paddingTop: "60px" }}>
        {children}
      </div>
    </div>
  )
}
