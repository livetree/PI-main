'use client';

import { motion } from 'framer-motion';
import WaveBackground from '@/components/WaveBackground';
import { Target, Zap, Users, Globe, ArrowRight, Shield, Flame, Sprout, Network } from 'lucide-react';
import Link from 'next/link';

const TRAININGS = [
  {
    id: 'foundations',
    title: 'FOUNDATIONS',
    subtitle: 'Jesus-Centered Leadership',
    icon: <Flame size={32} />,
    description: 'Transform your starting point. Move from religious responsibility to a deep, conversational relationship with Jesus that fuels everything you do.',
    features: ['Hearing God’s Voice', 'Identity in Christ', 'Rhythms of Grace', 'Modeling the Life'],
    color: 'var(--brand-primary)'
  },
  {
    id: 'activation',
    title: 'ACTIVATION',
    subtitle: 'Kingdom Obedience',
    icon: <Zap size={32} />,
    description: 'Stop studying and start stepping out. Learn how to apply Kingdom principles in real-time, high-pressure environments where faith becomes action.',
    features: ['Real-World Obedience', 'Power Evangelism', 'Breaking Fear', 'Action over Teaching'],
    color: '#f59e0b'
  },
  {
    id: 'multiplication',
    title: 'MULTIPLICATION',
    subtitle: 'Reproducing Life',
    icon: <Sprout size={32} />,
    description: 'The shift from adding to multiplying. Master the art of discipling others who are equipped to disciple others, creating an exponential movement.',
    features: ['Discipleship Pathways', 'Training Trainers', 'Empowering Others', 'Reproducible Tools'],
    color: '#10b981'
  },
  {
    id: 'culture',
    title: 'CULTURE',
    subtitle: 'Ecosystems of Growth',
    icon: <Network size={32} />,
    description: 'Building the environment where multiplication is the natural outcome. Design simple, scalable systems that sustain movement for generations.',
    features: ['Simple Systems', 'Scalable Models', 'Regional Impact', 'Generational Legacy'],
    color: '#6366f1'
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function TrainingPage() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg)', color: '#fff' }}>
      <WaveBackground quadrant={3} opacity={0.15} />

      {/* HERO SECTION */}
      <section style={{ position: 'relative', paddingTop: '15rem', paddingBottom: '10rem', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn} style={{ textAlign: 'center' }}>
            <div style={{ color: 'var(--brand-secondary)', letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '1rem', fontWeight: 800, marginBottom: '2rem' }}>
              EQUIPPING THE MOVEMENT
            </div>
            <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', fontWeight: 900, lineHeight: 0.85, textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '3rem' }}>
              KINGDOM <br/> <span style={{ color: 'var(--brand-secondary)' }}>TRAINING</span>
            </h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', maxWidth: '800px', marginInline: 'auto', lineHeight: 1.6 }}>
              We don't just teach principles; we activate pathways. Discover the four stages of the Multiplier Pathway designed to launch scaling Kingdom movements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TRAINING GRID */}
      <section style={{ paddingBottom: '15rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {TRAININGS.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1, duration: 0.8 } }
                }}
                style={{ 
                  background: 'rgba(255,255,255,0.02)', 
                  border: '1px solid rgba(255,255,255,0.05)', 
                  padding: '3rem', 
                  borderRadius: '12px',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = item.color + '44'}
                onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
              >
                <div style={{ color: item.color, marginBottom: '2rem' }}>{item.icon}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', fontWeight: 800, letterSpacing: '0.2em', marginBottom: '0.5rem' }}>STAGE 0{idx + 1}</div>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem', lineHeight: 1 }}>{item.title}</h2>
                <div style={{ fontSize: '1rem', color: item.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>{item.subtitle}</div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2.5rem', flex: 1 }}>{item.description}</p>
                
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em' }}>Core Focal Points:</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    {item.features.map(f => (
                      <div key={f} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: '4px', height: '4px', background: item.color, borderRadius: '50%' }}></div>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTION CTA */}
      <section style={{ paddingBottom: '15rem', textAlign: 'center' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ padding: '8rem 4rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '200px', height: '4px', background: 'var(--brand-secondary)' }}></div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '2rem', lineHeight: 1 }}>
              Ready to START <br/><span style={{ color: 'var(--brand-secondary)' }}>YOUR Pathway?</span>
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3.5rem', maxWidth: '600px', marginInline: 'auto' }}>
              Take the diagnostic to see where you currently stand on the Multiplier Pathway, or reach out to launch a conversation.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <Link href="/diagnostic" className="btn btn-primary" style={{ padding: '1.5rem 3rem', fontSize: '1.25rem' }}>
                Start Diagnostic
              </Link>
              <Link href="/connect" className="btn" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', padding: '1.5rem 3rem', fontSize: '1.25rem', color: '#fff' }}>
                Book a Conversation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
