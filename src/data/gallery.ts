export interface GalleryImage {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'gallery-1',
    title: 'Tukku’s Signature Dish',
    subtitle: 'Authentic vegetarian flavors served with elegant plating.',
    src: '/pic1.jpeg',
    alt: 'Tukku’s Kitchen signature dish',
  },
  {
    id: 'gallery-2',
    title: 'Family Feast',
    subtitle: 'A rich spread designed for sharing warm moments together.',
    src: '/pic2.jpeg',
    alt: 'Family feast platter',
  },
  {
    id: 'gallery-3',
    title: 'Chef’s Special',
    subtitle: 'Thoughtfully prepared dishes with premium ingredients.',
    src: '/pic3.jpeg',
    alt: 'Chef special vegetarian meal',
  },
  {
    id: 'gallery-4',
    title: 'Dining Ambience',
    subtitle: 'Inviting atmosphere for every occasion.',
    src: '/pic4.jpeg',
    alt: 'Restaurant dining ambience',
  },
];
