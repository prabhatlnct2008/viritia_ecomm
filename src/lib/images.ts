import imageRegistry from '@/data/image-registry.json';
import type { ImageRegistry } from '@/types';

const registry = imageRegistry as ImageRegistry;

export function resolveImage(section: keyof ImageRegistry, key: string): string {
  const sectionMap = registry[section];
  if (!sectionMap || !(key in sectionMap)) {
    return '/images/brand/viritia-logo-transparent.png';
  }
  return sectionMap[key];
}

export function resolveProductImage(key: string): string {
  return registry.products[key] || '/images/brand/viritia-logo-transparent.png';
}

export function resolveProductImages(keys: string[]): string[] {
  return keys.map(resolveProductImage);
}

export function isRemoteImage(src: string): boolean {
  return src.startsWith('http://') || src.startsWith('https://');
}
