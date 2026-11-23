import { CONTACT_INFO } from "./content";

// ─────────────────────────────────────────────────────────────
// IRDIVE — Pricing Data Layer
// Single source of truth for all pricing plans, services, add-ons,
// FAQs, and terms. Edit data here; never hardcode in JSX.
// ─────────────────────────────────────────────────────────────

export interface PricingPlan {
  id: string;
  name: string;
  pricePrefix?: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  badge?: string;
  ctaText?: string;
  waCustomMessage?: string;
  timeline?: string;
  note?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  tagline: string;
  plans?: PricingPlan[];
  note?: string;
}

export interface StandaloneService {
  id: string;
  name: string;
  description: string;
  priceLabel: string;
  iconName: "palette" | "image" | "video" | "sparkles" | "pen-tool";
}

export interface AdditionalService {
  id: string;
  name: string;
  description: string;
  badge: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PricingTerm {
  number: string;
  title: string;
  description: string;
}

// ── Hero Section Content ──────────────────────────────────────
export const PRICING_HERO = {
  badge: "Transparent & Flexible Pricing",
  heading: "Invest in Your Digital Growth.",
  description:
    "Find the right digital solutions for your business. Transparent pricing, flexible packages, and professional services to help your business grow.",
  ctaExplore: "Explore Our Services",
  ctaDiscuss: "Discuss Your Project",
};

// ── Categories & Pricing Packages ─────────────────────────────
export const PRICING_CATEGORIES: ServiceCategory[] = [
  {
    id: "website-development",
    name: "Website Development",
    tagline: "Website berkecepatan tinggi, profesional, dan dirancang khusus untuk pertumbuhan bisnis Anda.",
    note: "* Harga yang tercantum merupakan harga awal dan dapat berubah berdasarkan kompleksitas, fitur, serta kebutuhan spesifik project.",
    plans: [
      {
        id: "landing-page",
        name: "Landing Page",
        pricePrefix: "Mulai",
        price: "Rp1.500.000",
        period: "",
        timeline: "Estimasi 5–10 hari kerja",
        description: "Website satu halaman yang dirancang terfokus untuk konversi leads dan promosi produk atau kampanye.",
        features: [
          "One-page website",
          "Responsive design",
          "WhatsApp integration",
          "Contact form",
          "Basic SEO",
          "Estimasi 5–10 hari kerja",
        ],
        popular: false,
        ctaText: "Pilih Paket Ini",
        waCustomMessage: "Halo IRDIVE! Saya tertarik dengan paket Landing Page (Mulai Rp1.500.000). Boleh diskusi lebih lanjut?",
      },
      {
        id: "company-profile",
        name: "Company Profile",
        pricePrefix: "Mulai",
        price: "Rp3.500.000",
        period: "",
        timeline: "Estimasi 1–3 minggu",
        badge: "Most Popular",
        description: "Solusi representasi bisnis profesional untuk meningkatkan kredibilitas dan kepercayaan calon mitra.",
        features: [
          "Hingga 5 halaman standar",
          "Company profile",
          "Services information",
          "Gallery and contact",
          "Responsive design",
          "Basic SEO",
          "Estimasi 1–3 minggu",
        ],
        popular: true,
        ctaText: "Pilih Paket Ini",
        waCustomMessage: "Halo IRDIVE! Saya tertarik dengan paket Company Profile (Mulai Rp3.500.000). Boleh diskusi lebih lanjut?",
      },
      {
        id: "product-catalog",
        name: "Product Catalog",
        pricePrefix: "Mulai",
        price: "Rp4.500.000",
        period: "",
        timeline: "Estimasi 2–4 minggu",
        description: "Showcase koleksi produk lengkap dan terstruktur dengan kemudahan pemesanan langsung ke WhatsApp.",
        features: [
          "Product catalog",
          "Product categories",
          "Product details",
          "Admin dashboard",
          "WhatsApp ordering",
          "Estimasi 2–4 minggu",
        ],
        popular: false,
        ctaText: "Pilih Paket Ini",
        waCustomMessage: "Halo IRDIVE! Saya tertarik dengan paket Product Catalog (Mulai Rp4.500.000). Boleh diskusi lebih lanjut?",
      },
      {
        id: "blog-news-portal",
        name: "Blog / News Portal",
        pricePrefix: "Mulai",
        price: "Rp4.500.000",
        period: "",
        timeline: "Estimasi 2–4 minggu",
        description: "Media publikasi artikel dan informasi dengan sistem manajemen konten yang cepat dan mudah dikelola.",
        features: [
          "Article management",
          "News categories",
          "Article details",
          "Admin dashboard",
          "Responsive design",
        ],
        popular: false,
        ctaText: "Pilih Paket Ini",
        waCustomMessage: "Halo IRDIVE! Saya tertarik dengan paket Blog / News Portal (Mulai Rp4.500.000). Boleh diskusi lebih lanjut?",
      },
      {
        id: "e-commerce",
        name: "E-Commerce",
        pricePrefix: "Mulai",
        price: "Rp8.000.000",
        period: "",
        timeline: "Estimasi 4–8 minggu",
        description: "Toko online lengkap dengan katalog terintegrasi, keranjang belanja, dan manajemen pemesanan efisien.",
        features: [
          "Product catalog",
          "Shopping cart",
          "Checkout and order management",
          "Admin dashboard",
          "Product management",
          "Estimasi 4–8 minggu",
        ],
        popular: false,
        ctaText: "Pilih Paket Ini",
        waCustomMessage: "Halo IRDIVE! Saya tertarik dengan paket E-Commerce (Mulai Rp8.000.000). Boleh diskusi lebih lanjut?",
      },
      {
        id: "custom-web-application",
        name: "Custom Web Application",
        pricePrefix: "Mulai",
        price: "Rp12.000.000",
        period: "",
        timeline: "Sesuai scope project",
        description: "Sistem aplikasi web spesifik sesuai proses bisnis unik Anda dengan arsitektur scalable dan integrasi API.",
        features: [
          "Custom system development",
          "Authentication and user roles",
          "Dashboard and data management",
          "Business workflow",
          "Reports and analytics",
          "API integration based on project scope",
          "Final pricing through consultation",
        ],
        note: "Penentuan harga final melalui konsultasi scope.",
        popular: false,
        ctaText: "Konsultasi Project",
        waCustomMessage: "Halo IRDIVE! Saya tertarik dengan pengembangan Custom Web Application (Mulai Rp12.000.000). Boleh jadwalkan diskusi scope?",
      },
    ],
  },
  {
    id: "website-maintenance",
    name: "Website Maintenance",
    tagline: "Perawatan rutin agar website selalu aman, cepat, ter-backup berkala, dan performanya tetap optimal.",
    note: "* Bug pada pekerjaan awal ditangani berdasarkan ketentuan garansi tersendiri. Maintenance tidak otomatis mencakup pengembangan fitur baru.",
    plans: [
      {
        id: "maint-lite",
        name: "Lite",
        price: "Rp150.000",
        period: "/bulan",
        description: "Monitoring dasar dan backup berkala untuk memastikan website Anda tetap aktif tanpa kendala.",
        features: [
          "Basic website monitoring",
          "Monthly backup",
          "Basic health check",
        ],
        popular: false,
        ctaText: "Pilih Paket Lite",
        waCustomMessage: "Halo IRDIVE! Saya ingin berlangganan Website Maintenance paket Lite (Rp150.000/bulan).",
      },
      {
        id: "maint-care",
        name: "Care",
        price: "Rp350.000",
        period: "/bulan",
        badge: "Most Popular",
        description: "Perawatan komprehensif mingguan termasuk pembaruan keamanan dan bantuan pembaruan konten minor.",
        features: [
          "Weekly backup",
          "Security updates",
          "Minor content changes up to 1 hour/month",
        ],
        popular: true,
        ctaText: "Pilih Paket Care",
        waCustomMessage: "Halo IRDIVE! Saya ingin berlangganan Website Maintenance paket Care (Rp350.000/bulan).",
      },
      {
        id: "maint-priority",
        name: "Priority",
        price: "Rp750.000",
        period: "/bulan",
        description: "Dukungan operasional prioritas tinggi dan kuota pembaruan konten lebih leluasa untuk bisnis aktif.",
        features: [
          "All Care features",
          "Minor changes up to 3 hours/month",
          "Priority support",
        ],
        popular: false,
        ctaText: "Pilih Paket Priority",
        waCustomMessage: "Halo IRDIVE! Saya ingin berlangganan Website Maintenance paket Priority (Rp750.000/bulan).",
      },
    ],
  },
  {
    id: "social-media",
    name: "Social Media Handling",
    tagline: "Strategi visual dan konten konsisten untuk membangun interaksi dan citra brand di media sosial.",
    note: "* Harga dasar menggunakan asumsi untuk 1 (satu) akun media sosial. Kebutuhan multi-akun atau penambahan volume konten dapat dikonsultasikan.",
    plans: [
      {
        id: "soc-starter",
        name: "Content Starter",
        price: "Rp1.500.000",
        period: "/bulan",
        description: "Pondasi visual rapi untuk memulai kehadiran aktif dan terstruktur di platform media sosial Anda.",
        features: [
          "8 feed designs",
          "Caption writing",
          "Content planning",
        ],
        popular: false,
        ctaText: "Pilih Content Starter",
        waCustomMessage: "Halo IRDIVE! Saya tertarik dengan paket Social Media Content Starter (Rp1.500.000/bulan).",
      },
      {
        id: "soc-growth",
        name: "Social Growth",
        price: "Rp3.000.000",
        period: "/bulan",
        badge: "Most Popular",
        description: "Peningkatan keterlibatan audiens dengan perpaduan desain feed profesional dan konten video pendek interaktif.",
        features: [
          "12 contents",
          "Up to 4 short videos using client-provided footage",
          "Caption writing",
          "Content planning",
        ],
        popular: true,
        ctaText: "Pilih Social Growth",
        waCustomMessage: "Halo IRDIVE! Saya tertarik dengan paket Social Growth (Rp3.000.000/bulan).",
      },
      {
        id: "soc-management",
        name: "Social Management",
        price: "Rp4.500.000",
        period: "/bulan",
        description: "Pengelolaan menyeluruh mulai dari perencanaan, eksekusi konten, penjadwalan, hingga laporan evaluasi bulanan.",
        features: [
          "12–16 contents",
          "Content scheduling",
          "Basic audience interaction",
          "Monthly performance report",
        ],
        popular: false,
        ctaText: "Pilih Social Management",
        waCustomMessage: "Halo IRDIVE! Saya tertarik dengan paket Social Management (Rp4.500.000/bulan).",
      },
    ],
  },
  {
    id: "creative-design",
    name: "Creative Design",
    tagline: "Layanan kebutuhan desain satuan dan materi kreatif untuk memperkuat komunikasi visual brand Anda.",
    note: "* Kebutuhan kreatif di luar daftar dapat didiskusikan langsung untuk penyesuaian format dan ruang lingkup pekerjaan.",
  },
];

// ── Creative Design (Layanan Satuan) ─────────────────────────
export const CREATIVE_DESIGN_SERVICES: StandaloneService[] = [
  {
    id: "graphic-design",
    name: "Graphic Design",
    description: "Desain visual grafis promosi, banner, flyer, poster, dan materi pemasaran cetak maupun digital yang memikat.",
    priceLabel: "Custom Quotation",
    iconName: "palette",
  },
  {
    id: "social-media-design",
    name: "Social Media Design",
    description: "Desain konten media sosial kustom, visual feed terarah, carousel infografis, dan aset story beresolusi tinggi.",
    priceLabel: "Custom Quotation",
    iconName: "image",
  },
  {
    id: "video-editing",
    name: "Video Editing",
    description: "Editing video reels, TikTok, YouTube shorts, dan materi promosi dinamis dari footage rekaman bisnis Anda.",
    priceLabel: "Custom Quotation",
    iconName: "video",
  },
  {
    id: "branding-materials",
    name: "Branding Materials",
    description: "Pengembangan identitas visual, logo, company deck, kartu nama, invoice digital, hingga panduan brand.",
    priceLabel: "Custom Quotation",
    iconName: "pen-tool",
  },
  {
    id: "creative-content-production",
    name: "Creative Content Production",
    description: "Produksi materi kreatif tematik dan visual campaign menyeluruh untuk peluncuran produk atau momentum bisnis.",
    priceLabel: "Custom Quotation",
    iconName: "sparkles",
  },
];

// ── Additional Services ───────────────────────────────────────
export const ADDITIONAL_SERVICES: AdditionalService[] = [
  {
    id: "domain-registration",
    name: "Domain Registration",
    description: "Pendaftaran dan integrasi domain (.com, .id, .co.id, dll) resmi untuk identitas website Anda.",
    badge: "Custom Quote",
  },
  {
    id: "web-hosting",
    name: "Web Hosting & Cloud Setup",
    description: "Penyediaan infrastruktur cloud hosting cepat, stabil, dan aman yang siap menangani traffic bisnis Anda.",
    badge: "Custom Quote",
  },
  {
    id: "seo-optimization",
    name: "SEO Optimization",
    description: "Optimasi struktur teknis, metadata on-page, dan kecepatan website agar mudah ditemukan di mesin pencari.",
    badge: "Custom Quote",
  },
  {
    id: "meta-ads-setup",
    name: "Meta Ads Setup",
    description: "Konfigurasi Meta Pixel, katalog iklan, dan setup kampanye periklanan Instagram & Facebook Ads.",
    badge: "Custom Quote",
  },
  {
    id: "digital-ads-management",
    name: "Digital Advertising Management",
    description: "Pengelolaan dan optimasi berkelanjutan kampanye iklan digital untuk mendatangkan traffic dan leads berkualitas.",
    badge: "Custom Quote",
  },
  {
    id: "feature-development",
    name: "Website Feature Development",
    description: "Pengembangan modul dan integrasi fitur tambahan di website yang sudah berjalan sesuai kebutuhan baru.",
    badge: "Custom Quote",
  },
  {
    id: "admin-handling",
    name: "Admin Handling",
    description: "Bantuan operasional pengelolaan data produk, update konten rutin, dan input artikel ke dashboard website.",
    badge: "Custom Quote",
  },
];

// ── Pricing Information / Terms ──────────────────────────────
export const PRICING_TERMS: PricingTerm[] = [
  {
    number: "01",
    title: "Harga Awal Transparan",
    description: "Harga yang tercantum merupakan harga awal. Harga final ditentukan berdasarkan scope pekerjaan, arsitektur sistem, dan kompleksitas fitur yang disepakati.",
  },
  {
    number: "02",
    title: "Scope Pekerjaan Jelas",
    description: "Setiap penawaran resmi memuat rincian fitur dan batas deliverables yang disepakati bersama sebelum tahap pengerjaan dimulai.",
  },
  {
    number: "03",
    title: "Ketentuan Revisi",
    description: "Revisi pengerjaan mengikuti ketentuan batas dan tahapan masing-masing project agar alur pengerjaan tetap tepat waktu dan terarah.",
  },
  {
    number: "04",
    title: "Domain, Hosting & Lisensi Pihak Ketiga",
    description: "Biaya pendaftaran domain, sewa server/hosting, serta lisensi API atau layanan pihak ketiga dapat dikenakan biaya tambahan bila tidak tercakup dalam paket.",
  },
  {
    number: "05",
    title: "Sistem Pembayaran DP",
    description: "Pengerjaan project dimulai setelah persetujuan penawaran resmi dan pembayaran Down Payment (DP) diterima.",
  },
  {
    number: "06",
    title: "Penambahan Fitur (Scope Expansion)",
    description: "Penambahan fitur di luar scope awal yang disepakati akan diajukan melalui persetujuan dan penawaran biaya adendum tambahan secara transparan.",
  },
  {
    number: "07",
    title: "Estimasi Waktu Pengerjaan",
    description: "Ketepatan estimasi waktu pengerjaan bergantung pada kelengkapan materi (konten, teks, gambar) serta kecepatan persetujuan feedback dari klien.",
  },
];

// ── FAQ Items ────────────────────────────────────────────────
export const PRICING_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Apakah harga masih bisa disesuaikan?",
    answer:
      "Ya. Harga yang tercantum merupakan estimasi awal. Kami dapat menyesuaikan ruang lingkup fitur, jumlah halaman, atau tahapan pengerjaan sesuai dengan prioritas dan alokasi anggaran bisnis Anda.",
  },
  {
    id: "faq-2",
    question: "Apakah tersedia pembayaran DP?",
    answer:
      "Ya, kami menerapkan sistem pembayaran bertahap. Project resmi dimulai setelah pembayaran Down Payment (DP) diselesaikan, dan pelunasan dilakukan setelah pekerjaan selesai sesuai kesepakatan.",
  },
  {
    id: "faq-3",
    question: "Apakah domain dan hosting sudah termasuk?",
    answer:
      "Domain dan hosting dapat kami bantu sediakan atau dikonfigurasikan sesuai kebutuhan project. Biaya sewa domain/server mengikuti ketentuan penyedia layanan terkait atau dapat diintegrasikan dalam penawaran khusus.",
  },
  {
    id: "faq-4",
    question: "Berapa lama proses pembuatan website?",
    answer:
      "Estimasi waktu bergantung pada jenis project: Landing Page umumnya selesai dalam 5–10 hari kerja, Company Profile membutuhkan 1–3 minggu, sedangkan Custom Web App atau E-Commerce membutuhkan 4–8 minggu setelah materi lengkap.",
  },
  {
    id: "faq-5",
    question: "Apakah tersedia layanan maintenance?",
    answer:
      "Ya, kami menyediakan paket Website Maintenance bulanan (Lite, Care, dan Priority) untuk memastikan performa, backup berkala, dan keamanan website Anda selalu terjaga dengan baik.",
  },
  {
    id: "faq-6",
    question: "Bagaimana jika membutuhkan fitur tambahan?",
    answer:
      "Fitur baru di luar ruang lingkup (scope) awal dapat ditambahkan kapan saja melalui kesepakatan dan penawaran biaya tambahan (adendum) yang disetujui bersama sebelum dikerjakan.",
  },
  {
    id: "faq-7",
    question: "Apakah bisa membuat website sesuai kebutuhan khusus?",
    answer:
      "Tentu saja. Kami spesialis dalam membangun Custom Web Application, dashboard internal, dan sistem digital khusus yang disesuaikan 100% dengan alur kerja dan keunikan operasional bisnis Anda.",
  },
];

// ── Final CTA Content ─────────────────────────────────────────
export const PRICING_FINAL_CTA = {
  badge: "Start Your Project",
  heading: "Have a Project in Mind?",
  description:
    "Let's discuss your ideas and find the right digital solution for your business.",
  buttonText: "Discuss Your Project",
};

// ── WhatsApp Link Helper ──────────────────────────────────────
export function buildPricingWhatsAppUrl(customMessage?: string): string {
  const defaultMessage =
    "Halo IRDIVE! Saya ingin berdiskusi mengenai kebutuhan project dan penawaran layanan untuk bisnis saya.";
  const text = customMessage || defaultMessage;
  return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
}
