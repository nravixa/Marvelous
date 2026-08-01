import React from 'react';
import { ShieldCheck, Award, Users, HeartHandshake } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';
import { PageTransition } from '../components/animations/PageTransition';
import { TiltCard } from '../components/animations/TiltCard';
import { CinematicVideo } from '../components/ui/CinematicVideo';
import { LuxuryImage } from '../components/ui/LuxuryImage';
import about1Image from '@/components/images/about_1.jpeg';
import about2Image from '@/components/images/about_2.jpeg';

export const About: React.FC = () => {
  const stats = [
    { value: '15+', label: 'Years of Excellence' },
    { value: '25k+', label: 'Happy Salon Clients' },
    { value: '1,200+', label: 'Graduated Academy Alumni' },
    { value: '98%', label: 'Career Placement Rate' },
  ];

  const founders = [
    {
      name: 'Umesh Jagtap',
      role: 'Founder & Managing Director',
      description: 'Umesh Jagtap founded Marvelous Unisex Salon & Academy with a vision to deliver world-class luxury beauty services and high-quality professional academy training to aspiring beauty artists.',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      title: 'Artistic Excellence',
      description: 'We believe beauty is an art form. We never settle for average; we sculpt, blend, and design with perfection.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-gold" />,
      title: 'Clinical Integrity',
      description: 'Every chemical formulation, peel, and service is back by clinical science to ensure safety and long-term vitality.',
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: 'Individual Curation',
      description: 'No two clients or student career goals are identical. We provide bespoke attention and tailor-made outcomes.',
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-gold" />,
      title: 'Empowerment',
      description: 'We equip our academy students with the vocational credentials and business skills to build lucrative careers.',
    },
  ];

  return (
    <PageTransition>
      <div className="relative w-full">
        {/* 1. Header Hero */}
        <section className="relative pt-40 pb-20 bg-obsidian-slate border-b border-white/5 overflow-hidden">
          <CinematicVideo 
            src="https://cdn.coverr.co/videos/coverr-hair-cutting-in-a-salon-3912/1080p.mp4"
            poster={about1Image}
            overlayOpacity={0.7}
            overlay="dark"
          />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <FadeIn direction="down">
            <span className="text-gold text-xs font-medium uppercase tracking-widest block mb-3">Our Identity</span>
            <h1 className="font-serif text-4xl md:text-6xl text-cream tracking-wide mb-6">
              The Founders &amp; Philosophy
            </h1>
            <div className="h-hairline w-20 bg-gold mx-auto" />
          </FadeIn>
        </div>
      </section>

      {/* 2. Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/3] rounded-lg shadow-2xl border border-white/5 overflow-hidden">
          <CinematicVideo 
            src="https://cdn.coverr.co/videos/coverr-doing-hair-and-makeup-in-salon-4022/1080p.mp4"
            poster={about2Image}
            overlay="none"
          />
        </div>
        <div>
          <FadeIn direction="left">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-cream mb-6">
              Reimagining Beauty Standards Since 2011
            </h2>
            <p className="text-cream/70 font-light text-sm leading-relaxed mb-6">
              Marvelous Unisex Salon & Academy provides premium salon services for men, women, and children while maintaining high standards of hygiene, professionalism, and customer satisfaction.
            </p>
            <p className="text-cream/70 font-light text-sm leading-relaxed mb-6">
              Umesh Jagtap recognized that many stylists were entering the industry with poor knowledge of dermal biology, cosmetic safety, and salon business analytics. By combining a luxury service salon with a state-of-the-art academy, Marvelous created a cyclic system of excellence. Students train directly under the guidance of senior directors, observing real-world client consultations and advanced coloring formulas.
            </p>
            <p className="text-cream/70 font-light text-sm leading-relaxed">
              Today, our brand represents luxury skincare, award-winning hair styling, and professional certifications recognized by elite international organizations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3. Stats Section */}
      <section className="bg-obsidian-charcoal border-y border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <FadeIn key={stat.label} direction="up" delay={idx * 0.1}>
              <div className="flex flex-col items-center">
                <span className="font-serif text-4xl md:text-5xl font-semibold text-gold mb-2">{stat.value}</span>
                <span className="text-xs-plus uppercase tracking-wider text-cream/60">{stat.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 4. Founders Column */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <span className="text-gold text-xs font-medium uppercase tracking-widest block mb-3">The Visionary</span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-cream">Meet Our Founder</h2>
          </FadeIn>
        </div>

        <div className="max-w-md mx-auto">
          {founders.map((founder, idx) => (
            <FadeIn key={founder.name} direction="up" delay={idx * 0.15}>
              <TiltCard tiltMaxAngleX={15} tiltMaxAngleY={15} className="h-full">
                <div className="glass-card p-8 flex flex-col items-center text-center h-full hover:border-gold/30 transition-all duration-500">
                  <LuxuryImage 
                    src={founder.imageUrl.replace('&w=800', '&w=1600')} 
                    alt={founder.name} 
                    aspectRatio="aspect-square" 
                    className="w-36 h-36 rounded-full border-2 border-gold/40 mb-6 shrink-0" 
                  />
                  <h3 className="font-serif text-2xl font-medium text-cream mb-1">{founder.name}</h3>
                  <span className="text-xs text-gold/80 uppercase tracking-widest font-medium mb-4">{founder.role}</span>
                  <p className="text-sm text-cream/70 leading-relaxed font-light">{founder.description}</p>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="py-24 bg-obsidian-slate border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <FadeIn direction="up">
              <span className="text-gold text-xs font-medium uppercase tracking-widest block mb-3">Our Standards</span>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-cream">The Pillars of Marvelous</h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, idx) => (
              <FadeIn key={v.title} direction="up" delay={idx * 0.1}>
                <TiltCard tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={false} className="h-full">
                  <div className="glass-card p-8 h-full border-t border-t-white/5 hover:border-t-gold/40 transition-all duration-500">
                    <div className="mb-6">{v.icon}</div>
                    <h3 className="font-serif text-xl font-medium text-cream mb-3">{v.title}</h3>
                    <p className="text-xs text-cream/60 leading-relaxed font-light">{v.description}</p>
                  </div>
                </TiltCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
};
