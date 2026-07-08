import { defineBuildConfig } from "unbuild"

export default defineBuildConfig({
  entries: [
    "src/index.ts",
    "src/index-rsc.ts",
    "src/server.ts",
    { input: "src/index-no-context.ts", name: "no-context" },
  ],
  declaration: "node16",
  rollup: {
    output: {
      banner: (chunk: any) => {
        if (chunk.name === "index") {
          return `'use client';`
        }
      },
    },
    esbuild: {
      jsx: "automatic",
    },
  },
})
