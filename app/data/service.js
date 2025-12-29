import {
  FaHome,
  FaRulerCombined,
  FaClipboardCheck,
  FaLeaf,
  FaPaintRoller,
  FaSearch,
  FaArrowsAltH,
  FaHistory,
  FaArrowUp,
  FaDoorOpen,
  FaHammer,
  FaSolarPanel,
  FaExpandAlt,
  FaCouch,
  FaDoorClosed,
  FaBoxOpen,
  FaShieldAlt,
  FaTruckMoving,
  FaWind,
  FaSnowflake,
  FaBuilding,
  FaTools,
} from "react-icons/fa";

const service = [
  {
    image: "/about-story.jpg",
    icon: <FaHome className="text-3xl" />,
    slug: "new-build-services",
    title: "New Build Services",
    shortDescription:
      "Complete construction of new residential and commercial properties from the ground up.",
    detailedDescription:
      "We specialize in creating new buildings from scratch across London, handling initial design, planning permissions, and final construction. Our team ensures high-quality craftsmanship, compliance with building regulations, and timely project delivery. Ideal for dream homes, offices, or commercial properties, blending aesthetics and functionality.",
    specialties: [
      {
        text: "Custom architectural design and planning",
        icon: <FaRulerCombined className="text-[#ff9326]" />,
      },
      {
        text: "Full project management from groundbreaking to completion",
        icon: <FaClipboardCheck className="text-[#ff9326]" />,
      },
      {
        text: "Sustainable building materials and energy-efficient solutions",
        icon: <FaLeaf className="text-[#ff9326]" />,
      },
    ],
  },
  {
    image: "/about-story.jpg",
    icon: <FaPaintRoller className="text-3xl" />,
    slug: "renovation-services",
    title: "Renovation Services",
    shortDescription:
      "Transform existing spaces with comprehensive renovation and remodeling services.",
    detailedDescription:
      "Our London-based renovation services refresh outdated or worn properties. We manage structural changes, interior redesigns, and full refurbishments while preserving your building’s integrity.",
    specialties: [
      {
        text: "Structural assessment and reinforcement",
        icon: <FaSearch className="text-[#ff9326]" />,
      },
      {
        text: "Interior layout reconfiguration",
        icon: <FaArrowsAltH className="text-[#ff9326]" />,
      },
      {
        text: "Period property restoration with modern finishes",
        icon: <FaHistory className="text-[#ff9326]" />,
      },
    ],
  },
  {
    image: "/loft.jpg",
    icon: <FaArrowUp className="text-3xl" />,
    slug: "loft-conversions",
    title: "Loft Conversions",
    shortDescription:
      "Convert unused loft space into functional and stylish living areas.",
    detailedDescription:
      "We convert underutilized lofts in London into bedrooms, offices, or leisure areas with structural expertise, insulation, and optimal natural light, increasing property value and usability.",
    specialties: [
      {
        text: "Dormer and mansard loft conversions",
        icon: <FaDoorOpen className="text-[#ff9326]" />,
      },
      {
        text: "Structural floor strengthening",
        icon: <FaHammer className="text-[#ff9326]" />,
      },
      {
        text: "Roof windows and skylight installations",
        icon: <FaSolarPanel className="text-[#ff9326]" />,
      },
    ],
  },
  {
    image: "/property.jpg",
    icon: <FaExpandAlt className="text-3xl" />,
    slug: "extension-services",
    title: "Extension Services",
    shortDescription:
      "Expand your living space with bespoke single or multi-story extensions.",
    detailedDescription:
      "Our extension services seamlessly integrate new spaces with existing buildings in London, enhancing functionality and property value with expert design and construction.",
    specialties: [
      {
        text: "Architectural integration with existing buildings",
        icon: <FaCouch className="text-[#ff9326]" />,
      },
      {
        text: "Open-plan living space solutions",
        icon: <FaArrowsAltH className="text-[#ff9326]" />,
      },
      {
        text: "Bi-fold and sliding door installations",
        icon: <FaDoorClosed className="text-[#ff9326]" />,
      },
    ],
  },
  {
    image: "/basement.jpg",
    icon: <FaBoxOpen className="text-3xl" />,
    slug: "basement-conversions",
    title: "Basement Conversions",
    shortDescription:
      "Create high-quality underground living or storage spaces.",
    detailedDescription:
      "We deliver safe, dry, and fully functional basement conversions using advanced waterproofing, structural underpinning, and ventilation solutions for London homes.",
    specialties: [
      {
        text: "Waterproofing and tanking systems",
        icon: <FaShieldAlt className="text-[#ff9326]" />,
      },
      {
        text: "Excavation and structural underpinning",
        icon: <FaTruckMoving className="text-[#ff9326]" />,
      },
      {
        text: "Ventilation and moisture control",
        icon: <FaWind className="text-[#ff9326]" />,
      },
    ],
  },
  {
    image: "/ac.jpg",
    icon: <FaSnowflake className="text-3xl" />,
    slug: "ac-installation",
    title: "AC Installation",
    shortDescription:
      "Professional air conditioning installation for residential and commercial properties.",
    detailedDescription:
      "Our AC installation services provide efficient, reliable, and energy-saving cooling solutions for London homes and businesses, with expert installation and post-installation support.",
    specialties: [
      {
        text: "Residential and commercial AC systems",
        icon: <FaBuilding className="text-[#ff9326]" />,
      },
      {
        text: "Energy-efficient cooling solutions",
        icon: <FaLeaf className="text-[#ff9326]" />,
      },
      {
        text: "Maintenance and after-installation support",
        icon: <FaTools className="text-[#ff9326]" />,
      },
    ],
  },
];

export default service;
