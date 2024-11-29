import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/shopify/types';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function ProductCard({
  product,
  tooltip = false,
  className,
  ...props
}: {
  product: Product;
  tooltip?: boolean;
  className?: string;
} & React.ComponentProps<typeof Image>) {
  return (
    <Link
      href={`/productos/${product.handle}`}
      className={cn('group relative h-auto w-full @container', className)}
    >
      <Card className="flex aspect-auto h-full flex-col justify-between">
        <CardContent className="flex h-full items-center justify-center p-4">
          <div className="relative aspect-square h-full w-full overflow-hidden">
            {/* eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`, which is being enforced with TypeScript */}
            <Image
              className="h-auto bg-background object-cover transition-all ease-in group-hover:scale-105"
              fill
              {...props}
            />
          </div>
        </CardContent>
        <CardFooter className="flex h-14 justify-between gap-x-1 p-4 pt-0">
          {tooltip ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <h3 className="line-clamp-2">{product.title}</h3>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{product.title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <h3 className="line-clamp-2">{product.title}</h3>
          )}
          <p className="whitespace-nowrap rounded-full border bg-primary-foreground p-2 font-bold text-primary">
            {product.priceRange.maxVariantPrice.currencyCode === 'USD'
              ? '$'
              : product.priceRange.maxVariantPrice.currencyCode}{' '}
            {parseFloat(product.priceRange.maxVariantPrice.amount).toFixed(
              2
            )}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}
