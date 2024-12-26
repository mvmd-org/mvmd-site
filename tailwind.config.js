module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
    darkMode: ['class', '[data-theme="dark"]'], // Support Docusaurus dark mode
    corePlugins: {
        preflight: false, // Disable Tailwind's reset to avoid conflicts with Docusaurus
    },
};
