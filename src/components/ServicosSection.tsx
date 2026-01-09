import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, Scale, Sparkles } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    icon: ClipboardList,
    title: "Consulta Avaliativa",
    description: "Necessária para conhecer seus hábitos de vida e desenvolver um plano personalizado",
  },
  {
    icon: Scale,
    title: "Gerenciamento de Peso",
    description: "Redução de peso ou medidas com saúde, focando no equilíbrio do seu organismo",
  },
  {
    icon: Sparkles,
    title: "Tratamentos Estéticos",
    description: "Realizados de acordo com a sua necessidade individual e objetivos específicos",
  },
];

const ServicosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="servicos"
      ref={ref}
      className="section-padding bg-background"
      aria-labelledby="servicos-heading"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 id="servicos-heading" className="heading-secondary text-primary mb-4">
            Alguns Serviços
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-xl md:text-2xl font-heading text-foreground max-w-2xl mx-auto">
            Temos o tratamento que se adequa à sua disfunção
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="card-service text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.article>
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
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 basis-[85%]">
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                    className="card-service text-center group h-full"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-10 h-10 text-accent" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </motion.article>
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

export default ServicosSection;
