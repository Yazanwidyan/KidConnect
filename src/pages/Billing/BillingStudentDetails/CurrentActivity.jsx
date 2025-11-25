import React from "react";

// Sample activities for a single student
const studentActivities = [
  { id: 1, activity: "Math Class", status: "Ongoing", time: "10:00 AM - 11:00 AM" },
  { id: 2, activity: "Science Lab", status: "Ongoing", time: "11:30 AM - 12:30 PM" },
];

const CurrentActivity = ({ studentName }) => {
  return (
    <div className="p-6 font-sans">
      <h2 className="mb-4 text-2xl font-semibold">{studentName}'s Current Activity</h2>

      {studentActivities.length === 0 ? (
        <p className="text-gray-500">No activities are currently in progress.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2">Activity</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {studentActivities.map((act) => (
                <tr key={act.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{act.activity}</td>
                  <td className="px-4 py-2">{act.status}</td>
                  <td className="px-4 py-2">{act.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CurrentActivity;
