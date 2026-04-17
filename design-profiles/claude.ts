import { defineProfile } from "./_shared";

export const claudeProfile = defineProfile({
  slug: "claude",
  displayName: "Claude",
  sourceDir: "content/design-md/claude",
  fonts: {
    sans: {
      family: "Arial",
      fallback: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
      notes:
        "The source references Anthropic Sans. Arial/system-ui is the intended legal v1 fallback until a licensed webfont is available.",
    },
    heading: {
      family: "Georgia",
      fallback: "'Times New Roman', Times, serif",
      notes:
        "The source references Anthropic Serif. Georgia is the closest broadly available substitute for the editorial tone.",
    },
    mono: {
      family: "SFMono-Regular",
      fallback: "Menlo, Monaco, Consolas, 'Courier New', monospace",
      notes:
        "Anthropic Mono is approximated with standard system mono stacks for code samples.",
    },
    acquisitionNotes: [
      "Anthropic Serif, Sans, and Mono are custom faces and should be treated as unavailable by default.",
      "Use Georgia for headlines, Arial/system-ui for UI text, and system mono for code until a licensed replacement is secured.",
    ],
  },
  tokens: {
    light: {
      colors: {
        background: "#f5f4ed",
        foreground: "#141413",
        surface: "#faf9f5",
        surfaceStrong: "#ffffff",
        surfaceMuted: "#e8e6dc",
        surfaceDark: "#30302e",
        fieldSurface: "#ffffff",
        fieldBorder: "#e8e6dc",
        textMuted: "#5e5d59",
        textSubtle: "#87867f",
        textEmphasis: "#3d3d3a",
        primary: "#c96442",
        primarySoft: "#d97757",
        primaryContrast: "#faf9f5",
        buttonSecondary: "#e8e6dc",
        buttonSecondaryText: "#4d4c48",
        buttonSecondaryBorder: "#4d4c48",
        focus: "#3898ec",
        error: "#b53333",
        border: "#f0eee6",
        borderStrong: "#e8e6dc",
        borderDark: "#30302e",
        ringWarm: "#d1cfc5",
        ringDeep: "#c2c0b6",
        darkTextOnWarm: "#4d4c48",
        darkSurfaceText: "#b0aea5",
      },
      shadows: {
        ring: "0px 0px 0px 1px #d1cfc5",
        ringDeep: "0px 0px 0px 1px #c2c0b6",
        whisper: "rgba(0,0,0,0.05) 0px 4px 24px",
        inset: "inset 0px 0px 0px 1px rgba(0,0,0,0.15)",
      },
      radii: {
        sharp: "4px",
        subtle: "6px",
        standard: "8px",
        generous: "12px",
        featured: "16px",
        highlight: "24px",
        hero: "32px",
      },
      spacing: {
        base: "8px",
        cardPadding: "24px",
        cardGap: "24px",
        sectionY: "80px",
        heroTop: "104px",
        heroBottom: "88px",
      },
      typography: {
        bodySize: "16px",
        bodyLineHeight: "1.6",
        introSize: "20px",
        heroSize: "64px",
        heroLineHeight: "1.1",
        headingSize: "52px",
        headingLineHeight: "1.2",
      },
    },
    dark: {
      colors: {
        background: "#141413",
        foreground: "#faf9f5",
        surface: "#30302e",
        surfaceStrong: "#141413",
        surfaceMuted: "#3d3d3a",
        surfaceDark: "#141413",
        fieldSurface: "#141413",
        fieldBorder: "#30302e",
        textMuted: "#87867f",
        textSubtle: "#b0aea5",
        textEmphasis: "#faf9f5",
        primary: "#c96442",
        primarySoft: "#d97757",
        primaryContrast: "#faf9f5",
        buttonSecondary: "#141413",
        buttonSecondaryText: "#b0aea5",
        buttonSecondaryBorder: "#30302e",
        focus: "#3898ec",
        error: "#b53333",
        border: "#30302e",
        borderStrong: "#30302e",
        borderDark: "#30302e",
        ringWarm: "#d1cfc5",
        ringDeep: "#c2c0b6",
        darkTextOnWarm: "#4d4c48",
        darkSurfaceText: "#b0aea5",
      },
      shadows: {
        ring: "0px 0px 0px 1px #30302e",
        ringDeep: "0px 0px 0px 1px #c2c0b6",
        whisper: "rgba(0,0,0,0.24) 0px 10px 36px",
        inset: "inset 0px 0px 0px 1px rgba(255,255,255,0.12)",
      },
      radii: {
        sharp: "4px",
        subtle: "6px",
        standard: "8px",
        generous: "12px",
        featured: "16px",
        highlight: "24px",
        hero: "32px",
      },
      spacing: {
        base: "8px",
        cardPadding: "24px",
        cardGap: "24px",
        sectionY: "80px",
        heroTop: "104px",
        heroBottom: "88px",
      },
      typography: {
        bodySize: "16px",
        bodyLineHeight: "1.6",
        introSize: "20px",
        heroSize: "64px",
        heroLineHeight: "1.1",
        headingSize: "52px",
        headingLineHeight: "1.2",
      },
    },
  },
  componentOverrides: {
    button: {
      description:
        "Claude buttons alternate between warm sand rings, white elevated pills, and terracotta CTAs with editorial restraint.",
      styles: {
        fontFamily: "var(--font-sans)",
        fontSize: "16px",
        fontWeight: "500",
        transition:
          "background-color 180ms ease, color 180ms ease, box-shadow 180ms ease, transform 180ms ease",
      },
      states: {
        secondary: {
          background: "var(--button-secondary)",
          color: "var(--button-secondary-text)",
          padding: "10px 12px 10px 8px",
          borderRadius: "8px",
          border: "1px solid var(--button-secondary-border)",
        },
        surface: {
          background: "var(--surface-strong)",
          color: "var(--foreground)",
          padding: "8px 16px 8px 12px",
          border: "1px solid var(--border)",
          borderRadius: "12px",
        },
        primary: {
          background: "var(--primary)",
          color: "var(--primary-contrast)",
          padding: "10px 20px",
          borderRadius: "12px",
          boxShadow: "0px 0px 0px 1px var(--primary)",
        },
        dark: {
          background: "var(--foreground)",
          color: "var(--dark-surface-text)",
          padding: "9.6px 16.8px",
          border: "1px solid var(--border-dark)",
          borderRadius: "12px",
        },
      },
    },
    card: {
      description:
        "Editorial cards live on ivory, favor warm containment, and use ring or whisper shadows instead of conventional UI chrome.",
      styles: {
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        padding: "24px",
      },
      states: {
        standard: {
          border: "1px solid var(--border)",
        },
        whisper: {
          boxShadow: "var(--shadow-whisper)",
        },
        ring: {
          boxShadow: "var(--shadow-ring)",
        },
      },
    },
    input: {
      description:
        "Inputs are compact vertically, warmly framed, and use blue only for the explicit accessibility focus moment.",
      styles: {
        background: "var(--field-surface)",
        color: "var(--foreground)",
        border: "1px solid var(--field-border)",
        borderRadius: "12px",
        padding: "1.6px 12px",
        fontSize: "16px",
      },
      states: {
        focus: {
          borderColor: "var(--focus)",
          boxShadow: "0 0 0 1px var(--focus)",
        },
        error: {
          borderColor: "var(--error)",
          boxShadow: "0 0 0 1px var(--error)",
        },
      },
    },
    dialog: {
      description:
        "Dialog-like surfaces should feel like a quiet room change: ivory on parchment, or charcoal on near-black, with soft containment.",
      styles: {
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "24px",
        boxShadow: "var(--shadow-whisper)",
      },
    },
    table: {
      description:
        "Tabular layouts should read like editorial comparison cards, with warm separators and minimal heavy striping.",
      styles: {
        borderColor: "var(--border-strong)",
        headerColor: "var(--text-subtle)",
        rowHoverBackground: "var(--surface-muted)",
      },
    },
    badge: {
      description:
        "Badges should stay typographic and quiet, using tiny sans labels with slight tracking on warm surfaces.",
      styles: {
        borderRadius: "24px",
        padding: "4px 10px",
        fontSize: "12px",
        fontWeight: "500",
        letterSpacing: "0.12px",
      },
    },
    chart: {
      description:
        "Charts should avoid neon or dashboard saturation and instead rely on terracotta, warm grays, and ivory negative space.",
      styles: {
        axisColor: "var(--text-subtle)",
        gridColor: "var(--border)",
        primarySeries: "var(--primary)",
        secondarySeries: "var(--text-muted)",
      },
    },
    misc: {
      navigation: {
        description:
          "Navigation is sticky, warm, and premium-paper toned, with serif absent from controls and reserved for content hierarchy.",
        styles: {
          background: "rgba(245,244,237,0.92)",
          borderBottom: "1px solid var(--border)",
          linkGap: "32px",
          ctaRadius: "12px",
        },
      },
      typography: {
        description:
          "Use Georgia-weight-500 style headlines to preserve the literary cadence; body copy stays relaxed at 1.6 line-height.",
        styles: {
          headlineFamily: "var(--font-heading)",
          headlineWeight: "500",
          headlineLineHeight: "1.1",
          bodyLineHeight: "1.6",
        },
      },
      sectionAlternation: {
        description:
          "Large scene changes should alternate parchment light and near-black dark sections, like chapters in an essay.",
        styles: {
          lightSection: "#f5f4ed",
          darkSection: "#141413",
          darkSectionText: "#faf9f5",
        },
      },
    },
  },
  canvasOverrides: {
    background: {
      light: {
        app: "#f5f4ed",
        canvas: "#f5f4ed",
        card: "#faf9f5",
        nav: "rgba(245,244,237,0.92)",
      },
      dark: {
        app: "#141413",
        canvas: "#141413",
        card: "#30302e",
        nav: "rgba(20,20,19,0.92)",
      },
    },
    density: {
      vibe: "editorial",
      cardGap: "24px",
      sectionPadding: "80px 32px",
      heroPadding: "104px 32px 88px",
    },
    heroLike: {
      light: {
        titleMaxWidth: "960px",
        subtitleMaxWidth: "660px",
        titleAccent: "#c96442",
        align: "center",
      },
      dark: {
        titleMaxWidth: "960px",
        subtitleMaxWidth: "660px",
        titleAccent: "#d97757",
        align: "center",
      },
    },
    borderShadowRhythm: {
      light: {
        contained: "1px solid #f0eee6",
        ring: "0px 0px 0px 1px #d1cfc5",
        whisper: "rgba(0,0,0,0.05) 0px 4px 24px",
      },
      dark: {
        contained: "1px solid #30302e",
        ring: "0px 0px 0px 1px #30302e",
        whisper: "rgba(0,0,0,0.24) 0px 10px 36px",
      },
    },
  },
  notes: [
    "Anthropic custom fonts are treated as unavailable in v1; Georgia, Arial/system-ui, and system mono preserve the intended hierarchy.",
    "Claude's visual identity relies heavily on editorial pacing and warm section alternation, so canvas overrides intentionally carry more layout mood than a normal theme file.",
    "The profile keeps the ring-shadow model explicit because it is a core part of Claude's interaction language, not just a decorative border substitute.",
  ],
});

export default claudeProfile;
