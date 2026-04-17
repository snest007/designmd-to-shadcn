"use client"

import * as React from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import PreviewCanvas from "@/components/blocks/preview"
import Preview02Canvas from "@/components/blocks/preview-02"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import {
  CANVAS_OPTIONS,
  COLOR_MODE_OPTIONS,
  DESIGN_OPTIONS,
  coerceCanvasId,
  coerceColorMode,
  coerceDesignSlug,
  getDesignProfile,
  type DesignSlug,
} from "@/lib/design/registry"
import type { DesignSourceSummary } from "@/lib/design/source"
import { DesignProfileProvider } from "@/providers/design-profile-provider"

type PlaygroundClientProps = {
  sources: Record<DesignSlug, DesignSourceSummary>
}

function ToolbarButton({
  active,
  children,
  onClick,
}: {
  active: boolean
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <Button
      variant={active ? "default" : "outline"}
      size="sm"
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export function PlaygroundClient({ sources }: PlaygroundClientProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = React.useTransition()

  const design = coerceDesignSlug(searchParams.get("design"))
  const canvas = coerceCanvasId(searchParams.get("canvas"))
  const mode = coerceColorMode(searchParams.get("mode"))
  const profile = getDesignProfile(design)
  const sourceSummary = sources[design]
  const CanvasComponent = canvas === "preview" ? PreviewCanvas : Preview02Canvas

  function updateSearchParams(next: Partial<Record<"design" | "canvas" | "mode", string>>) {
    const params = new URLSearchParams(searchParams.toString())

    for (const [key, value] of Object.entries(next)) {
      if (!value) {
        params.delete(key)
        continue
      }

      params.set(key, value)
    }

    const query = params.toString()

    startTransition(() => {
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      })
    })
  }

  return (
    <DesignProfileProvider
      mode={mode}
      profile={profile}
      sourceSummary={sourceSummary}
    >
      <div data-slot="playground-shell" className="relative flex min-h-screen flex-col">
        <div className="mx-auto flex w-full max-w-[1820px] flex-1 flex-col gap-6 px-4 py-4 md:px-6 md:py-6">
          <section
            className="flex flex-col gap-4"
            style={{ padding: "var(--playground-hero-padding)" }}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline" data-slot="playground-hero-eyebrow">
                    {profile.displayName}
                  </Badge>
                  <Badge variant="secondary">{canvas}</Badge>
                  <Badge variant="secondary">{mode}</Badge>
                </div>
                <div className="flex flex-col gap-2">
                  <h1
                    data-slot="playground-hero-title"
                    className="cn-font-heading text-4xl font-medium tracking-tight md:text-5xl"
                  >
                    DESIGN.md Playground
                  </h1>
                  <p
                    data-slot="playground-hero-description"
                    className="text-base text-muted-foreground md:text-lg"
                  >
                    Apply a hand-authored design profile to the same shadcn
                    `create` canvas and switch between the two official preview
                    compositions.
                  </p>
                </div>
              </div>
              <div
                className={cn(
                  "rounded-full border px-3 py-1 text-sm text-muted-foreground transition-opacity",
                  isPending && "opacity-100",
                  !isPending && "opacity-60"
                )}
              >
                {isPending ? "Updating preview..." : "Live preview ready"}
              </div>
            </div>

            <div
              data-slot="playground-toolbar"
              className="flex flex-col gap-4 rounded-2xl border p-4 backdrop-blur"
            >
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Design
                </p>
                <div className="flex flex-wrap gap-2">
                  {DESIGN_OPTIONS.map((option) => (
                    <ToolbarButton
                      key={option.slug}
                      active={option.slug === design}
                      onClick={() =>
                        updateSearchParams({
                          design: option.slug,
                        })
                      }
                    >
                      {option.label}
                    </ToolbarButton>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    Canvas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {CANVAS_OPTIONS.map((option) => (
                      <ToolbarButton
                        key={option.id}
                        active={option.id === canvas}
                        onClick={() =>
                          updateSearchParams({
                            canvas: option.id,
                          })
                        }
                      >
                        {option.label}
                      </ToolbarButton>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    Mode
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {COLOR_MODE_OPTIONS.map((option) => (
                      <ToolbarButton
                        key={option.id}
                        active={option.id === mode}
                        onClick={() =>
                          updateSearchParams({
                            mode: option.id,
                          })
                        }
                      >
                        {option.label}
                      </ToolbarButton>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="grid flex-1 gap-6 xl:grid-cols-[minmax(0,1fr)_360px]"
            style={{ padding: "var(--playground-section-padding)" }}
          >
            <div
              data-slot="playground-stage"
              className="overflow-hidden rounded-[calc(var(--radius-xl)+10px)]"
            >
              <CanvasComponent />
            </div>

            <aside className="flex flex-col gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Source</CardTitle>
                  <CardDescription>{sourceSummary.title}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-3 text-sm text-muted-foreground">
                  <p>{sourceSummary.excerpt}</p>
                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-foreground">
                      DESIGN.md
                    </span>
                    <code className="text-xs break-all">{sourceSummary.designMdPath}</code>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-foreground">
                      preview.html
                    </span>
                    <code className="text-xs break-all">{sourceSummary.previewHtmlPath}</code>
                  </div>
                  <p>{sourceSummary.wordCount} words captured from the source markdown.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Font Strategy</CardTitle>
                  <CardDescription>
                    Runtime stacks applied to the base shadcn canvas.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-3 text-sm">
                  <div className="flex flex-col gap-1">
                    <span className="font-medium">Sans</span>
                    <code className="text-xs break-all">
                      {profile.fonts.sans.family}, {profile.fonts.sans.fallback}
                    </code>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-medium">Heading</span>
                    <code className="text-xs break-all">
                      {profile.fonts.heading.family}, {profile.fonts.heading.fallback}
                    </code>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-medium">Mono</span>
                    <code className="text-xs break-all">
                      {profile.fonts.mono.family}, {profile.fonts.mono.fallback}
                    </code>
                  </div>
                  {profile.fonts.acquisitionNotes.map((note) => (
                    <p key={note} className="text-muted-foreground">
                      {note}
                    </p>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Profile Notes</CardTitle>
                  <CardDescription>
                    Hand-maintained notes and known approximations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-3 text-sm text-muted-foreground">
                  {profile.notes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </CardContent>
              </Card>
            </aside>
          </section>
        </div>
      </div>
    </DesignProfileProvider>
  )
}
