import { claudeProfile } from "./claude"
import { cursorProfile } from "./cursor"
import { ibmProfile } from "./ibm"
import { notionProfile } from "./notion"
import { stripeProfile } from "./stripe"
import type {
  DesignProfile,
  DesignSlug,
  IconLibraryName,
  PreviewStyleName,
} from "./_shared"

export type DesignRuntimeHints = {
  previewStyle: PreviewStyleName
  font: string
  fontHeading: string
  iconLibrary: IconLibraryName
}

export const DESIGN_PROFILES = {
  ibm: ibmProfile,
  cursor: cursorProfile,
  stripe: stripeProfile,
  notion: notionProfile,
  claude: claudeProfile,
} satisfies Record<DesignSlug, DesignProfile>

export const DESIGN_RUNTIME_HINTS = {
  ibm: {
    previewStyle: "lyra",
    font: "ibm-plex-sans",
    fontHeading: "ibm-plex-sans",
    iconLibrary: "lucide",
  },
  cursor: {
    previewStyle: "mira",
    font: "system-ui",
    fontHeading: "system-ui",
    iconLibrary: "lucide",
  },
  stripe: {
    previewStyle: "nova",
    font: "sf-pro-display",
    fontHeading: "sf-pro-display",
    iconLibrary: "lucide",
  },
  notion: {
    previewStyle: "nova",
    font: "inter",
    fontHeading: "inter",
    iconLibrary: "lucide",
  },
  claude: {
    previewStyle: "maia",
    font: "arial",
    fontHeading: "georgia",
    iconLibrary: "lucide",
  },
} satisfies Record<DesignSlug, DesignRuntimeHints>
