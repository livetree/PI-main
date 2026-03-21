'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, ShieldCheck, Zap, ArrowUpRight, Crown } from 'lucide-react';
import { useRef, useEffect } from 'react';

export default function Home() {
  // Deep background parallax
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']); 

  // Aggressive Vertical Spring configs (Safe for mobile, no horizontal clipping)
  const flyInUp = {
    hidden: { opacity: 0, y: 150, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring", damping: 20, stiffness: 80 } 
    }
  };

  const horizontalScrollRef = useRef(null);

  // Enable mouse wheel horizontal scrolling on the full-screen pathway section for desktop users
  useEffect(() => {
    const el = horizontalScrollRef.current;
    if (el) {
      const onWheel = e => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          el.scrollLeft += e.deltaY;
        }
      };
      // Only attach if we want to hijack vertical scroll for this section, 
      // but native overflow-x is usually preferred to prevent layout trapping.
    }
  }, []);

  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--bg)', overflowX: 'clip', color: '#fff' }}>
      
      {/* MASSIVE DEEP PARALLAX BACKGROUND GRID */}
      <motion.div style={{ position: 'fixed', top: '-10%', left: '-5%', width: '120vw', height: '120vh', backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 60%), linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px)', backgroundSize: '100% 100%, 50px 50px, 50px 50px', zIndex: 0, y: bgY, pointerEvents: 'none' }} />

      {/* 1. HERO SECTION */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, padding: '10rem 1rem 6rem' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '2px', height: '100%', background: 'linear-gradient(to bottom, rgba(212,175,55,0), rgba(212,175,55,0.5))', zIndex: -1 }} />
        
        <div className="container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 100, delay: 0.2 }} className="pill-tag" style={{ marginBottom: '2rem', background: 'rgba(21, 27, 41, 0.9)', border: '1px solid var(--brand-primary)', backdropFilter: 'blur(20px)' }}>
            <Zap size={14} color="var(--brand-primary)" /> A New Leadership Paradigm
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 100, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.4 }}
            style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.04em', margin: '0 0 2rem 0' }}
          >
            As Vision Expands,<br />
            <span className="gradient-text">Leaders Must Multiply.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.35rem)', color: 'var(--text-secondary)', maxWidth: '700px', lineHeight: 1.6, marginBottom: '3rem' }}
          >
            Growth creates opportunity—but also pressure. Without developed leaders, vision stalls. We equip leaders who carry and multiply what God is building.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 100, delay: 1 }}>
            <Link href="/connect" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem', borderRadius: '50px' }}>
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. THE 5 PILLARS */}
      <section style={{ position: 'relative', zIndex: 15, padding: '10rem 1rem 6rem', overflowX: 'hidden' }}>
        {/* Connection Line */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '2px', height: '100%', background: 'linear-gradient(to bottom, rgba(212,175,55,0.5), rgba(212,175,55,0.5))', zIndex: 0 }} />

        <div className="container" style={{ position: 'relative', maxWidth: '1200px', zIndex: 10 }}>
          
          <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
            <motion.h2 variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', letterSpacing: '-0.03em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              Structure the Movement
            </motion.h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem', alignItems: 'center' }}>
            
            {/* Center Node: Jesus First */}
            <motion.div 
              variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              style={{ width: '100%', maxWidth: '800px', background: 'var(--surface-elevated)', padding: '5rem 2rem', border: '1px solid var(--border)', boxShadow: '0 0 100px rgba(212,175,55,0.1)', textAlign: 'center', position: 'relative', borderRadius: '24px' }}
            >
              <div style={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', background: '#000', border: '2px solid var(--brand-primary)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary)', boxShadow: '0 0 50px rgba(212,175,55,0.4)', zIndex: 20 }}>
                <Crown size={40} />
              </div>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', lineHeight: 1, marginTop: '2rem' }}>Jesus First</h2>
            </motion.div>

            {/* Alternating Flow Boxes */}
            <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%', maxWidth: '1000px' }}>
              <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} style={{ width: '100%', maxWidth: '450px', background: 'var(--surface)', padding: '3rem', borderLeft: '4px solid var(--brand-primary)', position: 'relative', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}>
                <div style={{ position: 'absolute', top: '50%', right: '-40px', width: '40px', height: '2px', background: 'var(--brand-primary)', zIndex: -1 }} className="hide-on-mobile" />
                <div style={{ fontSize: '1.25rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem' }}>01</div>
                <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0', textTransform: 'uppercase' }}>Leaders Equipped</h3>
              </motion.div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', maxWidth: '1000px' }}>
              <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} style={{ width: '100%', maxWidth: '450px', background: 'var(--surface)', padding: '3rem', borderRight: '4px solid var(--brand-primary)', position: 'relative', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}>
                <div style={{ position: 'absolute', top: '50%', left: '-40px', width: '40px', height: '2px', background: 'var(--brand-primary)', zIndex: -1 }} className="hide-on-mobile" />
                <div style={{ fontSize: '1.25rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem' }}>02</div>
                <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0', textTransform: 'uppercase' }}>Leaders Raising Leaders</h3>
              </motion.div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%', maxWidth: '1000px' }}>
              <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} style={{ width: '100%', maxWidth: '450px', background: 'var(--surface)', padding: '3rem', borderLeft: '4px solid var(--brand-primary)', position: 'relative', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}>
                <div style={{ position: 'absolute', top: '50%', right: '-40px', width: '40px', height: '2px', background: 'var(--brand-primary)', zIndex: -1 }} className="hide-on-mobile" />
                <div style={{ fontSize: '1.25rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem' }}>03</div>
                <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0', textTransform: 'uppercase' }}>Limitations Minimized</h3>
              </motion.div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', maxWidth: '1000px' }}>
              <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} style={{ width: '100%', maxWidth: '450px', background: 'var(--surface-elevated)', padding: '3rem', borderRight: '4px solid var(--brand-primary)', position: 'relative', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)', border: '1px solid rgba(212,175,55,0.4)' }}>
                <div style={{ position: 'absolute', top: '50%', left: '-40px', width: '40px', height: '2px', background: 'var(--brand-primary)', zIndex: -1 }} className="hide-on-mobile" />
                <div style={{ fontSize: '1.25rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem' }}>04</div>
                <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0', textTransform: 'uppercase' }}>The Kingdom Advanced</h3>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PATHWAY (Full-Screen Native Horizontal CSS Snapping Scroll) */}
      <section style={{ position: 'relative', zIndex: 10, padding: '10rem 0', background: 'var(--surface)' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', textTransform: 'uppercase', color: '#fff', marginBottom: '1rem' }}>
            A Clear Leadership Pathway
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>We help you build leaders who multiply through a reproducible framework.</p>
        </div>

        {/* Native CSS Scroll Snapping container (100vw physics) */}
        <div 
          ref={horizontalScrollRef}
          style={{ 
            display: 'flex', 
            overflowX: 'auto', 
            scrollSnapType: 'x mandatory', 
            width: '100vw', 
            padding: '2rem 5vw',
            gap: '2vw',
            scrollBehavior: 'smooth',
            MsOverflowStyle: 'none', /* IE and Edge */
            scrollbarWidth: 'none' /* Firefox */
          }}
          className="no-scrollbar"
        >
          <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
          
          {[
            { phase: 'PHASE I', title: 'Foundations', desc: "Root leaders in Jesus and their absolute Kingdom identity. Lead from relationship, not just responsibility." },
            { phase: 'PHASE II', title: 'Activation', desc: "Move leaders out of the classroom and into real-life application and obedience. We emphasize practical disciple-making." },
            { phase: 'PHASE III', title: 'Multiplication', desc: "Equip leaders to rigorously disciple and reproduce others. Movements that multiply across generations." }
          ].map((item, idx) => (
            <div 
              key={idx}
              style={{ 
                flex: '0 0 90vw', /* Full width per item on mobile */
                maxWidth: '800px', /* Capped on extremely wide desktop monitors */
                height: '70vh', /* Full immersive height */
                scrollSnapAlign: 'center', 
                background: idx === 1 ? 'var(--bg)' : 'var(--surface-elevated)', 
                padding: 'clamp(2rem, 5vw, 5rem)', 
                borderRadius: '32px', 
                border: idx === 1 ? '2px solid var(--brand-primary)' : '1px solid var(--border)', 
                boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '1.25rem', color: 'var(--brand-primary)', letterSpacing: '0.2em', fontWeight: 800, marginBottom: '2rem' }}>{item.phase}</div>
              <h3 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', textTransform: 'uppercase', marginBottom: '2rem' }}>{item.title}</h3>
              <p style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>{item.desc}</p>
              
              {idx === 2 && (
                <div style={{ marginTop: '4rem' }}>
                  <Link href="/training" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem', borderRadius: '50px' }}>
                    View Framework Details
                  </Link>
                </div>
              )}
            </div>
          ))}
          {/* Faux element to force padding at the end of the scroll array */}
          <div style={{ flex: '0 0 5vw', height: '10px' }}></div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem', gap: '2rem' }}>
        <motion.div 
          variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-200px" }}
          style={{ textAlign: 'center', width: '100%', maxWidth: '1000px' }}
        >
          <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--brand-primary), transparent)', marginBottom: '4rem' }} />
          
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            The Need for Multiplying Leaders <br/> Has Never Been Greater.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', maxWidth: '750px', margin: '0 auto 4rem', lineHeight: 1.6 }}>
            You already have vision and people. Now it's time to multiply leadership.
          </p>
          
          <Link href="/connect" className="btn btn-primary" style={{ padding: '1.25rem 4rem', fontSize: '1.25rem', borderRadius: '50px' }}>
            Connect With Us Today
          </Link>
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
