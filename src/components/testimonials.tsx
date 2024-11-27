import React from 'react';
import Image from 'next/image';

import { Card, CardContent, CardHeader } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Juan Pérez',
    role: 'Cliente Satisfecho',
    message:
      'Radiolink transformó la forma en que manejo mis comunicaciones. Su equipo es increíble y siempre están dispuestos a ayudar.',
    image: '/square-placeholder.jpg',
  },
  {
    name: 'María López',
    role: 'Propietaria de Negocio',
    message:
      'La solución energética que proporcionaron fue exactamente lo que necesitaba para mi empresa. ¡Altamente recomendados!',
    image: '/square-placeholder.jpg',
  },
  {
    name: 'Carlos García',
    role: 'Ingeniero de TI',
    message:
      'He trabajado con varios proveedores, pero Radiolink se destaca por su innovación y soporte técnico impecable.',
    image: '/square-placeholder.jpg',
  },
];

export function Testimonials() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-8 text-4xl font-bold text-gray-800">
          Testimonios
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col items-center">
              <CardHeader>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={96} // Tamaño en píxeles (w-24 equivalente en Tailwind)
                  height={96} // Tamaño en píxeles (h-24 equivalente en Tailwind)
                  className="mb-4 rounded-full object-cover"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="mt-4 italic text-gray-600">
                  {testimonial.message}
                </p>
              </CardContent>
            </Card>
          ))}
          {/* {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={96} // Tamaño en píxeles (w-24 equivalente en Tailwind)
                height={96} // Tamaño en píxeles (h-24 equivalente en Tailwind)
                className="mb-4 rounded-full object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
              <p className="mt-4 italic text-gray-600">
                {testimonial.message}
              </p>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
