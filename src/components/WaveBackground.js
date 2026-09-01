'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

// quadrant 1-4 picks which quarter of the 200% x 200% grid shows through.
export default function WaveBackground({ quadrant = 1, opacity = 0.4 }) {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
      <motion.div
        style={{
          position: 'absolute', top: 0, left: 0, width: '200%', height: '200%',
          backgroundImage: "url('/wave-grid.jpg')", backgroundSize: '100% 100%',
          transform: `translate(${quadrant % 2 ? 0 : -50}%, ${quadrant > 2 ? -50 : 0}%)`,
          opacity: opacity, y: bgY,
          backgroundRepeat: 'no-repeat'
        }}
      />
    </div>
  );
}
