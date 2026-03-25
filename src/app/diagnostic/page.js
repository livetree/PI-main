'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WaveBackground from '@/components/WaveBackground';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, RefreshCcw, Target, AlertCircle, TrendingUp, Zap, Sparkles } from 'lucide-react';

const SECTIONS = [
  {
    id: 'foundations',
    title: 'FOUNDATIONS',
    subtitle: 'Jesus-Centered Leadership',
    questions: [
      'Our leaders spend consistent time with Jesus and prioritize their relationship with Him',
      'Our leaders recognize and respond to God’s voice in their daily lives',
      'Our leaders are confident in their identity in Christ',
      'Our leaders model the life they are calling others to live'
    ]
  },
  {
    id: 'activation',
    title: 'ACTIVATION',
    subtitle: 'Living the Kingdom',
    questions: [
      'Our leaders regularly apply what they learn in real-life situations',
      'Our leaders step out in faith and obedience, even when it’s uncomfortable',
      'Ministry happens beyond structured meetings and services',
      'Our leaders grow through practice—not just teaching'
    ]
  },
  {
    id: 'multiplication',
    title: 'MULTIPLICATION',
    subtitle: 'Reproducing Leaders',
    questions: [
      'Our leaders are intentionally discipling others',
      'Our leaders know how to develop and train new leaders',
      'Leadership responsibility is spreading across many people',
      'New leaders are consistently emerging'
    ]
  },
  {
    id: 'culture',
    title: 'CULTURE',
    subtitle: 'Environment for Growth',
    questions: [
      'Multiplication is expected, not optional',
      'There is a clear pathway to develop leaders',
      'People are moving from attendee → disciple → leader',
      'The leadership culture is simple and reproducible'
    ]
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

const TIERS = {
  foundation: {
    range: [0, 12],
    color: '#ef4444',
    label: 'Establishing Foundations',
    means: 'You have vision and people in place. The opportunity now is to strengthen the foundation so leaders can grow and develop consistently.',
    experiencing: [
      'Leadership is carried by a smaller group',
      'People are engaged, but not yet stepping into leadership',
      'Development happens, but without a clear pathway'
    ],
    nextStepTitle: 'Build a strong, reproducible foundation for leadership development.',
    nextStepDesc: 'This creates clarity, consistency, and the ability to grow leaders over time.',
    focusArea: 'Establishing strong Jesus-centered foundations, Building a clear leadership pathway'
  },
  momentum: {
    range: [13, 22],
    color: '#f59e0b',
    label: 'Developing Leaders',
    means: 'You are seeing leaders grow and take steps forward. The next stage is creating consistency so leaders can begin developing others.',
    experiencing: [
      'Some leaders are actively growing',
      'Discipleship is happening, but unevenly',
      'Leadership development depends on key individuals'
    ],
    nextStepTitle: 'Strengthen your pathway so leadership development becomes consistent and reproducible.',
    nextStepDesc: 'This is where growth begins to turn into multiplication.',
    focusArea: 'Clarifying your leadership pipeline, Strengthening activation and discipleship'
  },
  multiplication: {
    range: [23, 32],
    color: '#10b981',
    label: 'Multiplying Leaders',
    means: 'You have strong leadership development already in place. Leaders are growing—and beginning to develop others.',
    experiencing: [
      'Leaders are investing in others',
      'Responsibility is spreading',
      'Momentum is building across your team'
    ],
    nextStepTitle: 'Refine and accelerate multiplication.',
    nextStepDesc: 'With focused input, you can expand what’s already working and increase long-term impact.',
    focusArea: 'Advanced leadership training, Focused equipping in key areas'
  }
};

export default function DiagnosticPage() {
  const [step, setStep] = useState('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const allQuestions = useMemo(() => SECTIONS.flatMap((s) => 
    s.questions.map((q) => ({ text: q, sectionTitle: s.title, sectionSubtitle: s.subtitle, sectionId: s.id }))
  ), []);

  const totalQuestions = allQuestions.length;

  const handleAnswer = (value) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStep('results');
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setAnswers(answers.slice(0, -1));
    } else {
      setStep('start');
    }
  };

  const reset = () => {
    setStep('start');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const getResultsData = () => {
    const totalScore = answers.reduce((a, b) => a + b, 0);
    const sectionScores = SECTIONS.map((section, sIdx) => {
      const startIdx = sIdx * 4;
      const scores = answers.slice(startIdx, startIdx + 4);
      return {
        id: section.id,
        title: section.title,
        score: scores.reduce((a, b) => a + b, 0),
        max: 8
      };
    });

    let tier;
    if (totalScore <= 12) tier = TIERS.foundation;
    else if (totalScore <= 22) tier = TIERS.momentum;
    else tier = TIERS.multiplication;

    return { totalScore, sectionScores, tier };
  };

  const { totalScore, sectionScores, tier } = step === 'results' ? getResultsData() : { totalScore: 0, sectionScores: [], tier: TIERS.foundation };

  return (
    <main style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg)', color: '#fff' }}>
      <WaveBackground quadrant={1} opacity={0.15} />

      <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: step === 'results' ? '1200px' : '800px', margin: '0 auto', paddingTop: '10rem', paddingBottom: '10rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        
        <AnimatePresence mode="wait">
          {step === 'start' && (
            <motion.div key="start" variants={fadeIn} initial="hidden" animate="visible" exit="exit" style={{ textAlign: 'center' }}>
              <div style={{ padding: '6rem 4rem', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', boxShadow: '0 40px 100px -20px rgba(0,0,0,0.5)' }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 800, lineHeight: 0.9, textTransform: 'uppercase', marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>
                  Leader <br/> <span style={{ color: 'var(--brand-secondary)' }}>Diagnostic Tool</span>
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '4rem', maxWidth: '600px', marginInline: 'auto' }}>
                  Where are your leaders growing next? Take this 5-minute assessment to focus on multiplying and growing your leaders.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '4rem', maxWidth: '600px', marginInline: 'auto' }}>
                  {SECTIONS.map(s => (
                    <div key={s.id} style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.title}</div>
                  ))}
                </div>
                <button 
                  onClick={() => setStep('questions')}
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', padding: '1.5rem 4rem', fontSize: '1.25rem', fontWeight: 700 }}
                >
                  Start Assessment <ArrowRight size={22} />
                </button>
              </div>
            </motion.div>
          )}

          {step === 'questions' && (
            <motion.div key="questions" variants={fadeIn} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ marginBottom: '5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                  <button onClick={handleBack} style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '1rem' }}>
                    <ArrowLeft size={18} /> Back
                  </button>
                  <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1rem', fontWeight: 600 }}>
                    {currentQuestionIndex + 1} / {totalQuestions}
                  </div>
                </div>
                
                <div style={{ color: 'var(--brand-secondary)', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '1rem', fontWeight: 800 }}>
                    {allQuestions[currentQuestionIndex].sectionTitle} // {allQuestions[currentQuestionIndex].sectionSubtitle}
                </div>
                <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px' }}>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
                    style={{ height: '100%', background: 'var(--brand-primary)', boxShadow: '0 0 20px var(--brand-primary)' }} 
                  />
                </div>
              </div>

              <div style={{ padding: '2rem 0' }}>
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.1, fontWeight: 700, marginBottom: '5rem', letterSpacing: '-0.02em' }}>
                  {allQuestions[currentQuestionIndex].text}
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }}>
                  {[
                    { label: 'YES (Consistently true)', value: 2, icon: <CheckCircle2 size={20} /> },
                    { label: 'SOMETIMES (Inconsistent / developing)', value: 1, icon: <TrendingUp size={20} /> },
                    { label: 'NO (Rarely or not happening)', value: 0, icon: <AlertCircle size={20} /> }
                  ].map((option, idx) => (
                    <button 
                      key={idx}
                      onClick={() => handleAnswer(option.value)}
                      style={{ 
                        textAlign: 'left',
                        padding: '2rem',
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        borderRadius: '8px',
                        fontSize: '1.25rem',
                        color: 'rgba(255,255,255,0.7)',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = 'rgba(212,175,55,0.05)';
                        e.currentTarget.style.borderColor = 'var(--brand-secondary)';
                        e.currentTarget.style.color = '#fff';
                        e.currentTarget.style.transform = 'translateX(10px)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                        e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <span style={{ opacity: 0.3 }}>{option.icon}</span>
                        {option.label}
                      </div>
                      <ChevronRight size={24} style={{ opacity: 0.2 }} />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 'results' && (
            <motion.div key="results" variants={fadeIn} initial="hidden" animate="visible" exit="exit">
              <div style={{ 
                padding: '6rem 4rem', 
                background: 'rgba(10, 14, 26, 0.8)', 
                backdropFilter: 'blur(40px)', 
                border: '1px solid rgba(255,255,255,0.05)', 
                borderRadius: '12px', 
                boxShadow: '0 100px 150px -50px rgba(0,0,0,0.8)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: tier.color, boxShadow: `0 0 30px ${tier.color}` }}></div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem' }}>
                  <div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: tier.color, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '2rem' }}>
                      <Zap size={18} /> Diagnostic Result
                    </div>
                    
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 0.9, marginBottom: '2.5rem' }}>
                      Stage: <span style={{ color: tier.color }}>{tier.label}</span>
                    </h2>
                    
                    <div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '1.5rem' }}>
                      {totalScore}<span style={{ fontSize: '1.25rem', opacity: 0.3, fontWeight: 400 }}> / 32</span>
                    </div>

                    <div style={{ padding: '2.5rem', borderLeft: `4px solid ${tier.color}`, background: 'rgba(255,255,255,0.02)', marginBottom: '4rem' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', color: '#fff' }}>What This Means</h3>
                      <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{tier.means}</p>
                    </div>

                    <div style={{ marginBottom: '4rem' }}>
                      <h3 style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2rem' }}>What You're Experiencing</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {tier.experiencing.map((item, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: tier.color }}></div>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div style={{ marginBottom: '6rem' }}>
                      <h3 style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '3rem' }}>Pathway Breakdown</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                        {sectionScores.map(s => (
                          <div key={s.id}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.875rem' }}>
                              <span style={{ fontWeight: 700, letterSpacing: '0.05em' }}>{s.title}</span>
                              <span style={{ opacity: 0.5 }}>{s.score} / {s.max}</span>
                            </div>
                            <div style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${(s.score / s.max) * 100}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                style={{ height: '100%', background: tier.color, borderRadius: '4px', boxShadow: `0 0 15px ${tier.color}44` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ padding: '3rem', border: '1px solid var(--brand-secondary)', background: 'rgba(212,175,55,0.03)', borderRadius: '8px', position: 'relative' }}>
                      <div style={{ position: 'absolute', top: '-12px', left: '2rem', background: 'var(--bg)', padding: '0 1rem', fontSize: '0.75rem', color: 'var(--brand-secondary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Your Next Step</div>
                      <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', lineHeight: 1.2 }}>{tier.nextStepTitle}</h3>
                      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>{tier.nextStepDesc}</p>
                      
                      <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '4px', marginBottom: '3rem' }}>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Focus Areas:</div>
                        <div style={{ color: 'var(--brand-secondary)', fontWeight: 600 }}>{tier.focusArea}</div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Link href="/connect" className="btn-primary" style={{ padding: '1.25rem 2rem', textDecoration: 'none', textAlign: 'center', fontSize: '1.125rem', fontWeight: 700 }}>
                          Book a Leader Conversation
                        </Link>
                        <button onClick={reset} style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.4)', padding: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                          <RefreshCcw size={16} /> Retake Diagnostic
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '8rem', textAlign: 'center', paddingTop: '6rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <Sparkles size={40} color="var(--brand-secondary)" style={{ marginBottom: '2rem' }} />
                  <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1.5rem' }}>No matter where you are, <br/><span style={{ color: 'var(--brand-secondary)' }}>the goal is the same.</span></h2>
                  <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.25rem' }}>
                    <strong>Leaders who grow, develop others, and multiply.</strong><br/><br/>
                    We’ll help you clarify your current stage, identify your next step, and build a pathway for multiplying leaders.
                  </p>
                  <Link href="/connect" className="btn btn-primary" style={{ display: 'inline-flex', padding: '1.5rem 4rem', fontSize: '1.25rem', clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)', borderRadius: 0 }}>
                    START A CONVERSATION
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
