export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        premium: '0 45px 120px rgba(99, 102, 241, 0.18)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top left, rgba(139,92,246,0.2), transparent 22%), radial-gradient(circle at 20% 90%, rgba(59,130,246,0.14), transparent 18%)',
      },
      colors: {
        surface: 'rgba(255,255,255,0.08)',
        'primary': '#6366f1',
        'secondary': '#8b5cf6',
        'accent': '#ec4899',
        'dark-bg': '#0f0f23',
        'card-bg': '#1a1a2e',
        'text-primary': '#ffffff',
        'text-secondary': '#cbd5e1',
      },
    },
  },
  plugins: [],
};
