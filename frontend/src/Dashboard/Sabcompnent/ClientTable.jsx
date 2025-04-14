import React from "react";

const ClientTable = ({ users = [] }) => {
  return (
    <div className="overflow-x-auto w-full mt-10">
      <div className="min-w-[800px] w-full border rounded-lg overflow-hidden shadow">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-xs uppercase text-gray-600">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">First Name</th>
              <th className="px-6 py-3">Last Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Mobile</th>
              <th className="px-6 py-3">Company</th>
              <th className="px-6 py-3">Purpose</th>
              <th className="px-6 py-3">Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {users?.length > 0 ? (
              users.map((user, index) => (
                <tr
                  key={user.id}
                  className="border-t hover:bg-gray-50 transition duration-150"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{user.first_name}</td>
                  <td className="px-6 py-4">{user.last_name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.mobile}</td>
                  <td className="px-6 py-4">{user.company || "-"}</td>
                  <td className="px-6 py-4 capitalize">{user.purpose}</td>
                  <td className="px-6 py-4">
                    {new Date(user.submitted_at).toLocaleString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className="text-center px-6 py-4 text-gray-500"
                >
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientTable;
