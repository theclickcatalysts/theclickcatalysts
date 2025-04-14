// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// axios.defaults.withCredentials = true;

// export const loginUser = createAsyncThunk(
//   "auth/loginUser",
//   async (formData, thunkAPI) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8001/api/users/auth/login",
//         formData
//       );

//       if (response.data.Status === "User logged in successfully") {
//         const token = response.data.token;
//         localStorage.setItem("authToken", token);
//         axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//         return { token };
//       } else {
//         return thunkAPI.rejectWithValue(response.data.Error || "Invalid credentials.");
//       }
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || "Login failed."
//       );
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     token: localStorage.getItem("authToken") || null,
//     isAuthenticated: !!localStorage.getItem("authToken"),
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     logout: (state) => {
//       state.token = null;
//       state.isAuthenticated = false;
//       localStorage.removeItem("authToken");
//       delete axios.defaults.headers.common["Authorization"];
//       console.log("User logged out, token removed.");

//       // Optional: Redirect after logout
//       // window.location.href = "/login"; 
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.token = action.payload.token;
//         state.isAuthenticated = true;
//         console.log("Logged in, token:", action.payload.token);
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//         console.error("Login failed:", action.payload);
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.withCredentials = true;

// Thunk for login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8001/api/users/auth/login",
        formData
      );

      const { Status, token, Error } = response.data;

      if (Status === "User logged in successfully" && token) {
        // Set token in localStorage
        localStorage.setItem("authToken", token);

        // Set axios default header
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        return { token };
      } else {
        return thunkAPI.rejectWithValue(Error || "Invalid credentials");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

// Initial state
const initialState = {
  token: localStorage.getItem("authToken") || null,
  isAuthenticated: !!localStorage.getItem("authToken"),
  loading: false,
  error: null,
};

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem("authToken");
      delete axios.defaults.headers.common["Authorization"];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.isAuthenticated = true; // ✅ important fix here
        state.error = null;
        // console.log("Redux: login successful, state updated");
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.token = null;
        state.isAuthenticated = false;
        state.error = action.payload;
        // console.error("Redux: login failed", action.payload);
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
