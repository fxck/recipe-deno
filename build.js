import * as esbuild from "https://deno.land/x/esbuild@v0.21.5/mod.js";
import { denoPlugins } from "https://deno.land/x/esbuild_deno_loader@0.9.0/mod.js";

await esbuild.build({
  entryPoints: ["./src/main.ts"],
  bundle: true,
  outfile: "./dist/bundle.js",
  plugins: [...denoPlugins({
    importMapURL: new URL("./import_map.json", import.meta.url)
  })],
  format: "esm",
  platform: "neutral",
});

esbuild.stop();
