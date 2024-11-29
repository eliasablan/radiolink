import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <>
      {/* Radios Portátiles Motorola */}
      <div className="w-full bg-primary">
        <div className="container py-12">
          <h2 className="text-4xl font-semibold uppercase text-primary-foreground">
            Accesorios Radios Motorola
          </h2>
          <h3 className="text-2xl font-semibold text-foreground">
            Disfrute toda la gama de radios accesorios Mototrbo.
          </h3>
          <Button
            variant="gooeyRight"
            className="mt-4 border font-semibold"
            asChild
          >
            <Link href="/contacto">
              No se quede sin señal, contáctenos
            </Link>
          </Button>
        </div>
      </div>
      <div className="container grid gap-4 py-12 md:grid-cols-5">
        {/* {portatiles.map((product) => (
            <ProductCard
              key={product.id}
              loading="lazy"
              product={product}
              src={product.featuredImage?.url}
              alt={product.title}
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          ))} */}
      </div>
    </>
  );
}
