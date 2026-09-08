import skinCareImage from '../components/images/skincare.jpeg';
import makeupImage from '../components/images/makeup.jpeg';
import treatmentImage from '../components/images/treatment.jpg';
import kidsImage from '../components/images/kid.jpg';
import mensGroomingImage from '../components/images/mens_grooming.jpg';
import womensStylingImage from '../components/images/women_stylists.jpg';
import hairDesignImage from '../components/images/home_2.jpeg';

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  popular?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  items: ServiceItem[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: 'hair',
    name: 'Hair Design & Styling',
    description: 'Bespoke precision haircuts, color creations, extensions, and restorative spa therapies designed to elevate your hair identity.',
    imageUrl: hairDesignImage,
    items: [
      {
        id: 'h1',
        name: 'Premium Haircuts',
        description: 'Includes a personalized styling consultation, signature shampoo, botanical mask, scalp massage, and expert blow-dry styling.',
        price: '₹1,200',
        duration: '60 mins',
        popular: true,
      },
      {
        id: 'h2',
        name: 'Hair Spa',
        description: 'Deep conditioning and cellular reconstruction therapy to restore moisture, shine, and core strength to stressed hair.',
        price: '₹1,800',
        duration: '50 mins',
      },
      {
        id: 'h3',
        name: 'Keratin Treatment',
        description: 'Advanced molecular protein infusion that eliminates up to 95% of frizz, returning strength and elite manageability to compromised locks.',
        price: '₹4,500',
        duration: '150 mins',
        popular: true,
      },
      {
        id: 'h4',
        name: 'Hair Smoothing',
        description: 'A premium straightening and smoothing system for a perfectly sleek, high-shine finish that lasts for months.',
        price: '₹5,000',
        duration: '180 mins',
      },
      {
        id: 'h5',
        name: 'Hair Extensions',
        description: 'Ethically sourced, luxury micro-ring or tape-in extensions to add seamless length, rich volume, and dimension.',
        price: '₹12,000',
        duration: '180 mins',
      },
      {
        id: 'h6',
        name: 'Hair Coloring',
        description: 'Global color, hand-painted balayage, or creative highlights customized to match your skin tone and style.',
        price: '₹3,500',
        duration: '120 mins',
      },
      {
        id: 'h7',
        name: 'Hair Treatments',
        description: 'Bespoke bond-building and scalp-purifying treatments targeting hair fall, dandruff, and chemical damage.',
        price: '₹2,500',
        duration: '60 mins',
      },
      {
        id: 'h8',
        name: 'Hair Styling',
        description: 'Red-carpet-ready blowouts, luxury curls, updos, or creative styling for special occasions and photography.',
        price: '₹1,500',
        duration: '45 mins',
      }
    ]
  },
  {
    id: 'skin',
    name: 'Advanced Skincare',
    description: 'Rejuvenate your skin with professional facial and skincare treatments designed for healthy, glowing skin.',
    imageUrl: skinCareImage,
    items: [
      { id: 's1', name: 'Luxury Facial', description: 'Premium facial treatment for deep nourishment and glowing skin.', price: 'Starts at ₹2,500', duration: '60 mins', popular: true },
      { id: 's2', name: 'Hydra Facial', description: 'Advanced deep cleansing and hydration for a radiant complexion.', price: 'Starts at ₹3,500', duration: '75 mins', popular: true },
      { id: 's3', name: 'Cleanup', description: 'Essential pore extraction and gentle exfoliation to refresh your skin.', price: 'Starts at ₹1,200', duration: '45 mins' },
      { id: 's4', name: 'Detan Treatment', description: 'Sun damage restoration and tan removal using brightening complexes.', price: 'Starts at ₹1,000', duration: '30 mins' },
      { id: 's5', name: 'Skin Polishing', description: 'Micro-exfoliation to improve skin texture and tone.', price: 'Starts at ₹2,000', duration: '45 mins' },
      { id: 's6', name: 'Acne Treatment', description: 'Targeted clinical skincare protocols for acne control and prevention.', price: 'Starts at ₹2,500', duration: '60 mins' },
      { id: 's7', name: 'Pigmentation Treatment', description: 'Specialized therapy to reduce dark spots and uneven skin tone.', price: 'Starts at ₹3,000', duration: '60 mins' },
      { id: 's8', name: 'Anti-Aging Facial', description: 'Skin tightening and rejuvenation using premium active botanicals.', price: 'Starts at ₹3,500', duration: '75 mins' },
      { id: 's9', name: 'Brightening Facial', description: 'Enhances skin radiance and evens out the complexion.', price: 'Starts at ₹2,500', duration: '60 mins' },
      { id: 's10', name: 'Gold Facial', description: 'Luxurious anti-aging facial infused with 24K gold particles.', price: 'Starts at ₹4,000', duration: '90 mins', popular: true }
    ]
  },
  {
    id: 'makeup',
    name: 'Couture Makeup',
    description: 'Professional makeup services for every special occasion using premium products and expert techniques.',
    imageUrl: makeupImage,
    items: [
      { id: 'm1', name: 'Bridal Makeup', description: 'Complete luxury bridal curation including trial session, HD base, and draping.', price: 'Starts at ₹15,000', duration: 'Varies', popular: true },
      { id: 'm2', name: 'Engagement Makeup', description: 'Elegant and long-lasting makeup styling for your engagement ceremony.', price: 'Starts at ₹10,000', duration: '120 mins' },
      { id: 'm3', name: 'Reception Makeup', description: 'Glamorous reception makeup to perfectly complement your evening attire.', price: 'Starts at ₹12,000', duration: '120 mins' },
      { id: 'm4', name: 'Party Makeup', description: 'Flawless makeup styling optimized for social events and high-fashion parties.', price: 'Starts at ₹4,000', duration: '75 mins' },
      { id: 'm5', name: 'HD Makeup', description: 'High-definition cosmetic application designed for 4K camera lenses.', price: 'Starts at ₹6,000', duration: '90 mins', popular: true },
      { id: 'm6', name: 'Airbrush Makeup', description: 'Silicone-based, water-resistant airbrush makeup for a flawless finish.', price: 'Starts at ₹8,000', duration: '90 mins', popular: true },
      { id: 'm7', name: 'Groom Makeup', description: 'Subtle and natural grooming and makeup application for the groom.', price: 'Starts at ₹3,000', duration: '45 mins' },
      { id: 'm8', name: 'Saree Draping', description: 'Professional and secure draping in traditional or modern styles.', price: 'Starts at ₹1,000', duration: '30 mins' },
      { id: 'm9', name: 'Hairstyling for Events', description: 'Red-carpet-ready blowouts, luxury curls, or creative updos.', price: 'Starts at ₹1,500', duration: '45 mins' },
      { id: 'm10', name: 'Makeup Consultation', description: 'Personalized assessment to determine the best looks and products for you.', price: 'Starts at ₹1,000', duration: '30 mins' }
    ]
  },
  {
    id: 'treatments',
    name: 'Specialized Treatments',
    description: 'Luxury salon treatments that repair, nourish, and transform your hair and skin.',
    imageUrl: treatmentImage,
    items: [
      { id: 't1', name: 'Keratin Therapy', description: 'Advanced molecular protein infusion to eliminate frizz and return strength.', price: 'Starts at ₹4,500', duration: '150 mins', popular: true },
      { id: 't2', name: 'Hair Botox', description: 'Deep conditioning treatment that repairs damaged hair fibers.', price: 'Starts at ₹5,000', duration: '120 mins', popular: true },
      { id: 't3', name: 'Smoothening Treatment', description: 'Premium straightening system for a perfectly sleek, high-shine finish.', price: 'Starts at ₹5,000', duration: '180 mins' },
      { id: 't4', name: 'Deep Conditioning', description: 'Intensive moisture therapy for dry, brittle, or chemically treated hair.', price: 'Starts at ₹1,500', duration: '45 mins' },
      { id: 't5', name: 'Hair Repair Therapy', description: 'Bespoke bond-building treatment targeting severe chemical damage.', price: 'Starts at ₹2,500', duration: '60 mins' },
      { id: 't6', name: 'Scalp Treatment', description: 'Purifying treatment to balance scalp health and stimulate growth.', price: 'Starts at ₹2,000', duration: '45 mins' },
      { id: 't7', name: 'Dandruff Treatment', description: 'Clinical protocol to gently eliminate dandruff and soothe the scalp.', price: 'Starts at ₹1,500', duration: '45 mins' },
      { id: 't8', name: 'Hair Fall Control', description: 'Specialized therapy utilizing active serums to strengthen hair roots.', price: 'Starts at ₹2,500', duration: '60 mins' },
      { id: 't9', name: 'Protein Treatment', description: 'Restores essential proteins to weak, porous hair for added resilience.', price: 'Starts at ₹2,000', duration: '60 mins' },
      { id: 't10', name: 'Nourishing Hair Spa', description: 'Cellular reconstruction therapy with a relaxing scalp massage.', price: 'Starts at ₹1,800', duration: '50 mins', popular: true }
    ]
  },
  {
    id: 'kids',
    name: 'Young Guests (Kids)',
    description: 'Gentle, comfortable, and stylish grooming services specially designed for children.',
    imageUrl: kidsImage,
    items: [
      { id: 'k1', name: 'Kids Haircuts', description: 'Fun, patient, and modern haircuts designed specifically for our youngest guests.', price: 'Starts at ₹500', duration: '30 mins', popular: true },
      { id: 'k2', name: 'Kids Hair Styling', description: 'Cute and comfortable styling for daily wear or special events.', price: 'Starts at ₹400', duration: '30 mins' },
      { id: 'k3', name: 'First Haircut Experience', description: 'A memorable, gentle first haircut complete with a keepsake certificate.', price: 'Starts at ₹600', duration: '45 mins' },
      { id: 'k4', name: 'Hair Wash', description: 'Tear-free, gentle shampooing and conditioning.', price: 'Starts at ₹300', duration: '15 mins' },
      { id: 'k5', name: 'Special Occasion Styling', description: 'Adorable updos or braided styles for parties and ceremonies.', price: 'Starts at ₹800', duration: '45 mins' }
    ]
  },
  {
    id: 'men',
    name: "Men's Grooming",
    description: "Modern grooming services crafted for today's gentleman.",
    imageUrl: mensGroomingImage,
    items: [
      { id: 'g1', name: "Men's Haircut", description: 'Precision scissor and clipper cut tailored to your personal aesthetic.', price: 'Starts at ₹700', duration: '40 mins', popular: true },
      { id: 'g2', name: 'Beard Styling', description: 'Detailed shaping and razor alignment for a polished beard profile.', price: 'Starts at ₹500', duration: '30 mins' },
      { id: 'g3', name: 'Beard Trim', description: 'Quick and clean trim to maintain your current beard length.', price: 'Starts at ₹300', duration: '15 mins' },
      { id: 'g4', name: 'Hair Spa', description: 'Invigorating hair spa and scalp massage to relieve stress and nourish hair.', price: 'Starts at ₹1,200', duration: '45 mins', popular: true },
      { id: 'g5', name: 'Hair Coloring', description: 'Global coloring, grey coverage, or subtle highlights.', price: 'Starts at ₹1,500', duration: '60 mins' },
      { id: 'g6', name: 'Keratin Treatment', description: 'Frizz reduction and smoothing for easily manageable hair.', price: 'Starts at ₹2,500', duration: '90 mins' },
      { id: 'g7', name: 'Facial', description: 'Deep cleansing and rejuvenating facial designed specifically for male skin.', price: 'Starts at ₹1,500', duration: '45 mins' },
      { id: 'g8', name: 'Cleanup', description: 'Essential pore extraction and gentle exfoliation.', price: 'Starts at ₹800', duration: '30 mins' },
      { id: 'g9', name: 'Detan', description: 'Targeted tan removal to restore natural skin tone.', price: 'Starts at ₹700', duration: '30 mins' },
      { id: 'g10', name: 'Head Massage', description: 'Relaxing therapeutic head massage with warm, nourishing oils.', price: 'Starts at ₹500', duration: '30 mins', popular: true }
    ]
  },
  {
    id: 'women',
    name: "Women's Styling",
    description: "Luxury beauty and hair services designed to enhance confidence and elegance.",
    imageUrl: womensStylingImage,
    items: [
      { id: 'w1', name: "Women's Haircut", description: 'Signature style cut, layers, or trim including a customized blow-dry.', price: 'Starts at ₹1,500', duration: '60 mins', popular: true },
      { id: 'w2', name: 'Hair Styling', description: 'Luxury blowouts, curling, and customized styling for any occasion.', price: 'Starts at ₹1,000', duration: '45 mins' },
      { id: 'w3', name: 'Hair Coloring', description: 'Balayage, ombre, highlights, or global color transformations.', price: 'Starts at ₹3,500', duration: '120 mins', popular: true },
      { id: 'w4', name: 'Hair Spa', description: 'Deep conditioning therapy to restore moisture and shine.', price: 'Starts at ₹1,800', duration: '50 mins' },
      { id: 'w5', name: 'Keratin Treatment', description: 'Advanced molecular protein infusion for smooth, frizz-free hair.', price: 'Starts at ₹4,500', duration: '150 mins' },
      { id: 'w6', name: 'Smoothening', description: 'Premium chemical straightening for a sleek, long-lasting finish.', price: 'Starts at ₹5,000', duration: '180 mins' },
      { id: 'w7', name: 'Hair Extensions', description: 'Ethically sourced, luxury extensions to add seamless length and volume.', price: 'Starts at ₹12,000', duration: '180 mins' },
      { id: 'w8', name: 'Bridal Styling', description: 'Exquisite hair styling designed to complement your bridal look.', price: 'Starts at ₹5,000', duration: '90 mins', popular: true },
      { id: 'w9', name: 'Facial Treatments', description: 'Signature anti-aging, hydration, and skin tightening facials.', price: 'Starts at ₹2,500', duration: '60 mins' },
      { id: 'w10', name: 'Waxing', description: 'Hygienic body hair removal using premium liposoluble wax.', price: 'Starts at ₹800', duration: '45 mins' },
      { id: 'w11', name: 'Threading', description: 'Organic thread shaping for eyebrows, upper lip, or full face.', price: 'Starts at ₹150', duration: '15 mins' }
    ]
  }
];
