import React, { useEffect, useState } from 'react';

export const DynamicCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <>
          {/* Main cursor */}
          <div
            className="fixed w-4 h-4 bg-cyan-400 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
              boxShadow: '0 0 20px rgba(34, 211, 238, 0.6)',
              opacity: 0.8,
            }}
          />
          {/* Outer ring */}
          <div
            className="fixed w-8 h-8 border-2 border-cyan-400/50 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
              opacity: 0.4,
            }}
          />
        </>
      )}
    </>
  );
};
