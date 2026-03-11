'use client';

import Image from 'next/image';
import { isRemoteImage } from '@/lib/images';

type Props = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export default function OptimizedImage({ src, alt, fill, width, height, className, priority, sizes }: Props) {
  if (isRemoteImage(src)) {
    return fill ? (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes || '100vw'}
        unoptimized
      />
    ) : (
      <Image
        src={src}
        alt={alt}
        width={width || 800}
        height={height || 600}
        className={className}
        priority={priority}
        unoptimized
      />
    );
  }

  return fill ? (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      priority={priority}
      sizes={sizes || '100vw'}
    />
  ) : (
    <Image
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={className}
      priority={priority}
    />
  );
}
