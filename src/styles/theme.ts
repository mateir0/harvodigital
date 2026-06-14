/* ---------------------------------------------------------
   HARVO DIGITAL — Design System Tokens
   ---------------------------------------------------------
   These tokens define the visual language of the project.
   They are NOT applied yet — this file serves as the 
   single source of truth for when the design phase begins.
   --------------------------------------------------------- */

export const theme = {
  /* ---- Colors ---- */
  colors: {
    // Primary palette
    primary: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1", // Main brand accent
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
      950: "#1e1b4b",
    },
    // Neutral / surface palette
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
      950: "#0a0a0a",
    },
    // Semantic colors
    success: "#22c55e",
    warning: "#f59e0b",
    error: "#ef4444",
    info: "#3b82f6",
  },

  /* ---- Typography ---- */
  typography: {
    fontFamily: {
      sans: "var(--font-inter), system-ui, -apple-system, sans-serif",
      mono: "var(--font-jetbrains-mono), ui-monospace, monospace",
    },
    fontSize: {
      xs: "0.75rem",     // 12px
      sm: "0.875rem",    // 14px
      base: "1rem",      // 16px
      lg: "1.125rem",    // 18px
      xl: "1.25rem",     // 20px
      "2xl": "1.5rem",   // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem",  // 36px
      "5xl": "3rem",     // 48px
      "6xl": "3.75rem",  // 60px
      "7xl": "4.5rem",   // 72px
      "8xl": "6rem",     // 96px
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.1,
      snug: 1.25,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
  },

  /* ---- Spacing ---- */
  spacing: {
    section: {
      sm: "3rem",    // 48px
      md: "5rem",    // 80px
      lg: "7.5rem",  // 120px
      xl: "10rem",   // 160px
    },
    container: {
      sm: "40rem",   // 640px
      md: "48rem",   // 768px
      lg: "64rem",   // 1024px
      xl: "80rem",   // 1280px
      "2xl": "96rem", // 1536px
    },
  },

  /* ---- Borders & Radius ---- */
  borderRadius: {
    none: "0",
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.5rem",
    full: "9999px",
  },

  /* ---- Shadows ---- */
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    glow: "0 0 20px rgb(99 102 241 / 0.3)",
  },

  /* ---- Transitions ---- */
  transitions: {
    duration: {
      fast: "150ms",
      normal: "300ms",
      slow: "500ms",
      slower: "700ms",
    },
    easing: {
      default: "cubic-bezier(0.4, 0, 0.2, 1)",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    },
  },

  /* ---- Breakpoints (reference only — Tailwind handles this) ---- */
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  /* ---- Z-Index scale ---- */
  zIndex: {
    behind: -1,
    base: 0,
    dropdown: 10,
    sticky: 20,
    header: 30,
    overlay: 40,
    modal: 50,
    toast: 60,
  },
} as const;

export type Theme = typeof theme;
