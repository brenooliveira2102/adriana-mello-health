import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const disfuncoes = [
  "Estética Facial",
  "Estética Corporal",
  "Estética Integrativa",
  "Estética Ortomolecular",
];

const DisfuncoesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="section-padding bg-background"
      aria-labelledby="disfuncoes-heading"
    >
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 id="disfuncoes-heading" className="heading-secondary text-primary mb-4">
              Disfunções Estéticas
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8" />
            <p className="text-body mb-10">
              As disfunções estéticas são alterações de diversas causas presentes no corpo, 
              que precisam ser avaliadas de forma individualizada para um tratamento eficaz.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4 text-left"
          >
            {disfuncoes.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-secondary rounded-xl"
              >
                <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-success" />
                </div>
                <span className="font-medium text-foreground">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default DisfuncoesSection;
