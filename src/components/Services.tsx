import { 
  FlaskConical, 
  Factory, 
  Package, 
  Tag, 
  Sparkles, 
  ShieldCheck 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FlaskConical,
      title: "Traditional Formulations",
      description: "Authentic Ayurvedic recipes passed down through five generations, crafted with reverence for ancient healing wisdom.",
    },
    {
      icon: Factory,
      title: "Scientific Processing",
      description: "Modern extraction and processing techniques that preserve the potency of natural ingredients while ensuring purity.",
    },
    {
      icon: Package,
      title: "Contract Manufacturing",
      description: "Partner with us to bring your Ayurvedic vision to life with our GMP-certified manufacturing facilities.",
    },
    {
      icon: Tag,
      title: "Private Labeling",
      description: "Create your own branded Ayurvedic product line with our comprehensive private label solutions.",
    },
    {
      icon: Sparkles,
      title: "Premium Packaging",
      description: "Elegant, sustainable packaging that reflects the premium quality of traditional Ayurvedic products.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "Rigorous testing at every stage ensures our products meet the highest standards of safety and efficacy.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-herbal relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-widest text-sm uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-cream mb-6">
            Excellence in Every Step
          </h2>
          <div className="gold-divider" />
          <p className="mt-6 text-cream/80 max-w-2xl mx-auto">
            From traditional formulations to modern manufacturing, we offer comprehensive 
            Ayurvedic solutions with unwavering commitment to quality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-herbal-light/50 backdrop-blur-sm border border-cream/10 hover:border-gold/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-serif text-cream mb-3">{service.title}</h3>
              <p className="text-cream/70 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-gold text-gold font-medium hover:bg-gold hover:text-herbal transition-all duration-300"
          >
            Partner With Us
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
