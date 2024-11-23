'use client'

import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'

const sliderCards = [
  {
    title: 'Soluciones Energéticas Innovadoras para todos',
    description:
      'Bienvenido a nuestra empresa, donde ofrecemos soluciones integrales en sistemas eléctricos, desde energía solar hasta grupos electrógenos. Descubre cómo nuestros productos y servicios pueden optimizar el manejo de energía en tu hogar o negocio.',
    src: '/slider1.png',
    alt: 'Slider 1',
  },
  {
    title: 'Soluciones Energéticas Innovadoras para todos',
    description:
      'Bienvenido a nuestra empresa, donde ofrecemos soluciones integrales en sistemas eléctricos, desde energía solar hasta grupos electrógenos. Descubre cómo nuestros productos y servicios pueden optimizar el manejo de energía en tu hogar o negocio.',
    src: '/slider2.png',
    alt: 'Slider 2',
  },
]

export function HeroSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnFocusIn: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="-mt-[60px] w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="overscroll-none">
        {sliderCards.map((sliderImage, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="border-none shadow-none">
                <CardContent className="container flex h-svh items-center justify-center p-6">
                  <div className="mx-4 flex h-svh w-1/2 flex-col justify-center gap-6">
                    <h2 className="text-pretty text-5xl font-semibold">
                      {sliderImage.title}
                    </h2>
                    <p className="text-balance">
                      {sliderImage.description}
                    </p>
                  </div>
                  <Image
                    src={sliderImage.src}
                    alt={sliderImage.alt}
                    width={400}
                    height={300}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-10" />
      <CarouselNext className="absolute right-10" />
    </Carousel>
  )
}
