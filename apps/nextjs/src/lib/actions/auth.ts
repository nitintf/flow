"use server";

import { signIn } from "@flow/auth";

export const signInUser = async () => {
  try {
    await signIn("github", { redirectTo: "/dashboard" });
  } catch (error) {
    console.error(">> Sign in error : ", error);
  }
};
