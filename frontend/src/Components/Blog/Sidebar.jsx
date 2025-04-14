import React from "react";

export default function Sidebar() {
  return (
    <aside className="bg-white p-6 rounded-lg shadow-md">
      {/* Search Box */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Archives */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900">Archives</h4>
        <ul className="mt-2 text-gray-600">
          <li>📅 April 2024</li>
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900">Recent Posts</h4>
        <ul className="mt-2 space-y-2 text-gray-600">
          <li>📌 Common SEO Mistakes</li>
          <li>📌 Transforming Challenges</li>
          <li>📌 SEO Strategies to Drive Traffic</li>
        </ul>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900">Categories</h4>
        <ul className="mt-2 text-gray-600">
          <li>📁 Blog Design (2)</li>
          <li>📁 IT Service (2)</li>
          <li>📁 Website Design (3)</li>
        </ul>
      </div>

      {/* Meta */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900">Meta</h4>
        <ul className="mt-2 text-gray-600">
          <li>🔗 SEO</li>
          <li>🔗 Branding</li>
          <li>🔗 Digital Marketing</li>
        </ul>
      </div>
    </aside>
  );
}
