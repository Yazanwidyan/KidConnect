import React from "react";

export default function Signups() {
  const signups = [
    {
      id: 1,
      name: "Classroom Wishlist",
      dates: "-",
      people: "2/5",
      status: "Open",
      creator: "Hadley Elizabeth",
    },
    {
      id: 2,
      name: "Fall 2025 Secret Reader",
      dates: "Tue, Oct 14, Tue, Oct 21, Tue, Oct 28",
      people: "0/10",
      status: "Open",
      creator: "Hadley Elizabeth",
    },
    {
      id: 3,
      name: "Winter 2025 Parent-Teacher Conference",
      dates: "Mon, Jan 26",
      people: "0/10",
      status: "Open",
      creator: "Hadley Elizabeth",
    },
  ];

  return (
    <div className="p-6">
      {/* Title Row */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Sign-ups</h2>

        <div className="flex items-center gap-4">
          <button className="text-primary underline">Share feedback</button>
          <button className="rounded-lg bg-primary px-4 py-2 text-white">+ Create new</button>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="mb-4 flex flex-wrap items-center gap-4">
        <input type="text" placeholder="Search by name" className="rounded border px-3 py-2 md:w-64" />

        <button className="rounded border px-4 py-2 text-gray-700">Filters</button>
      </div>

      {/* Order By */}
      <p className="mb-2 text-sm text-gray-500">
        Order by: <span className="font-medium text-primary">Name (A-Z)</span>
      </p>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg bg-white shadow">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="border-b bg-gray-50 text-left text-sm text-gray-600">
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Dates</th>
              <th className="px-6 py-3"># of people</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Created by</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>

          <tbody>
            {signups.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="cursor-pointer px-6 py-3 text-primary hover:underline">{item.name}</td>

                <td className="px-6 py-3 text-sm text-gray-600">{item.dates}</td>

                <td className="px-6 py-3">{item.people}</td>

                <td className="px-6 py-3">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                    {item.status}
                  </span>
                </td>

                <td className="flex items-center gap-2 px-6 py-3 text-sm text-gray-700">
                  <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                  {item.creator}
                </td>

                <td className="cursor-pointer px-6 py-3 text-right text-primary">Actions ▾</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-end gap-4 text-sm text-gray-600">
        <p>Showing 1 - 3 of 3</p>
        <button className="rounded border px-2 py-1">&lt;</button>
        <button className="rounded border px-2 py-1">&gt;</button>
      </div>
    </div>
  );
}
