const CHAPTERS = [
  { n: "01", title: "A ascensão do PT", desc: "Da formação do partido às primeiras disputas eleitorais." },
  { n: "02", title: "A trajetória de Lula", desc: "Do trabalho industrial ao Palácio do Planalto." },
  { n: "03", title: "O Brasil desigual", desc: "Pobreza, renda, emprego, salário e oportunidades." },
  { n: "04", title: "A economia", desc: "Inflação, juros, crescimento, dívida, políticas econômicas e crises." },
  { n: "05", title: "Mensalão e Lava Jato", desc: "Os escândalos e investigações que mudaram a política brasileira." },
  { n: "06", title: "O retorno", desc: "Prisão, decisões judiciais, recuperação dos direitos políticos e retorno ao cenário eleitoral." },
];

export default function Chapters() {
  return (
    <section id="obra" className="py-24 sm:py-32">
      <div className="container">
        <div className="mb-14 flex items-center gap-4">
          <span className="h-px w-10 bg-gold" />
          <span className="font-mono-label text-[11px] uppercase text-gold">O que você vai encontrar</span>
        </div>

        <h2 className="max-w-3xl font-display text-4xl leading-[1.05] text-paper sm:text-5xl md:text-6xl">
          Uma história que não cabe em uma manchete
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Por décadas, Lula esteve no centro das principais transformações políticas brasileiras.
          Mas entender essa trajetória exige olhar para muito além das eleições.
        </p>

        <div className="mt-16 grid gap-px overflow-hidden border border-gold/20 bg-gold/20 sm:grid-cols-2 lg:grid-cols-3">
          {CHAPTERS.map((c) => (
            <div key={c.n} className="bg-background p-8 transition-colors hover:bg-forest/10">
              <span className="font-mono-label text-[12px] text-gold">{c.n}</span>
              <h3 className="mt-4 font-display text-2xl text-paper">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
