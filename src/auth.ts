import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import TikTok from "next-auth/providers/tiktok";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [TikTok, Google],
});
