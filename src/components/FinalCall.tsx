export default function FinalCall() {
  return (
    <section className="relative overflow-hidden bg-forest/15 py-28 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 50% 50%, hsl(var(--forest) / 0.25), transparent 70%)",
        }}
      />
      <div className="container relative z-10 flex flex-col items-center text-center">
        <h2 className="max-w-3xl font-display text-4xl leading-[1.05] text-paper sm:text-5xl md:text-6xl">
          A história do Brasil não se explica em uma manchete
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Entenda os bastidores, as disputas e as transformações que moldaram o país que você
          conhece hoje.
        </p>
        <a
          href="#oferta"
          className="group mt-10 inline-flex items-center gap-3 bg-gold px-8 py-4 font-mono-label text-[12px] uppercase text-paper transition-transform hover:-translate-y-0.5"
        >
          Quero conhecer a história
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}
