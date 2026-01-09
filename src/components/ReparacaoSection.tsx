import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Atom, Activity, Shield, Zap } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const benefits = [
  { icon: Atom, title: "Equilíbrio Celular", text: "Restauração do funcionamento harmonioso das células" },
  { icon: Activity, title: "Saúde Metabólica", text: "Otimização dos processos metabólicos do organismo" },
  { icon: Shield, title: "Prevenção de Doenças", text: "Fortalecimento do sistema imunológico" },
  { icon: Zap, title: "Mais Disposição", text: "Aumento da energia e vitalidade diária" },
];

const ReparacaoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="section-padding bg-secondary"
      aria-labelledby="reparacao-heading"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 id="reparacao-heading" className="heading-secondary text-primary mb-4">
            Reparação de Deficiências de Micronutrientes e Minerais
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-body max-w-3xl mx-auto">
            A suplementação adequada de micronutrientes e minerais é essencial para o 
            funcionamento ideal do seu organismo, promovendo saúde e bem-estar em todos os níveis.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="card-service text-center bg-background"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">{benefit.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {benefits.map((benefit, index) => (
                <CarouselItem key={index} className="pl-2 basis-[85%]">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="card-service text-center bg-background h-full"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{benefit.text}</p>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ReparacaoSection;
