import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'farm-green': '#55883d',
        'avocado-green': '#a5ce39',
        'nile-blue': '#020617',
        'brand-white': '#ffffff',
        // Brand color variations
        'farm': {
          50: '#f4f7f1',
          100: '#e6ede0',
          200: '#cfdcc3',
          300: '#adc49a',
          400: '#85a56b',
          500: '#55883d',
          600: '#4a7635',
          700: '#3d5f2c',
          800: '#334d26',
          900: '#2c4122',
        },
        'avocado': {
          50: '#f7faf0',
          100: '#ecf4dc',
          200: '#daeabe',
          300: '#c2db96',
          400: '#a5ce39',
          500: '#94b82f',
          600: '#7a9625',
          700: '#5f7320',
          800: '#4f5d1e',
          900: '#434f1d',
        },
        'nile': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#020617',
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['dark', 'night', 'forest'],
  },
};

export default config;