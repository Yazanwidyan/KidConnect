import React from "react";

export default function SharedFiles() {
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Shared Files</h2>
      <p className="mb-6 text-gray-600">
        Access and manage shared documents for students, staff, and the school.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-lg bg-white p-4 shadow">
          <h3 className="mb-2 font-semibold text-gray-700">Student Documents</h3>
          <p className="text-sm text-gray-500">View uploaded student files.</p>
        </div>
        <div className="rounded-lg bg-white p-4 shadow">
          <h3 className="mb-2 font-semibold text-gray-700">Staff Documents</h3>
          <p className="text-sm text-gray-500">Staff contracts, certificates, and policies.</p>
        </div>
        <div className="rounded-lg bg-white p-4 shadow">
          <h3 className="mb-2 font-semibold text-gray-700">Shared Resources</h3>
          <p className="text-sm text-gray-500">School-wide documents and templates.</p>
        </div>
      </div>
    </div>
  );
}
