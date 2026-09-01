const CARDS = [
  { n: "01", title: "A investigação", desc: "Como começou e como cresceu." },
  { n: "02", title: "As condenações", desc: "O que aconteceu com Lula e outros envolvidos." },
  {
    n: "03",
    title: "As controvérsias",
    desc: "Os questionamentos posteriores sobre procedimentos, mensagens divulgadas e decisões judiciais.",
  },
];

export default function LavaJato() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-10 bg-gold" />
          <span className="font-mono-label text-[11px] uppercase text-gold">O capítulo mais controverso</span>
        </div>

        <h2 className="max-w-3xl font-display text-4xl leading-[1.05] text-paper sm:text-5xl md:text-6xl">
          Lava Jato: a investigação que reescreveu a política brasileira
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Poucos acontecimentos tiveram impacto tão profundo na política brasileira quanto a
          Operação Lava Jato.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {CARDS.map((c) => (
            <div key={c.n} className="border border-gold/20 bg-forest/5 p-7">
              <span className="font-mono-label text-[12px] text-gold">{c.n}</span>
              <h3 className="mt-4 font-display text-2xl text-paper">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>

        <a
          href="#oferta"
          className="group mt-10 inline-flex items-center gap-3 bg-gold px-7 py-3.5 font-mono-label text-[12px] uppercase text-paper transition-transform hover:-translate-y-0.5"
        >
          Quero entender o que aconteceu
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Obra de caráter documental e jornalístico. Os fatos são apresentados com base em
          registros públicos, decisões judiciais e reportagens, incluindo controvérsias e
          diferentes interpretações.
        </p>
      </div>
    </section>
  );
}
