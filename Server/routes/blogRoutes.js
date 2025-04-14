// import express from "express";
// import {
//   createBlog,
//   getAllBlogs,
//   getBlogById,
//   updateBlog,
//   deleteBlog,
// } from "../controllers/blogControllers.js";
// import { verifyUser } from "../middleware/verifyUser.js";

// const router = express.Router();

// // Public (no token needed)
// router.post("/all", getAllBlogs);
// router.post("/get/:id", getBlogById);

// // Protected (token verification needed)
// router.post("/add", verifyUser, createBlog);
// router.post("/update/:id", verifyUser, updateBlog);
// router.post("/delete/:id", verifyUser, deleteBlog);



// export default router;




import express from "express";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "../controllers/blogControllers.js";
import { verifyUser } from "../middleware/verifyUser.js";
import { upload } from "../middleware/fileUpload.js";

const router = express.Router();

// Public Routes
router.post("/all", getAllBlogs);
router.post("/get/:id", getBlogById);

// Protected Routes with Image Upload
const blogUploads = upload.fields([
  { name: "thumbnail", maxCount: 1 },
  { name: "coverImg", maxCount: 1 },
  { name: "bodyImg", maxCount: 1 },
]);

router.post("/add", verifyUser, blogUploads, createBlog);
router.post("/update/:id", verifyUser, blogUploads, updateBlog);
router.post("/delete/:id", verifyUser, deleteBlog);

export default router;

