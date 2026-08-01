import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Sparkles, Calendar, Clock, User, Phone, Mail, Award, Crown } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { Button } from '../components/ui/Button';
import { FadeIn } from '../components/animations/FadeIn';
import { PageTransition } from '../components/animations/PageTransition';
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer';
import { LuminousCard } from '../components/ui/LuminousCard';
import { LuxuryImage } from '../components/ui/LuxuryImage';
import { globalLenis } from '../hooks/useLenis';
import serviceBannerImage from '../components/images/service.jpg';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  category: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
}

export const Services: React.FC = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(() => {
    const hash = location.hash.replace('#', '');
    if (hash && servicesData.some(cat => cat.id === hash)) return hash;
    return servicesData[0]?.id || 'hair';
  });

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && servicesData.some(cat => cat.id === hash)) {
      setActiveCategory(hash);
    }
  }, [location.hash]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, watch, reset } = useForm<BookingFormData>({
    defaultValues: {
      category: servicesData[0]?.id || 'hair',
      service: servicesData[0]?.items[0]?.name || '',
    }
  });

  const selectedCategory = watch('category');
  const availableServices = servicesData.find(cat => cat.id === selectedCategory)?.items || [];

  const onSubmit = (data: BookingFormData) => {
    console.info('Booking request submitted:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const currentCategoryData = servicesData.find(cat => cat.id === activeCategory);

  return (
    <PageTransition>
      <div className="relative w-full">
        {/* Hero Header */}
      <section className="relative pt-40 pb-20 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={serviceBannerImage} alt="Couture Beauty Treatments" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-slate via-obsidian-slate/80 to-obsidian-slate/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <FadeIn direction="down">
            <span className="text-gold text-xs font-medium uppercase tracking-widest block mb-3">Service Menu</span>
            <h1 className="font-serif text-4xl md:text-6xl text-cream tracking-wide mb-6">
              Couture Beauty Treatments
            </h1>
            <p className="text-cream/60 max-w-xl mx-auto text-sm font-light leading-relaxed">
              Explore our curated selection of high-end beauty, hair, skin, and nail treatments performed by licensed masters.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Tabs & Menu Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 border-b border-white/5 pb-6">
          {servicesData.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                // Scroll gently to the details on mobile for better UX
                if (window.innerWidth < 1024) {
                  const el = document.getElementById('category-details');
                  if (el && globalLenis) {
                    globalLenis.scrollTo(el, { offset: -100 });
                  } else if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }
              }}
              className={`px-6 py-3 text-xs uppercase tracking-widest transition-all duration-300 font-medium ${
                activeCategory === category.id
                  ? 'border-b-2 border-gold text-gold font-semibold'
                  : 'text-cream/60 hover:text-cream border-b-2 border-transparent'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Selected Category Details */}
        <div id="category-details" className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left panel: Category Intro */}
          <div className="lg:col-span-1">
            <FadeIn key={`info-${activeCategory}`} direction="right">
              <span className="text-gold text-xs font-medium uppercase tracking-widest block mb-2">Category Overview</span>
              <h2 className="font-serif text-3xl font-light text-cream mb-4">{currentCategoryData?.name}</h2>
              <p className="text-cream/70 text-sm leading-relaxed font-light mb-6">
                {currentCategoryData?.description}
              </p>
              
              {currentCategoryData?.imageUrl && (
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/5 shadow-xl mb-8 group">
                  <LuxuryImage
                    src={currentCategoryData.imageUrl}
                    alt={currentCategoryData.name}
                  />
                  <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              )}

              <div className="mb-8">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    const el = document.getElementById('booking-form');
                    if (el && globalLenis) {
                      globalLenis.scrollTo(el);
                    } else if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Book Category
                </Button>
              </div>

              <div className="bg-obsidian-charcoal p-6 border border-white/5">
                <span className="text-gold text-xs font-medium uppercase tracking-wider block mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4" /> Guest Assurance
                </span>
                <p className="text-xs text-cream/50 leading-relaxed font-light">
                  All treatments include a complimentary scalp or skin analysis, premium organic botanical product lines, and luxury refreshments.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right panel: Services List */}
          <div className="lg:col-span-2">
            <StaggerContainer key={`services-${activeCategory}`} className="flex flex-col gap-8">
              {currentCategoryData?.items.map((item) => (
                <StaggerItem key={item.id}>
                  <div className="glass-card p-6 flex flex-col sm:flex-row justify-between gap-4 border-l-2 border-l-transparent hover:border-l-gold transition-all duration-300 relative group">
                    {item.popular && (
                      <span className="absolute top-0 right-6 -translate-y-1/2 bg-gold text-obsidian text-xxs uppercase tracking-widest font-semibold px-2 py-0.5">
                        Most Selected
                      </span>
                    )}
                    <div className="max-w-xl">
                      <h3 className="font-serif text-xl font-medium text-cream group-hover:text-gold transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-cream/60 text-xs font-light mt-2 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex gap-4 mt-3 text-xxs text-cream/40 uppercase tracking-wider font-light">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-gold" /> {item.duration}</span>
                      </div>
                    </div>
                    <div className="sm:text-right shrink-0 self-start sm:self-center">
                      <span className="text-2xl font-serif text-gold font-medium">{item.price}</span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Exclusive VIP Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center border-t border-white/5">
        <FadeIn direction="right">
          <span className="text-gold text-xs font-medium uppercase tracking-widest block mb-3">Elite Privilege</span>
          <h2 className="font-serif text-4xl text-cream font-light mb-6">The Obsidian Membership</h2>
          <p className="text-cream/70 text-sm font-light leading-relaxed mb-6">
            Elevate your salon experience. The Obsidian Membership grants you priority booking, a dedicated beauty concierge, complimentary bespoke treatments, and access to exclusive masterclasses before they open to the public.
          </p>
          <ul className="space-y-3 text-xs text-cream/60 font-light mb-8">
            <li className="flex items-center gap-2"><Award className="w-4 h-4 text-gold" /> Guaranteed monthly signature facial or hair treatment</li>
            <li className="flex items-center gap-2"><Award className="w-4 h-4 text-gold" /> 20% privilege on all curated retail boutique items</li>
            <li className="flex items-center gap-2"><Award className="w-4 h-4 text-gold" /> Invitation-only luxury launch events</li>
          </ul>
        </FadeIn>
        
        <FadeIn direction="up" className="flex justify-center md:justify-end">
          <LuminousCard 
            title="Obsidian Card"
            description="Unlock the pinnacle of beauty and exclusivity. Limited to 100 members globally."
            icon={<Crown className="w-12 h-12 text-gold" />}
            inactiveLabel="Activate"
            activeLabel="Active"
          />
        </FadeIn>
      </section>

      {/* Online Booking Request Form */}
      <section id="booking-form" className="py-24 bg-obsidian-charcoal border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <FadeIn direction="up">
              <span className="text-gold text-xs font-medium uppercase tracking-widest block mb-2">Reservation</span>
              <h2 className="font-serif text-3xl md:text-4xl text-cream font-light">Request An Appointment</h2>
              <p className="text-cream/50 text-xs mt-3 max-w-sm mx-auto font-light">
                Fill in the form below. Our salon concierge will call or text you within 2 hours to confirm your session.
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="up">
            <div className="glass-card p-8 md:p-12 relative">
              {isSubmitted && (
                <div className="absolute inset-0 bg-obsidian/95 backdrop-blur-md z-10 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center mb-4 text-gold animate-pulse">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl text-cream mb-2">Request Received Successfully</h3>
                  <p className="text-cream/60 max-w-md text-xs leading-relaxed font-light">
                    Thank you. We have logged your request. A Marvelous Salon representative will contact you shortly to confirm your booking coordinates.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xxs uppercase tracking-widest text-cream/60 mb-2 font-medium">Your Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 w-4 h-4 text-cream/40" />
                      <input
                        type="text"
                        required
                        {...register('name', { required: true })}
                        placeholder="Helena Vance"
                        className="w-full bg-obsidian text-cream text-sm pl-10 pr-4 py-3 border border-white/10 focus:border-gold/50 focus:ring-0 rounded-none transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xxs uppercase tracking-widest text-cream/60 mb-2 font-medium">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 w-4 h-4 text-cream/40" />
                      <input
                        type="email"
                        required
                        {...register('email', { required: true })}
                        placeholder="helena@example.com"
                        className="w-full bg-obsidian text-cream text-sm pl-10 pr-4 py-3 border border-white/10 focus:border-gold/50 focus:ring-0 rounded-none transition-all outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-xxs uppercase tracking-widest text-cream/60 mb-2 font-medium">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 w-4 h-4 text-cream/40" />
                      <input
                        type="tel"
                        required
                        {...register('phone', { required: true })}
                        placeholder="+91 97307 66355"
                        className="w-full bg-obsidian text-cream text-sm pl-10 pr-4 py-3 border border-white/10 focus:border-gold/50 focus:ring-0 rounded-none transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-xxs uppercase tracking-widest text-cream/60 mb-2 font-medium">Service Category</label>
                    <select
                      {...register('category')}
                      className="w-full bg-obsidian text-cream text-sm px-4 py-3 border border-white/10 focus:border-gold/50 focus:ring-0 rounded-none transition-all outline-none cursor-pointer"
                    >
                      {servicesData.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Specific Service */}
                  <div className="md:col-span-1">
                    <label className="block text-xxs uppercase tracking-widest text-cream/60 mb-2 font-medium">Desired Service</label>
                    <select
                      {...register('service')}
                      className="w-full bg-obsidian text-cream text-sm px-4 py-3 border border-white/10 focus:border-gold/50 focus:ring-0 rounded-none transition-all outline-none cursor-pointer"
                    >
                      {availableServices.map(srv => (
                        <option key={srv.id} value={srv.name}>{srv.name} ({srv.price})</option>
                      ))}
                    </select>
                  </div>

                  {/* Date */}
                  <div className="md:col-span-1">
                    <label className="block text-xxs uppercase tracking-widest text-cream/60 mb-2 font-medium">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-cream/40 pointer-events-none" />
                      <input
                        type="date"
                        required
                        {...register('date', { required: true })}
                        className="w-full bg-obsidian text-cream text-sm pl-10 pr-4 py-3 border border-white/10 focus:border-gold/50 focus:ring-0 rounded-none transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div className="md:col-span-1">
                    <label className="block text-xxs uppercase tracking-widest text-cream/60 mb-2 font-medium">Preferred Time</label>
                    <div className="relative">
                      <input
                        type="time"
                        required
                        {...register('time', { required: true })}
                        className="w-full bg-obsidian text-cream text-sm px-4 py-3 border border-white/10 focus:border-gold/50 focus:ring-0 rounded-none transition-all outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xxs uppercase tracking-widest text-cream/60 mb-2 font-medium">Special Requests / Notes</label>
                  <textarea
                    {...register('notes')}
                    rows={4}
                    placeholder="Mention skin allergies, specific hair types, or stylist preferences..."
                    className="w-full bg-obsidian text-cream text-sm px-4 py-3 border border-white/10 focus:border-gold/50 focus:ring-0 rounded-none transition-all outline-none resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="text-center pt-4">
                  <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto" magnetic>
                    Book Appointment
                  </Button>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
    </PageTransition>
  );
};
