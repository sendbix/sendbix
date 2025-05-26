import Footer7 from "@/components/footers/Footer1";
import Header7 from "@/components/headers/Header1";
import Topbar from "@/components/headers/Topbar";

import Faqs from "@/components/homes/home-7/Faqs";

import Testimonials from "@/components/homes/home-7/Testimonials";
import Pricing2 from "@/components/innerpages/Pricing2";
import PricingCompare from "@/components/innerpages/PricingCompare";
import React from "react";
export const metadata = {
  title:
    "Pricing 02 || Sendbix - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Sendbix - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function page() {
  return (
    <>
      <div className="theme-4 ">
        <div className="bp-xs page-wrapper bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden disable-cursor">
          <Topbar />
          <Header7 />
          <div id="wrapper" className="wrap">
            <Pricing2 />
            <PricingCompare />
            <Testimonials />
            <Faqs ctaParentClass="section-outer panel pb-4 lg:pb-6 xl:pb-10" />
          </div>
          <Footer7 />
        </div>
      </div>
    </>
  );
}
