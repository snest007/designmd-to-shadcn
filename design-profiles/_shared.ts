export type CanvasId = "preview" | "preview-02"

export type ColorMode = "light" | "dark"

export type DesignSlug = "ibm" | "cursor" | "stripe" | "notion" | "claude"

export type PreviewStyleName =
  | "vega"
  | "nova"
  | "maia"
  | "lyra"
  | "mira"
  | "luma"

export type IconLibraryName =
  | "lucide"
  | "tabler"
  | "hugeicons"
  | "phosphor"
  | "remixicon"

export type DesignProfileTokenSet = {
  colors: Record<string, string>
  shadows: Record<string, string>
  radii: Record<string, string>
  spacing: Record<string, string>
  typography: Record<string, string>
}

export type DesignProfileFontStack = {
  family: string
  fallback: string
  notes?: string
}

export type DesignProfileFonts = {
  sans: DesignProfileFontStack
  heading: DesignProfileFontStack
  mono: DesignProfileFontStack
  acquisitionNotes: string[]
}

export type ComponentOverride = {
  description: string
  className?: string
  styles?: Record<string, string>
  states?: Record<string, Record<string, string>>
}

export type DesignProfile = {
  slug: DesignSlug
  displayName: string
  sourceDir: string
  fonts: DesignProfileFonts
  tokens: Record<ColorMode, DesignProfileTokenSet>
  componentOverrides: {
    button: ComponentOverride
    card: ComponentOverride
    input: ComponentOverride
    dialog: ComponentOverride
    table: ComponentOverride
    badge: ComponentOverride
    chart: ComponentOverride
    misc: Record<string, ComponentOverride>
  }
  canvasOverrides: {
    background: Record<ColorMode, Record<string, string>>
    density: Record<string, string>
    heroLike: Record<ColorMode, Record<string, string>>
    borderShadowRhythm: Record<ColorMode, Record<string, string>>
  }
  notes: string[]
}

export function defineProfile<const T extends DesignProfile>(profile: T) {
  return profile
}
