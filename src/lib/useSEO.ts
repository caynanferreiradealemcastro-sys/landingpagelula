import { useEffect } from "react";

type OgType = "website" | "product" | "book";

interface SEOConfig {
  title: string;
  description: string;
  ogType?: OgType;
  ogImage?: string;
  url?: string;
  jsonLd?: object[];
}

function setMeta(nameOrProp: string, content: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${nameOrProp}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, nameOrProp);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

/**
 * Define title, meta description, Open Graph e JSON-LD estruturado
 * diretamente no <head>, sem depender de bibliotecas externas.
 */
export function useSEO({ title, description, ogType = "website", ogImage, url, jsonLd }: SEOConfig) {
  useEffect(() => {
    document.title = title;
    setMeta("description", description);

    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", ogType, true);
    setMeta("og:locale", "pt_BR", true);
    if (url) setMeta("og:url", url, true);
    if (ogImage) setMeta("og:image", ogImage, true);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    const scripts: HTMLScriptElement[] = [];
    if (jsonLd) {
      jsonLd.forEach((entry) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.text = JSON.stringify(entry);
        document.head.appendChild(script);
        scripts.push(script);
      });
    }

    return () => {
      scripts.forEach((s) => s.remove());
    };
  }, [title, description, ogType, ogImage, url, jsonLd]);
}
