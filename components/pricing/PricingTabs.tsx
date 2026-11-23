'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  PRICING_CATEGORIES,
  CREATIVE_DESIGN_SERVICES,
  buildPricingWhatsAppUrl,
  type PricingPlan,
  type StandaloneService,
} from "@/lib/pricing-data";

const EASING = [0.22, 1, 0.36, 1] as const;

export default function PricingTabs() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("website-development");
  const shouldReduce = useReducedMotion();

  const currentCategory = PRICING_CATEGORIES.find((cat) => cat.id === activeCategoryId) || PRICING_CATEGORIES[0];

  const getCreativeServiceIcon = (iconName: StandaloneService["iconName"]) => {
    switch (iconName) {
      case "palette":
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z"/>
          </svg>
        );
      case "image":
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
        );
      case "video":
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="23 7 16 12 23 17 23 7"/>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
          </svg>
        );
      case "pen-tool":
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19l7-7 3 3-7 7-3-3z"/>
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
            <path d="M2 2l7.586 7.586"/>
            <circle cx="11" cy="11" r="2"/>
          </svg>
        );
      case "sparkles":
      default:
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
          </svg>
        );
    }
  };

  return (
    <section id="pricing-packages" className="pricing-tabs-section" aria-label="Paket Layanan IRDIVE">
      <div className="container">
        {/* Section Header */}
        <div className="pricing-tabs-header">
          <span className="label-tag" style={{ color: "var(--blue)" }}>
            Service Packages
          </span>
          <h2 className="pricing-tabs-heading">
            Pilih Paket Sesuai <span style={{ color: "var(--blue)" }}>Kebutuhan Bisnis.</span>
          </h2>
          <p className="pricing-tabs-subtitle">
            Transparansi rincian fitur, fleksibilitas paket, dan kualitas pengerjaan standar industri.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="pricing-nav-wrapper">
          <nav className="pricing-nav-tabs" role="tablist" aria-label="Kategori Layanan">
            {PRICING_CATEGORIES.map((category) => {
              const isActive = category.id === activeCategoryId;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${category.id}`}
                  id={`tab-${category.id}`}
                  onClick={() => setActiveCategoryId(category.id)}
                  className={`pricing-tab-btn ${isActive ? "active" : ""}`}
                >
                  <span className="tab-label">{category.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="pricing-active-tab-indicator"
                      className="tab-active-indicator"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Category Description Banner */}
        <div className="pricing-category-intro">
          <p className="pricing-category-tagline">{currentCategory.tagline}</p>
        </div>

        {/* Tab Panel Content with Smooth Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategoryId}
            id={`panel-${activeCategoryId}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeCategoryId}`}
            initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduce ? {} : { opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: EASING }}
          >
            {/* Case A: Standard Plans (Website Dev, Maintenance, Social Media) */}
            {currentCategory.plans && currentCategory.plans.length > 0 && (
              <div
                className={`pricing-cards-grid ${
                  currentCategory.id === "website-development" ? "grid-website-dev" : "grid-three-col"
                }`}
              >
                {currentCategory.plans.map((plan: PricingPlan) => {
                  const isFeatured = !!plan.popular;
                  const waUrl = buildPricingWhatsAppUrl(plan.waCustomMessage);

                  return (
                    <div
                      key={plan.id}
                      className={`pricing-plan-card ${isFeatured ? "featured" : ""}`}
                    >
                      {/* Featured Badge */}
                      {plan.badge && (
                        <div className="card-badge-container">
                          <span className="card-badge-pill">{plan.badge}</span>
                        </div>
                      )}

                      {/* Card Header: Plan Name & Description */}
                      <div className="card-header">
                        <h3 className="card-plan-name">{plan.name}</h3>
                        <p className="card-plan-desc">{plan.description}</p>
                      </div>

                      {/* Pricing Block */}
                      <div className="card-price-block">
                        {plan.pricePrefix && (
                          <span className="price-prefix">{plan.pricePrefix}</span>
                        )}
                        <div className="price-main-row">
                          <span className="price-amount">{plan.price}</span>
                          {plan.period && (
                            <span className="price-period">{plan.period}</span>
                          )}
                        </div>
                        {plan.timeline && (
                          <div className="card-timeline-pill">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"/>
                              <polyline points="12 6 12 12 16 14"/>
                            </svg>
                            <span>{plan.timeline}</span>
                          </div>
                        )}
                      </div>

                      {/* Divider */}
                      <div className="card-divider" />

                      {/* Features List */}
                      <div className="card-features-section">
                        <span className="features-header-title">Fitur & Ketentuan:</span>
                        <ul className="card-features-list">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="card-feature-item">
                              <span className="feature-check-icon" aria-hidden="true">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12"/>
                                </svg>
                              </span>
                              <span className="feature-text">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Special Note if applicable */}
                      {plan.note && (
                        <p className="card-plan-note">{plan.note}</p>
                      )}

                      {/* CTA Button */}
                      <div className="card-action">
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`card-cta-btn ${isFeatured ? "btn-featured" : "btn-standard"}`}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                          <span>{plan.ctaText || "Pilih Paket"}</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Case B: Creative Design (Layanan Satuan) */}
            {currentCategory.id === "creative-design" && (
              <div className="creative-services-grid">
                {CREATIVE_DESIGN_SERVICES.map((service) => {
                  const waUrl = buildPricingWhatsAppUrl(
                    `Halo IRDIVE! Saya ingin meminta penawaran (quotation) untuk layanan ${service.name}.`
                  );
                  return (
                    <div key={service.id} className="creative-card">
                      <div className="creative-card-top">
                        <div className="creative-icon-wrap" aria-hidden="true">
                          {getCreativeServiceIcon(service.iconName)}
                        </div>
                        <span className="creative-quotation-badge">
                          {service.priceLabel}
                        </span>
                      </div>

                      <h3 className="creative-service-title">{service.name}</h3>
                      <p className="creative-service-desc">{service.description}</p>

                      <div className="creative-card-action">
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="creative-cta-btn"
                        >
                          <span>Minta Penawaran</span>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"/>
                            <polyline points="12 5 19 12 12 19"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Category Note Banner */}
            {currentCategory.note && (
              <div className="category-note-banner">
                <div className="note-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                </div>
                <p className="note-text">{currentCategory.note}</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        .pricing-tabs-section {
          position: relative;
          padding-top: 4.5rem;
          padding-bottom: 5rem;
          background: #FAFAFA;
        }

        .pricing-tabs-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 3rem;
        }

        .pricing-tabs-heading {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.025em;
          color: #0B0F19;
          margin-top: 0.6rem;
          margin-bottom: 0.85rem;
        }

        .pricing-tabs-subtitle {
          font-family: var(--font-body);
          font-size: clamp(0.95rem, 1.8vw, 1.05rem);
          color: #6B7280;
          line-height: 1.6;
        }

        /* Tabs segmented bar */
        .pricing-nav-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 1.75rem;
        }

        .pricing-nav-tabs {
          display: inline-flex;
          align-items: center;
          background: #ECEFF1;
          padding: 5px;
          border-radius: 9999px;
          border: 1px solid #CFD8DC;
          gap: 4px;
          max-width: 100%;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .pricing-nav-tabs::-webkit-scrollbar {
          display: none;
        }

        .pricing-tab-btn {
          position: relative;
          background: transparent;
          border: none;
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 0.88rem;
          font-weight: 600;
          color: #455A64;
          padding: 0.65rem 1.25rem;
          border-radius: 9999px;
          white-space: nowrap;
          transition: color 0.2s;
          z-index: 1;
        }

        .pricing-tab-btn:hover {
          color: #1E2328;
        }

        .pricing-tab-btn.active {
          color: #1565C0;
          font-weight: 700;
        }

        .tab-label {
          position: relative;
          z-index: 2;
        }

        .tab-active-indicator {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: #FFFFFF;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);
          z-index: 1;
        }

        /* Category Intro */
        .pricing-category-intro {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 2.5rem;
        }

        .pricing-category-tagline {
          font-size: 0.95rem;
          color: #4B5563;
          font-weight: 500;
          line-height: 1.55;
        }

        /* Grids */
        .pricing-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .grid-website-dev {
            grid-template-columns: repeat(2, 1fr);
          }
          .grid-three-col {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .grid-website-dev {
            grid-template-columns: repeat(3, 1fr);
          }
          .grid-three-col {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Pricing Card */
        .pricing-plan-card {
          position: relative;
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 20px;
          padding: 2rem 1.75rem 1.75rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
          transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
        }

        .pricing-plan-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(33, 150, 243, 0.1);
          border-color: #90CAF9;
        }

        .pricing-plan-card.featured {
          border: 2px solid #2196F3;
          box-shadow: 0 8px 28px rgba(33, 150, 243, 0.14);
          background: #FFFFFF;
        }

        .pricing-plan-card.featured:hover {
          box-shadow: 0 16px 40px rgba(33, 150, 243, 0.22);
        }

        .card-badge-container {
          position: absolute;
          top: -13px;
          right: 20px;
        }

        .card-badge-pill {
          display: inline-flex;
          align-items: center;
          background: linear-gradient(135deg, #2196F3, #1565C0);
          color: #FFFFFF;
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 9999px;
          box-shadow: 0 2px 8px rgba(33, 150, 243, 0.4);
        }

        .card-header {
          margin-bottom: 1.25rem;
        }

        .card-plan-name {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 800;
          color: #0B0F19;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
        }

        .card-plan-desc {
          font-size: 0.86rem;
          color: #6B7280;
          line-height: 1.5;
          min-height: 2.6rem;
        }

        .card-price-block {
          margin-bottom: 1.25rem;
        }

        .price-prefix {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #2196F3;
          margin-bottom: 0.2rem;
        }

        .price-main-row {
          display: flex;
          align-items: baseline;
          gap: 0.25rem;
        }

        .price-amount {
          font-family: var(--font-display);
          font-size: 1.85rem;
          font-weight: 800;
          color: #0B0F19;
          letter-spacing: -0.03em;
        }

        .price-period {
          font-size: 0.9rem;
          font-weight: 500;
          color: #6B7280;
        }

        .card-timeline-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          margin-top: 0.6rem;
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          background: #F3F4F6;
          color: #4B5563;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .card-timeline-pill svg {
          color: #2196F3;
        }

        .card-divider {
          height: 1px;
          background: #E5E7EB;
          margin-bottom: 1.25rem;
        }

        .card-features-section {
          flex: 1;
          margin-bottom: 1.5rem;
        }

        .features-header-title {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #9CA3AF;
          margin-bottom: 0.75rem;
        }

        .card-features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .card-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: #374151;
          line-height: 1.45;
        }

        .feature-check-icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #E8F5E9;
          color: #2E7D32;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .card-plan-note {
          font-size: 0.78rem;
          color: #6B7280;
          background: #F9FAFB;
          border: 1px dashed #E5E7EB;
          padding: 0.6rem 0.8rem;
          border-radius: 8px;
          margin-bottom: 1.25rem;
          line-height: 1.4;
        }

        .card-action {
          margin-top: auto;
        }

        .card-cta-btn {
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.8rem 1.25rem;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s, border-color 0.2s;
        }

        .card-cta-btn svg {
          color: #25D366;
        }

        .btn-featured {
          background: linear-gradient(135deg, #2196F3, #1565C0);
          color: #FFFFFF;
          border: none;
          box-shadow: 0 4px 14px rgba(33, 150, 243, 0.3);
        }

        .btn-featured svg {
          color: #FFFFFF;
        }

        .btn-featured:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(33, 150, 243, 0.45);
        }

        .btn-standard {
          background: #F8FAFC;
          color: #1E2328;
          border: 1px solid #E2E8F0;
        }

        .btn-standard:hover {
          transform: translateY(-2px);
          background: #FFFFFF;
          border-color: #2196F3;
          color: #1976D2;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        /* Creative Design Cards */
        .creative-services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 640px) {
          .creative-services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .creative-services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .creative-card {
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 18px;
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
          transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
        }

        .creative-card:hover {
          transform: translateY(-3px);
          border-color: #90CAF9;
          box-shadow: 0 10px 24px rgba(33, 150, 243, 0.08);
        }

        .creative-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.2rem;
        }

        .creative-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #E3F2FD;
          color: #1976D2;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .creative-quotation-badge {
          display: inline-flex;
          padding: 0.3rem 0.75rem;
          border-radius: 9999px;
          background: #F3F4F6;
          border: 1px solid #E5E7EB;
          font-size: 0.72rem;
          font-weight: 700;
          color: #4B5563;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .creative-service-title {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 700;
          color: #0B0F19;
          letter-spacing: -0.01em;
          margin-bottom: 0.5rem;
        }

        .creative-service-desc {
          font-size: 0.88rem;
          color: #6B7280;
          line-height: 1.55;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .creative-card-action {
          margin-top: auto;
        }

        .creative-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 0.75rem 1.15rem;
          border-radius: 10px;
          background: #FAFAFA;
          border: 1px solid #E5E7EB;
          color: #1E2328;
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }

        .creative-cta-btn:hover {
          background: #2196F3;
          border-color: #2196F3;
          color: #FFFFFF;
        }

        /* Note Banner */
        .category-note-banner {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: #F0F7FF;
          border: 1px solid #BBDEFB;
          border-radius: 14px;
          padding: 1rem 1.25rem;
          margin-top: 2rem;
        }

        .note-icon {
          color: #1976D2;
          margin-top: 2px;
          flex-shrink: 0;
        }

        .note-text {
          font-size: 0.85rem;
          color: #1E3A8A;
          line-height: 1.5;
        }

        @media (max-width: 639px) {
          .pricing-nav-tabs {
            border-radius: 16px;
            padding: 4px;
          }
          .pricing-tab-btn {
            font-size: 0.82rem;
            padding: 0.55rem 0.95rem;
          }
          .pricing-plan-card {
            padding: 1.75rem 1.25rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
