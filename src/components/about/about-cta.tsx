import Link from 'next/link';

export default function AboutCta() {
  return (
    <section className="bg-light-beige py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-gold">
          The Viritia Experience
        </p>
        <h2 className="font-heading text-3xl font-light text-charcoal md:text-4xl lg:text-5xl">
          Experience the Viritia Difference
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-warm-gray">
          Discover our curated collections of premium bedsheets crafted for those who choose elegance.
        </p>
        <div className="mt-10">
          <Link
            href="/collections"
            className="inline-flex items-center bg-gold px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-gold-light"
          >
            Explore Our Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
