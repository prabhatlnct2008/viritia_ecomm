type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
};

export default function SectionHeading({ eyebrow, title, subtitle, centered = true, light = false }: Props) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className={`mb-3 text-xs font-medium uppercase tracking-[0.2em] ${light ? 'text-gold-light' : 'text-gold'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-heading text-3xl font-light leading-tight md:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-charcoal'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed ${light ? 'text-white/70' : 'text-warm-gray'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
