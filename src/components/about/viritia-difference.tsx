'use client';

import { motion } from 'framer-motion';
import aboutContent from '@/data/about-content.json';
import { resolveImage } from '@/lib/images';
import OptimizedImage from '@/components/shared/optimized-image';
import SectionHeading from '@/components/shared/section-heading';

export default function ViritiaDifference() {
  return (
    <section className="bg-light-beige py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          eyebrow="What Sets Us Apart"
          title="The Viritia Difference"
          subtitle="Our commitment to excellence shows in every detail."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {aboutContent.difference.map((item, i) => {
            const imageSrc = resolveImage('about', item.imageKey);
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="overflow-hidden rounded-xl bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <OptimizedImage
                    src={imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-charcoal">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
