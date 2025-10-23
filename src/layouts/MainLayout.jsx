import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import LanguageSwitcher from "../components/LanguageSwitcher";

const MainLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            MyPortfolio
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden space-x-6 md:flex">
            <Link to="/" className="text-gray-700 transition hover:text-blue-600">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 transition hover:text-blue-600">
              About
            </Link>
            <Link to="/projects" className="text-gray-700 transition hover:text-blue-600">
              Projects
            </Link>
            <Link to="/contact" className="text-gray-700 transition hover:text-blue-600">
              Contact
            </Link>
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button className="hidden rounded-lg bg-blue-600 px-4 py-2 text-white shadow transition hover:bg-blue-700 md:inline">
              Get in Touch
            </button>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="bg-white shadow-lg md:hidden">
            <ul className="flex flex-col space-y-3 px-6 py-4">
              <li>
                <Link
                  to="/"
                  className="block text-gray-700 transition hover:text-blue-600"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block text-gray-700 transition hover:text-blue-600"
                  onClick={() => setMobileOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="block text-gray-700 transition hover:text-blue-600"
                  onClick={() => setMobileOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block text-gray-700 transition hover:text-blue-600"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white shadow transition hover:bg-blue-700">
                  Get in Touch
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-blue-50">{children}</main>

      {/* Footer */}
      <footer className="bg-white shadow-inner">
        <div className="container mx-auto px-6 py-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
