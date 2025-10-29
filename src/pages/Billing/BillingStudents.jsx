import React from "react";

// Sample data
const studentsData = [
  {
    id: 1,
    name: "Adam Smith",
    balance: "$200",
    payer: "Parent - John Smith",
    method: "Credit Card",
    autopay: "Enabled",
    plan: "Full-time",
  },
  {
    id: 2,
    name: "Emma Johnson",
    balance: "$50",
    payer: "Parent - Sarah Johnson",
    method: "Bank Transfer",
    autopay: "Disabled",
    plan: "Part-time",
  },
];

const BillingStudents = () => {
  return (
    <div className="p-6 font-sans">
      <h2 className="mb-4 text-2xl font-semibold">Billing Students</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-yellow-100">
            <tr>
              <th className="px-4 py-2 text-left">Student Name</th>
              <th className="px-4 py-2 text-left">Account Balance</th>
              <th className="px-4 py-2 text-left">Payer & Method</th>
              <th className="px-4 py-2 text-left">Autopay</th>
              <th className="px-4 py-2 text-left">Billing Plans</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {studentsData.map((student) => (
              <tr key={student.id} className="border-b border-gray-200">
                <td className="px-4 py-2">{student.name}</td>
                <td className="px-4 py-2">{student.balance}</td>
                <td className="px-4 py-2">
                  {student.payer} ({student.method})
                </td>
                <td className="px-4 py-2">{student.autopay}</td>
                <td className="px-4 py-2">{student.plan}</td>
                <td className="space-x-2 px-4 py-2">
                  <button className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600">Edit</button>
                  <button className="rounded bg-orange-500 px-3 py-1 text-white hover:bg-orange-600">
                    View
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

export default BillingStudents;
