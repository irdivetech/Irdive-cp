'use client';

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { PRICING_TERMS } from "@/lib/pricing-data";

const EASING = [0.22, 1, 0.36, 1] as const;

export default function PricingTerms() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="pricing-terms-section" aria-label="Ketentuan dan Informasi Harga">
      <div className="container">
        {/* Header */}
        <div className="pricing-terms-header">
          <span className="label-tag" style={{ color: "var(--blue)" }}>
            Information & Terms
          </span>
          <h2 className="pricing-terms-heading">
            Ketentuan & <span style={{ color: "var(--blue)" }}>Transparansi Kerja.</span>
          </h2>
          <p className="pricing-terms-subtitle">
            Standar profesional kami dalam menjamin kepastian, kejelasan alur, dan transparansi kesepakatan project.
          </p>
        </div>

        {/* Terms Grid */}
        <div className="pricing-terms-grid">
          {PRICING_TERMS.map((term, index) => (
            <motion.div
              key={term.number}
              className="pricing-term-card"
              initial={shouldReduce ? {} : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.05 * index, ease: EASING }}
            >
              <div className="term-number-badge">{term.number}</div>
              <div className="term-content">
                <h3 className="term-title">{term.title}</h3>
                <p className="term-desc">{term.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .pricing-terms-section {
          position: relative;
          padding-top: 5rem;
          padding-bottom: 5rem;
          background: #FAFAFA;
        }

        .pricing-terms-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 3.5rem;
        }

        .pricing-terms-heading {
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #0B0F19;
          margin-top: 0.6rem;
          margin-bottom: 0.75rem;
        }

        .pricing-terms-subtitle {
          font-size: 0.95rem;
          color: #6B7280;
          line-height: 1.6;
        }

        .pricing-terms-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 640px) {
          .pricing-terms-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .pricing-terms-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .pricing-term-card {
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 16px;
          padding: 1.6rem;
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
        }

        .pricing-term-card:hover {
          transform: translateY(-2px);
          border-color: #90CAF9;
          box-shadow: 0 8px 20px rgba(33, 150, 243, 0.07);
        }

        .term-number-badge {
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 800;
          color: #1976D2;
          background: #E3F2FD;
          border: 1px solid #BBDEFB;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .term-content {
          flex: 1;
        }

        .term-title {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: #0B0F19;
          letter-spacing: -0.01em;
          margin-bottom: 0.35rem;
        }

        .term-desc {
          font-size: 0.86rem;
          color: #6B7280;
          line-height: 1.55;
        }
      `}</style>
    </section>
  );
}
