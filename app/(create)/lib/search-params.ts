"use client"

import * as React from "react"

type IconLibraryName =
  | "lucide"
  | "tabler"
  | "hugeicons"
  | "phosphor"
  | "remixicon"

export type DesignSystemSearchParams = {
  font: string
  fontHeading: string
  style: string
  iconLibrary: IconLibraryName
}

const DEFAULT_PARAMS: DesignSystemSearchParams = {
  font: "inter",
  fontHeading: "inter",
  style: "nova",
  iconLibrary: "lucide",
}

const noop = () => {}

const DesignSystemSearchParamsContext =
  React.createContext<DesignSystemSearchParams>(DEFAULT_PARAMS)

export function DesignSystemPreviewProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: Partial<DesignSystemSearchParams>
}) {
  return React.createElement(
    DesignSystemSearchParamsContext.Provider,
    {
      value: {
        ...DEFAULT_PARAMS,
        ...value,
      },
    },
    children
  )
}

export function useDesignSystemSearchParams() {
  const params = React.useContext(DesignSystemSearchParamsContext)

  return [params, noop] as const
}
