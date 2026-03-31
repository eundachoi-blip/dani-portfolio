"use client"

import { useState, useEffect } from "react"
import { useEdit } from "@/app/providers/edit-provider"
import { EditableText } from "@/components/edit/editable-text"
import { PlusIcon, XMarkIcon, PhotoIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid"
import type { Project } from "@/lib/content"

export default function ProjectsPage() {
  const { draft, updateDraft, isEditMode } = useEdit()
  const projects = draft.projects

  const updateProject = (id: string, patch: Partial<Project>) => {
    updateDraft((d) => ({
      ...d,
      projects: d.projects.map((p) => (p.id === id ? { ...p, ...patch } : p)),
    }))
  }

  const addProject = () => {
    const id = `project-${Date.now()}`
    updateDraft((d) => ({
      ...d,
      projects: [
        ...d.projects,
        {
          id,
          name: "새 프로젝트",
          description: "프로젝트 설명을 입력하세요",
          route: "/new",
          tags: [],
          color: "#008000",
          thumbnail: null,
        },
      ],
    }))
  }

  const removeProject = (id: string) => {
    updateDraft((d) => ({
      ...d,
      projects: d.projects.filter((p) => p.id !== id),
    }))
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">

      {/* 헤더 */}
      <div className="mb-10">
        <p className="mb-2 text-xs font-normal uppercase tracking-widest" style={{ color: "var(--fg-subtle)" }}>
          Craft
        </p>
        <h1 className="text-4xl font-bold tracking-tight" style={{ color: "var(--fg)" }}>
          프로젝트 허브
        </h1>
        <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
          작업 중인 페이지를 한눈에 확인하세요
        </p>
      </div>

      {/* 카드 목록 — 2열 그리드 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isEditMode={isEditMode}
            onUpdate={(patch) => updateProject(project.id, patch)}
            onRemove={() => removeProject(project.id)}
          />
        ))}

        {/* 편집 모드: 추가 버튼 */}
        {isEditMode && (
          <button
            onClick={addProject}
            className="flex items-center justify-center gap-2 rounded-2xl py-10 text-sm font-normal transition-opacity hover:opacity-70"
            style={{
              border: "1px dashed var(--border)",
              color: "var(--fg-subtle)",
            }}
          >
            <PlusIcon className="size-4" />
            프로젝트 추가
          </button>
        )}
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

/* ─────────────────────────────────────────────
   프로젝트 카드
───────────────────────────────────────────── */
function ProjectCard({
  project,
  isEditMode,
  onUpdate,
  onRemove,
}: {
  project: Project
  isEditMode: boolean
  onUpdate: (patch: Partial<Project>) => void
  onRemove: () => void
}) {
  const [origin, setOrigin] = useState("")
  useEffect(() => { setOrigin("http://localhost:3000") }, [])

  const [addingTag, setAddingTag] = useState(false)
  const [tagInput, setTagInput] = useState("")

  const commitTag = () => {
    const val = tagInput.trim()
    if (val && !project.tags.includes(val)) {
      onUpdate({ tags: [...project.tags, val] })
    }
    setTagInput("")
    setAddingTag(false)
  }

  const removeTag = (tag: string) => {
    onUpdate({ tags: project.tags.filter((t) => t !== tag) })
  }

  return (
    <div
      className="group relative overflow-hidden rounded-2xl flex flex-col"
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
      }}
    >
      {/* 썸네일 + 오버레이 텍스트 */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "16/9" }}
      >
        {/* 배경 이미지 or 플레이스홀더 */}
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.name}
            className="absolute inset-0 size-full object-cover"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `${project.color}20` }}
          />
        )}

        {/* 그라디언트 오버레이 */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.1) 100%)",
          }}
        />

        {/* 프로젝트명 + 설명 (썸네일 하단) */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <EditableText
            as="h2"
            value={project.name}
            onChange={(v) => onUpdate({ name: v })}
            className="mb-1 font-bold text-white"
            style={{ fontSize: "20px" }}
          />
          <EditableText
            as="p"
            value={project.description}
            onChange={(v) => onUpdate({ description: v })}
            className="text-sm leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.7)",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            } as React.CSSProperties}
          />
        </div>

        {/* 편집 모드: 썸네일 변경 버튼 */}
        {isEditMode && (
          <ThumbnailEditButton
            thumbnail={project.thumbnail}
            color={project.color}
            onChange={(url) => onUpdate({ thumbnail: url })}
          />
        )}

        {/* 편집 모드: 삭제 버튼 */}
        {isEditMode && (
          <button
            onClick={onRemove}
            className="absolute right-3 top-3 rounded-full p-1.5 z-10 transition-opacity hover:opacity-70"
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              color: "#fff",
            }}
            aria-label="프로젝트 삭제"
          >
            <XMarkIcon className="size-3.5" />
          </button>
        )}
      </div>

      {/* 하단 바: route 위 / 태그+열기 아래 */}
      <div
        className="flex flex-col"
        style={{ borderTop: "1px solid var(--border-muted)" }}
      >
        {/* Route — 위 (전체 URL) */}
        <div
          className="px-4 py-2.5"
          style={{ borderBottom: "1px solid var(--border-muted)" }}
        >
          <code className="text-[11px] font-mono" style={{ color: project.color }} suppressHydrationWarning>
            {origin}{project.route}
          </code>
        </div>

        {/* 태그 + 열기 — 아래 */}
        <div className="flex items-center justify-between gap-3 px-4 py-2.5">
          <div className="flex flex-wrap items-center gap-1.5 min-w-0" suppressHydrationWarning>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] shrink-0"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--fg-subtle)",
                  backgroundColor: "var(--bg)",
                }}
                suppressHydrationWarning
              >
                {tag}
                {isEditMode && (
                  <button
                    onClick={() => removeTag(tag)}
                    className="ml-0.5 transition-opacity hover:opacity-60"
                    style={{ color: "var(--fg-subtle)" }}
                    aria-label={`${tag} 삭제`}
                  >
                    <XMarkIcon className="size-2.5" />
                  </button>
                )}
              </span>
            ))}

            {/* 편집 모드: 태그 추가 */}
            {isEditMode && (
              addingTag ? (
                <input
                  autoFocus
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") commitTag()
                    if (e.key === "Escape") { setTagInput(""); setAddingTag(false) }
                  }}
                  onBlur={commitTag}
                  placeholder="태그"
                  className="rounded-full px-2 py-0.5 text-[11px] outline-none w-16"
                  style={{
                    border: "1px dashed var(--border)",
                    color: "var(--fg)",
                    backgroundColor: "transparent",
                  }}
                />
              ) : (
                <button
                  onClick={() => setAddingTag(true)}
                  className="flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[11px] transition-opacity hover:opacity-70"
                  style={{
                    border: "1px dashed var(--border)",
                    color: "var(--fg-subtle)",
                  }}
                >
                  <PlusIcon className="size-2.5" />
                  추가
                </button>
              )
            )}
          </div>
          <a
            href={project.route}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold text-white transition-opacity hover:opacity-80"
            style={{ backgroundColor: project.color }}
          >
            열기
            <ArrowTopRightOnSquareIcon className="size-3" />
          </a>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   썸네일 편집 버튼
