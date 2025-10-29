import React from "react";
import "../css/resumeCard.css";

const ResumeCard = () => {
  const skills = [
    "photoshop",
    "illustrator",
    "figma",
    "premiere-pro",
    "vscode",
    "html",
    "css",
    "javascript",
    "react",
    "github",
  ];

  return (
    <>
      <div id="my-p" className="p1">
        <div className="card">
          <div className="c-item">
            <p className="card-title">Experience</p>
            <ul className="card-txts">
              <li><strong>하늘공원미술교습소</strong> 2021.03 - 2022.05</li>
              <li><strong>(주)굿비엠</strong> 2022.05 - 2024.05</li>
              <li><strong>SIS 신인수 유학원</strong> 2024.07 - 2024.11</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="my-p" className="p2">
        <div className="card">
          <div className="c-item">
            <p className="card-title">Education</p>
            <ul className="card-txts">
              <li><strong>상명대학교 부속여자고등학교</strong> 2013 (졸업)</li>
              <li><strong>동덕여자대학교 디지털공예과</strong> 2015 - 2020 (졸업)</li>
              <li><strong>Miami University</strong> 2018.08 - 2019.01 (어학연수)</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="my-p" className="p3">
        <div className="card">
          <div className="c-item">
            <p className="card-title">Skills</p>
            <ul className="card-txts">
              {skills.map((tool) => (
                <li key={tool}>
                  <img src={`${import.meta.env.BASE_URL}img/${tool}.png`} alt={tool} />
                  <strong>{tool.replace("-", " ").toUpperCase()}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </>
  );
};

export default ResumeCard;
