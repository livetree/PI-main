'use client';

import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

// "Train *1 million* people" → the starred words in the accent colour.
export function Accent({ children }) {
  return children.split('*').map((part, i) => (i % 2 ? <mark key={i}>{part}</mark> : part));
}

// Counts up once when scrolled into view. The final number is what the server
// renders, so it is right with no JavaScript and with reduced motion.
export function CountUp({ n, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const run = animate(0, n, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => { ref.current.textContent = Math.round(v).toLocaleString('en-US') + suffix; },
    });
    return () => run.stop();
  }, [inView, n, suffix]);
  return <span ref={ref}>{n.toLocaleString('en-US')}{suffix}</span>;
}
