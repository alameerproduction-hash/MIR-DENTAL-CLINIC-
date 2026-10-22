import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface CardTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scaleOnHover?: number;
  showGlare?: boolean;
  glareColor?: string;
}

export const CardTilt: React.FC<CardTiltProps> = ({
  children,
  className = '',
  maxTilt = 7,
  scaleOnHover = 1.02,
  showGlare = true,
  glareColor = 'rgba(255, 255, 255, 0.15)',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Check touch devices & reduced motion
  useEffect(() => {
    const isTouch =
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  // Motion values for cursor normalized (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs with high stiffness & critical damping for zero jitter
  const springConfig = { stiffness: 260, damping: 24, mass: 0.5 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  // 3D rotation transforms
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  // Glare position percentages (0% to 100%)
  const glareX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mousePosX = (e.clientX - rect.left) / width - 0.5;
    const mousePosY = (e.clientY - rect.top) / height - 0.5;

    x.set(mousePosX);
    y.set(mousePosY);
  };

  const handleMouseEnter = () => {
    if (isTouchDevice) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  if (isTouchDevice) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      animate={{
        scale: isHovered ? scaleOnHover : 1,
      }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={`relative perspective-1000 will-change-transform ${className}`}
    >
      {children}

      {/* Dynamic specular glare layer */}
      {showGlare && isHovered && (
        <motion.div
          className="absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(circle 260px at ${glareX.get()} ${glareY.get()}, ${glareColor}, transparent 75%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}
    </motion.div>
  );
};
