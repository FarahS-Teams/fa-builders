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
      "A premium residential extension delivering modern living space with high-end finishes.",
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
      "A complete new build project delivering a modern, energy-efficient family home.",
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
      "End-to-end renovation transforming an outdated property into a modern living space.",
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
      "Loft conversion designed to maximize space and natural light with skylight installations.",
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
      "Basement conversion creating a functional and stylish underground living area.",
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
      "Professional AC installation ensuring efficient cooling and optimal indoor comfort.",
  },
];

const projects = rawProjects.map((project, index) => ({
  ...project,
  slug: `project${index + 1}-${slugify(project.title)}`, // guarantees uniqueness
}));

export default projects;
