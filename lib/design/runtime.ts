import type { CSSProperties } from "react"

import type {
  ColorMode,
  ComponentOverride,
  DesignProfile,
} from "@/design-profiles/_shared"
import { getDesignRuntimeHints } from "@/lib/design/registry"

type CssVariableStyle = CSSProperties & Record<`--${string}`, string>

const FONT_VARIABLES: Record<string, string> = {
  Inter: "var(--font-inter)",
  "IBM Plex Sans": "var(--font-ibm-plex-sans)",
  "IBM Plex Mono": "var(--font-ibm-plex-mono)",
  "Source Code Pro": "var(--font-source-code-pro)",
}

const GENERIC_FONT_FAMILIES = new Set([
  "system-ui",
  "ui-monospace",
  "sans-serif",
  "serif",
  "monospace",
  "Arial",
  "Georgia",
  "SF Pro Display",
  "SFMono-Regular",
])

const BUTTON_STYLE_KEYS = new Set([
  "background",
  "color",
  "border",
  "borderColor",
  "borderRadius",
  "boxShadow",
  "fontFamily",
  "fontSize",
  "fontWeight",
  "letterSpacing",
  "transition",
])

const CARD_STYLE_KEYS = new Set([
  "background",
  "color",
  "border",
  "borderColor",
  "borderRadius",
  "boxShadow",
])

const INPUT_STYLE_KEYS = new Set([
  "background",
  "color",
  "border",
  "borderColor",
  "borderBottom",
  "borderBottomColor",
  "borderRadius",
  "boxShadow",
  "fontFamily",
  "fontSize",
  "fontWeight",
  "letterSpacing",
])

const DIALOG_STYLE_KEYS = new Set([
  "background",
  "color",
  "border",
  "borderColor",
  "borderRadius",
  "boxShadow",
])

const BADGE_STYLE_KEYS = new Set([
  "background",
  "color",
  "border",
  "borderColor",
  "borderRadius",
  "boxShadow",
  "fontFamily",
  "fontSize",
  "fontWeight",
  "letterSpacing",
])

