'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, ShieldCheck, PlayCircle, ArrowUpRight, Crown } from 'lucide-react';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  // Reliable dynamic fly-in animation (Mobile safe)
  const flyInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", damping: 20, stiffness: 80 } 
    }
  };

  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--bg)', overflowX: 'hidden', color: '#fff' }}>
      
      {/* DEEP PARALLAX BACKGROUND */}
      <motion.div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: '-50vh', backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 60%)', zIndex: 0, y: bgY, pointerEvents: 'none' }} />

      {/* 1. HERO SECTION (Exact Brief Copy) */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, padding: '10rem 1.5rem 6rem' }}>
        <div className="container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", damping: 20, stiffness: 80 }}
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '2rem' }}
          >
            As Vision Expands,<br />
            <span className="gradient-text">Leaders Must Multiply.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: 1.6, marginBottom: '1.5rem' }}
          >
            Growth creates opportunity—but also pressure.<br className="hide-on-mobile"/> Without developed leaders, vision stalls.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
            style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: 1.6, marginBottom: '3.5rem' }}
          >
            But when leaders are trained and released:<br/>
            <strong style={{ color: '#fff' }}>Vision accelerates. Disciples multiply. Movements begin.</strong><br/><br/>
            We help you equip leaders who can carry and multiply what God is building.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 80, delay: 0.6 }} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/connect" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem', borderRadius: '50px' }}>
              Start a Conversation
            </Link>
            <Link href="/training" className="btn btn-outline" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem', borderRadius: '50px', border: '1px solid rgba(212,175,55,0.4)', color: 'var(--brand-primary)' }}>
              Explore the Training Pathway
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. THE CHALLENGE (Restored from Brief) */}
      <section style={{ padding: '8rem 1.5rem', background: 'var(--surface)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '3rem', textAlign: 'center', color: '#fff', letterSpacing: '-0.03em' }}>
              Leadership Gaps Limit Kingdom Impact
            </h2>
          </motion.div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              "A few leaders carry most of the responsibility",
              "People attend but aren't activated",
              "Potential leaders remain undeveloped",
              "Vision stalls instead of multiplying"
            ].map((challenge, i) => (
              <motion.div key={i} variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card" style={{ padding: '2rem', display: 'flex', gap: '1rem', alignItems: 'center', borderTop: '2px solid #ef4444' }}>
                <TrendingUp color="#ef4444" size={28} style={{ transform: 'rotate(180deg)', flexShrink: 0 }} />
                <p style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 500 }}>{challenge}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE 5 BOXES (User Requested Logic Boxes) */}
      <section style={{ padding: '10rem 1.5rem', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          {/* Box 0: Jesus's Kingdom */}
          <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card glass-card-highlight" style={{ textAlign: 'center', padding: '5rem 2rem', marginBottom: '4rem', borderRadius: '24px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', background: '#000', border: '2px solid var(--brand-primary)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary)', boxShadow: '0 0 50px rgba(212,175,55,0.4)', zIndex: 10 }}>
              <Crown size={40} />
            </div>
            <h2 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '1.5rem' }}>Jesus's Kingdom</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            
            {/* Box 1 */}
            <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
              <ShieldCheck size={40} color="var(--brand-secondary)" style={{ margin: '0 auto 1.5rem' }} />
              <h3 style={{ fontSize: '2rem', color: '#fff', textTransform: 'uppercase' }}>1. Leaders Equipped</h3>
            </motion.div>

            {/* Box 2 */}
            <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
              <Users size={40} color="var(--brand-secondary)" style={{ margin: '0 auto 1.5rem' }} />
              <h3 style={{ fontSize: '2rem', color: '#fff', textTransform: 'uppercase' }}>2. Leaders Raising Leaders</h3>
            </motion.div>

            {/* Box 3 */}
            <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
              <TrendingUp size={40} color="var(--brand-secondary)" style={{ margin: '0 auto 1.5rem' }} />
              <h3 style={{ fontSize: '2rem', color: '#fff', textTransform: 'uppercase' }}>3. Limitations Minimized</h3>
            </motion.div>

            {/* Box 4 */}
            <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card glass-card-highlight" style={{ padding: '3rem', textAlign: 'center' }}>
              <ArrowUpRight size={40} color="var(--brand-secondary)" style={{ margin: '0 auto 1.5rem' }} />
              <h3 style={{ fontSize: '2rem', color: '#fff', textTransform: 'uppercase' }}>4. The Kingdom Advanced</h3>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. THE PATHWAY (Full Screen Intuitive Vertical Scroll) */}
      <section style={{ background: '#0a0d14' }}>
        
        {/* Pathway Header */}
        <div style={{ padding: '8rem 1.5rem 4rem', textAlign: 'center', background: 'var(--surface)' }}>
          <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#fff', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
              A Clear Leadership Pathway
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', maxWidth: '700px', margin: '0 auto' }}>
              We help you build leaders who multiply through a reproducible framework.
            </p>
          </motion.div>
        </div>

        {/* Phase 1: Full Screen */}
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '6rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
          <div className="container" style={{ maxWidth: '1000px' }}>
            <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <div style={{ fontSize: '2rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '0.2em' }}>PHASE 1</div>
              <h3 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#fff', textTransform: 'uppercase', marginBottom: '2rem', lineHeight: 1 }}>Foundations</h3>
              <p style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--text-secondary)', lineHeight: 1.5, fontWeight: 300 }}>
                Root leaders in Jesus and their absolute Kingdom identity. Lead from relationship, not just responsibility.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Phase 2: Full Screen */}
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '6rem 1.5rem', borderBottom: '1px solid var(--border)', background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.05) 0%, transparent 70%)' }}>
          <div className="container" style={{ maxWidth: '1000px' }}>
            <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <div style={{ fontSize: '2rem', color: 'var(--brand-secondary)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '0.2em' }}>PHASE 2</div>
              <h3 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#fff', textTransform: 'uppercase', marginBottom: '2rem', lineHeight: 1 }}>Activation</h3>
              <p style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--text-secondary)', lineHeight: 1.5, fontWeight: 300 }}>
                Move leaders out of the classroom and into real-life application and obedience. We emphasize practical disciple-making.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Phase 3: Full Screen */}
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '6rem 1.5rem' }}>
          <div className="container" style={{ maxWidth: '1000px' }}>
            <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <div style={{ fontSize: '2rem', color: '#fff', fontWeight: 800, marginBottom: '1rem', letterSpacing: '0.2em' }}>PHASE 3</div>
              <h3 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: 'var(--brand-primary)', textTransform: 'uppercase', marginBottom: '2rem', lineHeight: 1 }}>Multiplication</h3>
              <p style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--text-secondary)', lineHeight: 1.5, fontWeight: 300 }}>
                Equip leaders to rigorously disciple and reproduce others. Movements that multiply across generations.
              </p>

              <div style={{ marginTop: '4rem' }}>
                <Link href="/training" className="btn btn-primary" style={{ padding: '1.25rem 4rem', fontSize: '1.25rem', borderRadius: '50px' }}>
                  Explore Training Pathway <ArrowRight size={24} style={{ marginLeft: '0.5rem' }} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* 5. FINAL EXPECTED CTA SECTION (Mobile Fixed) */}
      <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 1.5rem', background: 'var(--surface)' }}>
        <motion.div 
          variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ width: '100%', maxWidth: '800px', textAlign: 'center' }}
        >
          <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--brand-primary), transparent)', marginBottom: '4rem' }} />
          
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem', color: '#fff', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
            The Need for Multiplying Leaders Has Never Been Greater.
          </h2>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', marginBottom: '4rem', lineHeight: 1.5 }}>
            You already have vision and people. Now it's time to multiply leadership.
          </p>
          
          <div>
            <Link href="/connect" className="btn btn-primary" style={{ padding: '1.25rem 4rem', fontSize: '1.5rem', borderRadius: '50px', width: '100%', maxWidth: '400px', display: 'inline-flex', justifyContent: 'center' }}>
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
