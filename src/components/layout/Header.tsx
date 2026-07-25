import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = useMemo(() => navItems.map((item) => item.href.substring(1)), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        return {
          id,
          top: el?.getBoundingClientRect().top ?? Infinity
        };
      });
      const current = offsets.filter((item) => item.top <= 120).pop();
      setActiveSection(current?.id ?? 'home');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleNavigate = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', href);
  };

  return (
    <header className={`sticky top-0 z-30 transition-all duration-500 ${isScrolled ? 'border-b border-white/70 bg-white/80 backdrop-blur-2xl shadow-glass' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const id = item.href.substring(1);
            const isActive = activeSection === id;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavigate(event, item.href)}
                className={`text-sm font-semibold transition ${isActive ? 'text-primary' : 'text-text/80 hover:text-primary'}`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://tukkuskitchen.petpooja.site/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-[16px] bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-secondary/90"
          >
            Order Now
          </a>
        </div>
        <button
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#F3E3C3] bg-white/95 text-primary shadow-sm transition hover:-translate-y-0.5 md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div className="border-t border-white/80 bg-gradient-to-r from-[#FDF3E7] via-[#FFF9F0] to-[#FDE8C0] px-4 py-3 text-center text-sm font-semibold text-slate-900 shadow-soft sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">Tukku's Kitchen — Authentic Pure Vegetarian Dining</div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.24 }}
            className="border-t border-white/80 bg-white/95 pb-6 shadow-glass backdrop-blur-2xl md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 pt-6">
              {navItems.map((item) => {
                const id = item.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(event) => handleNavigate(event, item.href)}
                    className={`rounded-[16px] px-4 py-3 text-base font-medium transition ${isActive ? 'bg-primary/10 text-primary' : 'text-text/80 hover:bg-secondary/10 hover:text-primary'}`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a
                href="https://tukkuskitchen.petpooja.site/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center rounded-[16px] bg-secondary px-6 py-3 text-base font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-secondary/90"
              >
                Order Now
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
