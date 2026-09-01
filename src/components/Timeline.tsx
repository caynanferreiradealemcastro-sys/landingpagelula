const EVENTS = [
  { year: "1945", text: "Nascimento de Lula." },
  { year: "1970s", text: "Ascensão no movimento sindical." },
  { year: "1980", text: "Fundação do PT." },
  { year: "1989", text: "Primeira candidatura presidencial." },
  { year: "2002", text: "Vitória presidencial." },
  { year: "2003–2010", text: "Dois governos Lula." },
  { year: "2011", text: "Início do governo Dilma." },
  { year: "2013", text: "Grandes manifestações nacionais." },
  { year: "2014", text: "Início da Operação Lava Jato." },
  { year: "2016", text: "Impeachment de Dilma Rousseff." },
  { year: "2018", text: "Prisão de Lula." },
  { year: "2019", text: "Novos acontecimentos envolvendo a Lava Jato e divulgação de mensagens." },
  { year: "2021", text: "Decisões do STF relacionadas aos processos de Lula." },
  { year: "2022", text: "Retorno de Lula à Presidência." },
];

export default function Timeline() {
  return (
    <section id="cronologia" className="bg-forest/10 py-24 sm:py-32">
      <div className="container">
        <div className="mb-14 flex items-center gap-4">
          <span className="h-px w-10 bg-gold" />
          <span className="font-mono-label text-[11px] uppercase text-gold">Cronologia</span>
        </div>

        <h2 className="font-display text-4xl text-paper sm:text-5xl md:text-6xl">A linha do tempo</h2>

        <ol className="mt-16 max-w-3xl border-l border-gold/25">
          {EVENTS.map((e) => (
            <li key={e.year} className="relative border-b border-gold/10 py-6 pl-8 last:border-b-0">
              <span className="absolute -left-[5px] top-9 h-2.5 w-2.5 rounded-full bg-gold" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-8">
                <span className="font-mono-label text-sm text-gold sm:w-32 sm:shrink-0">{e.year}</span>
                <span className="text-base text-paper sm:text-lg">{e.text}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
