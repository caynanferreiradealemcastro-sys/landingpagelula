const INCLUDES = [
  "Acesso digital imediato após a compra",
  "Leitura pelo celular, tablet ou computador",
  "Cronologia completa 1945–2022",
  "Documentos, gráficos e fotografias",
  "Atualizações do conteúdo sem custo adicional",
];

export default function Offer() {
  return (
    <section id="oferta" className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl border border-gold/30 bg-forest/10 p-8 text-center sm:p-14">
          <span className="font-mono-label text-[11px] uppercase text-gold">Acesso completo</span>

          <h2 className="mt-5 font-display text-3xl text-paper sm:text-4xl">
            Do Chão da Fábrica ao Poder
          </h2>

          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Documentário digital completo — pagamento único, acesso vitalício.
          </p>

          <div className="mt-8 flex items-end justify-center gap-2">
            <span className="font-display text-6xl text-paper sm:text-7xl">R$37</span>
            <span className="pb-2 text-sm text-muted-foreground">à vista</span>
          </div>

          <ul className="mx-auto mt-10 flex max-w-sm flex-col gap-3 text-left">
            {INCLUDES.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-paper sm:text-base">
                <span className="mt-0.5 text-gold">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="group mt-10 inline-flex w-full items-center justify-center gap-3 bg-gold px-8 py-4 font-mono-label text-[12px] uppercase text-paper transition-transform hover:-translate-y-0.5"
          >
            Quero o meu acesso
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>

          <p className="mt-5 font-mono-label text-[10px] uppercase text-muted-foreground">
            Pagamento seguro • Acesso imediato
          </p>
        </div>
      </div>
    </section>
  );
}
