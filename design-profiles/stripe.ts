import { defineProfile } from "./_shared";

export const stripeProfile = defineProfile({
  slug: "stripe",
  displayName: "Stripe",
  sourceDir:
    "/Users/qiang/Desktop/Vibe Project/Shadcn Study/designmd-skill/awesome-design-md-add-issue-template/design-md/stripe",
  fonts: {
    sans: {
      family: "SF Pro Display",
      fallback: "-apple-system, system-ui, sans-serif",
      notes:
        "The source references sohne-var. SF Pro Display and system-ui are the intended legal fallback until Sohne can be licensed.",
    },
    heading: {
      family: "SF Pro Display",
      fallback: "-apple-system, system-ui, sans-serif",
      notes:
        "Stripe's display tone depends on light weight and negative tracking more than on a dramatic contrast face.",
    },
    mono: {
      family: "Source Code Pro",
      fallback: "SFMono-Regular, ui-monospace, Menlo, monospace",
      notes:
        "Source Code Pro is already referenced by the source preview and can be loaded directly.",
    },
    acquisitionNotes: [
      "Treat sohne-var as unavailable by default and use SF Pro Display or system-ui as the fallback.",
      "Load Source Code Pro from Google Fonts for code and tabular technical labels.",
      "Retain Stripe's typographic feel through weight 300 headings, ss01-like spacing, and careful blue-purple color contrast.",
    ],
  },
  tokens: {
    light: {
      colors: {
        background: "#ffffff",
        foreground: "#061b31",
        surface: "#ffffff",
        surfaceAlt: "#f6f9fc",
        surfaceMuted: "#ffd7ef",
        surfaceBrand: "#1c1e54",
        fieldSurface: "#ffffff",
        fieldBorder: "#e5edf5",
        buttonOutlineText: "#533afd",
        buttonOutlineBorder: "#b9b9f9",
        textMuted: "#64748d",
        textSubtle: "#273951",
        primary: "#533afd",
        primaryHover: "#4434d4",
        primaryDeep: "#2e2b8c",
        primarySoft: "#b9b9f9",
        primaryMid: "#665efd",
        primaryContrast: "#ffffff",
        ruby: "#ea2261",
        magenta: "#f96bee",
        success: "#15be53",
        successText: "#108c3d",
        warning: "#9b6829",
        border: "#e5edf5",
        borderStrong: "#d6d9fc",
        borderAccent: "#b9b9f9",
        focus: "#533afd",
      },
      shadows: {
        subtle: "rgba(23,23,23,0.06) 0px 3px 6px 0px",
        ambient: "rgba(23,23,23,0.08) 0px 15px 35px 0px",
        card:
          "rgba(50,50,93,0.25) 0px 30px 45px -30px, rgba(0,0,0,0.1) 0px 18px 36px -18px",
        deep:
          "rgba(3,3,39,0.25) 0px 14px 21px -14px, rgba(0,0,0,0.1) 0px 8px 17px -8px",
      },
      radii: {
        micro: "1px",
        standard: "4px",
        comfortable: "5px",
        relaxed: "6px",
        featured: "8px",
        compound: "0px 0px 6px 6px",
      },
      spacing: {
        base: "8px",
        micro: "4px",
        dense: "6px",
        cardGap: "20px",
        sectionY: "64px",
        heroTop: "96px",
        heroBottom: "80px",
      },
      typography: {
        bodySize: "16px",
        bodyLineHeight: "1.4",
        heroSize: "48px",
        heroLineHeight: "1.15",
        heroTracking: "-0.96px",
        sectionTitleSize: "32px",
        sectionTracking: "-0.64px",
        weightLight: "300",
        weightUi: "400",
      },
    },
    dark: {
      colors: {
        background: "#0e0f2e",
        foreground: "#e8ecf0",
        surface: "rgba(255,255,255,0.03)",
        surfaceAlt: "rgba(255,255,255,0.05)",
        surfaceMuted: "rgba(255,215,239,0.1)",
        surfaceBrand: "#0e0f2e",
        fieldSurface: "rgba(255,255,255,0.05)",
        fieldBorder: "rgba(255,255,255,0.1)",
        buttonOutlineText: "#b9b9f9",
        buttonOutlineBorder: "rgba(185,185,249,0.3)",
        textMuted: "#8a95a8",
        textSubtle: "#a0aec0",
        primary: "#665efd",
        primaryHover: "#7a73ff",
        primaryDeep: "#533afd",
        primarySoft: "rgba(185,185,249,0.3)",
        primaryMid: "#b9b9f9",
        primaryContrast: "#ffffff",
        ruby: "#ea2261",
        magenta: "#f96bee",
        success: "#15be53",
        successText: "#4cdf80",
        warning: "#d4a04a",
        border: "rgba(255,255,255,0.1)",
        borderStrong: "rgba(214,217,252,0.15)",
        borderAccent: "rgba(185,185,249,0.3)",
        focus: "#665efd",
      },
      shadows: {
        subtle: "rgba(0,0,0,0.2) 0px 3px 6px 0px",
        ambient: "rgba(0,0,0,0.3) 0px 15px 35px 0px",
        card:
          "rgba(0,0,0,0.4) 0px 30px 45px -30px, rgba(0,0,0,0.3) 0px 18px 36px -18px",
        deep:
          "rgba(3,3,39,0.5) 0px 14px 21px -14px, rgba(0,0,0,0.3) 0px 8px 17px -8px",
      },
      radii: {
        micro: "1px",
        standard: "4px",
        comfortable: "5px",
        relaxed: "6px",
        featured: "8px",
        compound: "0px 0px 6px 6px",
      },
      spacing: {
        base: "8px",
        micro: "4px",
        dense: "6px",
        cardGap: "20px",
        sectionY: "64px",
        heroTop: "96px",
        heroBottom: "80px",
      },
      typography: {
        bodySize: "16px",
        bodyLineHeight: "1.4",
        heroSize: "48px",
        heroLineHeight: "1.15",
        heroTracking: "-0.96px",
        sectionTitleSize: "32px",
        sectionTracking: "-0.64px",
        weightLight: "300",
        weightUi: "400",
      },
    },
  },
  componentOverrides: {
    button: {
      description:
        "Stripe buttons should feel financially precise: compact, low-radius, and colored by a single high-confidence purple.",
      styles: {
        fontFamily: "var(--font-sans)",
        fontSize: "16px",
        fontWeight: "400",
        borderRadius: "4px",
        transition:
          "background-color 150ms ease, color 150ms ease, box-shadow 180ms ease",
      },
      states: {
        primary: {
          background: "var(--primary)",
          color: "var(--primary-contrast)",
          padding: "10px 20px",
        },
        outline: {
          background: "transparent",
          color: "var(--button-outline-text)",
          padding: "10px 20px",
          border: "1px solid var(--button-outline-border)",
        },
        ghost: {
          background: "transparent",
          color: "var(--primary)",
          padding: "10px 20px",
          border: "1px solid var(--borderAccent)",
        },
        info: {
          background: "transparent",
          color: "#2874ad",
          padding: "8px 16px",
          border: "1px solid rgba(43,145,223,0.2)",
        },
        neutral: {
          background: "transparent",
          color: "var(--textMuted)",
          padding: "8px 16px",
          border: "1px solid var(--border)",
        },
      },
    },
    card: {
      description:
        "Stripe cards stay crisp and lightweight, but their depth should come from blue-tinted shadows instead of generic gray elevation.",
      styles: {
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "6px",
        boxShadow: "var(--shadow-subtle)",
        padding: "24px",
      },
      states: {
        hover: {
          boxShadow: "var(--shadow-card)",
        },
        featured: {
          borderColor: "var(--borderAccent)",
          boxShadow: "var(--shadow-ambient)",
        },
      },
    },
    input: {
      description:
        "Inputs should remain precise and conservative, with 4px radius, subtle borders, and a clear purple focus treatment.",
      styles: {
        background: "var(--field-surface)",
        color: "var(--foreground)",
        border: "1px solid var(--field-border)",
        borderRadius: "4px",
        padding: "10px 12px",
        fontSize: "14px",
        fontWeight: "300",
      },
      states: {
        focus: {
          borderColor: "var(--focus)",
          boxShadow: "0 0 0 1px var(--focus)",
        },
        error: {
          borderColor: "var(--ruby)",
          boxShadow: "0 0 0 1px var(--ruby)",
        },
      },
    },
    dialog: {
      description:
        "Dialogs and floating panels should use Stripe's deeper layered shadow stack, especially on dark brand sections.",
      styles: {
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "6px",
        boxShadow: "var(--shadow-deep)",
      },
    },
    table: {
      description:
        "Tables should feel like financial dashboards: tight, legible, and structured by subtle blue-gray separators.",
      styles: {
        borderColor: "var(--border)",
        headerColor: "var(--textSubtle)",
        rowHoverBackground: "var(--surfaceAlt)",
      },
    },
    badge: {
      description:
        "Badges stay compact and squared-off, with success, neutral, and magenta-tinted variants rather than oversized pills.",
      styles: {
        borderRadius: "4px",
        padding: "1px 6px",
        fontSize: "10px",
        fontWeight: "300",
      },
    },
    chart: {
      description:
        "Chart accents should favor tabular clarity and controlled color: purple for primary data, ruby/magenta for highlights, green for success.",
      styles: {
        axisColor: "var(--textMuted)",
        gridColor: "var(--border)",
        primarySeries: "var(--primary)",
        highlightSeries: "var(--ruby)",
        secondarySeries: "var(--magenta)",
        successSeries: "var(--success)",
      },
    },
    misc: {
      navigation: {
        description:
          "Navigation should feel refined and slightly glassy, with a blurred container and restrained 6px rounding.",
        styles: {
          background: "rgba(255,255,255,0.9)",
          darkBackground: "rgba(14,15,46,0.9)",
          borderBottom: "1px solid var(--border)",
          radius: "0 0 6px 6px",
        },
      },
      typography: {
        description:
          "Stripe's hierarchy is mostly about light weight, slight negative tracking, and geometric calm rather than display theatrics.",
        styles: {
          fontFeatureSettings: "\"ss01\" 1",
          tabularFeature: "\"tnum\" 1",
          heroWeight: "300",
          heroTracking: "-0.96px",
          sectionTracking: "-0.64px",
        },
      },
      decoration: {
        description:
          "Ruby-to-magenta accents and dark indigo sections should provide the premium brand moments around the neutral white canvas.",
        styles: {
          brandSection: "#1c1e54",
          gradientStart: "#ea2261",
          gradientEnd: "#f96bee",
          dashedBorder: "#362baa",
        },
      },
    },
  },
  canvasOverrides: {
    background: {
      light: {
        app: "#ffffff",
        canvas: "#ffffff",
        mutedSection: "#f6f9fc",
        brandSection: "#1c1e54",
      },
      dark: {
        app: "#0e0f2e",
        canvas: "#0e0f2e",
        mutedSection: "rgba(255,255,255,0.03)",
        brandSection: "#0e0f2e",
      },
    },
    density: {
      vibe: "fintech-precise",
      cardGap: "20px",
      sectionPadding: "64px 32px",
      heroPadding: "96px 32px 80px",
    },
    heroLike: {
      light: {
        titleMaxWidth: "720px",
        subtitleMaxWidth: "560px",
        align: "center",
        titleAccent: "#533afd",
      },
      dark: {
        titleMaxWidth: "720px",
        subtitleMaxWidth: "560px",
        align: "center",
        titleAccent: "#665efd",
      },
    },
    borderShadowRhythm: {
      light: {
        hairline: "1px solid #e5edf5",
        ambient: "rgba(23,23,23,0.08) 0px 15px 35px 0px",
        elevated:
          "rgba(50,50,93,0.25) 0px 30px 45px -30px, rgba(0,0,0,0.1) 0px 18px 36px -18px",
      },
      dark: {
        hairline: "1px solid rgba(255,255,255,0.1)",
        ambient: "rgba(0,0,0,0.3) 0px 15px 35px 0px",
        elevated:
          "rgba(0,0,0,0.4) 0px 30px 45px -30px, rgba(0,0,0,0.3) 0px 18px 36px -18px",
      },
    },
  },
  notes: [
    "Sohne is treated as unavailable in v1; SF Pro Display and system-ui preserve the geometric feel while keeping the typography legally shippable.",
    "Source Code Pro is retained for code and technical labels because it is explicitly referenced by the source preview and is straightforward to load.",
    "Stripe's strongest brand signal after typography is its chromatic shadow system, so the profile keeps blue-tinted elevation values explicit instead of collapsing to generic shadows.",
  ],
});

export default stripeProfile;
