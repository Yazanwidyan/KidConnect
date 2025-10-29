import React from "react";

const staffDetails = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  phone: "+1 234 567 890",
  role: "Teacher",
  status: "Active",
  department: "Preschool",
  checkIn: "08:00 AM",
  checkOut: "04:00 PM",
  hourlyRate: 20,
  hoursWorked: 160,
};

const StaffDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow">
        <h1 className="mb-6 text-2xl font-bold">Staff Details</h1>

        {/* Basic Info */}
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <p className="font-semibold">Name:</p>
            <p>{staffDetails.name}</p>
          </div>
          <div>
            <p className="font-semibold">Email:</p>
            <p>{staffDetails.email}</p>
          </div>
          <div>
            <p className="font-semibold">Phone:</p>
            <p>{staffDetails.phone}</p>
          </div>
          <div>
            <p className="font-semibold">Role:</p>
            <p>{staffDetails.role}</p>
          </div>
          <div>
            <p className="font-semibold">Status:</p>
            <p
              className={
                staffDetails.status === "Active"
                  ? "font-semibold text-green-600"
                  : "font-semibold text-red-600"
              }
            >
              {staffDetails.status}
            </p>
          </div>
          <div>
            <p className="font-semibold">Department:</p>
            <p>{staffDetails.department}</p>
          </div>
        </div>

        {/* Time & Payroll Info */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <p className="font-semibold">Check In:</p>
            <p>{staffDetails.checkIn}</p>
          </div>
          <div>
            <p className="font-semibold">Check Out:</p>
            <p>{staffDetails.checkOut}</p>
          </div>
          <div>
            <p className="font-semibold">Hours Worked:</p>
            <p>{staffDetails.hoursWorked}</p>
          </div>
          <div>
            <p className="font-semibold">Hourly Rate ($):</p>
            <p>{staffDetails.hourlyRate}</p>
          </div>
          <div>
            <p className="font-semibold">Total Pay ($):</p>
            <p>{staffDetails.hoursWorked * staffDetails.hourlyRate}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-4">
          <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">Edit Details</button>
          <button className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600">Delete Staff</button>
        </div>
      </div>
    </div>
  );
};

export default StaffDetails;
