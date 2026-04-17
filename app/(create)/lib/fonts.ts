export type PreviewFontOption = {
  name: string
  value: string
  type: "sans" | "serif" | "mono"
}

export const FONTS = [
  {
    name: "Inter",
    value: "inter",
    type: "sans",
  },
  {
    name: "IBM Plex Sans",
    value: "ibm-plex-sans",
    type: "sans",
  },
  {
    name: "System UI",
    value: "system-ui",
    type: "sans",
  },
  {
    name: "SF Pro Display",
    value: "sf-pro-display",
    type: "sans",
  },
  {
    name: "Arial",
    value: "arial",
    type: "sans",
  },
  {
    name: "Georgia",
    value: "georgia",
    type: "serif",
  },
  {
    name: "IBM Plex Mono",
    value: "ibm-plex-mono",
    type: "mono",
  },
  {
    name: "Source Code Pro",
    value: "source-code-pro",
    type: "mono",
  },
  {
    name: "System Mono",
    value: "ui-monospace",
    type: "mono",
  },
] as const satisfies readonly PreviewFontOption[]
