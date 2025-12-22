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
    service: "Extension",
    location: "London, UK",
    year: "2024",
    heroImage: "/project1.jpg",
    gallery: ["/project1.jpg", "/project1.jpg"],
    description:
      "A premium residential extension delivering modern living space with high-end finishes.",
  },
  {
    title: "Commercial Office Refurbishment",
    category: "Commercial",
    service: "Refurbishment",
    location: "Canary Wharf, London",
    year: "2023",
    heroImage: "/project1.jpg",
    gallery: ["/project1.jpg", "/project1.jpg"],
    description:
      "Modern office refurbishment with a focus on productivity and design.",
  },
  {
    title: "Commercial Office Refurbishment",
    category: "Commercial",
    service: "Refurbishment",
    location: "Canary Wharf, London",
    year: "2023",
    heroImage: "/project1.jpg",
    gallery: ["/project1.jpg", "/project1.jpg"],
    description:
      "Modern office refurbishment with a focus on productivity and design.",
  },
  {
    title: "Commercial Office Refurbishment",
    category: "Commercial",
    service: "Refurbishment",
    location: "Canary Wharf, London",
    year: "2023",
    heroImage: "/project1.jpg",
    gallery: ["/project1.jpg", "/project1.jpg"],
    description:
      "Modern office refurbishment with a focus on productivity and design.",
  },
  {
    title: "Commercial Office Refurbishment",
    category: "Commercial",
    service: "Refurbishment",
    location: "Canary Wharf, London",
    year: "2023",
    heroImage: "/project1.jpg",
    gallery: [
      "/project1.jpg",
      "/project1.jpg",
      "/project1.jpg",
      "/project1.jpg",
    ],
    description:
      "Modern office refurbishment with a focus on productivity and design.",
  },
];

const projects = rawProjects.map((project, index) => ({
  ...project,
  slug: `project${index + 1}-${slugify(project.title)}`, // guarantees uniqueness
}));

export default projects;
