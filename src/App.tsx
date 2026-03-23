import { useEffect, useRef } from 'react'
import heroImage from './assets/f1-hero.jpg'

function App() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.classList.toggle('scrolled', window.scrollY > 60)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav ref={navRef}>
        <a href="#" className="wordmark">
          <span className="wordmark-dot"></span>Altegic Labs
        </a>
        <div className="nav-right">
          <span className="nav-label">altegiclabs.com</span>
          <a href="mailto:hello@altegiclabs.com" className="nav-contact">hello@altegiclabs.com</a>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero">
        {/* F1 HERO PHOTO */}
        <div className="hero-visual">
          <img
            src={heroImage}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 40%',
              position: 'absolute',
              inset: 0,
            }}
          />

          <svg style={{ position: 'absolute', inset: 0 }} viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="fadeLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#070A0D" stopOpacity="1"/>
                <stop offset="55%" stopColor="#070A0D" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#070A0D" stopOpacity="0.85"/>
              </linearGradient>
              <linearGradient id="fadeBottom" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#070A0D" stopOpacity="0"/>
                <stop offset="100%" stopColor="#070A0D" stopOpacity="1"/>
              </linearGradient>
              <linearGradient id="tealGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2FC4E8" stopOpacity="0"/>
                <stop offset="50%" stopColor="#2FC4E8" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#2FC4E8" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="speedLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2FC4E8" stopOpacity="0"/>
                <stop offset="60%" stopColor="#2FC4E8" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#2FC4E8" stopOpacity="0"/>
              </linearGradient>
              <filter id="blur2">
                <feGaussianBlur stdDeviation="2"/>
              </filter>
              <filter id="blur6">
                <feGaussianBlur stdDeviation="6"/>
              </filter>
              <clipPath id="rightClip">
                <rect x="480" y="0" width="960" height="900"/>
              </clipPath>
            </defs>

            {/* Track curve - F1 circuit suggestion */}
            <g clipPath="url(#rightClip)" opacity="0.18">
              <path d="M 580 800 C 600 700 550 600 620 500 C 690 400 800 380 860 280 C 920 180 900 100 980 60 C 1060 20 1160 50 1240 120 C 1320 190 1360 300 1380 420 C 1400 540 1370 640 1340 740"
                stroke="#2FC4E8" strokeWidth="28" fill="none" strokeLinecap="round"/>
              <path d="M 620 790 C 638 695 592 595 658 498 C 724 401 832 380 892 283 C 952 186 932 108 1008 68 C 1084 28 1178 55 1254 122 C 1330 189 1368 297 1386 414 C 1404 531 1374 630 1344 730"
                stroke="#2FC4E8" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.5"/>
            </g>

            {/* Speed blur lines */}
            <g opacity="0.12" clipPath="url(#rightClip)">
              <line x1="700" y1="320" x2="1380" y2="290" stroke="#2FC4E8" strokeWidth="1"/>
              <line x1="650" y1="345" x2="1380" y2="330" stroke="#2FC4E8" strokeWidth="0.5"/>
              <line x1="720" y1="365" x2="1380" y2="362" stroke="#2FC4E8" strokeWidth="1.5"/>
              <line x1="680" y1="385" x2="1380" y2="390" stroke="#2FC4E8" strokeWidth="0.5"/>
              <line x1="700" y1="410" x2="1380" y2="420" stroke="#2FC4E8" strokeWidth="1"/>
              <line x1="660" y1="430" x2="1380" y2="448" stroke="#2FC4E8" strokeWidth="0.5"/>
              <line x1="710" y1="460" x2="1380" y2="475" stroke="#2FC4E8" strokeWidth="1.5"/>
              <line x1="680" y1="490" x2="1380" y2="500" stroke="#2FC4E8" strokeWidth="0.5"/>
              <line x1="700" y1="515" x2="1380" y2="525" stroke="#2FC4E8" strokeWidth="1"/>
              <line x1="720" y1="540" x2="1380" y2="548" stroke="#2FC4E8" strokeWidth="2"/>
              <line x1="660" y1="560" x2="1380" y2="568" stroke="#2FC4E8" strokeWidth="0.5"/>
              <line x1="700" y1="580" x2="1380" y2="590" stroke="#2FC4E8" strokeWidth="1"/>
              <line x1="680" y1="600" x2="1380" y2="612" stroke="#2FC4E8" strokeWidth="0.5"/>
              <line x1="720" y1="220" x2="1380" y2="240" stroke="#2FC4E8" strokeWidth="0.5"/>
              <line x1="700" y1="240" x2="1380" y2="258" stroke="#2FC4E8" strokeWidth="1"/>
              <line x1="680" y1="260" x2="1380" y2="274" stroke="#2FC4E8" strokeWidth="0.5"/>
            </g>

            {/* Telemetry data overlay */}
            <g opacity="0.28" clipPath="url(#rightClip)">
              {/* RPM bar graph */}
              <g transform="translate(1080, 140)">
                <text x="0" y="0" fontFamily="monospace" fontSize="9" fill="#2FC4E8" letterSpacing="2" opacity="0.7">RPM</text>
                <rect x="0" y="8" width="180" height="3" fill="#0D1318" rx="1"/>
                <rect x="0" y="8" width="154" height="3" fill="#2FC4E8" rx="1" opacity="0.8"/>
                <text x="160" y="18" fontFamily="monospace" fontSize="8" fill="#2FC4E8" opacity="0.6">12,840</text>

                <text x="0" y="30" fontFamily="monospace" fontSize="9" fill="#2FC4E8" letterSpacing="2" opacity="0.7">SPEED</text>
                <rect x="0" y="38" width="180" height="3" fill="#0D1318" rx="1"/>
                <rect x="0" y="38" width="138" height="3" fill="#2FC4E8" rx="1" opacity="0.7"/>
                <text x="160" y="48" fontFamily="monospace" fontSize="8" fill="#2FC4E8" opacity="0.6">287kph</text>

                <text x="0" y="60" fontFamily="monospace" fontSize="9" fill="#2FC4E8" letterSpacing="2" opacity="0.7">THROTTLE</text>
                <rect x="0" y="68" width="180" height="3" fill="#0D1318" rx="1"/>
                <rect x="0" y="68" width="170" height="3" fill="#2FC4E8" rx="1" opacity="0.9"/>
                <text x="160" y="78" fontFamily="monospace" fontSize="8" fill="#2FC4E8" opacity="0.6">94%</text>

                <text x="0" y="90" fontFamily="monospace" fontSize="9" fill="#2FC4E8" letterSpacing="2" opacity="0.7">BRAKE</text>
                <rect x="0" y="98" width="180" height="3" fill="#0D1318" rx="1"/>
                <rect x="0" y="98" width="12" height="3" fill="#E8622F" rx="1" opacity="0.6"/>
                <text x="160" y="108" fontFamily="monospace" fontSize="8" fill="#2FC4E8" opacity="0.6">6%</text>
              </g>

              {/* Sector times */}
              <g transform="translate(980, 280)">
                <text x="0" y="0" fontFamily="monospace" fontSize="9" fill="#2FC4E8" letterSpacing="3" opacity="0.5">SECTOR ANALYSIS</text>
                <line x1="0" y1="8" x2="180" y2="8" stroke="#2FC4E8" strokeWidth="0.5" opacity="0.3"/>

                <text x="0" y="24" fontFamily="monospace" fontSize="8" fill="#5A6B7A">S1</text>
                <text x="20" y="24" fontFamily="monospace" fontSize="8" fill="#2FC4E8" opacity="0.8">23.441</text>
                <text x="80" y="24" fontFamily="monospace" fontSize="7" fill="#2FC4E8" opacity="0.4">-0.082</text>

                <text x="0" y="40" fontFamily="monospace" fontSize="8" fill="#5A6B7A">S2</text>
                <text x="20" y="40" fontFamily="monospace" fontSize="8" fill="#2FC4E8" opacity="0.8">31.887</text>
                <text x="80" y="40" fontFamily="monospace" fontSize="7" fill="#2FC4E8" opacity="0.4">+0.023</text>

                <text x="0" y="56" fontFamily="monospace" fontSize="8" fill="#5A6B7A">S3</text>
                <text x="20" y="56" fontFamily="monospace" fontSize="8" fill="#2FC4E8" opacity="0.8">19.224</text>
                <text x="80" y="56" fontFamily="monospace" fontSize="7" fill="#5A6B7A" opacity="0.6">-0.114</text>

                <line x1="0" y1="64" x2="180" y2="64" stroke="#2FC4E8" strokeWidth="0.5" opacity="0.3"/>
                <text x="0" y="78" fontFamily="monospace" fontSize="9" fill="#2FC4E8" opacity="0.7">LAP  1:14.552</text>
              </g>

              {/* G-force indicator */}
              <g transform="translate(1100, 460)">
                <circle cx="50" cy="50" r="42" fill="none" stroke="#2FC4E8" strokeWidth="0.5" opacity="0.3"/>
                <circle cx="50" cy="50" r="30" fill="none" stroke="#2FC4E8" strokeWidth="0.5" opacity="0.15"/>
                <circle cx="50" cy="50" r="16" fill="none" stroke="#2FC4E8" strokeWidth="0.5" opacity="0.1"/>
                <line x1="8" y1="50" x2="92" y2="50" stroke="#2FC4E8" strokeWidth="0.5" opacity="0.2"/>
                <line x1="50" y1="8" x2="50" y2="92" stroke="#2FC4E8" strokeWidth="0.5" opacity="0.2"/>
                <circle cx="67" cy="38" r="4" fill="#2FC4E8" opacity="0.9"/>
                <line x1="50" y1="50" x2="67" y2="38" stroke="#2FC4E8" strokeWidth="1" opacity="0.6"/>
                <text x="50" y="108" fontFamily="monospace" fontSize="8" fill="#2FC4E8" opacity="0.45" textAnchor="middle" letterSpacing="2">G-FORCE</text>
              </g>

              {/* Tyre compound indicator */}
              <g transform="translate(980, 580)">
                <text x="0" y="0" fontFamily="monospace" fontSize="9" fill="#2FC4E8" letterSpacing="2" opacity="0.5">TYRE TEMP °C</text>
                <g transform="translate(0, 12)">
                  <rect x="0" y="0" width="36" height="36" rx="2" fill="none" stroke="#2FC4E8" strokeWidth="0.75" opacity="0.4"/>
                  <text x="18" y="14" fontFamily="monospace" fontSize="7" fill="#2FC4E8" opacity="0.6" textAnchor="middle">FL</text>
                  <text x="18" y="28" fontFamily="monospace" fontSize="8" fill="#E8A02F" opacity="0.8" textAnchor="middle">98</text>
                </g>
                <g transform="translate(44, 12)">
                  <rect x="0" y="0" width="36" height="36" rx="2" fill="none" stroke="#2FC4E8" strokeWidth="0.75" opacity="0.4"/>
                  <text x="18" y="14" fontFamily="monospace" fontSize="7" fill="#2FC4E8" opacity="0.6" textAnchor="middle">FR</text>
                  <text x="18" y="28" fontFamily="monospace" fontSize="8" fill="#E8622F" opacity="0.8" textAnchor="middle">104</text>
                </g>
                <g transform="translate(0, 56)">
                  <rect x="0" y="0" width="36" height="36" rx="2" fill="none" stroke="#2FC4E8" strokeWidth="0.75" opacity="0.4"/>
                  <text x="18" y="14" fontFamily="monospace" fontSize="7" fill="#2FC4E8" opacity="0.6" textAnchor="middle">RL</text>
                  <text x="18" y="28" fontFamily="monospace" fontSize="8" fill="#2FC4E8" opacity="0.8" textAnchor="middle">91</text>
                </g>
                <g transform="translate(44, 56)">
                  <rect x="0" y="0" width="36" height="36" rx="2" fill="none" stroke="#2FC4E8" strokeWidth="0.75" opacity="0.4"/>
                  <text x="18" y="14" fontFamily="monospace" fontSize="7" fill="#2FC4E8" opacity="0.6" textAnchor="middle">RR</text>
                  <text x="18" y="28" fontFamily="monospace" fontSize="8" fill="#2FC4E8" opacity="0.8" textAnchor="middle">89</text>
                </g>
              </g>
            </g>

            {/* Gradient overlays */}
            <rect width="1440" height="900" fill="url(#fadeLeft)"/>
            <rect width="1440" height="900" fill="url(#fadeBottom)"/>

            {/* Bright teal accent line at horizon */}
            <line x1="0" y1="580" x2="1440" y2="560" stroke="url(#tealGlow)" strokeWidth="1" opacity="0.3"/>
          </svg>
        </div>

        {/* HERO TEXT */}
        <div className="hero-content">
          <div className="hero-data">
            <div className="hero-data-item">
              <div className="hero-data-line"></div>
              <span className="hero-data-text">Enterprise AI</span>
            </div>
            <div className="hero-data-sep"></div>
            <div className="hero-data-item">
              <div className="hero-data-line"></div>
              <span className="hero-data-text">Regulated Industries</span>
            </div>
            <div className="hero-data-sep"></div>
            <div className="hero-data-item">
              <div className="hero-data-line"></div>
              <span className="hero-data-text">Production-Grade</span>
            </div>
          </div>

          <h1 className="hero-headline">
            Your teams are building.<br/><em>We make it ship.</em>
          </h1>

          <div className="hero-bottom">
            <p className="hero-sub">
              The prototypes are real. The ideas are good. The gap between where they are and where they need to be — that's what we close.
            </p>
            <div className="hero-badge">
              <span className="hero-badge-line">// ACTIVE BUILD</span>
              <span className="hero-badge-sub">Portfolio &amp; Client Engagements</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-rule"></div>

      {/* THE PROBLEM */}
      <div className="problem-section">
        <div className="problem-left">
          <div className="eyebrow">— the problem</div>
          <h2 className="problem-headline">The deployment<br/>chasm is<br/>widening.</h2>
        </div>
        <div className="problem-grid">
          <div className="problem-card">
            <div className="problem-card-label">No deployment path</div>
            <p className="problem-card-desc">The prototypes exist. The use cases are real. The gap is everything between where they are and where they need to be.</p>
          </div>
          <div className="problem-card">
            <div className="problem-card-label">Compliance surface area</div>
            <p className="problem-card-desc">Legacy IT wasn't built for this velocity — not the architecture, not the compliance requirements, not the governance surface area.</p>
          </div>
          <div className="problem-card">
            <div className="problem-card-label">Projects backing up</div>
            <p className="problem-card-desc">Good ideas are dying in review. The people who built them are starting to wonder why they bothered.</p>
          </div>
          <div className="problem-card">
            <div className="problem-card-label">The gap we close</div>
            <p className="problem-card-desc">Compliance architecture, deployment infrastructure, governance frameworks that organizations can actually trust running in production.</p>
          </div>
        </div>
      </div>

      {/* PULL QUOTE */}
      <div className="pull-wrap">
        <blockquote className="pull-quote">
          Every F1 team is fast. The difference between first and fourth isn't the engine — it's the thousand decisions made before the car hits the track.
        </blockquote>
        <p className="pull-quote-attr">The same is true for enterprise AI. Speed was never the constraint.</p>
      </div>

      {/* BUILD STACK DIAGRAM */}
      <div className="stack-section">
        <div className="eyebrow">— what production-grade actually means</div>
        <h2 className="section-display">Production-grade<br/>starts at the bottom.</h2>
        <div className="stack-header">
          <div>
            <p>Most teams build top-down. Application first, infrastructure when there's time. The result demos beautifully and deploys never. We build the other direction. The layers most teams skip are the ones that determine whether anything actually ships.</p>
          </div>
          <div className="stack-note">
            Layer 05 is where most<br/>
            engagements begin.<br/><br/>
            It is also the least<br/>
            consequential decision<br/>
            in the entire stack.
          </div>
        </div>

        <div className="stack">
          <div className="stack-row l-app">
            <div className="stack-num">05</div>
            <div className="stack-body">
              <span className="stack-name">Application Interface</span>
              <span className="stack-desc">What users see. The part everyone demos. The last thing built.</span>
            </div>
            <div className="stack-indicator"><div className="stack-dot dim"></div></div>
          </div>

          <div className="stack-skip">↑&nbsp;&nbsp;where most engagements start and end&nbsp;&nbsp;↑</div>

          <div className="stack-row l-b">
            <div className="stack-num">04</div>
            <div className="stack-body">
              <span className="stack-name">Behavioral Calibration</span>
              <span className="stack-desc">How the system actually behaves under real conditions. Tuned, tested, documented, repeatable.</span>
            </div>
            <div className="stack-indicator"><div className="stack-dot"></div></div>
          </div>

          <div className="stack-row l-c">
            <div className="stack-num">03</div>
            <div className="stack-body">
              <span className="stack-name">Compliance &amp; Governance</span>
              <span className="stack-desc">MLR review, OPDP alignment, approval workflows, access controls. Built in, not bolted on.</span>
            </div>
            <div className="stack-indicator"><div className="stack-dot"></div></div>
          </div>

          <div className="stack-row l-d">
            <div className="stack-num">02</div>
            <div className="stack-body">
              <span className="stack-name">Audit &amp; Explainability</span>
              <span className="stack-desc">Every decision, traceable. Every output, defensible. Answers exist before questions are asked.</span>
            </div>
            <div className="stack-indicator"><div className="stack-dot"></div></div>
          </div>

          <div className="stack-row l-i tall">
            <div className="stack-num">01</div>
            <div className="stack-body">
              <span className="stack-name">Security Infrastructure</span>
              <span className="stack-desc">Privacy by design. Encrypted at rest and in transit. Zero data leakage. The foundation everything else depends on.</span>
            </div>
            <div className="stack-indicator"><div className="stack-dot"></div></div>
          </div>
        </div>
      </div>

      {/* ARCHITECTURE DIAGRAM */}
      <div className="arch-section">
        <div className="eyebrow">How it connects</div>
        <p style={{ fontSize: '1.08rem', color: 'var(--steel-dim)', maxWidth: '620px', marginBottom: '3rem', lineHeight: 1.8 }}>When these are designed together — not assembled after the fact — the system can be handed to an organization and trusted to run.</p>

        <div className="arch-diagram">
          <svg viewBox="0 0 860 420" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <defs>
              <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#2FC4E8" opacity="0.5"/>
              </marker>
              <marker id="arrowDim" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#5A6B7A" opacity="0.5"/>
              </marker>
            </defs>

            {/* Security foundation bar */}
            <rect x="20" y="360" width="820" height="44" rx="2" fill="rgba(47,196,232,0.1)" stroke="rgba(47,196,232,0.28)" strokeWidth="1"/>
            <text x="430" y="387" fontFamily="monospace" fontSize="11" fill="#2FC4E8" textAnchor="middle" letterSpacing="3" opacity="0.8">SECURITY INFRASTRUCTURE</text>

            {/* Audit layer */}
            <rect x="20" y="295" width="820" height="44" rx="2" fill="rgba(47,196,232,0.05)" stroke="rgba(47,196,232,0.14)" strokeWidth="1"/>
            <text x="430" y="322" fontFamily="monospace" fontSize="11" fill="#84D4EA" textAnchor="middle" letterSpacing="3" opacity="0.7">AUDIT + EXPLAINABILITY</text>

            {/* Compliance box + Behavioral box side by side */}
            <rect x="20" y="200" width="390" height="70" rx="2" fill="rgba(47,196,232,0.06)" stroke="rgba(47,196,232,0.16)" strokeWidth="1"/>
            <text x="215" y="229" fontFamily="monospace" fontSize="11" fill="#96DFF0" textAnchor="middle" letterSpacing="2" opacity="0.75">COMPLIANCE</text>
            <text x="215" y="249" fontFamily="monospace" fontSize="9" fill="#96DFF0" textAnchor="middle" opacity="0.4">MLR · OPDP · Access Controls</text>

            <rect x="450" y="200" width="390" height="70" rx="2" fill="rgba(47,196,232,0.08)" stroke="rgba(47,196,232,0.2)" strokeWidth="1"/>
            <text x="645" y="229" fontFamily="monospace" fontSize="11" fill="#A8E8F5" textAnchor="middle" letterSpacing="2" opacity="0.8">BEHAVIORAL CALIBRATION</text>
            <text x="645" y="249" fontFamily="monospace" fontSize="9" fill="#A8E8F5" textAnchor="middle" opacity="0.4">Tuning · Testing · Documentation</text>

            {/* Three application nodes at top */}
            <rect x="20" y="80" width="240" height="90" rx="2" fill="rgba(20,28,35,0.9)" stroke="rgba(226,234,240,0.14)" strokeWidth="1"/>
            <text x="140" y="112" fontFamily="monospace" fontSize="10" fill="#E2EAF0" textAnchor="middle" letterSpacing="2" opacity="0.8">PORTFOLIO</text>
            <text x="140" y="130" fontFamily="monospace" fontSize="9" fill="#7A8E9E" textAnchor="middle" opacity="0.6">Halo · Jetstream · Forge</text>
            <text x="140" y="150" fontFamily="monospace" fontSize="8" fill="#2FC4E8" textAnchor="middle" opacity="0.45">IN ACTIVE DEVELOPMENT</text>

            <rect x="310" y="80" width="240" height="90" rx="2" fill="rgba(20,28,35,0.9)" stroke="rgba(226,234,240,0.14)" strokeWidth="1"/>
            <text x="430" y="112" fontFamily="monospace" fontSize="10" fill="#E2EAF0" textAnchor="middle" letterSpacing="2" opacity="0.8">CLIENT BUILD</text>
            <text x="430" y="130" fontFamily="monospace" fontSize="9" fill="#7A8E9E" textAnchor="middle" opacity="0.6">Embedded Delivery</text>
            <text x="430" y="150" fontFamily="monospace" fontSize="8" fill="#2FC4E8" textAnchor="middle" opacity="0.45">REGULATED INDUSTRIES</text>

            <rect x="600" y="80" width="240" height="90" rx="2" fill="rgba(20,28,35,0.9)" stroke="rgba(226,234,240,0.14)" strokeWidth="1"/>
            <text x="720" y="112" fontFamily="monospace" fontSize="10" fill="#E2EAF0" textAnchor="middle" letterSpacing="2" opacity="0.8">CAPABILITY BUILD</text>
            <text x="720" y="130" fontFamily="monospace" fontSize="9" fill="#7A8E9E" textAnchor="middle" opacity="0.6">Team Readiness</text>
            <text x="720" y="150" fontFamily="monospace" fontSize="8" fill="#2FC4E8" textAnchor="middle" opacity="0.45">GOVERNANCE + PROCESS</text>

            {/* Connecting lines */}
            <line x1="140" y1="170" x2="180" y2="200" stroke="#5A6B7A" strokeWidth="1" strokeDasharray="4,3" opacity="0.4" markerEnd="url(#arrowDim)"/>
            <line x1="430" y1="170" x2="375" y2="200" stroke="#5A6B7A" strokeWidth="1" strokeDasharray="4,3" opacity="0.4" markerEnd="url(#arrowDim)"/>
            <line x1="430" y1="170" x2="550" y2="200" stroke="#5A6B7A" strokeWidth="1" strokeDasharray="4,3" opacity="0.4" markerEnd="url(#arrowDim)"/>
            <line x1="720" y1="170" x2="680" y2="200" stroke="#5A6B7A" strokeWidth="1" strokeDasharray="4,3" opacity="0.4" markerEnd="url(#arrowDim)"/>

            {/* Compliance + Behavioral → Audit */}
            <line x1="215" y1="270" x2="350" y2="295" stroke="#2FC4E8" strokeWidth="1" opacity="0.35" markerEnd="url(#arrow)"/>
            <line x1="645" y1="270" x2="510" y2="295" stroke="#2FC4E8" strokeWidth="1" opacity="0.35" markerEnd="url(#arrow)"/>

            {/* Audit → Security */}
            <line x1="430" y1="339" x2="430" y2="360" stroke="#2FC4E8" strokeWidth="1.5" opacity="0.45" markerEnd="url(#arrow)"/>

            {/* Layer labels on right */}
            <text x="848" y="387" fontFamily="monospace" fontSize="8" fill="#2FC4E8" opacity="0.35" textAnchor="end">L01</text>
            <text x="848" y="322" fontFamily="monospace" fontSize="8" fill="#2FC4E8" opacity="0.25" textAnchor="end">L02</text>
            <text x="408" y="240" fontFamily="monospace" fontSize="8" fill="#2FC4E8" opacity="0.2" textAnchor="end">L03</text>
            <text x="838" y="240" fontFamily="monospace" fontSize="8" fill="#2FC4E8" opacity="0.2" textAnchor="end">L04</text>
            <text x="258" y="130" fontFamily="monospace" fontSize="8" fill="#2FC4E8" opacity="0.15" textAnchor="end">L05</text>
          </svg>
        </div>
      </div>

      {/* ENGAGEMENT PROCESS FLOW */}
      <div className="process-section">
        <div className="eyebrow">— how an engagement works</div>
        <h2 className="section-display">The Process.</h2>
        <p style={{ fontSize: '1.08rem', color: 'var(--steel-dim)', maxWidth: '620px', marginBottom: 0, lineHeight: 1.8 }}>We don't start with a statement of work. We start with what's already been built — and work forward from there. Four phases, each with a defined outcome.</p>

        <div className="process-list">
          <div className="process-row">
            <span className="process-row-num">01</span>
            <div className="process-row-body">
              <div className="process-row-title">Triage</div>
              <p className="process-row-desc">Deployable or dead end. We find out fast.</p>
            </div>
            <span className="process-row-arrow">→</span>
          </div>
          <div className="process-row">
            <span className="process-row-num">02</span>
            <div className="process-row-body">
              <div className="process-row-title">Foundation</div>
              <p className="process-row-desc">Security. Compliance. Infrastructure. Built once, applied to everything.</p>
            </div>
            <span className="process-row-arrow">→</span>
          </div>
          <div className="process-row">
            <span className="process-row-num">03</span>
            <div className="process-row-body">
              <div className="process-row-title">Build &amp; Extend</div>
              <p className="process-row-desc">The prototypes worth keeping become production systems.</p>
            </div>
            <span className="process-row-arrow">→</span>
          </div>
          <div className="process-row">
            <span className="process-row-num">04</span>
            <div className="process-row-body">
              <div className="process-row-title">Deploy &amp; Transfer</div>
              <p className="process-row-desc">We ship it, stabilize it, and leave a team that can run it.</p>
            </div>
            <span className="process-row-arrow">→</span>
          </div>
        </div>
      </div>

      {/* THE WORK - TWO TRACKS */}
      <div className="section">
        <div className="eyebrow">— the work</div>
        <h2 className="section-display">Two tracks.<br/>One conviction.</h2>
        <p>Altegic Labs operates on two tracks. One builds products. One unsticks organizations. Both are grounded in the same conviction — that the prototype was never the problem.</p>

        <div className="tracks">
          <div className="track">
            <span className="track-num">// 01</span>
            <div className="track-title">For our portfolio</div>
            <p>Each product starts with a problem we've watched organizations struggle with firsthand — often the exact friction that generates the prototype backlog to begin with. Built for the compliance requirements, edge cases, and operational realities that proof-of-concept tools weren't designed to handle.</p>
            <div className="product-tags">
              <span className="tag">Halo</span>
              <span className="tag">Jetstream</span>
              <span className="tag">Forge</span>
              <span className="tag">In development</span>
            </div>
          </div>
          <div className="track">
            <span className="track-num">// 02</span>
            <div className="track-title">For our clients</div>
            <p>We embed with teams who have more good ideas than infrastructure. We evaluate what's been built, identify what's deployable, and build the path from prototype to production.</p>
            <p className="track-emphasis">We don't compete with the firms already on your roster. We do the work that falls between what they offer and what your teams actually need.</p>
          </div>
        </div>
      </div>

      {/* HOW WE WORK */}
      <div className="section">
        <div className="eyebrow">How we work</div>
        <p>We take on a small number of engagements. The environments are regulated, the stakes are real, and we've done this work inside the firms, alongside them, and sometimes in spite of them.</p>

        <div className="attributes">
          <div className="attribute">
            <span className="attr-label">Starting point</span>
            <span className="attr-value">What your teams have already built.</span>
          </div>
          <div className="attribute">
            <span className="attr-label">Approach</span>
            <span className="attr-value">Embedded delivery. We build alongside, not from a distance.</span>
          </div>
          <div className="attribute">
            <span className="attr-label">Security</span>
            <span className="attr-value">Privacy by design. Enterprise-grade. Non-negotiable.</span>
          </div>
          <div className="attribute">
            <span className="attr-label">Capacity</span>
            <span className="attr-value">Limited engagements. Deliberate by design.</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <div className="cta-eyebrow">Start a conversation</div>
        <div className="cta-headline">If something worth shipping<br/>is sitting in your backlog,<br/><em>let's talk.</em></div>
        <a href="mailto:hello@altegiclabs.com" className="cta-link">
          hello@altegiclabs.com
          <span className="cta-arrow">→</span>
        </a>
      </div>

      <footer>
        <div className="footer-wordmark">
          <span className="footer-dot"></span>Altegic Labs
        </div>
        <span className="footer-legal">Confidential — Private &amp; Secure by Design</span>
      </footer>
    </>
  )
}

export default App
