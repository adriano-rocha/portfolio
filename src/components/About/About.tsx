function About() {
  return (
    <section
      id="about"
      className="px-4 sm:px-8 py-16 lg:py-24 max-w-3xl mx-auto text-center"
    >
      <span
        className="text-emerald-400 text-sm font-mono tracking-widest uppercase"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Sobre mim
      </span>

      <h2
        className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-6 leading-tight"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="800"
      >
        Desenvolvimento com foco em resultado
      </h2>

      <p
        className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        Sou formado em Análise e Desenvolvimento de Sistemas e trabalho com
        desenvolvimento full-stack desde o planejamento à entrega de sistemas e
        sites que funcionam bem tanto na base técnica quanto na experiência
        de uso.
      </p>
      <p
        className="text-gray-300 text-base sm:text-lg leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="800"
      >
        Também atuo com gestão de tráfego pago (Google Ads e Analytics), o
        que me dá uma visão mais completa de cada projeto: não só como
        construir, mas como ele se comporta depois de publicado.
      </p>

      <a
        href="https://adcode-lh.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-8 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="800"
      >
        Conheça a ADCode LH →
      </a>
    </section>
  );
}

export default About;