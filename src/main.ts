import { Application, Router } from "./deps.ts";

const router = new Router();
router.get("/", (context) => {
  context.response.body = "Hello, World!";
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

const port = parseInt(Deno.env.get("PORT") || "8000");
console.log(`HTTP webserver running. Access it at: http://localhost:${port}/`);
await app.listen({ port });
