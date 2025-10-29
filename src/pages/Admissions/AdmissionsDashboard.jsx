import React from "react";

export default function AdmissionsDashboard() {
  return (
    <div>
      <div className="mb-6 grid grid-cols-5 gap-4">
        {[
          { label: "Total Students", value: 8 },
          { label: "Prospects", value: 2 },
          { label: "Toured", value: 2 },
          { label: "Applied", value: 2 },
          { label: "Waitlist", value: 2 },
        ].map((item) => (
          <div key={item.label} className="rounded-lg bg-white p-4 text-center shadow">
            <p className="text-3xl font-bold text-blue-600">{item.value}</p>
            <p className="text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg bg-white p-4 shadow">
        <h2 className="mb-3 text-lg font-semibold">Student List</h2>
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="p-2">Student Name</th>
              <th className="p-2">Age</th>
              <th className="p-2">Program(s)</th>
              <th className="p-2">Paperwork Date</th>
              <th className="p-2">Desired Start</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="cursor-pointer p-2 text-blue-600">Alex Smith</td>
              <td className="p-2">3y 11m</td>
              <td className="p-2">Toddlers</td>
              <td className="p-2">4/4/2021</td>
              <td className="p-2">6/1/2021</td>
              <td className="p-2 font-semibold text-yellow-600">Waitlist</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
