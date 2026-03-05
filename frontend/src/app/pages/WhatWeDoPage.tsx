import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollToTopButton from '../components/ScrollToTopButton';

// ─── Types ────────────────────────────────────────────────────────────────────
interface StatItem {
  value: string;
  label: string;
  color: string;
}

// ─── Brand Colors ─────────────────────────────────────────────────────────────
const brand = {
  orange:      { primary: '#F97316', light: '#FED7AA', dark: '#C2410C', bg: '#FFF7ED' },
  lightBlue:   { primary: '#0EA5E9', light: '#E0F2FE', dark: '#0369A1', bg: '#F0F9FF' },
  brightGreen: { primary: '#22C55E', light: '#DCFCE7', dark: '#15803D', bg: '#F0FDF4' },
  green:       { primary: '#10B981', light: '#D1FAE5', dark: '#047857', bg: '#ECFDF5' },
  palette8:    '#F7FAFC',
  palette1:    '#4c808a',
  palette2:    '#3b4167',
  palette3:    '#1A202C',
  palette4:    '#2D3748',
  palette6:    '#69ad76',
};

// ─── Animation helpers ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const, delay },
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const fadeUpChild = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

// ─── Stats data ───────────────────────────────────────────────────────────────
const stats: StatItem[] = [
  { value: '1,500+',  label: 'Students supported across 8 primary schools', color: brand.lightBlue.primary },
  { value: '45%→75%', label: 'Increase in school pass rates',                color: brand.lightBlue.primary },
  { value: '7,500+',  label: 'Clean birthing kits distributed',              color: brand.lightBlue.primary },
  { value: '42',      label: 'Villages reached with inclusive programs',     color: brand.lightBlue.primary },
  { value: '27+',     label: 'University students on full scholarship',       color: brand.lightBlue.primary },
  { value: '500+',    label: 'Children with disabilities reached',           color: brand.lightBlue.primary },
];

// ─── Contour Grid SVG Background ─────────────────────────────────────────────
const ContourBackground: React.FC = () => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      userSelect: 'none',
    }}
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      {/* Fine base grid */}
      <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          stroke={brand.palette1}
          strokeWidth="0.4"
          strokeOpacity="0.18"
        />
      </pattern>

      {/* Major grid (every 5 cells = 200px) */}
      <pattern id="majorGrid" width="200" height="200" patternUnits="userSpaceOnUse">
        <rect width="200" height="200" fill="url(#smallGrid)" />
        <path
          d="M 200 0 L 0 0 0 200"
          fill="none"
          stroke={brand.palette1}
          strokeWidth="0.9"
          strokeOpacity="0.22"
        />
      </pattern>

      {/* Radial fade mask — bright centre, fades to transparent at edges */}
      <radialGradient id="gridFade" cx="50%" cy="50%" r="65%">
        <stop offset="0%"   stopColor="#ffffff" stopOpacity="1" />
        <stop offset="55%"  stopColor="#ffffff" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
      <mask id="fadeMask">
        <rect width="100%" height="100%" fill="url(#gridFade)" />
      </mask>

      {/* Soft teal glow blob top-right */}
      <radialGradient id="glowTR" cx="80%" cy="15%" r="40%">
        <stop offset="0%"   stopColor={brand.palette1} stopOpacity="0.10" />
        <stop offset="100%" stopColor={brand.palette1} stopOpacity="0" />
      </radialGradient>

      {/* Soft orange glow blob bottom-left */}
      <radialGradient id="glowBL" cx="18%" cy="88%" r="35%">
        <stop offset="0%"   stopColor={brand.orange.primary} stopOpacity="0.08" />
        <stop offset="100%" stopColor={brand.orange.primary} stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Full-area grid with fade mask */}
    <rect width="100%" height="100%" fill="url(#majorGrid)" mask="url(#fadeMask)" />

    {/* Contour ellipses — organic topology rings */}
    {[
      { rx: 520, ry: 260, cx: '72%', cy: '22%', op: 0.07 },
      { rx: 380, ry: 190, cx: '72%', cy: '22%', op: 0.09 },
      { rx: 240, ry: 120, cx: '72%', cy: '22%', op: 0.11 },
      { rx: 110, ry:  55, cx: '72%', cy: '22%', op: 0.13 },

      { rx: 460, ry: 200, cx: '22%', cy: '80%', op: 0.06 },
      { rx: 300, ry: 130, cx: '22%', cy: '80%', op: 0.08 },
      { rx: 160, ry:  70, cx: '22%', cy: '80%', op: 0.10 },
    ].map((e, i) => (
      <ellipse
        key={i}
        cx={e.cx}
        cy={e.cy}
        rx={e.rx}
        ry={e.ry}
        fill="none"
        stroke={brand.palette1}
        strokeWidth="1.5"
        strokeOpacity={e.op}
      />
    ))}

    {/* Diagonal accent lines (top-left → bottom-right) */}
    {[-200, 0, 200, 400, 600, 800, 1000, 1200].map((offset, i) => (
      <line
        key={`d-${i}`}
        x1={offset}       y1="0"
        x2={offset + 900} y2="900"
        stroke={brand.palette1}
        strokeWidth="0.5"
        strokeOpacity="0.19"
      />
    ))}

    {/* Glow blobs */}
    <rect width="100%" height="100%" fill="url(#glowTR)" />
    <rect width="100%" height="100%" fill="url(#glowBL)" />
  </svg>
);

