import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContactForms } from "../../store/slices/contactFormSlice.js";
import ClientTable from "./ClientTable";

const ClientData = () => {
  const dispatch = useDispatch();
  const { contactForms, status } = useSelector((state) => state.contactForm);

  useEffect(() => {
    dispatch(getAllContactForms());
  }, [dispatch]);
  
  useEffect(() => {
    console.log("📥 Contact Forms from store:", contactForms);
  }, [contactForms]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Form Submissions</h2>

      {status === "loading" ? (
        <div className="text-gray-600">Loading...</div>
      ) : status === "failed" ? (
        <div className="text-red-500">Failed to load: {error}</div>
      ) : contactForms && contactForms.length > 0 ? (
        <ClientTable users={contactForms} />
      ) : (
        <div className="text-gray-500">No data available.</div>
      )}
    </div>
  );
};

export default ClientData;
