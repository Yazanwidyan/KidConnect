import React, { useState } from "react";

const initialMessages = [
  {
    id: 1,
    student: "Ali Ahmad",
    parent: "Fatima Ahmad",
    message: "Hello, your child is doing well today.",
    date: "2025-10-23",
  },
  {
    id: 2,
    student: "Sara Omar",
    parent: "Omar Khalid",
    message: "Please submit the fee for next month.",
    date: "2025-10-22",
  },
  {
    id: 3,
    student: "Yousef Ali",
    parent: "Laila Ali",
    message: "Your child missed class today.",
    date: "2025-10-21",
  },
];

const Messages = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [search, setSearch] = useState("");

  const filteredMessages = messages.filter(
    (m) =>
      m.student.toLowerCase().includes(search.toLowerCase()) ||
      m.parent.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-primary mb-6 text-2xl font-semibold">Messages</h2>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by student or parent..."
          className="w-full rounded border px-3 py-2 md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Messages Table */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="w-full table-auto border-collapse bg-white">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-6 py-3">Student</th>
              <th className="px-6 py-3">Parent</th>
              <th className="px-6 py-3">Message</th>
              <th className="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredMessages.map((msg) => (
              <tr key={msg.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-3">{msg.student}</td>
                <td className="px-6 py-3">{msg.parent}</td>
                <td className="px-6 py-3">{msg.message}</td>
                <td className="px-6 py-3">{msg.date}</td>
              </tr>
            ))}
            {filteredMessages.length === 0 && (
              <tr>
                <td colSpan={4} className="py-4 text-center text-gray-500">
                  No messages found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;
