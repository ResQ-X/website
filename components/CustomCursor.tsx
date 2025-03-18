"use client";

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Inner icon (airplane) motion values
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { stiffness: 1000, damping: 50 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Outer circle motion values
  const outerX = useMotionValue(0);
  const outerY = useMotionValue(0);
  const outerXSpring = useSpring(outerX, { stiffness: 200, damping: 30 });
  const outerYSpring = useSpring(outerY, { stiffness: 200, damping: 30 });

  useEffect(() => {
    let timeoutId;

    const handleMouseMove = (e) => {
      // Calculate positions for CENTER alignment
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Inner icon position (center at mouse)
      cursorX.set(mouseX - 10); // 10 = half of 20px width
      cursorY.set(mouseY - 10);

      // Outer circle position (center at mouse)
      outerX.set(mouseX - 20); // 20 = half of 40px width
      outerY.set(mouseY - 20);

      // Reset alignment timeout
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        // Sync outer circle to inner icon's position
        outerX.set(cursorX.get() - 10); // Adjust for center alignment
        outerY.set(cursorY.get() - 10);
      }, 100);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const hoverableElements = document.querySelectorAll('a, button, [data-hoverable="true"]');
    
    const addHoverListeners = () => {
      hoverableElements.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    addHoverListeners();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {/* Outer Circle */}
      <motion.div 
        className="fixed z-[9999] pointer-events-none"
        style={{
          x: outerXSpring,
          y: outerYSpring,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '2px solid #FF8500',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.9s ease-out'
        }}
        animate={{
          scale: isHovering ? 1.2 : (isClicking ? 1.4 : 1),
          borderWidth: isClicking ? '3px' : '2px'
        }}
      />

      {/* Airplane Icon */}
      <motion.div 
        className="fixed z-[9999] pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: '20px',
          height: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 20 20" 
          fill="none"
          style={{
            transform: isClicking ? 'scale(0.8)' : 'scale(1)',
            transition: 'transform 0.1s ease-out',
            transformOrigin: 'center' // Ensure scaling happens from center
          }}
        >
          <path 
            d="M10 0L12.5 5H7.5L10 0ZM10 20L7.5 15H12.5L10 20ZM20 10L15 12.5V7.5L20 10ZM0 10L5 7.5V12.5L0 10Z" 
            fill="#FF8500"
          />
        </svg>
      </motion.div>
    </>
  );
};

export default CustomCursor;