// ─── Main Component ───────────────────────────────────────────────────────────
export function WhatWeDoPage(): React.ReactElement {
  const [leftRef,  leftInView]  = useInView({ triggerOnce: true, threshold: 0.15 });
  const [rightRef, rightInView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <>
      <section
        className="relative w-full"
        style={{
          backgroundColor: brand.palette8,
          padding: 'clamp(3.5rem, 5vw, 5rem) clamp(1rem, 4vw, 2rem)',
          color: brand.palette4,
          lineHeight: 1.6,
          fontSize: 16,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* ── SVG contour/grid background ── */}
        <ContourBackground />

        {/* ── Content sits above the SVG ── */}
        <div style={{ position: 'relative', zIndex: 1 }}>

          {/* Two-column grid */}
          <div
            className="kt-row-column-wrap"
            style={{
              maxWidth: 1140,
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 'clamp(2rem, 4vw, 4rem)',
              alignItems: 'flex-start',
            }}
          >

            {/* ══ LEFT COLUMN ══ */}
            <div ref={leftRef} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

              {/* Label */}
              <motion.h6
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate={leftInView ? 'visible' : 'hidden'}
                style={{
                  fontSize: 'clamp(0.7rem, 1vw, 0.8rem)',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: brand.lightBlue.primary,
                  margin: 0,
                }}
              >
                WHAT WE DO
              </motion.h6>

              {/* H2 */}
              <motion.h2
                custom={0.1}
                variants={fadeUp}
                initial="hidden"
                animate={leftInView ? 'visible' : 'hidden'}
                style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  color: brand.palette3,
                  margin: 0,
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                Transforming Lives Through Sustainable Interventions
              </motion.h2>

              {/* Lead paragraph */}
              <motion.p
                custom={0.2}
                variants={fadeUp}
                initial="hidden"
                animate={leftInView ? 'visible' : 'hidden'}
                style={{ margin: 0, fontSize: 'clamp(0.88rem, 1.2vw, 1rem)', color: brand.palette4 }}
              >
                <strong style={{ color: brand.palette3 }}>
                  The Orphans of Africa Foundation (OAF) was created in response to the severe
                  educational, health, and social challenges faced by orphans and vulnerable
                  children in rural Malawi, particularly in Mzimba North.
                </strong>{' '}
                Many children were dropping out of school due to lack of school fees, learning
                materials, and basic necessities, while others were exposed to early marriages,
                gender-based violence, poor access to healthcare, and the long-term effects of
                poverty and climate-related shocks.
              </motion.p>

              {/* Secondary paragraph + CTA */}
              <motion.div
                custom={0.3}
                variants={fadeUp}
                initial="hidden"
                animate={leftInView ? 'visible' : 'hidden'}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                <p style={{ margin: 0, fontSize: 'clamp(0.88rem, 1.2vw, 1rem)', color: brand.palette4 }}>
                  As a young community volunteer and student, the founder personally witnessed
                  orphans being excluded from education, pregnant women delivering without proper
                  medical supplies, and youth lacking skills or opportunities to break the cycle
                  of poverty. This gap motivated the creation of Orphans of Africa Foundation in
                  2018 as a youth-led, grassroots organisation working closely with traditional
                  leaders, schools, and government institutions.
                </p>

                <div>
                  <a
                    href="/about-us"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.95rem 1.5rem',
                      backgroundColor: brand.palette6,
                      color: '#fff',
                      borderRadius: 4,
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      (e.currentTarget.style.backgroundColor = brand.palette4)
                    }
                    onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      (e.currentTarget.style.backgroundColor = brand.palette1)
                    }
                  >
                    Learn More about us
                  </a>
                </div>
              </motion.div>
            </div>

            {/* ══ RIGHT COLUMN ══ */}
            <div ref={rightRef}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                }}
              >
                {/* Image sub-column */}
                <div>
                  <figure style={{ margin: 0, lineHeight: 0 }}>
                    <motion.img
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={rightInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      src="/images/pupils.jpg"
                      alt="Children in Malawi"
                      style={{
                        width: '100%',
                        maxWidth: 400,
                        height: 400,
                        objectFit: 'cover',
                        borderRadius: '10%',
                        display: 'block',
                        // Subtle ring echoing the contour lines
                        boxShadow: `0 0 0 6px ${brand.palette8}, 0 0 0 10px ${brand.palette1}28`,
                      }}
                    />
                  </figure>
                </div>

                {/* Stats sub-column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={rightInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{
                      margin: '0 0 0.5rem',
                      fontSize: 'clamp(0.82rem, 1.1vw, 0.95rem)',
                      color: brand.palette3,
                      lineHeight: 1.6,
                    }}
                  >
                    Since 2018, we have leveraged our local and national presence to reach out
                    to orphans, women, and youth by building a progressive approach to shaping
                    their livelihoods across Malawi.
                  </motion.p>

                  <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate={rightInView ? 'visible' : 'hidden'}
                    style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}
                  >
                    {stats.map(({ value, label, color }: StatItem) => (
                      <motion.div
                        key={value}
                        variants={fadeUpChild}
                        style={{ display: 'flex', flexDirection: 'column', gap: 0 }}
                      >
                        <h3
                          style={{
                            margin: 0,
                            fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                            
                            fontWeight: 800,
                            color,
                            lineHeight: 1.5,
                          }}
                        >
                          {value}
                        </h3>
                        <p
                          style={{
                            margin: 0,
                            fontSize: 'clamp(0.72rem, 0.9vw, 0.82rem)',
                            color: brand.palette4,
                            lineHeight: 1.4,
                          }}
                        >
                          {label}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive overrides */}
        <style>{`
          @media (max-width: 900px) {
            .kt-row-column-wrap {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 600px) {
            .kt-row-column-wrap > div:nth-child(2) > div {
              grid-template-columns: 1fr !important;
            }
            .kt-row-column-wrap > div:nth-child(2) > div > div:first-child {
              display: none !important;
            }
          }
        `}</style>
      </section>

      <ScrollToTopButton />
    </>
  );
}

export default WhatWeDoPage;