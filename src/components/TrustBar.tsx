const TOPICS = ["História", "Política", "Economia", "Documentos", "Cronologia"];

export default function TrustBar() {
  return (
    <div className="border-y border-gold/20 bg-forest/10">
      <div className="container flex flex-wrap items-center justify-center gap-x-3 gap-y-2 py-5">
        {TOPICS.map((topic, i) => (
          <span key={topic} className="flex items-center gap-3">
            <span className="font-mono-label text-[11px] uppercase text-paper">{topic}</span>
            {i < TOPICS.length - 1 && <span className="text-gold">•</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
