import Header1 from "@/components/headers/Header1";

import Footer1 from "@/components/footers/Footer1";
import Breadcumb from "@/components/shop/Breadcumb";
import Order from "@/components/shop/Order";
export const metadata = {
  title:
    "Shop Order || Sendbix - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Sendbix - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function ShopOrder() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header1 />
        <div id="wrapper" className="wrap">
          <Breadcumb />
          <Order />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
