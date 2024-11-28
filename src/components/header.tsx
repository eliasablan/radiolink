import React from 'react';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { Octagon, Phone, Mail } from 'lucide-react';

import { getMenu, getCart } from '@/lib/shopify';

import MobileMenu from './mobile-menu';
import Cart from './mobile-cart';
import SearchToggle from './search-toggle';
import Navigation from './header-navigation';
import { SearchProvider } from './search-provider';

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
          <a href="tel:+18475555555" className="flex items-center gap-2">
            <Phone size={12} strokeWidth={3} />
            Teléfono: +58 (424) 2188996
          </a>
          <span className="-pt-px pb-px font-extrabold">|</span>
          <a
            href="https://api.whatsapp.com/send?phone=584242728990&text=Hola!"
            className="flex items-center gap-2"
          >
            WhatsApp: +58 (424) 2188996
          </a>
          <span className="-pt-px pb-px font-extrabold">|</span>
          <a
            href="mailto:johndoe@fakeemail.com"
            className="flex items-center gap-2"
          >
            <Mail size={12} strokeWidth={3} />
            radiolink01@gmail.com
          </a>
        </p>
      </div>
      <header className="sticky top-0 z-10 w-full bg-primary text-primary-foreground">
        <div className="container flex h-14 items-center justify-between">
          {/* Menú móvil */}
          <MobileMenu menu={menu} />

          {/* Logo */}
          <div className="group">
            <Link
              href="/"
              className="flex items-center gap-x-4 text-xl font-semibold"
            >
              <Octagon size={35} />
              <p className="transition-all duration-300 ease-out group-hover:text-accent">
                {process.env.SITE_NAME}
              </p>
            </Link>
          </div>

          {/* Navegación */}
          <Navigation menu={menu} />

          {/* Controles a la derecha */}
          <div className="flex items-center gap-4">
            {/* Botón de búsqueda a la izquierda del carrito */}
            <SearchToggle className="hidden md:block" />
            <Cart cart={cart} className="block" />
          </div>
        </div>
      </header>
    </SearchProvider>
  );
}
