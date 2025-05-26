import Header7 from "@/components/headers/Header1";

import Footer7 from "@/components/footers/Footer1";
import About from "@/components/innerpages/About";
import Brands from "@/components/common/Brands2";
import About2 from "@/components/innerpages/About2";
import AboutValues from "@/components/innerpages/AboutValues";
import Feedback from "@/components/homes/home-2/Feedback";
import Timeline from "@/components/homes/home-1/Timeline";
import Team from "@/components/homes/home-1/Team";
import Cta from "@/components/innerpages/Cta";
export const metadata = {
  title:
    "About || Sendbix - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Sendbix - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function AboutPage() {
  return (
    <>
      <div className="theme-4">
        <div className="page-wrapper">
          <div className="bp-xs bp-sm bp-md bp-lg dom-ready bp-xxl-max bp-xl uni-body panel uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 dark:text-tertiary-200 overflow-x-hidden disable-cursor">
            <Header7 />
            <div id="wrapper" className="wrap">
              <About />
              <div
                id="clients_brands"
                className="clients-brands section panel overflow-hidden"
              >
                <div className="section-outer panel pb-6 xl:pb-9">
                  <div className="container max-w-xl">
                    <div className="section-inner panel">
                      <div
                        className="block-panel panel"
                        data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
                      >
                        <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
                          <Brands />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <About2 />
              <AboutValues />
              <Feedback />
              <Timeline />
              <Team />
              <Cta />
            </div>
             <Footer7 />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
