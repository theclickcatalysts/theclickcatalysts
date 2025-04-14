import React from "react";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { encode as base64urlEncode } from "js-base64";

export default function BlogPostCard({
  id,
  title = "Untitled Blog",
  subheading = "",
  content = "",
  published_date,
  thumbnail = "",
}) {
  const contentLimit = 300;

  const formattedDate = published_date
    ? new Date(published_date).toLocaleDateString()
    : "Unknown date";

  const imageUrl = thumbnail
    ? `${import.meta.env.VITE_BASE_URL}/uploads/blogs/${thumbnail}`
    : null;

  const slug = slugify(title, { lower: true, strict: true });
  const encodedId = base64urlEncode(id); // You could use hashids here too
  const blogUrl = `/blog/${slug}-${encodedId}`;

  console.log("📝 Blog ID:", id);
  console.log("🔗 Blog URL:", blogUrl);

  return (
    <div className="overflow-hidden">
      {/* Blog Thumbnail */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-72 object-cover object-center"
        />
      )}

      <div className="px-3 py-1">
        {/* Published Date */}
        <div className="text-gray-500 text-base mt-4 flex items-center">
          <Calendar className="w-3 h-3 mr-1" />
          <span>{formattedDate}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl xl:text-3xl font-primary font-medium text-gray-900 mb-2 leading-snug">
          {title}
        </h3>

        {/* Subheading */}
        {subheading && (
          <h4 className="text-md font-semibold text-gray-800 mb-1">
            {subheading}
          </h4>
        )}

        {/* Content Preview */}
        <p className="text-gray-700 text-lg mb-3">
          {content?.slice(0, contentLimit)}
          {content?.length > contentLimit && "…"}
        </p>

        {/* Read More Button */}
        {content?.length > contentLimit && id && (
          <Link
            to={blogUrl}
            className="text-indigo-600 hover:underline text-sm mb-3 inline-block"
          >
            Read More
          </Link>
        )}
      </div>
    </div>
  );
}
