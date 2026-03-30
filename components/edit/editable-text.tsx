"use client"

import { useState, useRef, useEffect, ElementType } from "react"
import { useEdit } from "@/app/providers/edit-provider"

interface EditableTextProps {
  value: string
  onChange: (value: string) => void
  as?: ElementType
  multiline?: boolean
  className?: string
  style?: React.CSSProperties
  placeholder?: string
}

export function EditableText({
  value,
  onChange,
  as: Tag = "span" as ElementType,
  multiline = false,
  className = "",
  style,
  placeholder = "클릭해서 편집",
}: EditableTextProps) {
  const { isEditMode } = useEdit()
  const [isEditing, setIsEditing] = useState(false)
  const [localVal, setLocalVal] = useState(value)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null)

  // 외부에서 value 변경 시 동기화 (편집 중 아닐 때만)
  useEffect(() => {
    if (!isEditing) setLocalVal(value)
  }, [value, isEditing])

  // 편집 모드 해제 시 편집 상태도 해제
  useEffect(() => {
    if (!isEditMode) setIsEditing(false)
  }, [isEditMode])

  // 편집 시작 시 포커스
  useEffect(() => {
    if (isEditing) inputRef.current?.focus()
  }, [isEditing])

  const commit = () => {
    onChange(localVal.trim() || value)
    setIsEditing(false)
  }

  const cancel = () => {
    setLocalVal(value)
    setIsEditing(false)
  }

  // 편집 모드 아닐 때는 그냥 렌더
  if (!isEditMode) {
    return (
      <Tag className={className} style={style}>
        {value}
      </Tag>
    )
  }

  // 편집 중
  if (isEditing) {
    const inputStyle: React.CSSProperties = {
      ...style,
      outline: "2px solid #3b82f6",
      outlineOffset: 2,
      borderRadius: 4,
      background: "transparent",
      width: multiline ? "100%" : undefined,
      minWidth: "4ch",
    }

    if (multiline) {
      return (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          value={localVal}
          onChange={(e) => setLocalVal(e.target.value)}
          onBlur={commit}
          onKeyDown={(e) => {
            if (e.key === "Escape") cancel()
          }}
          className={`${className} resize-none`}
          style={inputStyle}
          rows={3}
        />
      )
    }

    return (
      <input
        ref={inputRef as React.RefObject<HTMLInputElement>}
        type="text"
        value={localVal}
        onChange={(e) => setLocalVal(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => {
          if (e.key === "Enter") commit()
          if (e.key === "Escape") cancel()
        }}
        className={className}
        style={inputStyle}
      />
    )
  }

  // 편집 모드 ON, 편집 중 아닐 때 — 클릭 가능한 영역
  return (
    <Tag
      onClick={() => { setLocalVal(value); setIsEditing(true) }}
      className={className}
      style={{
        ...style,
        outline: "1px dashed rgba(59,130,246,0.55)",
        outlineOffset: 3,
        borderRadius: 4,
        cursor: "text",
        transition: "outline 0.15s",
      }}
      title="클릭해서 편집"
    >
      {value || <span style={{ opacity: 0.35 }}>{placeholder}</span>}
    </Tag>
  )
}
