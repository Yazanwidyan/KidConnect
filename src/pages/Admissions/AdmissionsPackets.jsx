import React from "react";
import { FiSearch } from "react-icons/fi";

export default function AdmissionsPackets() {
  const packets = [
    {
      name: "Registration for Infant rooms 2025 - 2026",
      students: 0,
      due: "Oct 3, 2025",
      fee: "$15",
      status: "Active",
    },
    {
      name: "2024 Registration Packet for Infant Class",
      students: 1,
      due: "-",
      fee: "None",
      status: "Active",
    },
    {
      name: "Admissions packet (May 2025)",
      students: 1,
      due: "-",
      fee: "$125",
      status: "Active",
    },
  ];

  return (
    <div className="w-full p-6">
      <h1 className="mb-6 text-2xl font-semibold">Admissions packets</h1>

      {/* Filters */}
      <div className="mb-4 flex items-center gap-4">
        <div className="relative w-60">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-lg border py-2 pl-10 pr-3 text-sm"
          />
        </div>

        <div className="flex w-auto items-center gap-2 rounded-lg border px-3 py-2 text-sm">
          <span className="rounded bg-gray-100 px-2 py-1">Draft ✕</span>
          <span className="rounded bg-gray-100 px-2 py-1">Active ✕</span>
          <span className="rounded bg-gray-100 px-2 py-1">Closed ✕</span>
        </div>
      </div>

      <p className="mb-2 text-sm text-gray-500">
        Order by: <span className="font-medium">Recent</span>
      </p>

      {/* Table */}
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full rounded-lg bg-white shadow">
          <thead>
            <tr className="border-b text-left text-gray-600">
              <th className="px-4 py-3">Packet</th>
              <th className="px-4 py-3">Total students</th>
              <th className="px-4 py-3">Due</th>
              <th className="px-4 py-3">Fee</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {packets.map((row, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="cursor-pointer px-4 py-3 text-blue-600">{row.name}</td>
                <td className="px-4 py-3">{row.students}</td>
                <td className="px-4 py-3">{row.due}</td>
                <td className="px-4 py-3 font-medium text-blue-600">{row.fee}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-600 shadow">
                    {row.status}
                  </span>
                </td>
                <td className="cursor-pointer px-4 py-3 text-blue-600">Actions ▾</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
