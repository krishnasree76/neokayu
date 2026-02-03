import { Leaf, Award, Heart, Shield } from "lucide-react";
import heritageImg from "@/assets/heritage.jpg";

const Heritage = () => {
  const values = [
    {
      icon: Leaf,
      title: "Pure Ingredients",
      description: "Sourced from pristine regions following traditional harvesting methods",
    },
    {
      icon: Award,
      title: "5 Generations",
      description: "Ancestral knowledge passed down through five generations of healers",
    },
    {
      icon: Heart,
      title: "Holistic Wellness",
      description: "Formulations that address mind, body, and spirit in harmony",
    },
    {
      icon: Shield,
      title: "Scientific Quality",
      description: "Modern testing and hygienic manufacturing without compromising tradition",
    },
  ];

  return (
    <section id="heritage" className="section-padding bg-cream texture-herbal">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-widest text-sm uppercase mb-4 block">
            Our Heritage
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-herbal mb-6">
            A Legacy of Healing
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={heritageImg}
                alt="Traditional Ayurvedic preparation"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-herbal/40 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-lg max-w-xs hidden md:block">
              <p className="text-gold font-serif text-3xl mb-2">Since 1920s</p>
              <p className="text-herbal-light text-sm">
                Five generations of dedicated Ayurvedic practitioners
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-serif text-herbal mb-6">
              The Story of Sri Padmanabha Life Sciences
            </h3>
            <div className="space-y-4 text-herbal-light leading-relaxed mb-8">
              <p>
                The roots of NeoKayu trace back to the early 1920s, when our great-great-grandfather 
                began his journey as a traditional Ayurvedic healer in the sacred lands of Karnataka. 
                His profound knowledge of herbs and healing was passed down through generations, 
                each adding their own understanding while preserving the essence of ancient wisdom.
              </p>
              <p>
                Today, under the guidance of <span className="text-herbal font-medium">Shri Satish Kumar Sir</span>, 
                Sri Padmanabha Life Sciences continues this legacy with a commitment to authenticity. 
                We combine time-tested formulations with modern scientific processing and rigorous 
                quality standards, ensuring that every product carries the healing power of five 
                generations.
              </p>
              <p>
                Our mission is simple: to bring the authentic benefits of Ayurveda to every home, 
                while honoring the traditions that have guided our family for over a century.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-sage/10 hover:bg-sage/20 transition-colors duration-300"
                >
                  <value.icon className="w-6 h-6 text-gold mb-3" />
                  <h4 className="text-herbal font-medium text-sm mb-1">{value.title}</h4>
                  <p className="text-herbal-light text-xs">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;
