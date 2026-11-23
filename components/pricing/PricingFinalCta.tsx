'use client';

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import SectionBg from "@/components/ui/SectionBg";
import { PRICING_FINAL_CTA, buildPricingWhatsAppUrl } from "@/lib/pricing-data";

const EASING = [0.22, 1, 0.36, 1] as const;

export default function PricingFinalCta() {
  const shouldReduce = useReducedMotion();
  const waUrl = buildPricingWhatsAppUrl(
    "Halo IRDIVE! Saya memiliki rencana project baru dan ingin berdiskusi mengenai solusi digital yang tepat."
  );

  return (
    <section className="pricing-final-cta-section" aria-label="Konsultasi Project">
      <SectionBg variant="mascot-right" mascotSrc="/mascot-2.png" mascotOpacity={0.05} dark={true} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          className="final-cta-card"
          initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASING }}
        >
          <span className="final-cta-badge">{PRICING_FINAL_CTA.badge}</span>
          <h2 className="final-cta-title">{PRICING_FINAL_CTA.heading}</h2>
          <p className="final-cta-desc">{PRICING_FINAL_CTA.description}</p>

          <div className="final-cta-action">
            <motion.a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="final-cta-btn"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>{PRICING_FINAL_CTA.buttonText}</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .pricing-final-cta-section {
          position: relative;
          padding-top: 5rem;
          padding-bottom: 5rem;
          background: #080B13;
          color: #F9FAFB;
          overflow: hidden;
        }

        .final-cta-card {
          text-align: center;
          max-width: 680px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 28px;
          padding: 3.5rem 2rem;
          backdrop-filter: blur(16px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .final-cta-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #4CAF50;
          background: rgba(76, 175, 80, 0.1);
          border: 1px solid rgba(76, 175, 80, 0.2);
          padding: 4px 14px;
          border-radius: 9999px;
          margin-bottom: 1.25rem;
        }

        .final-cta-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3.25rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #FFFFFF;
          margin-bottom: 1rem;
          line-height: 1.15;
        }

        .final-cta-desc {
          font-size: clamp(0.95rem, 1.8vw, 1.1rem);
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.65;
          margin-bottom: 2.25rem;
          max-width: 520px;
          margin-left: auto;
          margin-right: auto;
        }

        .final-cta-action {
          display: flex;
          justify-content: center;
        }

        .final-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          background: linear-gradient(135deg, #2196F3, #1976D2);
          color: #FFFFFF;
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          padding: 1rem 2.25rem;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 10px 28px rgba(33, 150, 243, 0.35);
          transition: box-shadow 0.2s;
        }

        .final-cta-btn:hover {
          box-shadow: 0 16px 36px rgba(33, 150, 243, 0.5);
        }

        @media (max-width: 639px) {
          .final-cta-card {
            padding: 2.5rem 1.25rem;
            border-radius: 20px;
          }
          .final-cta-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
