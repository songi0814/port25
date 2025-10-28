import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import { createNoise2D } from "simplex-noise";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import ContactCircle from "../components/ContactCircle";
import "../css/reset.css";
import "../css/font.css";
import "../css/resume.css";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Resume = () => {
  useEffect(() => {
    const content = document.querySelector("#content");
    const noise2D = createNoise2D();

    for (let i = 0; i < 2500; i++) {
      const div = document.createElement("div");
      div.classList.add("circle-resume");
      const n1 = noise2D(i * 0.003, i * 0.0033);
      const n2 = noise2D(i * 0.002, i * 0.001);

      const style = {
        transform: `translate(${n2 * 200}px) rotate(${n2 * 270}deg) scale(${3 + n1 * 2}, ${3 + n2 * 2})`,
        boxShadow: `0 0 0 .2px hsla(${Math.floor(i * 0.3)}, 70%, 70%, .6)`
      };
      Object.assign(div.style, style);
      content.appendChild(div);
    }

    const circles = document.querySelectorAll(".circle-resume");

    const smoother = ScrollSmoother.create({
      content: "#content",
      wrapper: "#wrapper",
      smooth: 1,
      effects: false,
    });

    const main = gsap.timeline({
      scrollTrigger: {
        scrub: 0.7,
        start: "top 25%",
        end: "bottom bottom",
      },
    });

    circles.forEach((circle) => {
      main.to(circle, { opacity: 1 });
    });
  }, []);

  return (
    <div className="resume-page">
      <Header />
      <ContactCircle />
      <div id="wrapper">
        <div id="content">
          <div className="scroll">
            <span>SCROLL</span>
            <svg viewBox="0 0 24 24">
              <line className="st1" x1="12" y1="1" x2="12" y2="22.5" />
              <line className="st1" x1="12.1" y1="22.4" x2="18.9" y2="15.6" />
              <line className="st1" x1="11.9" y1="22.4" x2="5.1" y2="15.6" />
            </svg>
          </div>
        </div>
      </div>

      <div id="my-p" className="p1"> 
        <div className="exp card">
          <div className="c-item c1">
            <p className="card-title">Experience</p>
            <ul className="card-txts">
              <li><strong>하늘공원미술교습소</strong>2021.03 - 2022.05</li>
              <li><strong>(주)굿비엠</strong>2022.05 - 2024.05</li>
              <li><strong>SIS 신인수 유학원</strong>2024.07 - 2024.11</li>
            </ul>
          </div>
        </div>
      </div>
      
      
      <div id="my-p" className="p2">
        <div className="edu card">
          <div className="c-item c2">
            <p className="card-title">Education</p>
            <ul className="card-txts">
              <li><strong>상명대학교 부속여자고등학교</strong>2013 (졸업)</li>
              <li><strong>동덕여자대학교 디지털공예과</strong>2015 - 2020(졸업)</li>
              <li><strong>Miami University</strong>2018.08 - 2019.01(어학연수)</li>
            </ul>
          </div>
        </div>
      </div>
    
      <div id="my-p" className="p3">
        <div className="skills card">
          <div className="c-item c3">
            <p className="card-title">Skills</p>
            <ul className="card-txts">
              <li>
                <img src="../../public/img/photoshop.png" alt="포토샵 아이콘" />
                <strong>Photoshop</strong>
              </li>
              <li>
                <img src="../../public/img/illustrator.png" alt="일러스트레이션 아이콘" />
                <strong>Illustration</strong>
              </li>
              <li>
                <img src="../../public/img/figma.png" alt="피그마 아이콘" />
                <strong>Figma</strong>
              </li>
              <li>
                <img src="../../public/img/premiere-pro.png" alt="프리미어프로 아이콘" />
                <strong>Premiere Pro</strong>
              </li>
              <li>
                <img src="../../public/img/vscode.png" alt="vs code 아이콘" />
                <strong>VS code</strong>
              </li>
              <li>
                <img src="../../public/img/html.png" alt="html 아이콘" />
                <strong>HTML</strong>
              </li>
              <li>
                <img src="../../public/img/css.png" alt="css 아이콘" />
                <strong>CSS</strong>
              </li>
              <li>
                <img src="../../public/img/javascript.png" alt="자바스크립트 아이콘" />
                <strong>Java Script</strong>
              </li>
              <li>
                <img src="../../public/img/react.png" alt="리엑션 아이콘" />
                <strong>React</strong>
              </li>
              <li>
                <img src="../../public/img/github.png" alt="깃헙 아이콘" />
                <strong>Github</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Resume;
