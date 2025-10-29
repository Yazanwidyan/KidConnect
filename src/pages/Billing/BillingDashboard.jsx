import React, { useState } from "react";

// Sample data
const rooms = ["Preschool", "Kindergarten", "Grade 1"];
const transactionsData = [
  {
    id: 1,
    child: "Adam Smith",
    room: "Preschool",
    invoiceDate: "2025-10-20",
    amount: "$500",
    status: "Paid",
  },
  {
    id: 2,
    child: "Emma Johnson",
    room: "Kindergarten",
    invoiceDate: "2025-10-22",
    amount: "$450",
    status: "Pending",
  },
  {
    id: 3,
    child: "Mia Smith",
    room: "Preschool",
    invoiceDate: "2025-10-25",
    amount: "$500",
    status: "Overdue",
  },
];

const BillingDashboard = () => {
  const [selectedRoom, setSelectedRoom] = useState("All Rooms");

  const filteredTransactions =
    selectedRoom === "All Rooms" ? transactionsData : transactionsData.filter((t) => t.room === selectedRoom);

  return (
    <div className="p-6 font-sans">
      <h1 className="mb-6 text-3xl font-bold">Billing Dashboard</h1>

      {/* Summary Cards */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded bg-blue-500 p-4 text-white shadow">
          <p className="text-lg font-semibold">Total Invoices</p>
          <p className="mt-2 text-2xl">{transactionsData.length}</p>
        </div>
        <div className="rounded bg-green-500 p-4 text-white shadow">
          <p className="text-lg font-semibold">Paid</p>
          <p className="mt-2 text-2xl">{transactionsData.filter((t) => t.status === "Paid").length}</p>
        </div>
        <div className="rounded bg-yellow-500 p-4 text-white shadow">
          <p className="text-lg font-semibold">Pending</p>
          <p className="mt-2 text-2xl">{transactionsData.filter((t) => t.status === "Pending").length}</p>
        </div>
        <div className="rounded bg-red-500 p-4 text-white shadow">
          <p className="text-lg font-semibold">Overdue</p>
          <p className="mt-2 text-2xl">{transactionsData.filter((t) => t.status === "Overdue").length}</p>
        </div>
      </div>

      {/* Room Filter */}
      <div className="mb-4">
        <label className="mr-2 font-semibold">Filter by Room:</label>
        <select
          value={selectedRoom}
          onChange={(e) => setSelectedRoom(e.target.value)}
          className="rounded border border-gray-300 px-2 py-1"
        >
          <option>All Rooms</option>
          {rooms.map((room) => (
            <option key={room}>{room}</option>
          ))}
        </select>
      </div>

      {/* Transactions Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-yellow-100">
            <tr>
              <th className="px-4 py-2 text-left">Child Name</th>
              <th className="px-4 py-2 text-left">Room</th>
              <th className="px-4 py-2 text-left">Invoice Date</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((t) => (
              <tr key={t.id} className="border-b border-gray-200">
                <td className="px-4 py-2">{t.child}</td>
                <td className="px-4 py-2">{t.room}</td>
                <td className="px-4 py-2">{t.invoiceDate}</td>
                <td className="px-4 py-2">{t.amount}</td>
                <td
                  className={`px-4 py-2 font-semibold ${
                    t.status === "Paid"
                      ? "text-green-600"
                      : t.status === "Pending"
                        ? "text-yellow-600"
                        : "text-red-600"
                  }`}
                >
                  {t.status}
                </td>
                <td className="space-x-2 px-4 py-2">
                  <button className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600">View</button>
                  <button className="rounded bg-orange-500 px-3 py-1 text-white hover:bg-orange-600">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillingDashboard;
