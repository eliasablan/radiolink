'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { useMediaQuery } from '@/hooks/use-media-query';

const sliderCards = [
  { src: '/carousel/engineering.jpg', alt: 'Slider 1' },
  { src: '/carousel/expansion.jpg', alt: 'Slider 2' },
  { src: '/carousel/integradores.jpg', alt: 'Slider 3' },
  { src: '/carousel/representatives.jpg', alt: 'Slider 4' },
  { src: '/carousel/servicio.jpg', alt: 'Slider 5' },
];

const mobileSliderCards = [
  { src: '/carousel/mobile/engineering.jpg', alt: 'Slider 1' },
  { src: '/carousel/mobile/expansion.jpg', alt: 'Slider 2' },
  { src: '/carousel/mobile/integradores.jpg', alt: 'Slider 3' },
  { src: '/carousel/mobile/representatives.jpg', alt: 'Slider 4' },
  { src: '/carousel/mobile/servicio.jpg', alt: 'Slider 5' },
];

export function HeroSlider() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (isMobile) {
    return (
      <Swiper
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Navigation, Autoplay]}
        className="container"
      >
        {mobileSliderCards.map((sliderImage, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <Image
                src={sliderImage.src}
                alt={sliderImage.alt}
                width={300}
                height={200}
                layout="responsive"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <Swiper
      navigation={true}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      modules={[Navigation, Autoplay]}
      className="container"
    >
      {sliderCards.map((sliderImage, index) => (
        <SwiperSlide key={index}>
          <div className="relative">
            <Image
              src={sliderImage.src}
              alt={sliderImage.alt}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
