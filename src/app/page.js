'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, ShieldCheck, Zap, ArrowUpRight, Crown } from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  // Deep background parallax
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']); 

  // Aggressive Spring configs for the darknode "Fly In" feel
  const flyInVariants = {
    hidden: { opacity: 0, y: 250, scale: 0.85, rotateX: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      rotateX: 0,
      transition: { type: "spring", damping: 20, stiffness: 80, mass: 1 } 
    }
  };

  const flyInLeft = {
    hidden: { opacity: 0, x: -250, y: 150, scale: 0.9 },
    visible: { opacity: 1, x: 0, y: 0, scale: 1, transition: { type: "spring", damping: 20, stiffness: 80 } }
  };

  const flyInRight = {
    hidden: { opacity: 0, x: 250, y: 150, scale: 0.9 },
    visible: { opacity: 1, x: 0, y: 0, scale: 1, transition: { type: "spring", damping: 20, stiffness: 80 } }
  };

  return (
    <div style={{ position: 'relative', backgroundColor: '#0d111a', overflowX: 'clip', color: '#fff' }}>
      
      {/* MASSIVE DEEP PARALLAX BACKGROUND GRID */}
      <motion.div style={{ position: 'fixed', top: '-10%', left: '-5%', width: '120vw', height: '120vh', backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 60%), linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px)', backgroundSize: '100% 100%, 50px 50px, 50px 50px', zIndex: 0, y: bgY, pointerEvents: 'none' }} />

      {/* 1. HERO SECTION (Massive Intro) */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, padding: '10rem 1rem 6rem' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '2px', height: '100%', background: 'linear-gradient(to bottom, rgba(212,175,55,0), rgba(212,175,55,0.5))', zIndex: -1 }} />
        
        <div className="container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 100, delay: 0.2 }} className="pill-tag" style={{ marginBottom: '2rem', background: 'rgba(21, 27, 41, 0.9)', border: '1px solid var(--brand-primary)', backdropFilter: 'blur(20px)' }}>
            <Zap size={14} color="var(--brand-primary)" /> SYSTEM INITIALIZED
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 100, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.4 }}
            style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 800, lineHeight: 0.9, letterSpacing: '-0.05em', margin: '0 0 2rem 0', textTransform: 'uppercase' }}
          >
            AS VISION EXPANDS,<br />
            <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--brand-primary)', textShadow: '0 0 40px rgba(212,175,55,0.4)' }}>LEADERS MULTIPLY.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', color: 'var(--text-secondary)', maxWidth: '700px', lineHeight: 1.6, marginBottom: '3rem' }}
          >
            Growth creates massive pressure parameters. Without heavily equipped leaders, the system stalls. We architecture leaders built to carry and forcefully multiply global vision.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 100, delay: 1 }}>
            <Link href="/connect" className="btn btn-primary" style={{ padding: '1.25rem 4rem', fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.2em', clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)', borderRadius: 0 }}>
              Initiate Core
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. THE 5 PILLARS (Aggressive Node Graph Flow) */}
      <section style={{ position: 'relative', zIndex: 15, padding: '10rem 1rem 6rem', overflowX: 'hidden' }}>
        {/* Node Connection Line */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '2px', height: '100%', background: 'linear-gradient(to bottom, rgba(212,175,55,0.5), rgba(212,175,55,0.5))', zIndex: 0 }} />

        <div className="container" style={{ position: 'relative', maxWidth: '1200px', zIndex: 10 }}>
          
          <div style={{ textAlign: 'center', marginBottom: '10rem' }}>
            <motion.h2 variants={flyInVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', letterSpacing: '-0.03em', textTransform: 'uppercase', marginBottom: '0.5rem', WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
              Structural Nodes
            </motion.h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem', alignItems: 'center' }}>
            
            {/* Center Node: Jesus's Kingdom */}
            <motion.div 
              variants={flyInVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-200px" }}
              style={{ width: '100%', maxWidth: '800px', background: 'rgba(13, 17, 26, 0.8)', padding: '5rem 2rem', border: '1px solid var(--brand-primary)', boxShadow: '0 0 100px rgba(212,175,55,0.1)', textAlign: 'center', position: 'relative', backdropFilter: 'blur(20px)' }}
            >
              <div style={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', background: '#000', border: '2px solid var(--brand-primary)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary)', boxShadow: '0 0 50px rgba(212,175,55,0.4)', zIndex: 20 }}>
                <Crown size={40} />
              </div>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1, marginTop: '2rem' }}>Jesus's Kingdom</h2>
              <p style={{ color: 'var(--brand-secondary)', fontSize: '1.25rem', marginTop: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>The Absolute Core Foundation</p>
            </motion.div>

            {/* Alternating Sub-Nodes */}
            <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%', maxWidth: '1000px' }}>
              <motion.div variants={flyInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-150px" }} style={{ width: '90%', maxWidth: '450px', background: 'rgba(21, 27, 41, 0.9)', padding: '3rem', borderLeft: '4px solid var(--brand-primary)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '50%', right: '-40px', width: '40px', height: '2px', background: 'var(--brand-primary)', zIndex: -1 }} className="hide-on-mobile" />
                <div style={{ fontSize: '1.25rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '0.2em' }}>NODE.01</div>
                <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem', textTransform: 'uppercase' }}>Leaders Equipped</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.6 }}>Deploying leaders beyond theoretical parameters into rigorous geographical application and practical maneuvers.</p>
              </motion.div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', maxWidth: '1000px' }}>
              <motion.div variants={flyInRight} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-150px" }} style={{ width: '90%', maxWidth: '450px', background: 'rgba(21, 27, 41, 0.9)', padding: '3rem', borderRight: '4px solid var(--brand-primary)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '50%', left: '-40px', width: '40px', height: '2px', background: 'var(--brand-primary)', zIndex: -1 }} className="hide-on-mobile" />
                <div style={{ fontSize: '1.25rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '0.2em' }}>NODE.02</div>
                <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem', textTransform: 'uppercase' }}>Raising Leaders</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.6 }}>Disciples formulating recursive disciples to physically sustain massive relational architecture.</p>
              </motion.div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%', maxWidth: '1000px' }}>
              <motion.div variants={flyInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-150px" }} style={{ width: '90%', maxWidth: '450px', background: 'rgba(21, 27, 41, 0.9)', padding: '3rem', borderLeft: '4px solid var(--brand-primary)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '50%', right: '-40px', width: '40px', height: '2px', background: 'var(--brand-primary)', zIndex: -1 }} className="hide-on-mobile" />
                <div style={{ fontSize: '1.25rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '0.2em' }}>NODE.03</div>
                <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem', textTransform: 'uppercase' }}>Limitations Minimized</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.6 }}>Decentralizing responsibility parameters to permanently uncap organizational bandwidth and impact mapping.</p>
              </motion.div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', maxWidth: '1000px' }}>
              <motion.div variants={flyInRight} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-150px" }} style={{ width: '90%', maxWidth: '450px', background: 'rgba(21, 27, 41, 0.9)', padding: '3rem', borderRight: '4px solid var(--brand-primary)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '50%', left: '-40px', width: '40px', height: '2px', background: 'var(--brand-primary)', zIndex: -1 }} className="hide-on-mobile" />
                <div style={{ fontSize: '1.25rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '0.2em' }}>NODE.04</div>
                <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem', textTransform: 'uppercase' }}>Kingdom Advanced</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.6 }}>Generating forceful, violent ripples of strategic impact extending across infinite global community clusters.</p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PATHWAY (Massive Typography & Glitch Slide-Ins) */}
      <section style={{ position: 'relative', zIndex: 10, padding: '10rem 1rem', background: '#0a0d14' }}>
        <div className="container">
          
          <motion.div variants={flyInVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} style={{ marginBottom: '8rem' }}>
            <h2 style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', textTransform: 'uppercase', lineHeight: 0.9, letterSpacing: '-0.05em', color: 'rgba(255,255,255,0.05)', WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>
              PATHWAY <br/> PROTOCOL
            </h2>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
            
            {[
              { phase: 'PHASE.I', title: 'FOUNDATIONS', desc: "Root leaders in Jesus's Kingdom and their absolute identity. Operations must derive from deep relationship rather than organizational duty." },
              { phase: 'PHASE.II', title: 'ACTIVATION', desc: "Move leaders entirely out of the sandbox and into live contextual application. Emphasizing extreme practical discipleship maneuvers." },
              { phase: 'PHASE.III', title: 'MULTIPLICATION', desc: "Equip leaders to rigorously reproduce architecture in others. Generating a constantly compounding, generation-spanning movement machine." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={idx % 2 === 0 ? flyInLeft : flyInRight} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center', padding: '4rem 0', borderTop: '1px solid rgba(212,175,55,0.2)' }}
              >
                <div>
                  <div style={{ fontSize: '1.5rem', color: 'var(--brand-primary)', letterSpacing: '0.3em', fontWeight: 800, marginBottom: '1rem' }}>{item.phase}</div>
                  <h3 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1 }}>{item.title}</h3>
                </div>
                <div>
                  <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* 4. TERMINAL CTA */}
      <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem', background: 'radial-gradient(circle at 50% 100%, rgba(212,175,55,0.1) 0%, #0d111a 60%)' }}>
        <motion.div 
          variants={flyInVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-200px" }}
          style={{ textAlign: 'center', width: '100%', maxWidth: '1000px' }}
        >
          <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--brand-primary), transparent)', marginBottom: '4rem' }} />
          
          <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '-0.05em', lineHeight: 0.9 }}>
            THE NETWORK IS <br/> <span style={{ color: 'var(--brand-primary)' }}>READY FOR SCALE.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', maxWidth: '750px', margin: '0 auto 4rem', lineHeight: 1.6 }}>
            You have the core vision. You have the raw talent. <br /> It's precisely time to forcefully multiply the impact index.
          </p>
          
          <Link href="/connect" className="btn btn-primary" style={{ padding: '1.5rem 5rem', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)', borderRadius: 0 }}>
            ACCESS TRAINING
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
