export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "O que recebo após a compra?",
    answer:
      "Você recebe o link de acesso ao documentário digital completo por e-mail, com liberação imediata após a confirmação do pagamento.",
  },
  {
    question: "O material é físico?",
    answer:
      "Não. O acesso é 100% digital — você lê diretamente pela plataforma, sem necessidade de impressão ou envio.",
  },
  {
    question: "Posso ler pelo celular?",
    answer:
      "Sim. O conteúdo é responsivo e pode ser acessado pelo celular, tablet ou computador, a qualquer hora.",
  },
  {
    question: "O conteúdo fala apenas de Lula?",
    answer:
      "Não. Além da trajetória de Lula, o documentário aborda a história do PT, a economia brasileira, a desigualdade social e os principais acontecimentos políticos das últimas décadas.",
  },
  {
    question: "O documentário é partidário?",
    answer:
      "Não. A obra tem caráter documental e jornalístico, apresentando fatos com base em registros públicos, decisões judiciais e reportagens — incluindo controvérsias e diferentes interpretações.",
  },
  {
    question: "Quando recebo acesso?",
    answer: "O acesso é liberado de forma imediata, assim que o pagamento é confirmado.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-forest/10 py-24 sm:py-32">
      <div className="container max-w-3xl">
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-10 bg-gold" />
          <span className="font-mono-label text-[11px] uppercase text-gold">FAQ</span>
        </div>

        <h2 className="font-display text-4xl text-paper sm:text-5xl md:text-6xl">
          Perguntas frequentes
        </h2>

        <div className="mt-14 divide-y divide-gold/15 border-t border-gold/15">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                <span className="text-base text-paper sm:text-lg">{item.question}</span>
                <span className="font-mono-label shrink-0 text-gold transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
