import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '../ui/card';

interface ProductTypeCardProps {
  title: string;
  imagePath: string;
  link: string;
}

export function ProductTypeCard({
  title,
  imagePath,
  link,
}: ProductTypeCardProps) {
  return (
    <Link className="h-auto" href={link}>
      <Card className="group h-full rounded-none transition-all duration-300 hover:shadow-lg">
        <CardContent className="flex h-full flex-col items-center justify-center p-6">
          <div className="relative mb-4 h-32 w-32">
            <Image
              src={imagePath}
              alt={title}
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <p className="text-center leading-tight">{title}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
