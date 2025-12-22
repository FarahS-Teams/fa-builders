"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Badge from "../Badge";
import themeContext from "@/app/context/themeContext";
import { useContext } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialsSection = () => {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error(
      "TestimonialsSection must be used within a ThemeContextProvider",
    );
  }

  const { theme, currentTheme } = context;

  const reviews = [
    {
      client: "John & Sarah Williams",
      project: "Home Renovation",
      review:
        "FA Builders transformed our outdated kitchen into a modern masterpiece! Their attention to detail was incredible. They completed the project 2 weeks ahead of schedule and stayed within our budget. Truly professional!",
      rating: 5,
    },
    {
      client: "Michael Rodriguez",
      project: "Commercial Builder",
      review:
        "We hired FA Builders for our office complex construction. Their project management was flawless - no delays, no hidden costs. Their team's expertise in commercial construction is unmatched in London.",
      rating: 5,
    },
    {
      client: "Emma Chen",
      project: "Extension Project",
      review:
        "Our house extension seemed daunting, but FA Builders made it stress-free. They handled all permits, kept the site clean, and communicated daily. The quality is outstanding - worth every penny!",
      rating: 5,
    },
    {
      client: "David & Priya Kapoor",
      project: "Complete Home Renovation",
      review:
        "From initial design to final touches, FA Builders exceeded our expectations. Their craftsmen are true artists. Our Victorian home now has modern amenities while keeping its historic charm intact.",
      rating: 5,
    },
    {
      client: "James Wilson",
      project: "Property Developer",
      review:
        "As a developer, I've worked with many contractors. FA Builders stand out for their reliability and quality. They've completed 3 projects for us - each delivered on time and above standards.",
      rating: 5,
    },
    {
      client: "Sophie Mitchell",
      project: "Loft Conversion",
      review:
        "Our loft conversion was complicated due to roof structure issues. FA Builders' engineers found innovative solutions we hadn't considered. They turned our cramped attic into a beautiful master suite!",
      rating: 5,
    },
    {
      client: "Ahmed Hassan",
      project: "Restaurant Build",
      review:
        "Building a restaurant during COVID was challenging, but FA Builders adapted quickly. They sourced materials creatively when supply chains were disrupted. Our restaurant opened on time thanks to their dedication.",
      rating: 5,
    },
    {
      client: "Robert & Lisa Thompson",
      project: "New Build Home",
      review:
        "Building our dream home from scratch was overwhelming, but FA Builders guided us through every step. Their 3D visualization helped us make decisions. The result? A home that perfectly matches our vision!",
      rating: 5,
    },
  ];

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} max-w-full overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-8 lg:py-9">
        {/* main hading*/}
        <div className="text-center mb-16">
          <Badge text={"Client Stories"} />
          <h2 className={`${currentTheme.headings}`}>
            What Our <span className="text-[#ff9326]">Clients</span> Say
          </h2>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper cursor-grab"
          >
            {reviews.map((elem, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`${currentTheme.card} p-6 md:p-8 rounded-xl mt-1 h-full`}
                >
                  {/* Quote Icon */}
                  <div className="text-[#ff9326] text-2xl mb-4">
                    <FaQuoteLeft />
                  </div>

                  {/* Review Text */}
                  <p className="mb-6 leading-relaxed italic">"{elem.review}"</p>

                  {/* Client Info */}
                  <div className="border-t border-gray-700 pt-4">
                    <h4 className="font-bold text-lg">{elem.client}</h4>
                    <p className="text-[#ff9326] text-sm">{elem.project}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
