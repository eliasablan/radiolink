'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface SearchContextProps {
  isSearchVisible: boolean;
  toggleSearch: (state?: boolean) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(
  undefined
);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = (state?: boolean) => {
    setIsSearchVisible(state !== undefined ? state : !isSearchVisible);
  };

  return (
    <SearchContext.Provider value={{ isSearchVisible, toggleSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
