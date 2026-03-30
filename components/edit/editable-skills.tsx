"use client"

import { useState } from "react"
import { XMarkIcon, PlusIcon } from "@heroicons/react/20/solid"
import { useEdit } from "@/app/providers/edit-provider"

interface EditableSkillsProps {
  skills: string[]
  onChange: (skills: string[]) => void
}

export function EditableSkills({ skills, onChange }: EditableSkillsProps) {
  const { isEditMode } = useEdit()
  const [adding, setAdding] = useState(false)
  const [newSkill, setNewSkill] = useState("")

  const addSkill = () => {
    const trimmed = newSkill.trim()
    if (trimmed && !skills.includes(trimmed)) {
      onChange([...skills, trimmed])
    }
    setNewSkill("")
    setAdding(false)
  }

  return (
    <div className="mb-16 flex flex-wrap items-center gap-1.5">
      {skills.map((skill, i) => (
        <span
          key={skill}
          className="inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-xs tracking-wide transition-colors duration-200"
          style={{
            border: "1px solid var(--border)",
            color: "var(--fg-muted)",
          }}
        >
          {skill}
          {isEditMode && (
            <button
              onClick={() => onChange(skills.filter((_, j) => j !== i))}
              className="ml-0.5 rounded-full p-0.5 opacity-60 hover:opacity-100 transition-opacity"
              aria-label={`${skill} 삭제`}
            >
              <XMarkIcon className="size-3" />
            </button>
          )}
        </span>
      ))}

      {/* 추가 버튼 */}
      {isEditMode && (
        adding ? (
          <span
            className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs"
            style={{ border: "2px solid #3b82f6" }}
          >
            <input
              autoFocus
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") addSkill()
                if (e.key === "Escape") { setAdding(false); setNewSkill("") }
              }}
              onBlur={addSkill}
              placeholder="스킬 입력"
              className="bg-transparent outline-none w-24 text-xs"
              style={{ color: "var(--fg)" }}
            />
          </span>
        ) : (
          <button
            onClick={() => setAdding(true)}
            className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs opacity-50 hover:opacity-100 transition-opacity"
            style={{
              border: "1px dashed rgba(59,130,246,0.55)",
              color: "var(--fg-muted)",
            }}
            aria-label="스킬 추가"
          >
            <PlusIcon className="size-3" />
            추가
          </button>
        )
      )}
    </div>
  )
}
