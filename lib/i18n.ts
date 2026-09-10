export type Locale = "en" | "fr";

export const defaultLocale: Locale = "en";

export const translations = {
  en: {
    nav: {
      aboutUs: "About Us",
      axes: "Areas of Focus",
      district: "District",
      projects: "Projects & Achievements",
      clubs: "Our Clubs",
      team: "The Team",
      conference: "District Conference",
      donate: "Hurricane Relief",
    },
    districtDropdown: {
      about: "About the District",
      drr: "Our DRR",
      clubs: "Our Clubs",
      team: "District Team",
    },
  },
  fr: {
    nav: {
      aboutUs: "À propos de nous",
      axes: "Axes d'intervention",
      district: "District",
      projects: "Nos projets / Réalisations",
      clubs: "Nos clubs",
      team: "L'équipe",
      conference: "Conférence du District",
      donate: "Secours Ouragan",
    },
    districtDropdown: {
      about: "À propos du District",
      drr: "Notre DRR",
      clubs: "Nos clubs",
      team: "L'équipe du District",
    },
  },
} as const;
