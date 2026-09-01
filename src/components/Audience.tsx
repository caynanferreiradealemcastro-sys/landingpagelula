const ITEMS = [
  "Quer entender melhor a trajetória de Lula.",
  "Tem interesse na história do PT.",
  "Quer compreender as principais crises políticas brasileiras.",
  "Quer entender melhor a economia brasileira.",
  "Quer conhecer os acontecimentos por trás da polarização atual.",
  "Gosta de política, história e jornalismo.",
];

export default function Audience() {
  return (
    <section className="bg-forest/10 py-24 sm:py-32">
      <div className="container">
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-10 bg-gold" />
          <span className="font-mono-label text-[11px] uppercase text-gold">Para quem é</span>
        </div>

        <h2 className="font-display text-4xl text-paper sm:text-5xl md:text-6xl">
          Este documentário é para você se...
        </h2>

        <ul className="mt-14 grid gap-px overflow-hidden border border-gold/20 bg-gold/20 sm:grid-cols-2">
          {ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-4 bg-background p-6">
              <span className="mt-0.5 font-mono-label text-gold">✓</span>
              <span className="text-base text-paper">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
