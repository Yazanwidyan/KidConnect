import React from "react";

export default function FormsRequests() {
  const data = [
    { form: "2026 day care enrollment", type: "Fillable document", reviews: 0, due: "-", status: "Unshared" },
    {
      form: "A new form for all multi-site locations",
      type: "Form",
      reviews: 0,
      due: "-",
      status: "Unshared",
    },
    { form: "Immunizations", type: "Document request", reviews: 0, due: "Nov 24, 2025", status: "Shared" },
    { form: "Infant allergies 2025 - 2026", type: "Form", reviews: 1, due: "-", status: "Shared" },
    {
      form: "Nebulizer care consent/verification",
      type: "Fillable document",
      reviews: 0,
      due: "-",
      status: "Unshared",
    },
    { form: "Outdoor play survey", type: "Form", reviews: 0, due: "-", status: "Unshared" },
    { form: "PDF upload", type: "Fillable document", reviews: 1, due: "-", status: "Shared" },
  ];

  return (
    <div className="w-full p-6">
      <h2 className="mb-2 text-2xl font-semibold">Forms & requests</h2>

      <div className="mb-4 mt-6 flex gap-4">
        <input type="text" placeholder="Search" className="w-60 rounded-lg border px-3 py-2 text-sm" />
        <select className="w-40 rounded-lg border px-3 py-2 text-sm">
          <option>Status</option>
        </select>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" /> Show only forms that need review
        </label>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full rounded-lg bg-white shadow">
          <thead>
            <tr className="border-b text-left text-gray-600">
              <th className="px-4 py-3">Form</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Reviews needed</th>
              <th className="px-4 py-3">Due</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="cursor-pointer px-4 py-3 text-blue-600">{row.form}</td>
                <td className="px-4 py-3">{row.type}</td>
                <td className="px-4 py-3">{row.reviews}</td>
                <td className="px-4 py-3">{row.due}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs shadow ${
                      row.status === "Shared" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
