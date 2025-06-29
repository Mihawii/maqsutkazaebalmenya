import { motion } from 'framer-motion';
import React from 'react';

interface BottomUpBlurProps {
  delay?: number;
  children: React.ReactNode;
}

const BottomUpBlur: React.FC<BottomUpBlurProps> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ y: 40, opacity: 0, filter: 'blur(16px)' }}
    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
    exit={{ y: -40, opacity: 0, filter: 'blur(16px)' }}
    transition={{ type: 'spring', damping: 18, stiffness: 120, mass: 1.1, delay }}
    style={{ willChange: 'transform, opacity, filter' }}
  >
    {children}
  </motion.div>
);

export default BottomUpBlur; 