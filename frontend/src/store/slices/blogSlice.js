import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8001/api/blogs";

// Helper to get auth headers
const getAuthHeaders = (token) => {
  console.log("Using token:", token);
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  };
};

// ─── Public Routes ─────────────────────────

export const fetchBlogs = createAsyncThunk(
  "blog/fetchBlogs",
  async (_, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/all`);
      // console.log("✅ Blogs fetched:", response.data.blogs);
      return response.data.blogs;
    } catch (error) {
      // console.error(
      //   "❌ Fetch blogs error:",
      //   error.response?.data || error.message
      // );
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Fetch blogs failed."
      );
    }
  }
);

export const getBlogById = createAsyncThunk(
  "blog/getBlogById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/get/${id}`);
      // console.log(`✅ Blog ID ${id} fetched:`, response.data.blog);
      return response.data.blog;
    } catch (error) {
      // console.error(
      //   `❌ Get blog by ID ${id} error:`,
      //   error.response?.data || error.message
      // );
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Fetch blog failed."
      );
    }
  }
);

// ─── Protected Routes ──────────────────────

export const addBlog = createAsyncThunk(
  "blog/addBlog",
  async ({ formData, token }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${API_URL}/add`,
        formData,
        getAuthHeaders(token)
      );
      // console.log("✅ Blog added:", response.data.post);
      return response.data.post;
    } catch (error) {
      // console.error(
      //   "❌ Add blog error:",
      //   error.response?.data || error.message
      // );
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Add blog failed."
      );
    }
  }
);

export const updateBlog = createAsyncThunk(
  "blog/updateBlog",
  async ({ id, updatedData, token }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${API_URL}/update/${id}`,
        updatedData,
        getAuthHeaders(token)
      );
      // console.log(`✅ Blog ID ${id} updated:`, response.data);
      return response.data;
    } catch (error) {
      // console.error(
      //   `❌ Update blog ID ${id} error:`,
      //   error.response?.data || error.message
      // );
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Update blog failed."
      );
    }
  }
);

export const deleteBlog = createAsyncThunk(
  "blog/deleteBlog",
  async ({ id, token }, thunkAPI) => {
    try {
      await axios.post(`${API_URL}/delete/${id}`, {}, getAuthHeaders(token));
      // console.log(`✅ Blog ID ${id} deleted`);
      return id;
    } catch (error) {
      // console.error(
      //   `❌ Delete blog ID ${id} error:`,
      //   error.response?.data || error.message
      // );
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Delete blog failed."
      );
    }
  }
);

// ─── Slice ────────────────────────────────

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    singleBlog: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Blogs
      .addCase(fetchBlogs.pending, (state) => {
        // console.log("⏳ Fetching blogs...");
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        // console.log("✅ Blogs loaded into state");
        state.status = "succeeded";
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        // console.error("❌ Blogs fetch failed:", action.payload);
        state.status = "failed";
        state.error = action.payload;
      })

      // Get Blog By ID
      .addCase(getBlogById.pending, (state) => {
        // console.log("⏳ Fetching single blog...");
        state.status = "loading";
      })
      .addCase(getBlogById.fulfilled, (state, action) => {
        // console.log("✅ Single blog loaded into state");
        state.status = "succeeded";
        state.singleBlog = action.payload;
      })
      .addCase(getBlogById.rejected, (state, action) => {
        // console.error("❌ Get single blog failed:", action.payload);
        state.status = "failed";
        state.error = action.payload;
      })

      // Add Blog
      .addCase(addBlog.fulfilled, (state, action) => {
        // console.log("✅ Blog added to state");
        state.blogs.push(action.payload);
      })
      .addCase(addBlog.rejected, (state, action) => {
        // console.error("❌ Add blog rejected:", action.payload);
        state.error = action.payload;
      })

      // Update Blog
      .addCase(updateBlog.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.blogs.findIndex(
          (b) => b.blog_id === updated.blog_id
        );
        if (index !== -1) {
          state.blogs[index] = updated;
          // console.log(`✅ Blog ID ${updated.blog_id} updated in state`);
        }
      })
      .addCase(updateBlog.rejected, (state, action) => {
        // console.error("❌ Update blog rejected:", action.payload);
        state.error = action.payload;
      })

      // Delete Blog
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.blogs = state.blogs.filter((b) => b.blog_id !== action.payload);
        // console.log(`✅ Blog ID ${action.payload} removed from state`);
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        // console.error("❌ Delete blog rejected:", action.payload);
        state.error = action.payload;
      });
  },
});

export default blogSlice.reducer;
