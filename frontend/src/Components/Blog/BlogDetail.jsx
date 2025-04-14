import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlogById } from "../../store/slices/blogSlice.js";
import { decode as base64urlDecode } from "js-base64";
import InnerLoading from "../Common/InnerLoading.jsx";

const BlogDetail = () => {
  const { slugWithId } = useParams();
  const dispatch = useDispatch();

  // Extract and decode blog_id from slugWithId
  const encodedId = slugWithId?.split("-").pop();
  let blog_id = null;

  try {
    blog_id = base64urlDecode(encodedId);
  } catch (error) {
    console.error("Failed to decode blog ID:", error);
  }

  const { singleBlog, status, error } = useSelector((state) => state.blog);

  useEffect(() => {
    if (blog_id) {
      dispatch(getBlogById(blog_id));
    }
  }, [blog_id, dispatch]);

  if (status === "loading") {
    return (
      <InnerLoading/>
    );
  }

  if (status === "failed") {
    return <div className="p-10 text-center text-red-500">Error: {error}</div>;
  }

  if (!singleBlog) {
    return (
      <div className="p-10 text-center text-gray-500">No blog found.</div>
    );
  }

  const { title, subheading, content, published_date, thumbnail } = singleBlog;

  const formattedDate = published_date
    ? new Date(published_date).toLocaleDateString()
    : "Unknown date";

  const imageUrl = thumbnail
    ? `${import.meta.env.VITE_BASE_URL}/uploads/blogs/${thumbnail}`
    : null;

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">{title}</h1>

      {subheading && (
        <h2 className="text-xl font-semibold mb-2 text-gray-700">
          {subheading}
        </h2>
      )}

      <p className="text-sm text-gray-500 mb-6">{formattedDate}</p>

      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-96 object-cover object-center mb-6 rounded-lg shadow"
        />
      )}

      <div className="prose prose-lg max-w-none text-gray-800 whitespace-pre-line">
        {content || "No content available."}
      </div>
    </div>
  );
};

export default BlogDetail;
