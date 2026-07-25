import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/common/SectionHeading';
import { fadeUp } from '@/lib/motion';

export default function Contact() {
  return (
    <motion.section variants={fadeUp} initial="hidden" animate="visible" className="space-y-6">
      <SectionHeading eyebrow="Contact" title="Reserve your table" />
      <p className="max-w-2xl leading-7 text-slate-600">Reach out for private dining, special events, or your next cozy dinner reservation.</p>
    </motion.section>
  );
}
