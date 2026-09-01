const TAGS = [
  "Páginas",
  "Capítulos",
  "Gráficos",
  "Documentos",
  "Timeline",
  "Fotografias",
  "Boxes informativos",
];

export default function DocumentPreview() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-10 bg-gold" />
          <span className="font-mono-label text-[11px] uppercase text-gold">Dentro do documentário</span>
        </div>

        <h2 className="max-w-3xl font-display text-4xl leading-[1.05] text-paper sm:text-5xl md:text-6xl">
          Mais do que um e-book. Uma viagem pela história recente do Brasil.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Do movimento sindical às eleições presidenciais. Dos programas sociais às crises
          econômicas. Do Mensalão à Lava Jato. Da prisão ao retorno ao poder.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="border border-gold/30 px-5 py-2.5 font-mono-label text-[11px] uppercase text-paper"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
