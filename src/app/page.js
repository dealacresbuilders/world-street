import AboutWorldStreet from "@/components/AboutWorldStreet";
import BenefitsFlowSection from "@/components/BenefitsFlowSection";
import BenefitsSection from "@/components/BenefitsSection";
import CommercialPropertiesSection from "@/components/CommercialPropertiesSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import FinalConclusionSection from "@/components/FinalConclusionSection";
import HeroSection from "@/components/HeroSection";
import InvestorBenefits from "@/components/InvestorBenefits";
import Navbar from "@/components/Navbar";
import WhyInvestSection from "@/components/WhyInvestSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* <Navbar/> */}
    <HeroSection/>
    <FeaturedProperties/>
    <WhyInvestSection/>
    <CommercialPropertiesSection/>
    <BenefitsSection/>
    {/* <BenefitsFlowSection/> */}
     <InvestorBenefits/>
     {/* <AboutWorldStreet/> */}
     <FinalConclusionSection/>

    </>
  );
}
