import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "adrianorocha.dev@gmail.com";

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(emailAddress);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } else {
      alert(
        `Seu navegador não suporta a cópia direta. Por favor, utilize o endereço: ${emailAddress}`
      );
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-8 max-w-4xl mx-auto"
    >
      <div className="text-center w-full">
        <h2 
          className="text-4xl font-bold mb-4"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          Entre em <span className="text-gray-300">Contato</span>
        </h2>
        
        <p 
          className="text-emerald-400 text-xl mb-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Vamos conversar sobre seu projeto
        </p>

        <p 
          className="text-gray-100 mb-10 max-w-md mx-auto italic"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Estou sempre aberto a novas oportunidades e colaborações. Utilize o
          canal que preferir.
        </p>

        {/* Container Principal de Ações */}
        <div 
          className="flex flex-col items-center gap-6"
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          {/* CTA Principal: WhatsApp */}
          <a
            href="https://wa.me/5511922145103"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-emerald-600/20 border-2 border-emerald-400 text-emerald-400 font-semibold px-8 py-4 rounded-full shadow-lg shadow-emerald-500/30 hover:bg-emerald-500 hover:text-gray-900 hover:shadow-emerald-400/60 hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg">Conversar no WhatsApp</span>
          </a>

          {/* Divisor Visual */}
          <div className="flex items-center gap-4 w-full max-w-xs my-2">
            <div className="h-[1px] bg-gray-700 flex-1"></div>
            <span className="text-xs text-gray-500 uppercase tracking-widest">ou acesse</span>
            <div className="h-[1px] bg-gray-700 flex-1"></div>
          </div>

          {/* Canais Secundários */}
          <div className="flex items-center justify-center gap-6">
            {/* GitHub */}
            <a
              href="https://github.com/adriano-rocha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="bg-gray-800 border-2 border-gray-400 p-4 rounded-full shadow-lg shadow-gray-400/30 hover:shadow-gray-400/70 hover:scale-110 hover:bg-gray-400/10 transition-all duration-300 cursor-pointer group"
            >
              <FaGithub className="text-gray-400 text-2xl group-hover:text-white transition-colors duration-300" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/adriano-rocha-464044305/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="bg-gray-800 border-2 border-blue-400 p-4 rounded-full shadow-lg shadow-blue-400/30 hover:shadow-blue-400/70 hover:scale-110 hover:bg-blue-400/10 transition-all duration-300 cursor-pointer group"
            >
              <FaLinkedin className="text-blue-400 text-2xl group-hover:text-blue-300 transition-colors duration-300" />
            </a>

            {/* Botão Email com Tooltip Ajustado */}
            <div className="relative">
              <button
                onClick={handleCopyEmail}
                title={copied ? "E-mail Copiado!" : "Copiar E-mail"}
                aria-label="Copiar E-mail"
                className="bg-gray-800 border-2 border-red-400 p-4 rounded-full shadow-lg shadow-red-400/30 hover:shadow-red-400/70 hover:scale-110 transition-all duration-300 cursor-pointer group"
              >
                <FaEnvelope className="text-red-400 text-2xl group-hover:text-red-300 transition-colors duration-300" />
              </button>

              {copied && (
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-emerald-400 border border-emerald-500/30 text-xs font-semibold rounded-md shadow-lg whitespace-nowrap animate-fade-in">
                  E-mail copiado!
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;