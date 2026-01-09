import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WHATSAPP_NUMBER = "5579996463124";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site da Adriana Mello Biomédica | Saúde Integrativa e gostaria de agendar uma consulta."
);

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contato"
      ref={ref}
      className="py-12 md:py-20 lg:py-28 bg-primary px-4"
      aria-labelledby="cta-heading"
    >
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="cta-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-primary-foreground mb-4 md:mb-6 max-w-2xl mx-auto leading-tight"
          >
            Cuide da sua saúde e da sua estética de forma integrada
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-primary-foreground/80 mb-6 md:mb-10 max-w-md mx-auto">
            Agende sua consulta e comece sua jornada de transformação hoje mesmo
          </p>
          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm md:text-base px-5 py-3 md:px-8 md:py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <WhatsAppIcon className="w-5 h-5" />
            Agendar pelo WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
