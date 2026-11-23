'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { PRICING_FAQS, type FaqItem } from "@/lib/pricing-data";

export default function PricingFaq() {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const shouldReduce = useReducedMotion();

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="pricing-faq-section" aria-label="Frequently Asked Questions">
      <div className="container">
        {/* Header */}
        <div className="pricing-faq-header">
          <span className="label-tag" style={{ color: "var(--blue)" }}>
            Questions & Answers
          </span>
          <h2 className="pricing-faq-heading">
            Frequently Asked <span style={{ color: "var(--blue)" }}>Questions.</span>
          </h2>
          <p className="pricing-faq-subtitle">
            Pertanyaan umum seputar skema harga, proses pengerjaan, dan layanan IRDIVE.
          </p>
        </div>

        {/* Accordion List */}
        <div className="pricing-faq-list">
          {PRICING_FAQS.map((faq: FaqItem) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`faq-item-card ${isOpen ? "open" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="faq-question-btn"
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-toggle-icon" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease",
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={shouldReduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={shouldReduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                      exit={shouldReduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="faq-answer-inner">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .pricing-faq-section {
          position: relative;
          padding-top: 5rem;
          padding-bottom: 5.5rem;
          background: #FFFFFF;
          border-top: 1px solid #E5E7EB;
        }

        .pricing-faq-header {
          text-align: center;
          max-width: 620px;
          margin: 0 auto 3.5rem;
        }

        .pricing-faq-heading {
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #0B0F19;
          margin-top: 0.6rem;
          margin-bottom: 0.75rem;
        }

        .pricing-faq-subtitle {
          font-size: 0.95rem;
          color: #6B7280;
          line-height: 1.6;
        }

        .pricing-faq-list {
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .faq-item-card {
          background: #FAFAFA;
          border: 1px solid #E5E7EB;
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        }

        .faq-item-card:hover {
          border-color: #90CAF9;
          background: #FFFFFF;
        }

        .faq-item-card.open {
          border-color: #2196F3;
          background: #FFFFFF;
          box-shadow: 0 4px 16px rgba(33, 150, 243, 0.08);
        }

        .faq-question-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 1rem;
        }

        .faq-question-text {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: #0B0F19;
          letter-spacing: -0.01em;
          line-height: 1.35;
        }

        .faq-item-card.open .faq-question-text {
          color: #1565C0;
        }

        .faq-toggle-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: #ECEFF1;
          color: #455A64;
          flex-shrink: 0;
          transition: background 0.2s, color 0.2s;
        }

        .faq-item-card.open .faq-toggle-icon {
          background: #E3F2FD;
          color: #1976D2;
        }

        .faq-answer-inner {
          padding: 0 1.5rem 1.35rem;
          border-top: 1px solid #F3F4F6;
          margin-top: 0.25rem;
          padding-top: 1rem;
        }

        .faq-answer-inner p {
          font-size: 0.92rem;
          color: #4B5563;
          line-height: 1.65;
        }

        @media (max-width: 639px) {
          .faq-question-btn {
            padding: 1.1rem 1.2rem;
          }
          .faq-question-text {
            font-size: 0.96rem;
          }
          .faq-answer-inner {
            padding: 0.75rem 1.2rem 1.2rem;
          }
          .faq-answer-inner p {
            font-size: 0.88rem;
          }
        }
      `}</style>
    </section>
  );
}
