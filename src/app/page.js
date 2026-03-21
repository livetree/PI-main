'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, Users, PlayCircle, Star, ShieldCheck, Zap } from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax effects for floating elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', gap: '8rem', paddingBottom: '8rem', overflowX: 'hidden' }}>
      
      {/* 1. HERO SECTION (Left-Aligned, Floating Overlaps) */}
      <section style={{ 
        position: 'relative', 
        padding: '8rem 1.5rem 2rem', 
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at 80% 20%, rgba(212,175,55,0.08), transparent 50%)'
      }}>
        {/* Glows */}
        <div className="animate-pulse-slow" style={{ position: 'absolute', top: '5%', left: '-5%', width: '400px', height: '400px', background: 'var(--brand-primary)', opacity: 0.1, filter: 'blur(100px)', borderRadius: '50%' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ maxWidth: '650px' }}
          >
            <div className="pill-tag" style={{ marginBottom: '2rem' }}>
              <Zap size={14} /> New Leadership Paradigm
            </div>
            
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              As Vision Expands,<br />
              <span className="gradient-text">Leaders Must Multiply.</span>
            </h1>
            
            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.6, fontWeight: 300 }}>
              Growth creates opportunity—but also pressure. Without developed leaders, vision stalls. 
              We equip leaders who can carry and multiply what God is building.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="/connect" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem', borderRadius: '999px' }}>
                Start a Conversation <ArrowRight size={20} />
              </Link>
              <Link href="/training" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.125rem', border: 'none', gap: '0.5rem' }}>
                <PlayCircle size={20} color="var(--brand-primary)" /> Watch Framework
              </Link>
            </div>

            {/* Social Proof Avatars */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '3rem' }}
            >
              <div style={{ display: 'flex' }}>
                {[1,2,3,4].map((i) => (
                  <div key={i} style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--surface-elevated)', border: '2px solid var(--bg)', marginLeft: i > 1 ? '-15px' : 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary)' }}>
                    <Users size={16} />
                  </div>
                ))}
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                Join <span style={{ color: 'var(--text-primary)' }}>2,500+</span> leaders globally
              </div>
            </motion.div>
          </motion.div>

          {/* Right Floating Elements (Glassmorphism Depth) */}
          <div className="hide-on-mobile" style={{ position: 'relative', height: '600px', display: 'flex', justifyContent: 'center', perspective: '1000px' }}>
            <motion.div style={{ y: y1, rotate: rotate1, position: 'absolute', top: '10%', right: '10%', width: '320px', zIndex: 2 }} className="glass-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span className="pill-tag" style={{ background: 'transparent', padding: 0, border: 'none' }}>Live Metrics</span>
                <TrendingUp color="var(--brand-secondary)" size={20} />
              </div>
              <div style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>+340%</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Increase in Leadership Multiplication</div>
            </motion.div>

            <motion.div style={{ y: y2, position: 'absolute', bottom: '15%', left: '-10%', width: '280px', zIndex: 3 }} className="glass-card glass-card-highlight">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'var(--brand-gradient)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000' }}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700 }}>Jesus First</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Core Foundation</div>
                </div>
              </div>
              <div style={{ height: '4px', background: 'var(--surface-elevated)', borderRadius: '2px', overflow: 'hidden' }}>
                <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.5, delay: 1 }} style={{ height: '100%', background: 'var(--brand-gradient)' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE CHALLENGE (Dynamic Reveal) */}
      <section className="container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          className="glass-card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', borderTop: '4px solid #ef4444' }}
        >
          <div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>Leadership Gaps Limit Kingdom Impact</h2>
            <p style={{ color: '#ef4444', fontSize: '1.25rem', fontWeight: 600, marginBottom: '2rem' }}>
              Without developed leaders, your influence is capped.
            </p>
          </div>
          <div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                "A few leaders carry most of the responsibility",
                "People attend but aren't activated",
                "Potential leaders remain undeveloped",
                "Vision stalls instead of multiplying"
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontSize: '1.125rem', color: 'var(--text-secondary)' }}
                >
                  <TrendingUp color="#ef4444" size={24} style={{ flexShrink: 0, marginTop: '2px', transform: 'rotate(180deg)' }} />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* 3. PATHWAY (The 3-Column Highlight Grid) */}
      <section className="container" style={{ textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="pill-tag" style={{ marginBottom: '1rem' }}>The Solution</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1rem' }}>A Clear Leadership Pathway</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
            We help you build leaders who multiply through a reproducible framework.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', textAlign: 'left', alignItems: 'center' }}>
          {[
            { step: '01', title: 'Foundations', desc: 'Root leaders in Jesus and their absolute Kingdom identity. Lead from relationship, not just responsibility.', hl: false },
            { step: '02', title: 'Activation', desc: 'Move leaders out of the classroom and into real-life application and obedience. We emphasize practical disciple-making.', hl: true },
            { step: '03', title: 'Multiplication', desc: 'Equip leaders to rigorously disciple and reproduce others. Movements that multiply across generations.', hl: false }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
              className={`glass-card ${item.hl ? 'glass-card-highlight' : ''}`}
              style={{ position: 'relative', overflow: 'hidden', padding: item.hl ? '3.5rem 2.5rem' : '2.5rem' }}
            >
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: item.hl ? 'var(--brand-secondary)' : 'var(--text-secondary)', marginBottom: '1.5rem' }}>{item.step}</div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{item.title}</h3>
              <p style={{ color: item.hl ? 'rgba(255,255,255,0.9)' : 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: item.hl ? '2rem' : 0 }}>{item.desc}</p>
              
              {item.hl && (
                <Link href="/training" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem', width: '100%', justifyContent: 'space-between' }}>
                  See Framework <ArrowRight size={16} />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. WHY NOW (Dynamic Final CTA) */}
      <section className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          style={{ 
            background: 'var(--bg)', 
            border: '1px solid rgba(212, 175, 55, 0.4)', 
            borderRadius: '100px', 
            padding: '4rem 2rem', 
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 0 50px rgba(212, 175, 55, 0.15)'
          }}
        >
          {/* Subtle Background Glow */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(ellipse, rgba(212,175,55,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
          
          <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.75rem)', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
            The Need for Multiplying Leaders Has Never Been Greater.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 2.5rem', position: 'relative', zIndex: 1 }}>
            You already have vision and people. Now it's time to multiply leadership.
          </p>
          
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center' }}>
            <Link href="/connect" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.125rem' }}>
              Connect With Us Today
            </Link>
          </div>
        </motion.div>
      </section>

      <style jsx>{`
        @media (max-width: 900px) {
          .hide-on-mobile { display: none !important; }
        }
      `}</style>
    </div>
  );
}
