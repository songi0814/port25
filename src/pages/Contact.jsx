import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import ContactCircle from "../components/ContactCircle";
import "../css/contact-lines.css";

const Contact = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let animationId;

    const numLines = 18;
    const amplitude = 55;
    const frequency = 0.0025;
    let time = 0;

    const drawWave = (originX, originY, flip = 1, colors = []) => {
      for (let i = 0; i < numLines; i++) {
        ctx.beginPath();

        // 🎨 포트폴리오 컬러 기반 그라데이션 (컨셉 통합)
        const grad = ctx.createLinearGradient(0, 0, w, h);
        colors.forEach((c, idx) => grad.addColorStop(idx / (colors.length - 1), c));
        ctx.strokeStyle = grad;

        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.85;

        for (let x = -300; x <= w + 300; x += 8) {
          const y =
            Math.sin(x * frequency + time + i * 0.25) * amplitude * flip +
            originY +
            i * 10 * flip;
          ctx.lineTo(x + originX, y);
        }

        ctx.stroke();
      }
    };

    const render = () => {
      // 🌿 포트폴리오 배경 컬러
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, w, h);

      // 상단 오른쪽 곡선 (그린 톤)
      drawWave(w * 0.1, h * 0.08, 1, ["#bfa173", "#abff84", "#0ae448"]);

      // 하단 왼쪽 곡선 (핑크-오렌지 톤)
      drawWave(-w * 0.15, h * 0.9, -1, ["#f7bdf8", "#cd237f", "#ff8709"]);

      time += 0.008;
      animationId = requestAnimationFrame(render);
    };

    render();

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="contact" className="contact-section">
      {/* 공통 Header */}
      <Header />

      {/* 배경 Canvas */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <canvas ref={canvasRef} className="contact-canvas" />
      </div>

      <div className="contact-content">
        <h1>SONG I SONG</h1>
        <ul>
          <li><strong>Kakao Id </strong>thddltka</li>
          <li><strong>Email </strong>thddltka1995@gmail.com</li>
          <li><strong>Phone </strong>010.2963.0814</li>
        </ul>
      </div>

      <ContactCircle />
    </section>
  );
};

export default Contact;
