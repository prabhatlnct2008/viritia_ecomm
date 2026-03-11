import contactContent from '@/data/contact-content.json';

export default function ContactHero() {
  return (
    <section className="bg-light-beige pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-gold">
          Get in Touch
        </p>
        <h1 className="font-heading text-4xl font-light text-charcoal md:text-5xl">
          {contactContent.heading}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-warm-gray">
          {contactContent.subtext}
        </p>
      </div>
    </section>
  );
}
