import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { Link, useLocation } from "react-router-dom";

import "../css/reset.css";
import "../css/font.css";
import "../css/main.css";

gsap.registerPlugin(Draggable, InertiaPlugin);

const Main = () => {
  const posterRef = useRef(null);
  const circleRef = useRef(null);
  const portfolioRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const poster = posterRef.current;
    const circle = circleRef.current;
    const portfolio = portfolioRef.current;
    if (!poster || !circle || !portfolio) return;

    // 🎨 색상 랜덤 함수들
    const gradients = [
      "--gradient-macha",
      "--gradient-orange-crush",
      "--gradient-lipstick",
      "--gradient-purple-haze",
      "--gradient-skyfall",
      "--gradient-emerald-city",
      "--gradient-summer-fair",
    ];

    const circleColors = [
      "--color-shockingly-green",
      "--color-surface-white",
      "--color-pink",
      "--color-shockingly-pink",
      "--color-orangey",
      "--color-lilac",
      "--color-lt-green",
      "--color-blue",
    ];

    const letterColors = [
      "--grey-dark",
      "--light",
      "--green",
      "--green-dark",
      "--green-light",
      "--blue",
      "--purple",
      "--red",
      "--orange",
    ];

    const getCSSVarValue = (varName) =>
      getComputedStyle(document.documentElement)
        .getPropertyValue(varName)
        .trim();

    const getRandomItem = (array) =>
      array[Math.floor(Math.random() * array.length)];

    const randomizeVisuals = () => {
      const gradientValue = getComputedStyle(poster)
        .getPropertyValue(getRandomItem(gradients))
        .trim();
      poster.style.background = gradientValue;
      circle.style.backgroundColor = getCSSVarValue(getRandomItem(circleColors));
      portfolio.style.color = getCSSVarValue(getRandomItem(letterColors));
    };

    // 🔁 GSAP 세팅
    const shapes = gsap.utils.toArray(".letter", portfolioRef.current);
    const proxy = document.createElement("div");
    const progressWrap = gsap.utils.wrap(0, 1);
    const wrapRotation = gsap.utils.wrap(-90, 90);
    const initialRotationOffset = -36.25;
    const letterPos = [0, 11, 22, 33, 44, 55, 66, 77, 88];
    const screenRange = gsap.utils.mapRange(0, 2000, 500, 4500);

    let dragDistancePerRotation = screenRange(window.innerWidth);
    let startProgress;

    const adjustRadius = () => {
      const radius = Math.min(window.innerWidth * 0.5, 650, window.innerHeight * 0.43);
      gsap.set(shapes, {
        xPercent: -50,
        yPercent: -50,
        transformOrigin: `50% 50% ${-radius}px`,
      });
    };

    // 회전 애니메이션
    const spin = gsap.fromTo(
      shapes,
      { rotationY: (i) => letterPos[i] + initialRotationOffset },
      {
        rotationY: "-=360",
        modifiers: {
          rotationY: (value) => wrapRotation(parseFloat(value)) + "deg",
        },
        duration: 10,
        ease: "none",
        repeat: -1,
      }
    );

    const updateRotation = function () {
      const p = startProgress + (this.startX - this.x) / dragDistancePerRotation;
      spin.progress(progressWrap(p));
    };

    Draggable.create(proxy, {
      trigger: portfolio,
      type: "x",
      inertia: true,
      allowNativeTouchScrolling: true,
      onPress() {
        gsap.killTweensOf(spin);
        spin.timeScale(0);
        startProgress = spin.progress();
      },
      onDrag: updateRotation,
      onThrowUpdate: updateRotation,
      onRelease() {
        if (!this.tween || !this.tween.isActive()) {
          gsap.to(spin, { timeScale: 1, duration: 1 });
        }
      },
      onThrowComplete() {
        gsap.to(spin, { timeScale: 1, duration: 1 });
      },
    });

    adjustRadius();
    randomizeVisuals();

    const handleResize = () => {
      dragDistancePerRotation = screenRange(window.innerWidth);
      adjustRadius();
    };

    window.addEventListener("resize", handleResize);

    // ✅ 페이지 이동 / 언마운트 시 GSAP 초기화
    return () => {
      window.removeEventListener("resize", handleResize);
      spin.kill();
      gsap.killTweensOf(proxy);
      gsap.globalTimeline.clear();
      gsap.set(poster, { clearProps: "all" });
      gsap.set(circle, { clearProps: "all" });
      gsap.set(portfolio, { clearProps: "all" });
    };
  }, [location.pathname]); // ✅ 경로 변경마다 다시 초기화

  return (
    <div id="poster" ref={posterRef} className="noise">
      {/* Logo */}
      <Link className="logo" to="/" rel="noopener noreferrer">
        SONG I SONG
      </Link>

      {/* Portfolio Container */}
      <div
        className="portfolio-container"
        ref={portfolioRef}
        aria-label="Rotating Portfolio letters"
      >
        <div className="portfolio">
          {["P", "o", "r", "t", "f", "o", "l", "i", "o"].map((char, i) => (
            <div key={i} className="letter" data-letter={char}>
              {char}
            </div>
          ))}
        </div>
      </div>

      {/* Circle Background */}
      <div className="circle-home" ref={circleRef} aria-hidden="true"></div>

      {/* Start Button */}
      <button className="start-btn">
        <Link to="/resume">START</Link>
      </button>
    </div>
  );
};

export default Main;
