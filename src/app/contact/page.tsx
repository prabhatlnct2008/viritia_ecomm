import ContactHero from '@/components/contact/contact-hero';
import ContactPanel from '@/components/contact/contact-panel';
import InquiryForm from '@/components/contact/inquiry-form';
import PurchaseNote from '@/components/contact/purchase-note';

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <div className="grid gap-8 md:grid-cols-5">
            <div className="md:col-span-2">
              <ContactPanel />
            </div>
            <div className="md:col-span-3">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
      <PurchaseNote />
    </>
  );
}
