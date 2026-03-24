'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, TrendingUp, Zap, ChevronRight, Crown, Target, Zap as ZapIcon, User, Network, Users } from 'lucide-react';
import MagicCard from '../components/MagicCard';
import WaveBackground from '../components/WaveBackground';

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Aggressive Darknode Fly-In Physics
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

  // JESUS FIRST: Direct Scroll-Linked Parallax Refs
  const jesusFirstRef = useRef(null);
  const { scrollYProgress: jfScroll } = useScroll({
    target: jesusFirstRef,
    offset: ["0% 100%", "50% 50%"] // Starts when top of section hits bottom of screen, locks when section hits center
  });

  const pt1X = useTransform(jfScroll, [0, 0.6], ['100vw', '0vw']);
  const pt2X = useTransform(jfScroll, [0.1, 0.8], ['120vw', '0vw']);
  const pt3X = useTransform(jfScroll, [0.2, 1.0], ['140vw', '0vw']);
  
  const ptOpacity = useTransform(jfScroll, [0, 0.4], [0, 1]);

  const pointTransforms = [pt1X, pt2X, pt3X];

  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--bg)', overflowX: 'hidden', color: '#fff' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, padding: '10rem 1.5rem 6rem' }}>
        <WaveBackground quadrant={1} opacity={0.6} />
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '2px', height: '100%', background: 'linear-gradient(to bottom, rgba(212,175,55,0), rgba(212,175,55,0.5))', zIndex: -1 }} />
        
        <div className="container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 10 }}>
          
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
          </motion.div>
        </div>
      </section>

      {/* 2. WOW CALL-OUT: THE LEADERSHIP GAP (Light Section) */}
      <section style={{ position: 'relative', zIndex: 10, padding: '10rem 1.5rem', background: '#f8fafc' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          
          <motion.h2 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", damping: 20, stiffness: 80 }}
            style={{ 
              display: 'inline-block',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
              textTransform: 'uppercase', 
              lineHeight: 1.1, 
              marginBottom: '5rem', 
              fontWeight: 900, 
              letterSpacing: '-0.02em', 
              color: '#0f172a',
              border: '4px solid #dc2626',
              padding: '1.5rem 3rem'
            }}
          >
            THE REAL GAP
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4rem', marginBottom: '6rem', borderLeft: '4px solid #dc2626', paddingLeft: '3rem', textAlign: 'left' }}
          >
            <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 400, lineHeight: 1.5, letterSpacing: '0.02em', color: '#334155' }}>
              Too few leaders <span style={{ color: '#0f172a', fontWeight: 700 }}>carry too much</span>
            </h3>
            <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 400, lineHeight: 1.5, letterSpacing: '0.02em', color: '#334155' }}>
              People attend, but <span style={{ color: '#0f172a', fontWeight: 700 }}>don’t grow</span>
            </h3>
            <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 400, lineHeight: 1.5, letterSpacing: '0.02em', color: '#334155' }}>
              New leaders <span style={{ color: '#0f172a', fontWeight: 700 }}>aren’t emerging</span>
            </h3>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, type: 'spring', stiffness: 80 }}
          >
            <p style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#dc2626' }}>
              AND VISION SLOWS.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 3. JESUS FIRST (Immersive Full-Screen Scroll Sweep) */}
      <section ref={jesusFirstRef} style={{ position: 'relative', zIndex: 15, minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '10rem 1.5rem', background: 'var(--surface)', overflow: 'hidden' }}>
        <WaveBackground quadrant={2} opacity={0.3} />
        {/* Massive Background Typography */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: 'clamp(10rem, 30vw, 40rem)', fontWeight: 900, color: 'rgba(255,255,255,0.02)', pointerEvents: 'none', lineHeight: 0.8, whiteSpace: 'nowrap', zIndex: 0 }}>
          JESUS
        </div>

        <div className="container" style={{ maxWidth: '1200px', position: 'relative', zIndex: 10 }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            
            {/* Left Column: Core Message */}
            <motion.div variants={flyInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#000', border: '2px solid var(--brand-primary)', width: '80px', height: '80px', borderRadius: '50%', color: 'var(--brand-primary)', boxShadow: '0 0 50px rgba(212,175,55,0.4)', marginBottom: '2rem' }}>
                <Crown size={40} />
              </div>
              <div style={{ fontSize: '1.5rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '0.3em' }}>JESUS FIRST</div>
              <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#fff', textTransform: 'uppercase', lineHeight: 0.9, letterSpacing: '-0.03em', marginBottom: '2rem' }}>
                True Leadership Starts With Jesus
              </h2>
              <p style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', color: 'var(--text-secondary)', lineHeight: 1.5, borderLeft: '4px solid var(--brand-primary)', paddingLeft: '2rem' }}>
                Before strategy, systems, or structure—there is Jesus.
              </p>
            </motion.div>

            {/* Right Column: Scroll-Linked Parallax Sweeping Text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2rem' }}>Leaders Must:</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {[
                    "Know Him personally",
                    "Hear and follow His voice",
                    "Lead from relationship, not just responsibility"
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '1.5rem',
                        x: pointTransforms[i],
                        opacity: ptOpacity 
                      }}
                    >
                      <ChevronRight color="var(--brand-primary)" size={32} style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                      <span style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#fff', fontWeight: 700, lineHeight: 1.2, textTransform: 'uppercase' }}>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Standard physics override for this one element instead of globals */}
              <motion.div 
                variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} 
                whileHover={{ x: 10, borderColor: 'var(--brand-primary)' }}
                style={{ padding: '3rem', background: 'rgba(212, 175, 55, 0.05)', position: 'relative', borderLeft: '4px solid rgba(212, 175, 55, 0.5)' }}
              >
                  <div style={{ position: 'absolute', top: '-12px', left: '2rem', background: 'var(--surface)', padding: '0 1rem', fontSize: '0.875rem', color: 'var(--brand-primary)', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 800 }}>KEY INSIGHT</div>
                  <h4 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--brand-primary)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.05em', lineHeight: 1.4 }}>
                    Lasting multiplication begins with Him.
                  </h4>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. KINGDOM MULTIPLICATION (Restored standard 3D Hover physics) */}
      <section style={{ padding: '10rem 1.5rem', background: 'var(--bg)', position: 'relative' }}>
        <WaveBackground quadrant={4} opacity={0.4} />
        <div className="container" style={{ maxWidth: '1000px', position: 'relative', zIndex: 10 }}>
          
          <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#fff', textTransform: 'uppercase', lineHeight: 0.9, letterSpacing: '-0.03em', marginBottom: '2rem' }}>
              The Goal Is Not Growth—<br/><span style={{ color: 'var(--brand-primary)', textShadow: '0 0 40px rgba(212,175,55,0.3)' }}>It's Multiplication</span>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
            {[
              { text: "Disciples who make disciples", icon: <User color="var(--brand-secondary)" size={40} style={{ margin: '0 auto 1.5rem' }} /> },
              { text: "Leaders who raise leaders", icon: <Users color="var(--brand-secondary)" size={40} style={{ margin: '0 auto 1.5rem' }} /> },
              { text: "Movements that multiply", icon: <Network color="var(--brand-secondary)" size={40} style={{ margin: '0 auto 1.5rem' }} /> }
            ].map((item, i) => (
              <MagicCard 
                key={i} 
                delay={i * 0.1}
                initialVariant={{ opacity: 0, y: 150, scale: 0.85, rotateX: 10 }}
                visibleVariant={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                highlightColor="var(--brand-secondary)"
                innerStyle={{ padding: '4rem 2rem', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
              >
                  {item.icon}
                  <h3 style={{ fontSize: '1.75rem', color: '#fff', fontWeight: 600, lineHeight: 1.3 }}>{item.text}</h3>
              </MagicCard>
            ))}
          </div>

          <motion.p variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '800px', margin: '0 auto', fontStyle: 'italic' }}>
            "This is the model Jesus established—and it still works today."
          </motion.p>
          
        </div>
      </section>

      {/* 5. THE SOLUTION / FINAL CTA (Restored lateral list hover glides) */}
      <section style={{ padding: '10rem 1.5rem', background: 'radial-gradient(ellipse at bottom, rgba(212,175,55,0.1) 0%, var(--surface) 60%)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <div style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 800, marginBottom: '1rem', letterSpacing: '0.3em' }}>THE SOLUTION</div>
            <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#fff', textTransform: 'uppercase', lineHeight: 0.9, letterSpacing: '-0.03em', marginBottom: '2rem' }}>
              We advance the Kingdom <br/>
              <span style={{ color: 'var(--brand-primary)' }}>by multiplying leaders.</span>
            </h2>
            <p style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
              WE partner with leaders like you to:
            </p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
            {[
              "Develop strong Kingdom foundations",
              "Activate leaders into real-life obedience",
              "Equip leaders to disciple and multiply others"
            ].map((item, i) => (
              <MagicCard 
                key={i} 
                delay={i * 0.15}
                initialVariant={{ opacity: 0, x: 100, y: 100 }}
                visibleVariant={{ opacity: 1, x: 0, y: 0 }}
                innerStyle={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}
              >
                  <ZapIcon color="var(--brand-primary)" size={24} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 500 }}>{item}</span>
              </MagicCard>
            ))}
          </div>

          <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center' }}>
            <Link href="/connect" className="btn btn-primary" style={{ padding: '1.5rem 5rem', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)', borderRadius: 0, boxShadow: '0 0 60px rgba(212,175,55,0.2)' }}>
              Start Developing Your Leaders
            </Link>
          </motion.div>
          
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 900px) {
          .hide-on-mobile { display: none !important; }
        }
      `}</style>
    </div>
  );
}
