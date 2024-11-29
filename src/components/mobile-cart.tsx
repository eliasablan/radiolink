'use client';

import React from 'react';
import { ShoppingCart } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Cart as CartType } from '@/lib/shopify/types';

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import CartSheet from './cart-sheet';

export default function MobileCart({
  cart,
  className,
  logoSize = 16,
}: {
  cart: CartType | undefined;
  className?: string;
  logoSize?: number;
}) {
  return (
    <div className={cn(className)}>
      <Sheet>
        <SheetTrigger asChild>
          <button
            className={cn(
              'relative flex items-center transition-all duration-300 ease-out hover:text-accent',
              cart?.totalQuantity && 'right-[6px]'
            )}
          >
            <ShoppingCart size={logoSize} />
            {cart?.totalQuantity ? (
              <span className="absolute -top-px right-0 -mr-2 -mt-2 aspect-square w-5 scale-75 rounded-full border bg-primary pt-[2px] font-mono text-sm leading-none text-primary-foreground">
                {cart.totalQuantity}
              </span>
            ) : null}
          </button>
        </SheetTrigger>
        <SheetContent className="w-11/12 sm:w-[540px]" side="right">
          <CartSheet cart={cart} />
        </SheetContent>
      </Sheet>
    </div>
  );
}
