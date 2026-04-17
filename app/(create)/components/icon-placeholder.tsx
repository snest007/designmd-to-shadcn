"use client"

import * as React from "react"
import { SquareIcon, icons, type LucideIcon } from "lucide-react"

import { useDesignSystemSearchParams } from "@/app/(create)/lib/search-params"

type IconLibraryName =
  | "lucide"
  | "tabler"
  | "hugeicons"
  | "phosphor"
  | "remixicon"

type IconPlaceholderProps = {
  [K in IconLibraryName]: string
} & React.ComponentProps<"svg">

const ICON_MAP = icons as Record<string, LucideIcon>

function resolveLucideIcon(name?: string) {
  if (!name) {
    return null
  }

  const normalizedName = name.replace(/Icon$/, "")

  return ICON_MAP[name] ?? ICON_MAP[normalizedName] ?? null
}

export function IconPlaceholder({
  lucide,
  tabler,
  hugeicons,
  phosphor,
  remixicon,
  ...props
}: IconPlaceholderProps) {
  const [{ iconLibrary }] = useDesignSystemSearchParams()

  const preferredName =
    {
      lucide,
      tabler,
      hugeicons,
      phosphor,
      remixicon,
    }[iconLibrary] ?? lucide

  const Icon = resolveLucideIcon(lucide) ?? resolveLucideIcon(preferredName)

  if (!Icon) {
    return <SquareIcon {...props} />
  }

  return React.createElement(Icon, props)
}
