import "./index.scss";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

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
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}
