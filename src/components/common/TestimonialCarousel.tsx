import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Star } from 'lucide-react';
import type { Testimonial } from '@/data/testimonials';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const AUTOPLAY_DELAY = 4200;

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', skipSnaps: false });

  useEffect(() => {
    if (!emblaApi) return;

    const play = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    };

    const autoplayId = window.setInterval(play, AUTOPLAY_DELAY);
    return () => window.clearInterval(autoplayId);
  }, [emblaApi]);

  const memorizedTestimonials = useMemo(() => testimonials, [testimonials]);

  return (
    <div className="overflow-hidden rounded-[36px] border border-white/70 bg-white/70 p-5 shadow-soft backdrop-blur-xl">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-6 transition-all duration-500">
          {memorizedTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="min-w-full rounded-[32px] border border-white/80 bg-white/90 p-6 shadow-glass"
            >
              <div className="flex items-center gap-4">
                <OptimizedImage
                  src={testimonial.image}
                  alt={testimonial.name}
                  sizes="80px"
                  widths={[80, 160, 240]}
                  className="h-16 w-16 rounded-[20px] object-cover"
                />
                <div>
                  <p className="text-lg font-semibold text-text">{testimonial.name}</p>
                  <p className="text-sm text-text/60">{testimonial.location}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4" />
                ))}
              </div>

              <p className="mt-5 text-sm leading-7 text-text/70">“{testimonial.feedback}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
