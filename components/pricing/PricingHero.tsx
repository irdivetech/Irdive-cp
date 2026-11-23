'use client';

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import SectionBg from "@/components/ui/SectionBg";
import { PRICING_HERO, buildPricingWhatsAppUrl } from "@/lib/pricing-data";

const EASING = [0.22, 1, 0.36, 1] as const;

export default function PricingHero() {
  const shouldReduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-40px" });

  const fadeUp = (delay: number) => ({
    initial: shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, delay, ease: EASING },
  });

  const handleScrollToPackages = () => {
    const el = document.getElementById("pricing-packages");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const discussUrl = buildPricingWhatsAppUrl(
    "Halo IRDIVE! Saya ingin mendiskusikan kebutuhan project dan solusi digital terbaik untuk bisnis saya."
  );

  return (
    <section
      ref={sectionRef}
      className="pricing-hero-section"
      aria-label="Pricing Hero"
    >
      <SectionBg variant="mascot-right" mascotSrc="/mascot-2.png" mascotOpacity={0.045} />

      <div className="container pricing-hero-container">
        <div className="pricing-hero-grid">
          {/* Text column */}
          <div className="pricing-hero-text">
            {/* Tag / Badge */}
            <motion.div {...fadeUp(0)}>
              <span className="pricing-hero-badge">
                <span className="pricing-badge-dot" />
                {PRICING_HERO.badge}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 {...fadeUp(0.1)} className="pricing-hero-title">
              Invest in Your{" "}
              <span className="pricing-hero-highlight">Digital Growth.</span>
            </motion.h1>

            {/* Description */}
            <motion.p {...fadeUp(0.2)} className="pricing-hero-desc">
              {PRICING_HERO.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.3)} className="pricing-hero-actions">
              <button
                type="button"
                onClick={handleScrollToPackages}
                className="pricing-cta-primary"
              >
                <span>{PRICING_HERO.ctaExplore}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </button>

              <a
                href={discussUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pricing-cta-secondary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>{PRICING_HERO.ctaDiscuss}</span>
              </a>
            </motion.div>
          </div>

          {/* Visual column / Mascot illustration */}
          <motion.div {...fadeUp(0.25)} className="pricing-hero-mascot" aria-hidden="true">
            <div className="pricing-mascot-card">
              <div className="pricing-mascot-img-wrap">
                <Image
                  src="/mascot-2.png"
                  alt="IRDIVE Mascot"
                  fill
                  priority
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="pricing-hero-stat-badge">
                <span className="stat-badge-dot" />
                <span>Solusi Profesional & Terukur</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .pricing-hero-section {
          position: relative;
          padding-top: calc(72px + 2.5rem);
          padding-bottom: 3.5rem;
          background: #FAFAFA;
          overflow: hidden;
        }

        .pricing-hero-container {
          position: relative;
          z-index: 1;
        }

        .pricing-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }

        .pricing-hero-text {
          max-width: 640px;
        }

        .pricing-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          background: rgba(33, 150, 243, 0.08);
          border: 1px solid rgba(33, 150, 243, 0.22);
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 700;
          color: #1976D2;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        .pricing-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #2196F3;
          box-shadow: 0 0 8px rgba(33, 150, 243, 0.6);
        }

        .pricing-hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 6vw, 4.25rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: #0B0F19;
          margin-bottom: 1.25rem;
        }

        .pricing-hero-highlight {
          color: #2196F3;
          background: linear-gradient(135deg, #1976D2 0%, #2196F3 50%, #4CAF50 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .pricing-hero-desc {
          font-family: var(--font-body);
          font-size: clamp(1rem, 2vw, 1.15rem);
          line-height: 1.7;
          color: #4B5563;
          margin-bottom: 2.25rem;
          max-width: 560px;
        }

        .pricing-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
        }

        .pricing-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #2196F3, #1565C0);
          color: #FFFFFF;
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 700;
          padding: 0.85rem 1.6rem;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(33, 150, 243, 0.28);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .pricing-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(33, 150, 243, 0.4);
        }

        .pricing-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #FFFFFF;
          color: #1E2328;
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 600;
          padding: 0.85rem 1.5rem;
          border-radius: 12px;
          border: 1px solid #E5E7EB;
          text-decoration: none;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
          transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s, color 0.2s;
        }

        .pricing-cta-secondary svg {
          color: #25D366;
        }

        .pricing-cta-secondary:hover {
          transform: translateY(-2px);
          border-color: #2196F3;
          color: #1976D2;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }

        .pricing-hero-mascot {
          display: none;
          justify-content: center;
          align-items: center;
        }

        .pricing-mascot-card {
          position: relative;
          width: 100%;
          max-width: 440px;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pricing-mascot-img-wrap {
          position: relative;
          width: 85%;
          height: 85%;
          filter: drop-shadow(0 20px 35px rgba(33, 150, 243, 0.22));
        }

        .pricing-hero-stat-badge {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(229, 231, 235, 0.9);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          font-size: 0.8rem;
          font-weight: 700;
          color: #1E2328;
          white-space: nowrap;
        }

        .stat-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4CAF50;
        }

        @media (min-width: 900px) {
          .pricing-hero-section {
            padding-top: calc(72px + 3.5rem);
            padding-bottom: 5rem;
          }

          .pricing-hero-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 3.5rem;
          }

          .pricing-hero-mascot {
            display: flex;
          }
        }
      `}</style>
    </section>
  );
}
