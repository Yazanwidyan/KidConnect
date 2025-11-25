import React from "react";

// Sample upcoming invoices for a single student
const studentInvoices = [
  { id: 1, dueDate: "2025-12-01", amount: "$200", status: "Pending" },
  { id: 2, dueDate: "2025-12-15", amount: "$50", status: "Pending" },
];

const UpcomingInvoices = ({ studentName }) => {
  return (
    <div className="p-6 font-sans">
      <h2 className="mb-4 text-2xl font-semibold">{studentName}'s Upcoming Invoices</h2>

      {studentInvoices.length === 0 ? (
        <p className="text-gray-500">No upcoming invoices.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2">Due Date</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {studentInvoices.map((invoice) => (
                <tr key={invoice.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{invoice.dueDate}</td>
                  <td className="px-4 py-2">{invoice.amount}</td>
                  <td className="px-4 py-2">{invoice.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UpcomingInvoices;
