import {
  FaHome,
  FaPaintRoller,
  FaArrowUp,
  FaExpandAlt,
  FaBoxOpen,
  FaBath,
  FaUtensils,
  FaFire,
  FaBolt,
  FaThermometerHalf,
  FaRulerCombined,
  FaClipboardCheck,
  FaLeaf,
  FaSearch,
  FaArrowsAltH,
  FaHistory,
  FaDoorOpen,
  FaCouch,
  FaDoorClosed,
  FaShieldAlt,
  FaWater,
  FaTruckMoving,
  FaWind,
  FaTint,
  FaToolbox,
  FaHammer,
  FaTools,
  FaOilCan,
  FaGasPump,
  FaExclamationTriangle,
  FaPlug,
  FaCertificate,
  FaLightbulb,
  FaSolarPanel,
  FaCogs,
  FaMobileAlt,
  FaSnowflake,
  FaBuilding,
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
      "We specialize in creating new buildings from scratch, handling everything from initial design and planning permissions to final construction and finishing. Our team manages the entire process, ensuring high-quality craftsmanship, adherence to building regulations, and timely completion. Whether you're looking to build your dream home or a commercial property, we deliver structures that combine aesthetic appeal with functional design.",
    specialties: [
      {
        text: "Custom architectural design and planning",
        icon: <FaRulerCombined className="text-[#ff9326]" />,
      },
      {
        text: "Full project management from ground-breaking to completion",
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
      "Our complete renovation services breathe new life into outdated or worn properties. We handle structural changes, interior redesign, and full refurbishments while maintaining the integrity of your existing building.",
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
      "We transform underutilized lofts into bedrooms, offices, or leisure spaces with expert structural work, insulation, and natural light optimization.",
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
      "Our extension services seamlessly blend new spaces with existing structures, increasing functionality and property value through thoughtful design and expert construction.",
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
      "We deliver safe, dry, and fully functional basement conversions using advanced waterproofing, structural underpinning, and ventilation solutions.",
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
      "Our AC installation services ensure optimal indoor comfort through efficient and reliable air conditioning systems. We assess your space, recommend suitable units, and provide expert installation with minimal disruption.",
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
