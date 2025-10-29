import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import "../css/ContactCircle.css";
import workImg from "/img/work.png";

const ContactCircle = () => {
  const navigate = useNavigate();

  // ✅ ContactCircle 등장 애니메이션
  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.from(".contact-fixed", { opacity: 0, y: 50, duration: 1, ease: "power2.out" });
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  // ✅ 클릭 시 Contact.jsx 페이지로 이동
  const handleClick = () => {
    navigate("/contact"); // ⚠️ 기존 "../pages/Contact.jsx" → 올바른 경로 "/contact"
  };

  const radius = 80;
  const text = ["c", "o", "n", "t", "a", "c", "t", "*", "m", "e", "*"];

  return (
    <div id="contact-circle" className="contact-fixed page-content">
      <button className="contact-btn" onClick={handleClick}>
        <p className="circle-text">
          {text.map((char, i) => {
            const angle = (360 / text.length) * i;
            const transform = `rotate(${angle.toFixed(2)}deg) translate(${radius}px) rotate(90deg)`;
            return (
              <span key={i} style={{ transform }}>
                {char}
              </span>
            );
          })}
        </p>

        <div className="contact-img-wrap">
          <div className="contact-img-bg">
            <img src={workImg} alt="contact icon" className="contact-img" />
          </div>
        </div>
      </button>
    </div>
  );
};

export default ContactCircle;
