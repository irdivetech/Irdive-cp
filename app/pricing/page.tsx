import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import PricingTabs from "@/components/pricing/PricingTabs";
import AdditionalServices from "@/components/pricing/AdditionalServices";
import PricingTerms from "@/components/pricing/PricingTerms";
import PricingFaq from "@/components/pricing/PricingFaq";
import PricingFinalCta from "@/components/pricing/PricingFinalCta";

export const metadata: Metadata = {
  title: "Pricing & Paket Layanan — IRDIVE",
  description:
    "Invest in Your Digital Growth. Rincian harga transparan dan paket layanan website development, maintenance, social media handling, dan creative design resmi IRDIVE.",
  keywords: [
    "pricing website",
    "harga jasa pembuatan website",
    "paket website company profile",
    "landing page murah",
    "website maintenance",
    "social media handling",
    "creative design",
    "IRDIVE",
    "Indonesia",
  ],
  authors: [{ name: "IRDIVE" }],
  openGraph: {
    title: "Pricing & Paket Layanan — IRDIVE",
    description:
      "Temukan solusi digital tepat untuk bisnis Anda. Harga transparan, paket fleksibel, dan layanan profesional untuk mendukung pertumbuhan bisnis.",
    type: "website",
    locale: "id_ID",
    siteName: "IRDIVE",
    url: "https://www.irdive.my.id/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing & Paket Layanan — IRDIVE",
    description:
      "Temukan solusi digital tepat untuk bisnis Anda. Harga transparan, paket fleksibel, dan layanan profesional.",
  },
  alternates: {
    canonical: "https://www.irdive.my.id/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PricingHero />
        <PricingTabs />
        <AdditionalServices />
        <PricingTerms />
        <PricingFaq />
        <PricingFinalCta />
      </main>
      <Footer />
    </>
  );
}
