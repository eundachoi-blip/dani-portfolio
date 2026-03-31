"use client"

import { useEdit } from "@/app/providers/edit-provider"
import { EditableText } from "@/components/edit/editable-text"
import { PlusIcon, XMarkIcon } from "@heroicons/react/20/solid"
import type { SamsikPost } from "@/lib/content"

export default function SamsikPage() {
  const { draft, updateDraft, isEditMode } = useEdit()
  const posts = draft.samsik

  const updatePost = (id: number, patch: Partial<SamsikPost>) => {
    updateDraft((d) => ({
      ...d,
      samsik: d.samsik.map((p) => (p.id === id ? { ...p, ...patch } : p)),
    }))
  }

  const addPost = () => {
    const id = Date.now()
    updateDraft((d) => ({
      ...d,
      samsik: [
        {
          id,
          date: new Date().toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\. /g, ".").replace(".", ".").slice(0, 10),
          title: "새 기록",
          content: "내용을 입력하세요",
          image: null,
          video: null,
          tags: [],
        },
        ...d.samsik,
      ],
    }))
  }

  const removePost = (id: number) => {
    updateDraft((d) => ({
      ...d,
      samsik: d.samsik.filter((p) => p.id !== id),
    }))
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">

      {/* 헤더 */}
      <div className="mb-14">
        <p className="mb-4 text-xs font-normal uppercase tracking-widest" style={{ color: "var(--fg-subtle)" }}>
          Companion
        </p>
        <h1 className="mb-3 text-4xl font-bold tracking-tight" style={{ color: "var(--fg)" }}>
          SAMSIK
        </h1>
        <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
          반려동물 삼식이와의 기록
        </p>
      </div>

      {/* 편집 모드: 글 추가 버튼 */}
      {isEditMode && (
        <button
          onClick={addPost}
          className="mb-10 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-normal transition-opacity hover:opacity-70"
          style={{
            border: "1px dashed var(--border)",
            color: "var(--fg-subtle)",
          }}
        >
          <PlusIcon className="size-4" />
          새 기록 추가
        </button>
      )}

      {/* 포스트 목록 */}
      <div className="flex flex-col gap-14">
        {posts.map((post) => (
          <article
            key={post.id}
            className="relative pt-8 transition-colors duration-200"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            {/* 편집 모드: 삭제 버튼 */}
            {isEditMode && (
              <button
                onClick={() => removePost(post.id)}
                className="absolute right-0 top-3 rounded-full p-1 transition-opacity hover:opacity-70"
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--fg-subtle)",
                }}
                aria-label="기록 삭제"
              >
                <XMarkIcon className="size-3.5" />
              </button>
            )}

            {/* 날짜 + 태그 */}
            <div className="mb-4 flex items-center gap-3">
              <EditableText
                as="span"
                value={post.date}
                onChange={(v) => updatePost(post.id, { date: v })}
                className="text-xs"
                style={{ color: "var(--fg-subtle)" }}
              />
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
            <EditableText
              as="h2"
              value={post.title}
              onChange={(v) => updatePost(post.id, { title: v })}
              className="mb-5 text-lg font-bold tracking-tight"
              style={{ color: "var(--fg)" }}
            />

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
            <EditableText
              as="p"
              value={post.content}
              onChange={(v) => updatePost(post.id, { content: v })}
              multiline
              className="text-sm leading-loose"
              style={{ color: "var(--fg-muted)" }}
            />
          </article>
        ))}
      </div>
    </div>
  )
}
