function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const rawProjects = [
  {
    title: "Luxury Kitchen Extension",
    category: "Residential",
    service: "Extension Services",
    location: "London, UK",
    year: "2024",
    heroImage: "/projects/Extension-Services/kitchen-extension1.jpg",
    gallery: [
      "/projects/Extension-Services/kitchen-extension1.jpg",
      "/projects/Extension-Services/kitchen-extension1-2.jpg",
      "/projects/Extension-Services/kitchen-extension1-3.jpg",
    ],
    description:
      "Premium residential extension in London, creating modern living space with high-end finishes and quality craftsmanship.",
  },
  {
    title: "Luxury Kitchen Extension",
    category: "Residential",
    service: "Extension Services",
    location: "London, UK",
    year: "2024",
    heroImage: "/projects/Extension-Services/extension7.jpg",
    gallery: [
      "/projects/Extension-Services/extension7.jpg",
      "/projects/Extension-Services/extension7-1.jpg",
    ],
    description:
      "Premium residential extension in London, creating modern living space with high-end finishes and quality craftsmanship.",
  },
  {
    title: "Luxury Kitchen Extension",
    category: "Residential",
    service: "Extension Services",
    location: "London, UK",
    year: "2024",
    heroImage: "/projects/Extension-Services/extension3-1.jpg",
    gallery: [
      "/projects/Extension-Services/extension3-1.jpg",
      "/projects/Extension-Services/extension3-2.jpg",
      "/projects/Extension-Services/extension3-3.jpg",
    ],
    description:
      "Premium residential extension in London, creating modern living space with high-end finishes and quality craftsmanship.",
  },
  {
    title: "New Build Bathroom",
    category: "Residential",
    service: "New Build Services",
    location: "Harrow, London",
    year: "2024",
    heroImage: "/projects/New-Build-Services/new-build-bathroom1.jpg",
    gallery: [
      "/projects/New-Build-Services/new-build-bathroom1.jpg",
      "/projects/New-Build-Services/new-build-bathroom1-1.jpg",
    ],
    description:
      "Complete new build family home in Harrow, London, designed for modern living and energy efficiency with expert construction.",
  },
  {
    title: "New Build Family Home",
    category: "Residential",
    service: "New Build Services",
    location: "Harrow, London",
    year: "2024",
    heroImage: "/projects/New-Build-Services/new-build-bathroom2.jpg",
    gallery: [
      "/projects/New-Build-Services/new-build-bathroom2.jpg",
      "/projects/New-Build-Services/new-build-bathroom2.jpg",
    ],
    description:
      "Complete new build family home in Harrow, London, designed for modern living and energy efficiency with expert construction.",
  },
  {
    title: "New Build Family Home",
    category: "Residential",
    service: "New Build Services",
    location: "Harrow, London",
    year: "2024",
    heroImage: "/projects/New-Build-Services/new-build3.jpg",
    gallery: [
      "/projects/New-Build-Services/new-build3-1.jpg",
      "/projects/New-Build-Services/new-build3-2.jpg",
      "/projects/New-Build-Services/new-build3-3.jpg",
    ],
    description:
      "Complete new build family home in Harrow, London, designed for modern living and energy efficiency with expert construction.",
  },
  {
    title: "Full Property Renovation",
    category: "Residential",
    service: "Renovation Services",
    location: "Croydon, London",
    year: "2023",
    heroImage: "/projects/Renovation-Services/renovation1.jpg",
    gallery: ["/projects/Renovation-Services/renovation1.jpg"],
    description:
      "End-to-end property renovation in Croydon, London, transforming outdated spaces into stylish, contemporary homes.",
  },
  {
    title: "Full Property Renovation",
    category: "Residential",
    service: "Renovation Services",
    location: "Croydon, London",
    year: "2023",
    heroImage: "/projects/Renovation-Services/renovation3.jpg",
    gallery: ["/projects/Renovation-Services/renovation3.jpg"],
    description:
      "End-to-end property renovation in Croydon, London, transforming outdated spaces into stylish, contemporary homes.",
  },
  {
    title: "Full Property Renovation",
    category: "Residential",
    service: "Renovation Services",
    location: "Croydon, London",
    year: "2023",
    heroImage: "/projects/Renovation-Services/renovation2.jpg",
    gallery: [
      "/projects/Renovation-Services/renovation2.jpg",
      "/projects/Renovation-Services/renovation2-1.jpg",
    ],
    description:
      "End-to-end property renovation in Croydon, London, transforming outdated spaces into stylish, contemporary homes.",
  },
  {
    title: "Full Property Renovation",
    category: "Residential",
    service: "Renovation Services",
    location: "Croydon, London",
    year: "2023",
    heroImage: "/projects/Renovation-Services/garden-renovation1.jpg",
    gallery: [
      "/projects/Renovation-Services/garden-renovation1.jpg",
      "/projects/Renovation-Services/garden-renovation1-1.jpg",
      "/projects/Renovation-Services/garden-renovation1-2.jpg",
    ],
    description:
      "End-to-end property renovation in Croydon, London, transforming outdated spaces into stylish, contemporary homes.",
  },
  {
    title: "Loft Conversion with Skylights",
    category: "Residential",
    service: "Loft Conversions",
    location: "Leyton, London",
    year: "2023",
    heroImage: "/projects/Loft-Conversion/loft-conversion1.jpg",
    gallery: ["/projects/Loft-Conversion/loft-conversion1.jpg"],
    description:
      "Loft conversion in Leyton, London, maximizing space and natural light with custom skylight installations.",
  },
  {
    title: "Loft Conversion with Skylights",
    category: "Residential",
    service: "Loft Conversions",
    location: "Leyton, London",
    year: "2023",
    heroImage: "/projects/Loft-Conversion/loft-conversion.jpg",
    gallery: ["/projects/Loft-Conversion/loft-conversion.jpg"],
    description:
      "Loft conversion in Leyton, London, maximizing space and natural light with custom skylight installations.",
  },
  {
    title: "Residential AC Installation",
    category: "Residential",
    service: "AC Installation",
    location: "Canary Wharf, London",
    year: "2024",
    heroImage: "/projects/AC-Installation/AC-Installation1-1.jpg",
    gallery: [
      "/projects/AC-Installation/AC-Installation1.jpg",
      "/projects/AC-Installation/AC-Installation1-1.jpg",
    ],
    description:
      "Professional residential AC installation in Canary Wharf, London, ensuring optimal indoor comfort and energy efficiency.",
  },
];

const projects = rawProjects.map((project, index) => ({
  ...project,
  slug: `london-${slugify(project.title)}-${index + 1}`, // SEO-friendly & unique
}));

export default projects;
