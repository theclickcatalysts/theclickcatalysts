import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaTachometerAlt,
  FaPhone
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";

const Sidebar = ({ setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTabState] = useState("dashboard");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActiveTabState(tab);
    closeSidebar();
  };
  

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar - Fixed on Desktop */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-gray-900 to-gray-700 shadow-lg border-r
        transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 pt-16 pb-6 md:py-6 border-b border-gray-700">
          <h1 className="text-xl font-bold text-white font-headingFont">
            Click Catalysts
          </h1>
        </div>

        {/* Menu Items */}
        <ul className="flex-grow space-y-2 px-4 pt-4 font-secondary">
          {[
            { label: "Dashboard", tab: "dashboard", icon: <FaTachometerAlt /> },
            { label: "Blog Form", tab: "blogform", icon: <FaPhone /> },
            { label: "Client Data", tab: "clientdata", icon: <FaPhone /> },
          ].map(({ label, tab, icon }) => (
            <li key={tab}>
              <button
                className={`flex items-center w-full text-left px-4 py-3 rounded-lg transition duration-200 ease-in-out ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
                onClick={() => handleTabClick(tab)}
              >
                <span className="mr-3">{icon}</span>
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Go Back Button */}
        <div className="p-4 align-bottom absolute bottom-0 w-full">
          <button
            className="w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200 ease-in-out"
            onClick={handleLogout}
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
