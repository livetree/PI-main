'use client';

import { motion } from 'framer-motion';
import WaveBackground from '@/components/WaveBackground';

export default function AboutPage() {
  const flyInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--bg)', overflowX: 'hidden', color: '#fff', minHeight: '100vh', paddingBottom: '10rem' }}>
      
             <div>
               <h1 style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', fontWeight: 400, lineHeight: 0.9, letterSpacing: '-0.04em', textTransform: 'uppercase' }}>
                 ABOUT US
               </h1>
             </div>

             <div style={{ maxWidth: '600px' }}>
               <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300 }}>
                 Prepare International exists to equip and develop leaders who will advance the Kingdom, multiply their impact, and disciple their nation.
               </p>
             </div>

          </motion.div>
        </div>
      </section>

      {/* 2. OUR HISTORY (Split Layout) */}
      <section style={{ padding: '8rem 1.5rem', position: 'relative', zIndex: 10 }}>
        <div className="container" style={{ maxWidth: '1400px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            
            <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div style={{ display: 'inline-block', padding: '1rem 2rem', borderLeft: '4px solid var(--brand-secondary)', background: 'rgba(212,175,55,0.05)', marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--brand-secondary)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>PI History</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', maxWidth: '800px', fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                <p>PI was formed in 2001 with Randy Boyd assuming the role of Director in 2003. He and Callie, his wife, quickly set a course of ministry to train and equip local leaders and workers for life and service within their nation.</p>
                <p>Our first training schools were in the Czech Republic and Slovakia. Today, we operate across 5 continents with schools and relationships in Africa, Asia, Latin America, Europe, and the United States, as well as maintaining a global online learning platform.</p>
              </div>
            </motion.div>

            <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
               <img src="https://prepareinternational.org/wp-content/uploads/2023/04/IMG_1191-1024x683.jpg" alt="Prepare International History" style={{ width: '100%', height: 'auto', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }} />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. GUIDING PRINCIPLES (Strict Horizontals) */}
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
                <div style={{ fontSize: '1.25rem', color: 'var(--brand-primary)' }}>[ {principle.id} ]</div>
                <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, lineHeight: 1.1, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#fff' }}>{principle.title}</h3>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300, maxWidth: '500px' }}>{principle.desc}</p>
              </motion.div>
            ))}
            
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />

          </div>
        </div>
      </section>

      {/* 4. THE MISSION VECTOR (Raw Metrics) */}
      <section style={{ padding: '10rem 1.5rem', position: 'relative', zIndex: 10 }}>
        <div className="container" style={{ maxWidth: '1400px' }}>
          
          <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} style={{ marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--brand-secondary)' }}>The Mission Vector</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>
            {[
              { number: '10k', label: 'Trainers' },
              { number: '1M', label: 'Disciples' },
              { number: '1M', label: 'Souls Saved' },
              { number: '1k', label: 'Movements' }
            ].map((metric, i) => (
               <motion.div key={i} variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                 <div style={{ fontSize: 'clamp(4rem, 8vw, 6rem)', fontWeight: 300, color: '#fff', lineHeight: 1, marginBottom: '1rem', letterSpacing: '-0.05em' }}>{metric.number}</div>
                 <div style={{ width: '40px', height: '2px', background: 'var(--brand-primary)', marginBottom: '1.5rem' }} />
                 <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.2em' }}>{metric.label}</p>
               </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. MEET THE TEAM */}
      <section style={{ padding: '8rem 1.5rem', position: 'relative', zIndex: 10, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ maxWidth: '1400px' }}>
          <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} style={{ marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Meet The Team</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '3rem' }}>
            {[
              "Randy and Callie Boyd", "Josiah and Brandi Boyd", "Volkert Muijs", 
              "Hannah Dockery", "Boone and Bethany Tyson", "Faith Arredondo", 
              "Maci Dean", "Anna Aleksieieva", "Daniel Caballero", 
              "Patrick Kisia", "David Morgan"
            ].map((name, i) => (
               <motion.div key={i} variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.05 }} style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
                 <h4 style={{ fontSize: '1.5rem', fontWeight: 400, color: '#fff', letterSpacing: '-0.02em' }}>{name}</h4>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
