'use client';

import { motion } from 'framer-motion';
import aboutContent from '@/data/about-content.json';
import SectionHeading from '@/components/shared/section-heading';

export default function StatsSection() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          eyebrow="Our Impact"
          title="Trusted by Elite Clientele"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutContent.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-white p-8 text-center shadow-sm"
            >
              <p className="font-heading text-4xl font-light text-gold">{stat.value}</p>
              <p className="mt-2 text-sm text-warm-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Retail locations */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Available In
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {aboutContent.retailLocations.map((loc) => (
              <span
                key={loc}
                className="rounded-full border border-border bg-white px-5 py-2 text-sm text-charcoal"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
