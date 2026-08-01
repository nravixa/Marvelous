export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
  badge?: string;
  highlight?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    name: 'Harshad Kamble',
    rating: 5,
    review: 'Great service and professional staff. My haircut and the overall experience were excellent. Highly recommended!'
  },
  {
    id: 't2',
    name: 'Shekhar Lokhande',
    rating: 5,
    review: 'Good service, professional staff, and a clean environment. The haircut was done with great care, and the overall experience was smooth. Highly recommended!'
  },
  {
    id: 't3',
    name: 'Suraj Patil',
    rating: 5,
    review: 'Visited this salon for the first time and had a really good experience. The staff is polite, professional, and made me feel comfortable. The service quality is excellent, and everything felt clean and hygienic. Definitely recommended. I will visit again!',
    badge: 'Local Guide'
  },
  {
    id: 't4',
    name: 'Dheeraj Kamble',
    rating: 5,
    review: "I've been visiting Marvelous Unisex Salon for the past three years, and I can't recommend it enough—especially my hairstylist, Vikram. He took the time to understand my concerns, guided me properly, and helped restore my hairline after a bad experience elsewhere. His professionalism, consistency, and skill have brought back my confidence. Thank you, Marvelous Salon and Vikram, for the fantastic service every single time!",
    highlight: 'Trusted Customer • 3+ Years'
  },
  {
    id: 't5',
    name: 'Preeti Wagh',
    rating: 5,
    review: "I'm in love with my hair after the spa by Swarali! My hair feels nourished, smooth, and full of life. Thank you for the wonderful service!"
  }
];
