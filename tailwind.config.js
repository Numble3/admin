module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        header: 'var(--layout-header)',
        nav: 'var(--layout-nav)',
      },
    },
  },
  plugins: [],
};
