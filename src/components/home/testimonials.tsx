'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import homeContent from '@/data/home-content.json';
import SectionHeading from '@/components/shared/section-heading';

export default function Testimonials() {
  return (
    <section className="bg-light-beige py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          eyebrow="What Our Customers Say"
          title="Trusted by Discerning Homes"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {homeContent.testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl bg-white p-8 shadow-sm"
            >
              <Quote size={24} className="mb-4 text-gold/40" />
              <p className="font-heading text-lg italic leading-relaxed text-charcoal">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-medium text-charcoal">{t.name}</p>
                <p className="text-xs text-warm-gray">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
