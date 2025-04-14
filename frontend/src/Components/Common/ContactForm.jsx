import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitContactForm, resetFormState } from "../../store/slices/contactFormSlice.js";

const ContactForm = () => {
  const dispatch = useDispatch();
  const { status, error, message } = useSelector((state) => state.contactForm);
  useEffect(() => {
    if (status === "succeeded") {
      setForm({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        company: "",
        purpose: "inquiry",
        message: "",
      });
    }
  }, [status]);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    company: "",
    purpose: "inquiry",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitContactForm(form));
  };

  useEffect(() => {
    return () => {
      dispatch(resetFormState());
    };
  }, [dispatch]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <input type="text" name="first_name" placeholder="Your First Name" required onChange={handleChange} className="w-full border p-2 rounded" />
          <input type="text" name="last_name" placeholder="Your Last Name" required onChange={handleChange} className="w-full border p-2 rounded" />
        </div>
        <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="mobile" placeholder="Your Mobile" required onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="company" placeholder="Company" onChange={handleChange} className="w-full border p-2 rounded" />
        <select name="purpose" onChange={handleChange} className="w-full border p-2 rounded">
          <option value="inquiry">Inquiry</option>
          <option value="quote">Quote</option>
          <option value="support">Support</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>
        <textarea name="message" rows="4" placeholder="Your Message" onChange={handleChange} className="w-full border p-2 rounded"></textarea>
        <button type="submit" className="bg-primary text-white py-2 px-6 rounded">Submit</button>
      </form>

      {status === "loading" && <p className="text-gray-500 mt-4">Submitting...</p>}
      {status === "succeeded" && <p className="text-green-600 mt-4">{message}</p>}
      {status === "failed" && <p className="text-red-500 mt-4">Error: {error}</p>}
    </div>
  );
};

export default ContactForm;
