import * as React from "react"

export const STYLES = [
  {
    name: "vega",
    title: "Vega",
    description: "Clean, neutral, and familiar",
    icon: <div className="size-8 rounded-lg border" />,
  },
  {
    name: "nova",
    title: "Nova",
    description: "Reduced padding and margins",
    icon: <div className="size-8 rounded-2xl border" />,
  },
  {
    name: "maia",
    title: "Maia",
    description: "Rounded, with generous spacing",
    icon: <div className="size-8 rounded-full border" />,
  },
  {
    name: "lyra",
    title: "Lyra",
    description: "Boxy and sharp. For mono fonts.",
    icon: <div className="size-8 rounded-none border" />,
  },
  {
    name: "mira",
    title: "Mira",
    description: "Made for compact interfaces.",
    icon: <div className="size-8 rotate-45 rounded-lg border" />,
  },
  {
    name: "luma",
    title: "Luma",
    description: "Fluid, luminous, and glassy.",
    icon: <div className="size-8 rounded-full border border-dashed" />,
  },
] as const

export type Style = (typeof STYLES)[number]
