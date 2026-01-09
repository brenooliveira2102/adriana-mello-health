import { Instagram, MapPin, Clock, Mail, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import logo from "@/assets/logo.png";

const WHATSAPP_NUMBER = "5579996463124";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site da Adriana Mello Biomédica | Saúde Integrativa e gostaria de agendar uma consulta."
);

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Footer Content - 3 Column Layout */}
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Column 1 - Logo & Contacts */}
          <div className="text-center md:text-left">
            <img
              src={logo}
              alt="Adriana Mello Biomédica"
              className="h-20 mb-4 mx-auto md:mx-0 brightness-110"
            />
            <h3 className="text-lg font-semibold tracking-wider mb-4 uppercase">Contatos:</h3>
            
            <div className="space-y-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 justify-center md:justify-start hover:text-primary-foreground/80 transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>+55 79 99646-3124</span>
              </a>
              <a
                href="mailto:contato@adrianamello.com.br"
                className="flex items-center gap-3 justify-center md:justify-start hover:text-primary-foreground/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contato@adrianamello.com.br</span>
              </a>
            </div>

            <p className="text-primary-foreground/70 text-sm mt-4 max-w-xs mx-auto md:mx-0">
              Entre em contato conosco e agende sua consulta personalizada.
            </p>
          </div>

          {/* Column 2 - Address & Hours + Map */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold tracking-wider mb-4 uppercase">Endereço & Atendimento</h3>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-left">
                  <p>BioVida - Núcleos Diagnóstico</p>
                  <p className="text-primary-foreground/70 text-sm">Aracaju - SE</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Clock className="w-5 h-5" />
                <span>08:00 às 18:00 Horas</span>
              </div>
            </div>

            {/* Small Map */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.5101586204187!2d-37.0657113257847!3d-10.92478302202491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab3a25cc992b7%3A0x18d854e9c9af847f!2sBioVida%20-%20N%C3%BAcleos%20Diagn%C3%B3stico%20e%20Est%C3%A9tico!5e0!3m2!1spt-BR!2sbr!4v1767970413880!5m2!1spt-BR!2sbr"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização BioVida"
              />
            </div>
          </div>

          {/* Column 3 - Social Media */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold tracking-wider mb-4 uppercase">Redes Sociais</h3>
            
            <p className="text-accent font-medium italic mb-2">Não fique de fora!</p>
            <p className="text-primary-foreground/70 text-sm mb-6 max-w-xs mx-auto md:mx-0">
              Siga nas redes sociais e descubra dicas exclusivas de saúde e bem-estar!
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 hover:scale-110 transition-all"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="https://www.instagram.com/biovida.estetica/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 hover:scale-110 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="https://share.google/1IFQdPvsYN8evGGXU"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 hover:scale-110 transition-all"
                aria-label="Google Meu Negócio"
              >
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Adriana Mello Biomédica | Saúde Integrativa. 
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
