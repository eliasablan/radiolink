import React from 'react';
import { ProductTypeCard } from './product-type-card';

const productTypes = [
  {
    title: 'Radios Portátiles, Vehiculares y Fijos',
    imagePath: '/productos/radios-portatiles-vehiculares.jpg',
    link: '/products/radios',
  },
  {
    title: 'Sistemas de Radio',
    imagePath: '/productos/sistemas-motorola-radiocomunicacion.jpg',
    link: '/products/systems',
  },
  {
    title: 'Extensión de Cobertura Celular y Radios',
    imagePath: '/productos/cobertura-antena.jpg',
    link: '/products/coverage',
  },
  {
    title: 'Accesorios de Radios Profesionales',
    imagePath: '/productos/accesorio-motorola.jpg',
    link: '/products/accessories',
  },
];

export function ProductTypes() {
  return (
    <section className="pt-8">
      <div className="container">
        {/* <h2 className="mb-8 text-center text-3xl font-bold">
          Nuestros Productos
        </h2> */}
        <div className="grid gap-8 md:grid-cols-4">
          {productTypes.map((type) => (
            <ProductTypeCard key={type.title} {...type} />
          ))}
        </div>
      </div>
    </section>
  );
}
