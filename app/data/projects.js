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
    title: "Luxury Home Extension",
    category: "Residential",
    service: "Extension Services",
    location: "London, UK",
    year: "2024",
    heroImage: "/project1.jpg",
    gallery: ["/project1.jpg", "/project1.jpg"],
    description:
      "Premium residential extension in London, creating modern living space with high-end finishes and quality craftsmanship.",
  },
  {
    title: "New Build Family Home",
    category: "Residential",
    service: "New Build Services",
    location: "Harrow, London",
    year: "2024",
    heroImage: "/project2.jpg",
    gallery: ["/project2.jpg", "/project2.jpg"],
    description:
      "Complete new build family home in Harrow, London, designed for modern living and energy efficiency with expert construction.",
  },
  {
    title: "Full Property Renovation",
    category: "Residential",
    service: "Renovation Services",
    location: "Croydon, London",
    year: "2023",
    heroImage: "/project3.jpg",
    gallery: ["/project3.jpg", "/project3.jpg"],
    description:
      "End-to-end property renovation in Croydon, London, transforming outdated spaces into stylish, contemporary homes.",
  },
  {
    title: "Loft Conversion with Skylights",
    category: "Residential",
    service: "Loft Conversions",
    location: "Leyton, London",
    year: "2023",
    heroImage: "/project4.jpg",
    gallery: ["/project4.jpg", "/project4.jpg"],
    description:
      "Loft conversion in Leyton, London, maximizing space and natural light with custom skylight installations.",
  },
  {
    title: "Basement Conversion Project",
    category: "Residential",
    service: "Basement Conversions",
    location: "Kensington, London",
    year: "2022",
    heroImage: "/project5.jpg",
    gallery: [
      "/project5.jpg",
      "/project5.jpg",
      "/project5.jpg",
      "/project5.jpg",
    ],
    description:
      "Basement conversion in Kensington, London, creating a stylish, functional underground living area with premium finishes.",
  },
  {
    title: "Residential AC Installation",
    category: "Residential",
    service: "AC Installation",
    location: "Canary Wharf, London",
    year: "2024",
    heroImage: "/project6.jpg",
    gallery: ["/project6.jpg", "/project6.jpg"],
    description:
      "Professional residential AC installation in Canary Wharf, London, ensuring optimal indoor comfort and energy efficiency.",
  },
];

const projects = rawProjects.map((project, index) => ({
  ...project,
  slug: `london-${slugify(project.title)}-${index + 1}`, // SEO-friendly & unique
}));

export default projects;
