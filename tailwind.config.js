/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // 'src/pages/**/*.{js,ts,jsx,tsx}',
    // 'src/components/**/*.{js,ts,jsx,tsx}',
    'src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-nested-groups')
  ]
};
