function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center px-8 max-w-4xl mx-auto py-16"
    >
      <h2
        className="text-3xl font-bold text-emerald-400 mb-8"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Sobre Mim
      </h2>

      <p
        className="text-gray-100 max-w-2xl text-center text-lg leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        <strong>
          Desenvolvimento que resolve problemas e garante o crescimento do seu
          negócio. Eu planejo, crio e entrego sistemas e sites completos que
          funcionam perfeitamente do conceito à implementação final. Sua ideia
          ganha vida com uma base técnica robusta, segura e fácil de usar.
        </strong>
      </p>
    </section>
  );
}

export default About;