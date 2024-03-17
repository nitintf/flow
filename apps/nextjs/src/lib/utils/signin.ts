"use server";

import { signIn } from "@flow/auth";

export async function singInUser() {
  await signIn("github");
}
