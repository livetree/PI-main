'use client';

import { motion } from 'framer-motion';
import WaveBackground from '@/components/WaveBackground';

export default function AboutPage() {
  const flyInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--bg)', overflowX: 'hidden', color: '#fff', minHeight: '100vh', paddingBottom: '10rem' }}>
      
      {/* 1. DARKNODE MANIFESTO HERO (Enhanced) */}
      <section style={{ 
        position: 'relative', 
        paddingTop: '20rem', 
        paddingBottom: '12rem', 
        paddingLeft: '1.5rem', 
        paddingRight: '1.5rem', 
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        overflow: 'hidden'
      }}>
        {/* Subtle Gold Brand Flare to break the blue */}
        <div style={{ 
          position: 'absolute', 
          top: '0%', 
          right: '-10%', 
          width: '800px', 
          height: '800px', 
          background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)', 
          pointerEvents: 'none',
          zIndex: 1
        }} />
        
        <WaveBackground quadrant={3} opacity={0.3} />
        
        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1400px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', alignItems: 'center' }}>
             
             <motion.div variants={flyInUp} initial="hidden" animate="visible">
               <h1 style={{ 
                 fontSize: 'clamp(4.5rem, 12vw, 10rem)', 
                 fontWeight: 700, 
                 lineHeight: 0.8, 
                 letterSpacing: '-0.05em', 
                 textTransform: 'uppercase',
                 color: 'transparent',
                 WebkitTextStroke: '1px rgba(255,255,255,0.15)'
               }}>
                 ABOUT <br/> 
                 <span style={{ color: 'var(--brand-secondary)', WebkitTextStroke: '0' }}>US.</span>
               </h1>
             </motion.div>

             <motion.div 
               variants={flyInUp} 
               initial="hidden" 
               animate="visible" 
               transition={{ delay: 0.2 }} 
               style={{ 
                 maxWidth: '600px', 
                 borderLeft: '1px solid var(--brand-secondary)', 
                 paddingLeft: '3rem',
                 position: 'relative'
               }}
             >
               <p style={{ 
                 fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', 
                 color: '#fff', 
                 lineHeight: 1.3, 
                 fontWeight: 300,
                 margin: 0
               }}>
                 A movement of leaders who <span style={{ color: 'var(--brand-secondary)', fontWeight: 500 }}>live from Jesus, lead in His Kingdom, and multiply others</span>—across churches, businesses, and communities.
               </p>
               {/* Decorative Geometric Element */}
               <motion.div 
                 animate={{ rotate: 45, y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 style={{ 
                   position: 'absolute', 
                   top: '-2rem', 
                   right: '-1rem', 
                   width: '30px', 
                   height: '30px', 
                   border: '1px solid var(--brand-secondary)',
                   opacity: 0.4
                 }}
               />
             </motion.div>

          </div>
        </div>
      </section>

      {/* 2. OUR HISTORY (Split Layout) */}
      <section style={{ padding: '8rem 1.5rem', position: 'relative', zIndex: 10 }}>
        <div className="container" style={{ maxWidth: '1400px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            
            <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div style={{ display: 'inline-block', padding: '1rem 2rem', borderLeft: '4px solid var(--brand-secondary)', background: 'rgba(212,175,55,0.05)', marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--brand-secondary)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>PI History</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', maxWidth: '800px', fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                <p>PI was formed in 2001 with Randy Boyd assuming the role of Director in 2003. He and Callie, his wife, quickly set a course to train and equip leaders for life and mission within their nation.</p>
                <p>Our first training schools were in the Czech Republic and Slovakia. Today, we operate across 5 continents with schools and relationships in Africa, Asia, Latin America, Europe, and the United States, empowering leaders across every sphere of society.</p>
              </div>
            </motion.div>

            <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
               <img src="https://prepareinternational.org/wp-content/uploads/2023/04/IMG_1191-1024x683.jpg" alt="Prepare International History" style={{ width: '100%', height: 'auto', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }} />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. GUIDING PRINCIPLES (Strict Horizontals) */}
      <section style={{ position: 'relative', zIndex: 10, paddingTop: '8rem' }}>
        <div className="container" style={{ maxWidth: '1400px', padding: '0 1.5rem' }}>
          
          <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} style={{ marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Guiding Principles</h2>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            
            {[
              { id: '01', title: "Advance the Kingdom", desc: "We are unequivocally committed to the expansion of His kingdom structurally, relationally, and spiritually." },
              { id: '02', title: "Multiply Leaders", desc: "Jesus didn't mass-produce followers. He poured deeply into a few leaders who then changed the world. We protect this intensive model." },
              { id: '03', title: "Disciple Nations", desc: "Equipping localized leadership pipelines natively so movements can launch and sustain themselves autonomously in every sphere." }
            ].map((principle, i) => (
              <motion.div 
                key={i} variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ display: 'grid', gridTemplateColumns: 'minmax(100px, 1fr) 3fr 4fr', gap: '2rem', padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.1)', alignItems: 'start' }}
                className="principle-row"
              >
                <div style={{ fontSize: '1.25rem', color: 'var(--brand-primary)' }}>[ {principle.id} ]</div>
                <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, lineHeight: 1.1, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#fff' }}>{principle.title}</h3>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300, maxWidth: '500px' }}>{principle.desc}</p>
              </motion.div>
            ))}
            
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />

          </div>
        </div>
      </section>

      {/* 4. THE MISSION VECTOR (Raw Metrics) */}
      <section style={{ padding: '10rem 1.5rem', position: 'relative', zIndex: 10 }}>
        <div className="container" style={{ maxWidth: '1400px' }}>
          
          <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} style={{ marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--brand-secondary)' }}>The Mission Vector</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>
            {[
              { number: '10k', label: 'Trainers' },
              { number: '1M', label: 'Disciples' },
              { number: '1M', label: 'Souls Saved' },
              { number: '1k', label: 'Movements' }
            ].map((metric, i) => (
               <motion.div key={i} variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                 <div style={{ fontSize: 'clamp(4rem, 8vw, 6rem)', fontWeight: 300, color: '#fff', lineHeight: 1, marginBottom: '1rem', letterSpacing: '-0.05em' }}>{metric.number}</div>
                 <div style={{ width: '40px', height: '2px', background: 'var(--brand-primary)', marginBottom: '1.5rem' }} />
                 <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.2em' }}>{metric.label}</p>
               </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. MEET THE TEAM */}
      <section style={{ padding: '8rem 1.5rem', position: 'relative', zIndex: 10, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ maxWidth: '1400px' }}>
          <motion.div variants={flyInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} style={{ marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Meet The Team</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '4rem 2rem' }}>
            {[
              { name: "Randy and Callie Boyd", title: "Founders", image: "https://prepareinternational.org/wp-content/uploads/2023/12/BD1A8624-scaled.jpg" },
              { name: "Josiah and Brandi Boyd", title: "Executive Director", image: "https://prepareinternational.org/wp-content/uploads/2023/11/BD1A8661-scaled.jpg" },
              { name: "Volkert Muijs", title: "Africa Director", image: "https://prepareinternational.org/wp-content/uploads/2023/11/BD1A8688-scaled.jpg" },
              { name: "Hannah Dockery", title: "Homebase Director & Prayground", image: "https://prepareinternational.org/wp-content/uploads/2024/07/449445656_777107667942496_1489593464660978311_n.jpg" },
              { name: "Boone and Bethany Tyson", title: "Costa Rica and South Texas Coordinator", image: "https://prepareinternational.org/wp-content/uploads/2023/12/tyson-staff-picture.jpeg" },
              { name: "Faith Arredondo", title: "Administrative and Media Assistant", image: "https://prepareinternational.org/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-11-at-18.11.01-1.jpeg" },
              { name: "Maci Dean", title: "Financial Coordinator", image: "https://prepareinternational.org/wp-content/uploads/2025/10/WhatsApp-Image-2025-09-16-at-06.40.52-e1760046790269.jpeg" },
              { name: "Anna Aleksieieva", title: "European Coordinator", image: null },
              { name: "Daniel Caballero", title: "Latin America Director", image: "https://prepareinternational.org/wp-content/uploads/2025/10/WhatsApp-Image-2025-09-09-at-20.37.47.jpeg" },
              { name: "Patrick Kisia", title: "East Africa Director", image: "https://prepareinternational.org/wp-content/uploads/2025/10/WhatsApp-Image-2025-09-11-at-18.11.01-2.jpeg" },
              { name: "David Morgan", title: "Director of Development", image: "https://prepareinternational.org/wp-content/uploads/2025/10/IMG_2598.jpg" }
            ].map((member, i) => (
               <motion.div 
                 key={i} 
                 variants={flyInUp} 
                 initial="hidden" 
                 whileInView="visible" 
                 viewport={{ once: true }} 
                 transition={{ delay: i * 0.05 }}
                 className="team-card"
                 style={{ position: 'relative' }}
               >
                 <div style={{ 
                   width: '100%', 
                   aspectRatio: '3/4', 
                   backgroundColor: 'rgba(255,255,255,0.03)', 
                   marginBottom: '1.5rem',
                   overflow: 'hidden',
                   border: '1px solid rgba(255,255,255,0.05)',
                   position: 'relative'
                 }}>
                   {member.image ? (
                     <motion.img 
                       src={member.image} 
                       alt={member.name} 
                       whileHover={{ scale: 1.05 }}
                       transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                       style={{ 
                         width: '100%', 
                         height: '100%', 
                         objectFit: 'cover',
                         filter: 'grayscale(100%) brightness(0.8)',
                       }} 
                       className="team-image"
                     />
                   ) : (
                     <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', fontWeight: 200, color: 'rgba(255,255,255,0.1)' }}>
                       {member.name.charAt(0)}
                     </div>
                   )}
                   <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, var(--bg) 100%)' }} />
                 </div>
                 <h4 style={{ fontSize: '1.25rem', fontWeight: 500, color: '#fff', marginBottom: '0.25rem', letterSpacing: '-0.02em' }}>{member.name}</h4>
                 <p style={{ fontSize: '0.875rem', color: 'var(--brand-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>{member.title}</p>
                 
                 <style jsx>{`
                   .team-card:hover .team-image {
                     filter: grayscale(0%) brightness(1) !important;
                   }
                 `}</style>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
