import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Facebook,
  Instagram
} from "lucide-react";

const Contact = () => {
  const businessHours = [
    { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 1:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-widest text-sm uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-herbal mb-6">
            Connect With Us
          </h2>
          <div className="gold-divider" />
          <p className="mt-6 text-herbal-light max-w-2xl mx-auto">
            We're here to answer your questions about our products, services, 
            or partnership opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Company Name */}
            <div>
              <h3 className="text-2xl font-serif text-herbal mb-2">
                Sri Padmanabha Life Sciences
              </h3>
              <p className="text-herbal-light">
                Premium Ayurvedic Products & Contract Manufacturing
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <a
                href="tel:+918618676696"
                className="flex items-center gap-4 p-4 rounded-xl bg-sage/10 hover:bg-sage/20 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-herbal-light text-sm">Phone</p>
                  <p className="text-herbal font-medium">+91 86186 76696</p>
                </div>
              </a>

              <a
                href="mailto:sripadmanabhalifesciences@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-sage/10 hover:bg-sage/20 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-herbal-light text-sm">Email</p>
                  <p className="text-herbal font-medium text-sm md:text-base break-all">
                    sripadmanabhalifesciences@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-sage/10">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-herbal-light text-sm">Address</p>
                  <p className="text-herbal font-medium">
                    Plot No. 20/2, Hoskote–Chintamani Rd,
                    <br />
                    Malimakanapura, Bengaluru,
                    <br />
                    Karnataka 562122
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-6 rounded-xl bg-sage/10">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-gold" />
                <h4 className="text-herbal font-medium">Business Hours</h4>
              </div>
              <div className="space-y-2">
                {businessHours.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-herbal-light">{item.day}</span>
                    <span className={`font-medium ${item.hours === "Closed" ? "text-destructive" : "text-herbal"}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-herbal font-medium mb-4">Follow Us</p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/NeoKayu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center hover:bg-gold hover:text-cream text-herbal transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/neokayu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center hover:bg-gold hover:text-cream text-herbal transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Map & WhatsApp CTA */}
          <div className="space-y-6">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-[300px] lg:h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3!2d77.8!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzAwLjAiTiA3N8KwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sri Padmanabha Life Sciences Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* WhatsApp CTA Card */}
            <div className="p-8 rounded-2xl bg-gradient-herbal text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gold/20 flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl font-serif text-cream mb-3">
                Quick Connect
              </h3>
              <p className="text-cream/80 mb-6">
                Have questions? Chat with us directly on WhatsApp for instant support.
              </p>
              <a
                href="https://wa.me/918618676696"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-herbal font-medium hover:bg-gold-light transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Start WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
