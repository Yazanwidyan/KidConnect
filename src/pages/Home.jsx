import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import LanguageSwitcher from "../components/LanguageSwitcher";

const Home = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto space-y-8 px-6 py-12" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 md:text-5xl">Home Page</h1>
        <p className="text-lg text-gray-700">Welcome to our website! This is the home page.</p>
        <button
          className="mt-4 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-blue-700"
          onClick={() => navigate("/about")}
        >
          Go to About Page
        </button>
      </div>

      {/* Optional Features / Highlights */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-2xl">
          <h3 className="text-xl font-semibold text-gray-800">Feature 1</h3>
          <p className="mt-2 text-gray-600">Short description about feature 1.</p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-2xl">
          <h3 className="text-xl font-semibold text-gray-800">Feature 2</h3>
          <p className="mt-2 text-gray-600">Short description about feature 2.</p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-2xl">
          <h3 className="text-xl font-semibold text-gray-800">Feature 3</h3>
          <p className="mt-2 text-gray-600">Short description about feature 3.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
