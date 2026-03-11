'use client';

import { useState } from 'react';
import type { InquiryForm } from '@/types';

export default function InquiryFormComponent() {
  const [form, setForm] = useState<InquiryForm>({
    name: '',
    email: '',
    phone: '',
    product_interest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl bg-white p-10 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <span className="text-2xl">✓</span>
        </div>
        <h3 className="font-heading text-2xl text-charcoal">Thank You</h3>
        <p className="mt-2 text-sm text-warm-gray">
          Your inquiry has been received. Our team will get back to you within 24–48 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: '', email: '', phone: '', product_interest: '', message: '' });
          }}
          className="mt-6 text-sm text-gold hover:text-gold-light"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl bg-white p-8 shadow-sm">
      <h3 className="mb-6 font-heading text-xl text-charcoal">Send Us a Message</h3>

      <div className="space-y-5">
        <div>
          <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-warm-gray">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-border bg-light-beige px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-gold"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-warm-gray">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-border bg-light-beige px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-gold"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-warm-gray">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-border bg-light-beige px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-gold"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-warm-gray">
            Product Interest
          </label>
          <select
            name="product_interest"
            value={form.product_interest}
            onChange={handleChange}
            className="w-full rounded-lg border border-border bg-light-beige px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-gold"
          >
            <option value="">Select a collection</option>
            <option value="timeless-solids">Timeless Solids</option>
            <option value="print-story">Print Story</option>
            <option value="soft-embroidery">Soft Embroidery</option>
            <option value="general">General Inquiry</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-warm-gray">
            Your Message *
          </label>
          <textarea
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-lg border border-border bg-light-beige px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-gold"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gold px-6 py-3.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-gold-light"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
