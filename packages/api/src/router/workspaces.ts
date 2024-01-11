import { createTRPCRouter, protectedProcedure } from "../trpc";

export const workspacesRouter = createTRPCRouter({
  getWorkspaces: protectedProcedure.query(async ({ ctx }) => {
    const { user: { id } } = ctx.session
    
    const workspaces = await ctx.prisma.workspace.findMany({
      where: {
        creatorId: id
      }
    });

    return workspaces;
  }),
});
