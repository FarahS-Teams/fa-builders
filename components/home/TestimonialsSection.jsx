"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import Badge from "../Badge";
import themeContext from "@/app/context/themeContext";
import { useContext } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import reviews from "@/app/data/reviews";
import { FaStar, FaRegStar } from "react-icons/fa";

const TestimonialsSection = () => {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error(
      "TestimonialsSection must be used within a ThemeContextProvider",
    );
  }

  const { theme, currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} custom-container px-4`}
      id="testimonials"
    >
      <div className="content">
        {/* main hading*/}
        <div className="text-center w-full">
          <Badge text={"Client Stories"} />
          <h2 className={`${currentTheme.headings}`}>
            What Our <span className="text-secondary">Clients</span> Say
          </h2>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides
            loop
            autoHeight={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper cursor-grab"
          >
            {reviews.map((elem, index) => (
              <SwiperSlide key={index} className="flex w-full h-auto">
                <div
                  className={`${currentTheme.card} rounded-xl flex flex-col w-full h-full`}
                >
                  {/* Quote Icon */}
                  <div className="text-secondary text-3xl mb-4">
                    <FaQuoteLeft />
                  </div>

                  {/* Review Text */}
                  <p className="leading-relaxed italic flex-1 mb-4">
                    "{elem.review}"
                  </p>

                  {/* Footer */}
                  <div className="border-t border-gray-700 py-4 flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) =>
                        i < elem.rating ? (
                          <FaStar key={i} className="text-secondary text-sm" />
                        ) : (
                          <FaRegStar
                            key={i}
                            className="text-secondary/40 text-sm"
                          />
                        ),
                      )}
                    </div>
                    <h4 className="font-bold text-lg">{elem.client}</h4>
                    <p className="text-secondary text-sm">{elem.project}</p>
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
