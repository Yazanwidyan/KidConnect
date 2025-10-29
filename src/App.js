import "./index.scss";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import AdminSettings from "./pages/AdminSettings";
import Admissions from "./pages/Admissions";
import AdmissionsDashboard from "./pages/Admissions/AdmissionsDashboard";
import AdmissionsForms from "./pages/Admissions/AdmissionsForms";
import AdmissionsProcess from "./pages/Admissions/AdmissionsProcess";
import AdmissionsPrograms from "./pages/Admissions/AdmissionsPrograms";
import AdmissionsWaitlists from "./pages/Admissions/AdmissionsWaitlists";
import Billing from "./pages/Billing";
import BillingDashboard from "./pages/Billing/BillingDashboard";
import BillingLibrary from "./pages/Billing/BillingLibrary";
import BillingReports from "./pages/Billing/BillingReports";
import BillingSettings from "./pages/Billing/BillingSettings";
import BillingStudents from "./pages/Billing/BillingStudents";
import BillingSubsidies from "./pages/Billing/BillingSubsidies";
import Documents from "./pages/Documents";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import MySchoolParents from "./pages/MySchool/MySchoolParents";
import MySchoolRooms from "./pages/MySchool/MySchoolRooms";
import MySchoolSchedule from "./pages/MySchool/MySchoolSchedule";
import MySchoolStudentDetails from "./pages/MySchool/MySchoolStudentDetails";
import StudentAttachments from "./pages/MySchool/MySchoolStudentDetails/StudentAttachments";
import StudentDailyReports from "./pages/MySchool/MySchoolStudentDetails/StudentDailyReports";
import StudentFeed from "./pages/MySchool/MySchoolStudentDetails/StudentFeed";
import StudentFormAndRequests from "./pages/MySchool/MySchoolStudentDetails/StudentFormAndRequests";
import StudentLearning from "./pages/MySchool/MySchoolStudentDetails/StudentLearning";
import StudentProfile from "./pages/MySchool/MySchoolStudentDetails/StudentProfile";
import MySchoolStudents from "./pages/MySchool/MySchoolStudents";
import NotFound from "./pages/NotFound";
import Reporting from "./pages/Reporting";
import MySchoolStaff from "./pages/Staff";
import Staff from "./pages/Staff";
import StaffDetails from "./pages/Staff/StaffDetails";
import StaffMain from "./pages/Staff/StaffMain";
import StaffPayroll from "./pages/Staff/StaffPayroll";
import StaffTimecards from "./pages/Staff/StaffTimecards";

export default function App() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  // Handle ?lang=ar/en
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    let lang = searchParams.get("lang");

    if (!lang) {
      lang = i18n.language || "ar";
      searchParams.set("lang", lang);
      navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
    }

    if (lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  }, [location.search, i18n, navigate, location.pathname]);

  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* My School Section */}
        <Route path="/students" element={<MySchoolStudents />} />
        <Route path="/parents" element={<MySchoolParents />} />
        <Route path="/staff" element={<MySchoolStaff />} />
        <Route path="/rooms" element={<MySchoolRooms />} />
        <Route path="/schedules" element={<MySchoolSchedule />} />
        <Route path="/settings" element={<AdminSettings />} />
        <Route path="/messaging" element={<Messages />} />
        <Route path="/reporting" element={<Reporting />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/student" element={<MySchoolStudentDetails />}>
          <Route path="feed" element={<StudentFeed />} />
          <Route path="learning" element={<StudentLearning />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="attachments" element={<StudentAttachments />} />
          <Route path="daily-reports" element={<StudentDailyReports />} />
          <Route path="forms-and-requests" element={<StudentFormAndRequests />} />
          <Route index element={<Navigate to="feed" replace />} />
        </Route>
        <Route path="/admissions" element={<Admissions />}>
          <Route path="dashboard" element={<AdmissionsDashboard />} />
          <Route path="forms" element={<AdmissionsForms />} />
          <Route path="process" element={<AdmissionsProcess />} />
          <Route path="waitlists" element={<AdmissionsWaitlists />} />
          <Route path="programs" element={<AdmissionsPrograms />} />
          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>
        <Route path="/staff" element={<Staff />}>
          <Route path="staff" element={<StaffMain />} />
          <Route path="timecards" element={<StaffTimecards />} />
          <Route path="payroll" element={<StaffPayroll />} />
          <Route path="/staff/:id" element={<StaffDetails />} />
          <Route index element={<Navigate to="staff" replace />} />
        </Route>
        <Route path="/billing" element={<Billing />}>
          <Route path="dashboard" element={<BillingDashboard />} />
          <Route path="students" element={<BillingStudents />} />
          <Route path="subsidies" element={<BillingSubsidies />} />
          <Route path="library" element={<BillingLibrary />} />
          <Route path="reports" element={<BillingReports />} />
          <Route path="settings" element={<BillingSettings />} />
          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>
      </Routes>
    </AppLayout>
  );
}
