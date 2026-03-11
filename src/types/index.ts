export type Product = {
  id: string;
  slug: string;
  name: string;
  collection: 'Timeless Solids' | 'Print Story' | 'Soft Embroidery';
  collectionKey: 'timeless-solids' | 'print-story' | 'soft-embroidery';
  productSeriesKey: string;
  sku: string;
  size: 'Single' | 'Queen' | 'King';
  dimensions: string;
  color: string;
  fabric: string;
  weave: 'Sateen' | 'Percale';
  thread_count: number;
  pattern: string;
  sheet_type: 'Flat' | 'Fitted';
  mrp: number;
  selling_price: number;
  description: string;
  features: string[];
  imageKeys: string[];
  featured: boolean;
  active: boolean;
};

export type Collection = {
  key: string;
  name: string;
  fabric: string;
  weave: string;
  threadCount: number;
  description: string;
  primaryProductSlug: string;
};

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  collection: string;
  color: string;
  size: string;
  selling_price: number;
  quantity: number;
  imageKey: string;
};

export type InquiryForm = {
  name: string;
  email: string;
  phone?: string;
  product_interest?: string;
  message: string;
};

export type ImageRegistry = {
  brand: Record<string, string>;
  home: Record<string, string>;
  about: Record<string, string>;
  products: Record<string, string>;
};