───────────────────────────────────────────── */
function ThumbnailEditButton({
  thumbnail,
  color,
  onChange,
}: {
  thumbnail: string | null
  color: string
  onChange: (url: string | null) => void
}) {
  const [editing, setEditing] = useState(false)
  const [inputVal, setInputVal] = useState(thumbnail ?? "")

  const commit = () => {
    onChange(inputVal.trim() || null)
    setEditing(false)
  }

  return (
    <div className="absolute left-3 top-3 z-10">
      {editing ? (
        <div className="flex gap-1.5">
          <input
            autoFocus
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") commit()
              if (e.key === "Escape") setEditing(false)
            }}
            placeholder="이미지 URL 입력"
            className="w-48 rounded-lg px-3 py-1.5 text-xs outline-none"
            style={{
              backgroundColor: "rgba(0,0,0,0.8)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          />
          <button
            onClick={commit}
            className="rounded-lg px-3 py-1.5 text-xs font-bold text-white shrink-0"
            style={{ backgroundColor: color }}
          >
            확인
          </button>
          {thumbnail && (
            <button
              onClick={() => { onChange(null); setInputVal(""); setEditing(false) }}
              className="rounded-lg px-2 py-1.5 text-white shrink-0"
              style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            >
              <XMarkIcon className="size-3.5" />
            </button>
          )}
        </div>
      ) : (
        <button
          onClick={() => { setInputVal(thumbnail ?? ""); setEditing(true) }}
          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-normal text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
        >
          <PhotoIcon className="size-3.5" />
          {thumbnail ? "이미지 변경" : "이미지 추가"}
        </button>
      )}
    </div>
  )
}
