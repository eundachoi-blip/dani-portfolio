"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react"
import { PortfolioContent, DEFAULT_CONTENT } from "@/lib/content"

interface EditContextValue {
  // 콘텐츠
  content: PortfolioContent
  draft: PortfolioContent
  isDirty: boolean
  // 편집 모드
  isEditMode: boolean
  // 저장 상태
  isSaving: boolean
  saveStatus: "idle" | "saving" | "saved" | "error"
  // 액션
  enterEditMode: (password: string) => Promise<boolean>
  exitEditMode: () => void
  updateDraft: (updater: (prev: PortfolioContent) => PortfolioContent) => void
  save: () => Promise<void>
  discard: () => void
}

const EditContext = createContext<EditContextValue | null>(null)

export function useEdit() {
  const ctx = useContext(EditContext)
  if (!ctx) throw new Error("useEdit must be used inside EditProvider")
  return ctx
}

export function EditProvider({ children }: { children: ReactNode }) {
  const [savedContent, setSavedContent] = useState<PortfolioContent>(DEFAULT_CONTENT)
  const [draft, setDraft] = useState<PortfolioContent>(DEFAULT_CONTENT)
  const [isEditMode, setIsEditMode] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle")
  const [password, setPassword] = useState<string | null>(null)

  // 서버에서 콘텐츠 불러오기
  useEffect(() => {
    fetch("/api/content")
      .then((r) => r.json())
      .then((data: PortfolioContent) => {
        setSavedContent(data)
        setDraft(data)
      })
      .catch(() => {
        /* 기본값 유지 */
      })
  }, [])

  const isDirty = JSON.stringify(draft) !== JSON.stringify(savedContent)

  // 비밀번호 확인 후 편집 모드 진입
  const enterEditMode = useCallback(async (pw: string): Promise<boolean> => {
    try {
      const res = await fetch("/api/auth/edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pw }),
      })
      if (res.ok) {
        setPassword(pw)
        setIsEditMode(true)
        return true
      }
    } catch {
      /* ignore */
    }
    return false
  }, [])

  const exitEditMode = useCallback(() => {
    setIsEditMode(false)
    setDraft(savedContent)
    setPassword(null)
    setSaveStatus("idle")
  }, [savedContent])

  const updateDraft = useCallback(
    (updater: (prev: PortfolioContent) => PortfolioContent) => {
      setDraft((prev) => updater(prev))
    },
    []
  )

  const save = useCallback(async () => {
    if (!password) return
    setIsSaving(true)
    setSaveStatus("saving")
    try {
      const res = await fetch("/api/content", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify(draft),
      })
      if (res.ok) {
        setSavedContent(draft)
        setSaveStatus("saved")
        setTimeout(() => setSaveStatus("idle"), 2000)
      } else {
        setSaveStatus("error")
      }
    } catch {
      setSaveStatus("error")
    } finally {
      setIsSaving(false)
    }
  }, [draft, password])

  const discard = useCallback(() => {
    setDraft(savedContent)
    setSaveStatus("idle")
  }, [savedContent])

  return (
    <EditContext.Provider
      value={{
        content: savedContent,
        draft,
        isDirty,
        isEditMode,
        isSaving,
        saveStatus,
        enterEditMode,
        exitEditMode,
        updateDraft,
        save,
        discard,
      }}
    >
      {children}
    </EditContext.Provider>
  )
}
