import { HeroSlider } from '@/components/hero-slider';
import { HistoryBanner } from '@/components/history-banner';
import { Services } from '@/components/services';
import { Testimonials } from '@/components/testimonials';
import ProductCard from '@/components/product-card';

import { getCollectionProducts } from '@/lib/shopify';

export default async function Home() {
  const featuredItemsProducts = await getCollectionProducts({
    collection: 'hidden-homepage-featured-items',
  });

  return (
    <>
      <HeroSlider />
      <HistoryBanner />
      <div className="container grid gap-8 py-16 md:grid-cols-3">
        {featuredItemsProducts.map((product) => (
          <ProductCard
            key={product.id}
            loading="lazy"
            product={product}
            src={product.featuredImage?.url}
            alt={product.title}
            sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        ))}
      </div>
      <Services />
      <Testimonials />
    </>
  );
}
