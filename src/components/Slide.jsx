// src/components/SplashScreen.jsx
import React, { useState, useRef, useEffect } from 'react';
import Typewriter from './Typewriter';

export default function Slide({ onFinish }) {
  const [visible, setVisible] = useState(true);
  const [shouldSlide, setShouldSlide] = useState(false);
  const touchStartY = useRef(null);

  const intros = [
    'Hey there! 👋',
    'I am Choladevi Gheereddy 💁‍♀️',
    'Frontend Wizard 🧙‍♀️',
    "Let's build something cool!",
  ];

  const handleWheel = (e) => {
    if (e.deltaY > 0 && !shouldSlide) {
      setShouldSlide(true);
    }
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (touchStartY.current !== null) {
      const touchEndY = e.touches[0].clientY;
      if (touchEndY < touchStartY.current && !shouldSlide) {
        setShouldSlide(true);
      }
    }
  };

  // once we start sliding, hide after animation
  useEffect(() => {
    if (shouldSlide) {
      const timer = setTimeout(() => {
        setVisible(false);
        onFinish();        // notify App that we’re done
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [shouldSlide, onFinish]);

  // prevent background scroll while splash is visible
  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : '';
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 bg-accent flex items-center justify-center z-50 ${
        shouldSlide ? 'animate-slide-up' : ''
      }`}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="text-center space-y-8 px-4">
        
        <h1 className="text-5xl text-primary animate-bounce">
          Welcome to My Portfolio
        </h1>

        <Typewriter
          words={intros}
          typingSpeed={120}
          pauseTime={1000}
          className="text-2xl md:text-4xl font-semibold text-primary animate-pulse"
        />

        <p className="text-base md:text-lg text-primary/80">
          (Scroll down to enter my world of code!)
        </p>
      </div>
    </div>
  );
}
