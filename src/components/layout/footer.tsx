import Link from 'next/link';
import Image from 'next/image';
import { resolveImage } from '@/lib/images';
import siteConfig from '@/data/site-config.json';

const exploreLinks = [
  { label: 'Home', href: '/' },
  { label: 'Collections', href: '/collections' },
  { label: 'Our Story', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Image
              src={resolveImage('brand', 'logoFooter')}
              alt="Viritia"
              width={140}
              height={48}
              className="mb-4 h-10 w-auto brightness-0 invert"
            />
            <p className="font-heading text-lg italic text-gold-light">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Premium bedsheets crafted for comfort, elegance, and timeless
              luxury. Transforming homes across India since {siteConfig.established}.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Explore
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Connect
            </h4>
            <ul className="space-y-3 text-sm">
              <li>{siteConfig.email}</li>
              <li>{siteConfig.whatsappNumber}</li>
              <li>{siteConfig.madeIn}</li>
              <li>Established {siteConfig.established}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Viritia. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
