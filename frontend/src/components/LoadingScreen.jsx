import React, { useState, useEffect, useRef } from 'react';

export const LoadingScreen = ({ onFinish }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const onFinishRef = useRef(onFinish);

  useEffect(() => {
    onFinishRef.current = onFinish;
  });

  useEffect(() => {
    let removeTimer;
    // Keep loading time short, smooth, and professional (~1.1s + 0.5s fade)
    const loadTimer = setTimeout(() => {
      setIsFadingOut(true);
      removeTimer = setTimeout(() => {
        setShouldRender(false);
        if (onFinishRef.current) onFinishRef.current();
      }, 500);
    }, 1100);

    return () => {
      clearTimeout(loadTimer);
      if (removeTimer) clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      id="site-loader"
      className={`site-loader ${isFadingOut ? 'loader-fade-out' : ''}`}
      aria-label="Loading Sunny Portfolio"
      role="status"
    >
      <div className="loader-content">
        <div className="loader-brand">
          <img src="/assets/logo-loader.png" alt="Sunny" className="loader-logo-img" />
        </div>
        <div className="loader-bar-wrap" aria-hidden="true">
          <div className="loader-bar-fill"></div>
        </div>
      </div>
    </div>
  );
};
