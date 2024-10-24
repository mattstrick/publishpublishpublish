import Footer from "./components/Footer";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";

export default function Home() {
  return (
    <div>
      <div className="flex bg-[#A5B8B9] text-[#F9F8F8]">
        <LeftColumn />
        <RightColumn />
      </div>
      <Footer />
    </div>
  );
}
