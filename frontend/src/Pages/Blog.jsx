import React from "react";
import InnerHero from "../Components/Common/InnerHero";
import banner from "../assets/blog/bannerB.png";
import BlogLayout from "../Components/Blog/BlogLayout";

const Blog = () => {
  return (
    <>
      <InnerHero
        heading="Our Blogs"
        description=" It helps businesses, marketers, and entrepreneurs stay ahead in the digital world"
        image={banner}
        reverse={false}
      />
      <section>
        <BlogLayout />
      </section>
    </>
  );
};

export default Blog;
