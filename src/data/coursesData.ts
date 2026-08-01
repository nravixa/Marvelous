import academy1Image from '../components/images/academy_1.jpg';
import academy2Image from '../components/images/academy_2.jpg';
import academy3Image from '../components/images/academy_3.jpg';

export interface CourseModule {
  title: string;
  description: string;
}

export interface CourseItem {
  id: string;
  name: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  price: string;
  imageUrl: string;
  modules: CourseModule[];
  careerPathways: string[];
  certification: string;
}

export const coursesData: CourseItem[] = [
  {
    id: 'cosmetology-diploma',
    name: 'Grand Master Diploma in Cosmetology',
    description: 'Our flagship elite training program covering the entire spectrum of beauty science—from hair design and clinical skincare to professional makeup and salon business operations.',
    duration: '12 Months (Full Time)',
    level: 'All Levels',
    price: '$7,500',
    imageUrl: academy1Image,
    certification: 'CIDESCO & Marvelous Master Guild Certification',
    modules: [
      {
        title: 'Module 1: Trichology & Hair Sculpting',
        description: 'Anatomy of hair, structural analysis, advanced precision cutting, texturizing, and luxury blow-dry styling techniques.'
      },
      {
        title: 'Module 2: Advanced Skin Sciences & Dermal Therapies',
        description: 'Skin biology, cosmetic chemistry, facial treatments, chemical peels, and clinical machinery operations.'
      },
      {
        title: 'Module 3: Photographic Makeup & Editorial Design',
        description: 'HD cosmetics application, bridal styling, airbrush technology, and designing for editorial photography.'
      },
      {
        title: 'Module 4: Business Management & Salon Leadership',
        description: 'Financial forecasting, digital marketing, client retention systems, staff management, and salon health safety laws.'
      }
    ],
    careerPathways: [
      'Luxury Salon Director',
      'International Beauty Educator',
      'Dermal Therapist',
      'Celebrity Beauty Consultant'
    ]
  },
  {
    id: 'hair-styling-mastery',
    name: 'Advanced Hair Artistry & Color Chemistry',
    description: 'Master the physics and chemistry of modern coloring, creative highlights, balayage, chemical texturizing, and high-fashion hair styling.',
    duration: '6 Months',
    level: 'Intermediate',
    price: '$4,200',
    imageUrl: academy2Image,
    certification: 'State Board Alignment & Marvelous Hair Artistry Credential',
    modules: [
      {
        title: 'Module 1: The Chemistry of Color & Light',
        description: 'Melanin physics, lift levels, color correction, and formulations using premium developer volumes.'
      },
      {
        title: 'Module 2: Balayage & French Freehand Painting',
        description: 'Foil layouts, hand-painting gradients, shadow roots, zone toning, and glossing finishes.'
      },
      {
        title: 'Module 3: Avant-Garde Styling & Runway Shows',
        description: 'Structured updos, architectural styling, hairpiece integration, and photo shoot prep.'
      }
    ],
    careerPathways: [
      'Master Colorist',
      'Artistic Director',
      'Platform Artist',
      'Session Stylist'
    ]
  },
  {
    id: 'makeup-artistry',
    name: 'Professional Makeup Artistry & Airbrushing',
    description: 'Transform your passion into a career. Learn facial geometry, lighting effects, bridal beauty, film/television makeup, and special effects.',
    duration: '4 Months',
    level: 'Beginner',
    price: '$3,500',
    imageUrl: academy3Image,
    certification: 'Certified Professional Makeup Artist (CPMA)',
    modules: [
      {
        title: 'Module 1: Facial Analysis & Color Theory',
        description: 'Analyzing bone structures, undertones, correcting complexions, and base formulation.'
      },
      {
        title: 'Module 2: Airbrush Technology & HD Makeup',
        description: 'Maintenance of airbrush guns, compression ratios, blending bases, and high-def camera makeup.'
      },
      {
        title: 'Module 3: Bridal & Creative Avant-Garde',
        description: 'Waterproofing, vintage bridal looks, fantasy themes, glitter application, and runway styling.'
      }
    ],
    careerPathways: [
      'Freelance Makeup Artist',
      'Bridal Beauty Stylist',
      'Media/TV Makeup Specialist',
      'Brand Representative'
    ]
  }
];
