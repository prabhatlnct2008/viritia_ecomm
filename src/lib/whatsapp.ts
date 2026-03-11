import siteConfig from '@/data/site-config.json';
import type { CartItem, Product } from '@/types';

const WHATSAPP_NUMBER = siteConfig.whatsappNumberRaw;

export function generateProductMessage(product: Product): string {
  return `Hi Viritia! I'm interested in buying:
*${product.name}*
Collection: ${product.collection}
Color: ${product.color}
Size: ${product.size}
Price: ₹${product.selling_price.toLocaleString('en-IN')}
Please share availability and order details.`;
}

export function generateCartMessage(items: CartItem[]): string {
  const itemLines = items
    .map(
      (item, i) =>
        `${i + 1}. ${item.name} | Collection: ${item.collection} | Color: ${item.color} | Size: ${item.size} | Qty: ${item.quantity} | Price: ₹${item.selling_price.toLocaleString('en-IN')}`
    )
    .join('\n');

  return `Hi Viritia! I'm interested in the following items:
${itemLines}
Please share availability and order details.`;
}

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppProductUrl(product: Product): string {
  return getWhatsAppUrl(generateProductMessage(product));
}

export function getWhatsAppCartUrl(items: CartItem[]): string {
  return getWhatsAppUrl(generateCartMessage(items));
}

export function getWhatsAppGeneralUrl(): string {
  return getWhatsAppUrl('Hi Viritia! I would like to know more about your premium bedsheet collections.');
}
