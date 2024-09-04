import About from "@/components/About";
import Header from "@/components/Header";
import Partner from "@/components/Partner";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 px-8">
      <section className="home-header">
        <Header />
      </section>
      <section id="about" className="home-about">
        <About />
      </section>
      <section id="services" className="home-services">
        <Services />
      </section>
      <section id="partners" className="home-partners">
        <Partner />
      </section>
      <section id="testimonials" className="home-testimonial">
        <Testimonial />
      </section>
    </main>
  );
}
