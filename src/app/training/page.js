'use client';
import React, { useState } from 'react';
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
    description: 'The starting point for every movement. Focus on the internal world of the leader, identity in Christ, and hearing God’s voice.',
    color: 'var(--brand-primary)',
    courses: [
      { name: 'The Kingdom of God', desc: 'A foundational course focusing on the revelation of God and His Kingdom in the Scriptures.' },
      { name: 'New Testament Themes', desc: 'A brief study of some of the major themes of the New Testament.' },
      { name: 'The Power of the Transformed Mind', desc: 'How to renew your mind to work together with God.' },
      { name: 'Cultivating His Presence', desc: 'Developing our “secret time” with God and learning how to study scripture.' },
      { name: 'Discovering God’s Grace', desc: 'Throwing off tradition and dead religious thinking to come alive in Christ.' },
      { name: 'The Two Covenants', desc: 'Moving from an old covenant mentality into the promises and power of the new.' },
      { name: 'Bible Survey', desc: 'An overview of the parts and meanings of the Bible.' }
    ]
  },
  {
    id: 'activation',
    title: 'ACTIVATION',
    subtitle: 'Kingdom Obedience',
    icon: <Zap size={32} />,
    description: 'Moving from theory to power. Learn to live a supernatural life and apply Kingdom principles in families, finances, and relationships.',
    color: '#f59e0b',
    courses: [
      { name: 'Divine Communication', desc: 'A comprehensive study of hearing God and growing in prophecy.' },
      { name: 'The Holy Spirit', desc: 'A study on the person, relationship, and gifts of the Holy Spirit to empower us.' },
      { name: 'Power Ministries', desc: 'Healing the sick and casting out demons.' },
      { name: 'Living by Faith', desc: 'Learning to live in God’s supernatural realm of faith.' },
      { name: 'Kingdom Families', desc: 'Building a home around Christ’s principles and a lifestyle of advancing the Kingdom.' },
      { name: 'Kingdom Relationships', desc: 'The power and priority of relationships in the Kingdom ecosystem.' },
      { name: 'Kingdom Finances', desc: 'Clear guidance on working, money, and possessions within God’s ways.' },
      { name: 'Spiritual Warfare', desc: 'Learning to become Kingdom warriors in a supernatural reality.' }
    ]
  },
  {
    id: 'multiplication',
    title: 'MULTIPLICATION',
    subtitle: 'Reproducing Life',
    icon: <Sprout size={32} />,
    description: 'Shifting from adding to reproducing. Master the art of discipling and fathering the next generation of Kingdom leaders.',
    color: '#10b981',
    courses: [
      { name: 'Principles of Leadership', desc: 'General strategic and character principles to grow as a leader.' },
      { name: 'The Personal Life of a Leader', desc: 'Maintaining a healthy soul, family, and character for long-term impact.' },
      { name: 'Kingdom Influence', desc: 'Bringing the Kingdom’s influence into every area and aspect of life.' },
      { name: 'Discipleship and Fathering', desc: 'The core art of making disciples who make disciples.' },
      { name: 'Preaching and Teaching', desc: 'The mechanics and power of bringing God’s Word to the people.' },
      { name: 'Reality of Life in Ministry', desc: 'Handling conflict, carrying the cross, and dealing with ministry difficulties.' }
    ]
  },
  {
    id: 'culture',
    title: 'CULTURE',
    subtitle: 'Ecosystems of Growth',
    icon: <Network size={32} />,
    description: 'Transforming a community into a movement. Establishing the multiplying culture and simple systems that sustain growth.',
    color: '#6366f1',
    courses: [
      { name: 'Become a Church Movement', desc: 'Moving from a single church focus to a multiplying movement ecosystem.' },
      { name: 'Multiply Initiative', desc: 'Practical guidelines on preparing men and women to train and disciple others.' }
    ]
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function TrainingPage() {
  const [activeStage, setActiveStage] = useState(null);

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
                  padding: 'clamp(1.5rem, 5vw, 3rem)', 
                  borderRadius: '12px',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'background 0.3s ease, border-color 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = item.color + '44'}
                onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
              >
                <div style={{ color: item.color, marginBottom: '2rem' }}>{item.icon}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', fontWeight: 800, letterSpacing: '0.2em', marginBottom: '0.5rem' }}>STAGE 0{idx + 1}</div>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem', lineHeight: 1 }}>{item.title}</h2>
                <div style={{ fontSize: '1rem', color: item.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>{item.subtitle}</div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2.5rem', flex: 1 }}>{item.description}</p>
                
                <button 
                  onClick={() => setActiveStage(item)}
                  style={{ 
                    marginTop: 'auto',
                    width: '100%', 
                    padding: '1rem', 
                    background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#fff',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    fontSize: '0.875rem',
                    letterSpacing: '0.1em',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = item.color;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  }}
                >
                  Look Inside <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL OVERLAY */}
      {activeStage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ 
            position: 'fixed', 
            inset: 0, 
            background: 'rgba(0,0,0,0.9)', 
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
          onClick={() => setActiveStage(null)}
        >
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={{ 
              width: '100%', 
              maxWidth: '900px', 
              maxHeight: '80vh', 
              background: '#0f172a', 
              border: `2px solid ${activeStage.color}`, 
              borderRadius: '24px', 
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ padding: '3rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: activeStage.color, fontWeight: 800, letterSpacing: '0.3em', marginBottom: '1rem' }}>STAGE OVERVIEW</div>
                <h2 style={{ fontSize: '3rem', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1 }}>{activeStage.title}</h2>
                <div style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600, marginTop: '0.5rem' }}>{activeStage.subtitle}</div>
              </div>
              <button 
                onClick={() => setActiveStage(null)}
                style={{ background: 'none', border: 'none', color: '#fff', opacity: 0.3, cursor: 'pointer', fontSize: '2rem' }}
              >
                &times;
              </button>
            </div>
            
            <div style={{ flex: 1, overflowY: 'auto', padding: '3rem' }}>
              <div style={{ display: 'grid', gap: '2rem' }}>
                {activeStage.courses.map((course) => (
                  <div key={course.name} style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--brand-secondary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{course.name}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{course.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ padding: '2rem 3rem', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'flex-end' }}>
              <Link href="/connect" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>Request This Training</Link>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* ACTION CTA */}
      <section style={{ paddingBottom: '15rem', textAlign: 'center' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ padding: 'clamp(3rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}
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
