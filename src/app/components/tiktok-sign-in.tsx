
import { signIn } from "@/auth"
 
export default function TikTokSignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("tiktok")
      }}
    >
      <button type="submit">Signin</button>
    </form>
  )
} 