import Header1 from "@/components/headers/Header1";

import Footer1 from "@/components/footers/Footer1";
import Breadcumb from "@/components/shop/Breadcumb";
import Shop4 from "@/components/shop/Shop4";
export const metadata = {
  title:
    "Shop 3 || Sendbix - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Sendbix - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function ShopPage3() {
  return (
    <>
      <div
        className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready"
        style={{ overflowX: "clip" }}
      >
        <Header1 />
        <div id="wrapper" className="wrap">
          <Breadcumb pageName="shop sidebar" />
          <Shop4 />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
