import Footer from "../components/Footer";
import Header from "../components/Header";
import PrivacyPolicyContent from "../components/PrivacyPolicyContent";

export default function PrivacyPolicy() {
  return (
    <div>
      <Header />
      <div className="flex bg-[#A5B8B9] text-[#F9F8F8]">
        {/* https://www.termsfeed.com/live/f40b7b4b-7fb0-438b-b48a-21ddc3b0d240 */}
        <PrivacyPolicyContent />
      </div>
      <Footer />
    </div>
  );
}
