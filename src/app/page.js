'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, PlayCircle, ShieldCheck, Zap, ArrowUpRight, Crown } from 'lucide-react';

export default function Home() {
  
  // Staggered animation variants for smooth, Drop Edition style entry
  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } 
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem', paddingBottom: '8rem', overflowX: 'hidden' }}>
      
      {/* 1. HERO TEXT SECTION (Mobile First, Center Aligned for impact) */}
      <section style={{ 
        position: 'relative', 
        padding: '10rem 1.5rem 2rem', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        background: 'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.1), transparent 60%)'
      }}>
        {/* Glows */}
        <div className="animate-pulse-slow" style={{ position: 'absolute', top: '10%', right: '10%', width: '300px', height: '300px', background: 'var(--brand-primary)', opacity: 0.1, filter: 'blur(100px)', borderRadius: '50%' }} />

        <motion.div initial="hidden" animate="visible" variants={textVariants} style={{ maxWidth: '800px', zIndex: 1 }}>
          <div className="pill-tag" style={{ marginBottom: '2rem', marginInline: 'auto' }}>
            <Zap size={14} /> New Leadership Paradigm
          </div>
          
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1.5rem', letterSpacing: '-0.04em', lineHeight: 1.05 }}>
            As Vision Expands,<br />
            <span className="gradient-text">Leaders Must Multiply.</span>
          </h1>
          
          <p style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.6, fontWeight: 300, maxWidth: '650px', marginInline: 'auto' }}>
            Growth creates opportunity—but also pressure. Without developed leaders, vision stalls. 
            We equip leaders who carry and multiply what God is building.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/connect" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem', borderRadius: '999px' }}>
              Start a Conversation <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. THE 5 PILLARS (Fluid, Interactive Scroll Sequence) */}
      <section className="container" style={{ maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Box 1: Jesus First */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cardVariants}
          className="glass-card glass-card-highlight"
          style={{ padding: '3rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
        >
          <div style={{ background: 'var(--brand-gradient)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', marginBottom: '1.5rem', boxShadow: '0 0 30px rgba(212,175,55,0.4)' }}>
            <Crown size={32} />
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '0.5rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Jesus First</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>The Absolute Foundation</p>
        </motion.div>

        {/* 2-Column Grid for the 4 Metrics on Desktop, Stacks beautifully on Mobile */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          
          {/* Box 2 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cardVariants} className="glass-card" style={{ padding: '2.5rem' }}>
             <div style={{ fontSize: '1rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem' }}>01</div>
             <ShieldCheck size={32} color="var(--brand-secondary)" style={{ marginBottom: '1.5rem' }} />
             <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>Leaders Equipped</h3>
             <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Moving beyond theory into rigorous, practical application.</p>
          </motion.div>

          {/* Box 3 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cardVariants} className="glass-card" style={{ padding: '2.5rem' }}>
             <div style={{ fontSize: '1rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem' }}>02</div>
             <Users size={32} color="var(--brand-secondary)" style={{ marginBottom: '1.5rem' }} />
             <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>Raising Leaders</h3>
             <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Disciples formulating disciples to sustain long-term growth.</p>
          </motion.div>

          {/* Box 4 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cardVariants} className="glass-card" style={{ padding: '2.5rem' }}>
             <div style={{ fontSize: '1rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem' }}>03</div>
             <TrendingUp size={32} color="var(--brand-secondary)" style={{ marginBottom: '1.5rem' }} />
             <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>Limitations Minimized</h3>
             <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Decentralizing responsibility to uncap organizational impact.</p>
          </motion.div>

          {/* Box 5 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cardVariants} className="glass-card" style={{ padding: '2.5rem' }}>
             <div style={{ fontSize: '1rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem' }}>04</div>
             <ArrowUpRight size={32} color="var(--brand-secondary)" style={{ marginBottom: '1.5rem' }} />
             <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>The Kingdom Advanced</h3>
             <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Creating massive ripple effects across global communities.</p>
          </motion.div>

        </div>
      </section>

      {/* 3. PATHWAY OVERVIEW (Horizontal scroll snapping effect hint, stacks on mobile) */}
      <section className="container" style={{ textAlign: 'center', marginTop: '4rem' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={textVariants}>
          <div className="pill-tag" style={{ marginBottom: '1rem' }}>The Solution</div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>A Clear Leadership Pathway</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
            We help you build leaders who multiply through a reproducible framework.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', textAlign: 'left' }}>
          {[
            { step: 'Phase I', title: 'Foundations', desc: 'Root leaders in Jesus and their absolute Kingdom identity. Lead from relationship rather than duty.', hl: false },
            { step: 'Phase II', title: 'Activation', desc: 'Move leaders out of the classroom and into real-life application, emphasizing practical discipleship.', hl: true },
            { step: 'Phase III', title: 'Multiplication', desc: 'Equip leaders to rigorously reproduce others, creating a generational legacy.', hl: false }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cardVariants}
              className={`glass-card ${item.hl ? 'glass-card-highlight' : ''}`}
              style={{ position: 'relative', overflow: 'hidden', padding: item.hl ? '3rem 2rem' : '2.5rem' }}
            >
              <div style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', color: item.hl ? 'var(--brand-secondary)' : 'var(--text-secondary)', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>{item.step}</div>
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

      {/* 4. WHY NOW (Dynamic Reveal CTA) */}
      <section className="container" style={{ marginTop: '2rem' }}>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cardVariants}
          style={{ 
            background: 'var(--bg)', 
            border: '1px solid rgba(212, 175, 55, 0.4)', 
            borderRadius: 'var(--radius-lg)', 
            padding: '4rem 2rem', 
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 0 50px rgba(212, 175, 55, 0.15)'
          }}
        >
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(ellipse, rgba(212,175,55,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
          
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem', position: 'relative', zIndex: 1, lineHeight: 1.1 }}>
            The Need for Multiplying Leaders <br/> Has Never Been Greater.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 2.5rem', position: 'relative', zIndex: 1 }}>
            You already have vision and people. Now it's time to multiply leadership.
          </p>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Link href="/connect" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.125rem' }}>
              Connect With Us Today
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
