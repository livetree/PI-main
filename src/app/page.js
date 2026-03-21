'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, ShieldCheck, Zap, ArrowUpRight, Crown } from 'lucide-react';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  // Aggressive Darknode Fly-In Physics (Safe for mobile, restricted to Y axis)
  const flyInUp = {
    hidden: { opacity: 0, y: 150, scale: 0.85, rotateX: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      rotateX: 0,
      transition: { type: "spring", damping: 20, stiffness: 80 } 
    }
  };

  const flyInLeft = {
    hidden: { opacity: 0, x: -100, y: 100 },
    visible: { opacity: 1, x: 0, y: 0, transition: { type: "spring", damping: 20, stiffness: 80 } }
  };

  const flyInRight = {
    hidden: { opacity: 0, x: 100, y: 100 },
    visible: { opacity: 1, x: 0, y: 0, transition: { type: "spring", damping: 20, stiffness: 80 } }
  };

  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--bg)', overflowX: 'hidden', color: '#fff' }}>
      
      {/* MASSIVE DEEP PARALLAX BACKGROUND GRID */}
      <motion.div style={{ position: 'fixed', top: '-10%', left: '-5%', width: '120vw', height: '120vh', backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 60%), linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px)', backgroundSize: '100% 100%, 50px 50px, 50px 50px', zIndex: 0, y: bgY, pointerEvents: 'none' }} />

      {/* 1. HERO SECTION */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, padding: '10rem 1.5rem 6rem' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '2px', height: '100%', background: 'linear-gradient(to bottom, rgba(212,175,55,0), rgba(212,175,55,0.5))', zIndex: -1 }} />
        
        <div className="container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 100, delay: 0.2 }} className="pill-tag" style={{ marginBottom: '2rem', background: 'var(--surface-elevated)', border: '1px solid var(--brand-primary)', backdropFilter: 'blur(20px)' }}>
            <Zap size={14} color="var(--brand-primary)" /> NEW LEADERSHIP PARADIGM
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 100, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.4 }}
            style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 800, lineHeight: 0.9, letterSpacing: '-0.05em', margin: '0 0 2rem 0', textTransform: 'uppercase' }}
          >
            AS VISION EXPANDS,<br />
            <span style={{ color: 'var(--brand-primary)', textShadow: '0 0 40px rgba(212,175,55,0.4)' }}>LEADERS MUST MULTIPLY.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
            style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: 1.6, marginBottom: '1.5rem' }}
          >
            Growth brings opportunity—and pressure.<br className="hide-on-mobile"/> Without leaders, vision slows.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}
            style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: 1.6, marginBottom: '3.5rem' }}
          >
            With trained leaders:<br/>
            <strong style={{ color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Vision accelerates. Movements begin.</strong>
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 100, delay: 1 }} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/connect" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em', clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)', borderRadius: 0 }}>
              Start a Conversation
            </Link>
            <Link href="/training" className="btn btn-outline" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: 0, border: '1px solid rgba(212,175,55,0.4)', color: 'var(--brand-primary)' }}>
              Explore the Training Pathway
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. THE CHALLENGE (Inverted Yellow Stand-Out Section) */}
      <section style={{ padding: '10rem 1.5rem', position: 'relative', zIndex: 10, background: 'var(--brand-primary)', color: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: 'var(--bg)', textTransform: 'uppercase', lineHeight: 0.9, marginBottom: '4rem', textAlign: 'center' }}>
              LEADERSHIP GAPS<br/><span style={{ color: 'var(--bg)', opacity: 0.8 }}>LIMIT KINGDOM IMPACT</span>
            </h2>
          </motion.div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              "A few leaders carry most of the responsibility",
              "People attend but aren't activated",
              "Potential leaders remain undeveloped",
              "Vision stalls instead of multiplying"
            ].map((challenge, i) => (
              <motion.div key={i} variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card" style={{ padding: '2.5rem', background: 'rgba(11, 17, 33, 0.05)', border: '1px solid rgba(11, 17, 33, 0.1)', borderLeft: '4px solid var(--bg)', display: 'flex', gap: '1rem', alignItems: 'center', boxShadow: 'none' }}>
                <TrendingUp color="var(--bg)" size={32} style={{ transform: 'rotate(180deg)', flexShrink: 0 }} />
                <p style={{ fontSize: '1.25rem', color: 'var(--bg)', fontWeight: 800, lineHeight: 1.5 }}>{challenge}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE 5 BOXES (Deep Navy backgrounds) */}
      <section style={{ position: 'relative', zIndex: 15, padding: '10rem 1rem 6rem', overflowX: 'hidden', background: 'var(--surface)' }}>
        {/* Connection Line */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '2px', height: '100%', background: 'linear-gradient(to bottom, rgba(212,175,55,0.5), rgba(212,175,55,0.5))', zIndex: 0 }} />

        <div className="container" style={{ position: 'relative', maxWidth: '1200px', zIndex: 10 }}>
          
          {/* Base Anchor: Jesus's Kingdom */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem', alignItems: 'center' }}>
            <motion.div 
              variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              style={{ width: '100%', maxWidth: '800px', background: 'var(--bg)', padding: '5rem 2rem', border: '1px solid var(--brand-primary)', boxShadow: '0 0 100px rgba(212,175,55,0.1)', textAlign: 'center', position: 'relative', backdropFilter: 'blur(20px)' }}
            >
              <div style={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', background: 'var(--surface)', border: '2px solid var(--brand-primary)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary)', boxShadow: '0 0 50px rgba(212,175,55,0.4)', zIndex: 20 }}>
                <Crown size={40} />
              </div>
              <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1, marginTop: '2rem' }}>Jesus's Kingdom</h2>
            </motion.div>

            <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%', maxWidth: '1000px' }}>
              <motion.div variants={flyInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} style={{ width: '100%', maxWidth: '450px', background: 'var(--bg)', padding: '3rem', borderLeft: '4px solid var(--brand-primary)', position: 'relative', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
                <div style={{ position: 'absolute', top: '50%', right: '-40px', width: '40px', height: '2px', background: 'var(--brand-primary)', zIndex: -1 }} className="hide-on-mobile" />
                <div style={{ fontSize: '1.25rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '0.1em' }}>01 .</div>
                <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0', textTransform: 'uppercase' }}>Leaders Equipped</h3>
              </motion.div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', maxWidth: '1000px' }}>
              <motion.div variants={flyInRight} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} style={{ width: '100%', maxWidth: '450px', background: 'var(--bg)', padding: '3rem', borderRight: '4px solid var(--brand-primary)', position: 'relative', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
                <div style={{ position: 'absolute', top: '50%', left: '-40px', width: '40px', height: '2px', background: 'var(--brand-primary)', zIndex: -1 }} className="hide-on-mobile" />
                <div style={{ fontSize: '1.25rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '0.1em' }}>02 .</div>
                <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0', textTransform: 'uppercase' }}>Leaders Raising Leaders</h3>
              </motion.div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%', maxWidth: '1000px' }}>
              <motion.div variants={flyInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} style={{ width: '100%', maxWidth: '450px', background: 'var(--bg)', padding: '3rem', borderLeft: '4px solid var(--brand-primary)', position: 'relative', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
                <div style={{ position: 'absolute', top: '50%', right: '-40px', width: '40px', height: '2px', background: 'var(--brand-primary)', zIndex: -1 }} className="hide-on-mobile" />
                <div style={{ fontSize: '1.25rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '0.1em' }}>03 .</div>
                <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0', textTransform: 'uppercase' }}>Limitations Minimized</h3>
              </motion.div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', maxWidth: '1000px' }}>
              <motion.div variants={flyInRight} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} style={{ width: '100%', maxWidth: '450px', background: 'var(--bg)', padding: '3rem', borderRight: '4px solid var(--brand-primary)', borderBottom: '1px solid rgba(212,175,55,0.4)', position: 'relative', boxShadow: '0 0 50px rgba(212,175,55,0.1)' }}>
                <div style={{ position: 'absolute', top: '50%', left: '-40px', width: '40px', height: '2px', background: 'var(--brand-primary)', zIndex: -1 }} className="hide-on-mobile" />
                <div style={{ fontSize: '1.25rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '0.1em' }}>04 .</div>
                <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0', textTransform: 'uppercase' }}>The Kingdom Advanced</h3>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THE PATHWAY (Immersive 100vh Slides with Deep Navy) */}
      <section style={{ position: 'relative', zIndex: 10, background: 'var(--bg)' }}>
        
        {/* Pathway Header */}
        <div style={{ padding: '10rem 1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#fff', textTransform: 'uppercase', marginBottom: '2rem', lineHeight: 0.9 }}>
              A CLEAR LEADERSHIP<br/><span style={{ color: 'var(--brand-primary)' }}>PATHWAY.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', maxWidth: '700px', margin: '0 auto', letterSpacing: '0.05em' }}>
              We help you build leaders who multiply through a reproducible framework.
            </p>
          </motion.div>
        </div>

        {/* Phase 1: 100vh */}
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '6rem 1.5rem', position: 'relative', overflow: 'hidden', background: 'var(--surface)' }}>
          <div style={{ position: 'absolute', top: '10%', right: '-10%', fontSize: '40vw', fontWeight: 900, color: 'rgba(255,255,255,0.02)', pointerEvents: 'none', lineHeight: 0.8 }}>01</div>
          <div className="container" style={{ maxWidth: '1000px', position: 'relative', zIndex: 1 }}>
            <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <div style={{ fontSize: '1.5rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '0.3em' }}>PHASE 1</div>
              <h3 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#fff', textTransform: 'uppercase', marginBottom: '2rem', lineHeight: 0.9, letterSpacing: '-0.03em' }}>Foundations</h3>
              <p style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, fontWeight: 300, borderLeft: '4px solid var(--brand-primary)', paddingLeft: '2rem' }}>
                Root leaders in Jesus and their absolute Kingdom identity. Lead from relationship, not just responsibility.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Phase 2: 100vh */}
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '6rem 1.5rem', position: 'relative', overflow: 'hidden', background: 'radial-gradient(circle at 100% 50%, rgba(212,175,55,0.05) 0%, var(--bg) 60%)' }}>
          <div style={{ position: 'absolute', top: '10%', left: '-10%', fontSize: '40vw', fontWeight: 900, color: 'rgba(255,255,255,0.02)', pointerEvents: 'none', lineHeight: 0.8 }}>02</div>
          <div className="container" style={{ maxWidth: '1000px', position: 'relative', zIndex: 1 }}>
            <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <div style={{ fontSize: '1.5rem', color: 'var(--brand-secondary)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '0.3em' }}>PHASE 2</div>
              <h3 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#fff', textTransform: 'uppercase', marginBottom: '2rem', lineHeight: 0.9, letterSpacing: '-0.03em' }}>Activation</h3>
              <p style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, fontWeight: 300, borderLeft: '4px solid var(--brand-secondary)', paddingLeft: '2rem' }}>
                Move leaders out of the classroom and into real-life application and obedience. We emphasize practical disciple-making.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Phase 3: 100vh */}
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '6rem 1.5rem', position: 'relative', overflow: 'hidden', background: 'var(--surface-elevated)' }}>
          <div style={{ position: 'absolute', top: '10%', right: '-10%', fontSize: '40vw', fontWeight: 900, color: 'rgba(255,255,255,0.02)', pointerEvents: 'none', lineHeight: 0.8 }}>03</div>
          <div className="container" style={{ maxWidth: '1000px', position: 'relative', zIndex: 1 }}>
            <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <div style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 800, marginBottom: '1rem', letterSpacing: '0.3em' }}>PHASE 3</div>
              <h3 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: 'var(--brand-primary)', textTransform: 'uppercase', marginBottom: '2rem', lineHeight: 0.9, letterSpacing: '-0.03em', textShadow: '0 0 50px rgba(212,175,55,0.3)' }}>Multiplication</h3>
              <p style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, fontWeight: 300, borderLeft: '4px solid #fff', paddingLeft: '2rem' }}>
                Equip leaders to rigorously disciple and reproduce others. Movements that multiply across generations.
              </p>

              <div style={{ marginTop: '5rem' }}>
                <Link href="/training" className="btn btn-outline" style={{ padding: '1.25rem 4rem', fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: 0, border: '1px solid rgba(212,175,55,0.4)', color: 'var(--brand-primary)' }}>
                  Explore Training Pathway <ArrowRight size={20} style={{ marginLeft: '1rem' }} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* 5. FINAL CTA */}
      <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8rem 1.5rem', background: 'var(--bg)' }}>
        <motion.div 
          variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ width: '100%', maxWidth: '1000px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--brand-primary), transparent)', marginBottom: '4rem' }} />
          
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '2rem', color: '#fff', lineHeight: 0.9, letterSpacing: '-0.04em', textTransform: 'uppercase' }}>
            THE NEED FOR MULTIPLYING LEADERS HAS NEVER BEEN GREATER.
          </h2>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', marginBottom: '5rem', lineHeight: 1.5, maxWidth: '800px' }}>
            You already have vision and people. Now it's time to multiply leadership.
          </p>
          
          <Link href="/connect" className="btn btn-primary" style={{ padding: '1.5rem 5rem', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)', borderRadius: 0, boxShadow: '0 0 40px rgba(212,175,55,0.2)' }}>
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
