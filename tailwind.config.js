/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // 确保使用class策略
  theme: {
    extend: {
      colors: {
        // Morandi Color Palette - 莫兰迪配色方案
        'morandi-cream': '#F5F3F0',        // 温润米白
        'morandi-pearl': '#F0EDE8',        // 珍珠白
        'morandi-sage': '#9CAF88',         // 鼠尾草绿
        'morandi-dusty-blue': '#8FA5B8',   // 雾霾蓝
        'morandi-lavender': '#B8A5C7',     // 薰衣草紫
        'morandi-mauve': '#C7A5B8',        // 淡紫红
        'morandi-slate': '#7A8B8B',        // 石板灰
        'morandi-mist': '#A8B5B2',         // 薄雾灰
        'morandi-charcoal': '#4A4A4A',     // 炭灰色
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(156, 175, 136, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(156, 175, 136, 0.8)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};