import { forwardRef, memo, useMemo, useState, type ImgHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

export interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  sizes?: string;
  widths?: number[];
}

const DEFAULT_WIDTHS = [360, 720, 1080, 1440];

function resolveBaseImageUrl(src: string) {
  return src.split('?')[0];
}

function buildSrcSet(base: string, widths: number[], format: string, quality: number) {
  return widths
    .map((width) => `${base}?auto=format&fit=crop&w=${width}&q=${quality}${format === 'webp' ? '&fm=webp' : ''} ${width}w`)
    .join(', ');
}

const OptimizedImageComponent = forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({ src, alt, sizes = '(max-width: 768px) 100vw, 50vw', widths = DEFAULT_WIDTHS, className, ...props }, ref) => {
    const [loaded, setLoaded] = useState(false);
    const baseUrl = resolveBaseImageUrl(src);

    const { srcSetWebp, srcSetFallback, placeholder } = useMemo(
      () => ({
        srcSetWebp: buildSrcSet(baseUrl, widths, 'webp', 65),
        srcSetFallback: buildSrcSet(baseUrl, widths, 'jpeg', 80),
        placeholder: `${baseUrl}?auto=format&fit=crop&w=32&q=10`,
      }),
      [baseUrl, widths]
    );

    return (
      <span className={cn('relative block overflow-hidden', className)}>
        <picture>
          <source type="image/webp" srcSet={srcSetWebp} sizes={sizes} />
          <img
            ref={ref}
            src={`${baseUrl}?auto=format&fit=crop&w=800&q=80`}
            srcSet={srcSetFallback}
            sizes={sizes}
            alt={alt}
            loading="lazy"
            decoding="async"
            className={cn(
              'h-full w-full object-cover transition duration-700 ease-out',
              loaded ? 'scale-100 blur-0' : 'scale-105 blur-2xl'
            )}
            style={{ backgroundImage: `url(${placeholder})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            onLoad={() => setLoaded(true)}
            {...props}
          />
        </picture>
        {!loaded && <span className="pointer-events-none absolute inset-0 animate-pulse bg-slate-100/70" />}
      </span>
    );
  }
);

export const OptimizedImage = memo(OptimizedImageComponent);
