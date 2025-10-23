import "./index.scss";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import AdminSettings from "./pages/AdminSettings";
import Attendance from "./pages/Attendance";
import Billing from "./pages/Billing";
import Classes from "./pages/Classes";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import NotFound from "./pages/NotFound";
import Schedule from "./pages/Schedule";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";

export default function App() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const [userRole, setUserRole] = useState("branchAdmin"); // or 'branchAdmin', superAdmin

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    let lang = searchParams.get("lang");

    if (!lang) {
      lang = i18n.language || "ar";
      searchParams.set("lang", lang);
      navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
    }

    if (lang !== i18n.language) i18n.changeLanguage(lang);
  }, [location.search, i18n, navigate, location.pathname]);

  return (
    <AppLayout userRole={userRole}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/settings" element={<AdminSettings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppLayout>
  );
}
