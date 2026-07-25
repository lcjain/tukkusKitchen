import { motion } from 'framer-motion';

export function MobileCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] -translate-x-1/2 rounded-[24px] border border-white/75 bg-white/95 px-4 py-4 shadow-glass backdrop-blur-xl md:hidden"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-text">Ready to taste the freshness?</p>
          <p className="text-xs text-text/60">Order now or view our curated vegetarian menu.</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#menu"
            className="rounded-[16px] border border-[#F3E3C3] bg-white px-4 py-3 text-sm font-semibold text-text transition duration-300 hover:-translate-y-0.5 hover:border-secondary hover:text-primary"
            onClick={(event) => {
              event.preventDefault();
              document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            View Menu
          </a>
          <a
            href="https://tukkuskitchen.petpooja.site/"
            target="_blank"
            rel="noreferrer"
            className="rounded-[16px] bg-secondary px-4 py-3 text-sm font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-secondary/90"
          >
            Order
          </a>
        </div>
      </div>
    </motion.div>
  );
}
