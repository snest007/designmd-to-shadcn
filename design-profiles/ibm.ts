import { defineProfile } from "./_shared";

export const ibmProfile = defineProfile({
  slug: "ibm",
  displayName: "IBM",
  sourceDir: "content/design-md/ibm",
  fonts: {
    sans: {
      family: "IBM Plex Sans",
      fallback: "'Helvetica Neue', Arial, sans-serif",
      notes:
        "IBM Plex Sans is directly available from Google Fonts and matches the source preview.",
    },
    heading: {
      family: "IBM Plex Sans",
      fallback: "'Helvetica Neue', Arial, sans-serif",
      notes:
        "Display headlines rely on IBM Plex Sans Light with Carbon-style restraint rather than a separate display face.",
    },
    mono: {
      family: "IBM Plex Mono",
      fallback: "Menlo, Courier, monospace",
      notes:
        "IBM Plex Mono is directly available and should be preserved for labels, code, and data surfaces.",
    },
    acquisitionNotes: [
      "Use next/font/google IBM Plex Sans with weights 300, 400, and 600.",
      "Use next/font/google IBM Plex Mono with weights 400, 500, and 600.",
      "Do not soften IBM with rounded substitute fonts; Carbon depends on the Plex family and sharp rectangles.",
    ],
  },
  tokens: {
    light: {
      colors: {
        background: "#ffffff",
        foreground: "#161616",
        surface: "#ffffff",
        surfaceAlt: "#f4f4f4",
        surfaceElevated: "#e0e0e0",
        surfaceHover: "#e8e8e8",
        textMuted: "#525252",
        textSubtle: "#6f6f6f",
        textDisabled: "#8d8d8d",
        primary: "#0f62fe",
        primaryHover: "#0353e9",
        primaryActive: "#002d9c",
        primaryContrast: "#ffffff",
        interactive: "#0f62fe",
        interactiveHover: "#0043ce",
        buttonPrimary: "#0f62fe",
        buttonPrimaryHover: "#0353e9",
        buttonPrimaryActive: "#002d9c",
        buttonPrimaryText: "#ffffff",
        focus: "#0f62fe",
        focusInset: "#ffffff",
        infoTint: "#edf5ff",
        success: "#24a148",
        warning: "#f1c21b",
        error: "#da1e28",
        border: "#c6c6c6",
        borderStrong: "#e0e0e0",
        inverseSurface: "#161616",
        inverseText: "#f4f4f4",
      },
      shadows: {
        flat: "none",
        raised: "0 2px 6px rgba(0,0,0,0.3)",
        overlay: "0 2px 6px rgba(0,0,0,0.3)",
        focus:
          "inset 0 0 0 2px var(--focus), inset 0 0 0 3px var(--focus-inset)",
      },
      radii: {
        sharp: "0px",
        subtle: "0px",
        standard: "0px",
        card: "0px",
        expressive: "0px",
        pill: "24px",
        round: "9999px",
      },
      spacing: {
        base: "8px",
        dense: "4px",
        component: "16px",
        gap: "16px",
        sectionY: "48px",
        heroTop: "80px",
        heroBottom: "64px",
      },
      typography: {
        bodySize: "16px",
        bodyLineHeight: "1.5",
        uiSize: "14px",
        captionSize: "12px",
        captionTracking: "0.32px",
        heroSize: "60px",
        heroLineHeight: "1.17",
        heroWeight: "300",
        sectionTitleSize: "32px",
        cardTitleSize: "20px",
      },
    },
    dark: {
      colors: {
        background: "#161616",
        foreground: "#f4f4f4",
        surface: "#262626",
        surfaceAlt: "#262626",
        surfaceElevated: "#393939",
        surfaceHover: "#333333",
        textMuted: "#c6c6c6",
        textSubtle: "#a8a8a8",
        textDisabled: "#8d8d8d",
        primary: "#0f62fe",
        primaryHover: "#4589ff",
        primaryActive: "#002d9c",
        primaryContrast: "#ffffff",
        interactive: "#78a9ff",
        interactiveHover: "#4589ff",
        buttonPrimary: "#0f62fe",
        buttonPrimaryHover: "#4589ff",
        buttonPrimaryActive: "#002d9c",
        buttonPrimaryText: "#ffffff",
        focus: "#78a9ff",
        focusInset: "#161616",
        infoTint: "#001d6c",
        success: "#42be65",
        warning: "#f1c21b",
        error: "#ff8389",
        border: "#393939",
        borderStrong: "#525252",
        inverseSurface: "#000000",
        inverseText: "#f4f4f4",
      },
      shadows: {
        flat: "none",
        raised: "0 2px 6px rgba(0,0,0,0.45)",
        overlay: "0 2px 6px rgba(0,0,0,0.45)",
        focus:
          "inset 0 0 0 2px var(--focus), inset 0 0 0 3px var(--focus-inset)",
      },
      radii: {
        sharp: "0px",
        subtle: "0px",
        standard: "0px",
        card: "0px",
        expressive: "0px",
        pill: "24px",
        round: "9999px",
      },
      spacing: {
        base: "8px",
        dense: "4px",
        component: "16px",
        gap: "16px",
        sectionY: "48px",
        heroTop: "80px",
        heroBottom: "64px",
      },
      typography: {
        bodySize: "16px",
        bodyLineHeight: "1.5",
        uiSize: "14px",
        captionSize: "12px",
        captionTracking: "0.32px",
        heroSize: "60px",
        heroLineHeight: "1.17",
        heroWeight: "300",
        sectionTitleSize: "32px",
        cardTitleSize: "20px",
      },
    },
  },
  componentOverrides: {
    button: {
      description:
        "IBM buttons should feel like Carbon controls: sharp, asymmetric, and semantically token-driven instead of decorative.",
      styles: {
        fontFamily: "var(--font-sans)",
        fontSize: "14px",
        fontWeight: "400",
        letterSpacing: "0.16px",
        borderRadius: "0px",
        minHeight: "48px",
        transition: "background-color 150ms ease, color 150ms ease",
      },
      states: {
        primary: {
          background: "var(--button-primary)",
          color: "var(--button-primary-text)",
          padding: "14px 63px 14px 16px",
          border: "1px solid transparent",
        },
        secondary: {
          background: "var(--surface-elevated)",
          color: "var(--inverse-text)",
          padding: "14px 63px 14px 16px",
          border: "1px solid transparent",
        },
        tertiary: {
          background: "transparent",
          color: "var(--interactive)",
          padding: "14px 16px",
          border: "1px solid var(--interactive)",
        },
        ghost: {
          background: "transparent",
          color: "var(--interactive)",
          padding: "14px 16px",
        },
        danger: {
          background: "var(--error)",
          color: "#ffffff",
          padding: "14px 63px 14px 16px",
        },
      },
    },
    card: {
      description:
        "IBM cards are mostly flat layers, using background-color zoning and hairline separators instead of soft elevation.",
      styles: {
        background: "var(--surface-alt)",
        border: "1px solid transparent",
        borderRadius: "0px",
        boxShadow: "var(--shadow-flat)",
        padding: "16px",
      },
      states: {
        hover: {
          background: "var(--surface-hover)",
        },
        elevated: {
          background: "var(--surface)",
          boxShadow: "var(--shadow-raised)",
        },
      },
    },
    input: {
      description:
        "Inputs should use Carbon's bottom-border treatment rather than enclosed rounded fields.",
      styles: {
        background: "var(--surface-alt)",
        color: "var(--foreground)",
        border: "none",
        borderBottom: "2px solid transparent",
        borderRadius: "0px",
        padding: "0 16px",
        height: "40px",
        fontSize: "14px",
        letterSpacing: "0.16px",
      },
      states: {
        active: {
          borderBottomColor: "var(--foreground)",
        },
        focus: {
          borderBottomColor: "var(--focus)",
          boxShadow: "var(--shadow-focus)",
        },
        error: {
          borderBottomColor: "var(--error)",
        },
      },
    },
    dialog: {
      description:
        "Dialog surfaces should remain rectangular and enterprise-formal, with minimal treatment beyond the Carbon overlay shadow.",
      styles: {
        background: "var(--surface)",
        border: "1px solid var(--borderStrong)",
        borderRadius: "0px",
        boxShadow: "var(--shadow-overlay)",
      },
    },
    table: {
      description:
        "Tables should read like structured product data: dense rows, mono labels, and precise hairline separators.",
      styles: {
        borderColor: "var(--borderStrong)",
        headerColor: "var(--textMuted)",
        rowHoverBackground: "var(--surfaceAlt)",
      },
    },
    badge: {
      description:
        "Badges are the main exception to IBM's square language, using 24px pills with contextual tints.",
      styles: {
        borderRadius: "24px",
        padding: "4px 8px",
        fontSize: "12px",
        fontWeight: "400",
        letterSpacing: "0.16px",
      },
    },
    chart: {
      description:
        "Chart accents should stay restrained: mostly grayscale structure with a single IBM blue highlight and semantic support colors.",
      styles: {
        axisColor: "var(--textSubtle)",
        gridColor: "var(--borderStrong)",
        primarySeries: "var(--primary)",
        successSeries: "var(--success)",
        warningSeries: "var(--warning)",
      },
    },
    misc: {
      navigation: {
        description:
          "Navigation should stay dark and utility-like, with low-contrast links and one sharp blue CTA.",
        styles: {
          background: "var(--inverseSurface)",
          linkColor: "var(--textMuted)",
          linkHoverColor: "var(--inverseText)",
          ctaRadius: "0px",
        },
      },
      typography: {
        description:
          "IBM hierarchy depends on weight restraint and micro-tracking at compact sizes rather than large stylistic flourishes.",
        styles: {
          displayWeight: "300",
          bodyWeight: "400",
          emphasisWeight: "600",
          captionTracking: "0.32px",
          monoCaptionTracking: "0.32px",
        },
      },
      sections: {
        description:
          "Major scene changes should come from alternating white and gray-10 bands, not from rounded containers or decorative gradients.",
        styles: {
          baseSection: "#ffffff",
          mutedSection: "#f4f4f4",
          divider: "1px solid #e0e0e0",
        },
      },
    },
  },
  canvasOverrides: {
    background: {
      light: {
        app: "#ffffff",
        canvas: "#ffffff",
        mutedSection: "#f4f4f4",
        nav: "#161616",
      },
      dark: {
        app: "#161616",
        canvas: "#161616",
        mutedSection: "#262626",
        nav: "#262626",
      },
    },
    density: {
      vibe: "productive",
      cardGap: "16px",
      sectionPadding: "48px 32px",
      heroPadding: "80px 32px 64px",
    },
    heroLike: {
      light: {
        titleMaxWidth: "800px",
        subtitleMaxWidth: "640px",
        align: "left",
      },
      dark: {
        titleMaxWidth: "800px",
        subtitleMaxWidth: "640px",
        align: "left",
      },
    },
    borderShadowRhythm: {
      light: {
        sectionDivider: "1px solid #e0e0e0",
        cardShadow: "none",
        overlayShadow: "0 2px 6px rgba(0,0,0,0.3)",
      },
      dark: {
        sectionDivider: "1px solid #393939",
        cardShadow: "none",
        overlayShadow: "0 2px 6px rgba(0,0,0,0.45)",
      },
    },
  },
  notes: [
    "IBM is the cleanest fit for the current schema because the source already exposes a strict token model and publicly available fonts.",
    "The profile intentionally preserves Carbon's flatness; any future provider should resist adding default shadcn card shadows on top.",
    "Rounded badges are kept as the one visible exception to IBM's otherwise rectangular interaction language.",
  ],
});

export default ibmProfile;
