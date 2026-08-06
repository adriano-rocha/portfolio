import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaJs, FaGitAlt, FaDatabase, FaTimes } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Skills() {
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSlides, setLightboxSlides] = useState<{ src: string }[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const skills = [
    { name: "HTML/CSS", color: "orange", certificates: ["/certificates/html-css.png", "/certificates/html2.png"] },
    { name: "Javascript", color: "yellow", certificates: ["/certificates/js.png", "/certificates/js2.png"] },
    { name: "Typescript", color: "blue", certificates: ["/certificates/ts.png", "/certificates/typescript.png"] },
    { name: "React", color: "blue", certificates: ["/certificates/react1.png", "/certificates/react2.png"] },
    { name: "Node.js", color: "green", certificates: ["/certificates/node.png", "/certificates/node2.png", "/certificates/node3.png"] },
    { name: "Python", color: "yellow", certificates: ["/certificates/cert_python_santander.png", "/certificates/cert_python.png"] },
    { name: "Git", color: "orange", certificates: ["/certificates/git.png"] },
    { name: "Banco de Dados", color: "blue", certificates: ["/certificates/db.png", "/certificates/analise_dados.png"] },
    { name: "Inteligência Artificial (IA)", color: "blue", certificates: ["/certificates/claude.png", "/certificates/cert_ElementsIA.png", "/certificates/cert_IAGemini.png"] },
    { name: "Gestão de Tráfego Pago", color: "blue", certificates: ["/certificates/certificate-google-ads.png", "/certificates/cert_google-analitycs.png"] },
  ];

  // Classes estáticas por extenso — Tailwind consegue "ver" no build.
  // Diferente de `border-${cor}-400` montado em runtime, que some do CSS final.
  const getSkillStyles = (color: string) => {
    switch (color) {
      case "orange":
        return { border: "border-orange-400", text: "text-orange-400", hover: "hover:bg-orange-400/10" };
      case "yellow":
        return { border: "border-yellow-400", text: "text-yellow-400", hover: "hover:bg-yellow-400/10" };
      case "blue":
        return { border: "border-blue-400", text: "text-blue-400", hover: "hover:bg-blue-400/10" };
      case "green":
        return { border: "border-green-400", text: "text-green-400", hover: "hover:bg-green-400/10" };
      default:
        return { border: "border-gray-400", text: "text-gray-400", hover: "hover:bg-gray-400/10" };
    }
  };

  // Só imagens entram no lightbox; PDF abre em nova aba (a lib não renderiza PDF nativamente).
  const handleCertificateClick = (certificateUrl: string, allCertificates: string[]) => {
    if (certificateUrl.endsWith(".pdf")) {
      window.open(certificateUrl, "_blank");
      return;
    }
    const imageSlides = allCertificates.filter((c) => !c.endsWith(".pdf")).map((c) => ({ src: c }));
    const startIndex = imageSlides.findIndex((s) => s.src === certificateUrl);
    setLightboxSlides(imageSlides);
    setLightboxIndex(startIndex >= 0 ? startIndex : 0);
    setLightboxOpen(true);
  };

  return (
    <section id="skills" className="flex flex-col items-center justify-center px-8 max-w-4xl mx-auto py-16">
      {/* Card fechado — igual ao padrão original, no fluxo normal da página */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gray-800 hover:bg-emerald-400/20 border-2 border-emerald-400 px-12 py-6 rounded-lg transition-all duration-300 hover:scale-105 group"
        data-aos="flip-up"
        data-aos-duration="800"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-2">Skills</h2>
        <p className="text-gray-300 text-sm mb-4">Tecnologias de Mercado. Competência</p>
        <div className="flex justify-center gap-4">
          <FaHtml5 className="text-orange-500 text-2xl group-hover:scale-110 transition-transform" />
          <FaJs className="text-yellow-500 text-2xl group-hover:scale-110 transition-transform" />
          <SiPython className="text-blue-400 text-2xl group-hover:scale-110 transition-transform" />
          <FaReact className="text-blue-600 text-2xl group-hover:scale-110 transition-transform" />
          <FaNodeJs className="text-green-600 text-2xl group-hover:scale-110 transition-transform" />
          <FaDatabase className="text-blue-800 text-2xl group-hover:scale-110 transition-transform" />
          <FaGitAlt className="text-orange-400 text-2xl group-hover:scale-110 transition-transform" />
        </div>
        <p className="text-gray-500 text-sm mt-3 group-hover:opacity-100 transition-opacity">
          Clique para ver certificados
        </p>
      </button>

      {/* Modal/overlay por cima da página */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.25 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="bg-gray-900 border border-gray-700 rounded-lg w-full max-w-6xl my-8 p-6 sm:p-8"
            >
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-bold text-emerald-400">Skills</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {skills.map((skill, skillIndex) => {
                  const styles = getSkillStyles(skill.color);
                  return (
                    <div
                      key={skillIndex}
                      className={`bg-gray-800 border-2 ${styles.border} rounded-lg overflow-hidden ${styles.hover} transition-all duration-300 hover:scale-105 group`}
                    >
                      <div className="p-6 text-center">
                        <h3 className={`text-xl font-semibold ${styles.text} mb-4`}>{skill.name}</h3>
                        <div className="grid grid-cols-1 gap-3">
                          {skill.certificates.map((certificate, certIndex) => (
                            <div
                              key={certIndex}
                              onClick={() => handleCertificateClick(certificate, skill.certificates)}
                              className="relative cursor-pointer group/cert"
                            >
                              {certificate.endsWith(".pdf") ? (
                                <div className="w-full h-32 rounded border-2 border-gray-600 hover:border-white transition-colors bg-gray-700 flex flex-col items-center justify-center gap-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z" />
                                  </svg>
                                  <span className="text-red-400 text-xs font-semibold">PDF</span>
                                </div>
                              ) : (
                                <img
                                  src={certificate}
                                  alt={`${skill.name} Certificate ${certIndex + 1}`}
                                  className="w-full h-32 object-cover rounded border-2 border-gray-600 hover:border-white transition-colors"
                                />
                              )}
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/cert:opacity-100 transition-opacity rounded flex items-center justify-center">
                                <span className="text-white text-sm font-medium">Ver certificado</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-gray-400 mt-3">
                          {skill.certificates.length === 1 ? "1 certificado" : `${skill.certificates.length} certificados`}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={lightboxIndex}
      />
    </section>
  );
}

export default Skills;