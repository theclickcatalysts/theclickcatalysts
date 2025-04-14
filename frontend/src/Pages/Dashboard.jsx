import React, { useState } from "react";
import Tabs from "../Dashboard/Tabs";
import Sidebar from "../Dashboard/Sidebar";


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex">
      {/* Sidebar - Fixed on Scroll */}
      <Sidebar setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-grow md:ml-64 mt-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black pl-16 md:pl-10  mb-4 font-headingFont text-gray-700">This is your Dashboard</h1>
        <Tabs activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Dashboard;