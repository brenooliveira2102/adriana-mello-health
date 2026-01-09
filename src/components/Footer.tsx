import { Instagram, MessageCircle, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const WHATSAPP_NUMBER = "5579996463124";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site da Adriana Mello Biomédica | Saúde Integrativa e gostaria de agendar uma consulta."
);

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Map Section */}
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.5101586204187!2d-37.0657113257847!3d-10.92478302202491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab3a25cc992b7%3A0x18d854e9c9af847f!2sBioVida%20-%20N%C3%BAcleos%20Diagn%C3%B3stico%20e%20Est%C3%A9tico!5e0!3m2!1spt-BR!2sbr!4v1767970413880!5m2!1spt-BR!2sbr"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização BioVida"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>

      {/* Footer Content */}
      <div className="section-container py-12">
        <div className="flex flex-col items-center text-center">
          <img
            src={logo}
            alt="Adriana Mello Biomédica"
            className="h-24 md:h-32 mb-6 brightness-110"
          />

          <p className="text-primary-foreground/80 max-w-md mb-8">
            Adriana Mello Biomédica | Saúde Integrativa — Tratamentos personalizados 
            que cuidam do corpo, da mente e do equilíbrio celular.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-8">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-success rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6 text-success-foreground" />
            </a>
            <a
              href="https://www.instagram.com/biovida.estetica/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-primary" />
            </a>
            <a
              href="https://share.google/1IFQdPvsYN8evGGXU"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Google Meu Negócio"
            >
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </a>
          </div>

          <div className="border-t border-primary-foreground/20 pt-6 w-full">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Adriana Mello Biomédica | Saúde Integrativa. 
              Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
