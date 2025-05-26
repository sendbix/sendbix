import Header1 from "@/components/headers/Header1";

import Footer1 from "@/components/footers/Footer1";
import Newsletter from "@/components/blog/Newsletter";
import BreadCumb from "@/components/blog/BreadCumb";
import Blogs4 from "@/components/blog/Blogs4";
export const metadata = {
  title:
    "Blog Author || Sendbix - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Sendbix - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default async function BlogAuthorPage(props) {
  const params = await props.params;
  const author = params.author.split("%20").join(" ");
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header1 />
        <div id="wrapper" className="wrap">
          <BreadCumb category={author} />
          <Blogs4 author={author} />
          <Newsletter />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
