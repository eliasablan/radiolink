'use client';

import { useSearch } from './search-provider';
import Link from 'next/link';
import { Menu } from '@/lib/shopify/types';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function Navigation({ menu }: { menu: Menu[] }) {
  const { isSearchVisible } = useSearch();
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className={cn('hidden md:block', isSearchVisible && '!hidden')}>
      <ul className="flex items-center gap-6">
        {menu.map((item) => (
          <li
            className={cn(
              'text-center text-sm font-medium leading-4 underline-offset-2 hover:underline',
              isActive(item.path) && 'underline'
            )}
            key={item.title}
          >
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
