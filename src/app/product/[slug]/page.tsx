import { notFound } from 'next/navigation';
import { getProductBySlug, getAllProducts } from '@/lib/products';
import ProductGallery from '@/components/product/product-gallery';
import ProductInfo from '@/components/product/product-info';
import DeliveryStrip from '@/components/product/delivery-strip';
import RelatedProducts from '@/components/product/related-products';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return notFound();

  return (
    <>
      <section className="bg-cream pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <ProductGallery imageKeys={product.imageKeys} productName={product.name} />
            <ProductInfo product={product} />
          </div>
          <div className="mt-12">
            <DeliveryStrip />
          </div>
        </div>
      </section>
      <RelatedProducts product={product} />
    </>
  );
}
