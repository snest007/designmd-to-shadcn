"use client"

import * as React from "react"

import {
  DesignSystemPreviewProvider,
  type DesignSystemSearchParams,
} from "@/app/(create)/lib/search-params"
import type { DesignSourceSummary } from "@/lib/design/source"
import {
  buildDesignStylesheet,
  buildDesignVariables,
} from "@/lib/design/runtime"
import { getDesignRuntimeHints } from "@/lib/design/registry"
import type { ColorMode, DesignProfile } from "@/design-profiles/_shared"

type DesignProfileContextValue = {
  mode: ColorMode
  profile: DesignProfile
  runtime: DesignSystemSearchParams
  sourceSummary: DesignSourceSummary
}

const DesignProfileContext =
  React.createContext<DesignProfileContextValue | null>(null)

export function DesignProfileProvider({
  children,
  mode,
  profile,
  sourceSummary,
}: {
  children: React.ReactNode
  mode: ColorMode
  profile: DesignProfile
  sourceSummary: DesignSourceSummary
}) {
  const runtimeHints = getDesignRuntimeHints(profile.slug)
  const runtime = {
    font: runtimeHints.font,
    fontHeading: runtimeHints.fontHeading,
    style: runtimeHints.previewStyle,
    iconLibrary: runtimeHints.iconLibrary,
  } satisfies DesignSystemSearchParams

  const variables = buildDesignVariables(profile, mode)
  const stylesheet = buildDesignStylesheet(profile, mode)

  return (
    <DesignProfileContext.Provider
      value={{ mode, profile, runtime, sourceSummary }}
    >
      <DesignSystemPreviewProvider value={runtime}>
        <div
          data-design={profile.slug}
          data-mode={mode}
          data-style={runtime.style}
          className={mode === "dark" ? "dark min-h-screen" : "min-h-screen"}
          style={variables}
        >
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          {children}
        </div>
      </DesignSystemPreviewProvider>
    </DesignProfileContext.Provider>
  )
}

export function useDesignProfile() {
  const context = React.useContext(DesignProfileContext)

  if (!context) {
    throw new Error("useDesignProfile must be used within DesignProfileProvider")
  }

  return context
}
