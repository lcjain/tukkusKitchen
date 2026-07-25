import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Flame, Leaf } from 'lucide-react';
import type { MenuItem } from '@/data/menu';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  const memoizedItem = useMemo(() => item, [item]);

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group overflow-hidden rounded-[32px] border border-white/80 bg-white shadow-soft transition duration-300"
    >
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <OptimizedImage
          src={memoizedItem.image}
          alt={memoizedItem.name}
          sizes="(max-width: 640px) 100vw, 33vw"
          className="h-full w-full transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {item.isVeg && (
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm">
              <Leaf className="h-3.5 w-3.5" />
              Veg
            </span>
          )}
          {item.isBestSeller && (
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 shadow-sm">
              <Flame className="h-3.5 w-3.5" />
              Best Seller
            </span>
          )}
        </div>
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-text">{item.name}</h3>
            <p className="mt-2 text-sm leading-6 text-text/70">{item.description}</p>
          </div>
          <div className="rounded-3xl bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">{item.price}</div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-600">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            Fresh recipe
          </div>
          <Button href="#order" className="rounded-[18px] px-4 py-2 text-xs font-semibold" intent="secondary">
            Order
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
