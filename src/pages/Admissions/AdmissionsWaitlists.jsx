import React, { useState } from "react";

// Sample data
const rooms = ["Preschool", "Kindergarten", "Grade 1"];
const waitlistData = [
  {
    position: 1,
    name: "Adam Smith",
    paperworkDate: "2025-10-20",
    desiredStart: "2026-01-05",
    age: 4,
    sibling: "Mia Smith",
  },
  {
    position: 2,
    name: "Emma Johnson",
    paperworkDate: "2025-10-22",
    desiredStart: "2026-02-01",
    age: 5,
    sibling: "No",
  },
];

const AdmissionsWaitlists = () => {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);

  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar */}
      <div className="w-56 border-r border-gray-300 p-4">
        <h3 className="mb-4 text-lg font-semibold">Rooms</h3>
        <ul className="space-y-2">
          {rooms.map((room) => (
            <li
              key={room}
              className={`cursor-pointer rounded px-3 py-2 ${
                selectedRoom === room ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setSelectedRoom(room)}
            >
              {room}
            </li>
          ))}
        </ul>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto p-6">
        <h2 className="mb-4 text-2xl font-semibold">{selectedRoom} Waitlist</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-yellow-100">
              <tr>
                <th className="px-4 py-2 text-left">Position</th>
                <th className="px-4 py-2 text-left">Student Name</th>
                <th className="px-4 py-2 text-left">Paperwork Date</th>
                <th className="px-4 py-2 text-left">Desired Start</th>
                <th className="px-4 py-2 text-left">Age</th>
                <th className="px-4 py-2 text-left">Sibling Attending</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {waitlistData.map((student) => (
                <tr key={student.position} className="border-b border-gray-200">
                  <td className="px-4 py-2">{student.position}</td>
                  <td className="px-4 py-2">{student.name}</td>
                  <td className="px-4 py-2">{student.paperworkDate}</td>
                  <td className="px-4 py-2">{student.desiredStart}</td>
                  <td className="px-4 py-2">{student.age}</td>
                  <td className="px-4 py-2">{student.sibling}</td>
                  <td className="space-x-2 px-4 py-2">
                    <button className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600">
                      Enroll
                    </button>
                    <button className="rounded bg-orange-500 px-3 py-1 text-white hover:bg-orange-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsWaitlists;
