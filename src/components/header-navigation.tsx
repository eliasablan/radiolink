'use client';

import { useSearch } from './search-provider';
import Link from 'next/link';
import { Menu } from '@/lib/shopify/types';
import { cn } from '@/lib/utils';

export default function Navigation({ menu }: { menu: Menu[] }) {
  const { isSearchVisible } = useSearch();
  console.log({ isSearchVisible });

  return (
    <nav className={cn('hidden md:block', isSearchVisible && '!hidden')}>
      <ul className="flex items-center gap-8">
        {menu.map((item) => (
          <li
            className="text-sm font-medium underline-offset-4 hover:underline"
            key={item.title}
          >
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
