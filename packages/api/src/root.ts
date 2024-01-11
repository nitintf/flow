import { authRouter } from "./router/auth";
import { workspacesRouter } from "./router/workspaces";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  workspace: workspacesRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
