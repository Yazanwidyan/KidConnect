import React from "react";
import { FiEdit3, FiFileText } from "react-icons/fi";

const AdmissionsForms = () => {
  const forms = [
    { id: 1, name: "Enrollment Form", type: "Student", reviews: "2 reviews" },
    { id: 2, name: "Health Information", type: "Medical", reviews: "1 review" },
    { id: 3, name: "Parent Agreement", type: "Legal", reviews: "3 reviews" },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Admissions Forms</h1>
        <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          <FiEdit3 /> New Form
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-50 text-sm uppercase text-gray-600">
            <tr>
              <th className="px-6 py-3 text-left font-medium">Form Name</th>
              <th className="px-6 py-3 text-left font-medium">Type</th>
              <th className="px-6 py-3 text-left font-medium">Reviews Needed</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {forms.map((form) => (
              <tr key={form.id} className="border-t transition-colors hover:bg-gray-50">
                <td className="flex items-center gap-2 px-6 py-3">
                  <FiFileText className="text-blue-600" />
                  {form.name}
                </td>
                <td className="px-6 py-3">{form.type}</td>
                <td className="px-6 py-3">{form.reviews}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdmissionsForms;
