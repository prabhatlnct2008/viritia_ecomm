'use client';

import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import aboutContent from '@/data/about-content.json';
import SectionHeading from '@/components/shared/section-heading';

export default function PackagingSection() {
  const { packaging } = aboutContent;

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
        <SectionHeading
          eyebrow="Premium Experience"
          title={packaging.title}
          subtitle={packaging.description}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gold/10"
        >
          <Gift size={40} className="text-gold" />
        </motion.div>
      </div>
    </section>
  );
}
