import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../store/slices/blogSlice.js";
import BlogPostCard from "./BlogPostCard";
import InnerLoading from "../Common/InnerLoading.jsx";

export default function BlogLayout() {
  const dispatch = useDispatch();
  const { blogs, status, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <div className="bg-gray-100 py-10">
      <div className="w-[100%] mx-auto px-4 md:px-10">
        {/* Status Messages */}
        {status === "loading" && <InnerLoading/>}
        {status === "failed" && <p className="text-red-500">Error: {error}</p>}
        {status === "succeeded" && blogs.length === 0 && <p>No blogs found.</p>}

        {/* Blog Grid */}
        {status === "succeeded" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogPostCard
                key={blog.id || blog.blog_id} // Ensure key is consistent too
                id={blog.id || blog.blog_id} // This is critical if your backend returns blog_id
                title={blog.title}
                subheading={blog.subheading}
                content={blog.content}
                published_date={blog.published_date}
                thumbnail={blog.thumbnail}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
