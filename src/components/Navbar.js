'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Zap } from 'lucide-react';

const NAV_LINKS = [
  { name: 'About', href: '/about' },
  { name: 'Training', href: '/training' },
  { name: 'Diagnostic', href: '/diagnostic' },
  { name: 'Give', href: '/give' },
  { name: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <>
      <header 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          zIndex: 1000, 
          padding: scrolled ? '1rem' : '1.5rem',
          transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          pointerEvents: 'none'
        }}
      >
        <div className="container" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          background: scrolled ? 'rgba(30, 37, 54, 0.8)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: scrolled ? '999px' : '0px',
          border: scrolled ? '1px solid rgba(212, 175, 55, 0.2)' : '1px solid transparent',
          boxShadow: scrolled ? '0 20px 40px rgba(0,0,0,0.3)' : 'none',
          pointerEvents: 'auto',
          maxWidth: scrolled ? '1000px' : '1200px',
          transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
        }}>
          {/* LOGO */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--brand-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black', fontWeight: 900, fontSize: '1.125rem' }}
            >
              PI
            </motion.div>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
              PREPARE <span style={{ color: 'var(--brand-primary)' }}>INTL</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hide-on-mobile">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  style={{ 
                    position: 'relative',
                    fontSize: '0.9rem', 
                    fontWeight: 600, 
                    color: isActive ? 'var(--brand-primary)' : 'rgba(255,255,255,0.7)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-underline"
                      style={{ position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '2px', background: 'var(--brand-primary)' }}
                    />
                  )}
                </Link>
              );
            })}
            <Link href="/connect" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.875rem', borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Connect <ArrowRight size={14} />
            </Link>
          </nav>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{ 
              display: 'none', 
              background: 'rgba(255,255,255,0.05)', 
              border: '1px solid rgba(255,255,255,0.1)', 
              borderRadius: '50%', 
              width: '44px', 
              height: '44px', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: '#fff',
              cursor: 'pointer'
            }} 
            className="show-on-mobile"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            style={{ 
              position: 'fixed', 
              inset: 0, 
              background: 'rgba(15, 23, 42, 0.9)', 
              zIndex: 900,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    style={{ 
                      fontSize: '3rem', 
                      fontWeight: 800, 
                      textTransform: 'uppercase', 
                      color: pathname === link.href ? 'var(--brand-primary)' : '#fff' 
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.1 }}
                style={{ marginTop: '2rem' }}
              >
                <Link href="/connect" className="btn btn-primary" style={{ fontSize: '1.25rem', padding: '1.5rem', width: '100%' }}>
                  Start a Conversation <Zap size={20} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 900px) {
          .hide-on-mobile { display: none !important; }
          .show-on-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
