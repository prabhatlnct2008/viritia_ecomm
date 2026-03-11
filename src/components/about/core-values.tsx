'use client';

import { motion } from 'framer-motion';
import { Star, Heart, Leaf, Palette } from 'lucide-react';
import aboutContent from '@/data/about-content.json';
import SectionHeading from '@/components/shared/section-heading';

const icons = [Star, Heart, Leaf, Palette];

export default function CoreValues() {
  return (
    <section className="bg-charcoal py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          eyebrow="Our Foundation"
          title="Core Values"
          light
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutContent.coreValues.map((val, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-white/10 p-8 text-center"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold/20">
                  <Icon size={24} className="text-gold-light" />
                </div>
                <h3 className="font-heading text-xl text-white">{val.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
