const TOPICS = [
  "Inflação",
  "Salário mínimo",
  "Emprego",
  "Bolsa Família",
  "PIB",
  "Juros",
  "Dívida pública",
  "Gastos públicos",
];

export default function Economy() {
  return (
    <section id="economia" className="py-24 sm:py-32">
      <div className="container">
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-10 bg-gold" />
          <span className="font-mono-label text-[11px] uppercase text-gold">Economia</span>
        </div>

        <h2 className="max-w-3xl font-display text-4xl leading-[1.05] text-paper sm:text-5xl md:text-6xl">
          Por trás da política, existe uma outra disputa: a economia
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Enquanto o debate político se concentrava em Lula, PT, oposição e escândalos, outra
          batalha acontecia nos bastidores: inflação, juros, emprego, salário, gastos públicos,
          dívida e crescimento.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-gold/20 bg-gold/20 sm:grid-cols-4">
          {TOPICS.map((topic, i) => (
            <div key={topic} className="bg-background p-7">
              <span className="font-mono-label text-[12px] text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 font-display text-xl text-paper">{topic}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
