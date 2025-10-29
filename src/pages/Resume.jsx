// src/pages/Resume.jsx
import React, { useEffect } from "react";
import Header from "../components/Header";
import ContactCircle from "../components/ContactCircle";
import ResumeBackground from "../components/ResumeBackground";
import ResumeCard from "../components/ResumeCard";
// import TestBackground from "../components/TestBackground";
import "../css/reset.css";
import "../css/font.css";
import "../css/resume.css";
import "../css/resumeBackground.css";

function Resume() {
  useEffect(() => {
    // 페이지 진입 시 항상 상단으로 스크롤 초기화
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="resume-page">
      {/* 상단 고정 헤더 */}
      <Header />

      {/* 배경 원 + SCROLL 애니메이션 */}
      <ResumeBackground />

      {/* 기존 ResumeCard (정상 작동 중) */}
      <ResumeCard />
      {/* <TestBackground /> */}
      {/* 하단 ContactCircle */}
      <ContactCircle />
    </div>
  );
}

export default Resume;
