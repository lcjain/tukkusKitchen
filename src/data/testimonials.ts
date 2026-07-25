export interface Testimonial {
  id: string;
  name: string;
  image: string;
  feedback: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Priya Mehta',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    feedback: 'The flavors were layered and beautiful—an unforgettable vegetarian dinner with Excellent service.',
    location: 'Jabalpur, India',
  },
  {
    id: 'testimonial-2',
    name: 'Arjun Patel',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    feedback: 'A premium dining experience that felt both elegant and comforting. Every dish was plated like art.',
    location: 'Bhopal, India',
  },
  {
    id: 'testimonial-3',
    name: 'Neeta Sharma',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    feedback: 'The hospitality, ambience, and food quality were exceptional. Highly recommended for special occasions.',
    location: 'Satna, India',
  },
  {
    id: 'testimonial-4',
    name: 'Abhilasha Jain',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    feedback: 'A luxurious vegetarian and Jain menu with impeccable freshness and bold spices. Beautifully curated from start to finish.',
    location: 'Rewa, India',
  },
];
