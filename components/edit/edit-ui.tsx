"use client"

import { useState, useEffect } from "react"
import {
  PencilSquareIcon,
  LockClosedIcon,
  LockOpenIcon,
  CheckIcon,
  XMarkIcon,
  ArrowPathIcon,
} from "@heroicons/react/20/solid"
import { useEdit } from "@/app/providers/edit-provider"

/* ─────────────────────────────────────────────
   GnB 연필 버튼
───────────────────────────────────────────── */
export function LockButton() {
  const { isEditMode, exitEditMode } = useEdit()
  const [modalOpen, setModalOpen] = useState(false)

  if (isEditMode) {
    return (
      <button
        onClick={exitEditMode}
        className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium"
        style={{
          backgroundColor: "rgba(239,68,68,0.12)",
          color: "#ef4444",
          border: "1px solid rgba(239,68,68,0.3)",
        }}
      >
        <LockOpenIcon className="size-3.5" />
        편집 중
      </button>
    )
  }

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        aria-label="편집 모드"
        className="rounded-full p-1.5 transition-opacity hover:opacity-70"
        style={{ color: "var(--fg-subtle)" }}
      >
        <PencilSquareIcon className="size-4" />
      </button>

      {modalOpen && (
        <PasswordModal onClose={() => setModalOpen(false)} />
      )}
    </>
  )
}

/* ─────────────────────────────────────────────
   비밀번호 모달 (Headless UI 없이 직접 구현)
───────────────────────────────────────────── */
function PasswordModal({ onClose }: { onClose: () => void }) {
  const { enterEditMode } = useEdit()
  const [pw, setPw] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  // ESC 키로 닫기
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  // 모달 열릴 때 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    const ok = await enterEditMode(pw)
    setLoading(false)
    if (ok) {
      onClose()
    } else {
      setError("비밀번호가 틀렸어요")
      setPw("")
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="w-full max-w-sm rounded-2xl p-6 shadow-2xl"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div
              className="flex size-8 items-center justify-center rounded-full"
              style={{ backgroundColor: "var(--surface-2)" }}
            >
              <LockClosedIcon className="size-4" style={{ color: "var(--fg-subtle)" }} />
            </div>
            <p className="text-sm font-semibold" style={{ color: "var(--fg)" }}>
              편집 모드
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1 transition-opacity hover:opacity-60"
            style={{ color: "var(--fg-subtle)" }}
          >
            <XMarkIcon className="size-4" />
          </button>
        </div>

        {/* 폼 */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="password"
            value={pw}
            onChange={(e) => { setPw(e.target.value); setError("") }}
            placeholder="비밀번호 입력"
            autoFocus
            className="w-full rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            style={{
              backgroundColor: "var(--surface-2)",
              border: "1px solid var(--border)",
              color: "var(--fg)",
            }}
          />
          {error && (
            <p className="text-xs text-red-500">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading || !pw}
            className="flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-opacity disabled:opacity-40"
            style={{
              backgroundColor: "var(--btn-bg)",
              color: "var(--btn-fg)",
            }}
          >
            {loading
              ? <ArrowPathIcon className="size-4 animate-spin" />
              : <LockOpenIcon className="size-4" />
            }
            편집 시작
          </button>
        </form>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   하단 저장 툴바
───────────────────────────────────────────── */
export function EditToolbar() {
  const { isEditMode, isDirty, isSaving, saveStatus, save, discard, exitEditMode } = useEdit()

  if (!isEditMode) return null

  return (
    <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2">
      <div
        className="flex items-center gap-3 rounded-2xl px-4 py-3 shadow-2xl backdrop-blur-md"
        style={{
          backgroundColor: "var(--nav-bg)",
          border: "1px solid var(--border)",
          minWidth: 280,
        }}
      >
        <div className="flex-1 text-xs" style={{ color: isDirty ? "var(--fg-muted)" : "var(--fg-subtle)" }}>
          {isDirty ? "저장하지 않은 변경사항" : saveStatus === "saved" ? "저장됨 ✓" : "편집 모드 활성화됨"}
        </div>

        {isDirty && (
          <button
            onClick={discard}
            className="rounded-xl px-3 py-1.5 text-xs font-medium transition-opacity hover:opacity-70"
            style={{ color: "var(--fg-muted)", border: "1px solid var(--border)" }}
          >
            되돌리기
          </button>
        )}

        <button
          onClick={save}
          disabled={isSaving || !isDirty}
          className="flex items-center gap-1.5 rounded-xl px-4 py-1.5 text-xs font-semibold transition-all disabled:opacity-40"
          style={{
            backgroundColor: saveStatus === "saved" ? "#22c55e" : "var(--btn-bg)",
            color: saveStatus === "saved" ? "#fff" : "var(--btn-fg)",
          }}
        >
          {isSaving
            ? <ArrowPathIcon className="size-3.5 animate-spin" />
            : saveStatus === "saved" ? <CheckIcon className="size-3.5" /> : null
          }
          {isSaving ? "저장 중" : saveStatus === "saved" ? "저장됨" : "저장"}
        </button>

        <button
          onClick={exitEditMode}
          className="rounded-full p-1.5 transition-opacity hover:opacity-60"
          style={{ color: "var(--fg-subtle)" }}
        >
          <XMarkIcon className="size-4" />
        </button>
      </div>
    </div>
  )
}
