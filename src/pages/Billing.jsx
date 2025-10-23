import React, { useState } from "react";

const initialInvoices = [
  { id: 1, student: "Ali Ahmad", class: "KG1", amount: 120, status: "Paid", date: "2025-10-01" },
  { id: 2, student: "Sara Omar", class: "KG2", amount: 150, status: "Pending", date: "2025-10-05" },
  { id: 3, student: "Yousef Ali", class: "KG1", amount: 100, status: "Overdue", date: "2025-09-25" },
];

const Billing = () => {
  const [invoices, setInvoices] = useState(initialInvoices);
  const [search, setSearch] = useState("");

  const filteredInvoices = invoices.filter((inv) => inv.student.toLowerCase().includes(search.toLowerCase()));

  const statusClass = (status) => {
    if (status === "Paid") return "bg-green-500";
    if (status === "Pending") return "bg-yellow-500";
    if (status === "Overdue") return "bg-red-500";
  };

  return (
    <div className="p-6">
      <h2 className="text-primary mb-6 text-2xl font-semibold">Billing</h2>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by student..."
          className="w-full rounded border px-3 py-2 md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Invoices Table */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="w-full table-auto border-collapse bg-white">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-6 py-3">Student</th>
              <th className="px-6 py-3">Class</th>
              <th className="px-6 py-3">Amount ($)</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.map((inv) => (
              <tr key={inv.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-3">{inv.student}</td>
                <td className="px-6 py-3">{inv.class}</td>
                <td className="px-6 py-3">{inv.amount}</td>
                <td className="px-6 py-3">
                  <span className={`rounded-full px-3 py-1 text-sm text-white ${statusClass(inv.status)}`}>
                    {inv.status}
                  </span>
                </td>
                <td className="px-6 py-3">{inv.date}</td>
              </tr>
            ))}
            {filteredInvoices.length === 0 && (
              <tr>
                <td colSpan={5} className="py-4 text-center text-gray-500">
                  No invoices found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Billing;
