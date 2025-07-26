// src/components/Typewriter.jsx
import React, { useState, useEffect } from 'react';

export default function Typewriter({
  words = [],
  typingSpeed = 100,
  pauseTime = 2000,
  className = '',
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [blink, setBlink] = useState(true);

  // Type / delete effect
  useEffect(() => {
    if (index >= words.length) return;
    if (subIndex === words[index].length + 1 && forward) {
      // Finished typing, wait then delete
      setTimeout(() => setForward(false), pauseTime);
    } else if (subIndex === 0 && !forward) {
      // Finished deleting, move to next word
      setForward(true);
      setIndex((prev) => (prev + 1) % words.length);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));
    }, forward ? typingSpeed : typingSpeed / 2);

    return () => clearTimeout(timeout);
  }, [subIndex, index, forward, words, typingSpeed, pauseTime]);

  // Cursor blink
  useEffect(() => {
    const blinkTimeout = setInterval(() => {
      setBlink((b) => !b);
    }, 500);
    return () => clearInterval(blinkTimeout);
  }, []);

  return (
    <div className={`w-full text-center py-4 ${className}`}>
      <span className="text-2xl md:text-4xl font-semibold inline-block">
        {words[index].substring(0, subIndex)}
        <span className="inline-block w-1 h-7 bg-current ml-1" style={{ visibility: blink ? 'visible' : 'hidden' }} />
      </span>
    </div>
  );
}
