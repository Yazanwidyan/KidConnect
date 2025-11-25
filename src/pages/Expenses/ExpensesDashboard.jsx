import React from "react";

export default function ExpensesDashboard() {
  return (
    <div className="p-6">
      {/* Title */}
      <h1 className="mb-6 text-2xl font-bold text-gray-800">Expenses Dashboard</h1>

      {/* Summary Cards */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow">
          <p className="text-sm text-gray-500">Total Expenses</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-800">$8,420</h2>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <p className="text-sm text-gray-500">This Month</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-800">$1,140</h2>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <p className="text-sm text-gray-500">Categories</p>
          <h2 className="mt-2 text-lg font-semibold text-gray-800">Supplies, Payroll, Operations</h2>
        </div>
      </div>

      {/* Table Placeholder */}
      <div className="rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-lg font-semibold text-gray-700">Recent Expenses</h2>

        <div className="text-sm text-gray-500">
          <p>No expenses recorded yet.</p>
        </div>
      </div>
    </div>
  );
}
