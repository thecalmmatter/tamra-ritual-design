
import Hero from "@/components/Hero";
import WhyCopper from "@/components/WhyCopper";
import OurCraft from "@/components/OurCraft";
import ProductCollection from "@/components/ProductCollection";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyCopper />
      <OurCraft />
      <ProductCollection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
