/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'nord-0': '#2E3440',
        'nord-1': '#3B4252',
        'nord-2': '#434C5E',
        'nord-3': '#4C566A',
        'nord-4': '#D8DEE9',
        'nord-5': '#E5E9F0',
        'nord-6': '#ECEFF4',
        'nord-7': '#8FBCBB',
        'nord-8': '#88C0D0',
        'nord-9': '#81A1C1',
        'nord-10': '#5E81AC',
        'nord-11': '#BF616A',
        'nord-12': '#D08770',
        'nord-13': '#EBCB8B',
        'nord-14': '#A3BE8C',
        'nord-15': '#B48EAD',
      },
      fontFamily: {
        'fira-code': ['"Fira Code"', 'monospace'],
      },
      typography: (theme) => ({
        invert: {
          css: {
            '--tw-prose-body': theme('colors.nord-4'),
            '--tw-prose-headings': theme('colors.nord-6'),
            '--tw-prose-lead': theme('colors.nord-4'),
            '--tw-prose-links': theme('colors.nord-8'),
            '--tw-prose-bold': theme('colors.nord-6'),
            '--tw-prose-counters': theme('colors.nord-4'),
            '--tw-prose-bullets': theme('colors.nord-4'),
            '--tw-prose-hr': theme('colors.nord-3'),
            '--tw-prose-quotes': theme('colors.nord-4'),
            '--tw-prose-quote-borders': theme('colors.nord-3'),
            '--tw-prose-captions': theme('colors.nord-4'),
            '--tw-prose-code': theme('colors.nord-8'),
            '--tw-prose-pre-code': theme('colors.nord-4'),
            '--tw-prose-pre-bg': theme('colors.nord-1'),
            '--tw-prose-th-borders': theme('colors.nord-3'),
            '--tw-prose-td-borders': theme('colors.nord-3'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};