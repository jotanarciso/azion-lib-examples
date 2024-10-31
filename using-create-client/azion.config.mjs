import { defineConfig } from "azion";

/* @type {import('azion').AzionConfig} */
export default defineConfig({
  build: {
    preset: {
      name: "javascript",
    },
  },
  rules: {
    request: [
      {
        name: "Execute Edge Function",
        match: "^\\/",
        behavior: {
          runFunction: {
            path: ".edge/worker.js",
          },
        },
      },
    ],
  },
});
