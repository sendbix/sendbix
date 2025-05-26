import RtlConverter from "@/components/common/RtlConverter";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Blogs from "@/components/homes/home-4/Blogs";
import Brands from "@/components/homes/home-4/Brands";
import Cta from "@/components/homes/home-4/Cta";
import Cta2 from "@/components/homes/home-4/Cta2";
import Facts from "@/components/homes/home-4/Facts";
import Faq from "@/components/homes/home-4/Faq";
import Features from "@/components/homes/home-4/Features";
import Hero from "@/components/homes/home-4/Hero";
import Pricing from "@/components/homes/home-4/Pricing";
import Team from "@/components/homes/home-4/Team";
import Testimonials from "@/components/homes/home-4/Testimonials";
import React from "react";
export const metadata = {
  title:
    "Rtl Home Page || Sendbix - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Sendbix - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function HomePageRtl() {
  return (
    <>
      <RtlConverter />
      <div dir="rtl">
        <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl">
          <Header1 />
          <div id="wrapper" className="wrap">
            <Hero />
            <Brands />
            <Facts />
            <Features />
            <Cta />
            <Pricing />
            <Testimonials />
            <Faq />
            <Team />
            <Blogs />
            <Cta2 />
          </div>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
