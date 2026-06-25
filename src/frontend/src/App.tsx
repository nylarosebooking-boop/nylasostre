import BioSection from "@/components/BioSection";
import ContactSection from "@/components/ContactSection";
import DiscographySection from "@/components/DiscographySection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import Layout from "@/components/Layout";
import NewsSection from "@/components/NewsSection";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <BioSection />
      <DiscographySection />
      <GallerySection />
      <NewsSection />
      <ContactSection />
    </Layout>
  );
}
