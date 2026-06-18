import Faq from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowItWork from "@/components/howItWork";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div className="w-full">
      {/* <MainHeader/> */}
      <section id="home">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="how-it-works">
        <HowItWork />
      </section>
      <section id="faq">
        <Faq />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <Footer />
    </div>
  );
}
