
import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("tiktok")
      }}
    >
      <button type="submit">Signin with TikTok</button>
    </form>
  )
} 