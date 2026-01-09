import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const EsteticaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Estética Integrativa */}
          <motion.article
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-background rounded-2xl p-8 md:p-10"
            style={{ boxShadow: 'var(--shadow-card)' }}
            aria-labelledby="estetica-integrativa-heading"
          >
            <h2
              id="estetica-integrativa-heading"
              className="heading-secondary text-primary mb-6"
            >
              Estética Integrativa
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mb-6" />
            <p className="text-body">
              A <strong className="text-foreground">Estética Integrativa</strong> é a forma mais completa de tratar o paciente, 
              enxergando suas alterações estéticas sob um aspecto amplo, levando em consideração 
              o contexto emocional, mental, espiritual e físico.
            </p>
          </motion.article>

          {/* Estética Ortomolecular */}
          <motion.article
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background rounded-2xl p-8 md:p-10"
            style={{ boxShadow: 'var(--shadow-card)' }}
            aria-labelledby="estetica-ortomolecular-heading"
          >
            <h2
              id="estetica-ortomolecular-heading"
              className="heading-secondary text-primary mb-6"
            >
              Estética Ortomolecular
            </h2>
            <div className="w-16 h-1 bg-success rounded-full mb-6" />
            <p className="text-body">
              A <strong className="text-foreground">Estética Ortomolecular</strong> visa promover saúde e embelezamento 
              por meio do funcionamento harmonioso das células, tratando a beleza de dentro para fora.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default EsteticaSection;
