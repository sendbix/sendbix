import Header1 from "@/components/headers/Header1";

import Footer1 from "@/components/footers/Footer1";
import Breadcumb from "@/components/shop/Breadcumb";
import Cart2 from "@/components/shop/Cart2";
export const metadata = {
  title:
    "Shop Cart 2 || Sendbix - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Sendbix - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function ShopCartPage2() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header1 />
        <div id="wrapper" className="wrap">
          <Breadcumb />
          <Cart2 />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
