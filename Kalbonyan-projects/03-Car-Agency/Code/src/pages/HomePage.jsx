import {
  Hero,
  Navbar,
  AboutSection,
  CarsSection,
  ServicesSection,
  TeslaSection,
  TestimonialsSection,
  Brands,
  Footer,
} from '../components';
import { CartCtxProvider } from '../context/cartCtx';

const HomePage = () => {
  return (
    <CartCtxProvider>
      <main className="relative">
        <Navbar />
        <Hero />
        <AboutSection />
        <ServicesSection />
        <CarsSection />
        <TeslaSection />
        <TestimonialsSection />
        <Brands />
        <Footer />
      </main>
    </CartCtxProvider>
  );
};
export default HomePage;
