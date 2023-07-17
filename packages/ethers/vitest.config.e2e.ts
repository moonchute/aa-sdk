import { configDefaults, defineProject } from "vitest/config";

export default defineProject({
  test: {
    globals: true,
    setupFiles: ["../../.vitest/setupTests.ts"],
    exclude: [...configDefaults.exclude, "**/__tests__/**/*.test.ts"],
    name: "ethers",
  },
});
