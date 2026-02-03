import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/neokayu-logo.png";
import CartModal from "./CartModal";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#heritage", label: "Our Heritage" },
    { href: "#services", label: "Services" },
    { href: "#products", label: "Products" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-sage/20">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img
              src={logo}
              alt="NeoKayu - New Age Ayurveda"
              className="h-14 md:h-16 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-herbal font-medium hover:text-gold transition-colors duration-300 text-sm tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side - Cart & CTA */}
          <div className="flex items-center gap-4">
            {/* Cart Dropdown */}
            <CartModal />


            {/* WhatsApp CTA - Desktop */}
            <a
              href="https://wa.me/918618676696"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-gold text-sm px-6 py-3"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp Us
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-herbal"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-sage/20 animate-fade-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-herbal font-medium hover:text-gold transition-colors duration-300 py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/918618676696"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-sm px-6 py-3 text-center mt-2"
              >
                <Phone className="w-4 h-4 mr-2 inline" />
                WhatsApp Us
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
