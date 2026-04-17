import { DESIGN_PROFILES, DESIGN_RUNTIME_HINTS } from "@/design-profiles"
import type {
  CanvasId,
  ColorMode,
  DesignSlug,
  DesignProfile as SharedDesignProfile,
} from "@/design-profiles/_shared"

export type { CanvasId, ColorMode, DesignSlug } from "@/design-profiles/_shared"
export type DesignProfile = SharedDesignProfile

export const DESIGN_OPTIONS = [
  { slug: "ibm", label: "IBM" },
  { slug: "cursor", label: "Cursor" },
  { slug: "stripe", label: "Stripe" },
  { slug: "notion", label: "Notion" },
  { slug: "claude", label: "Claude" },
] as const satisfies ReadonlyArray<{ slug: DesignSlug; label: string }>

export const CANVAS_OPTIONS = [
  { id: "preview", label: "Preview" },
  { id: "preview-02", label: "Preview 02" },
] as const satisfies ReadonlyArray<{ id: CanvasId; label: string }>

export const COLOR_MODE_OPTIONS = [
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
] as const satisfies ReadonlyArray<{ id: ColorMode; label: string }>

export const DEFAULT_DESIGN: DesignSlug = "ibm"
export const DEFAULT_CANVAS: CanvasId = "preview"
export const DEFAULT_MODE: ColorMode = "light"

export function coerceDesignSlug(
  value: string | null | undefined
): DesignSlug {
  if (value && value in DESIGN_PROFILES) {
    return value as DesignSlug
  }

  return DEFAULT_DESIGN
}

export function coerceCanvasId(value: string | null | undefined): CanvasId {
  if (value === "preview" || value === "preview-02") {
    return value
  }

  return DEFAULT_CANVAS
}

export function coerceColorMode(
  value: string | null | undefined
): ColorMode {
  if (value === "light" || value === "dark") {
    return value
  }

  return DEFAULT_MODE
}

export function getDesignProfile(slug: DesignSlug): DesignProfile {
  return DESIGN_PROFILES[slug]
}

export function getDesignRuntimeHints(slug: DesignSlug) {
  return DESIGN_RUNTIME_HINTS[slug]
}
