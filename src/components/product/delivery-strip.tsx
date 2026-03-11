import { Truck, Banknote, RotateCcw } from 'lucide-react';
import siteConfig from '@/data/site-config.json';

const icons = [Truck, Banknote, RotateCcw];

export default function DeliveryStrip() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {siteConfig.deliveryInfo.map((info, i) => {
        const Icon = icons[i];
        return (
          <div
            key={i}
            className="flex items-center gap-3 rounded-lg border border-border bg-light-beige p-4"
          >
            <Icon size={20} className="shrink-0 text-gold" />
            <span className="text-sm text-charcoal">{info}</span>
          </div>
        );
      })}
    </div>
  );
}
