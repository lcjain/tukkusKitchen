import { useEffect, memo } from 'react';
import { X } from 'lucide-react';
import type { GalleryImage } from '@/data/gallery';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

interface GalleryLightboxProps {
  image: GalleryImage | null;
  onClose: () => void;
}

function GalleryLightboxComponent({ image, onClose }: GalleryLightboxProps) {
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-xl">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-[36px] border border-white/20 bg-slate-950 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          aria-label="Close lightbox"
        >
          <X className="h-5 w-5" />
        </button>
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          sizes="(max-width: 1024px) 100vw, 80vw"
          className="h-[70vh] w-full"
        />
        <div className="space-y-2 bg-slate-950/95 p-6 text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-secondary">Gallery</p>
          <h3 className="text-3xl font-semibold">{image.title}</h3>
          <p className="max-w-3xl text-sm leading-7 text-slate-300">{image.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export const GalleryLightbox = memo(GalleryLightboxComponent);
