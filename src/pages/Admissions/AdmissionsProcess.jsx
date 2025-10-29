import React, { useState } from "react";
import { BsCheckSquare } from "react-icons/bs";
import { FiFileText, FiMenu, FiMoreVertical, FiPlus, FiTrash2 } from "react-icons/fi";

const AdmissionsProcess = () => {
  const [steps, setSteps] = useState([
    {
      id: 1,
      title: "Submit initial enrollment form",
      tasks: [{ id: 1, name: "Enrollment Form", required: true }],
    },
    {
      id: 2,
      title: "Submit Program preference",
      tasks: [{ id: 1, name: "Program Selection", required: true }],
    },
  ]);

  const handleAddTask = (stepId) => {
    const newSteps = steps.map((step) =>
      step.id === stepId
        ? {
            ...step,
            tasks: [...step.tasks, { id: Date.now(), name: "New Task", required: false }],
          }
        : step
    );
    setSteps(newSteps);
  };

  const handleDeleteTask = (stepId, taskId) => {
    const newSteps = steps.map((step) =>
      step.id === stepId
        ? {
            ...step,
            tasks: step.tasks.filter((task) => task.id !== taskId),
          }
        : step
    );
    setSteps(newSteps);
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">New Student Enrollment</h1>
          <div className="mt-2 flex space-x-4 border-b pb-2 text-sm text-gray-600">
            <button className="font-medium hover:text-blue-600">Student Progress</button>
            <button className="border-b-2 border-blue-600 font-medium text-blue-600">Process Steps</button>
            <button className="font-medium hover:text-blue-600">Settings</button>
          </div>
        </div>

        <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Actions <FiMoreVertical />
        </button>
      </div>

      {/* Steps */}
      {steps.map((step) => (
        <div key={step.id} className="mb-6 rounded-xl border border-gray-200 bg-gray-50 p-4">
          {/* Step Header */}
          <div className="mb-4 flex items-center gap-3">
            <span className="text-lg font-medium text-gray-500">{step.id}</span>
            <h2 className="text-lg font-semibold text-gray-800">{step.title}</h2>
          </div>

          {/* Task List */}
          {step.tasks.map((task) => (
            <div
              key={task.id}
              className="mb-2 flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <FiMenu className="text-gray-400" />
                <FiFileText className="text-blue-600" />
                <span className="font-medium text-gray-800">{task.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-1 text-sm text-gray-600">
                  <input type="checkbox" checked={task.required} readOnly className="accent-blue-600" />
                  Required?
                </label>
                <button
                  onClick={() => handleDeleteTask(step.id, task.id)}
                  className="text-gray-500 hover:text-red-600"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}

          {/* Add Task */}
          <button
            onClick={() => handleAddTask(step.id)}
            className="mt-2 flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
          >
            <FiPlus /> Add task
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdmissionsProcess;
