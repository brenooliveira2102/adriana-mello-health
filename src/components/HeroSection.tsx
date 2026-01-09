import { motion } from "framer-motion";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import logo from "@/assets/logo.png";

const WHATSAPP_NUMBER = "5579996463124";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site da Adriana Mello Biomédica | Saúde Integrativa e gostaria de agendar uma consulta."
);

const HeroSection = () => {
  return (
    <header className="min-h-[85vh] flex flex-col items-center justify-center bg-secondary px-4 py-8">
      <div className="section-container text-center">
        <motion.img
          src={logo}
          alt="Adriana Mello Biomédica - Saúde Integrativa"
          className="h-48 md:h-64 lg:h-80 mx-auto mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.h1
          className="heading-primary mb-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
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
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <WhatsAppIcon className="w-5 h-5" />
          Agendar Consulta
        </motion.a>
      </div>
    </header>
  );
};

export default HeroSection;
