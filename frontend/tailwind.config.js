import { fontFamily } from "tailwindcss/defaultTheme";

const myCustomTheme = {
  name: "my-custom-theme",
  properties: {
    // =~= Theme Properties =~=
    "--theme-font-family-base": "system-ui",
    "--theme-font-family-heading": "system-ui",
    "--theme-font-color-base": "0 0 0",
    "--theme-font-color-dark": "255 255 255",
    "--theme-rounded-base": "9999px",
    "--theme-rounded-container": "8px",
    "--theme-border-base": "1px",
    // =~= Theme On-X Colors =~=
    "--on-primary": "0 0 0",
    "--on-secondary": "0 0 0",
    "--on-tertiary": "0 0 0",
    "--on-success": "0 0 0",
    "--on-warning": "0 0 0",
    "--on-error": "255 255 255",
    "--on-surface": "0 0 0",
    // =~= Theme Colors  =~=
    // primary | #e3c21e
    "--color-primary-50": "251 246 221", // #fbf6dd
    "--color-primary-100": "249 243 210", // #f9f3d2
    "--color-primary-200": "248 240 199", // #f8f0c7
    "--color-primary-300": "244 231 165", // #f4e7a5
    "--color-primary-400": "235 212 98", // #ebd462
    "--color-primary-500": "227 194 30", // #e3c21e
    "--color-primary-600": "204 175 27", // #ccaf1b
    "--color-primary-700": "170 146 23", // #aa9217
    "--color-primary-800": "136 116 18", // #887412
    "--color-primary-900": "111 95 15", // #6f5f0f
    // secondary | #2dbe36
    "--color-secondary-50": "224 245 225", // #e0f5e1
    "--color-secondary-100": "213 242 215", // #d5f2d7
    "--color-secondary-200": "203 239 205", // #cbefcd
    "--color-secondary-300": "171 229 175", // #abe5af
    "--color-secondary-400": "108 210 114", // #6cd272
    "--color-secondary-500": "45 190 54", // #2dbe36
    "--color-secondary-600": "41 171 49", // #29ab31
    "--color-secondary-700": "34 143 41", // #228f29
    "--color-secondary-800": "27 114 32", // #1b7220
    "--color-secondary-900": "22 93 26", // #165d1a
    // tertiary | #0EA5E9
    "--color-tertiary-50": "219 242 252", // #dbf2fc
    "--color-tertiary-100": "207 237 251", // #cfedfb
    "--color-tertiary-200": "195 233 250", // #c3e9fa
    "--color-tertiary-300": "159 219 246", // #9fdbf6
    "--color-tertiary-400": "86 192 240", // #56c0f0
    "--color-tertiary-500": "14 165 233", // #0EA5E9
    "--color-tertiary-600": "13 149 210", // #0d95d2
    "--color-tertiary-700": "11 124 175", // #0b7caf
    "--color-tertiary-800": "8 99 140", // #08638c
    "--color-tertiary-900": "7 81 114", // #075172
    // success | #84cc16
    "--color-success-50": "237 247 220", // #edf7dc
    "--color-success-100": "230 245 208", // #e6f5d0
    "--color-success-200": "224 242 197", // #e0f2c5
    "--color-success-300": "206 235 162", // #ceeba2
    "--color-success-400": "169 219 92", // #a9db5c
    "--color-success-500": "132 204 22", // #84cc16
    "--color-success-600": "119 184 20", // #77b814
    "--color-success-700": "99 153 17", // #639911
    "--color-success-800": "79 122 13", // #4f7a0d
    "--color-success-900": "65 100 11", // #41640b
    // warning | #EAB308
    "--color-warning-50": "252 244 218", // #fcf4da
    "--color-warning-100": "251 240 206", // #fbf0ce
    "--color-warning-200": "250 236 193", // #faecc1
    "--color-warning-300": "247 225 156", // #f7e19c
    "--color-warning-400": "240 202 82", // #f0ca52
    "--color-warning-500": "234 179 8", // #EAB308
    "--color-warning-600": "211 161 7", // #d3a107
    "--color-warning-700": "176 134 6", // #b08606
    "--color-warning-800": "140 107 5", // #8c6b05
    "--color-warning-900": "115 88 4", // #735804
    // error | #D41976
    "--color-error-50": "249 221 234", // #f9ddea
    "--color-error-100": "246 209 228", // #f6d1e4
    "--color-error-200": "244 198 221", // #f4c6dd
    "--color-error-300": "238 163 200", // #eea3c8
    "--color-error-400": "225 94 159", // #e15e9f
    "--color-error-500": "212 25 118", // #D41976
    "--color-error-600": "191 23 106", // #bf176a
    "--color-error-700": "159 19 89", // #9f1359
    "--color-error-800": "127 15 71", // #7f0f47
    "--color-error-900": "104 12 58", // #680c3a
    // surface | #e6e7eb
    "--color-surface-50": "251 251 252", // #fbfbfc
    "--color-surface-100": "250 250 251", // #fafafb
    "--color-surface-200": "249 249 250", // #f9f9fa
    "--color-surface-300": "245 245 247", // #f5f5f7
    "--color-surface-400": "238 238 241", // #eeeef1
    "--color-surface-500": "230 231 235", // #e6e7eb
    "--color-surface-600": "207 208 212", // #cfd0d4
    "--color-surface-700": "173 173 176", // #adadb0
    "--color-surface-800": "138 139 141", // #8a8b8d
    "--color-surface-900": "113 113 115", // #717173
  },
};

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    // 2. Append the path for the Skeleton NPM package and files:
    require("path").join(
      require.resolve("@skeletonlabs/skeleton"),
      "../**/*.{html,js,svelte,ts}"
    ),
  ],
  safelist: ["dark"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [...fontFamily.sans],
      },
    },
  },
  plugins: [
    ...require("@skeletonlabs/skeleton/tailwind/skeleton.cjs")({
      themes: {
        custom: [myCustomTheme],
      },
    }),
  ],
};

export default config;
