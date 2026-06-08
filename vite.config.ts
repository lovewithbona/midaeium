import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const env = (globalThis as unknown as { process?: { env?: Record<string, string | undefined> } }).process?.env ?? {};
const repositoryName = env.GITHUB_REPOSITORY?.split("/")[1];
const basePath = env.VITE_BASE_PATH ?? (repositoryName ? `/${repositoryName}/` : "/");

export default defineConfig({
  base: basePath,
  plugins: [react()],
});
