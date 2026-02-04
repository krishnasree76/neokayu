import { Leaf } from "lucide-react";
import logo from "../assets/neokayu-logo.png";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#heritage", label: "Our Heritage" },
    { href: "#services", label: "Services" },
    { href: "#products", label: "Products" },
    { href: "#contact", label: "Contact" },
  ];

  const productCategories = [
    "Balms & Oils",
    "Powders & Churnas",
    "Drops & Roll-Ons",
    "Baby Care",
    "Superfoods",
  ];

  return (
    <footer className="bg-herbal text-cream">
      {/* Main Footer */}
      <div className="section-padding pb-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <img
                src={logo}
                alt="NeoKayu"
                className="h-16 w-auto mb-6 opacity-95"

              />
              <p className="text-cream/70 mb-6 max-w-md leading-relaxed">
                NeoKayu brings you the authentic wisdom of Ayurveda, refined through 
                five generations and enhanced with modern scientific precision. 
                Every product tells a story of tradition, purity, and care.
              </p>
              <div className="flex items-center gap-2 text-gold">
                <Leaf className="w-5 h-5" />
                <span className="text-sm font-medium italic">
                  "Honoring Ancient Ayurvedic Wisdom with Modern Scientific Care"
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-serif text-cream mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-cream/70 hover:text-gold transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Categories */}
            <div>
              <h4 className="text-lg font-serif text-cream mb-6">Products</h4>
              <ul className="space-y-3">
                {productCategories.map((category, index) => (
                  <li key={index}>
                    <a
                      href="#products"
                      className="text-cream/70 hover:text-gold transition-colors duration-300 text-sm"
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
  <div className="container-custom py-6 px-5 sm:px-6 md:px-8">
    <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
      
      <p className="text-cream/50 text-sm">
        © {currentYear} Sri Padmanabha Life Sciences. All rights reserved.
      </p>

      <p className="text-cream/50 text-sm flex items-center gap-1">
        Made with 
        <span className="text-gold text-base">♥</span>
        by <span className="text-gold font-medium">StaffArc</span>
      </p>

    </div>
  </div>
</div>

    </footer>
  );
};

export default Footer;
