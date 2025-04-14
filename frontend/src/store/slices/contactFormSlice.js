import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Submit contact form
export const submitContactForm = createAsyncThunk(
  'contactForm/submit',
  async (formData, thunkAPI) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/contact/submit`, formData);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

// ✅ Fetch all contact form submissions
export const getAllContactForms = createAsyncThunk(
  'contactForm/getAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/contact/all`);
    // console.log(res.data);  
    return res.data;
      
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState: {
    status: null,
    error: null,
    message: null,
    contactForms: [], // ✅ Store fetched contact data
  },
  reducers: {
    resetFormState: (state) => {
      state.status = null;
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Submit form cases
      .addCase(submitContactForm.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitContactForm.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.message = action.payload.message;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload?.message || 'Submission failed';
      })

      // ✅ Get all contacts cases
      .addCase(getAllContactForms.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllContactForms.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // console.log("✅ Payload is array:", action.payload);
        state.contactForms = action.payload;
      })
      .addCase(getAllContactForms.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload?.message || 'Failed to fetch contact forms';
      });
  },
});

export const { resetFormState } = contactFormSlice.actions;
export default contactFormSlice.reducer;
