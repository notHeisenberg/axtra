import { useEffect, useState } from 'react';

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      // Update circle position immediately
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Update dot position with a smooth delay
      setTimeout(() => {
        setDotPosition({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <>
      {/* Main circle cursor */}
      <div
        className="pointer-events-none fixed z-[999] hidden md:block"
        style={{
          insetInlineStart: `${position.x}px`,
          insetBlockStart: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="h-8 w-8 rounded-full border-2 border-primary transition-[width,height] duration-200 ease-out group-hover:h-24 group-hover:w-24" />
      </div>

      {/* Following dot */}
      <div
        className="pointer-events-none fixed z-[999] hidden md:block"
        style={{
          insetInlineStart: `${dotPosition.x}px`,
          insetBlockStart: `${dotPosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="h-2 w-2 rounded-full bg-primary transition-transform duration-200 ease-out" />
      </div>
    </>
  );
};

export default AnimatedCursor; 