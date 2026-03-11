'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import homeContent from '@/data/home-content.json';
import { resolveImage } from '@/lib/images';
import { getWhatsAppGeneralUrl } from '@/lib/whatsapp';
import OptimizedImage from '@/components/shared/optimized-image';

export default function CtaSection() {
  const { ctaSection } = homeContent;
  const bgImage = resolveImage('home', ctaSection.imageKey);

  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0">
        <OptimizedImage
          src={bgImage}
          alt="Viritia luxury"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
            {ctaSection.eyebrow}
          </p>
          <h2 className="font-heading text-3xl font-light text-white md:text-4xl lg:text-5xl">
            {ctaSection.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            {ctaSection.subtext}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href={ctaSection.primaryCta.href}
              className="inline-flex items-center bg-gold px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-gold-light"
            >
              {ctaSection.primaryCta.label}
            </Link>
            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-white/30 px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
            >
              {ctaSection.secondaryCta.label}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
