export function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}`;
}

export function getProductUrl(slug: string): string {
  return `/product/${slug}`;
}

export function getCollectionFilterUrl(collectionKey?: string): string {
  if (!collectionKey) return '/collections';
  return `/collections?collection=${collectionKey}`;
}
