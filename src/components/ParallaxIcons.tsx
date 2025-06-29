import { motion, useMotionValue, useTransform } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const icons = [
  {
    src: '/assets/img/graduate-hat.png',
    alt: 'Graduation Hat',
    style: { top: '10%', left: '12%', width: 48, height: 48, zIndex: 1 },
    factor: 0.15,
  },
  {
    src: '/assets/img/graduate-hat.png',
    alt: 'Graduation Hat',
    style: { top: '70%', left: '18%', width: 38, height: 38, zIndex: 1 },
    factor: 0.10,
  },
  {
    src: '/assets/img/dark-logo.png',
    alt: 'Logo',
    style: { top: '20%', right: '10%', width: 40, height: 40, zIndex: 1 },
    factor: 0.12,
  },
  {
    src: '/assets/img/graduate-hat.png',
    alt: 'Graduation Hat',
    style: { bottom: '12%', right: '18%', width: 32, height: 32, zIndex: 1 },
    factor: 0.18,
  },
];

const ParallaxIcons: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // UseTransform hooks for each icon (must be top-level, not in a loop)
  const x0 = useTransform(mouseX, (v) => v * 40 * icons[0].factor);
  const y0 = useTransform(mouseY, (v) => v * 40 * icons[0].factor);
  const x1 = useTransform(mouseX, (v) => v * 40 * icons[1].factor);
  const y1 = useTransform(mouseY, (v) => v * 40 * icons[1].factor);
  const x2 = useTransform(mouseX, (v) => v * 40 * icons[2].factor);
  const y2 = useTransform(mouseY, (v) => v * 40 * icons[2].factor);
  const x3 = useTransform(mouseX, (v) => v * 40 * icons[3].factor);
  const y3 = useTransform(mouseY, (v) => v * 40 * icons[3].factor);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x / rect.width);
      mouseY.set(y / rect.height);
    };
    const node = containerRef.current;
    if (node) {
      node.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (node) node.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
      <motion.img
        src={icons[0].src}
        alt={icons[0].alt}
        style={{
          position: 'absolute',
          ...icons[0].style,
          x: x0,
          y: y0,
          pointerEvents: 'none',
          filter: 'drop-shadow(0 2px 8px rgba(20,18,83,0.10))',
          opacity: 0.85,
        }}
        draggable={false}
      />
      <motion.img
        src={icons[1].src}
        alt={icons[1].alt}
        style={{
          position: 'absolute',
          ...icons[1].style,
          x: x1,
          y: y1,
          pointerEvents: 'none',
          filter: 'drop-shadow(0 2px 8px rgba(20,18,83,0.10))',
          opacity: 0.85,
        }}
        draggable={false}
      />
      <motion.img
        src={icons[2].src}
        alt={icons[2].alt}
        style={{
          position: 'absolute',
          ...icons[2].style,
          x: x2,
          y: y2,
          pointerEvents: 'none',
          filter: 'drop-shadow(0 2px 8px rgba(20,18,83,0.10))',
          opacity: 0.85,
        }}
        draggable={false}
      />
      <motion.img
        src={icons[3].src}
        alt={icons[3].alt}
        style={{
          position: 'absolute',
          ...icons[3].style,
          x: x3,
          y: y3,
          pointerEvents: 'none',
          filter: 'drop-shadow(0 2px 8px rgba(20,18,83,0.10))',
          opacity: 0.85,
        }}
        draggable={false}
      />
    </div>
  );
};

export default ParallaxIcons; 