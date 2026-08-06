import { useState } from "react";

function Home() {
  const [showCVModal, setShowCVModal] = useState(false);

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 sm:px-8 py-16 lg:py-24"
    >
      {/* fundo: grid sutil + glow — preenche o espaço negativo em telas grandes */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute top-1/3 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-[3fr_2fr] items-center gap-10 lg:gap-16">
        {/* Coluna de texto */}
        <div
          className="text-center lg:text-left order-2 lg:order-1"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Adriano Rocha
          </h1>
          <p
            className="text-emerald-400 text-lg sm:text-xl mb-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Desenvolvedor Fullstack
          </p>
          <p
            className="text-gray-400 text-base sm:text-lg max-w-md mx-auto lg:mx-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Construo sistemas web e automatizo processos com código.
          </p>

          <div
            className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <a
              href="https://wa.me/5511922145103"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-400 hover:bg-emerald-300 text-gray-900 px-6 sm:px-8 py-3 rounded-full font-semibold transition-colors inline-block text-center w-full sm:w-auto"
            >
              Fale Comigo Agora
            </a>
            <button
              type="button"
              onClick={() => setShowCVModal(true)}
              className="bg-zinc-950 hover:bg-zinc-800 text-white border border-zinc-700 px-6 sm:px-8 py-3 rounded-full font-medium transition-colors inline-block text-center w-full sm:w-auto"
            >
              Solicitar CV
            </button>
          </div>
        </div>

        {/* Coluna da foto — sem badges/terminal flutuante, só a foto */}
        <div
          className="flex justify-center lg:justify-end order-1 lg:order-2"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg border-4 border-emerald-400">
            <img
              src="/images/my-foto-page.png"
              alt="Adriano Rocha"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {showCVModal && <CVRequestModal onClose={() => setShowCVModal(false)} />}
    </section>
  );
}

// Modal honesto: pede nome + e-mail e libera o download na hora
function CVRequestModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    // TODO: integrar com um endpoint real (Formspree, EmailJS, API route)
    // para registrar o lead antes/depois do download.
    console.log("Solicitação de CV:", { name, email });

    const link = document.createElement("a");
    link.href = "/certificates/adriano_rochadev.docx";
    link.download = "adriano_rochadev.docx";
    link.click();

    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {!submitted ? (
          <>
            <h3 className="text-lg font-semibold text-white mb-1">
              Solicitar CV
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Deixe seu nome e e-mail para receber o currículo.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-gray-400 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-400"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-400"
                  placeholder="voce@empresa.com"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 border border-zinc-700 text-gray-300 rounded-full py-2 text-sm hover:bg-zinc-900 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-emerald-400 hover:bg-emerald-300 text-gray-900 font-semibold rounded-full py-2 text-sm transition-colors"
                >
                  Baixar CV
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-4">
            <p className="text-emerald-400 font-semibold mb-2">
              Download iniciado ✅
            </p>
            <p className="text-sm text-gray-400 mb-6">
              Qualquer dúvida, me chama no WhatsApp ou e-mail.
            </p>
            <button
              onClick={onClose}
              className="w-full bg-emerald-400 hover:bg-emerald-300 text-gray-900 font-semibold rounded-full py-2 text-sm transition-colors"
            >
              Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;