import Header7 from "@/components/headers/Header1";

import Footer7 from "@/components/footers/Footer1";
import Newsletter from "@/components/blog/Newsletter";
import Blogs1 from "@/components/blog/Blogs1";
export const metadata = {
  title:
    "Blog 1 || Sendbix - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Sendbix - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function BlogPage1() {
  return (
    <>
      <div className="theme-4">
        <div className="page-wrapper">
          <div className="bp-xs bp-sm bp-md bp-lg dom-ready bp-xxl-max bp-xl uni-body panel uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 dark:text-tertiary-200 overflow-x-hidden disable-cursor">
            <Header7 />
            <div id="wrapper" className="wrap">
              <Blogs1 />
              <Newsletter />
            </div>
            <Footer7 />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
