import React from "react";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { encode as base64urlEncode } from "js-base64";

export default function BlogCardHome({
  id,
  title = "Untitled Blog",
  published_date,
  thumbnail = "",
}) {

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
        {id && (
        <Link to={blogUrl}>
        {/* Blog Thumbnail */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-56 object-cover object-center"
        />
      )}

      <div className="px-3 py-1">
        {/* Published Date */}
        <div className="text-gray-500 text-base mt-4 flex items-center">
          <Calendar className="w-3 h-3 mr-1" />
          <span>{formattedDate}</span>
        </div>

        {/* Title */}
        <h3 className="text-base md:text-lg font-primary font-medium text-gray-900 mb-2 leading-snug">
          {title}
        </h3>
      </div>
        </Link>
        )}
    </div>
  );
}
