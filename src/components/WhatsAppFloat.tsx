import { motion } from "framer-motion";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WHATSAPP_NUMBER = "5579996463124";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site da Adriana Mello Biomédica | Saúde Integrativa e gostaria de agendar uma consulta."
);

const WhatsAppFloat = () => {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Agendar consulta via WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsAppIcon className="w-7 h-7" />
    </motion.a>
  );
};

export default WhatsAppFloat;
