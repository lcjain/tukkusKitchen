import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { GalleryImage } from '@/data/gallery';
import { GalleryLightbox } from '@/components/common/GalleryLightbox';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

interface GalleryMasonryProps {
  images: GalleryImage[];
}

export function GalleryMasonry({ images }: GalleryMasonryProps) {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);
  const items = useMemo(() => images, [images]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
        {images.map((image, index) => (
          <motion.button
            type="button"
            key={image.id}
            onClick={() => setActiveImage(image)}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="group mb-4 w-full overflow-hidden rounded-[32px] border border-white/80 bg-slate-50 p-0 text-left shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative overflow-hidden">
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                sizes="(max-width: 640px) 100vw, 33vw"
                className="h-full w-full transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            </div>
            <div className="space-y-2 p-5 text-left">
              <h3 className="text-xl font-semibold text-text">{image.title}</h3>
              <p className="text-sm leading-6 text-text/70">{image.subtitle}</p>
            </div>
          </motion.button>
        ))}
      </div>
      <GalleryLightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </>
  );
}
