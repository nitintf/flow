import type { Config } from "tailwindcss";

import uiConfig from "@flow/ui/tailwind.config";

export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/components/**/*.{ts,tsx}",
  ],
  presets: [uiConfig],
  theme: {
    extend: {
      fontSize: {
        h1: "var(--font-h1)",
        h2: "var(--font-h2)",
        h3: "var(--font-h3)",
        h4: "var(--font-h4)",
        h5: "var(--font-h5)",
        h6: "var(--font-h6)",
        body: "var(--font-body)",
        link: "var(--font-link)",
        mini: "var(--font-mini)",
        h2Display: "var(--font-h2-display)",
      },
      spacing: {
        xxl: "var(--spacing-xxl)",
        xl: "var(--spacing-xl)",
        l: "var(--spacing-l)",
        m: "var(--spacing-m)",
        s: "var(--spacing-s)",
        xs: "var(--spacing-xs)",
        xxs: "var(--spacing-xxs)",
      },
    },
  },
} satisfies Config;
