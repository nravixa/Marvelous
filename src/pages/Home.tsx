import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, GraduationCap, Scissors } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { FadeIn } from '../components/animations/FadeIn';
import { PinnedHorizontalScroll } from '../components/animations/PinnedHorizontalScroll';
import { PageTransition } from '../components/animations/PageTransition';
import { CinematicVideo } from '../components/ui/CinematicVideo';
import { LuxuryImage } from '../components/ui/LuxuryImage';
import heroImage from '@/components/images/home.jpeg';
import home1Image from '@/components/images/home_1.jpeg';
import home2Image from '@/components/images/home_2.jpeg';
import { TestimonialCarousel } from '../components/ui/TestimonialCarousel';

gsap.registerPlugin(ScrollTrigger);

export const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax scroll effect for Hero Background using GSAP
    const hero = heroRef.current;
    const bg = parallaxBgRef.current;
    if (!hero || !bg) return;

    const ctx = gsap.context(() => {
      gsap.to(bg, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          fastScrollEnd: true,
          preventOverlaps: true,
        },
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <PageTransition>
      <div className="relative w-full">
        {/* 1. Hero Section */}
        <section
          ref={heroRef}
          className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-obsidian-dark m-0 p-0"
          style={{ height: '100dvh' }}
        >
        {/* Parallax Cinematic Background Video */}
        <div
          ref={parallaxBgRef}
          className="absolute inset-0 w-full h-[120%] -top-[10%] opacity-80 scale-105 will-change-transform z-0"
        >
          <motion.img
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            src={heroImage}
            alt="Marvelous Salon Hero Background"
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
        </div>

        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian-dark/70 to-obsidian-dark z-10 pointer-events-none" />

        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-12">
          <FadeIn direction="down" delay={0.1}>
            <span className="text-gold text-xs font-medium uppercase tracking-widest inline-flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4" /> Welcome to Marvelous
            </span>
          </FadeIn>

          <FadeIn direction="up" delay={0.3} duration={1.2}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-wide text-cream leading-[1.1] mb-6 drop-shadow-2xl">
              Where Beauty Meets <br />
              <span className="text-transparent bg-clip-text bg-gold-gradient italic font-medium font-serif">
                Master Artistry
              </span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.5} duration={1}>
            <p className="text-cream/70 max-w-2xl mx-auto text-sm md:text-base lg:text-lg font-light tracking-wide leading-relaxed mb-10">
              Luxury salon experience for Men, Women & Children with professional hairstyling, skincare, makeup, and premium beauty treatments.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.7} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/services">
              <Button variant="primary" size="lg">
                Book Appointment
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg">
                Explore Services
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 2. Philosophy & Welcome Intro */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <FadeIn direction="right">
            <span className="text-gold text-xs font-medium uppercase tracking-widest block mb-3">Our Core Philosophy</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-cream leading-tight mb-6">
              Cultivating elegance, perfecting craft.
            </h2>
            <p className="text-cream/70 font-light text-base leading-relaxed mb-6">
              Marvelous Unisex Salon & Academy represents the duality of beauty. We believe that true luxury is found in specialized knowledge and personalized execution. Whether you are stepping in for a bespoke cosmetic look or setting foot in our classrooms to become a certified global technician, you are entering an atmosphere of refined standards.
            </p>
            <p className="text-cream/70 font-light text-base leading-relaxed mb-8">
              We leverage advanced dermal sciences and classic European cutting methods to create tailored beauty treatments that enhance individual identity.
            </p>
            
            {/* Business Highlights Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8 text-cream/80 text-sm font-light">
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-gold shrink-0" />
                <span>Experienced Stylists</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-gold shrink-0" />
                <span>Premium Products</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-gold shrink-0" />
                <span>Hygienic Environment</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-gold shrink-0" />
                <span>Luxury Experience</span>
              </div>
            </div>

            <Link to="/about">
              <Button variant="ghost" className="hover-underline p-0 flex items-center gap-2">
                Discover Our Story <ArrowRight className="w-4 h-4 text-gold" />
              </Button>
            </Link>
          </FadeIn>
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-2xl border border-white/5 aspect-[4/3]">
          <LuxuryImage
            src={home1Image}
            alt="Hair Styling Craft"
            aspectRatio="aspect-[4/3]"
            parallax={true}
          />
        </div>
      </section>

      {/* 3. Dual Brand Split Banner (Pinned Horizontal Scroll) */}
      <PinnedHorizontalScroll>
        {/* Salon Panel */}
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="mb-8 opacity-20">
            <Scissors className="w-32 h-32 text-gold mx-auto" />
          </div>
          <span className="bg-gold/10 text-gold text-xs uppercase tracking-widest font-semibold px-4 py-2 border border-gold/20 inline-block mb-8">
            Couture Services
          </span>
          <h3 className="font-serif text-5xl md:text-7xl text-cream mb-8 font-light">
            The Luxury <span className="italic font-medium text-gold">Salon</span>
          </h3>
          <p className="text-cream/70 font-light leading-relaxed mb-12 max-w-2xl mx-auto text-lg md:text-xl">
            Indulge in a premium range of hair sculpts, advanced skin therapies, makeup applications, and bespoke nail designs performed by senior creative directors.
          </p>
          <Link to="/services">
            <Button variant="outline" size="lg" className="hover:bg-gold hover:text-obsidian flex items-center gap-3 transition-all px-8 py-4">
              Explore Services <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Academy Panel */}
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="mb-8 opacity-20">
            <GraduationCap className="w-32 h-32 text-gold mx-auto" />
          </div>
          <span className="bg-gold/10 text-gold text-xs uppercase tracking-widest font-semibold px-4 py-2 border border-gold/20 inline-block mb-8">
            Vocational Academy
          </span>
          <h3 className="font-serif text-5xl md:text-7xl text-cream mb-8 font-light">
            The Training <span className="italic font-medium text-gold">Academy</span>
          </h3>
          <p className="text-cream/70 font-light leading-relaxed mb-12 max-w-2xl mx-auto text-lg md:text-xl">
            Embark on an accredited professional career path. Gain CIDESCO certifications, build hands-on skills in master labs, and learn salon business metrics.
          </p>
          <Link to="/academy">
            <Button variant="primary" size="lg" className="flex items-center gap-3 px-8 py-4">
              Explore Services <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </PinnedHorizontalScroll>

      {/* 4. Testimonials (Custom deck carousel) */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center">
        <FadeIn direction="up">
          <span className="text-gold text-xs font-medium uppercase tracking-widest block mb-3">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-cream mb-4">
            Loved by Our Clients
          </h2>
          <p className="text-cream/60 max-w-xl mx-auto text-sm font-light leading-relaxed mb-16">
            Real experiences from our valued customers who trust Marvelous Unisex Salon & Academy for premium grooming, beauty, and haircare services.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <TestimonialCarousel />
        </FadeIn>
      </section>

      {/* 5. Direct Conversion Booking banner */}
      <section className="relative py-28 overflow-hidden bg-obsidian-slate border-t border-white/5">
        <div className="absolute inset-0">
          <CinematicVideo 
            src="https://cdn.coverr.co/videos/coverr-woman-getting-her-hair-cut-in-a-salon-4029/1080p.mp4"
            poster={home2Image}
            overlayOpacity={0.7}
            overlay="dark"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h2 className="font-serif text-4xl md:text-6xl font-light text-cream leading-tight mb-6">
              Step Into a World of <br />
              <span className="italic font-medium text-gold font-serif">Refined Beauty</span>
            </h2>
            <p className="text-cream/70 font-light max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-10">
              Schedule your bespoke treatment today, or inquire with our academy admissions team to start your journey in professional beauty sciences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Book Appointment
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore Services
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
    </PageTransition>
  );
};
