import { useSEO } from "../lib/useSEO";
import { FAQ_ITEMS } from "../components/FAQ";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Chapters from "../components/Chapters";
import Timeline from "../components/Timeline";
import LavaJato from "../components/LavaJato";
import Economy from "../components/Economy";
import Inequality from "../components/Inequality";
import DocumentPreview from "../components/DocumentPreview";
import Audience from "../components/Audience";
import Differentiators from "../components/Differentiators";
import FAQ from "../components/FAQ";
import Offer from "../components/Offer";
import FinalCall from "../components/FinalCall";
import Footer from "../components/Footer";
import MobileCTA from "../components/MobileCTA";

const SITE_URL = "https://dochaodafabricaaopoder.com.br";

export default function IndexRoute() {
  useSEO({
    title: "Do Chão da Fábrica ao Poder | A história de Lula, do PT e do Brasil",
    description:
      "Documentário digital sobre a trajetória política de Lula, a ascensão do PT, a economia brasileira e as disputas que transformaram o Brasil. Acesso digital, leitura imediata.",
    ogType: "product",
    url: SITE_URL,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Book",
        name: "Do Chão da Fábrica ao Poder",
        description:
          "Uma investigação documental sobre a trajetória política de Lula, a ascensão do PT, as transformações econômicas e sociais do Brasil e os acontecimentos que marcaram uma das épocas mais polarizadas da política brasileira.",
        bookFormat: "https://schema.org/EBook",
        inLanguage: "pt-BR",
        url: SITE_URL,
        offers: {
          "@type": "Offer",
          priceCurrency: "BRL",
          price: "37.00",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}#oferta`,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  });

  return (
    <div className="font-body">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Chapters />
        <Timeline />
        <LavaJato />
        <Economy />
        <Inequality />
        <DocumentPreview />
        <Audience />
        <Differentiators />
        <FAQ />
        <Offer />
        <FinalCall />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
