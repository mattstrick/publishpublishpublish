import Footer from "../components/Footer";
import TermsOfServiceContent from "../components/TermsOfServiceContent";

export default function TermsOfService() {
  return (
    <div>
      <div className="flex bg-[#A5B8B9] text-[#F9F8F8]">
        {/* https://www.termsfeed.com/live/8d42fb65-daea-4a3f-b9f4-970b3407bef9 */}
        <TermsOfServiceContent />
      </div>
      <Footer />
    </div>
  );
}
