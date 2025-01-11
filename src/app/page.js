import HeroSection from "@/components/home/hero-section";
import WhyTrustZanaSection from "@/components/home/why-trust-zana-section";
import ServiceCategory from "@/components/home/service-category";
import FaqsSection from "@/components/home/faqs-section";
import ReportIssueSection from "@/components/home/report-issue";
import Footer from "@/components/home/footer-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyTrustZanaSection />
      <ServiceCategory />
      <FaqsSection/>
      <ReportIssueSection/>
      <Footer/>
    </div>
  );
}
