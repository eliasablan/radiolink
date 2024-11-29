import React from 'react';
import Link from 'next/link';
import { cookies } from 'next/headers';
import {
  // Octagon,
  Phone,
  Mail,
} from 'lucide-react';
import { PiWhatsappLogo } from 'react-icons/pi';

import { getMenu, getCart } from '@/lib/shopify';

import MobileMenu from './mobile-menu';
import Cart from './mobile-cart';
import SearchToggle from './search-toggle';
import Navigation from './header-navigation';
import { SearchProvider } from './search-provider';
import Image from 'next/image';

export default async function Header() {
  const menu = await getMenu('header');
  const cartId = cookies().get('cartId')?.value;
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }
  return (
    <SearchProvider>
      <div className="w-full bg-foreground text-background">
        <p className="flex flex-wrap items-center justify-center gap-2 text-pretty px-2 py-1 text-center text-xs font-semibold">
          <a href="tel:584242728990" className="flex items-center gap-2">
            <Phone size={12} strokeWidth={2} />
            Teléfono: +58 (424) 2188996
          </a>
          <span className="-pt-px pb-px font-extrabold">|</span>
          <a
            href="https://api.whatsapp.com/send?phone=584242728990&text=Hola!"
            className="flex items-center gap-2"
          >
            <PiWhatsappLogo size={15} strokeWidth={2} />
            WhatsApp: +58 (424) 2188996
          </a>
          <span className="-pt-px pb-px font-extrabold">|</span>
          <a
            href="mailto:johndoe@fakeemail.com"
            className="flex items-center gap-2"
          >
            <Mail size={14} strokeWidth={2} />
            radiolink01@gmail.com
          </a>
        </p>
      </div>
      <header className="sticky top-0 z-10 w-full bg-primary text-primary-foreground">
        <div className="container flex h-14 items-center justify-between gap-4">
          {/* Menú móvil */}
          <MobileMenu menu={menu} />

          {/* Logo */}
          <div className="group">
            <Link
              href="/"
              className="flex items-center gap-3 text-xl font-semibold"
            >
              <Image
                src="/header-logo.jpg"
                alt={process.env.SITE_NAME!}
                width={90}
                height={56}
                className="object-cover"
              />
              {/* <Octagon size={35} />
              <p className="transition-all duration-300 ease-out group-hover:text-accent">
                {process.env.SITE_NAME}
              </p> */}
            </Link>
          </div>

          {/* Navegación */}
          <Navigation menu={menu} />

          {/* Controles a la derecha */}
          <div className="flex items-center gap-4">
            {/* Botón de búsqueda a la izquierda del carrito */}
            <SearchToggle className="hidden md:block" />
            <Cart cart={cart} logoSize={20} className="block" />
          </div>
        </div>
      </header>
    </SearchProvider>
  );
}
