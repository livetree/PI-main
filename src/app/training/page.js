'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import WaveBackground from '@/components/WaveBackground';
import { Target, Zap, Users, Globe, ArrowRight, Shield, Flame, Sprout, Network } from 'lucide-react';
import Link from 'next/link';

const PATHWAYS = [
  {
    id: 'foundations',
    stage: 'STAGE 01',
    title: 'Kingdom Foundations',
    subtitle: 'Jesus-Centered Leadership',
    icon: <Flame size={32} />,
    description: 'Our most foundational pathway. Jesus lived, talked, and demonstrated the Kingdom of God. This pathway discusses the key teachings of Jesus that outline a new way of life.',
    color: 'var(--brand-primary)',
    courses: [
      { name: 'Kingdom of God', desc: 'The framework Jesus used to communicate what life will look like for His followers.' },
      { name: 'New Testament Themes', desc: 'Understanding justification, sanctification, and our identity as God’s children.' },
      { name: 'Power of a Transformed Mind', desc: 'A new way of thinking that is opposite of the world’s system—thinking with the mind of God.' },
      { name: 'The Holy Spirit', desc: 'Exploring the truths of what the Bible says about the Holy Spirit and His gifts.' },
      { name: 'Divine Communication', desc: 'What it means to hear from God and how to share that hearing with others.' },
      { name: 'Discipleship and Fathering', desc: 'The process of producing mature disciples that can go and make disciples.' },
      { name: 'Cultivating the Presence of God', desc: 'Developing our life around the presence of God as our greatest responsibility.' },
      { name: 'Kingdom Influence', desc: 'Bringing the Kingdom’s impact into every area of society.' }
    ]
  },
  {
    id: 'identity',
    stage: 'STAGE 01',
    title: 'Identity in Christ',
    subtitle: 'Personal Transformation',
    icon: <Shield size={32} />,
    description: 'A dedicated pathway for understanding who we are in the Kingdom. Throw off religious tradition and come alive under the grace of Christ.',
    color: 'var(--brand-primary)',
    courses: [
      { name: 'Discovering God’s Grace', desc: 'Coming alive fully under the grace of Christ for every day.' },
      { name: 'New Testament Themes', desc: 'Vital topics of understanding who we are in the Kingdom ecosystem.' },
      { name: 'A Life God Blesses', desc: 'Understanding the basis for God’s blessing so we can be good stewards.' },
      { name: 'Freedom in Christ', desc: 'Examining the different areas of freedom Christ has provided, often in small group environments.' }
    ]
  },
  {
    id: 'supernatural',
    stage: 'STAGE 02',
    title: 'A Supernatural Life',
    subtitle: 'Kingdom Activation',
    icon: <Zap size={32} />,
    description: 'Jesus demonstrated the Kingdom with power. This pathway creates a Biblical foundation and activation for walking in that power today.',
    color: '#f59e0b',
    courses: [
      { name: 'Power Ministries', desc: 'Biblical foundation and activation of walking in the demonstration of the power of God.' },
      { name: 'Living by Faith', desc: 'Exploring what faith is and taking daily steps of faith for global impact.' },
      { name: 'Spiritual Warfare', desc: 'Exploring our authority to battle darkness from a position of peace and authority.' },
      { name: 'Divine Communication', desc: 'Advanced hearing from God and prophetic activation.' }
    ]
  },
  {
    id: 'living',
    stage: 'STAGE 02',
    title: 'Kingdom Living',
    subtitle: 'Everyday Obedience',
    icon: <Users size={32} />,
    description: 'Applying the framework of the Kingdom to the most vital areas of our lives: families, finances, and relationships.',
    color: '#f59e0b',
    courses: [
      { name: 'Kingdom Families', desc: 'Building a home around Christ’s principles and advancing the Kingdom together.' },
      { name: 'Kingdom Finances', desc: 'Clear guidance on working, money, and possessions within God’s ways.' },
      { name: 'Kingdom Relationships', desc: 'Developing and maintaining healthy relationships in the Kingdom of God.' }
    ]
  },
  {
    id: 'leadership',
    stage: 'STAGE 03',
    title: 'Kingdom Leadership',
    subtitle: 'Multiplying Life',
    icon: <Sprout size={32} />,
    description: 'Shifting from adding to reproducing. Master the art of discipling and fathering the next generation of Kingdom leaders.',
    color: '#10b981',
    courses: [
      { name: 'Principles of Leadership', desc: 'General strategic and character principles for any organization or family.' },
      { name: 'The Personal Life of a Leader', desc: 'Maintaining health in your soul, family, and character for long-term health in ministry.' },
      { name: 'The Reality of Life in Ministry', desc: 'Dealing with difficulties, handling conflict, and the reality of carrying the cross.' }
    ]
  },
  {
    id: 'movement',
    stage: 'STAGE 04',
    title: 'Church Movement',
    subtitle: 'Ecosystems of Growth',
    icon: <Network size={32} />,
    description: 'Transforming a community into a movement. Establishing the multiplying culture and simple systems that sustain growth.',
    color: '#6366f1',
    courses: [
      { name: 'Becoming a Church Movement', desc: 'Introducing the key components of the Antioch church for modern movements.' },
      { name: 'A Church that Multiplies', desc: 'Key ingredients and factors that enable a viral church planting movement.' },
      { name: 'The Multiplying Culture', desc: 'Elements of local church culture needed to become a church that multiplies.' },
      { name: 'The Message of the Multiplying Church', desc: 'Understanding the primary message and motivations of a movement.' }
    ]
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function TrainingPage() {
  const [activePathway, setActivePathway] = useState(PATHWAYS[0]);
  const secondaryRef = React.useRef(null);

  const handlePathwayClick = (pathway) => {
    setActivePathway(pathway);
    if (secondaryRef.current) {
      secondaryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
              TRAINING <br/> <span style={{ color: 'var(--brand-secondary)' }}>PATHWAYS</span>
            </h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', maxWidth: '800px', marginInline: 'auto', lineHeight: 1.6 }}>
              We don't just teach principles; we activate pathways. Choose a legacy training pathway to explore its curriculum and activate your movement calling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PATHWAY GRID */}
      <section style={{ paddingBottom: '10rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {PATHWAYS.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { delay: idx * 0.05, duration: 0.8 } }
                }}
                onClick={() => handlePathwayClick(item)}
                style={{ 
                  background: activePathway?.id === item.id ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)', 
                  border: activePathway?.id === item.id ? `1px solid ${item.color}` : '1px solid rgba(255,255,255,0.05)', 
                  padding: 'clamp(1.5rem, 5vw, 3rem)', 
                  borderRadius: '12px',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  if (activePathway?.id !== item.id) {
                    e.currentTarget.style.borderColor = item.color + '44';
                  }
                }}
                onMouseOut={(e) => {
                  if (activePathway?.id !== item.id) {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  }
                }}
              >
                <div style={{ color: item.color, marginBottom: '2rem' }}>{item.icon}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', fontWeight: 800, letterSpacing: '0.2em', marginBottom: '0.5rem' }}>{item.stage}</div>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem', lineHeight: 1 }}>{item.title}</h2>
                <div style={{ fontSize: '1rem', color: item.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>{item.subtitle}</div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2.5rem', flex: 1 }}>{item.description}</p>
                
                <div style={{ 
                  marginTop: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: item.color
                }}>
                  Explore Curriculum <ArrowRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PATHWAY SPOTLIGHT */}
      <section ref={secondaryRef} style={{ paddingBottom: '15rem', scrollMarginTop: '100px' }}>
        <div className="container">
          {activePathway && (
            <motion.div 
              key={activePathway.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                background: 'rgba(255,255,255,0.01)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '24px',
                padding: 'clamp(2rem, 8vw, 6rem)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '8px', height: '100%', background: activePathway.color }}></div>
              
              <div style={{ marginBottom: '5rem' }}>
                <div style={{ fontSize: '1rem', color: activePathway.color, fontWeight: 800, letterSpacing: '0.4em', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
                  Pathway Spotlight
                </div>
                <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.9, marginBottom: '2rem' }}>
                  {activePathway.title}
                </h2>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', lineHeight: 1.6 }}>
                  {activePathway.description}
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                {activePathway.courses.map((course, cIdx) => (
                  <motion.div 
                    key={course.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: cIdx * 0.1 }}
                    style={{
                      padding: '2.5rem',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      borderRadius: '16px',
                      height: '100%'
                    }}
                  >
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--brand-secondary)', marginBottom: '1rem', textTransform: 'uppercase' }}>
                      {course.name}
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                      {course.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div style={{ marginTop: '5rem', paddingTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Interested in this Pathway?</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>Launch a conversation about bringing {activePathway.title} to your community.</p>
                </div>
                <Link href="/connect" className="btn btn-primary" style={{ padding: '1.5rem 3rem', fontSize: '1.125rem' }}>
                  Request Pathway Information
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>

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
