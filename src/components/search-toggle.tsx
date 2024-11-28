'use client';

import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

import { Input } from './ui/input';
import { useSearch } from './search-provider';

export default function SearchToggle({
  className,
}: {
  className?: string;
}) {
  const { isSearchVisible, toggleSearch } = useSearch();

  return (
    <div className={cn('flex items-center', className)}>
      {isSearchVisible ? (
        <div className="flex items-center gap-4">
          {/* Campo de búsqueda */}
          <Input
            size={36}
            type="text"
            placeholder="Buscar..."
            className="placeholder:text-primary-foreground"
          />
          <X
            onClick={() => toggleSearch(false)}
            className="size-5 cursor-pointer"
          />
        </div>
      ) : (
        <Search
          strokeWidth={2}
          onClick={() => toggleSearch(true)}
          className="size-5 cursor-pointer"
        />
      )}
    </div>
  );
}
