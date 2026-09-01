import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "A Obra", href: "#obra" },
  { label: "Cronologia", href: "#cronologia" },
  { label: "Economia", href: "#economia" },
  { label: "Dúvidas", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/10 bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container flex h-[72px] items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tight text-paper">
          Do Chão da Fábrica <span className="text-gold">ao Poder</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono-label text-[11px] uppercase text-muted-foreground transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#oferta"
          className="border border-gold px-5 py-2.5 font-mono-label text-[11px] uppercase text-gold transition-colors hover:bg-gold hover:text-background"
        >
          Quero o meu acesso
        </a>
      </div>
    </header>
  );
}
