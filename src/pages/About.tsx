import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/common/SectionHeading';
import { fadeUp } from '@/lib/motion';

export default function About() {
  return (
    <motion.section variants={fadeUp} initial="hidden" animate="visible" className="space-y-6">
      <SectionHeading eyebrow="About" title="A modern restaurant story" />
      <p className="max-w-2xl leading-7 text-slate-600">Tukku's Kitchen blends lively community dining with elevated comfort food crafted from the finest local produce.</p>
    </motion.section>
  );
}
