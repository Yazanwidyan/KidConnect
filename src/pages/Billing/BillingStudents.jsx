import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialStudents = [
  {
    id: 1,
    name: "Adam Smith",
    balance: "$200",
    payer: "John Smith",
    method: "Credit Card",
    autopay: "Enabled",
    plan: "Full-time",
  },
  {
    id: 2,
    name: "Emma Johnson",
    balance: "$50",
    payer: "",
    method: "Bank Transfer",
    autopay: "Disabled",
    plan: "",
  },
];

const BillingStudents = () => {
  const navigate = useNavigate();

  const [students, setStudents] = useState(initialStudents);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [payerName, setPayerName] = useState("");
  const [billingPlan, setBillingPlan] = useState("");
  const [modalType, setModalType] = useState(""); // "payer" or "plan"

  const openPayerModal = (student) => {
    setSelectedStudent(student);
    setPayerName(student.payer || "");
    setBillingPlan("");
    setModalType("payer");
    setModalOpen(true);
  };

  const openPlanModal = (student) => {
    setSelectedStudent(student);
    setBillingPlan(student.plan || "");
    setPayerName("");
    setModalType("plan");
    setModalOpen(true);
  };

  const handleSave = () => {
    setStudents(
      students.map((s) =>
        s.id === selectedStudent.id
          ? {
              ...s,
              payer: modalType === "payer" ? payerName : s.payer,
              plan: modalType === "plan" ? billingPlan : s.plan,
            }
          : s
      )
    );
    setModalOpen(false);
    setSelectedStudent(null);
    setPayerName("");
    setBillingPlan("");
    setModalType("");
  };

  return (
    <div className="p-6 font-sans">
      <h2 className="mb-4 text-2xl font-semibold">Billing Students</h2>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-yellow-100">
            <tr>
              <th className="px-4 py-2 text-left">Student Name</th>
              <th className="px-4 py-2 text-left">Account Balance</th>
              <th className="px-4 py-2 text-left">Payer & Method</th>
              <th className="px-4 py-2 text-left">Autopay</th>
              <th className="px-4 py-2 text-left">Billing Plan</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td onClick={() => navigate("/billing/student/current-activity")} className="px-4 py-2">
                  {student.name}
                </td>
                <td className="px-4 py-2">{student.balance}</td>
                <td className="px-4 py-2">
                  {student.payer ? (
                    <>
                      {student.payer} ({student.method})
                      <button
                        onClick={() => openPayerModal(student)}
                        className="ml-2 rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-600"
                      >
                        Edit
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => openPayerModal(student)}
                      className="mt-1 rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
                    >
                      Add Payer
                    </button>
                  )}
                </td>
                <td className="px-4 py-2">{student.autopay}</td>
                <td className="px-4 py-2">
                  {student.plan ? (
                    <>
                      {student.plan}
                      <button
                        onClick={() => openPlanModal(student)}
                        className="ml-2 rounded bg-green-500 px-2 py-1 text-white hover:bg-green-600"
                      >
                        Edit
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => openPlanModal(student)}
                      className="mt-1 rounded bg-green-500 px-3 py-1 text-white hover:bg-green-600"
                    >
                      Add Plan
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold text-gray-700">
              {modalType === "payer"
                ? `Add/Edit Payer for ${selectedStudent.name}`
                : `Add/Edit Plan for ${selectedStudent.name}`}
            </h3>

            {modalType === "payer" ? (
              <input
                type="text"
                className="w-full rounded border px-3 py-2"
                value={payerName}
                onChange={(e) => setPayerName(e.target.value)}
                placeholder="Enter Payer Name"
              />
            ) : (
              <select
                className="w-full rounded border px-3 py-2"
                value={billingPlan}
                onChange={(e) => setBillingPlan(e.target.value)}
              >
                <option value="">Select Billing Plan</option>
                <option>Full-time</option>
                <option>Part-time</option>
              </select>
            )}

            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setModalOpen(false)}
                className="rounded border px-4 py-2 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillingStudents;
