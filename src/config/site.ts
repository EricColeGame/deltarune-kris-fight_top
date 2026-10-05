export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Deltarune Kris Fight Wiki",
  shortName: "Deltarune Kris Fight",
  logoText: "D",
  tagline: "Kris Fight Guides, Boss Strategies & Chapter 5 Secrets",
  description: "Fan-made Deltarune Kris Fight wiki covering Kris battles, boss strategies, Chapter 5 guides, secrets, battle mechanics, characters, and key story encounters.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://deltarune-kris-fight.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://deltarune-kris-fight.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://deltarune.com/",
  heroVideoId: "P3rE7su1Fxg", // DELTARUNE Chapter 5 - Launch Trailer (official)
  social: {
    youtube: "https://www.youtube.com/@UNDERTALEOfficial",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
