import React from 'react';
import Link from 'next/link';
import { Menu as MenuIcon } from 'lucide-react';

import { Menu } from '@/lib/shopify/types';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import SearchBar from './search-bar';

export default function MobileMenu({
  menu,
}: {
  menu?: Menu[];
  className?: string;
}) {
  return (
    <div className="flex items-center md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="relative flex items-center transition-all duration-300 ease-out hover:text-accent">
            <MenuIcon />
          </button>
        </SheetTrigger>
        <SheetContent className="w-11/12 sm:w-[540px]" side="left">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <ul className="flex w-full flex-col gap-6 py-6">
            <li>
              <SearchBar />
            </li>
            {menu?.length &&
              menu.map((item) => (
                <li className="hover:text-primary" key={item.title}>
                  <SheetClose asChild>
                    <Link href={item.path}>{item.title}</Link>
                  </SheetClose>
                </li>
              ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}
