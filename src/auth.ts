import NextAuth from "next-auth"
import TikTok from "next-auth/providers/tiktok"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [TikTok],
})