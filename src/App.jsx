import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Resume from "./pages/Resume";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

const App = () => {
  const location = useLocation();

  // ✅ 현재 경로가 "/" (메인페이지)일 때 헤더 숨김
  const isMainPage = location.pathname === "/";

  return (
    <>
      {/* ✅ 메인 페이지가 아닐 때만 헤더 렌더링 */}
      {!isMainPage && <Header />}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
