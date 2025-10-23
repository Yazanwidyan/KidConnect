import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const initialStudents = [
  { id: 1, name: "Ali Ahmad", age: 5, class: "KG1", parent: "Fatima Ahmad" },
  { id: 2, name: "Sara Omar", age: 6, class: "KG2", parent: "Omar Khalid" },
  { id: 3, name: "Yousef Ali", age: 5, class: "KG1", parent: "Laila Ali" },
];

const Students = () => {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [formData, setFormData] = useState({ name: "", age: "", class: "", parent: "" });

  const filteredStudents = students.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()));

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingStudent) {
      setStudents(students.map((s) => (s.id === editingStudent.id ? { ...editingStudent, ...formData } : s)));
    } else {
      setStudents([...students, { id: Date.now(), ...formData }]);
    }
    setFormData({ name: "", age: "", class: "", parent: "" });
    setEditingStudent(null);
    setModalOpen(false);
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    setFormData({ name: student.name, age: student.age, class: student.class, parent: student.parent });
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h2 className="text-primary text-2xl font-semibold">Students</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search by name..."
            className="rounded border px-3 py-1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-primary rounded px-4 py-2 text-white hover:bg-blue-600"
            onClick={() => setModalOpen(true)}
          >
            Add Student
          </button>
        </div>
      </div>

      {/* Students Table */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="w-full table-auto border-collapse bg-white">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Age</th>
              <th className="px-6 py-3">Class</th>
              <th className="px-6 py-3">Parent</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-3">{student.name}</td>
                <td className="px-6 py-3">{student.age}</td>
                <td className="px-6 py-3">{student.class}</td>
                <td className="px-6 py-3">{student.parent}</td>
                <td className="flex gap-3 px-6 py-3">
                  <button onClick={() => handleEdit(student)} className="text-blue-600 hover:text-blue-800">
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {filteredStudents.length === 0 && (
              <tr>
                <td colSpan={5} className="py-4 text-center text-gray-500">
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Student Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold text-gray-700">
              {editingStudent ? "Edit Student" : "Add Student"}
            </h3>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="rounded border px-3 py-2"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                className="rounded border px-3 py-2"
                value={formData.age}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="class"
                placeholder="Class"
                className="rounded border px-3 py-2"
                value={formData.class}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="parent"
                placeholder="Parent Name"
                className="rounded border px-3 py-2"
                value={formData.parent}
                onChange={handleInputChange}
                required
              />
              <div className="mt-4 flex justify-end gap-2">
                <button
                  type="button"
                  className="rounded border px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setModalOpen(false);
                    setEditingStudent(null);
                    setFormData({ name: "", age: "", class: "", parent: "" });
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className="bg-primary rounded px-4 py-2 text-white hover:bg-blue-600">
                  {editingStudent ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Students;
