import React, { useState } from "react";

const initialTimecards = [
  { id: 1, name: "John Doe", date: "2025-10-29", checkIn: "08:00 AM", checkOut: "04:00 PM", totalHours: 8 },
  { id: 2, name: "Jane Smith", date: "2025-10-29", checkIn: "09:00 AM", checkOut: "05:00 PM", totalHours: 8 },
  {
    id: 3,
    name: "Michael Brown",
    date: "2025-10-29",
    checkIn: "08:30 AM",
    checkOut: "04:30 PM",
    totalHours: 8,
  },
];

const StaffTimecards = () => {
  const [timecards, setTimecards] = useState(initialTimecards);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="mb-4 text-2xl font-bold">Staff Timecards</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg border border-gray-200 bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="border-b px-4 py-2 text-left">Name</th>
              <th className="border-b px-4 py-2 text-left">Date</th>
              <th className="border-b px-4 py-2 text-left">Check In</th>
              <th className="border-b px-4 py-2 text-left">Check Out</th>
              <th className="border-b px-4 py-2 text-left">Total Hours</th>
            </tr>
          </thead>
          <tbody>
            {timecards.map((card) => (
              <tr key={card.id} className="hover:bg-gray-50">
                <td className="border-b px-4 py-2">{card.name}</td>
                <td className="border-b px-4 py-2">{card.date}</td>
                <td className="border-b px-4 py-2">{card.checkIn}</td>
                <td className="border-b px-4 py-2">{card.checkOut}</td>
                <td className="border-b px-4 py-2">{card.totalHours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffTimecards;
