'use client';
import { motion } from 'framer-motion';

export default function MagicCard({ children, innerStyle, delay = 0, initialVariant, visibleVariant, highlightColor }) {
  return (
    <motion.div 
      initial="idle"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover="hover"
      className="magic-card"
      style={{
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '20px',
        border: '1px solid rgba(255,255,255,0.05)'
      }}
      variants={{
        idle: initialVariant || { opacity: 0, y: 50 },
        visible: { 
          ...(visibleVariant || { opacity: 1, x: 0, rotate: 0, y: 0, scale: 1 }), 
          boxShadow: '0 0px 0px rgba(0,0,0,0)', 
          borderColor: 'rgba(255,255,255,0.05)', 
          transition: { type: "spring", damping: 15, stiffness: 70, delay: delay } 
        },
        hover: { y: -8, scale: 1.02, boxShadow: '0 30px 60px rgba(0,0,0,0.5)', borderColor: 'transparent', zIndex: 50, transition: { duration: 0.3 } }
      }}
    >
      {/* LAYER 0: The DOT Outwards Overhang Track */}
      <div style={{ position: 'absolute', top: '-4px', left: '-4px', right: '-4px', bottom: '-4px', borderRadius: '24px', overflow: 'hidden', zIndex: 0 }}>
          <motion.div 
            className="spinner-anim"
            style={{
              position: 'absolute', top: '50%', left: '50%', width: 2000, height: 2000, margin: '-1000px 0 0 -1000px', pointerEvents: 'none',
              background: 'conic-gradient(from 0deg, transparent 0%, transparent 95%, #ffffff 100%)',
              filter: 'drop-shadow(0 0 6px #ffffff) drop-shadow(0 0 12px #3b82f6)'
            }}
            variants={{
              idle: { opacity: 0 },
              visible: { opacity: 0 },
              hover: { opacity: 1, transition: { duration: 0.4 } }
            }}
          />
      </div>
      
      {/* LAYER 1: The TAIL Sharp Tracking Track */}
      <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', borderRadius: '20px', overflow: 'hidden', zIndex: 1 }}>
        <motion.div 
          className="spinner-anim"
          style={{
              position: 'absolute', top: '50%', left: '50%', width: 2000, height: 2000, margin: '-1000px 0 0 -1000px', pointerEvents: 'none',
              background: 'conic-gradient(from 0deg, transparent 0%, transparent 40%, rgba(30, 58, 138, 0.4) 75%, #1e3a8a 98%, #ffffff 100%)'
          }}
          variants={{
              idle: { opacity: 0 },
              visible: { opacity: 0 },
              hover: { opacity: 1, transition: { duration: 0.4 } }
          }}
        />
      </div>
      
      {/* LAYER 2: The INTERNAL Navy Core Mask Block */}
      <div style={{ position: 'absolute', top: '2px', left: '2px', right: '2px', bottom: '2px', borderRadius: '18px', background: 'var(--surface)', zIndex: 2 }} />

      {/* LAYER 3: Optional Highlight Top Bar inside Core */}
      {highlightColor && (
        <div style={{ position: 'absolute', top: '2px', left: '2px', right: '2px', height: '4px', borderTopLeftRadius: '18px', borderTopRightRadius: '18px', background: highlightColor, zIndex: 3 }} />
      )}
      
      {/* CONTENT LAYER purely unperturbed by underlying physics layer boundaries */}
      <div style={{ position: 'relative', zIndex: 10, ...innerStyle }}>
        {children}
      </div>
    </motion.div>
  );
}
