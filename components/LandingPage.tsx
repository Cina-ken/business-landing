import  Header  from "@/components/Header";
import Hero  from "@/components/Hero";
import Features  from "@/components/Features";
import About  from "@/components/About";
import Testimonials  from "@/components/Testimonials";
import Contact  from "@/components/Contact";
import Footer  from "@/components/Footer";


const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;