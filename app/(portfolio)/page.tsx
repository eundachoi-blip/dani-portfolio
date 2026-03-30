"use client"

import Link from "next/link"
import { useEdit } from "@/app/providers/edit-provider"
import { EditableText } from "@/components/edit/editable-text"
import { EditableSkills } from "@/components/edit/editable-skills"

export default function Home() {
  const { draft, updateDraft } = useEdit()

  return (
    <div className="flex min-h-[calc(100vh-56px)] flex-col">

      {/* Hero */}
      <section className="flex flex-1 flex-col justify-center px-6 py-20 mx-auto w-full max-w-5xl">

        <EditableText
          as="p"
          value={draft.hero.role}
          onChange={(v) =>
            updateDraft((d) => ({ ...d, hero: { ...d.hero, role: v } }))
          }
          className="mb-6 text-xs font-medium uppercase tracking-widest"
          style={{ color: "var(--fg-subtle)" }}
        />

        <EditableText
          as="h1"
          value={draft.hero.name}
          onChange={(v) =>
            updateDraft((d) => ({ ...d, hero: { ...d.hero, name: v } }))
          }
          className="mb-10 font-extrabold leading-[0.93] tracking-[-0.04em]"
          style={{
            fontSize: "clamp(64px, 10vw, 120px)",
            color: "var(--fg)",
          }}
        />

        <EditableText
          as="p"
          value={draft.hero.bio}
          onChange={(v) =>
            updateDraft((d) => ({ ...d, hero: { ...d.hero, bio: v } }))
          }
          multiline
          className="mb-12 max-w-sm text-base leading-relaxed"
          style={{ color: "var(--fg-muted)" }}
        />

        {/* Skills */}
        <EditableSkills
          skills={draft.skills}
          onChange={(s) => updateDraft((d) => ({ ...d, skills: s }))}
        />

        {/* CTA */}
        <div className="flex items-center gap-5">
          <Link
            href="/projects"
            className="rounded-full px-7 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "var(--btn-bg)",
              color: "var(--btn-fg)",
            }}
          >
            Project Hub →
          </Link>
          <Link
            href="/samsik"
            className="text-sm transition-colors duration-150 hover:opacity-80"
            style={{ color: "var(--fg-subtle)" }}
          >
            Meet Samsik
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-6 py-5 transition-colors duration-200"
        style={{ borderTop: "1px solid var(--border-muted)" }}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <EditableText
            as="span"
            value={draft.footer.copyright}
            onChange={(v) =>
              updateDraft((d) => ({ ...d, footer: { ...d.footer, copyright: v } }))
            }
            className="text-xs"
            style={{ color: "var(--fg-subtle)" }}
          />
          <EditableText
            as="span"
            value={draft.footer.tagline}
            onChange={(v) =>
              updateDraft((d) => ({ ...d, footer: { ...d.footer, tagline: v } }))
            }
            className="text-xs"
            style={{ color: "var(--fg-subtle)" }}
          />
        </div>
      </footer>
    </div>
  )
}
