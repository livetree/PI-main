'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, ShieldCheck, Zap, ArrowUpRight, Crown } from 'lucide-react';

export default function Home() {
  // Global deep background parallax (very subtle)
  const { scrollYProgress: globalScroll } = useScroll();
  const bgY = useTransform(globalScroll, [0, 1], ['0%', '15%']); 

  return (
    <div style={{ position: 'relative', overflowX: 'clip', backgroundColor: 'var(--bg)' }}>
      
      {/* DEEP PARALLAX BACKGROUND */}
      <motion.div style={{ position: 'fixed', top: '-10%', left: '-5%', width: '120vw', height: '120vh', background: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)', zIndex: 0, y: bgY, pointerEvents: 'none' }} />

      {/* 1. HERO SECTION */}
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, padding: '10rem 1rem 6rem' }}>
        <div className="container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="pill-tag" style={{ marginBottom: '2rem', background: 'rgba(21, 27, 41, 0.8)', backdropFilter: 'blur(10px)' }}>
            <Zap size={14} color="var(--brand-primary)" /> A New Leadership Paradigm
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '1.5rem', textTransform: 'uppercase' }}
          >
            As Vision Expands,<br />
            <span className="gradient-text">Leaders Must Multiply.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'var(--text-secondary)', maxWidth: '650px', lineHeight: 1.6, marginBottom: '2.5rem' }}
          >
            Growth creates opportunity—but also pressure. Without developed leaders, vision stalls. We equip leaders who carry and multiply what God is building.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <Link href="/connect" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.125rem' }}>
              Launch Training
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. THE 5 PILLARS (Fluid CSS Grid Parallax) */}
      <section style={{ position: 'relative', zIndex: 15, padding: '2rem 1rem 6rem' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Structure the Movement
            </motion.h2>
            <p style={{ color: 'var(--brand-primary)', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.875rem' }}>Dynamic Foundations</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
            
            {/* Box 1: Jesus's Kingdom (Spans full width on mobile, prominent) */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
              className="glass-card glass-card-highlight" 
              style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '4rem 2rem' }}
            >
              <div style={{ background: 'var(--brand-gradient)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', marginBottom: '1.5rem', boxShadow: '0 0 50px rgba(212,175,55,0.4)' }}>
                <Crown size={40} />
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', lineHeight: 1 }}>Jesus's Kingdom</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginTop: '1rem' }}>The Absolute Foundation</p>
            </motion.div>

            {/* Left Column (Staggered up) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: 'clamp(0rem, 5vw, 4rem)' }}>
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="glass-card">
                <div style={{ fontSize: '1rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem' }}>01</div>
                <ShieldCheck size={36} color="var(--brand-secondary)" style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Leaders Equipped</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>Moving beyond theory into rigorous application and practical discipleship.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="glass-card">
                <div style={{ fontSize: '1rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem' }}>03</div>
                <TrendingUp size={36} color="var(--brand-secondary)" style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem', textTransform: 'uppercase', lineHeight: 1.1 }}>Limitations Minimized</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>Decentralizing responsibility to uncap organizational impact.</p>
              </motion.div>
            </div>

            {/* Right Column (Staggered down) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="glass-card">
                <div style={{ fontSize: '1rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem' }}>02</div>
                <Users size={36} color="var(--brand-secondary)" style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Raising Leaders</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>Disciples formulating disciples to physically sustain massive relational scale.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="glass-card">
                <div style={{ fontSize: '1rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem' }}>04</div>
                <ArrowUpRight size={36} color="var(--brand-secondary)" style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Kingdom Advanced</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>Creating violent ripples of impact extending across global communities.</p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PATHWAY (Collapsing Sticky Stack - Flawless on Mobile) */}
      <section style={{ padding: '6rem 1rem 8rem', position: 'relative', zIndex: 10 }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', textTransform: 'uppercase', marginBottom: '1rem' }}>The Pathway</motion.h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>A reproducible framework engineered for scale.</p>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Phase 1 */}
            <div className="glass-card" style={{ position: 'sticky', top: '10vh', marginBottom: '2rem', borderTop: '4px solid var(--brand-primary)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', zIndex: 1 }}>
              <div style={{ fontSize: '1rem', letterSpacing: '0.2em', color: 'var(--brand-primary)', marginBottom: '1rem' }}>PHASE I</div>
              <h3 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', textTransform: 'uppercase' }}>Foundations</h3>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>Root leaders in Jesus's Kingdom and their absolute identity. Lead from deep relationship rather than organizational duty.</p>
            </div>

            {/* Phase 2 */}
            <div className="glass-card glass-card-highlight" style={{ position: 'sticky', top: '15vh', marginBottom: '2rem', boxShadow: '0 -10px 40px rgba(0,0,0,0.5)', zIndex: 2 }}>
              <div style={{ fontSize: '1rem', letterSpacing: '0.2em', color: 'var(--brand-secondary)', marginBottom: '1rem' }}>PHASE II</div>
              <h3 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', textTransform: 'uppercase' }}>Activation</h3>
              <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>Move leaders entirely out of the classroom and into real-life contextual application, emphasizing practical discipleship maneuvers.</p>
            </div>

            {/* Phase 3 */}
            <div className="glass-card" style={{ position: 'sticky', top: '20vh', borderTop: '4px solid #fff', boxShadow: '0 -20px 50px rgba(0,0,0,0.8)', zIndex: 3 }}>
              <div style={{ fontSize: '1rem', letterSpacing: '0.2em', color: 'white', marginBottom: '1rem' }}>PHASE III</div>
              <h3 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', textTransform: 'uppercase' }}>Multiplication</h3>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>Equip leaders to rigorously reproduce others, generating a constantly compounding, generation-spanning movement logic.</p>
              <Link href="/training" className="btn btn-primary" style={{ marginTop: '2rem', fontSize: '1rem' }}>View the Architecture <ArrowRight size={16} /></Link>
            </div>
          </div>
          
        </div>
      </section>

      {/* 4. DYNAMIC FINAL CTA (Aggressive Reveal) */}
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem 8rem' }}>
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }} 
          whileInView={{ opacity: 1, y: 0, scale: 1 }} 
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ 
            background: 'var(--surface-elevated)', 
            border: '1px solid rgba(212, 175, 55, 0.4)', 
            borderRadius: 'var(--radius-lg)', 
            padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem)', 
            textAlign: 'center',
            position: 'relative',
            maxWidth: '900px',
            width: '100%',
            boxShadow: '0 0 80px rgba(212, 175, 55, 0.15)'
          }}
        >
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(ellipse, rgba(212,175,55,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
          
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '1.5rem', position: 'relative', zIndex: 1, lineHeight: 1, textTransform: 'uppercase', letterSpacing: '-0.03em' }}>
            The Need for Leaders <br/> Has Never Been Greater.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', maxWidth: '600px', margin: '0 auto 3rem', position: 'relative', zIndex: 1, lineHeight: 1.6 }}>
            You have the vision. You have the people. <br /> It's time to drastically multiply the impact.
          </p>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Link href="/connect" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.125rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Initiate Contact
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
