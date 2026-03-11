'use client';

import collectionsData from '@/data/collections.json';

type Props = {
  active: string;
  onChange: (key: string) => void;
};

export default function CollectionFilters({ active, onChange }: Props) {
  const tabs = [{ key: 'all', name: 'All' }, ...collectionsData];

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
            active === tab.key
              ? 'border-gold bg-gold text-white'
              : 'border-border bg-white text-charcoal hover:border-gold hover:text-gold'
          }`}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
}
