// Storybook's Vite builder loads the root vite.config.ts by default. That file wraps its config in
// Astro's getViteConfig() for `vp test`, which adds the `astro:html` plugin. `astro:html` removes
// Vite's `vite:build-html`, so `storybook build` emits no iframe.html and Chromatic rejects the build.
// @storybook-astro/framework merges the Astro config it needs itself, so start from an empty config.
export default {}
