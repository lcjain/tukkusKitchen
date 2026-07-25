import type { ImgHTMLAttributes } from 'react';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

interface ImageSeoProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
}

export function ImageSeo({ src, alt, width, height, sizes, className, ...props }: ImageSeoProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      {...props}
    />
  );
}
