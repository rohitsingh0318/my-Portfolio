import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  // Use motion values to track cursor position
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const ringX = useSpring(cursorX, { stiffness: 100, damping: 20 });
  const ringY = useSpring(cursorY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const mouseMoveHandler = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Custom Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-yellow rounded-full pointer-events-none z-50"
        style={{
          translateX: '-50%',
          translateY: '-50%',
          x: cursorX,
          y: cursorY,
        }}
      />

      {/* Smooth Ring */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 border-2 border-lightblue rounded-full pointer-events-none z-40"
        style={{
          translateX: '-50%',
          translateY: '-50%',
          x: ringX,
          y: ringY,
        }}
      />
    </>
  );
};

export default CustomCursor;
