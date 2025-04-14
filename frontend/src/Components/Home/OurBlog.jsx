// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchBlogs } from "../../store/slices/blogSlice.js";
// import InnerLoading from "../Common/InnerLoading";
// import BlogCardHome from "./BlogCardHome.jsx";


// const BlogSection = () => {
//   const dispatch = useDispatch();
//   const { blogs, status } = useSelector((state) => state.blog);

//   useEffect(() => {
//     dispatch(fetchBlogs());
//   }, [dispatch]);

//   return (
//     <div className="bg-white py-16 px-6">
//       <h2 className="flex justify-center gap-2 text-4xl xl:text-5xl font-headingFont font-bold pb-16 lg:pb-24">
//         <span className="text-black">Our </span>
//         <span className="text-primary">Blog</span>
//       </h2>
//         <div className="w-[100%] mx-auto px-4 md:px-10">
//         {/* Status Messages */}
//         {status === "loading" && <p>Loading...</p>}
//         {status === "failed" && <p className="text-red-500">Error: {error}</p>}
//         {status === "succeeded" && blogs.length === 0 && <p>No blogs found.</p>}

//         {/* Blog Grid */}
//         {status === "succeeded" && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {blogs.map((blog) => (
//               <BlogCardHome
//                 key={blog.id || blog.blog_id} // Ensure key is consistent too
//                 id={blog.id || blog.blog_id} // This is critical if your backend returns blog_id
//                 title={blog.title}
//                 published_date={blog.published_date}
//                 thumbnail={blog.thumbnail}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BlogSection;



import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../store/slices/blogSlice.js";
import BlogCardHome from "./BlogCardHome.jsx";

// Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BlogSection = () => {
  const dispatch = useDispatch();
  const { blogs, status } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <div className="bg-white py-16 px-6">
      <h2 className="flex justify-center gap-2 text-4xl xl:text-5xl font-headingFont font-bold pb-16 lg:pb-24">
        <span className="text-black">Our </span>
        <span className="text-primary">Blog</span>
      </h2>

      <div className="w-full lg:w-[90%] 2xl:w-[85%] mx-auto px-2">
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p className="text-red-500">Error loading blogs</p>}
        {status === "succeeded" && blogs.length === 0 && <p>No blogs found.</p>}

        {status === "succeeded" && (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            navigation
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id || blog.blog_id}>
                <BlogCardHome
                  id={blog.id || blog.blog_id}
                  title={blog.title}
                  published_date={blog.published_date}
                  thumbnail={blog.thumbnail}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default BlogSection;
