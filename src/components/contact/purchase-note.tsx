import { MessageCircle } from 'lucide-react';
import contactContent from '@/data/contact-content.json';
import { getWhatsAppGeneralUrl } from '@/lib/whatsapp';

export default function PurchaseNote() {
  const { purchaseNote } = contactContent;

  return (
    <section className="bg-light-beige py-16">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
        <MessageCircle size={32} className="mx-auto mb-4 text-gold" />
        <h3 className="font-heading text-2xl text-charcoal">{purchaseNote.title}</h3>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-warm-gray">
          {purchaseNote.description}
        </p>
        <a
          href={getWhatsAppGeneralUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 bg-green-600 px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-green-700"
        >
          {purchaseNote.whatsappCta}
        </a>
      </div>
    </section>
  );
}
