import { readFile } from "node:fs/promises"
import path from "node:path"
import { cache } from "react"

import { DESIGN_OPTIONS, getDesignProfile } from "@/lib/design/registry"
import type { DesignSlug } from "@/design-profiles/_shared"

export type DesignSourceSummary = {
  slug: DesignSlug
  sourceDir: string
  designMdPath: string
  previewHtmlPath: string
  title: string
  excerpt: string
  wordCount: number
}

function summarizeMarkdown(markdown: string, fallbackTitle: string) {
  const normalized = markdown.replace(/\r\n/g, "\n")
  const lines = normalized.split("\n").map((line) => line.trim())
  const title =
    lines.find((line) => line.startsWith("# "))?.replace(/^#\s+/, "") ??
    fallbackTitle

  const paragraph = lines
    .filter(
      (line) =>
        line &&
        !line.startsWith("#") &&
        !line.startsWith("- ") &&
        !line.startsWith("* ") &&
        !line.startsWith("```")
    )
    .slice(0, 3)
    .join(" ")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")

  const excerpt =
    paragraph.length > 220 ? `${paragraph.slice(0, 217).trimEnd()}...` : paragraph

  return {
    title,
    excerpt,
    wordCount: normalized.split(/\s+/).filter(Boolean).length,
  }
}

async function readSummary(slug: DesignSlug): Promise<DesignSourceSummary> {
  const profile = getDesignProfile(slug)
  const designMdPath = path.join(profile.sourceDir, "DESIGN.md")
  const previewHtmlPath = path.join(profile.sourceDir, "preview.html")
  const markdown = await readFile(designMdPath, "utf8")
  const summary = summarizeMarkdown(markdown, profile.displayName)

  return {
    slug,
    sourceDir: profile.sourceDir,
    designMdPath,
    previewHtmlPath,
    ...summary,
  }
}

export const getDesignSourceSummaries = cache(async () => {
  const entries = await Promise.all(
    DESIGN_OPTIONS.map(async ({ slug }) => [slug, await readSummary(slug)] as const)
  )

  return Object.fromEntries(entries) as Record<DesignSlug, DesignSourceSummary>
})
