import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import AcademiesPage from "./pages/AcademiesPage";
import AcademyDetailPage from "./pages/AcademyDetailPage";
import GuidePage from "./pages/GuidePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import ReviewNewPage from "./pages/ReviewNewPage";

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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
