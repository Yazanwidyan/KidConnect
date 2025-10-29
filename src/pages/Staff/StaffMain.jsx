import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StaffMain = () => {
  const navigate = useNavigate();

  const [staffData, setStaffData] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Teacher",
      status: "Active",
      checkIn: "08:00 AM",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Administrator",
      status: "Inactive",
      checkIn: "09:00 AM",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    status: "Active",
    checkIn: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddStaff = (e) => {
    e.preventDefault();
    const newStaff = { ...form, id: Date.now() };
    setStaffData([...staffData, newStaff]);
    setForm({ name: "", email: "", role: "", status: "Active", checkIn: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="mb-4 text-2xl font-bold">School Staff</h1>

      {/* Add Staff Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Add Staff
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-md rounded-lg bg-white p-6">
            <h2 className="mb-4 text-xl font-bold">Add New Staff</h2>
            <button
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <form onSubmit={handleAddStaff} className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="rounded border border-gray-300 px-3 py-2"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="rounded border border-gray-300 px-3 py-2"
                required
              />
              <input
                type="text"
                name="role"
                value={form.role}
                onChange={handleChange}
                placeholder="Role"
                className="rounded border border-gray-300 px-3 py-2"
                required
              />
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="rounded border border-gray-300 px-3 py-2"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <input
                type="time"
                name="checkIn"
                value={form.checkIn}
                onChange={handleChange}
                className="rounded border border-gray-300 px-3 py-2"
                required
              />
              <button type="submit" className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                Add Staff
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Staff Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg border border-gray-200 bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="border-b px-4 py-2 text-left">Name</th>
              <th className="border-b px-4 py-2 text-left">Email</th>
              <th className="border-b px-4 py-2 text-left">Role</th>
              <th className="border-b px-4 py-2 text-left">Status</th>
              <th className="border-b px-4 py-2 text-left">Check In</th>
            </tr>
          </thead>
          <tbody>
            {staffData.map((staff) => (
              <tr key={staff.id} className="hover:bg-gray-50" onClick={() => navigate(`/staff/${staff.id}`)}>
                <td className="border-b px-4 py-2">{staff.name}</td>
                <td className="border-b px-4 py-2">{staff.email}</td>
                <td className="border-b px-4 py-2">{staff.role}</td>
                <td
                  className={`border-b px-4 py-2 font-semibold ${
                    staff.status === "Active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {staff.status}
                </td>
                <td className="border-b px-4 py-2">{staff.checkIn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffMain;
