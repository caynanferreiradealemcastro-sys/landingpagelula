const ITEMS = [
  { n: "01", title: "Contexto", desc: "Os acontecimentos não são apresentados isoladamente." },
  { n: "02", title: "Cronologia", desc: "Os principais eventos são organizados em ordem histórica." },
  { n: "03", title: "Documentos", desc: "Destaque para documentos, decisões e acontecimentos relevantes." },
  { n: "04", title: "Contrapontos", desc: "Questões controversas apresentam diferentes interpretações." },
];

export default function Differentiators() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-10 bg-gold" />
          <span className="font-mono-label text-[11px] uppercase text-gold">Diferencial</span>
        </div>

        <h2 className="max-w-3xl font-display text-4xl leading-[1.05] text-paper sm:text-5xl md:text-6xl">
          Uma visão ampla de uma história complexa
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden border border-gold/20 bg-gold/20 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <div key={item.n} className="bg-background p-7">
              <span className="font-mono-label text-[12px] text-gold">{item.n}</span>
              <h3 className="mt-4 font-display text-xl text-paper">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <blockquote className="mt-14 border-l-2 border-gold pl-6">
          <p className="font-display text-2xl italic text-paper sm:text-3xl">
            "Conhecer a história não significa concordar com todos os personagens dela."
          </p>
        </blockquote>
      </div>
    </section>
  );
}
