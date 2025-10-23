// Branches.jsx

import React, { useState } from "react";

const Branches = () => {
  const [branches, setBranches] = useState([
    { id: "b1", name: "Downtown Branch", students: 120, teachers: 15 },
    { id: "b2", name: "Uptown Branch", students: 80, teachers: 10 },
  ]);

  return (
    <div className="p-4 sm:p-6">
      <h2 className="mb-4 text-2xl font-semibold">Branches</h2>

      <div className="overflow-x-auto rounded-lg bg-white shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Branch Name</th>
              <th className="px-4 py-2">Students</th>
              <th className="px-4 py-2">Teachers</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {branches.map((b) => (
              <tr key={b.id}>
                <td className="px-4 py-2">{b.name}</td>
                <td className="px-4 py-2">{b.students}</td>
                <td className="px-4 py-2">{b.teachers}</td>
                <td className="px-4 py-2">
                  <button className="mr-2 text-blue-600">Edit</button>
                  <button className="text-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Branches;
