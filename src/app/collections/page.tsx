'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import CollectionHero from '@/components/collections/collection-hero';
import CollectionFilters from '@/components/collections/collection-filters';
import ProductGrid from '@/components/collections/product-grid';
import SizeGuide from '@/components/collections/size-guide';
import { getAllProducts, getProductsByCollection } from '@/lib/products';

function CollectionsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const collectionParam = searchParams.get('collection') || 'all';
  const [activeFilter, setActiveFilter] = useState(collectionParam);

  useEffect(() => {
    setActiveFilter(collectionParam);
  }, [collectionParam]);

  const handleFilterChange = (key: string) => {
    setActiveFilter(key);
    if (key === 'all') {
      router.push('/collections', { scroll: false });
    } else {
      router.push(`/collections?collection=${key}`, { scroll: false });
    }
  };

  const products =
    activeFilter === 'all' ? getAllProducts() : getProductsByCollection(activeFilter);

  return (
    <>
      <CollectionHero />
      <section className="bg-cream py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <CollectionFilters active={activeFilter} onChange={handleFilterChange} />
          <div className="mt-12">
            <ProductGrid products={products} />
          </div>
        </div>
      </section>
      <SizeGuide />
    </>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense>
      <CollectionsContent />
    </Suspense>
  );
}
