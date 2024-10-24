import TikTokSignIn from "./tiktok-sign-in";

export default function LeftColumn() {
    return (
      <div className="p-8 bg-[#8D8E94]">
          <h1 className="text-3xl font-bold">Platforms</h1>
          <div className="flex">TikTok -{" "}<TikTokSignIn /></div>
      </div>
    );
  }
  