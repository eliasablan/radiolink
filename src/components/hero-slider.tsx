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

  const slides = isMobile ? mobileSliderCards : sliderCards;

  return (
    <div className="container relative mx-auto w-full overflow-hidden">
      <Swiper
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="w-full"
        style={{
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ['--swiper-navigation-size' as any]: '25px',
        }}
      >
        {slides.map((sliderImage, index) => (
          <SwiperSlide
            key={index}
            className="flex w-full items-center justify-center"
          >
            <div className="relative h-[400px] w-full sm:h-[500px] lg:h-[600px]">
              <Image
                src={sliderImage.src}
                alt={sliderImage.alt}
                layout="fill"
                sizes="(max-width: 768px) 100vw, 1200px"
                style={{ objectFit: 'contain' }} // Aseguramos que la imagen se muestre completa
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
