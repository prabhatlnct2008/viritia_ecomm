'use client';

import { motion } from 'framer-motion';
import aboutContent from '@/data/about-content.json';
import { resolveImage } from '@/lib/images';
import OptimizedImage from '@/components/shared/optimized-image';

export default function AboutHero() {
  const { hero } = aboutContent;
  const heroImage = resolveImage('about', hero.imageKey);

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage
          src={heroImage}
          alt="Our Story"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 text-center lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
            {hero.eyebrow}
          </p>
          <h1 className="font-heading text-4xl font-light text-white md:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            {hero.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