function toKebabCase(value: string) {
  return value.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`)
}

function quoteFamilyName(value: string) {
  if (
    value.startsWith("var(") ||
    value.startsWith("'") ||
    value.startsWith('"') ||
    GENERIC_FONT_FAMILIES.has(value)
  ) {
    return value
  }

  return value.includes(" ") ? `"${value}"` : value
}

function resolveFontStack(family: string, fallback: string) {
  const resolvedFamily = FONT_VARIABLES[family] ?? quoteFamilyName(family)
  return `${resolvedFamily}, ${fallback}`
}

function setAliasVariables(
  variables: CssVariableStyle,
  entries: Record<string, string>,
  options?: {
    prefix?: string
    includeUnprefixed?: boolean
  }
) {
  const prefix = options?.prefix
  const includeUnprefixed = options?.includeUnprefixed ?? true

  for (const [key, value] of Object.entries(entries)) {
    const kebabKey = toKebabCase(key)

    if (includeUnprefixed) {
      variables[`--${key}`] = value
      variables[`--${kebabKey}`] = value
    }

    if (prefix) {
      variables[`--${prefix}-${kebabKey}`] = value
    }
  }
}

function pickChartPalette(colors: Record<string, string>) {
  const preferredKeys = [
    "primary",
    "primaryMid",
    "primarySoft",
    "accentGold",
    "accentPink",
    "accentPurple",
    "ruby",
    "success",
    "warning",
    "info",
    "brandSecondary",
    "read",
    "edit",
    "grep",
    "thinking",
  ]

  const picked = preferredKeys
    .map((key) => colors[key])
    .filter((value, index, list): value is string => Boolean(value) && list.indexOf(value) === index)

  while (picked.length < 5) {
    picked.push(colors.primary ?? colors.foreground ?? "#000000")
  }

  return picked.slice(0, 5)
}

function styleObjectToCss(
  styles: Record<string, string> | undefined,
  allowedKeys?: Set<string>
) {
  if (!styles) {
    return ""
  }

  return Object.entries(styles)
    .filter(([key]) => !allowedKeys || allowedKeys.has(key))
    .map(([key, value]) => `${toKebabCase(key)}:${value};`)
    .join("")
}

function buttonVariantCss(button: ComponentOverride) {
  return [
    {
      selector: '[data-slot="button"][data-variant="default"]',
      styles: button.states?.primary,
    },
    {
      selector: '[data-slot="button"][data-variant="secondary"]',
      styles: button.states?.secondary ?? button.states?.inverse ?? button.states?.dark,
    },
    {
      selector: '[data-slot="button"][data-variant="outline"]',
      styles:
        button.states?.outline ??
        button.states?.tertiary ??
        button.states?.neutral ??
        button.states?.surface ??
        button.states?.info,
    },
    {
      selector: '[data-slot="button"][data-variant="ghost"]',
      styles: button.states?.ghost,
    },
    {
      selector: '[data-slot="button"][data-variant="destructive"]',
      styles: button.states?.destructive ?? button.states?.danger,
    },
  ]
}

function heroTypographyCss(styles: Record<string, string> | undefined) {
  if (!styles) {
    return ""
  }

  const declarations = {
    fontFamily: styles.headlineFamily,
    fontWeight: styles.headlineWeight,
    lineHeight: styles.headlineLineHeight,
    letterSpacing:
      styles.heroTracking ?? styles.headlineTracking ?? styles.titleTracking,
  }

  return Object.entries(declarations)
    .filter((entry): entry is [string, string] => Boolean(entry[1]))
    .map(([key, value]) => `${toKebabCase(key)}:${value};`)
    .join("")
}

export function buildDesignVariables(
  profile: DesignProfile,
  mode: ColorMode
): CssVariableStyle {
  const tokenSet = profile.tokens[mode]
  const colors = tokenSet.colors
  const charts = pickChartPalette(colors)
  const runtime = getDesignRuntimeHints(profile.slug)
  const variables = {
    colorScheme: mode,
  } as CssVariableStyle

  setAliasVariables(variables, tokenSet.colors)
  setAliasVariables(variables, tokenSet.shadows, {
    prefix: "shadow",
    includeUnprefixed: false,
  })
  setAliasVariables(variables, tokenSet.radii, {
    prefix: "radius",
    includeUnprefixed: false,
  })
  setAliasVariables(variables, tokenSet.spacing, { prefix: "spacing" })
  setAliasVariables(variables, tokenSet.typography, { prefix: "type" })

  variables["--font-sans"] = resolveFontStack(
    profile.fonts.sans.family,
    profile.fonts.sans.fallback
  )
  variables["--font-heading"] = resolveFontStack(
    profile.fonts.heading.family,
    profile.fonts.heading.fallback
  )
  variables["--font-mono"] = resolveFontStack(
    profile.fonts.mono.family,
    profile.fonts.mono.fallback
  )

  variables["--background"] = colors.background ?? "#ffffff"
  variables["--foreground"] = colors.foreground ?? "#111111"
  variables["--card"] =
    colors.cardSurface ??
    colors.surface ??
    colors.surfaceStrong ??
    colors.background ??
    "#ffffff"
  variables["--card-foreground"] = colors.foreground ?? "#111111"
  variables["--popover"] =
    colors.popoverSurface ??
    colors.cardSurface ??
    colors.surfaceStrong ??
    colors.surface ??
    colors.background ??
    "#ffffff"
  variables["--popover-foreground"] = colors.foreground ?? "#111111"
  variables["--primary"] = colors.primary ?? colors.foreground ?? "#111111"
  variables["--primary-foreground"] =
    colors.primaryContrast ?? colors.background ?? "#ffffff"
  variables["--secondary"] =
    colors.surfaceAlt ?? colors.surfaceMuted ?? colors.background ?? "#f5f5f5"
  variables["--secondary-foreground"] = colors.foreground ?? "#111111"
  variables["--muted"] =
    colors.surfaceMuted ?? colors.surfaceAlt ?? colors.background ?? "#f5f5f5"
  variables["--muted-foreground"] =
    colors.textMuted ?? colors.textSubtle ?? colors.foreground ?? "#666666"
  variables["--accent"] =
    colors.surfaceElevated ??
    colors.primarySoft ??
    colors.surfaceMuted ??
    colors.surfaceAlt ??
    colors.primary ??
    "#f5f5f5"
  variables["--accent-foreground"] = colors.foreground ?? "#111111"
  variables["--destructive"] =
    colors.error ?? colors.warning ?? colors.primary ?? "#d11a2a"
  variables["--border"] = colors.border ?? colors.borderStrong ?? "#d4d4d4"
  variables["--input"] =
    colors.fieldBorder ?? colors.borderStrong ?? colors.border ?? "#d4d4d4"
  variables["--ring"] = colors.focus ?? colors.primary ?? "#111111"
  variables["--chart-1"] = charts[0]
  variables["--chart-2"] = charts[1]
  variables["--chart-3"] = charts[2]
  variables["--chart-4"] = charts[3]
  variables["--chart-5"] = charts[4]
  variables["--radius"] =
    tokenSet.radii.card ??
    tokenSet.radii.featured ??
    tokenSet.radii.standard ??
    tokenSet.radii.subtle ??
    "0.625rem"
  variables["--sidebar"] =
    colors.surfaceAlt ?? colors.surface ?? colors.background ?? "#ffffff"
  variables["--sidebar-foreground"] = colors.foreground ?? "#111111"
  variables["--sidebar-primary"] = colors.primary ?? colors.foreground ?? "#111111"
  variables["--sidebar-primary-foreground"] =
    colors.primaryContrast ?? colors.background ?? "#ffffff"
  variables["--sidebar-accent"] =
    colors.surfaceMuted ?? colors.surfaceAlt ?? colors.surface ?? "#f5f5f5"
  variables["--sidebar-accent-foreground"] = colors.foreground ?? "#111111"
  variables["--sidebar-border"] = colors.border ?? colors.borderStrong ?? "#d4d4d4"
  variables["--sidebar-ring"] = colors.focus ?? colors.primary ?? "#111111"

  variables["--playground-app-background"] =
    profile.canvasOverrides.background[mode].app ??
    profile.canvasOverrides.background[mode].canvas ??
    colors.background ??
    "#ffffff"
  variables["--playground-canvas-background"] =
    profile.canvasOverrides.background[mode].canvas ??
    profile.canvasOverrides.background[mode].card ??
    colors.surfaceAlt ??
    colors.background ??
    "#ffffff"
  variables["--playground-nav-background"] =
    profile.canvasOverrides.background[mode].nav ??
    profile.canvasOverrides.background[mode].card ??
    colors.surface ??
    colors.background ??
    "#ffffff"
  variables["--playground-stage-shadow"] =
    profile.canvasOverrides.borderShadowRhythm[mode].whisper ??
    profile.canvasOverrides.borderShadowRhythm[mode].cardShadow ??
    tokenSet.shadows.card ??
    tokenSet.shadows.deep ??
    "none"
  variables["--playground-stage-border"] =
    profile.canvasOverrides.borderShadowRhythm[mode].contained ??
    profile.canvasOverrides.borderShadowRhythm[mode].sectionDivider ??
    `1px solid ${colors.border ?? "transparent"}`
  variables["--playground-card-gap"] =
    profile.canvasOverrides.density.cardGap ??
    tokenSet.spacing.cardGap ??
    tokenSet.spacing.gap ??
    "20px"
  variables["--playground-section-padding"] =
    profile.canvasOverrides.density.sectionPadding ?? "24px"
  variables["--playground-hero-padding"] =
    profile.canvasOverrides.density.heroPadding ?? "24px"
  variables["--playground-title-max-width"] =
    profile.canvasOverrides.heroLike[mode].titleMaxWidth ?? "56rem"
  variables["--playground-subtitle-max-width"] =
    profile.canvasOverrides.heroLike[mode].subtitleMaxWidth ?? "42rem"
  variables["--playground-title-align"] =
    profile.canvasOverrides.heroLike[mode].align ?? "left"
  variables["--playground-title-accent"] =
    profile.canvasOverrides.heroLike[mode].titleAccent ??
    colors.primary ??
    colors.foreground ??
    "#111111"
  variables["--playground-preview-style"] = runtime.previewStyle

  return variables
}

export function buildDesignStylesheet(
  profile: DesignProfile,
  mode: ColorMode
) {
  const scope = `[data-design="${profile.slug}"][data-mode="${mode}"]`
  const button = profile.componentOverrides.button
  const card = profile.componentOverrides.card
  const input = profile.componentOverrides.input
  const dialog = profile.componentOverrides.dialog
  const table = profile.componentOverrides.table
  const badge = profile.componentOverrides.badge
  const chart = profile.componentOverrides.chart
  const typography = profile.componentOverrides.misc.typography?.styles

  return `
${scope} [data-slot="playground-shell"] {
  background: var(--playground-app-background);
}

${scope} [data-slot="playground-toolbar"] {
  background: var(--playground-nav-background);
  border-color: var(--border);
}

${scope} [data-slot="playground-stage"] {
  background: var(--playground-canvas-background);
  border: var(--playground-stage-border);
  box-shadow: var(--playground-stage-shadow);
}

${scope} [data-slot="playground-hero-title"] {
  max-width: var(--playground-title-max-width);
  text-align: var(--playground-title-align);
  color: var(--foreground);
  ${heroTypographyCss(typography)}
}

${scope} [data-slot="playground-hero-description"] {
  max-width: var(--playground-subtitle-max-width);
  text-align: var(--playground-title-align);
}

${scope} [data-slot="playground-hero-eyebrow"] {
  color: var(--playground-title-accent);
}

${scope} [data-slot="button"] {
  ${styleObjectToCss(button.styles, BUTTON_STYLE_KEYS)}
}

${buttonVariantCss(button)
  .map(
    ({ selector, styles }) =>
      `${scope} ${selector} { ${styleObjectToCss(styles, BUTTON_STYLE_KEYS)} }`
  )
  .join("\n")}

${scope} [data-slot="card"] {
  ${styleObjectToCss(card.styles, CARD_STYLE_KEYS)}
}

${scope} [data-slot="card"]:hover {
  ${styleObjectToCss(card.states?.hover, CARD_STYLE_KEYS)}
}

${scope} [data-slot="input"],
${scope} [data-slot="input-group-control"],
${scope} [data-slot="textarea"],
${scope} [data-slot="select-trigger"],
${scope} [data-slot="native-select"] {
  ${styleObjectToCss(input.styles, INPUT_STYLE_KEYS)}
}

${scope} [data-slot="input"]:focus-visible,
${scope} [data-slot="input-group-control"]:focus-visible,
${scope} [data-slot="textarea"]:focus-visible,
${scope} [data-slot="select-trigger"]:focus-visible,
${scope} [data-slot="native-select"]:focus-visible {
  ${styleObjectToCss(input.states?.focus, INPUT_STYLE_KEYS)}
}

${scope} [data-slot="input"][aria-invalid="true"],
${scope} [data-slot="input-group-control"][aria-invalid="true"],
${scope} [data-slot="textarea"][aria-invalid="true"],
${scope} [data-slot="select-trigger"][aria-invalid="true"],
${scope} [data-slot="native-select"][aria-invalid="true"] {
  ${styleObjectToCss(input.states?.error, INPUT_STYLE_KEYS)}
}

${scope} [data-slot="dialog-content"] {
  ${styleObjectToCss(dialog.styles, DIALOG_STYLE_KEYS)}
}

${scope} [data-slot="badge"] {
  ${styleObjectToCss(badge.styles, BADGE_STYLE_KEYS)}
}

${scope} [data-slot="table"],
${scope} [data-slot="table-head"],
${scope} [data-slot="table-row"] {
  border-color: ${table.styles?.borderColor ?? "var(--border)"};
}

${scope} [data-slot="table-head"] {
  color: ${table.styles?.headerColor ?? "var(--muted-foreground)"};
}

${scope} [data-slot="table-row"]:hover {
  background: ${table.styles?.rowHoverBackground ?? "var(--muted)"};
}

${scope} [data-slot="chart"] .recharts-cartesian-axis-tick text {
  fill: ${chart.styles?.axisColor ?? "var(--muted-foreground)"};
}

${scope} [data-slot="chart"] .recharts-cartesian-grid line,
${scope} [data-slot="chart"] .recharts-polar-grid line,
${scope} [data-slot="chart"] .recharts-reference-line line {
  stroke: ${chart.styles?.gridColor ?? "var(--border)"};
}

${scope} [data-slot="chart"] [fill="var(--color-desktop)"] {
  fill: ${chart.styles?.primarySeries ?? "var(--chart-1)"};
}

${scope} [data-slot="chart"] [fill="var(--color-mobile)"] {
  fill: ${chart.styles?.secondarySeries ?? "var(--chart-2)"};
}
`
}
