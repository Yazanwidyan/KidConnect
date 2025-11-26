import React from "react";

import { useAdmissions } from "../../context/AdmissionsContext";

const AdmissionsPrograms = () => {
  const { programs } = useAdmissions();

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-semibold">Admissions Programs</h1>

      {programs.length === 0 ? (
        <p className="text-gray-500">No programs available.</p>
      ) : (
        <ul className="space-y-3">
          {programs.map((program) => (
            <li key={program.id} className="rounded border border-gray-300 bg-white px-4 py-3 shadow">
              {program.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdmissionsPrograms;
