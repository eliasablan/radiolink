import React from 'react';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { Octagon } from 'lucide-react';

import { getMenu, getCart } from '@/lib/shopify';
import { Menu } from '@/lib/shopify/types';

import MobileMenu from './mobile-menu';
import Cart from './mobile-cart';

export default async function Header() {
  const menu = await getMenu('main-menu');
  const cartId = cookies().get('cartId')?.value;
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }
  return (
    <header className="sticky top-0 z-10 w-full bg-primary">
      <div className="container flex h-14 items-center justify-between">
        <MobileMenu menu={menu} />
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
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {menu?.map((item: Menu) => (
              <li
                className="text-sm font-medium underline-offset-4 hover:underline"
                key={item.title}
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
            <li className="h-5">
              <Cart logoSize={20} cart={cart} className="mb-1.5" />
            </li>
          </ul>
        </nav>
        <Cart cart={cart} className="block md:hidden" />
      </div>
    </header>
  );
}
