'use client'

import React from 'react'
import Image from 'next/image'

export function HistoryBanner() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 bg-primary px-4 py-16 md:px-20 lg:px-32 lg:py-24">
      <div className="container flex items-center justify-center gap-8">
        <Image
          src="/square-placeholder.jpg"
          alt="Historia de Radiolink"
          width={400}
          height={300}
        />
        <div className="flex flex-col gap-4">
          <span className="font-semibold tracking-tight">
            Innovación en el mercado de telecomunicaciones
          </span>
          <h2 className="track text-5xl font-extrabold">
            Historia de Radiolink
          </h2>
          <p className="text-balance">
            Radiolink fue fundada en 2018 por el equipo de RadioTelefónica
            del Estado de México. Desde entonces, ha estado trabajando en
            el desarrollo de soluciones tecnológicas para mejorar la
            experiencia de los consumidores en el mercado de
            telecomunicaciones.
          </p>
        </div>
      </div>
    </div>
  )
}
