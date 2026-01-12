import { FaReact, FaNodeJs } from "react-icons/fa";

function Home() {
  const handleCVClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const password = prompt(
      "Este CV é exclusivo para recrutadores.\n\n" +
      "Digite a senha de 4 dígitos para acessar:\n\n" +
      "(Solicite a senha via WhatsApp, Email ou LinkedIn)"
    );
    
    if (password === "1723") {
      window.open("/certificates/cv-adriano-rocha.pdf", "_blank");
    } else if (password) {
      alert(
        "Senha incorreta.\n\n" +
        "Para solicitar a senha, entre em contato via:\n" +
        "• WhatsApp: (11) 922145103\n" +
        "• Email: adrianorocha.dev@gmail.com\n" +
        "• LinkedIn: /in/adriano-rocha-464044305"
      );
    }
  };

  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 py-16 lg:py-24 max-w-4xl mx-auto gap-8 lg:gap-0"
    >
      <div 
        className="flex-1 text-center lg:text-left order-2 lg:order-1"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h1 
          className="text-3xl sm:text-4xl font-bold mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Olá, Sou <span className="text-gray-300">Adriano Rocha</span>
        </h1>
        <p 
          className="text-emerald-400 text-lg sm:text-xl mb-2"
          data-aos="fade-up"
          data-aos-delay="400"  
        >
          Analista e Desenvolvedor de Sistemas para Web.
        </p>
        <p 
          className="text-gray-100 mb-8 max-w-md mx-auto lg:mx-0"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <strong>
            Desenvolvimento que resolve problemas e garante o crescimento do seu
            negócio. Eu planejo, crio e entrego sistemas e sites completos que
            funcionam perfeitamente do conceito à implementação final. Sua ideia
            ganha vida com uma base técnica robusta, segura e fácil de usar.
          </strong>
        </p>

        <div 
          className="mt-8 lg:mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <a
            href="https://wa.me/5511922145103"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-400 hover:bg-emerald-600 text-gray-900 px-6 sm:px-8 py-3 rounded-full font-semibold transition-colors inline-block text-center w-full sm:w-auto"
          >
            Fale Comigo Agora
          </a>
          <a
            href="/certificates/cv-adriano-rocha.pdf"
            onClick={handleCVClick}
            className="bg-gray-900 hover:bg-gray-500 text-white border border-gray-600 px-6 sm:px-8 py-3 rounded-full font-medium transition-colors inline-block text-center w-full sm:w-auto"
          >
            CV 
          </a>
        </div>
      </div>

      <div 
        className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div className="relative">
          <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg border-4 border-emerald-400">
            <img
              src="/images/me.jpeg"
              alt="Adriano Rocha"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div 
            className="absolute top-4 sm:top-6 lg:top-8 left-2 sm:left-3 lg:left-4 bg-gray-800 border-2 border-cyan-400 p-2 rounded-full shadow-lg shadow-cyan-400/50 hover:shadow-cyan-400/80 hover:scale-110 hover:bg-cyan-400/10 transition-all duration-300 cursor-pointer"
            data-aos="fade-down-right"
            data-aos-delay="1000"
          >
            <FaReact className="text-cyan-400 text-base sm:text-lg" />
          </div>

          <div 
            className="absolute bottom-4 sm:bottom-6 lg:bottom-8 right-2 sm:right-3 lg:right-4 bg-gray-800 border-2 border-emerald-400 p-2 rounded-full shadow-lg shadow-emerald-400/50 hover:shadow-emerald-400/80 hover:scale-110 hover:bg-emerald-400/10 transition-all duration-300 cursor-pointer"
            data-aos="fade-up-left"
            data-aos-delay="1200"
          >
            <FaNodeJs className="text-emerald-400 text-base sm:text-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;