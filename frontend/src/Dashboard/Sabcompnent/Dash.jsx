// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchBlogs, deleteBlog } from "../../store/slices/blogSlice";
// import { toast } from "react-toastify";

// const Dash = () => {
//   const dispatch = useDispatch();
//   const blogs = useSelector((state) => state.blog.blogs);

//   useEffect(() => {
//     dispatch(fetchBlogs());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     const token = localStorage.getItem("authToken");

//     if (!token) {
//       toast.error("Unauthorized. Please log in.");
//       return;
//     }

//     dispatch(deleteBlog({ id, token }))
//       .unwrap()
//       .then(() => {
//         toast.success("Blog deleted successfully");
//         dispatch(fetchBlogs());
//       })
//       .catch(() => toast.error("Failed to delete blog"));
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">All Blog Posts</h1>
//       {blogs.length === 0 ? (
//         <p>No blogs found.</p>
//       ) : (
//         <div className="space-y-6">
//           {blogs.map((blog) => (
//             <div key={blog.blog_id} className="border p-4 rounded-md shadow-sm bg-white">
//               <h2 className="text-xl font-semibold">{blog.title}</h2>
//               <h3 className="text-md font-medium text-gray-600">{blog.subheading}</h3>
//               <p className="mt-2"><strong>Content:</strong> {blog.content}</p>
//               <p className="mt-2"><strong>Conclusion:</strong> {blog.conclusion}</p>
//               <p className="mt-2 text-blue-600 break-words"><strong>Hyperlinks:</strong> {blog.hyperlinks}</p>

//               <button
//                 onClick={() => handleDelete(blog.blog_id)}
//                 className="mt-4 bg-red-600 hover:bg-red-500 text-white font-semibold px-4 py-2 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dash;






import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs, deleteBlog } from "../../store/slices/blogSlice";
import { toast } from "react-toastify";

const Dash = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const handleDelete = (id) => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      toast.error("Unauthorized. Please log in.");
      return;
    }

    dispatch(deleteBlog({ id, token }))
      .unwrap()
      .then(() => {
        toast.success("Blog deleted successfully");
        dispatch(fetchBlogs());
      })
      .catch(() => toast.error("Failed to delete blog"));
  };

  const baseURL = "http://localhost:8001/uploads/blogs";

  const renderImage = (label, fileName) =>
    fileName ? (
      <div className="mb-3">
        <p className="text-sm font-semibold mb-1">{label}:</p>
        <img
          src={`${baseURL}/${fileName}`}
          alt={label}
          className="w-full h-40 object-cover content-center rounded-lg border"
        />
      </div>
    ) : null;

  return (
    <div className="w-full p-6">
      <h1 className="text-3xl font-bold mb-6">All Blog Posts</h1>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <div className="">
          {blogs.map((blog) => (
            <div
              key={blog.blog_id}
              className="border rounded-lg bg-white overflow-hidden flex flex-col mb-6"
              style={{ fontFamily: blog.font || "inherit" }}
            >
              {/* Images */}
              <div className="p-4 bg-gray-50 border-b flex flex-wrap gap-10 items-center">
                {renderImage("Thumbnail", blog.thumbnail)}
                {renderImage("Cover Image", blog.coverImg)}
                {renderImage("Body Image", blog.bodyImg)}
              </div>

              {/* Blog Content */}
              <div className="p-4 flex-grow flex flex-col">
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <h3 className="text-md font-medium text-gray-600">{blog.subheading}</h3>
                <p className="mt-2 text-sm"><strong>Content:</strong> {blog.content}</p>
                <p className="mt-2 text-sm"><strong>Conclusion:</strong> {blog.conclusion}</p>
                {blog.hyperlinks && (
                  <p className="mt-2 text-blue-600 break-words text-sm">
                    <strong>Hyperlinks:</strong> {blog.hyperlinks}
                  </p>
                )}

                <button
                  onClick={() => handleDelete(blog.blog_id)}
                  className="mt-4 bg-red-600 hover:bg-red-500 text-white font-semibold px-4 py-2 rounded self-start"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dash;
