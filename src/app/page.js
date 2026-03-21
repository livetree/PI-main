import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', paddingBottom: '4rem' }}>
      
      {/* Premium Hero Section */}
      <section style={{ 
        position: 'relative', 
        padding: '6rem 1rem 4rem', 
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at top, rgba(212,175,55,0.08), var(--bg))'
      }}>
        {/* Subtle Background Elements */}
        <div className="animate-pulse-slow" style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', background: 'var(--brand-primary)', opacity: 0.1, filter: 'blur(100px)', borderRadius: '50%' }} />
        <div className="animate-pulse-slow" style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '300px', height: '300px', background: 'var(--brand-secondary)', opacity: 0.1, filter: 'blur(80px)', borderRadius: '50%', animationDelay: '1.5s' }} />

        <div className="container animate-fade-up" style={{ textAlign: 'center', zIndex: 1, maxWidth: '900px' }}>
          <div style={{ 
            display: 'inline-block', 
            padding: '0.4rem 1rem', 
            background: 'var(--surface)', 
            border: '1px solid var(--border)', 
            borderRadius: '999px',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: 'var(--brand-primary)',
            marginBottom: '1.5rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            Introducing Prepare International
          </div>
          
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
            Empowering Leaders.<br />
            <span className="gradient-text">Impacting the World.</span>
          </h1>
          
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            We exist to build, equip, and propel visionary leaders into their communities to bring lasting, systemic change across the globe.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">
              Partner With Us
            </Link>
            <Link href="/about" className="btn btn-outline">
              Discover Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Pillars (Mobile First Cards) */}
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>Our Core Pillars</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>Building a foundation of leadership that ripples outward.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {[
            { 
              icon: '🌍', 
              title: 'Global Outreach', 
              desc: 'We go where the need is greatest, planting seeds of leadership that transform entire regions from the inside out.' 
            },
            { 
              icon: '🎓', 
              title: 'Eqipping Leaders', 
              desc: 'Providing rigorous training, mentorship, and resources to local leaders to multiply their impact exponentially.' 
            },
            { 
              icon: '🤝', 
              title: 'Lasting Partnership', 
              desc: 'We do not just leave; we build enduring networks of support to ensure sustained growth and resilience.' 
            }
          ].map((pillar, i) => (
            <div key={i} className="card animate-fade-up" style={{ animationDelay: `${0.2 * i}s` }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{pillar.icon}</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{pillar.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="container">
        <div style={{ 
          background: 'var(--surface)', 
          border: '1px solid var(--border)', 
          borderRadius: 'var(--radius-lg)', 
          padding: '4rem 2rem', 
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', marginBottom: '1rem' }}>Ready to make a difference?</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Join our newsletter to hear incredible stories from the field and stay updated on the blog.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', maxWidth: '400px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{ 
                flex: '1 1 200px',
                padding: '0.75rem 1rem', 
                borderRadius: '999px', 
                border: '1px solid var(--border)', 
                background: 'var(--bg)',
                color: 'var(--text-primary)',
                fontFamily: 'inherit'
              }} 
            />
            <button className="btn btn-primary" style={{ padding: '0.75rem 1.5rem' }}>Subscribe</button>
          </div>
        </div>
      </section>

    </div>
  );
}
