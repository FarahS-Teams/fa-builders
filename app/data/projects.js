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
    location: "Morden, UK",
    year: "2024",
    heroImage: "/projects/Extension-Services/kitchen-extension1.jpg",
    gallery: [
      "/projects/Extension-Services/kitchen-extension1.jpg",
      "/projects/Extension-Services/kitchen-extension1-2.jpg",
      "/projects/Extension-Services/kitchen-extension1-3.jpg",
    ],
    description:
      "High-quality kitchen extension in Morden, London, designed to enhance modern living with bespoke layouts, premium finishes, and expert craftsmanship.",
  },
  {
    title: "Luxury Home Extension",
    category: "Residential",
    service: "Extension Services",
    location: "Norwood, UK",
    year: "2023",
    heroImage: "/projects/Extension-Services/extension7.jpg",
    gallery: [
      "/projects/Extension-Services/extension7.jpg",
      "/projects/Extension-Services/extension7-1.jpg",
    ],
    description:
      "Premium kitchen and home extension in Norwood, London, delivering enhanced living space with modern design, high-end finishes, and expert craftsmanship.",
  },
  {
    title: "Full Home Extension",
    category: "Residential",
    service: "Extension Services",
    location: "Aspen, Canary Wharf",
    year: "2023",
    heroImage: "/projects/Extension-Services/extension3-1.jpg",
    gallery: [
      "/projects/Extension-Services/extension3-1.jpg",
      "/projects/Extension-Services/extension3-2.jpg",
      "/projects/Extension-Services/extension3-3.jpg",
    ],
    description:
      "Luxury full home extension in Aspen, Canary Wharf, transforming the property into an expansive modern living space with exceptional finishes and quality craftsmanship.",
  },
  {
    title: "Luxury Bathroom",
    category: "Residential",
    service: "New Build Services",
    location: "Morden, London",
    year: "2024",
    heroImage: "/projects/New-Build-Services/new-build-bathroom1.jpg",
    gallery: [
      "/projects/New-Build-Services/new-build-bathroom1.jpg",
      "/projects/New-Build-Services/new-build-bathroom1-1.jpg",
    ],
    description:
      "Luxury bathroom project in Morden, London, combining modern design with premium finishes.",
  },
  {
    title: "Modern Bathroom",
    category: "Residential",
    service: "New Build Services",
    location: "Croydon, London",
    year: "2025",
    heroImage: "/projects/New-Build-Services/new-build-bathroom2.jpg",
    gallery: [
      "/projects/New-Build-Services/new-build-bathroom2.jpg",
      "/projects/New-Build-Services/new-build-bathroom2.jpg",
    ],
    description:
      "Modern new build bathroom in Croydon, London, expertly designed with contemporary styling, premium finishes, and high-quality construction.",
  },
  {
    title: "New Build Family Home",
    category: "Residential",
    service: "New Build Services",
    location: "UK",
    year: "2024",
    heroImage: "/projects/New-Build-Services/new-build3.jpg",
    gallery: [
      "/projects/New-Build-Services/new-build3-1.jpg",
      "/projects/New-Build-Services/new-build3-2.jpg",
      "/projects/New-Build-Services/new-build3-3.jpg",
    ],
    description:
      "Complete new build family home in London, designed for modern living and energy efficiency with expert construction.",
  },
  {
    title: "Full Property Renovation",
    category: "Residential",
    service: "Renovation Services",
    location: "Morden, London",
    year: "2024",
    heroImage: "/projects/Renovation-Services/renovation1.jpg",
    gallery: ["/projects/Renovation-Services/renovation1.jpg"],
    description:
      "End-to-end property renovation in Morden, London, transforming outdated spaces into stylish, contemporary homes.",
  },
  {
    title: "Full House Renovation",
    category: "Residential",
    service: "Renovation Services",
    location: "Morden, London",
    year: "2024",
    heroImage: "/projects/Renovation-Services/renovation2.jpg",
    gallery: [
      "/projects/Renovation-Services/renovation2.jpg",
      "/projects/Renovation-Services/renovation2-1.jpg",
    ],
    description:
      "Comprehensive full house renovation in Morden, London, delivering a complete transformation with contemporary design and high-quality finishes.",
  },
  {
    title: "New Build Garden Renovation",
    category: "Residential",
    service: "Renovation Services",
    location: "UK",
    year: "2018",
    heroImage: "/projects/Renovation-Services/garden-renovation1.jpg",
    gallery: [
      "/projects/Renovation-Services/garden-renovation1.jpg",
      "/projects/Renovation-Services/garden-renovation1-1.jpg",
      "/projects/Renovation-Services/garden-renovation1-2.jpg",
    ],
    description:
      "High-end new build garden renovation in the UK, delivering a beautifully designed outdoor space with premium materials and high-quality landscaping.",
  },
  {
    title: "Loft Conversion",
    category: "Residential",
    service: "Loft Conversions",
    location: "Croydon, London",
    year: "2025",
    heroImage: "/projects/Loft-Conversion/loft-conversion.jpg",
    gallery: [
      "/projects/Loft-Conversion/loft-conversion1.jpg",
      "/projects/Loft-Conversion/loft-conversion.jpg",
      "/projects/New-Build-Services/new-build-bathroom2.jpg",
    ],
    description:
      "Loft conversion with bathroom in Croydon, London, designed to enhance space, natural light, and premium finishes throughout.",
  },
  {
    title: "Residential AC Installation",
    category: "Residential",
    service: "AC Installation",
    location: "Croydon, London",
    year: "2025",
    heroImage: "/projects/AC-Installation/AC-Installation1-1.jpg",
    gallery: [
      "/projects/AC-Installation/AC-Installation1.jpg",
      "/projects/AC-Installation/AC-Installation1-1.jpg",
    ],
    description:
      "Professional residential AC installation in Croyden, London, ensuring optimal indoor comfort and energy efficiency.",
  },
];

const projects = rawProjects.map((project, index) => ({
  ...project,
  slug: `london-${slugify(project.title)}-${index + 1}`, // SEO-friendly & unique
}));

export default projects;
