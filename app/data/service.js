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
  FaHome as FaRetrofit,
} from "react-icons/fa";

const service = [
  {
    image: "/about-story.jpg",
    icon: <FaHome className="text-3xl" />,
    slug: "New-Build-Construction",
    title: "New Build Construction",
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
    slug: "Complete-Renovation",
    title: "Complete Renovation",
    shortDescription:
      "Transform existing spaces with comprehensive renovation and remodeling services.",
    detailedDescription:
      "Our complete renovation services breathe new life into outdated or worn properties. We handle structural changes, interior redesign, and complete overhauls while maintaining the integrity of your existing building. Our renovation process includes careful planning, quality materials selection, and skilled execution to ensure your space meets modern standards while respecting its original character.",
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
        text: "Period property restoration with modern amenities",
        icon: <FaHistory className="text-[#ff9326]" />,
      },
    ],
  },
  {
    image: "/loft.jpg",
    icon: <FaArrowUp className="text-3xl" />,
    slug: "Loft-Conversion",
    title: "Loft Conversion",
    shortDescription:
      "Maximize your home's potential by converting unused loft space into functional living areas.",
    detailedDescription:
      "Transform your underutilized attic into valuable living space with our expert loft conversion services. We specialize in creating additional bedrooms, home offices, playrooms, or entertainment areas. Our team handles structural considerations, insulation, lighting, and access solutions while ensuring compliance with building regulations and maximizing the potential of your roof space.",
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
        text: "Natural light optimization with roof windows",
        icon: <FaSolarPanel className="text-[#ff9326]" />,
      },
    ],
  },
  {
    image: "/propert.jpg",
    icon: <FaExpandAlt className="text-3xl" />,
    slug: "Property-Extension",
    title: "Property Extension",
    shortDescription:
      "Expand your living space with custom-designed single or multi-story extensions.",
    detailedDescription:
      "Increase your property's square footage and functionality with carefully planned extensions. Whether you need additional living space, a larger kitchen, or extra bedrooms, we design and build extensions that seamlessly integrate with your existing property. Our services include foundation work, structural connections, and interior finishing to create harmonious additions that enhance both your lifestyle and property value.",
    specialties: [
      {
        text: "Seamless architectural integration with existing structures",
        icon: <FaCouch className="text-[#ff9326]" />,
      },
      {
        text: "Open-plan living space creation",
        icon: <FaArrowsAltH className="text-[#ff9326]" />,
      },
      {
        text: "Bi-fold door installations for indoor-outdoor flow",
        icon: <FaDoorClosed className="text-[#ff9326]" />,
      },
    ],
  },
  {
    image: "/basement.jpg",
    icon: <FaBoxOpen className="text-3xl" />,
    slug: "Basement-Construction",
    title: "Basement Construction",
    shortDescription:
      "Create additional underground living or storage space with professional basement construction.",
    detailedDescription:
      "Unlock valuable square footage beneath your property with our specialized basement construction services. We handle complex excavation, waterproofing, and structural work to create secure, dry, and functional underground spaces. Whether for additional living areas, home theaters, wine cellars, or storage, we ensure proper ventilation, lighting, and accessibility in every basement project.",
    specialties: [
      {
        text: "Waterproof tanking systems and drainage solutions",
        icon: <FaShieldAlt className="text-[#ff9326]" />,
      },
      {
        text: "Structural underpinning and excavation",
        icon: <FaTruckMoving className="text-[#ff9326]" />,
      },
      {
        text: "Below-ground ventilation and moisture control",
        icon: <FaWind className="text-[#ff9326]" />,
      },
    ],
  },
  {
    image: "/bathroom.jpg",
    icon: <FaBath className="text-3xl" />,
    slug: "Bathroom-Installation",
    title: "Bathroom Installation",
    shortDescription:
      "Design and install beautiful, functional bathrooms tailored to your needs.",
    detailedDescription:
      "Create your perfect sanctuary with our comprehensive bathroom services. From complete installations to renovations, we handle plumbing, tiling, electrical work, and finishing. We work with you to design bathrooms that combine luxury, functionality, and efficient use of space, using quality fixtures and materials that ensure durability and aesthetic appeal.",
    specialties: [
      {
        text: "Wet room installations and waterproofing",
        icon: <FaTint className="text-[#ff9326]" />,
      },
      {
        text: "Underfloor heating systems",
        icon: <FaThermometerHalf className="text-[#ff9326]" />,
      },
      {
        text: "Custom vanity and storage solutions",
        icon: <FaToolbox className="text-[#ff9326]" />,
      },
    ],
  },
  {
    image: "/kitchen.jpg",
    icon: <FaUtensils className="text-3xl" />,
    slug: "Kitchen-Design",
    title: "Kitchen Design",
    shortDescription:
      "Create functional, stylish kitchens with custom design and professional installation.",
    detailedDescription:
      "We design and build kitchens that are both beautiful and practical, serving as the heart of your home. Our services include layout planning, cabinetry installation, appliance fitting, and finishing work. We focus on creating efficient work triangles, ample storage, and durable surfaces that withstand daily use while maintaining aesthetic appeal.",
    specialties: [
      {
        text: "Custom cabinetry and storage solutions",
        icon: <FaToolbox className="text-[#ff9326]" />,
      },
      {
        text: "Professional appliance installation and plumbing",
        icon: <FaTools className="text-[#ff9326]" />,
      },
      {
        text: "Stone worktops and quality finishes",
        icon: <FaRulerCombined className="text-[#ff9326]" />,
      },
    ],
  },
  {
    image: "/gas.jpg",
    icon: <FaFire className="text-3xl" />,
    slug: "Gas-Safe-Registered-Services",
    title: "Gas Safe Registered Services",
    shortDescription:
      "Certified gas installation, repair, and maintenance by registered Gas Safe engineers.",
    detailedDescription:
      "Our Gas Safe registered engineers provide safe, compliant gas work for residential and commercial properties. We handle boiler installations, gas appliance fitting, pipework, safety checks, and repairs. All work is carried out to the highest safety standards with proper certification, ensuring your gas systems are efficient, reliable, and compliant with UK regulations.",
    specialties: [
      {
        text: "Boiler installation and servicing",
        icon: <FaOilCan className="text-[#ff9326]" />,
      },
      {
        text: "Gas appliance safety certification",
        icon: <FaGasPump className="text-[#ff9326]" />,
      },
      {
        text: "Emergency gas repair services",
        icon: <FaExclamationTriangle className="text-[#ff9326]" />,
      },
    ],
  },
  {
    image: "/wires.jpg",
    icon: <FaBolt className="text-3xl" />,
    slug: "NICEIC-Electrical-Services",
    title: "NICEIC Electrical Services",
    shortDescription:
      "Certified electrical installation, testing, and certification by NICEIC registered contractors.",
    detailedDescription:
      "As NICEIC registered contractors, we provide professional electrical services for all types of properties. Our certified electricians handle everything from complete rewires and consumer unit upgrades to lighting installations and electrical testing. We ensure all work complies with current wiring regulations and provide proper certification for insurance and safety purposes.",
    specialties: [
      {
        text: "Full property rewiring and consumer unit upgrades",
        icon: <FaPlug className="text-[#ff9326]" />,
      },
      {
        text: "Periodic inspection and testing with certification",
        icon: <FaCertificate className="text-[#ff9326]" />,
      },
      {
        text: "Smart home and lighting system installations",
        icon: <FaLightbulb className="text-[#ff9326]" />,
      },
    ],
  },
  {
    image: "/heating.jpg",
    icon: <FaThermometerHalf className="text-3xl" />,
    slug: "Underfloor-Heating-Systems",
    title: "Underfloor Heating Systems",
    shortDescription:
      "Install efficient, space-saving underfloor heating for comfortable, even warmth.",
    detailedDescription:
      "Transform your heating system with our professional underfloor heating installation services. We provide both electric and water-based systems that offer efficient, evenly distributed warmth while freeing up wall space. Our installations include proper insulation, control systems, and integration with your existing heating, ensuring optimal performance and energy efficiency.",
    specialties: [
      {
        text: "Wet and electric system installations",
        icon: <FaCogs className="text-[#ff9326]" />,
      },
      {
        text: "Thermostat zoning and smart controls",
        icon: <FaMobileAlt className="text-[#ff9326]" />,
      },
      {
        text: "Retrofit solutions for existing properties",
        icon: <FaRetrofit className="text-[#ff9326]" />,
      },
    ],
  },
];

export default service;
