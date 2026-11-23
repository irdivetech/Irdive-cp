'use client';

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ADDITIONAL_SERVICES, buildPricingWhatsAppUrl } from "@/lib/pricing-data";

const EASING = [0.22, 1, 0.36, 1] as const;

export default function AdditionalServices() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="add-services-section" aria-label="Layanan Tambahan">
      <div className="container">
        {/* Header */}
        <div className="add-services-header">
          <span className="label-tag" style={{ color: "var(--green-dark)" }}>
            Add-on Services
          </span>
          <h2 className="add-services-heading">
            Layanan <span style={{ color: "var(--blue)" }}>Tambahan.</span>
          </h2>
          <p className="add-services-subtitle">
            Kebutuhan spesifik dan add-on operasional untuk melengkapi ekosistem digital bisnis Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="add-services-grid">
          {ADDITIONAL_SERVICES.map((service, index) => {
            const waUrl = buildPricingWhatsAppUrl(
              `Halo IRDIVE! Saya tertarik dan ingin berkonsultasi mengenai layanan tambahan ${service.name}.`
            );

            return (
              <motion.div
                key={service.id}
                className="add-service-card"
                initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.05 * index, ease: EASING }}
              >
                <div className="add-card-header">
                  <h3 className="add-service-name">{service.name}</h3>
                  <span className="add-service-badge">{service.badge}</span>
                </div>

                <p className="add-service-desc">{service.description}</p>

                <div className="add-card-action">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="add-service-link"
                  >
                    <span>Konsultasi Layanan</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <div className="add-services-note">
          <p>
            * Biaya layanan tambahan disesuaikan dengan volume, durasi, dan spesifikasi teknis yang Anda butuhkan.
          </p>
        </div>
      </div>

      <style>{`
        .add-services-section {
          position: relative;
          padding-top: 4.5rem;
          padding-bottom: 4.5rem;
          background: #F4F6F8;
          border-top: 1px solid #E5E7EB;
          border-bottom: 1px solid #E5E7EB;
        }

        .add-services-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 3rem;
        }

        .add-services-heading {
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #0B0F19;
          margin-top: 0.6rem;
          margin-bottom: 0.75rem;
        }

        .add-services-subtitle {
          font-size: 0.95rem;
          color: #6B7280;
          line-height: 1.6;
        }

        .add-services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 640px) {
          .add-services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .add-services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .add-service-card {
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 16px;
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
        }

        .add-service-card:hover {
          transform: translateY(-3px);
          border-color: #2196F3;
          box-shadow: 0 10px 24px rgba(33, 150, 243, 0.08);
        }

        .add-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 0.65rem;
        }

        .add-service-name {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 700;
          color: #0B0F19;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }

        .add-service-badge {
          display: inline-flex;
          align-items: center;
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #1565C0;
          background: #E3F2FD;
          border: 1px solid #BBDEFB;
          padding: 3px 8px;
          border-radius: 6px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .add-service-desc {
          font-size: 0.88rem;
          color: #6B7280;
          line-height: 1.55;
          margin-bottom: 1.25rem;
          flex: 1;
        }

        .add-card-action {
          margin-top: auto;
          padding-top: 0.85rem;
          border-top: 1px solid #F3F4F6;
        }

        .add-service-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.84rem;
          font-weight: 600;
          color: #2196F3;
          text-decoration: none;
          transition: gap 0.2s, color 0.2s;
        }

        .add-service-link:hover {
          color: #1565C0;
          gap: 0.6rem;
        }

        .add-services-note {
          text-align: center;
          margin-top: 2.5rem;
        }

        .add-services-note p {
          font-size: 0.82rem;
          color: #9CA3AF;
          font-style: italic;
        }
      `}</style>
    </section>
  );
}
