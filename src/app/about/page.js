'use client';

import { motion } from 'framer-motion';
import { Globe, Users, Heart, Target } from 'lucide-react';
import Link from 'next/link';
import WaveBackground from '@/components/WaveBackground';
import MagicCard from '@/components/MagicCard';

export default function AboutPage() {
  const flyInUp = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 20, stiffness: 80 } }
  };

  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--bg)', overflowX: 'hidden', color: '#fff', minHeight: '100vh', paddingBottom: '10rem' }}>
      
      {/* HEADER SECTION */}
      <section style={{ position: 'relative', paddingTop: '12rem', paddingBottom: '6rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <WaveBackground quadrant={3} opacity={0.5} />
        
        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1000px' }}>
          <motion.div variants={flyInUp} initial="hidden" animate="visible">
             <div style={{ fontSize: '1.25rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '0.2em' }}>OUR STORY</div>
             <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em', textTransform: 'uppercase', marginBottom: '2rem' }}>
               Built for <br/>
               <span style={{ color: 'var(--text-secondary)' }}>Global Impact.</span>
             </h1>
             <p style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: 1.5, marginBottom: '3rem' }}>
               For over two decades, Prepare International has partnered with global churches to develop leaders who don't just add to the Kingdom, but multiply it exponentially.
             </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION & PHILOSOPHY */}
      <section style={{ padding: '6rem 1.5rem', position: 'relative', zIndex: 10 }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            
            <MagicCard delay={0.1} innerStyle={{ padding: '4rem 3rem' }} highlightColor="var(--brand-primary)">
              <Globe size={48} color="var(--brand-primary)" style={{ marginBottom: '2rem' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Global Scope</h3>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                We currently train leaders across multiple continents, equipping local churches with the tools they need to launch self-sustaining pastoral pipelines natively.
              </p>
            </MagicCard>

            <MagicCard delay={0.2} innerStyle={{ padding: '4rem 3rem' }} highlightColor="var(--brand-secondary)">
              <Target size={48} color="var(--brand-secondary)" style={{ marginBottom: '2rem' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Core Philosophy</h3>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Jesus didn't mass-produce followers. He poured deeply into a few leaders who then changed the world. We aggressively protect this biblical model of intensive discipleship.
              </p>
            </MagicCard>

          </div>
        </div>
      </section>

    </div>
  );
}
