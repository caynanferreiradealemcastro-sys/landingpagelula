const COLUMNS = [
  { title: "A obra", links: ["Capítulos", "Cronologia", "Documentos"] },
  { title: "Suporte", links: ["Dúvidas frequentes", "Fale conosco"] },
  { title: "Legal", links: ["Termos de uso", "Política de privacidade"] },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold/15 pb-24 pt-16 sm:pb-16">
      <div className="container">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl text-paper">
              Do Chão da Fábrica <span className="text-gold">ao Poder</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Documentário digital sobre a trajetória política de Lula e as disputas que
              transformaram o Brasil.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-mono-label text-[11px] uppercase text-gold">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-paper">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-gold/10 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Do Chão da Fábrica ao Poder. Todos os direitos reservados.</p>
          <p>Obra de caráter documental e jornalístico, sem vínculo partidário.</p>
        </div>
      </div>
    </footer>
  );
}
