'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

const sliderCards = [
  {
    title: 'Soluciones Energéticas',
    description: 'Bienvenido a nuestra empresa.',
    src: '/slider1.png',
    alt: 'Slider 1',
  },
  {
    title: 'Innovadoras para todos',
    description: 'Optimiza el manejo de energía en tu hogar o negocio.',
    src: '/slider2.png',
    alt: 'Slider 2',
  },
];

export function HeroSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnFocusIn: true })
  );

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[plugin.current]}
      className="container w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {sliderCards.map((sliderImage, index) => (
          <CarouselItem key={index}>
            <div className="flex flex-col items-center justify-center p-6 md:flex-row">
              <div className="mx-4 flex flex-col justify-center gap-6 md:w-1/2">
                <h2 className="text-pretty text-5xl font-semibold">
                  {sliderImage.title}
                </h2>
                <p className="text-balance">{sliderImage.description}</p>
              </div>
              <Image
                src={sliderImage.src}
                alt={sliderImage.alt}
                width={400}
                height={300}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-10" />
      <CarouselNext className="absolute right-10" />
    </Carousel>
  );
}
