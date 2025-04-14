import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.js';
import blogReducer from './slices/blogSlice.js';
import contactReducer from './slices/contactFormSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    blog: blogReducer,
    contactForm: contactReducer,
  },
});
