'use client';

import { motion } from 'framer-motion';
import { Gem, Scissors, Home, Palette } from 'lucide-react';
import homeContent from '@/data/home-content.json';
import SectionHeading from '@/components/shared/section-heading';

const icons = [Gem, Scissors, Home, Palette];

export default function BrandValues() {
  return (
    <section className="bg-light-beige py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          eyebrow="The Viritia Promise"
          title="Why Choose Viritia"
          subtitle="Every detail reflects our commitment to quality, comfort, and timeless design."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {homeContent.brandValues.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                  <Icon size={24} className="text-gold" />
                </div>
                <h3 className="font-heading text-xl text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
