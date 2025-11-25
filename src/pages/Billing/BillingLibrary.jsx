import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const initialPlans = [
  { id: 1, plan: "2s", freq: "Weekly", charges: "2s", amount: "$140.00" },
  {
    id: 2,
    plan: "2s (once Potty Trained)",
    freq: "Weekly",
    charges: "2s (once Potty Trained)",
    amount: "$135.00",
  },
  { id: 3, plan: "3s", freq: "Weekly", charges: "3s", amount: "$150.00" },
];

export default function BillingLibrary() {
  const [plans, setPlans] = useState(initialPlans);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);
  const [formData, setFormData] = useState({
    plan: "",
    freq: "",
    charges: "",
    amount: "",
  });

  const filteredPlans = plans.filter((p) => p.plan.toLowerCase().includes(search.toLowerCase()));

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPlan) {
      setPlans(plans.map((p) => (p.id === editingPlan.id ? { ...editingPlan, ...formData } : p)));
    } else {
      setPlans([...plans, { id: Date.now(), ...formData }]);
    }
    setFormData({ plan: "", freq: "", charges: "", amount: "" });
    setEditingPlan(null);
    setModalOpen(false);
  };

  const handleEdit = (plan) => {
    setEditingPlan(plan);
    setFormData({ ...plan });
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this plan?")) {
      setPlans(plans.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="w-full p-6">
      <h1 className="mb-4 text-2xl font-semibold">Billing Library</h1>

      {/* Tabs */}
      <div className="mb-6 flex gap-6 border-b pb-2 text-sm">
        <button className="border-b-2 border-blue-600 pb-2 text-blue-600">Plan Templates</button>
        <button className="text-gray-600 hover:text-black">Fixed Charges</button>
        <button className="text-gray-600 hover:text-black">Variable Charges</button>
        <button className="text-gray-600 hover:text-black">Categories</button>
      </div>

      <p className="mb-4 w-3/4 text-sm text-gray-600">
        The Plan Template Library allows you to create and edit billing plan templates. Changes made here will
        not affect previously created billing plans.
      </p>

      {/* Filters */}
      <div className="mb-4 flex flex-wrap items-center gap-4">
        <div className="relative w-64">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search plan templates..."
            className="w-full rounded-lg border py-2 pl-10 pr-3 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select className="w-40 rounded-lg border px-3 py-2 text-sm">
          <option>Billing frequency</option>
        </select>

        <button
          className="ml-auto rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
          onClick={() => setModalOpen(true)}
        >
          Create a new plan template
        </button>
      </div>

      {/* Table */}
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full rounded-lg bg-white shadow">
          <thead>
            <tr className="border-b text-left text-gray-600">
              <th className="px-4 py-3">Billing plan</th>
              <th className="px-4 py-3">Billing frequency</th>
              <th className="px-4 py-3">Charges</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlans.map((row) => (
              <tr key={row.id} className="border-b hover:bg-gray-50">
                <td className="cursor-pointer px-4 py-3 text-blue-600">{row.plan}</td>
                <td className="px-4 py-3">{row.freq}</td>
                <td className="px-4 py-3">{row.charges}</td>
                <td className="px-4 py-3">{row.amount}</td>
                <td className="space-x-2 px-4 py-3">
                  <button
                    onClick={() => handleEdit(row)}
                    className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(row.id)}
                    className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold text-gray-700">
              {editingPlan ? "Edit Plan Template" : "New Plan Template"}
            </h3>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                type="text"
                name="plan"
                placeholder="Billing Plan"
                className="rounded border px-3 py-2"
                value={formData.plan}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="freq"
                placeholder="Billing Frequency"
                className="rounded border px-3 py-2"
                value={formData.freq}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="charges"
                placeholder="Charges"
                className="rounded border px-3 py-2"
                value={formData.charges}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="amount"
                placeholder="Amount"
                className="rounded border px-3 py-2"
                value={formData.amount}
                onChange={handleInputChange}
                required
              />
              <div className="mt-4 flex justify-end gap-2">
                <button
                  type="button"
                  className="rounded border px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setModalOpen(false);
                    setEditingPlan(null);
                    setFormData({ plan: "", freq: "", charges: "", amount: "" });
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className="rounded bg-primary px-4 py-2 text-white hover:bg-blue-600">
                  {editingPlan ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
