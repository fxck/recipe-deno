import * as esbuild from "https://deno.land/x/esbuild@v0.21.5/mod.js";
import { denoPlugin } from "https://deno.land/x/esbuild_deno_loader@0.6.0/mod.ts";

await esbuild.build({
  entryPoints: ["./src/main.ts"],
  bundle: true,
  outfile: "./dist/bundle.js",
  plugins: [denoPlugin({
    importMapURL: new URL("./import_map.json", import.meta.url)
  })],
  format: "esm",
  platform: "neutral",
});

esbuild.stop();
