'use client';

import React from 'react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function Services() {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto mb-12 text-center">
        <h2 className="text-pretty text-5xl font-semibold">
          Nuestros Servicios
        </h2>
        <p className="mt-4 text-balance text-lg">
          Descubre cómo podemos ayudarte a optimizar tus operaciones.
        </p>
      </div>
      <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex-col items-center">
            <Image
              src="/square-placeholder.jpg"
              height={400}
              width={400}
              alt="Servicio 1"
              className="mb-6 h-32 w-32 rounded-full object-cover"
            />
          </CardHeader>
          <CardContent>
            <h3 className="mb-4 text-xl font-semibold">
              Consultoría Energética
            </h3>
            <p className="text-balance text-sm">
              Optimizamos el uso de energía en tus instalaciones para
              reducir costos.
            </p>
            <Button className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-indigo-500/75 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              Leer más
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex-col items-center">
            <Image
              src="/square-placeholder.jpg"
              height={400}
              width={400}
              alt="Servicio 2"
              className="mb-6 h-32 w-32 rounded-full object-cover"
            />
          </CardHeader>
          <CardContent>
            <h3 className="mb-4 text-xl font-semibold">
              Soluciones Personalizadas
            </h3>
            <p className="text-balance text-sm">
              Diseñamos soluciones específicas para las necesidades de tu
              negocio.
            </p>
            <Button className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-indigo-500/75 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              Leer más
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex-col items-center">
            <Image
              src="/square-placeholder.jpg"
              height={400}
              width={400}
              alt="Servicio 3"
              className="mb-6 h-32 w-32 rounded-full object-cover"
            />
          </CardHeader>
          <CardContent>
            <h3 className="mb-4 text-xl font-semibold">
              Mantenimiento Preventivo
            </h3>
            <p className="text-balance text-sm">
              Garantizamos el rendimiento de tus equipos con mantenimientos
              regulares.
            </p>
            <Button className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-indigo-500/75 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              Leer más
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
