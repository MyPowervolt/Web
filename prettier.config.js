/** @type {import('prettier').Config} */
const config = {
  singleQuote: false,
  semi: true,
  tabWidth: 2,
  useTabs: false,
  trailingComma: "all",
  printWidth: 100,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  endOfLine: "lf",

  // Sort Tailwind classes automatically
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.ts",
};

export default config;
