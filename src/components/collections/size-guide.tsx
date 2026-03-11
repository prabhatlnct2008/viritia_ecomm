import SectionHeading from '@/components/shared/section-heading';

const sizeData = [
  { size: 'Single', bedsheet: '60 × 90 inches (152 × 228 cm)', pillowCovers: '18 × 27 inches (46 × 69 cm)' },
  { size: 'Queen', bedsheet: '90 × 100 inches (228 × 254 cm)', pillowCovers: '18 × 27 inches (46 × 69 cm)' },
  { size: 'King', bedsheet: '108 × 108 inches (275 × 275 cm)', pillowCovers: '18 × 27 inches (46 × 69 cm)' },
];

export default function SizeGuide() {
  return (
    <section className="bg-light-beige py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <SectionHeading
          eyebrow="Size Guide"
          title="Find Your Perfect Fit"
          subtitle="All Viritia bedsheets come with 2 matching pillow covers."
        />

        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wide text-gold">Size</th>
                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wide text-gold">Bedsheet</th>
                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wide text-gold">Pillow Covers</th>
              </tr>
            </thead>
            <tbody>
              {sizeData.map((row) => (
                <tr key={row.size} className="border-b border-border last:border-0">
                  <td className="px-6 py-4 font-medium text-charcoal">{row.size}</td>
                  <td className="px-6 py-4 text-sm text-warm-gray">{row.bedsheet}</td>
                  <td className="px-6 py-4 text-sm text-warm-gray">{row.pillowCovers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
