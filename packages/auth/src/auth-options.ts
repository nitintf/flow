/* eslint-disable @typescript-eslint/unbound-method */
/* @see https://github.com/nextauthjs/next-auth/pull/8932 */

import Github from "@auth/core/providers/github";
import type { DefaultSession } from "@auth/core/types";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";

import { prisma } from "@flow/db";

export type { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

const nextAuthOptions: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  callbacks: {
    session: async ({ session, user }) => {
      const currentWorkspace = await prisma.workspace.findMany({
        where: {
          creatorId: user.id
        }
      })

      console.log('currentWo :>> ', currentWorkspace);
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      };
    },
  },
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(nextAuthOptions);
