'use client';

import { motion } from 'framer-motion';
import WaveBackground from '@/components/WaveBackground';

export default function AboutPage() {
  const flyInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--bg)', overflowX: 'hidden', color: '#fff', minHeight: '100vh', paddingBottom: '10rem', fontFamily: 'Inter, sans-serif' }}>
      
      {/* 1. DARKNODE MANIFESTO HERO */}
      <section style={{ position: 'relative', paddingTop: '15rem', paddingBottom: '8rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <WaveBackground quadrant={3} opacity={0.2} />
        
        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1400px' }}>
          <motion.div variants={flyInUp} initial="hidden" animate="visible" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'end' }}>
             
             <div>
               <div style={{ fontSize: '0.875rem', fontFamily: 'monospace', color: 'var(--brand-secondary)', letterSpacing: '0.2em', marginBottom: '2rem' }}>// SYSTEM.ORIGIN</div>
               <h1 style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', fontWeight: 400, lineHeight: 0.9, letterSpacing: '-0.04em', textTransform: 'uppercase' }}>
                 ABOUT US
               </h1>
             </div>

             <div style={{ maxWidth: '600px' }}>
               <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300 }}>
                 PI was formed in 2001 with Randy Boyd assuming the role of Director in 2003. He and Callie, his wife, quickly set a course of ministry to train and equip local leaders and workers for life and service within their nation.
               </p>
               <br/>
               <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300 }}>
                 Our first training schools were in the Czech Republic and Slovakia. Today, we operate across 5 continents with schools and relationships in Africa, Asia, Latin America, Europe, and the United States, as well as maintaining a global online learning platform.
               </p>
             </div>

          </motion.div>
        </div>
      </section>

      {/* 2. GUIDING PRINCIPLES (Strict Horizontals) */}
      <section style={{ position: 'relative', zIndex: 10, paddingTop: '8rem' }}>
        <div className="container" style={{ maxWidth: '1400px', padding: '0 1.5rem' }}>
          
          <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} style={{ marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Guiding Principles</h2>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            
            {[
              { id: '01', title: "Advance the Kingdom", desc: "We are unequivocally committed to the expansion of His kingdom structurally, relationally, and spiritually." },
              { id: '02', title: "Multiply Leaders", desc: "Jesus didn't mass-produce followers. He poured deeply into a few leaders who then changed the world. We protect this intensive model." },
              { id: '03', title: "Disciple Nations", desc: "Equipping localized pastoral pipelines natively so churches can launch and sustain themselves autonomously." }
            ].map((principle, i) => (
              <motion.div 
                key={i} variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ display: 'grid', gridTemplateColumns: 'minmax(100px, 1fr) 3fr 4fr', gap: '2rem', padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.1)', alignItems: 'start' }}
                className="principle-row"
              >
                <div style={{ fontSize: '1.25rem', fontFamily: 'monospace', color: 'var(--brand-primary)' }}>[ {principle.id} ]</div>
                <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, lineHeight: 1.1, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#fff' }}>{principle.title}</h3>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300, maxWidth: '500px' }}>{principle.desc}</p>
              </motion.div>
            ))}
            
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />

          </div>
        </div>
      </section>

      {/* 3. THE MISSION VECTOR (Raw Metrics) */}
      <section style={{ padding: '10rem 1.5rem', position: 'relative', zIndex: 10 }}>
        <div className="container" style={{ maxWidth: '1400px' }}>
          
          <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} style={{ marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--brand-secondary)' }}>The Mission Vector</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>
            {[
              { number: '10,000', label: 'Trainers' },
              { number: '1M', label: 'Disciples' },
              { number: '1M', label: 'Souls Saved' },
              { number: '1,000', label: 'Kingdom Movements' }
            ].map((metric, i) => (
               <motion.div key={i} variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                 <div style={{ fontSize: 'clamp(4rem, 8vw, 6rem)', fontWeight: 300, color: '#fff', lineHeight: 1, marginBottom: '1rem', fontFamily: 'monospace', letterSpacing: '-0.05em' }}>{metric.number}</div>
                 <div style={{ width: '40px', height: '2px', background: 'var(--brand-primary)', marginBottom: '1.5rem' }} />
                 <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.2em' }}>{metric.label}</p>
               </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
