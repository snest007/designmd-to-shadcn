import { defineProfile } from "./_shared";

export const notionProfile = defineProfile({
  slug: "notion",
  displayName: "Notion",
  sourceDir: "content/design-md/notion",
  fonts: {
    sans: {
      family: "Inter",
      fallback:
        "-apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif",
      notes:
        "The source references NotionInter. Inter is the closest legal and readily available web substitute for v1.",
    },
    heading: {
      family: "Inter",
      fallback:
        "-apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif",
      notes:
        "Headings rely on aggressive negative tracking rather than a separate display face.",
    },
    mono: {
      family: "ui-monospace",
      fallback:
        "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace",
    },
    acquisitionNotes: [
      "Use next/font/google Inter for body and heading.",
      "Do not claim NotionInter parity; preserve the feel with tracking, weight, and warm neutrals.",
    ],
  },
  tokens: {
    light: {
      colors: {
        background: "#ffffff",
        foreground: "rgba(0,0,0,0.95)",
        surface: "#ffffff",
        surfaceAlt: "#f6f5f4",
        surfaceDark: "#31302e",
        cardSurface: "#ffffff",
        fieldSurface: "#ffffff",
        fieldBorder: "#dddddd",
        textMuted: "#615d59",
        textSubtle: "#a39e98",
        primary: "#0075de",
        primaryActive: "#005bab",
        primaryContrast: "#ffffff",
        buttonSecondary: "rgba(0,0,0,0.05)",
        buttonSecondaryText: "rgba(0,0,0,0.95)",
        buttonSecondaryBorder: "rgba(0,0,0,0.95)",
        focus: "#097fe8",
        linkOnDark: "#62aef0",
        badgeSurface: "#f2f9ff",
        badgeText: "#097fe8",
        success: "#1aae39",
        successSoft: "rgba(26,174,57,0.1)",
        info: "#2a9d99",
        infoSoft: "rgba(42,157,153,0.1)",
        warning: "#dd5b00",
        warningSoft: "rgba(221,91,0,0.1)",
        accentPink: "#ff64c8",
        accentPurple: "#391c57",
        accentBrown: "#523410",
        brandSecondary: "#213183",
        border: "rgba(0,0,0,0.1)",
        borderStrong: "#dddddd",
      },
      shadows: {
        card:
          "rgba(0,0,0,0.04) 0px 4px 18px 0px, rgba(0,0,0,0.027) 0px 2.025px 7.85px 0px, rgba(0,0,0,0.02) 0px 0.8px 2.93px 0px, rgba(0,0,0,0.01) 0px 0.175px 1.04px 0px",
        deep:
          "rgba(0,0,0,0.01) 0px 1px 3px 0px, rgba(0,0,0,0.02) 0px 3px 7px 0px, rgba(0,0,0,0.02) 0px 7px 15px 0px, rgba(0,0,0,0.04) 0px 14px 28px 0px, rgba(0,0,0,0.05) 0px 23px 52px 0px",
        focus: "0 0 0 2px rgba(0,117,222,0.2)",
      },
      radii: {
        micro: "4px",
        subtle: "5px",
        standard: "8px",
        card: "12px",
        featured: "16px",
        pill: "9999px",
      },
      spacing: {
        base: "8px",
        sectionY: "64px",
        sectionYMobile: "48px",
        cardGap: "20px",
        cardPadding: "24px",
        heroTop: "96px",
        heroBottom: "80px",
      },
      typography: {
        bodySize: "16px",
        bodyLineHeight: "1.5",
        uiSize: "15px",
        titleSize: "22px",
        sectionTitleSize: "32px",
        heroSize: "64px",
        heroTracking: "-2.125px",
      },
    },
    dark: {
      colors: {
        background: "#191919",
        foreground: "rgba(255,255,255,0.92)",
        surface: "#191919",
        surfaceAlt: "#1e1e1e",
        surfaceDark: "#d4d3d1",
        cardSurface: "#1e1e1e",
        fieldSurface: "#1e1e1e",
        fieldBorder: "rgba(255,255,255,0.15)",
        textMuted: "#a8a5a0",
        textSubtle: "#6b6763",
        primary: "#4da3f0",
        primaryActive: "#3a8fdc",
        primaryContrast: "#191919",
        buttonSecondary: "rgba(255,255,255,0.08)",
        buttonSecondaryText: "rgba(255,255,255,0.92)",
        buttonSecondaryBorder: "rgba(255,255,255,0.92)",
        focus: "#5aacf5",
        linkOnDark: "#62aef0",
        badgeSurface: "#1a2a3a",
        badgeText: "#5aacf5",
        success: "#2fca52",
        successSoft: "rgba(47,202,82,0.18)",
        info: "#3dbdb9",
        infoSoft: "rgba(61,189,185,0.16)",
        warning: "#f07020",
        warningSoft: "rgba(240,112,32,0.18)",
        accentPink: "#ff80d5",
        accentPurple: "#a07acc",
        accentBrown: "#c49060",
        brandSecondary: "#6878c8",
        border: "rgba(255,255,255,0.1)",
        borderStrong: "rgba(255,255,255,0.15)",
      },
      shadows: {
        card:
          "rgba(0,0,0,0.2) 0px 4px 18px 0px, rgba(0,0,0,0.15) 0px 2.025px 7.85px 0px, rgba(0,0,0,0.1) 0px 0.8px 2.93px 0px, rgba(0,0,0,0.08) 0px 0.175px 1.04px 0px",
        deep:
          "rgba(0,0,0,0.15) 0px 1px 3px 0px, rgba(0,0,0,0.2) 0px 3px 7px 0px, rgba(0,0,0,0.2) 0px 7px 15px 0px, rgba(0,0,0,0.25) 0px 14px 28px 0px, rgba(0,0,0,0.3) 0px 23px 52px 0px",
        focus: "0 0 0 2px rgba(77,163,240,0.25)",
      },
      radii: {
        micro: "4px",
        subtle: "5px",
        standard: "8px",
        card: "12px",
        featured: "16px",
        pill: "9999px",
      },
      spacing: {
        base: "8px",
        sectionY: "64px",
        sectionYMobile: "48px",
        cardGap: "20px",
        cardPadding: "24px",
        heroTop: "96px",
        heroBottom: "80px",
      },
      typography: {
        bodySize: "16px",
        bodyLineHeight: "1.5",
        uiSize: "15px",
        titleSize: "22px",
        sectionTitleSize: "32px",
        heroSize: "64px",
        heroTracking: "-2.125px",
      },
    },
  },
  componentOverrides: {
    button: {
      description:
        "Subtle 4px rectangles with one chromatic blue CTA, warm translucent ghost actions, and pill badges for status.",
      styles: {
        fontFamily: "var(--font-sans)",
        fontSize: "15px",
        fontWeight: "600",
        borderRadius: "4px",
        transition:
          "background-color 150ms ease, color 150ms ease, transform 150ms ease, box-shadow 150ms ease",
      },
      states: {
        primary: {
          background: "var(--primary)",
          color: "var(--primary-contrast)",
          padding: "10px 24px",
          border: "1px solid transparent",
        },
        secondary: {
          background: "var(--button-secondary)",
          color: "var(--button-secondary-text)",
          padding: "10px 24px",
          border: "1px solid var(--button-secondary-border)",
        },
        badge: {
          background: "var(--badge-surface)",
          color: "var(--badge-text)",
          padding: "4px 8px",
          borderRadius: "9999px",
          fontSize: "12px",
          letterSpacing: "0.125px",
        },
      },
    },
    card: {
      description:
        "Warm white or pure white cards with whisper borders and barely-there multi-layer shadows.",
      styles: {
        background: "var(--card-surface)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        boxShadow: "var(--shadow-card)",
        padding: "24px",
      },
      states: {
        hover: {
          boxShadow: "var(--shadow-deep)",
        },
        featured: {
          background: "var(--surface-alt)",
          borderRadius: "16px",
        },
      },
    },
    input: {
      description:
        "Compact 4px controls with warm neutral borders and a blue accessibility ring.",
      styles: {
        background: "var(--field-surface)",
        color: "var(--foreground)",
        border: "1px solid var(--field-border)",
        borderRadius: "4px",
        padding: "8px 12px",
        fontSize: "14px",
      },
      states: {
        focus: {
          borderColor: "var(--primary)",
          boxShadow: "var(--shadow-focus)",
        },
        error: {
          borderColor: "var(--warning)",
          boxShadow: "0 0 0 2px rgba(221,91,0,0.2)",
        },
      },
    },
    dialog: {
      description:
        "Deep shadow panels should still feel paper-like, using warm whites and understated edges instead of dense overlays.",
      styles: {
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        boxShadow: "var(--shadow-deep)",
      },
    },
    table: {
      description:
        "Tables should read like structured documents: warm backgrounds, thin dividers, and low-contrast chrome.",
      styles: {
          borderColor: "var(--border)",
          headerColor: "var(--text-muted)",
          rowHoverBackground: "var(--surface-alt)",
      },
    },
    badge: {
      description:
        "Badges are tiny, bright, and pill-shaped, usually in tinted blue or lightly tinted semantic colors.",
      styles: {
        borderRadius: "9999px",
        padding: "4px 8px",
        fontSize: "12px",
        fontWeight: "600",
        letterSpacing: "0.125px",
      },
    },
    chart: {
      description:
        "Chart accents should stay sparse and rely on Notion Blue plus warm semantic accents rather than full-spectrum dashboards.",
      styles: {
        axisColor: "var(--text-subtle)",
        gridColor: "var(--border)",
        primarySeries: "var(--primary)",
      },
    },
    misc: {
      navigation: {
        description:
          "Top navigation is light, horizontally spacious, and intentionally non-sticky in the source preview.",
        styles: {
          linkFontSize: "15px",
          linkWeight: "500",
          linkHoverDecoration: "underline",
          ctaRadius: "4px",
        },
      },
      typography: {
        description:
          "Large headlines are compressed through negative tracking; body stays calm and neutral at 16px/1.5.",
        styles: {
          heroTracking: "-2.125px",
          sectionTracking: "-1px",
          titleTracking: "-0.25px",
        },
      },
    },
  },
  canvasOverrides: {
    background: {
      light: {
        app: "#ffffff",
        canvas: "#ffffff",
        mutedSection: "#f6f5f4",
      },
      dark: {
        app: "#191919",
        canvas: "#191919",
        mutedSection: "#1e1e1e",
      },
    },
    density: {
      vibe: "airy",
      cardGap: "20px",
      sectionPadding: "64px 32px",
      heroPadding: "96px 32px 80px",
    },
    heroLike: {
      light: {
        titleMaxWidth: "880px",
        subtitleMaxWidth: "600px",
        align: "center",
      },
      dark: {
        titleMaxWidth: "880px",
        subtitleMaxWidth: "600px",
        align: "center",
      },
    },
    borderShadowRhythm: {
      light: {
        sectionDivider: "1px solid rgba(0,0,0,0.1)",
        cardShadow: "var(--shadow-card)",
        cardHoverShadow: "var(--shadow-deep)",
      },
      dark: {
        sectionDivider: "1px solid rgba(255,255,255,0.1)",
        cardShadow: "var(--shadow-card)",
        cardHoverShadow: "var(--shadow-deep)",
      },
    },
  },
  notes: [
    "Inter is used as a legal fallback for the source's modified NotionInter.",
    "The profile emphasizes Notion's warm-neutral document feeling rather than mimicking product-specific illustrations.",
    "Dark mode tokens come from the provided preview-dark.html and intentionally invert the warm neutral system rather than using generic slate colors.",
  ],
});

export default notionProfile;
