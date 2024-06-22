import * as esbuild from "https://deno.land/x/esbuild@v0.21.5/mod.js";
import { denoPlugin } from "https://deno.land/x/esbuild_deno_loader@0.9.0/mod.ts";

await esbuild.build({
  entryPoints: ["./src/main.ts"],
  bundle: true,
  outfile: "./dist/bundle.js",
  plugins: [denoPlugin()],
  format: "esm",
  platform: "neutral",
});

esbuild.stop();
