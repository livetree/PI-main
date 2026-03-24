'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function WaveBackground({ quadrant = 1, opacity = 0.4 }) {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const transforms = {
    1: 'translate(0%, 0%)',
    2: 'translate(-50%, 0%)',
    3: 'translate(0%, -50%)',
    4: 'translate(-50%, -50%)'
  };

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
      <motion.div 
        style={{ 
          position: 'absolute', top: 0, left: 0, width: '200%', height: '200%', 
          backgroundImage: "url('/wave-grid.jpg')", backgroundSize: '100% 100%', 
          transform: transforms[quadrant], opacity: opacity, y: bgY,
          backgroundRepeat: 'no-repeat'
        }} 
      />
    </div>
  );
}
