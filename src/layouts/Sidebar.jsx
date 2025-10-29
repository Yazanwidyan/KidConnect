import React, { useState } from "react";
import {
  FaChevronDown,
  FaComments,
  FaGift,
  FaHome,
  FaMoneyBillWave,
  FaQuestionCircle,
  FaSchool,
  FaUserPlus,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [openSchool, setOpenSchool] = useState(true);
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-64 flex-col bg-[#3A49F9] text-white shadow-lg">
      {/* Logo */}
      <div className="border-b border-white/10 p-4 text-center text-2xl font-bold tracking-wide">
        KidConnect
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1 px-2 py-3">
          {/* Home */}
          <li>
            <Link
              to="/"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-white/10 ${
                location.pathname === "/" ? "bg-white/20" : ""
              }`}
            >
              <FaHome />
              <span>Home</span>
            </Link>
          </li>

          {/* My School Dropdown */}
          <li>
            <button
              onClick={() => setOpenSchool(!openSchool)}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 transition hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <FaSchool />
                <span>My School</span>
              </div>
              <FaChevronDown className={`transition-transform ${openSchool ? "rotate-180" : ""}`} />
            </button>

            {openSchool && (
              <ul className="ml-8 mt-1 space-y-1 text-sm">
                {["students", "parents", "rooms", "schedules", "menu", "settings"].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item}`}
                      className={`block rounded-lg px-3 py-2 hover:bg-white/10 ${
                        location.pathname === `/${item}` ? "bg-white/20" : ""
                      }`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Messaging */}
          <li>
            <Link
              to="/messaging"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-white/10 ${
                location.pathname === "/messaging" ? "bg-white/20" : ""
              }`}
            >
              <FaComments />
              <span>Messaging</span>
            </Link>
          </li>

          {/* Admissions */}
          <li>
            <Link
              to="/admissions/dashboard"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-white/10 ${
                location.pathname.startsWith("/admissions") ? "bg-white/20" : ""
              }`}
            >
              <FaUserPlus />
              <span>Admissions</span>
            </Link>
          </li>
          {/* Admissions */}
          <li>
            <Link
              to="/staff/staff"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-white/10 ${
                location.pathname.startsWith("/staff") ? "bg-white/20" : ""
              }`}
            >
              <FaUserPlus />
              <span>Staff and payroll</span>
            </Link>
          </li>

          {/* Billing */}
          <li>
            <Link
              to="/billing/dashboard"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-white/10 ${
                location.pathname === "/billing" ? "bg-white/20" : ""
              }`}
            >
              <FaMoneyBillWave />
              <span>Billing</span>
            </Link>
          </li>
          <li>
            <Link
              to="/documents"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-white/10 ${
                location.pathname === "/documents" ? "bg-white/20" : ""
              }`}
            >
              <FaComments />
              <span>Documents</span>
            </Link>
          </li>
          <li>
            <Link
              to="/reporting"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-white/10 ${
                location.pathname === "/reporting" ? "bg-white/20" : ""
              }`}
            >
              <FaComments />
              <span> Reporting </span>
            </Link>
          </li>

          {/* Free Month */}
          <li>
            <Link
              to="/free-month"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-white/10 ${
                location.pathname === "/free-month" ? "bg-white/20" : ""
              }`}
            >
              <FaGift />
              <span>Free Month!</span>
            </Link>
          </li>

          {/* Help */}
          <li>
            <Link
              to="/help"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-white/10 ${
                location.pathname === "/help" ? "bg-white/20" : ""
              }`}
            >
              <FaQuestionCircle />
              <span>Help</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Workspace Box */}
      <div className="m-3 mt-auto rounded-lg bg-white/10 p-3 text-sm">
        <p className="text-gray-200">Workspace</p>
        <p className="font-semibold">ABC Academy</p>
      </div>
    </aside>
  );
};

export default Sidebar;
