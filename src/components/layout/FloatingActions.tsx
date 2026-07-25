import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, MessageSquare, Phone, ShoppingCart } from 'lucide-react';

const actions = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/918962249989',
    icon: MessageSquare,
    style: 'bg-emerald-500 text-white hover:bg-emerald-600',
  },
  {
    label: 'Call',
    href: 'tel:+918962249989',
    icon: Phone,
    style: 'bg-slate-900 text-white hover:bg-slate-800',
  },
  {
    label: 'Order',
    href: 'https://tukkuskitchen.petpooja.site/',
    icon: ShoppingCart,
    style: 'bg-secondary text-white hover:bg-secondary/90',
  },
];

export function FloatingActions() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShow(currentY < lastScrollY || currentY < 100);
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4"
        >
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <a
                key={action.label}
                href={action.href}
                target={action.label === 'Order' ? '_blank' : '_self'}
                rel={action.label === 'Order' ? 'noreferrer' : undefined}
                className={`inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold shadow-xl shadow-slate-900/10 transition duration-300 ${action.style}`}
              >
                <Icon className="h-5 w-5" />
                {action.label}
              </a>
            );
          })}

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-4 text-slate-900 shadow-xl shadow-slate-900/10 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
