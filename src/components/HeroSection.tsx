import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import logo from "@/assets/logo.png";

const WHATSAPP_NUMBER = "5579996463124";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site da Adriana Mello Biomédica | Saúde Integrativa e gostaria de agendar uma consulta."
);

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Saúde Integrativa", href: "#saude-integrativa" },
  { label: "Serviços", href: "#servicos" },
  { label: "Estética", href: "#estetica" },
  { label: "Contato", href: "#contato" },
];

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header id="inicio" className="min-h-[85vh] flex flex-col bg-secondary">
      {/* Navigation Bar */}
      <nav className="w-full py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Instagram Left */}
          <a
            href="https://www.instagram.com/biovida.estetica/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-primary-foreground" />
          </a>

          {/* Menu Right - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors text-sm tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 bg-primary rounded-full flex items-center justify-center"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-primary-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-primary-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-card rounded-xl shadow-lg overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-foreground/80 hover:text-primary font-medium py-2 px-4 rounded-lg hover:bg-muted transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="section-container text-center">
          <motion.img
            src={logo}
            alt="Adriana Mello Biomédica - Saúde Integrativa"
            className="h-36 md:h-44 lg:h-52 mx-auto mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Brand Name */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary tracking-wider mb-1"
            style={{ fontFamily: "var(--font-heading)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ADRIANA MELLO
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-foreground/70 tracking-widest mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Biomédica | Saúde Integrativa
          </motion.p>

          <motion.h1
            className="heading-primary mb-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Saúde Integrativa e Estética com foco na sua individualidade
          </motion.h1>

          <motion.p
            className="text-body max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Tratamentos personalizados que cuidam do corpo, da mente e do equilíbrio celular
          </motion.p>

          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <WhatsAppIcon className="w-5 h-5" />
            Agendar Consulta
          </motion.a>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
