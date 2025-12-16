import type { Config } from 'tailwindcss';

export default {
  theme: {
    extend: {
      colors: {
        mint: {
          DEFAULT: 'rgb(var(--c-mint) / <alpha-value>)',
          300: 'rgb(var(--c-mint-300) / <alpha-value>)',
        },
        sea: {
          DEFAULT: 'rgb(var(--c-sea) / <alpha-value>)',
          300: 'rgb(var(--c-sea-300) / <alpha-value>)',
        },
        orange: {
          DEFAULT: 'rgb(var(--c-orange) / <alpha-value>)',
          300: 'rgb(var(--c-orange-300) / <alpha-value>)',
          200: 'rgb(var(--c-orange-200) / <alpha-value>)',
        },

        slate: {
          900: 'rgb(var(--c-slate-900) / <alpha-value>)',
          700: 'rgb(var(--c-slate-700) / <alpha-value>)',
          500: 'rgb(var(--c-slate-500) / <alpha-value>)',
          200: 'rgb(var(--c-slate-200) / <alpha-value>)',
        },

        white: 'rgb(var(--c-white) / <alpha-value>)',
      },

      borderRadius: {
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },

      boxShadow: {
        soft: 'var(--shadow-soft)',
      },

      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
} satisfies Config;
