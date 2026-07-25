import { useMemo, useState, type ElementType } from 'react';
import { motion } from 'framer-motion';
import { Search, Sword, Utensils, Leaf, Sparkles, GlassWater, IceCream2 } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { MenuCard } from '@/components/common/MenuCard';
import { menuCategories, menuItems } from '@/data/menu';
import { fadeUp, staggerContainer } from '@/lib/motion';

const categoryIcons: Record<string, ElementType> = {
  All: Sparkles,
  Starters: Sword,
  'Main Course': Utensils,
  Rice: Leaf,
  Breads: Leaf,
  Chinese: Sparkles,
  Beverages: GlassWater,
  Desserts: IceCream2,
};

export default function Menu() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = useMemo(() => {
    const normalizedSearch = searchTerm.toLowerCase().trim();
    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch =
        normalizedSearch === '' ||
        item.name.toLowerCase().includes(normalizedSearch) ||
        item.description.toLowerCase().includes(normalizedSearch);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <motion.section variants={fadeUp} initial="hidden" animate="visible" className="space-y-10 py-10">
      <SectionHeading eyebrow="Menu" title="Modern restaurant menu" />
      <motion.p variants={fadeUp} className="max-w-2xl leading-8 text-text/70">
        Explore Tukku’s Kitchen menu with curated categories, powerful search, and premium dish cards designed for a delightful ordering experience.
      </motion.p>

      <div className="grid gap-4 sm:grid-cols-[2fr_1fr]">
        <div className="rounded-[32px] border border-white/80 bg-white p-5 shadow-soft">
          <div className="flex items-center gap-3 rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-3">
            <Search className="h-5 w-5 text-secondary" />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search dishes, ingredients, or flavor"
              className="w-full bg-transparent text-sm text-text placeholder:text-slate-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="rounded-[32px] border border-white/80 bg-white p-5 shadow-soft">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-secondary">Categories</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {menuCategories.map((category) => {
              const Icon = categoryIcons[category] ?? Sparkles;
              const isActive = category === activeCategory;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`flex items-center gap-3 rounded-[20px] border px-4 py-3 text-left text-sm transition duration-300 ${
                    isActive
                      ? 'border-secondary bg-secondary/10 text-secondary shadow-sm'
                      : 'border-slate-200 bg-slate-50 text-text hover:border-secondary/60 hover:bg-secondary/5'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-6 xl:grid-cols-2">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <MenuCard key={item.id} item={item} />)
        ) : (
          <div className="rounded-[32px] border border-white/80 bg-white p-10 text-center shadow-soft">
            <p className="text-lg font-semibold text-text">No dishes match your search.</p>
            <p className="mt-2 text-sm text-text/70">Try a different keyword or category to discover more favorites.</p>
          </div>
        )}
      </motion.div>
    </motion.section>
  );
}
