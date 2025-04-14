import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlog, updateBlog, fetchBlogs } from "../../store/slices/blogSlice.js";
import { toast } from "react-toastify";

// Utility to dynamically load a Google Font
const loadGoogleFont = (fontName) => {
  const formattedName = fontName.replace(/ /g, "+");
  const fontUrl = `https://fonts.googleapis.com/css2?family=${formattedName}&display=swap`;
  if (!document.querySelector(`link[href="${fontUrl}"]`)) {
    const link = document.createElement("link");
    link.href = fontUrl;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }
};

const googleFonts = [
  "Roboto", "Open Sans", "Lato", "Montserrat",
  "Raleway", "Playfair Display", "Poppins", "Merriweather",
];

const BlogForm = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    subheading: "",
    content: "",
    conclusion: "",
    hyperlinks: "",
    font: "Roboto",
    thumbnail: null,
    coverImg: null,
    bodyImg: null,
  });

  const [previews, setPreviews] = useState({
    thumbnail: null,
    coverImg: null,
    bodyImg: null,
  });

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  useEffect(() => {
    if (formData.font) loadGoogleFont(formData.font);
  }, [formData.font]);

  useEffect(() => {
    blogs.forEach((blog) => {
      if (blog.font) loadGoogleFont(blog.font);
    });
  }, [blogs]);

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    setFormData((prev) => ({ ...prev, [name]: file }));
    setPreviews((prev) => ({
      ...prev,
      [name]: URL.createObjectURL(file),
    }));
  };

  const handleEdit = (blog) => {
    setFormData({
      ...blog,
      thumbnail: null,
      coverImg: null,
      bodyImg: null,
    });
    setEditId(blog.blog_id);
    setIsEdit(true);
  };

  const handleCancelEdit = () => {
    setIsEdit(false);
    setEditId(null);
    setFormData({
      title: "",
      subheading: "",
      content: "",
      conclusion: "",
      hyperlinks: "",
      font: "Roboto",
      thumbnail: null,
      coverImg: null,
      bodyImg: null,
    });
    setPreviews({ thumbnail: null, coverImg: null, bodyImg: null });
    toast.info("Edit cancelled");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken");
    if (!token) return toast.error("Unauthorized. Please log in.");

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) form.append(key, value);
    });

    if (isEdit && editId) {
      dispatch(updateBlog({ id: editId, formData: form, token }))
        .unwrap()
        .then(() => {
          toast.success("Blog updated successfully");
          handleCancelEdit();
          dispatch(fetchBlogs());
        })
        .catch(() => toast.error("Update failed"));
    } else {
      dispatch(addBlog({ formData: form, token }))
        .unwrap()
        .then(() => {
          toast.success("Blog added successfully");
          handleCancelEdit();
          dispatch(fetchBlogs());
        })
        .catch(() => toast.error("Add failed"));
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">{isEdit ? "Edit Blog" : "Create Blog"}</h2>

      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        {["title", "subheading", "content", "conclusion", "hyperlinks"].map((field) => (
          <div key={field}>
            <label className="block mb-1 capitalize">{field}</label>
            {(field === "content" || field === "conclusion") ? (
              <textarea
                name={field}
                value={formData[field]}
                onChange={handleTextChange}
                className="w-full border rounded-md p-2"
                rows="4"
              />
            ) : (
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleTextChange}
                className="w-full border rounded-md p-2"
              />
            )}
          </div>
        ))}

        {/* Font Selector */}
        <div>
          <label className="block mb-1">Font</label>
          <select
            name="font"
            value={formData.font}
            onChange={handleTextChange}
            className="w-full border rounded-md p-2"
          >
            {googleFonts.map((font) => (
              <option key={font} value={font}>{font}</option>
            ))}
          </select>
        </div>

        {/* Image Uploads */}
        {["thumbnail", "coverImg", "bodyImg"].map((imgField) => (
          <div key={imgField}>
            <label className="block mb-1 capitalize">{imgField}</label>
            <input
              type="file"
              accept="image/*"
              name={imgField}
              onChange={handleImageChange}
              className="block w-full text-sm border p-2 rounded-md"
            />
            {previews[imgField] && (
              <div className="mt-2">
                <img
                  src={previews[imgField]}
                  alt={`${imgField} preview`}
                  className="w-40 h-28 object-cover border rounded-md"
                />
              </div>
            )}
          </div>
        ))}

        {/* Live Preview */}
        <div className="mt-4 p-4 border rounded-md bg-gray-50" style={{ fontFamily: formData.font }}>
          <h3 className="text-lg font-bold">{formData.title || "Live Preview Title"}</h3>
          <p className="text-sm text-gray-600">{formData.subheading || "Live Preview Subheading"}</p>
          <p className="mt-2">{formData.content || "Live content preview..."}</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2 rounded-md"
          >
            {isEdit ? "Update Blog" : "Add Blog"}
          </button>
          {isEdit && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-6 py-2 rounded-md"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Blog List */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-3">All Blogs</h3>
        {blogs.length === 0 ? (
          <p>No blogs available</p>
        ) : (
          <ul className="space-y-4">
            {blogs.map((blog, index) => (
              <li
                key={blog.blog_id || blog._id || blog.id || index}
                className="border p-4 rounded-md shadow-sm"
                style={{ fontFamily: blog.font || "inherit" }}
              >
                <h4 className="text-lg font-bold">{blog.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{blog.subheading}</p>
                <button
                  onClick={() => handleEdit(blog)}
                  className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold px-4 py-1 rounded"
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BlogForm;




// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addBlog, updateBlog, fetchBlogs } from "../../store/slices/blogSlice.js";
// import { toast } from "react-toastify";

// const loadGoogleFont = (fontName) => {
//   const formattedName = fontName.replace(/ /g, "+");
//   const fontUrl = `https://fonts.googleapis.com/css2?family=${formattedName}&display=swap`;
//   if (!document.querySelector(`link[href="${fontUrl}"]`)) {
//     const link = document.createElement("link");
//     link.href = fontUrl;
//     link.rel = "stylesheet";
//     document.head.appendChild(link);
//   }
// };

// const googleFonts = [
//   "Roboto", "Open Sans", "Lato", "Montserrat",
//   "Raleway", "Playfair Display", "Poppins", "Merriweather",
// ];

// const BlogForm = () => {
//   const dispatch = useDispatch();
//   const blogs = useSelector((state) => state.blog.blogs);
//   const [isEdit, setIsEdit] = useState(false);
//   const [editId, setEditId] = useState(null);

//   const [formData, setFormData] = useState({
//     title: "",
//     subheading: "",
//     content: "",
//     conclusion: "",
//     hyperlinks: "",
//     font: "Roboto",
//     thumbnail: null,
//     coverImg: null,
//     bodyImg: null,
//   });

//   const [previews, setPreviews] = useState({
//     thumbnail: null,
//     coverImg: null,
//     bodyImg: null,
//   });

//   useEffect(() => {
//     dispatch(fetchBlogs());
//   }, [dispatch]);

//   useEffect(() => {
//     if (formData.font) loadGoogleFont(formData.font);
//   }, [formData.font]);

//   useEffect(() => {
//     blogs.forEach((blog) => {
//       if (blog.font) loadGoogleFont(blog.font);
//     });
//   }, [blogs]);

//   const handleTextChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     const { name, files } = e.target;
//     const file = files[0];
//     setFormData((prev) => ({ ...prev, [name]: file }));
//     setPreviews((prev) => ({
//       ...prev,
//       [name]: URL.createObjectURL(file),
//     }));
//   };

//   const handleEdit = (blog) => {
//     setFormData({
//       ...blog,
//       thumbnail: null,
//       coverImg: null,
//       bodyImg: null,
//     });
//     setEditId(blog.blog_id);
//     setIsEdit(true);
//   };

//   const handleCancelEdit = () => {
//     setIsEdit(false);
//     setEditId(null);
//     setFormData({
//       title: "",
//       subheading: "",
//       content: "",
//       conclusion: "",
//       hyperlinks: "",
//       font: "Roboto",
//       thumbnail: null,
//       coverImg: null,
//       bodyImg: null,
//     });
//     setPreviews({ thumbnail: null, coverImg: null, bodyImg: null });
//     toast.info("Edit cancelled");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("authToken");
//     if (!token) return toast.error("Unauthorized. Please log in.");

//     const form = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       if (value) form.append(key, value);
//     });

//     if (isEdit && editId) {
//       dispatch(updateBlog({ id: editId, formData: form, token }))
//         .unwrap()
//         .then(() => {
//           toast.success("Blog updated successfully");
//           handleCancelEdit();
//           dispatch(fetchBlogs());
//         })
//         .catch(() => toast.error("Update failed"));
//     } else {
//       dispatch(addBlog({ formData: form, token }))
//         .unwrap()
//         .then(() => {
//           toast.success("Blog added successfully");
//           handleCancelEdit();
//           dispatch(fetchBlogs());
//         })
//         .catch(() => toast.error("Add failed"));
//     }
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-md">
//       <h2 className="text-2xl font-bold mb-4">{isEdit ? "Edit Blog" : "Create Blog"}</h2>

//       <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
//         {["title", "subheading", "content", "conclusion", "hyperlinks"].map((field) => (
//           <div key={field}>
//             <label className="block mb-1 capitalize font-medium text-gray-700">{field}</label>
//             {(field === "content" || field === "conclusion") ? (
//               <textarea
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleTextChange}
//                 className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                 rows="4"
//                 placeholder={`Enter ${field}...`}
//               />
//             ) : (
//               <input
//                 type="text"
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleTextChange}
//                 className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                 placeholder={`Enter ${field}...`}
//               />
//             )}
//           </div>
//         ))}

//         {/* Font Selector */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Font</label>
//           <select
//             name="font"
//             value={formData.font}
//             onChange={handleTextChange}
//             className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//           >
//             {googleFonts.map((font) => (
//               <option key={font} value={font}>{font}</option>
//             ))}
//           </select>
//         </div>

//         {/* Image Uploads */}
//         {["thumbnail", "coverImg", "bodyImg"].map((imgField) => (
//           <div key={imgField}>
//             <label className="block mb-1 font-medium text-gray-700 capitalize">{imgField}</label>
//             <div className="flex items-center gap-4">
//               <label className="flex flex-col items-center px-4 py-6 bg-white rounded-md border border-gray-300 cursor-pointer hover:bg-gray-50">
//                 <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
//                 </svg>
//                 <span className="mt-2 text-sm text-gray-600">Click to upload</span>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   name={imgField}
//                   onChange={handleImageChange}
//                   className="hidden"
//                 />
//               </label>
//               {previews[imgField] && (
//                 <div className="flex-shrink-0">
//                   <img
//                     src={previews[imgField]}
//                     alt={`${imgField} preview`}
//                     className="w-32 h-24 object-cover border rounded-md"
//                   />
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}

//         {/* Live Preview */}
//         <div className="mt-6">
//           <h3 className="text-lg font-medium text-gray-700 mb-2">Live Preview</h3>
//           <div className="p-4 border border-gray-200 rounded-md bg-gray-50" style={{ fontFamily: formData.font }}>
//             <h3 className="text-xl font-bold text-gray-800">{formData.title || "Live Preview Title"}</h3>
//             <p className="text-sm text-gray-600 mt-1">{formData.subheading || "Live Preview Subheading"}</p>
//             <p className="mt-3 text-gray-700">{formData.content || "Live content preview..."}</p>
//             {formData.conclusion && (
//               <p className="mt-3 font-medium text-gray-800">{formData.conclusion}</p>
//             )}
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-4 pt-4">
//           <button
//             type="submit"
//             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md shadow-sm transition"
//           >
//             {isEdit ? "Update Blog" : "Add Blog"}
//           </button>
//           {isEdit && (
//             <button
//               type="button"
//               onClick={handleCancelEdit}
//               className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-2 rounded-md shadow-sm transition"
//             >
//               Cancel
//             </button>
//           )}
//         </div>
//       </form>

//       {/* Blog List */}
//       <div className="mt-10">
//         <h3 className="text-xl font-semibold text-gray-800 mb-4">All Blogs</h3>
//         {blogs.length === 0 ? (
//           <div className="text-center py-8 bg-gray-50 rounded-md border border-gray-200">
//             <p className="text-gray-500">No blogs available</p>
//           </div>
//         ) : (
//           <ul className="space-y-4">
//             {blogs.map((blog, index) => (
//               <li
//                 key={blog.blog_id || blog._id || blog.id || index}
//                 className="border border-gray-200 p-4 rounded-md shadow-sm bg-white hover:shadow-md transition"
//                 style={{ fontFamily: blog.font || "inherit" }}
//               >
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h4 className="text-lg font-bold text-gray-800">{blog.title}</h4>
//                     <p className="text-sm text-gray-600 mt-1">{blog.subheading}</p>
//                   </div>
//                   <button
//                     onClick={() => handleEdit(blog)}
//                     className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-1 rounded shadow-sm transition"
//                   >
//                     Edit
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BlogForm;