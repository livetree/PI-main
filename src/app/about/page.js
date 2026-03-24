'use client';

import { motion } from 'framer-motion';
import { Globe, Users, Target, Shield, Zap, TrendingUp, Flame } from 'lucide-react';
import WaveBackground from '@/components/WaveBackground';
import MagicCard from '@/components/MagicCard';

export default function AboutPage() {
  const flyInUp = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 20, stiffness: 80 } }
  };

  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--bg)', overflowX: 'hidden', color: '#fff', minHeight: '100vh', paddingBottom: '10rem' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ position: 'relative', paddingTop: '12rem', paddingBottom: '8rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <WaveBackground quadrant={3} opacity={0.6} />
        
        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1000px' }}>
          <motion.div variants={flyInUp} initial="hidden" animate="visible">
             <div style={{ fontSize: '1.25rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '0.2em' }}>OUR STORY & MISSION</div>
             <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em', textTransform: 'uppercase', marginBottom: '2rem' }}>
               A Catalyst <br/>
               <span style={{ color: 'var(--text-secondary)' }}>In The Nations.</span>
             </h1>
             <p style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: 1.5, marginBottom: '3rem' }}>
               Prepare International exists to equip and develop leaders who will advance the Kingdom, multiply their impact, and disciple their nation.
             </p>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR HISTORY (Split Layout) */}
      <section style={{ padding: '8rem 1.5rem', position: 'relative', zIndex: 10 }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
            
            <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div style={{ display: 'inline-block', padding: '1rem 2rem', borderLeft: '4px solid var(--brand-secondary)', background: 'rgba(212,175,55,0.05)', marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--brand-secondary)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>PI History</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', maxWidth: '800px', fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                <p>PI was formed in 2001 with Randy Boyd assuming the role of Director in 2003. He and Callie, his wife, quickly set a course of ministry to train and equip local leaders and workers for life and service within their nation.</p>
                <p>Our first training schools were in the Czech Republic and Slovakia. Today, we have moved into 5 continents with schools and relationships in Africa, Asia, Latin America, Europe, and the United States, as well as establishing an immersive online learning platform.</p>
                <p style={{ color: '#fff', fontWeight: 600 }}>Over the years, we have helped establish over 80 schools training the world's frontline shepherds in Kingdom principles and power.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. THE 3 PILLARS */}
      <section style={{ padding: '6rem 1.5rem', position: 'relative', zIndex: 10 }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#fff' }}>Leaders Who Will</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {[
              { title: "Advance the Kingdom", icon: <Globe size={40} color="var(--brand-primary)" /> },
              { title: "Multiply Leaders", icon: <Users size={40} color="var(--brand-primary)" /> },
              { title: "Disciple their Nation", icon: <Target size={40} color="var(--brand-primary)" /> }
            ].map((pillar, i) => (
               <MagicCard key={i} delay={i * 0.1} innerStyle={{ padding: '4rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }} highlightColor="var(--brand-primary)">
                 <div style={{ background: 'rgba(212,175,55,0.05)', padding: '1.5rem', borderRadius: '50%', marginBottom: '2rem' }}>
                   {pillar.icon}
                 </div>
                 <h3 style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.2 }}>{pillar.title}</h3>
               </MagicCard>
            ))}

          </div>
        </div>
      </section>

      {/* 4. IMPACT METRICS */}
      <section style={{ padding: '10rem 1.5rem', position: 'relative', background: 'var(--surface)', zIndex: 10, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <WaveBackground quadrant={2} opacity={0.3} />
        <div className="container" style={{ maxWidth: '1200px', position: 'relative', zIndex: 10 }}>
           <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <div style={{ fontSize: '1.25rem', color: '#dc2626', fontWeight: 800, marginBottom: '1rem', letterSpacing: '0.2em' }}>THE VISION</div>
            <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#fff' }}>We Seek To Develop</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              { number: '10,000', label: 'Trainers' },
              { number: '1M', label: 'Disciples' },
              { number: '1M', label: 'Souls Saved' },
              { number: '1,000', label: 'Kingdom Movements' }
            ].map((metric, i) => (
               <motion.div 
                 key={i} variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                 style={{ padding: '4rem 2rem', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', textAlign: 'center' }}
               >
                 <h3 style={{ fontSize: 'clamp(3.5rem, 6vw, 5rem)', fontWeight: 900, color: 'var(--brand-secondary)', lineHeight: 1, marginBottom: '1rem', textShadow: '0 0 30px rgba(212,175,55,0.3)' }}>{metric.number}</h3>
                 <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{metric.label}</p>
               </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
