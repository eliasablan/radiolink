import React from 'react';
import { CategoryCard } from './category-card';

const categories = [
  {
    title: 'PROTOCOLO Y SEGURIDAD',
    imagePath: '/servicios/hotel.jpg',
    link: '/categories/security',
  },
  {
    title: 'PRESERVACIÓN DE LA VIDA',
    imagePath: '/servicios/waukeshaw.jpg',
    link: '/categories/life-preservation',
  },
  {
    title: 'DEFENSA NACIONAL',
    imagePath: '/servicios/washington.jpg',
    link: '/servicios/national-defense',
  },
  {
    title: 'HOTELERÍA',
    imagePath: '/servicios/airport.jpg',
    link: '/servicios/hospitality',
  },
  {
    title: 'LOGÍSTICA Y ORGANIZACIÓN',
    imagePath: '/servicios/enterprise.jpg',
    link: '/servicios/logistics',
  },
  {
    title: 'SEGURIDAD NACIONAL',
    imagePath: '/servicios/policia.jpg',
    link: '/servicios/national-security',
  },
  {
    title: 'SERVICIOS PÚBLICOS',
    imagePath: '/servicios/callaway.jpg',
    link: '/servicios/public-services',
  },
  {
    title: 'INDUSTRIA E HIDROCARBUROS',
    imagePath: '/servicios/oil.jpg',
    link: '/servicios/industry',
  },
  {
    title: 'COMERCIO Y PYMES',
    imagePath: '/servicios/comercio.jpg',
    link: '/servicios/commerce',
  },
  {
    title: 'PROTECCIÓN CIVIL',
    imagePath: '/servicios/proteccion.jpg',
    link: '/servicios/civil-protection',
  },
];

export function CategoriesGrid() {
  return (
    <section className="container pt-8">
      {/* <h2 className="mb-8 text-center text-3xl font-bold">
        Nuestras Soluciones
      </h2> */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </div>
    </section>
  );
}
