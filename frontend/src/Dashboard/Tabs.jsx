import React, { useState } from 'react';
import Dash from './Sabcompnent/Dash';
import BlogForm from './Sabcompnent/BlogsForm';
import ClientData from './Sabcompnent/ClientData';


const Tabs = ({ activeTab }) => {
  return (
    <div>
      <div className="p-4">
        {activeTab === 'dashboard' && <Dash />}
        {activeTab === 'blogform' && <BlogForm />}
        {activeTab === 'clientdata' && <ClientData />}
      </div>
    </div>
  );
};

export default Tabs;