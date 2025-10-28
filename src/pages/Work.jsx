import React from "react";
import WorkSwiper from "../components/WorkSwiper";
import Header from "../components/Header";
import ContactCircle from "../components/ContactCircle";

const Work = () => {
  return (
    <div className="work-page">
      <Header />
      <WorkSwiper />
      <ContactCircle />
    </div>
  );
};

export default Work;
