"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid"
import { useTheme } from "../providers/theme-provider"
import { LockButton, EditToolbar } from "@/components/edit/edit-ui"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Project Hub", href: "/projects" },
  { label: "SAMSIK", href: "/samsik" },
]

function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="flex items-center gap-2">
      <SunIcon
        className="size-4"
        style={{ color: "var(--sun-color)", opacity: isDark ? 0.5 : 1 }}
      />
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label="테마 전환"
        onClick={toggle}
        className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent focus:outline-none"
        style={{
          backgroundColor: isDark ? "#008000" : "var(--toggle-track)",
          transition: "background-color 0.2s ease",
        }}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block size-4 rounded-full bg-white shadow-sm"
          style={{
            transform: isDark ? "translateX(16px)" : "translateX(0px)",
            transition: "transform 0.2s ease",
          }}
        />
      </button>
      <MoonIcon
        className="size-4"
        style={{ color: "var(--moon-color)", opacity: isDark ? 1 : 0.4 }}
      />
    </div>
  )
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg)", color: "var(--fg)" }}>

      {/* Nav */}
      <header
        className="fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-colors duration-200"
        style={{
          backgroundColor: "var(--nav-bg)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <img src="/favicon.svg" alt="Dani" className="size-6 rounded-full" />
            <span className="text-sm font-bold tracking-tight" style={{ color: "var(--fg)" }}>Dani</span>
          </Link>

          <div className="flex items-center gap-6">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm transition-colors duration-150"
                  style={{
                    color: active ? "#008000" : "var(--fg-subtle)",
                    fontWeight: active ? 600 : 400,
                  }}
                >
                  {item.label}
                </Link>
              )
            })}
            <ThemeToggle />
            {/* 편집 자물쇠 버튼 */}
            <LockButton />
          </div>
        </nav>
      </header>

      <main className="pt-14">
        {children}
      </main>

      {/* 편집 모드 하단 툴바 */}
      <EditToolbar />
    </div>
  )
}
