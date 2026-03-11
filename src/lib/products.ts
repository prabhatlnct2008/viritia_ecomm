import productsData from '@/data/products.json';
import type { Product } from '@/types';

const products = productsData as Product[];

export function getAllProducts(): Product[] {
  return products.filter((p) => p.active);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.active && p.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug && p.active);
}

export function getProductsByCollection(collectionKey: string): Product[] {
  return products.filter((p) => p.collectionKey === collectionKey && p.active);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.collectionKey === product.collectionKey && p.active)
    .slice(0, limit);
}
