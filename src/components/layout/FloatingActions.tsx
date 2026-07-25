import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, PhoneCall, Utensils } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16.5 3.5h-9a4 4 0 0 0-4 4v9a4 4 0 0 0 4 4h1.5l2.5 2.5 2.5-2.5H16.5a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4Z" />
    <path d="M15.5 9.5c-.1.8-.5 1.6-1.1 2.2-.8.8-1.9 1-2.8.7-.6-.2-1.2-.5-1.7-1.1-.3-.3-.4-.7-.3-1.1.1-.3.4-.6.7-.8.3-.2.6-.3.9-.3.2 0 .5 0 .7.1.3.1.6.2.9.4.2.1.5.3.7.5.2.2.3.5.3.8 0 .2 0 .3-.1.5-.1.1-.3.2-.5.3-.3.1-.6.1-.9.1s-.6 0-.9-.1c-.2-.1-.3-.2-.5-.3-.2-.2-.3-.4-.3-.7 0-.2.1-.3.2-.5.1-.1.3-.2.5-.2.2 0 .4 0 .6.1.1 0 .2 0 .2.1.1.1.2.2.3.3.1.1.1.2.1.3 0 .1 0 .2-.1.3 0 0 0 .1-.1.1-.1 0-.2 0-.3-.1-.1-.1-.2-.2-.3-.4-.1-.1-.3-.2-.4-.3-.1-.1-.2-.3-.2-.5 0-.1 0-.3.1-.4.2-.4.6-.6 1.1-.6.5 0 .9.1 1.3.4.3.2.5.5.7.8.2.3.3.7.3 1.1Z" />
    <path d="M11.2 13.2c.2.7.9 1.2 1.6 1.2.7 0 1.3-.5 1.4-1.2.1-.4 0-.8-.2-1.1-.1-.1-.3-.2-.5-.3-.2 0-.4 0-.6.1-.2.1-.4.2-.5.3-.1.1-.2.2-.2.4 0 .2.1.4.2.5.1.1.2.1.4.1.1 0 .2 0 .3-.1.1 0 .2-.1.2-.2s0-.2-.1-.3c-.1-.1-.2-.2-.4-.3-.1 0-.3 0-.4.1-.2.1-.3.2-.4.4-.1.2-.1.4-.1.6Z" />
  </svg>
);

const actions = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/918962249989',
    icon: WhatsAppIcon,
    style: 'bg-emerald-500 text-white hover:bg-emerald-600',
  },
  {
    label: 'Call',
    href: 'tel:+918962249989',
    icon: PhoneCall,
    style: 'bg-sky-500 text-white hover:bg-sky-600',
  },
  {
    label: 'Order',
    href: 'https://tukkuskitchen.petpooja.site/',
    icon: Utensils,
    style: 'bg-amber-500 text-white hover:bg-amber-600',
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
