import Link from 'next/link';
import { ArrowRight, CheckCircle2, TrendingUp, Users } from 'lucide-react';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', paddingBottom: '5rem' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ 
        position: 'relative', 
        padding: '8rem 1.5rem 6rem', 
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at top, rgba(212,175,55,0.08), var(--bg))'
      }}>
        {/* Glowing Orbs */}
        <div className="animate-pulse-slow" style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', background: 'var(--brand-primary)', opacity: 0.1, filter: 'blur(100px)', borderRadius: '50%' }} />
        <div className="animate-pulse-slow" style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '300px', height: '300px', background: 'var(--brand-secondary)', opacity: 0.1, filter: 'blur(80px)', borderRadius: '50%', animationDelay: '1.5s' }} />

        <div className="container animate-fade-up" style={{ textAlign: 'center', zIndex: 1, maxWidth: '900px' }}>
          
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            As Vision Expands,<br />
            <span className="gradient-text">Leaders Must Multiply.</span>
          </h1>
          
          <div style={{ fontSize: 'clamp(1.125rem, 2vw, 1.35rem)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.6, fontWeight: 300 }}>
            <p style={{ marginBottom: '1rem' }}>Growth creates opportunity—but also pressure. Without developed leaders, vision stalls.</p>
            <p style={{ color: 'var(--text-primary)', fontWeight: 500 }}>But when leaders are trained and released: Vision accelerates. Disciples multiply. Movements begin.</p>
            <p style={{ marginTop: '1rem' }}>We help you equip leaders who can carry and multiply what God is building.</p>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/connect" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              Start a Conversation <ArrowRight size={20} />
            </Link>
            <Link href="/training" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              Explore the Training Pathway
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE CHALLENGE */}
      <section className="container">
        <div className="card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', padding: '4rem 3rem', background: 'rgba(30, 37, 54, 0.4)', borderColor: 'rgba(255,255,255,0.05)' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>Leadership Gaps Limit Kingdom Impact</h2>
            <p style={{ color: 'var(--brand-primary)', fontSize: '1.25rem', fontWeight: 600, marginBottom: '2rem' }}>
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
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontSize: '1.125rem', color: 'var(--text-secondary)' }}>
                  <TrendingUp color="#ef4444" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. JESUS FIRST & MULTIPLICATION (Split Section) */}
      <section className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        
        <div className="card" style={{ padding: '3rem', borderTop: '4px solid var(--brand-primary)' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>True Leadership Starts With Jesus</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Before strategy, systems, or structure—there is Jesus. Lasting multiplication begins with Him.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-primary)' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckCircle2 color="var(--brand-primary)" size={20} /> Know Him personally</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckCircle2 color="var(--brand-primary)" size={20} /> Hear and follow His voice</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckCircle2 color="var(--brand-primary)" size={20} /> Lead from relationship, not just responsibility</li>
          </ul>
        </div>

        <div className="card" style={{ padding: '3rem', borderTop: '4px solid var(--brand-secondary)' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>The Goal Is Not Growth—It's Multiplication</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            This is the model Jesus established—and it still works today.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-primary)' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Users color="var(--brand-secondary)" size={20} /> Disciples who make disciples</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Users color="var(--brand-secondary)" size={20} /> Leaders who raise leaders</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Users color="var(--brand-secondary)" size={20} /> Movements that multiply</li>
          </ul>
        </div>

      </section>

      {/* 4. THE SOLUTION & PATHWAY */}
      <section className="container" style={{ textAlign: 'center', paddingTop: '3rem' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1rem' }}>We Help You Build Leaders Who Multiply</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
          Prepare International partners with leaders like you through a clear, reproducible leadership pathway.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', textAlign: 'left', marginBottom: '4rem' }}>
          {[
            { step: '01', title: 'Foundations', desc: 'Root leaders in Jesus and their absolute Kingdom identity.' },
            { step: '02', title: 'Activation', desc: 'Move leaders out of the classroom and into real-life application and obedience.' },
            { step: '03', title: 'Multiplication', desc: 'Equip leaders to rigorously disciple and reproduce others.' }
          ].map((item, i) => (
            <div key={i} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '6rem', fontWeight: 800, color: 'rgba(212,175,55,0.05)', lineHeight: 1 }}>{item.step}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--brand-primary)' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', position: 'relative', zIndex: 1 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <Link href="/training" className="btn btn-outline" style={{ padding: '0.8rem 2rem' }}>
          Explore the Training Framework
        </Link>
      </section>

      {/* 5. WHY NOW (Dynamic Final CTA) */}
      <section className="container">
        <div style={{ 
          background: 'var(--surface-elevated)', 
          border: '1px solid var(--border)', 
          borderRadius: 'var(--radius-lg)', 
          padding: '5rem 2rem', 
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)'
        }}>
          {/* Subtle Background Glow */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
          
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
            The Need for Multiplying Leaders <br/> Has Never Been Greater.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 3rem', position: 'relative', zIndex: 1 }}>
            You already have vision and people. Now it's time to multiply leadership and expand Kingdom impact.
          </p>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Link href="/connect" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.25rem' }}>
              Connect to Launch Training
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
