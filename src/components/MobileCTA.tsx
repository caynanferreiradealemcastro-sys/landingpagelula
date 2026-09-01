export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/30 bg-background/95 backdrop-blur-md md:hidden">
      <a
        href="#oferta"
        className="flex items-center justify-center gap-2 bg-gold py-4 font-mono-label text-[12px] uppercase text-paper"
      >
        Quero o meu acesso →
      </a>
    </div>
  );
}
