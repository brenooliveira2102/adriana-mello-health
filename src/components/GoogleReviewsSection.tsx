import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    name: "Carlos Francisco",
    initial: "C",
    rating: 5,
    time: "um ano atrás",
    text: "A equipe foi atenciosa e profissional, Fiquei muito satisfeito com o atendimento e os serviços prestados. Recomendo a clínica para quem busca qualidade em diagnósticos e tratamentos estéticos.",
  },
  {
    name: "Istela Gomes",
    initial: "I",
    rating: 5,
    time: "um ano atrás",
    text: "Atendimento maravilhoso, de pessoas humanas e de muita responsabilidade. Super indico a todos que desejam realizar exames e consultas.",
  },
  {
    name: "Elania Silva",
    initial: "E",
    rating: 5,
    time: "Editado um ano atrás",
    text: "Amei o atendimento! Todos bem atenciosos, e um lugar bastante acolhedor.",
  },
  {
    name: "Valéria Rodrigues",
    initial: "V",
    rating: 5,
    time: "um ano atrás",
    text: "Super recomendo, ótimo atendimento e a confiabilidade nem si fala. Fui muito bem atendida.",
  },
  {
    name: "Maria Clara",
    initial: "M",
    rating: 5,
    time: "um ano atrás",
    text: "Lugar aconchegante, recepção excelente e sem contar com a educação de todos no local. Experiência excepcional. 🥰",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"
          }`}
        />
      ))}
    </div>
  );
};

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
  <div className="bg-card rounded-xl p-6 shadow-md h-full flex flex-col">
    <div className="flex items-start gap-3 mb-3">
      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-primary-foreground font-semibold">{review.initial}</span>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-foreground truncate">{review.name}</h4>
        <p className="text-xs text-muted-foreground">1 avaliação</p>
      </div>
    </div>
    <div className="flex items-center gap-2 mb-3">
      <StarRating rating={review.rating} />
      <span className="text-xs text-muted-foreground">{review.time}</span>
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{review.text}</p>
  </div>
);

const GoogleReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="section-padding bg-secondary"
      aria-labelledby="reviews-heading"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 id="reviews-heading" className="heading-secondary text-primary mb-4">
            Avaliações no Google
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl font-bold text-foreground">4,6</span>
            <div className="flex flex-col items-start">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < 4 ? "fill-yellow-400 text-yellow-400" : i === 4 ? "fill-yellow-400/60 text-yellow-400" : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">23 avaliações</span>
            </div>
          </div>

          <a
            href="https://share.google/1IFQdPvsYN8evGGXU"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
          >
            Ver todas no Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Carousel for all screen sizes */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="pl-4 basis-[90%] md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="h-full"
                >
                  <ReviewCard review={review} />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-6">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
