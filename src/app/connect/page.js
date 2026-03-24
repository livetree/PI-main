'use client';

import { motion } from 'framer-motion';
import WaveBackground from '@/components/WaveBackground';
import { Globe, Calendar, MessageSquare, Mail, Phone, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const REGIONS = [
  { name: 'Africa', leads: ['Movement Equipping', 'Leadership Schools'], email: 'africa@prepareinternational.org' },
  { name: 'Europe', leads: ['Kingdom Business', 'Church Planting'], email: 'europe@prepareinternational.org' },
  { name: 'Latin America', leads: ['Discipleship Pathways', 'Social Impact'], email: 'latam@prepareinternational.org' },
  { name: 'USA & Global', leads: ['Strategic Partnerships', 'Training Hubs'], email: 'info@prepareinternational.org' }
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function ConnectPage() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg)', color: '#fff' }}>
      <WaveBackground quadrant={1} opacity={0.1} />

      {/* HERO SECTION */}
      <section style={{ position: 'relative', paddingTop: '15rem', paddingBottom: '8rem', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn} style={{ textAlign: 'center' }}>
            <div style={{ color: 'var(--brand-secondary)', letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '1rem', fontWeight: 800, marginBottom: '2rem' }}>
              TAKE THE NEXT STEP
            </div>
            <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', fontWeight: 900, lineHeight: 0.85, textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '3rem' }}>
              LAUNCH A <br/> <span style={{ color: 'var(--brand-secondary)' }}>MOVEMENT</span>
            </h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', maxWidth: '800px', marginInline: 'auto', lineHeight: 1.6 }}>
              Ready to multiply? We’re for the leaders who aren't satisfied with the status quo. Let’s start a conversation that changes everything.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BOOKING & REGIONS GRID */}
      <section style={{ paddingBottom: '15rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '4rem' }}>
            
            {/* BOOKING COLUMN */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ padding: '4rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,215,0,0.1)', borderRadius: '16px', boxShadow: '0 40px 100px -20px rgba(0,0,0,0.5)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--brand-secondary)', marginBottom: '2rem' }}>
                <Calendar size={24} />
                <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.875rem' }}>Direct Access</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1.5rem', lineHeight: 1.1 }}>Book a Leader <br/>Conversation</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '3rem' }}>
                Schedule a 30-minute strategic conversation with one of our core team members to evaluate your context and identify your next multiplication catalyst.
              </p>
              
              {/* Calendly Placeholder */}
              <div style={{ padding: '6rem 2rem', background: 'rgba(0,0,0,0.2)', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Integrated Scheduling Interface</div>
                <button className="btn btn-primary" style={{ padding: '1rem 2rem' }}>Open Booking Widget <ExternalLink size={16} style={{ marginLeft: '0.5rem' }} /></button>
              </div>
            </motion.div>

            {/* REGIONS COLUMN */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--brand-primary)', marginBottom: '2.5rem' }}>
                <Globe size={24} />
                <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)' }}>Global Reach</span>
              </div>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '3rem' }}>Regional Entry Points</h2>
              
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {REGIONS.map((region) => (
                  <motion.div 
                    key={region.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ padding: '2rem', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--brand-secondary)', marginBottom: '0.5rem' }}>{region.name}</h3>
                      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                        {region.leads.map(lead => (
                          <span key={lead} style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', background: 'rgba(255,255,255,0.03)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>{lead}</span>
                        ))}
                      </div>
                    </div>
                    <a href={`mailto:${region.email}`} style={{ color: '#fff', opacity: 0.3, transition: 'opacity 0.2s' }} onMouseEnter={e => e.currentTarget.style.opacity = '1'} onMouseLeave={e => e.currentTarget.style.opacity = '0.3'}>
                      <Mail size={24} />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CALL SECTION */}
      <section style={{ paddingBottom: '15rem', textAlign: 'center' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '2rem' }}>Still have questions?</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', marginTop: '4rem' }}>
              <div style={{ textAlign: 'left' }}>
                <div style={{ color: 'var(--brand-secondary)', marginBottom: '1rem' }}><Mail size={32} /></div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>General Inquiries</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>info@prepareinternational.org</div>
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ color: 'var(--brand-secondary)', marginBottom: '1rem' }}><MapPin size={32} /></div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Global HQ</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>Lubbock, TX // USA</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
