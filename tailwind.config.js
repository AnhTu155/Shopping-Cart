/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Đảm bảo Tailwind kiểm tra tất cả các file .ts và .tsx
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
