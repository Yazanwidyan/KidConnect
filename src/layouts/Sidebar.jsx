import React, { useState } from "react";
import {
  FaBars,
  FaBuilding,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaCog,
  FaEnvelope,
  FaMoneyBillAlt,
  FaTachometerAlt,
  FaTimes,
  FaUserGraduate,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import { permissions } from "../config/permissions";

const Sidebar = ({ userRole, selectedBranch, setSelectedBranch, branches }) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItemsMap = {
    dashboard: { name: "Dashboard", icon: <FaTachometerAlt />, path: "/" },
    students: { name: "Students", icon: <FaUserGraduate />, path: "/students" },
    attendance: { name: "Attendance", icon: <FaCalendarAlt />, path: "/attendance" },
    teachers: { name: "Teachers", icon: <FaChalkboardTeacher />, path: "/teachers" },
    classes: { name: "Classes", icon: <FaChalkboardTeacher />, path: "/classes" },
    schedule: { name: "Schedule", icon: <FaCalendarAlt />, path: "/schedule" },
    messages: { name: "Messages", icon: <FaEnvelope />, path: "/messages" },
    billing: { name: "Billing", icon: <FaMoneyBillAlt />, path: "/billing" },
    settings: { name: "Settings", icon: <FaCog />, path: "/settings" },
    branches: { name: "Branches", icon: <FaBuilding />, path: "/branches" },
  };

  const menuItems = permissions[userRole].map((key) => menuItemsMap[key]);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="flex items-center justify-between bg-white p-4 shadow-md md:hidden">
        <h1 className="text-primary text-xl font-bold">KidConnect</h1>
        <button onClick={() => setMobileOpen(true)} className="text-gray-600">
          <FaBars size={24} />
        </button>
      </div>

      {/* Branch selector */}
      {userRole === "superAdmin" && branches.length > 1 && (
        <div className="hidden p-4 md:block">
          <label className="font-medium">Select Branch:</label>
          <select
            className="mt-2 w-full rounded border px-3 py-2"
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
          >
            {branches.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside
        className={`hidden flex-col bg-white shadow-md transition-all duration-300 md:flex ${
          collapsed ? "w-20" : "w-64"
        } min-h-screen`}
      >
        <div className="flex items-center justify-between border-b p-4">
          {!collapsed && <h1 className="text-primary text-xl font-bold">KidConnect</h1>}
          <button onClick={() => setCollapsed(!collapsed)} className="text-gray-600 hover:text-gray-900">
            {collapsed ? "»" : "«"}
          </button>
        </div>
        <nav className="mt-4 flex-1 overflow-y-auto">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 rounded px-4 py-3 transition hover:bg-blue-50 ${
                    location.pathname === item.path ? "bg-blue-100 font-semibold" : ""
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setMobileOpen(false)}></div>
          <aside className="relative z-50 flex w-64 flex-col bg-white shadow-md">
            <div className="flex items-center justify-between border-b p-4">
              <h1 className="text-primary text-xl font-bold">KidConnect</h1>
              <button onClick={() => setMobileOpen(false)} className="text-gray-600">
                <FaTimes size={24} />
              </button>
            </div>
            {userRole === "superAdmin" && branches.length > 1 && (
              <div className="p-4">
                <label className="font-medium">Select Branch:</label>
                <select
                  className="mt-2 w-full rounded border px-3 py-2"
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                >
                  {branches.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <nav className="mt-4 flex-1 overflow-y-auto">
              <ul className="space-y-1">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 rounded px-4 py-3 transition hover:bg-blue-50 ${
                        location.pathname === item.path ? "bg-blue-100 font-semibold" : ""
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
};

export default Sidebar;
