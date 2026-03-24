'use client';

import { motion } from 'framer-motion';
import WaveBackground from '@/components/WaveBackground';
import { Heart, Users, Globe, ArrowRight, ExternalLink, Download } from 'lucide-react';
import Link from 'next/link';

const STAFF = [
  { name: 'Randy & Callie Boyd', role: 'Founders' },
  { name: 'Josiah & Brandi Boyd', role: 'Executive Directors' },
  { name: 'Volkert Muijs', role: 'Africa Director' },
  { name: 'Hannah Dockery', role: 'Homebase Director & Prayground' },
  { name: 'Patrick Kisia', role: 'East Africa Director' },
  { name: 'Daniel Caballero', role: 'Latin America Director' },
  { name: 'Anna Aleksieieva', role: 'European Coordinator' },
  { name: 'Boone & Bethany Tyson', role: 'Costa Rica & South Texas Coordinators' },
  { name: 'David Morgan', role: 'Director of Development' }
];

const PROJECTS = [
  { name: 'Poland Deaf Mission', desc: 'Equipping the deaf community in Eastern Europe.' },
  { name: 'Macedonia Mission', desc: 'Catalyzing the next generation of Balkan leaders.' },
  { name: 'Legacy Mission', desc: 'Friede Taylor and the European legacy.' }
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function GivePage() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg)', color: '#fff' }}>
      <WaveBackground quadrant={3} opacity={0.1} />

      {/* HERO SECTION */}
      <section style={{ position: 'relative', paddingTop: '15rem', paddingBottom: '10rem', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn} style={{ textAlign: 'center' }}>
            <div style={{ color: 'var(--brand-secondary)', letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '1rem', fontWeight: 800, marginBottom: '2rem' }}>
              GLOBAL PARTNERSHIP
            </div>
            <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', fontWeight: 900, lineHeight: 0.85, textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '3rem' }}>
              FUEL THE <br/> <span style={{ color: 'var(--brand-secondary)' }}>MISSION</span>
            </h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', maxWidth: '800px', marginInline: 'auto', lineHeight: 1.6 }}>
              We don't just send money; we send catalytic leaders. Your partnership fuels a global ecosystem designed to multiply for generations across churches, businesses, and communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SUPPORT PILLARS */}
      <section style={{ paddingBottom: '15rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
            
            {/* PILLAR 1: GLOBAL */}
            <motion.div 
              whileHover={{ y: -10 }}
              style={{ padding: '4rem 3rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--brand-secondary)', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, right: 0, padding: '1rem', opacity: 0.1 }}><Globe size={100} /></div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1.5rem' }}>PI GLOBAL</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.125rem' }}>Invest in the general movement fund to enable catalytic schools, training tools, and regional expansion across every sphere of society.</p>
              <button className="btn btn-primary w-full" style={{ padding: '1.25rem' }}>Fuel PI Global</button>
            </motion.div>

            {/* PILLAR 2: STAFF */}
            <motion.div 
              whileHover={{ y: -10 }}
              style={{ padding: '4rem 3rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, right: 0, padding: '1rem', opacity: 0.1 }}><Users size={100} /></div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1.5rem' }}>FIELD LEADERS</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.125rem' }}>Support the leaders on mission who drive movement expansion in specific regions across the globe.</p>
              <button className="btn w-full" style={{ padding: '1.25rem', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}>View Field Leaders</button>
            </motion.div>

            {/* PILLAR 3: PROJECTS */}
            <motion.div 
              whileHover={{ y: -10 }}
              style={{ padding: '4rem 3rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, right: 0, padding: '1rem', opacity: 0.1 }}><Heart size={100} /></div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1.5rem' }}>PROJECTS</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.125rem' }}>Give to specific local initiatives, ranging from the Deaf in Poland to the villages of Macedonia.</p>
              <button className="btn w-full" style={{ padding: '1.25rem', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}>Explore Projects</button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FIELD LEADERS DETAILS MINI-GRID */}
      <section style={{ paddingBottom: '15rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, textTransform: 'uppercase' }}>Partner with Field Leaders</h2>
            <div style={{ width: '80px', height: '4px', background: 'var(--brand-secondary)', margin: '2rem auto' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {STAFF.map((member) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <div>
                  <div style={{ fontWeight: 800, textTransform: 'uppercase', color: 'var(--brand-secondary)', fontSize: '1.125rem' }}>{member.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{member.role}</div>
                </div>
                <ArrowRight size={20} style={{ color: 'rgba(255,255,255,0.2)' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD MAGNET / VALUE REMINDER */}
      <section style={{ paddingBottom: '15rem' }}>
        <div className="container">
          <div style={{ padding: '6rem 4rem', background: 'linear-gradient(45deg, #0f172a 0%, #1e293b 100%)', borderRadius: '32px', border: '1px solid rgba(255,215,0,0.1)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'relative', zIndex: 10 }}>
              <h2 style={{ fontSize: '3rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1.5rem' }}>Understand the Paradigm</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '700px', marginInline: 'auto', marginBottom: '3rem' }}>Before you invest, discover why we do what we do. Read Randy Boyd’s foundational eBook on Father/Son leadership for free.</p>
              <button className="btn btn-primary" style={{ padding: '1.25rem 3rem' }}>Get the Free eBook <Download size={18} style={{ marginLeft: '1rem' }} /></button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
