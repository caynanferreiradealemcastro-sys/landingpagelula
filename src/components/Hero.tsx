export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, hsl(var(--forest) / 0.18), transparent 70%)",
        }}
      />

      <div className="container relative z-10 flex flex-col items-center text-center">
        <span className="mb-8 inline-flex items-center gap-2 border border-gold/60 px-4 py-2 font-mono-label text-[11px] uppercase text-gold">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Documentário digital
        </span>

        <h1 className="font-display text-[15vw] leading-[0.95] text-paper sm:text-7xl md:text-8xl">
          Do Chão da Fábrica
          <br />
          <span className="text-gold">ao Poder</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-paper sm:text-xl">
          A história de Lula, do PT e das disputas que transformaram o Brasil.
        </p>

        <p className="mt-6 max-w-xl text-balance text-sm leading-relaxed text-muted-foreground sm:text-base">
          Uma investigação documental sobre a trajetória política de Lula, a ascensão do PT, as
          transformações econômicas e sociais do Brasil e os acontecimentos que marcaram uma das
          épocas mais polarizadas da política brasileira.
        </p>

        <a
          href="#oferta"
          className="group mt-10 inline-flex items-center gap-3 bg-gold px-8 py-4 font-mono-label text-[12px] uppercase text-paper transition-transform hover:-translate-y-0.5"
        >
          Quero conhecer a história
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>

        <p className="mt-5 font-mono-label text-[10px] uppercase text-muted-foreground">
          Acesso digital • Leitura imediata
        </p>
      </div>
    </section>
  );
}
