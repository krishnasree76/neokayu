import { ArrowRight, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Ayurvedic herbs and mortar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/80 to-cream/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-sage/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl animate-float delay-300" />

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage/20 rounded-full mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-gold rounded-full" />
            <span className="text-herbal text-sm font-medium tracking-wide">
              5 Generations of Ayurvedic Excellence
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-herbal leading-tight mb-6 animate-fade-up delay-100">
            Rooted in{" "}
            <span className="text-gold">5 Generations</span> of Ayurvedic Wisdom
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-herbal-light mb-8 animate-fade-up delay-200 max-w-2xl">
            <span className="text-gold font-medium">Pure. Traditional. Scientifically Processed.</span>
            <br />
            Discover authentic Ayurvedic formulations crafted with ancestral knowledge 
            and modern scientific precision.
          </p>

          {/* Gold Divider */}
          <div className="gold-divider-left mb-8 animate-fade-up delay-300" />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-400">
            <a
              href="#products"
              className="btn-gold group"
            >
              Explore Products
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/918618676696"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-herbal group"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-sage/30 animate-fade-up delay-500">
            <div className="flex flex-wrap gap-8 items-center">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-sage/30 flex items-center justify-center">
                  <span className="text-herbal font-serif text-lg">5</span>
                </div>
                <div>
                  <p className="text-herbal font-medium text-sm">Generations</p>
                  <p className="text-herbal-light text-xs">of Heritage</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-sage/30 flex items-center justify-center">
                  <span className="text-herbal font-serif text-lg">100%</span>
                </div>
                <div>
                  <p className="text-herbal font-medium text-sm">Natural</p>
                  <p className="text-herbal-light text-xs">Ingredients</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-sage/30 flex items-center justify-center">
                  <span className="text-herbal font-serif text-lg">GMP</span>
                </div>
                <div>
                  <p className="text-herbal font-medium text-sm">Certified</p>
                  <p className="text-herbal-light text-xs">Quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
