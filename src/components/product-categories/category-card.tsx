import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';

interface CategoryCardProps {
  title: string;
  imagePath: string;
  link: string;
}

export function CategoryCard({
  title,
  imagePath,
  link,
}: CategoryCardProps) {
  return (
    <div
      className="relative h-48 overflow-hidden rounded-lg"
      style={{
        backgroundImage: `url(${imagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50">
        <div className="flex h-full flex-col items-center justify-center p-4 text-white">
          <h3 className="mb-4 text-xl font-bold">{title}</h3>
          <Link href={link}>
            <Button variant="secondary">Ver Requerimiento</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
