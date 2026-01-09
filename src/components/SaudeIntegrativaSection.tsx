import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Leaf, Sparkles, BookOpen } from "lucide-react";

const features = [
  {
    icon: Heart,
    text: "Entender a história pessoal, estilo de vida, ambiente e fatores genéticos de cada indivíduo",
  },
  {
    icon: Leaf,
    text: "Abordagens como acupuntura, fitoterapia, meditação, ioga e terapia nutricional",
  },
  {
    icon: Sparkles,
    text: "Promover a prevenção e estimular a cura da maneira mais natural possível",
  },
  {
    icon: BookOpen,
    text: "Educação do paciente para um papel ativo no próprio cuidado e bem-estar",
  },
];

const SaudeIntegrativaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="saude-integrativa"
      ref={ref}
      className="section-padding bg-background"
      aria-labelledby="saude-integrativa-heading"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 id="saude-integrativa-heading" className="heading-secondary text-primary mb-4">
            O que é Saúde Integrativa?
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-body">
              Na <strong className="text-foreground">Saúde Integrativa</strong> busca-se entender a história pessoal, 
              estilo de vida, ambiente e fatores genéticos de cada indivíduo para desenvolver um 
              plano de tratamento personalizado.
            </p>
            <p className="text-body">
              São consideradas diferentes abordagens terapêuticas, incluindo técnicas convencionais, 
              como medicamentos e cirurgias, bem como terapias complementares, como acupuntura, 
              fitoterapia, meditação, ioga, terapia nutricional e outras práticas.
            </p>
            <p className="text-body">
              O objetivo da saúde integrativa é promover a prevenção, estimular a cura da maneira 
              mais natural possível e melhorar a qualidade de vida dos pacientes.
            </p>
            <p className="text-body">
              Essa abordagem também enfatiza a educação do paciente, incentivando-o a assumir 
              um papel ativo no seu próprio cuidado e bem-estar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="card-service text-center"
              >
                <feature.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                <p className="text-sm text-muted-foreground">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SaudeIntegrativaSection;
