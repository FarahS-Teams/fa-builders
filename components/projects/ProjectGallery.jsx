"use client";
// Have to add Transition on image navigation

import { useState, useEffect } from "react";
import Image from "next/image";

const ProjectGallery = ({ images, autoPlay = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [imageLoaded, setImageLoaded] = useState(false);

  const length = images.length;

  // Autoplay
  useEffect(() => {
    if (!autoPlay || isLightboxOpen) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % length);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, length, autoPlay, interval, isLightboxOpen]);

  const prevSlide = () => setCurrentIndex((currentIndex - 1 + length) % length);
  const nextSlide = () => setCurrentIndex((currentIndex + 1) % length);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => setIsLightboxOpen(false);

  const prevLightbox = () =>
    setLightboxIndex((lightboxIndex - 1 + length) % length);
  const nextLightbox = () => setLightboxIndex((lightboxIndex + 1) % length);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      {/* Carousel */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="min-w-full relative cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            {/* Skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 animate-pulse bg-gray-300/30 dark:bg-gray-700/30" />
            )}
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              width={800}
              height={500}
              onLoad={() => setImageLoaded(true)}
              className={`object-cover w-full h-64 md:h-80 rounded-md transition-transform duration-300 hover:scale-105 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-secondary w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-secondary/70 hover:text-white transition"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-secondary w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-secondary/70 hover:text-white transition"
      >
        &#10095;
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full cursor-pointer transition ${
              currentIndex === index
                ? "bg-secondary scale-125"
                : "bg-secondary/70"
            }`}
          ></span>
        ))}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white text-3xl font-bold z-50"
          >
            &times;
          </button>

          <button
            onClick={prevLightbox}
            className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-3xl z-50"
          >
            &#10094;
          </button>

          <div className="group">
            <Image
              src={images[lightboxIndex]}
              alt="Lightbox Image"
              width={1200}
              height={800}
              className="object-contain max-h-[90vh] transition-transform duration-500 ease-in-out transform scale-95 group-hover:scale-100"
            />
          </div>

          <button
            onClick={nextLightbox}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-3xl z-50"
          >
            &#10095;
          </button>

          {/* Lightbox Dots */}
          <div className="flex gap-2 mt-4">
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => setLightboxIndex(index)}
                className={`w-2 h-2 rounded-full cursor-pointer transition  ${
                  lightboxIndex === index
                    ? "bg-secondary scale-125"
                    : "bg-secondary/70"
                }`}
              ></span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
