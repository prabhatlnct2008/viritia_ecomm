import { Mail, MapPin, Clock } from 'lucide-react';
import siteConfig from '@/data/site-config.json';

const items = [
  { icon: Mail, label: 'Email', value: siteConfig.email },
  { icon: MapPin, label: 'Location', value: siteConfig.madeIn },
  { icon: Clock, label: 'Response Time', value: siteConfig.responseTime },
];

export default function ContactPanel() {
  return (
    <div className="rounded-xl bg-charcoal p-8">
      <h3 className="mb-6 font-heading text-xl text-white">Contact Information</h3>
      <div className="space-y-6">
        {items.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/20">
              <Icon size={18} className="text-gold-light" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gold-light">
                {label}
              </p>
              <p className="mt-1 text-sm text-white/80">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
