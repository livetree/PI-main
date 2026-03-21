'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, ShieldCheck, Zap, ArrowUpRight, Crown } from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  // Global page scroll for deep background parallax
  const { scrollYProgress: globalScroll } = useScroll();
  const smoothGlobal = useSpring(globalScroll, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Background Parallax Layers
  const bgY1 = useTransform(smoothGlobal, [0, 1], ['0%', '50%']); // Slow background drop
  const bgY2 = useTransform(smoothGlobal, [0, 1], ['0%', '-30%']); // Fast ascent layer
  const bgRotate = useTransform(smoothGlobal, [0, 1], [0, 360]);

  // Hero Section Parallax
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 0.9]);

  // The 5 Pillars (Exploding Parallax)
  const pillarsRef = useRef(null);
  const { scrollYProgress: pillarsScroll } = useScroll({ target: pillarsRef, offset: ["start end", "end start"] });
  
  // Each pillar flies in at radically different speeds creating extreme depth (Darknode vibe)
  const p1Y = useTransform(pillarsScroll, [0.1, 0.8], [400, -200]);
  const p2Y = useTransform(pillarsScroll, [0.2, 0.9], [600, -300]);
  const p3Y = useTransform(pillarsScroll, [0.15, 0.85], [500, -100]);
  const p4Y = useTransform(pillarsScroll, [0.3, 1], [700, -400]);
  const p5Y = useTransform(pillarsScroll, [0.25, 0.95], [550, -250]);

  const p1Scale = useTransform(pillarsScroll, [0.2, 0.5], [0.8, 1]);

  // Horizontal Sticky Scroll Section (The Pathway)
  const stickyRef = useRef(null);
  const { scrollYProgress: stickyScroll } = useScroll({ target: stickyRef, offset: ["start start", "end end"] });
  const horizontalX = useTransform(stickyScroll, [0, 1], ["0%", "-66.666%"]);
  const pathwayOpacity = useTransform(stickyScroll, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div style={{ position: 'relative', overflowX: 'clip', backgroundColor: 'var(--bg)' }}>
      
      {/* MASSIVE DEEP PARALLAX BACKGROUNDS */}
      <motion.div style={{ position: 'fixed', top: '-20%', left: '-10%', width: '120vw', height: '120vh', background: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 60%)', zIndex: 0, y: bgY1, pointerEvents: 'none' }} />
      <motion.div style={{ position: 'fixed', top: '10%', right: '-15%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(37,99,235,0.03) 0%, transparent 70%)', zIndex: 0, y: bgY2, rotate: bgRotate, pointerEvents: 'none' }} />

      {/* 1. HERO SECTION */}
      <motion.section 
        ref={heroRef}
        style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, y: heroY, opacity: heroOpacity, scale: heroScale }}
      >
        <div className="container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="pill-tag" style={{ marginBottom: '2rem', background: 'rgba(21, 27, 41, 0.6)', backdropFilter: 'blur(10px)' }}>
            <Zap size={14} color="var(--brand-primary)" /> A New Leadership Paradigm
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.05em', marginBottom: '2rem', textTransform: 'uppercase' }}
          >
            As Vision Expands,<br />
            <span className="gradient-text">Leaders Must Multiply.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', color: 'var(--text-secondary)', maxWidth: '700px', lineHeight: 1.6 }}
          >
            Growth creates opportunity—but also pressure. Without developed leaders, vision stalls. We equip leaders who carry and multiply what God is building.
          </motion.p>
        </div>
      </motion.section>

      {/* 2. THE 5 PILLARS (Extreme Vertical Parallax Cluster) */}
      <section ref={pillarsRef} style={{ position: 'relative', minHeight: '150vh', paddingTop: '10vh', paddingBottom: '20vh', zIndex: 15 }}>
        <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '30vh' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.03em', textTransform: 'uppercase' }}>Structure the Movement</h2>
            <p style={{ color: 'var(--brand-primary)', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.875rem' }}>Dynamic Foundations</p>
          </div>

          <div style={{ position: 'relative', width: '100%', maxWidth: '1000px', minHeight: '80vh' }}>
            
            {/* Jesus First (Center Massive) */}
            <motion.div style={{ y: p1Y, scale: p1Scale, position: 'absolute', top: '10%', left: '50%', x: '-50%', zIndex: 20, width: '90%', maxWidth: '400px' }} className="glass-card glass-card-highlight">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ background: 'var(--brand-gradient)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', marginBottom: '1.5rem', boxShadow: '0 0 50px rgba(212,175,55,0.4)' }}>
                  <Crown size={40} />
                </div>
                <h2 style={{ fontSize: '2.5rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', lineHeight: 1 }}>Jesus First</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginTop: '1rem' }}>The Absolute Foundation</p>
              </div>
            </motion.div>

            {/* Left and Right Orbiting Parallax Pillars */}
            <motion.div style={{ y: p2Y, position: 'absolute', top: '30%', left: '0', zIndex: 10, width: '85%', maxWidth: '300px' }} className="glass-card">
              <div style={{ fontSize: '1rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem' }}>01</div>
              <ShieldCheck size={32} color="var(--brand-secondary)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Leaders Equipped</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Moving beyond theory into rigorous application.</p>
            </motion.div>

            <motion.div style={{ y: p3Y, position: 'absolute', top: '45%', right: '0', zIndex: 12, width: '85%', maxWidth: '320px' }} className="glass-card">
              <div style={{ fontSize: '1rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem' }}>02</div>
              <Users size={32} color="var(--brand-secondary)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Raising Leaders</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Disciples formulating disciples to sustain massive scale.</p>
            </motion.div>

            <motion.div style={{ y: p4Y, position: 'absolute', top: '70%', left: '5%', zIndex: 15, width: '90%', maxWidth: '300px' }} className="glass-card">
              <div style={{ fontSize: '1rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem' }}>03</div>
              <TrendingUp size={32} color="var(--brand-secondary)" style={{ marginBottom: '1.5rem', transform: 'rotate(180deg)' }} />
              <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem', textTransform: 'uppercase', lineHeight: 1.1 }}>Limitations Minimized</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Decentralizing responsibility to uncap organizational impact.</p>
            </motion.div>

            <motion.div style={{ y: p5Y, position: 'absolute', top: '80%', right: '5%', zIndex: 18, width: '90%', maxWidth: '320px' }} className="glass-card glass-card-highlight">
              <div style={{ fontSize: '1rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem' }}>04</div>
              <ArrowUpRight size={32} color="var(--brand-secondary)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Kingdom Advanced</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Creating massive ripple effects across global communities.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. HORIZONTAL STICKY SCROLL SECTION (Darknode aesthetic) */}
      <section ref={stickyRef} style={{ height: '300vh', position: 'relative' }}>
        {/* Sticky Container */}
        <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', background: 'var(--surface-elevated)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          
          {/* Fading Background Context */}
          <motion.div style={{ position: 'absolute', top: '10%', left: '5%', opacity: pathwayOpacity }}>
            <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase', fontWeight: 800, color: 'var(--bg)' }}>The Pathway</h2>
          </motion.div>

          {/* Sliding Content */}
          <motion.div style={{ x: horizontalX, display: 'flex', width: '300vw', height: '100%', alignItems: 'center', paddingLeft: '10vw' }}>
            
            {/* Phase I */}
            <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
              <div className="glass-card" style={{ width: '90%', maxWidth: '800px', borderTop: '4px solid var(--brand-primary)' }}>
                <div style={{ fontSize: '1.5rem', letterSpacing: '0.2em', color: 'var(--brand-primary)', marginBottom: '1rem' }}>PHASE I</div>
                <h3 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>Foundations</h3>
                <p style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>Root leaders in Jesus and their absolute Kingdom identity. Lead from relationship rather than duty.</p>
              </div>
            </div>

            {/* Phase II */}
            <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
              <div className="glass-card glass-card-highlight" style={{ width: '90%', maxWidth: '800px' }}>
                <div style={{ fontSize: '1.5rem', letterSpacing: '0.2em', color: 'var(--brand-secondary)', marginBottom: '1rem' }}>PHASE II</div>
                <h3 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>Activation</h3>
                <p style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>Move leaders out of the classroom and into real-life application, emphasizing practical discipleship maneuvers.</p>
              </div>
            </div>

            {/* Phase III */}
            <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', paddingRight: '10vw' }}>
              <div className="glass-card" style={{ width: '90%', maxWidth: '800px', borderTop: '4px solid #fff' }}>
                <div style={{ fontSize: '1.5rem', letterSpacing: '0.2em', color: 'white', marginBottom: '1rem' }}>PHASE III</div>
                <h3 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>Multiplication</h3>
                <p style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>Equip leaders to rigorously reproduce others, generating a scalable, generational movement logic.</p>
                <Link href="/training" className="btn btn-primary" style={{ marginTop: '3rem', fontSize: '1.25rem' }}>View Framework</Link>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 4. DYNAMIC FINAL CTA (Aggressive Reveal) */}
      <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotateX: 20 }} 
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }} 
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ 
            background: 'var(--bg)', 
            border: '1px solid rgba(212, 175, 55, 0.4)', 
            borderRadius: 'var(--radius-lg)', 
            padding: '6vw 4vw', 
            textAlign: 'center',
            position: 'relative',
            maxWidth: '1000px',
            width: '100%',
            boxShadow: '0 0 100px rgba(212, 175, 55, 0.2)'
          }}
        >
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(ellipse, rgba(212,175,55,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
          
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '1.5rem', position: 'relative', zIndex: 1, lineHeight: 1, textTransform: 'uppercase', letterSpacing: '-0.03em' }}>
            The Need for Leaders <br/> Has Never Been Greater.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', maxWidth: '700px', margin: '0 auto 3.5rem', position: 'relative', zIndex: 1 }}>
            You have the vision. You have the people. <br className="hide-on-mobile"/> It's time to multiply impact.
          </p>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Link href="/connect" className="btn btn-primary" style={{ padding: '1.25rem 4rem', fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Initiate Contact
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
