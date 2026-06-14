import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import AcademiesPage from "./pages/AcademiesPage";
import AcademyDetailPage from "./pages/AcademyDetailPage";
import ContactPage from "./pages/ContactPage";
import CopyrightPage from "./pages/CopyrightPage";
import DataPolicyPage from "./pages/DataPolicyPage";
import GuidePage from "./pages/GuidePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import PrivacyPage from "./pages/PrivacyPage";
import ReportInfoPage from "./pages/ReportInfoPage";
import ReviewReportPage from "./pages/ReviewReportPage";
import ReviewPolicyPage from "./pages/ReviewPolicyPage";
import ReviewNewPage from "./pages/ReviewNewPage";
import TermsPage from "./pages/TermsPage";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/academies" element={<AcademiesPage />} />
        <Route path="/academies/:id" element={<AcademyDetailPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/review/new" element={<ReviewNewPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/report-info" element={<ReportInfoPage />} />
        <Route path="/report-review" element={<ReviewReportPage />} />
        <Route path="/review-policy" element={<ReviewPolicyPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/copyright" element={<CopyrightPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/data-policy" element={<DataPolicyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}
