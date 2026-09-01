const PILLARS = [
  { title: "Renda", desc: "Concentração, distribuição e mobilidade ao longo das décadas.", fill: 70 },
  { title: "Educação", desc: "Acesso, permanência e diferenças regionais.", fill: 55 },
  { title: "Emprego", desc: "Formalização, informalidade e transformações do trabalho.", fill: 62 },
  { title: "Pobreza", desc: "Programas sociais, indicadores e ciclos econômicos.", fill: 48 },
  { title: "Acesso a oportunidades", desc: "Território, origem social e barreiras estruturais.", fill: 40 },
];

export default function Inequality() {
  return (
    <section className="bg-forest/10 py-24 sm:py-32">
      <div className="container">
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-10 bg-gold" />
          <span className="font-mono-label text-[11px] uppercase text-gold">Relatório • Desigualdade</span>
        </div>

        <h2 className="max-w-3xl font-display text-4xl leading-[1.05] text-paper sm:text-5xl md:text-6xl">
          Por que o Brasil continua tão desigual?
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          O Brasil avançou em diversos indicadores sociais nas últimas décadas, mas a desigualdade
          continua sendo um dos maiores desafios nacionais.
        </p>

        <div className="mt-14 grid gap-6 border border-gold/20 sm:grid-cols-3 lg:grid-cols-5">
          {PILLARS.map((p, i) => (
            <div key={p.title} className="border-gold/20 p-7 sm:border-r last:border-r-0">
              <span className="font-mono-label text-[12px] text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl uppercase text-paper">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-6 h-[3px] w-full bg-white/10">
                <div className="h-full bg-gold" style={{ width: `${p.fill}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
