import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, ArrowRight } from 'lucide-react';
import { banners } from '../data/mockData';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % banners.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden bg-linear-to-br from-gray-900 to-gray-800">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide 
              ? 'opacity-100 translate-x-0' 
              : index < currentSlide 
              ? 'opacity-0 -translate-x-full' 
              : 'opacity-0 translate-x-full'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-linear-to-r ${banner.gradient} opacity-80`} />
          </div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              {/* Subtitle */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                <span className="text-white text-sm font-medium uppercase tracking-wider">
                  {banner.subtitle}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                {banner.title}
              </h2>

              {/* Description */}
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                {banner.description}
              </p>

              {/* Price and Discount */}
              <div className="flex items-end gap-6 mb-8">
                <div>
                  <p className="text-4xl font-bold text-white">
                    {banner.price}
                  </p>
                  <p className="text-yellow-400 font-medium mt-1">
                    {banner.discount}
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4">
                <button className="group bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center gap-3 shadow-2xl cursor-pointer">
                  <ShoppingBag className="w-5 h-5" />
                  {banner.buttonText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all border border-white/30 cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 p-4 rounded-full transition-all group cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 p-4 rounded-full transition-all group cursor-pointer"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all cursor-pointer ${
              index === currentSlide 
                ? 'w-12 h-3 bg-white' 
                : 'w-3 h-3 bg-white/50 hover:bg-white/70'
            } rounded-full`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
