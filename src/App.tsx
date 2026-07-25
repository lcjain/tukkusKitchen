import { motion } from 'framer-motion';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/layout/FloatingActions';
import { Header } from '@/components/layout/Header';
import { MobileCTA } from '@/components/layout/MobileCTA';
import { Seo } from '@/components/SEO/SEO';
import { AppRoutes } from '@/pages/AppRoutes';
import { fadeUp } from '@/lib/motion';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Seo />
      <Header />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/40"
        >
          <AppRoutes />
        </motion.div>
      </main>
      <Footer />
      <MobileCTA />
      <FloatingActions />
    </div>
  );
}

export default App;
