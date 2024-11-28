import React from 'react';
import Image from 'next/image';

interface ClientLogoProps {
  name: string;
  logo: string;
}

export function ClientLogo({ name, logo }: ClientLogoProps) {
  return (
    <div className="flex items-center justify-center p-4">
      <Image
        src={logo}
        alt={`${name} logo`}
        width={120}
        height={60}
        className="h-24 w-auto object-contain"
      />
    </div>
  );
}
