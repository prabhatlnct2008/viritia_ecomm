'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import homeContent from '@/data/home-content.json';
import { resolveImage } from '@/lib/images';
import OptimizedImage from '@/components/shared/optimized-image';
import { getWhatsAppGeneralUrl } from '@/lib/whatsapp';

export default function HeroSection() {
  const { hero } = homeContent;
  const heroImage = resolveImage('home', hero.imageKey);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage
          src={heroImage}
          alt="Viritia luxury bedsheets"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
            {hero.eyebrow}
          </p>
          <h1 className="font-heading text-5xl font-light leading-[1.1] text-white md:text-6xl lg:text-7xl">
            {hero.headlineLine1}
            <br />
            <span className="italic text-gold-light">{hero.headlineLine2}</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
            {hero.subtext}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex items-center bg-gold px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-gold-light"
            >
              {hero.primaryCta.label}
            </Link>
            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-white/30 px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
