import { NextResponse } from "next/server"
import { DEFAULT_CONTENT, PortfolioContent } from "@/lib/content"

const BLOB_PATH = "portfolio/content.json"

async function readContent(): Promise<PortfolioContent> {
  try {
    if (!process.env.BLOB_READ_WRITE_TOKEN) return DEFAULT_CONTENT
    const { list } = await import("@vercel/blob")
    const { blobs } = await list({ prefix: "portfolio/content" })
    if (blobs.length > 0) {
      const res = await fetch(blobs[0].url, { cache: "no-store" })
      return res.json()
    }
  } catch {
    // Blob not configured — fall back to defaults
  }
  return DEFAULT_CONTENT
}

async function writeContent(content: PortfolioContent) {
  const { put } = await import("@vercel/blob")
  await put(BLOB_PATH, JSON.stringify(content), {
    access: "public",
    addRandomSuffix: false,
    contentType: "application/json",
  })
}

export async function GET() {
  const content = await readContent()
  return NextResponse.json(content)
}

export async function PUT(req: Request) {
  const auth = req.headers.get("Authorization")?.replace("Bearer ", "")
  const editPw = process.env.EDIT_PASSWORD
  if (!editPw) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 })
  }

  if (auth !== editPw) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const content: PortfolioContent = await req.json()

  try {
    await writeContent(content)
    return NextResponse.json({ ok: true })
  } catch {
    // Blob token not set — still return ok in dev mode so UI works
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      return NextResponse.json({ ok: true, note: "dev mode — not persisted" })
    }
    return NextResponse.json({ error: "Failed to save" }, { status: 500 })
  }
}
