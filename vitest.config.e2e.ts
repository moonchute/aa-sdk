import { configDefaults, defineConfig } from "vitest/dist/config";

export default defineConfig({
  test: {
    singleThread: true,
    globals: true,
    setupFiles: [".vitest/setupTests.ts"],
    exclude: [...configDefaults.exclude, "**/__tests__/**/*.test.ts"],
    name: "aa-sdk-e2e-tests",
  },
});
