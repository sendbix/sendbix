import Header7 from "@/components/headers/Header7";

import Footer7 from "@/components/footers/Footer7";
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
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header7 />
        <div id="wrapper" className="wrap">
          <Blogs1 />
          <Newsletter />
        </div>
        <Footer7 />
      </div>
    </>
  );
}
