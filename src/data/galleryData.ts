import hair1 from '../components/images/haircut.jpg';
import hair2 from '../components/images/haircut_1.jpg';
import hair3 from '../components/images/haircut_2.jpg';
import skin1 from '../components/images/skincare1.jpg';
import skin2 from '../components/images/skincare2.jpg';
import skin3 from '../components/images/skincare3.jpg';
import makeup1 from '../components/images/makeup1.jpg';
import makeup2 from '../components/images/makeup2.jpg';
import makeup3 from '../components/images/makeup3.jpg';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'makeup' | 'skincare';
  imageUrl: string;
  description: string;
}

export const galleryData: GalleryItem[] = [
  // HAIR
  {
    id: 'h1',
    title: 'Precision Color Melt',
    category: 'hair',
    imageUrl: hair1,
    description: 'A seamless transition from deep roots to ash-gold dimensions, executed by our master stylists.'
  },
  {
    id: 'h2',
    title: 'Avant-Garde Hair Sculpting',
    category: 'hair',
    imageUrl: hair2,
    description: 'Geometric framing and texturizing technique demonstrated during a masterclass seminar.'
  },
  {
    id: 'h3',
    title: 'Luxury Extensions',
    category: 'hair',
    imageUrl: hair3,
    description: 'Seamless volume and length integration using premium ethical extensions.'
  },

  // SKINCARE
  {
    id: 's1',
    title: 'Glow Dermal Cleansing',
    category: 'skincare',
    imageUrl: skin1,
    description: 'Deep extraction and micro-peel session using clinical formulations.'
  },
  {
    id: 's2',
    title: 'Gold Caviar Therapy',
    category: 'skincare',
    imageUrl: skin2,
    description: 'Our signature anti-aging protocol utilizing 24k gold leaf and marine collagen.'
  },
  {
    id: 's3',
    title: 'Botanical Resurfacing',
    category: 'skincare',
    imageUrl: skin3,
    description: 'Gentle but highly effective cellular turnover utilizing organic fruit acids.'
  },

  // MAKEUP
  {
    id: 'm1',
    title: 'High-Fashion Editorial Glam',
    category: 'makeup',
    imageUrl: makeup1,
    description: 'Dramatic wing design and contoured profile created for a runway showcase event.'
  },
  {
    id: 'm2',
    title: 'Couture Bridal Styling',
    category: 'makeup',
    imageUrl: makeup2,
    description: 'Elegant soft glam focusing on luminous, long-wear foundation.'
  },
  {
    id: 'm3',
    title: 'Cinematic Airbrushing',
    category: 'makeup',
    imageUrl: makeup3,
    description: 'Flawless HD application designed to withstand 4K cameras and hot studio lights.'
  }
];
