'use client';

import { motion } from 'framer-motion';
import aboutContent from '@/data/about-content.json';
import { resolveImage } from '@/lib/images';
import OptimizedImage from '@/components/shared/optimized-image';

export default function BrandIdentity() {
  const { brandIdentity } = aboutContent;
  const imageSrc = resolveImage('about', brandIdentity.imageKey);

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              {brandIdentity.eyebrow}
            </p>
            <h2 className="font-heading text-3xl font-light text-charcoal md:text-4xl lg:text-5xl">
              {brandIdentity.titleLine1}
              <br />
              <span className="italic text-gold">{brandIdentity.titleLine2}</span>
            </h2>
            <div className="mt-6 space-y-4">
              {brandIdentity.body.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-warm-gray">
                  {para}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <OptimizedImage
                src={imageSrc}
                alt="Viritia brand identity"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 font-heading text-lg italic text-white/90">
                {brandIdentity.imageOverlay}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
