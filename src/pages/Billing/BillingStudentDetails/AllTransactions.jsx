import React from "react";

// Sample transactions for a single student
const studentTransactions = [
  { id: 1, date: "2025-11-01", description: "Tuition Fee - October", amount: "$200", status: "Paid" },
  { id: 2, date: "2025-11-10", description: "Lab Fee", amount: "$50", status: "Pending" },
  { id: 3, date: "2025-11-15", description: "Books", amount: "$30", status: "Paid" },
];

const AllTransactions = ({ studentName }) => {
  return (
    <div className="p-6 font-sans">
      <h2 className="mb-4 text-2xl font-semibold">{studentName}'s All Transactions</h2>

      {studentTransactions.length === 0 ? (
        <p className="text-gray-500">No transactions found for this student.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {studentTransactions.map((tx) => (
                <tr key={tx.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{tx.date}</td>
                  <td className="px-4 py-2">{tx.description}</td>
                  <td className="px-4 py-2">{tx.amount}</td>
                  <td className="px-4 py-2">{tx.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllTransactions;
