import { defineProfile } from "./_shared";

export const cursorProfile = defineProfile({
  slug: "cursor",
  displayName: "Cursor",
  sourceDir: "content/design-md/cursor",
  fonts: {
    sans: {
      family: "system-ui",
      fallback:
        "-apple-system, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      notes:
        "The source references CursorGothic. Until that proprietary face is licensed, system-ui and Helvetica Neue are the closest legal fallback for the compressed UI voice.",
    },
    heading: {
      family: "system-ui",
      fallback:
        "-apple-system, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      notes:
        "Headlines should emulate CursorGothic through tight tracking and weight restraint rather than a generic bold tech font.",
    },
    mono: {
      family: "ui-monospace",
      fallback:
        "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
      notes:
        "berkeleyMono is not bundled in the source preview, so v1 keeps a system mono fallback.",
    },
    acquisitionNotes: [
      "CursorGothic and berkeleyMono should be treated as unavailable by default in v1.",
      "The source preview already uses Source Serif 4 for the editorial serif voice; if the app gains a serif slot later, Source Serif 4 is the best immediate addition.",
      "Preserve warmth through tracking, color, and borders even when the exact proprietary display font is unavailable.",
    ],
  },
  tokens: {
    light: {
      colors: {
        background: "#f2f1ed",
        foreground: "#26251e",
        surface: "#ffffff",
        surfaceAlt: "#ebeae5",
        surfaceMuted: "#e6e5e0",
        surfaceStrong: "#e1e0db",
        cardSurface: "#ffffff",
        fieldSurface: "#ffffff",
        fieldBorder: "rgba(38, 37, 30, 0.1)",
        textMuted: "rgba(38, 37, 30, 0.55)",
        textSubtle: "rgba(38, 37, 30, 0.4)",
        primary: "#f54e00",
        primaryContrast: "#ffffff",
        buttonPrimary: "#26251e",
        buttonPrimaryText: "#f2f1ed",
        buttonPrimaryBorder: "#f2f1ed",
        buttonSecondary: "#ebeae5",
        buttonSecondaryText: "#26251e",
        buttonSecondaryBorder: "#26251e",
        buttonGhost: "rgba(38, 37, 30, 0.06)",
        buttonGhostText: "rgba(38, 37, 30, 0.55)",
        buttonGhostBorder: "rgba(38, 37, 30, 0.55)",
        accentGold: "#c08532",
        error: "#cf2d56",
        success: "#1f8a65",
        thinking: "#dfa88f",
        grep: "#9fc9a2",
        read: "#9fbbe0",
        edit: "#c0a8dd",
        border: "rgba(38, 37, 30, 0.1)",
        borderMedium: "rgba(38, 37, 30, 0.2)",
        borderStrong: "rgba(38, 37, 30, 0.55)",
      },
      shadows: {
        card:
          "rgba(0,0,0,0.14) 0px 28px 70px 0px, rgba(0,0,0,0.1) 0px 14px 32px 0px, rgba(38,37,30,0.1) 0px 0px 0px 1px",
        ambient:
          "rgba(0,0,0,0.02) 0px 0px 16px 0px, rgba(0,0,0,0.008) 0px 0px 8px 0px",
        focus: "rgba(0,0,0,0.1) 0px 4px 12px",
      },
      radii: {
        micro: "1.5px",
        inline: "2px",
        small: "3px",
        standard: "4px",
        comfortable: "8px",
        featured: "10px",
        pill: "9999px",
      },
      spacing: {
        base: "8px",
        micro: "2px",
        fine: "6px",
        buttonGap: "12px",
        cardGap: "20px",
        sectionY: "64px",
        heroTop: "96px",
        heroBottom: "80px",
      },
      typography: {
        bodySize: "16px",
        bodyLineHeight: "1.5",
        serifBodySize: "19.2px",
        serifBodyLineHeight: "1.5",
        heroSize: "72px",
        heroLineHeight: "1.1",
        heroTracking: "-2.16px",
        sectionTitleSize: "36px",
        sectionTracking: "-0.72px",
      },
    },
    dark: {
      colors: {
        background: "#1a1915",
        foreground: "#e6e5e0",
        surface: "#111110",
        surfaceAlt: "#2a2922",
        surfaceMuted: "#33322a",
        surfaceStrong: "#3d3c33",
        cardSurface: "#2a2922",
        fieldSurface: "#2a2922",
        fieldBorder: "rgba(230, 229, 224, 0.1)",
        textMuted: "rgba(230, 229, 224, 0.55)",
        textSubtle: "rgba(230, 229, 224, 0.35)",
        primary: "#f54e00",
        primaryContrast: "#111110",
        buttonPrimary: "#e6e5e0",
        buttonPrimaryText: "#1a1915",
        buttonPrimaryBorder: "#1a1915",
        buttonSecondary: "#2a2922",
        buttonSecondaryText: "#e6e5e0",
        buttonSecondaryBorder: "#e6e5e0",
        buttonGhost: "rgba(230, 229, 224, 0.06)",
        buttonGhostText: "rgba(230, 229, 224, 0.55)",
        buttonGhostBorder: "rgba(230, 229, 224, 0.55)",
        accentGold: "#d9a04a",
        error: "#e04a6f",
        success: "#2fba8a",
        thinking: "#a06b50",
        grep: "#5a9e5e",
        read: "#5a8ab8",
        edit: "#8a6fb8",
        border: "rgba(230, 229, 224, 0.1)",
        borderMedium: "rgba(230, 229, 224, 0.2)",
        borderStrong: "rgba(230, 229, 224, 0.55)",
      },
      shadows: {
        card:
          "rgba(0,0,0,0.4) 0px 28px 70px 0px, rgba(0,0,0,0.3) 0px 14px 32px 0px, rgba(230,229,224,0.08) 0px 0px 0px 1px",
        ambient:
          "rgba(0,0,0,0.1) 0px 0px 16px 0px, rgba(0,0,0,0.05) 0px 0px 8px 0px",
        focus: "rgba(245,78,0,0.3) 0px 4px 12px",
      },
      radii: {
        micro: "1.5px",
        inline: "2px",
        small: "3px",
        standard: "4px",
        comfortable: "8px",
        featured: "10px",
        pill: "9999px",
      },
      spacing: {
        base: "8px",
        micro: "2px",
        fine: "6px",
        buttonGap: "12px",
        cardGap: "20px",
        sectionY: "64px",
        heroTop: "96px",
        heroBottom: "80px",
      },
      typography: {
        bodySize: "16px",
        bodyLineHeight: "1.5",
        serifBodySize: "19.2px",
        serifBodyLineHeight: "1.5",
        heroSize: "72px",
        heroLineHeight: "1.1",
        heroTracking: "-2.16px",
        sectionTitleSize: "36px",
        sectionTracking: "-0.72px",
      },
    },
  },
  componentOverrides: {
    button: {
      description:
        "Cursor buttons should feel softly tactile: warm surfaces, quiet borders, and hover states that shift toward warm crimson rather than blue.",
      styles: {
        fontFamily: "var(--font-sans)",
        fontSize: "14px",
        fontWeight: "400",
        borderRadius: "8px",
        transition:
          "color 150ms ease, background-color 150ms ease, box-shadow 180ms ease",
      },
      states: {
        primary: {
          background: "var(--button-primary)",
          color: "var(--button-primary-text)",
          padding: "10px 14px",
          border: "1px solid var(--button-primary-border)",
        },
        secondary: {
          background: "var(--button-secondary)",
          color: "var(--button-secondary-text)",
          padding: "10px 14px",
          border: "1px solid var(--button-secondary-border)",
        },
        inverse: {
          background: "var(--foreground)",
          color: "var(--background)",
          padding: "10px 20px",
        },
        outline: {
          background: "var(--button-ghost)",
          color: "var(--button-ghost-text)",
          padding: "6px 12px",
          border: "1px solid var(--button-ghost-border)",
        },
        ghost: {
          background: "var(--button-ghost)",
          color: "var(--button-ghost-text)",
          padding: "6px 12px",
        },
        pill: {
          background: "var(--surfaceMuted)",
          color: "var(--textMuted)",
          padding: "3px 8px",
          borderRadius: "9999px",
        },
      },
    },
    card: {
      description:
        "Cursor cards should feel atmospheric and crafted, using warm borders plus large diffused shadows instead of crisp enterprise chrome.",
      styles: {
        background: "var(--card-surface)",
        border: "1px solid var(--border)",
        borderRadius: "8px",
        padding: "24px",
      },
      states: {
        standard: {
          background: "var(--surface)",
        },
        muted: {
          background: "var(--surfaceAlt)",
        },
        hover: {
          boxShadow: "var(--shadow-card)",
        },
      },
    },
    input: {
      description:
        "Inputs should stay lightweight and editorial, with small radii, warm borders, and accent-orange focus instead of default blue rings.",
      styles: {
        background: "var(--field-surface)",
        color: "var(--foreground)",
        border: "1px solid var(--field-border)",
        borderRadius: "4px",
        padding: "8px 8px 6px",
        fontSize: "14px",
      },
      states: {
        focus: {
          borderColor: "var(--primary)",
          boxShadow: "var(--shadow-focus)",
        },
        error: {
          borderColor: "var(--error)",
        },
      },
    },
    dialog: {
      description:
        "Dialogs should read like editor popovers on warm paper: rounded, softly lifted, and never glossy.",
      styles: {
        background: "var(--surfaceAlt)",
        border: "1px solid var(--border)",
        borderRadius: "10px",
        boxShadow: "var(--shadow-card)",
      },
    },
    table: {
      description:
        "Tables should keep an editor-adjacent feel, using strong warm rules and soft hover states rather than hard zebra striping.",
      styles: {
        borderColor: "var(--borderStrong)",
        headerColor: "var(--textMuted)",
        rowHoverBackground: "var(--surfaceMuted)",
      },
    },
    badge: {
      description:
        "Badges should mostly be full pills, often tinted by timeline semantics like thinking, grep, read, and edit.",
      styles: {
        borderRadius: "9999px",
        padding: "2px 8px",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    chart: {
      description:
        "Charts and timeline visuals should use Cursor's semantic AI palette rather than generic data rainbow colors.",
      styles: {
        axisColor: "var(--textSubtle)",
        gridColor: "var(--border)",
        primarySeries: "var(--primary)",
        thinkingSeries: "var(--thinking)",
        grepSeries: "var(--grep)",
        readSeries: "var(--read)",
        editSeries: "var(--edit)",
      },
    },
    misc: {
      navigation: {
        description:
          "Navigation is translucent and warm, with the CTA blending into the same cream scale instead of a loud brand button.",
        styles: {
          background: "rgba(242,241,237,0.85)",
          darkBackground: "rgba(26,25,21,0.85)",
          borderBottom: "1px solid var(--border)",
          linkGap: "24px",
        },
      },
      typography: {
        description:
          "Cursor's typographic feel comes from compressed system headlines plus a literary serif body voice, not from heavy weights.",
        styles: {
          heroTracking: "-2.16px",
          sectionTracking: "-0.72px",
          bodySerifFamily:
            "'Source Serif 4', 'Iowan Old Style', 'Palatino Linotype', Georgia, serif",
          bodySerifFeature: "\"cswh\" 1",
        },
      },
      timeline: {
        description:
          "The AI timeline colors are first-class brand signals and should stay visible anywhere the preview includes process states or logs.",
        styles: {
          thinking: "#dfa88f",
          grep: "#9fc9a2",
          read: "#9fbbe0",
          edit: "#c0a8dd",
        },
      },
    },
  },
  canvasOverrides: {
    background: {
      light: {
        app: "#f2f1ed",
        canvas: "#f2f1ed",
        card: "#ffffff",
        nav: "rgba(242,241,237,0.85)",
      },
      dark: {
        app: "#1a1915",
        canvas: "#1a1915",
        card: "#2a2922",
        nav: "rgba(26,25,21,0.85)",
      },
    },
    density: {
      vibe: "warm-editorial",
      cardGap: "20px",
      sectionPadding: "64px 32px",
      heroPadding: "96px 32px 80px",
    },
    heroLike: {
      light: {
        titleMaxWidth: "840px",
        subtitleMaxWidth: "600px",
        align: "center",
      },
      dark: {
        titleMaxWidth: "840px",
        subtitleMaxWidth: "600px",
        align: "center",
      },
    },
    borderShadowRhythm: {
      light: {
        ring: "1px solid rgba(38, 37, 30, 0.1)",
        ambient: "rgba(0,0,0,0.02) 0px 0px 16px 0px",
        elevated:
          "rgba(0,0,0,0.14) 0px 28px 70px 0px, rgba(0,0,0,0.1) 0px 14px 32px 0px",
      },
      dark: {
        ring: "1px solid rgba(230, 229, 224, 0.1)",
        ambient: "rgba(0,0,0,0.1) 0px 0px 16px 0px",
        elevated:
          "rgba(0,0,0,0.4) 0px 28px 70px 0px, rgba(0,0,0,0.3) 0px 14px 32px 0px",
      },
    },
  },
  notes: [
    "CursorGothic and berkeleyMono are treated as unavailable in v1, so the profile preserves mood through system sans compression, warm surfaces, and semantic timeline colors.",
    "Source Serif 4 appears in the source preview and is recorded in misc typography styles for later use when the provider supports an explicit serif slot.",
    "The profile keeps the oklab-inspired warm-border feel through translucent brown borders rather than replacing them with generic slate grays.",
  ],
});

export default cursorProfile;
