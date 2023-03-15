import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    setupFiles: "setupTests.ts",
    environment: "happy-dom",
    coverage: {
      provider: "c8",
      reportsDirectory: "coverage",
    },
  },
});
