import { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Block body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Sticky Header */}
      <AnimatePresence>
        {isScrolled && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-md"
          >
            <nav className="w-full py-3 px-4 md:px-8 relative">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Instagram Left */}
                <a
                  href="https://www.instagram.com/biovida.estetica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                </a>

                {/* Brand Name Center */}
                <div className="text-center flex-1 px-2">
                  <p className="text-xs md:text-sm font-semibold text-primary tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
                    ADRIANA MELLO
                  </p>
                  <p className="text-[10px] md:text-xs text-foreground/70 tracking-wider">
                    Biomédica | Saúde Integrativa
                  </p>
                </div>

                {/* Menu Button Right */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Menu"
                >
                  {isMenuOpen ? (
                    <X className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                  ) : (
                    <Menu className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                  )}
                </button>
              </div>

              {/* Floating Menu Dropdown */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-4 md:right-8 mt-2 bg-card rounded-xl shadow-lg overflow-hidden max-w-xs z-50"
                  >
                    <div className="flex flex-col p-3 gap-2">
                      {navLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-foreground/80 hover:text-primary font-medium py-2 px-4 rounded-lg hover:bg-muted transition-all text-sm"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      <header id="inicio" className="min-h-[75vh] md:min-h-[85vh] flex flex-col bg-secondary">
      {/* Navigation Bar */}
      <nav className="w-full py-4 px-4 md:px-8 relative">
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

          {/* Menu Button - Both Mobile and Desktop */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-primary-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-primary-foreground" />
            )}
          </button>
        </div>

        {/* Floating Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full right-4 md:right-8 mt-2 bg-card rounded-xl shadow-lg overflow-hidden max-w-xs z-50"
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
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 md:py-8">
        <div className="section-container text-center">
          <motion.img
            src={logo}
            alt="Adriana Mello Biomédica - Saúde Integrativa"
            className="h-24 md:h-40 lg:h-52 mx-auto mb-3 md:mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Brand Name */}
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-semibold text-primary tracking-wider mb-1"
            style={{ fontFamily: "var(--font-heading)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ADRIANA MELLO
          </motion.h2>

          <motion.p
            className="text-sm md:text-lg lg:text-xl text-foreground/70 tracking-widest mb-5 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Biomédica | Saúde Integrativa
          </motion.p>

          <motion.h1
            className="text-xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-4 md:mb-6 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-heading)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Saúde Integrativa e Estética com foco na sua individualidade
          </motion.h1>

          <motion.p
            className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6 md:mb-10"
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
            className="inline-flex items-center gap-2 px-5 py-3 md:px-8 md:py-4 rounded-full font-medium transition-all duration-300 text-sm md:text-base bg-primary text-primary-foreground hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <WhatsAppIcon className="w-4 h-4 md:w-5 md:h-5" />
            Agendar Consulta
          </motion.a>
        </div>
      </div>
      </header>
    </>
  );
};

export default HeroSection;
