'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCartStore } from '@/lib/cart-store';
import { resolveImage } from '@/lib/images';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Collections', href: '/collections' },
  { label: 'Our Story', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const itemCount = useCartStore((s) => s.getItemCount());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHeroPage = pathname === '/' || pathname === '/about';
  const showTransparent = isHeroPage && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showTransparent
            ? 'bg-transparent'
            : 'bg-cream/95 backdrop-blur-md shadow-sm'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          <Link href="/" className="relative z-10 shrink-0">
            <Image
              src={resolveImage('brand', 'logoPrimary')}
              alt="Viritia"
              width={280}
              height={90}
              className={`h-[80px] w-[280px] object-contain transition-all ${
                showTransparent ? 'brightness-0 invert' : ''
              }`}
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm tracking-wide transition-colors ${
                  pathname === link.href
                    ? 'text-gold font-medium'
                    : showTransparent
                      ? 'text-white/90 hover:text-white'
                      : 'text-charcoal hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className={`relative transition-colors ${
                showTransparent
                  ? 'text-white/90 hover:text-white'
                  : 'text-charcoal hover:text-gold'
              }`}
            >
              <ShoppingBag size={22} />
              {mounted && itemCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-medium text-white">
                  {itemCount}
                </span>
              )}
            </Link>

            <button
              className={`md:hidden transition-colors ${
                showTransparent ? 'text-white' : 'text-charcoal'
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-cream pt-20 md:hidden">
          <nav className="flex flex-col items-center gap-8 pt-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-heading text-2xl transition-colors ${
                  pathname === link.href ? 'text-gold' : 'text-charcoal hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cart"
              className="font-heading text-2xl text-charcoal hover:text-gold"
            >
              Cart {mounted && itemCount > 0 && `(${itemCount})`}
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
