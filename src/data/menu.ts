export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  isVeg: boolean;
  isBestSeller: boolean;
  image: string;
}

export const menuCategories = ['All', 'Starters', 'Main Course', 'Rice', 'Breads', 'Chinese', 'Beverages', 'Desserts'];

export const menuItems: MenuItem[] = [
  {
    id: 'spring-rolls',
    name: 'Crispy Vegetable Spring Rolls',
    description: 'Golden rolls filled with spiced vegetables and served with sweet chili dip.',
    price: '$8.95',
    category: 'Starters',
    isVeg: true,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'butter-chicken',
    name: 'Creamy Paneer Butter Masala',
    description: 'Rich tomato gravy with soft paneer, simmered in aromatic spices.',
    price: '$14.50',
    category: 'Main Course',
    isVeg: true,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1604908554364-48c6765ab963?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'jeera-rice',
    name: 'Saffron Jeera Rice',
    description: 'Fluffy basmati rice tempered with cumin and saffron for delicate aroma.',
    price: '$7.25',
    category: 'Rice',
    isVeg: true,
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1604908812096-0350f5fa5b90?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'garlic-naan',
    name: 'Garlic Naan Basket',
    description: 'Warm, hand-stretched naan brushed with garlic butter and herbs.',
    price: '$5.95',
    category: 'Breads',
    isVeg: true,
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1604908177522-8dc3d0ce6f20?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'veg-chow-mein',
    name: 'Wok-Fried Vegetable Chow Mein',
    description: 'Stir-fried noodles with crisp vegetables, sesame, and tangy sauce.',
    price: '$12.75',
    category: 'Chinese',
    isVeg: true,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1572441710615-3797cd7cd7d0?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'mango-lassi',
    name: 'Mango Lassi Smoothie',
    description: 'Creamy mango yogurt drink with a touch of cardamom and honey.',
    price: '$5.25',
    category: 'Beverages',
    isVeg: true,
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1617196036350-587a7685915c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'gulab-jamun',
    name: 'Rose Syrup Gulab Jamun',
    description: 'Soft dumplings drenched in fragrant rose syrup and crushed pistachios.',
    price: '$6.50',
    category: 'Desserts',
    isVeg: true,
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1614732138611-6c29af2a40c5?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'veg-kebab',
    name: 'Masala Paneer Tikka',
    description: 'Grilled paneer cubes marinated in chef’s signature spice blend.',
    price: '$11.95',
    category: 'Starters',
    isVeg: true,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1644194475951-3dbf35a6e8d7?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'thai-basil-fried-rice',
    name: 'Vegetable Thai Basil Fried Rice',
    description: 'Aromatic rice tossed with wok-fried greens, basil, and crushed chilies.',
    price: '$13.25',
    category: 'Rice',
    isVeg: true,
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1604908171141-05f3f3970dcc?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'garlic-paratha',
    name: 'Stuffed Garlic Paratha',
    description: 'Layered flatbread filled with spiced potato and finished with garlic butter.',
    price: '$6.75',
    category: 'Breads',
    isVeg: true,
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1607069382576-762a45bcc548?auto=format&fit=crop&w=900&q=80',
  },
];
