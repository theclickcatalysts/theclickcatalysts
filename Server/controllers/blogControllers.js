// import * as blogmodules from "../modulars/blogModules.js";

// // Create a new blog post
// export const createBlog = async (req, res) => {
//   try {
//     const {
//       title,
//       subheading,
//       content,
//       conclusion,
//       hyperlinks,
//       thumbnail,
//       coverImg,
//       bodyImg
//     } = req.body;

//     console.log("Creating new blog with data:", {
//       title, subheading, content, conclusion, hyperlinks, thumbnail, coverImg, bodyImg
//     });

//     const newPost = await blogmodules.createBlogPost(
//       title,
//       subheading,
//       content,
//       conclusion,
//       hyperlinks,
//       thumbnail,
//       coverImg,
//       bodyImg
//     );

//     console.log("Blog post created successfully:", newPost);
//     res.status(201).json({ success: true, post: newPost });
//   } catch (err) {
//     console.error("Error while creating blog:", err.message);
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// // Get all blog posts
// export const getAllBlogs = async (req, res) => {
//   try {
//     console.log("Fetching all blog posts...");
//     const blogs = await blogmodules.getAllBlogPosts();

//     console.log(`Fetched ${blogs.length} blog posts`);
//     res.status(200).json({ success: true, blogs });
//   } catch (err) {
//     console.error("Error while fetching all blogs:", err.message);
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// // Get a blog post by ID
// export const getBlogById = async (req, res) => {
//   try {
//     const postId = req.params.id;
//     console.log("Fetching blog post by ID:", postId);

//     const blog = await blogmodules.getBlogPostById(postId);

//     if (!blog) {
//       console.warn(`Blog post with ID ${postId} not found`);
//       return res.status(404).json({ success: false, message: "Blog post not found" });
//     }

//     console.log("Blog post found:", blog);
//     res.status(200).json({ success: true, blog });
//   } catch (err) {
//     console.error(`Error fetching blog post ID ${req.params.id}:`, err.message);
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// // Update a blog post
// export const updateBlog = async (req, res) => {
//   try {
//     const postId = req.params.id;
//     const {
//       title,
//       subheading,
//       content,
//       conclusion,
//       hyperlinks,
//       thumbnail,
//       coverImg,
//       bodyImg
//     } = req.body;

//     console.log("Updating blog post:", {
//       postId, title, subheading, content, conclusion, hyperlinks, thumbnail, coverImg, bodyImg
//     });

//     await blogmodules.updateBlogPost(postId, {
//       title,
//       subheading,
//       content,
//       conclusion,
//       hyperlinks,
//       thumbnail,
//       coverImg,
//       bodyImg
//     });

//     console.log(`Blog post with ID ${postId} updated successfully`);
//     res.status(200).json({ success: true, message: "Blog post updated successfully" });
//   } catch (err) {
//     console.error(`Error updating blog post ID ${req.params.id}:`, err.message);
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// // Delete a blog post
// export const deleteBlog = async (req, res) => {
//   try {
//     const postId = req.params.id;
//     console.log("Deleting blog post with ID:", postId);

//     await blogmodules.deleteBlogPost(postId);

//     console.log(`Blog post with ID ${postId} deleted successfully`);
//     res.status(200).json({ success: true, message: "Blog post deleted successfully" });
//   } catch (err) {
//     console.error(`Error deleting blog post ID ${req.params.id}:`, err.message);
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

import * as blogmodules from "../modulars/blogModules.js";

// Helper to safely parse hyperlinks
const parseHyperlinks = (input) => {
  if (Array.isArray(input)) return input;
  try {
    const parsed = JSON.parse(input);
    return Array.isArray(parsed) ? parsed : [parsed];
  } catch (e) {
    return typeof input === "string" && input.trim() !== "" ? [input] : [];
  }
};

// Create a new blog post
export const createBlog = async (req, res) => {
  try {
    const {
      title,
      subheading,
      content,
      conclusion,
      hyperlinks
    } = req.body;

    const thumbnail = req.files?.thumbnail?.[0]?.filename || null;
    const coverImg = req.files?.coverImg?.[0]?.filename || null;
    const bodyImg = req.files?.bodyImg?.[0]?.filename || null;

    const hyperlinksArray = parseHyperlinks(hyperlinks);

    console.log("📤 Creating new blog with:", {
      title, subheading, content, conclusion,
      hyperlinks: hyperlinksArray,
      thumbnail, coverImg, bodyImg
    });

    const newPost = await blogmodules.createBlogPost(
      title,
      subheading,
      content,
      conclusion,
      hyperlinksArray,
      thumbnail,
      coverImg,
      bodyImg
    );

    res.status(201).json({ success: true, post: newPost });
  } catch (err) {
    // console.error("Error while creating blog:", err.message);
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get all blog posts
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogmodules.getAllBlogPosts();
    res.status(200).json({ success: true, blogs });
  } catch (err) {
    // console.error("Error while fetching all blogs:", err.message);
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get a blog post by ID
export const getBlogById = async (req, res) => {
  try {
    const postId = req.params.id;
    const blog = await blogmodules.getBlogPostById(postId);

    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog post not found" });
    }

    res.status(200).json({ success: true, blog });
  } catch (err) {
    // console.error(`Error fetching blog post ID ${req.params.id}:`, err.message);
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update a blog post
export const updateBlog = async (req, res) => {
  try {
    const postId = req.params.id;
    const {
      title,
      subheading,
      content,
      conclusion,
      hyperlinks
    } = req.body;

    const thumbnail = req.files?.thumbnail?.[0]?.filename || null;
    const coverImg = req.files?.coverImg?.[0]?.filename || null;
    const bodyImg = req.files?.bodyImg?.[0]?.filename || null;

    const hyperlinksArray = parseHyperlinks(hyperlinks);

    console.log("Updating blog post:", {
      postId, title, subheading, content, conclusion,
      hyperlinks: hyperlinksArray,
      thumbnail, coverImg, bodyImg
    });

    await blogmodules.updateBlogPost(postId, {
      title,
      subheading,
      content,
      conclusion,
      hyperlinks: hyperlinksArray,
      thumbnail,
      coverImg,
      bodyImg
    });

    res.status(200).json({ success: true, message: "Blog post updated successfully" });
  } catch (err) {
    // console.error(`Error updating blog post ID ${req.params.id}:`, err.message);
    res.status(500).json({ success: false, message: err.message });
  }
};

// Delete a blog post
export const deleteBlog = async (req, res) => {
  try {
    const postId = req.params.id;
    await blogmodules.deleteBlogPost(postId);
    res.status(200).json({ success: true, message: "Blog post deleted successfully" });
  } catch (err) {
    // console.error(`Error deleting blog post ID ${req.params.id}:`, err.message);
    res.status(500).json({ success: false, message: err.message });
  }
};
