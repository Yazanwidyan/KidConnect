import React, { useState } from "react";

const initialPayroll = [
  { id: 1, name: "John Doe", role: "Teacher", hoursWorked: 160, hourlyRate: 20 },
  { id: 2, name: "Jane Smith", role: "Administrator", hoursWorked: 150, hourlyRate: 25 },
  { id: 3, name: "Michael Brown", role: "Teacher", hoursWorked: 165, hourlyRate: 22 },
];

const StaffPayroll = () => {
  const [payroll, setPayroll] = useState(initialPayroll);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="mb-4 text-2xl font-bold">Staff Payroll</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg border border-gray-200 bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="border-b px-4 py-2 text-left">Name</th>
              <th className="border-b px-4 py-2 text-left">Role</th>
              <th className="border-b px-4 py-2 text-left">Hours Worked</th>
              <th className="border-b px-4 py-2 text-left">Hourly Rate ($)</th>
              <th className="border-b px-4 py-2 text-left">Total Pay ($)</th>
            </tr>
          </thead>
          <tbody>
            {payroll.map((staff) => (
              <tr key={staff.id} className="hover:bg-gray-50">
                <td className="border-b px-4 py-2">{staff.name}</td>
                <td className="border-b px-4 py-2">{staff.role}</td>
                <td className="border-b px-4 py-2">{staff.hoursWorked}</td>
                <td className="border-b px-4 py-2">{staff.hourlyRate}</td>
                <td className="border-b px-4 py-2">{staff.hoursWorked * staff.hourlyRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffPayroll;
