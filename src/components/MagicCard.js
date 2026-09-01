'use client';
import { motion } from 'framer-motion';

// The two spinning border tracks: an outward white dot, and a sharp navy comet tail.
const TRACKS = [
  {
    inset: '-4px',
    radius: '24px',
    zIndex: 0,
    background: 'conic-gradient(from 0deg, transparent 0%, transparent 95%, #ffffff 100%)',
    filter: 'drop-shadow(0 0 6px #ffffff) drop-shadow(0 0 12px #3b82f6)'
  },
  {
    inset: '0',
    radius: '20px',
    zIndex: 1,
    background: 'conic-gradient(from 0deg, transparent 0%, transparent 40%, rgba(30, 58, 138, 0.4) 75%, #1e3a8a 98%, #ffffff 100%)'
  }
];

// Hover lift/shadow lives in .magic-card:hover (globals.css), not in these variants.
export default function MagicCard({ children, innerStyle, delay = 0, initialVariant, visibleVariant, highlightColor }) {
  return (
    <motion.div
      initial="idle"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover="hover"
      className="magic-card"
      variants={{
        idle: initialVariant || { opacity: 0, y: 50 },
        visible: {
          ...(visibleVariant || { opacity: 1, x: 0, rotate: 0, y: 0, scale: 1 }),
          transition: { type: "spring", damping: 15, stiffness: 70, delay: delay }
        },
        hover: {}
      }}
    >
      {TRACKS.map((track) => (
        <div
          key={track.zIndex}
          style={{ position: 'absolute', inset: track.inset, borderRadius: track.radius, overflow: 'hidden', zIndex: track.zIndex }}
        >
          <motion.div
            className="spinner-anim"
            style={{
              position: 'absolute', top: '50%', left: '50%', width: 2000, height: 2000, margin: '-1000px 0 0 -1000px', pointerEvents: 'none',
              background: track.background,
              filter: track.filter
            }}
            variants={{
              idle: { opacity: 0 },
              visible: { opacity: 0 },
              hover: { opacity: 1, transition: { duration: 0.4 } }
            }}
          />
        </div>
      ))}

      {/* The navy core, masking everything but the 2px border track */}
      <div style={{ position: 'absolute', inset: '2px', borderRadius: '18px', background: 'var(--surface)', zIndex: 2 }} />

      {highlightColor && (
        <div style={{ position: 'absolute', top: '2px', left: '2px', right: '2px', height: '4px', borderTopLeftRadius: '18px', borderTopRightRadius: '18px', background: highlightColor, zIndex: 3 }} />
      )}

      <div style={{ position: 'relative', zIndex: 10, ...innerStyle }}>
        {children}
      </div>
    </motion.div>
  );
}
