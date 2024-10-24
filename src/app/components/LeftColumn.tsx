import GoogleSignIn from "./google-sign-in";
import TikTokSignIn from "./tiktok-sign-in";
import { auth } from "@/auth";

export default async function LeftColumn() {
    const session = await auth()
console.log('HIIIIII', session);
    return (
      <div className="p-8 bg-[#8D8E94]">
          <h1 className="text-3xl font-bold">Platforms</h1>
          <div className="flex">🚧 TikTok -{" "}<TikTokSignIn /></div>
          <div className="flex">Google -{" "}<GoogleSignIn /></div>

      </div>
    );
  }
  