import { HeroSlider } from '@/components/hero-slider';
import { ProductTypes } from '@/components/products/product-types';
import { CategoriesGrid } from '@/components/product-categories/categories-grid';
import { ClientsSection } from '@/components/clients/clients-section';

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <ProductTypes />
      <CategoriesGrid />
      <ClientsSection />
    </main>
  );
}
