import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Send, Sparkles, ChevronDown, Clock, Instagram } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { FadeIn } from '../components/animations/FadeIn';
import { PageTransition } from '../components/animations/PageTransition';
import contactHeroImage from '../components/images/contact.jpg';
import { generateWhatsAppLink } from '../utils/whatsapp';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const { register, handleSubmit, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    const url = generateWhatsAppLink('New Contact Inquiry', {
      Name: data.name,
      Email: data.email,
      Subject: data.subject,
      Message: data.message
    });
    window.open(url, '_blank');
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const faqs = [
    {
      q: 'Do I need to schedule an appointment for salon services?',
      a: 'We highly recommend scheduling a reservation in advance to guarantee your preferred time and stylist. Walk-ins are accommodated based on daily stylist availability.'
    },
    {
      q: 'Are your academy courses accredited?',
      a: 'Yes, our cosmetology diploma syllabus aligns with CIDESCO credentials. We prepare students for international certifications and state board licenses.'
    },
    {
      q: 'Which skincare brands do you use in your dermal treatments?',
      a: 'We use high-end clinical dermal brands that are organic, non-comedogenic, and scientifically certified. Specific brands can be requested during consultations.'
    },
    {
      q: 'Can I pay course fees in installments?',
      a: 'Yes, our academy financial office provides flexible interest-free installment plans. Inquiry about payment pathways during campus enrollment interviews.'
    }
  ];

  return (
    <PageTransition>
      <div className="relative w-full">
        {/* Page Header */}
      <section className="relative pt-40 pb-20 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={contactHeroImage} alt="Connect With Us" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-slate via-obsidian-slate/80 to-obsidian-slate/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <FadeIn direction="down">
            <span className="text-gold text-xs font-medium uppercase tracking-widest block mb-3">Get In Touch</span>
            <h1 className="font-serif text-4xl md:text-6xl text-cream tracking-wide mb-6">
              Connect With Us
            </h1>
            <p className="text-cream/60 max-w-xl mx-auto text-sm font-light leading-relaxed">
              Have a question about our beauty menu, looking to book a wedding trial, or ready to enroll in cosmetology studies? We are here to help.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Form & Detail Columns */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Info Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          <div>
            <span className="text-gold text-xs font-medium uppercase tracking-widest block mb-3">Our Sanctuary</span>
            <h2 className="font-serif text-3xl font-light text-cream mb-6">Salon &amp; Campus Coordinates</h2>
            <p className="text-cream/70 text-sm leading-relaxed font-light">
              Visit our central salon and academy campus in Pune. Our front desk concierge is available daily for bookings, campus tours, and student enrollment consults.
            </p>
          </div>

          {/* Details list */}
          <ul className="flex flex-col gap-6 text-sm text-cream/80 font-light">
            <li className="flex gap-4 items-start">
              <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
              <div>
                <span className="block text-xs uppercase tracking-widest text-cream/40 mb-1">Campus Address</span>
                <span>Shop No.36 Kakde Plaza, Opp. Kakade City,<br />Karvenagar, Pune, Maharashtra 411052</span>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <Clock className="w-5 h-5 text-gold shrink-0 mt-1" />
              <div>
                <span className="block text-xs uppercase tracking-widest text-cream/40 mb-1">Working Hours</span>
                <span className="font-medium text-gold">Mon - Sun: 9:00 AM – 9:00 PM</span>
                <span className="block text-[11px] text-cream/40 italic">Open Daily</span>
              </div>
            </li>
            <li className="flex gap-4 items-center">
              <Phone className="w-5 h-5 text-gold shrink-0" />
              <div>
                <span className="block text-xs uppercase tracking-widest text-cream/40 mb-1">Telephone</span>
                <a href="tel:+919730766355" className="hover:text-gold transition-colors font-medium">+91 97307 66355</a>
              </div>
            </li>
            <li className="flex gap-4 items-center">
              <Mail className="w-5 h-5 text-gold shrink-0" />
              <div>
                <span className="block text-xs uppercase tracking-widest text-cream/40 mb-1">Direct Email</span>
                <a href="mailto:concierge@marvelous.com" className="hover:text-gold transition-colors font-medium">concierge@marvelous.com</a>
              </div>
            </li>
            <li className="flex gap-4 items-center">
              <Instagram className="w-5 h-5 text-gold shrink-0" />
              <div>
                <span className="block text-xs uppercase tracking-widest text-cream/40 mb-1">Instagram</span>
                <a href="https://www.instagram.com/marvelous_unisex_salon_academy/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors font-medium">@marvelous_unisex_salon_academy</a>
              </div>
            </li>
          </ul>

          {/* Map Redirect & Call to Actions */}
          <div className="flex flex-col gap-4 mt-4">
            <a href="https://maps.app.goo.gl/JPiLWSQCEqFmpoBE8" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="outline" className="w-full justify-center">
                Get Directions
              </Button>
            </a>
            <a href="https://www.instagram.com/marvelous_unisex_salon_academy/" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="outline" className="w-full justify-center">
                Follow on Instagram
              </Button>
            </a>
          </div>
        </div>

        {/* Message Form Column (7 cols) */}
        <div className="lg:col-span-7">
          <FadeIn direction="left">
            <div className="glass-card p-8 md:p-10 relative">
              {isSubmitted && (
                <div className="absolute inset-0 bg-obsidian/95 backdrop-blur-md z-10 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center mb-4 text-gold">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl text-cream mb-2">Message Sent</h3>
                  <p className="text-cream/60 max-w-md text-xs leading-relaxed font-light">
                    Thank you for connecting with Marvelous. We have received your inquiry and will respond to your registered email address within 24 hours.
                  </p>
                </div>
              )}

              <h3 className="font-serif text-2xl font-medium text-cream mb-6">Send A Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="md:col-span-1">
                    <label className="block text-xxs uppercase tracking-widest text-cream/60 mb-2 font-medium">Your Name</label>
                    <input
                      type="text"
                      required
                      {...register('name')}
                      placeholder="Victoria Vance"
                      className="w-full bg-obsidian text-cream text-sm px-4 py-3 border border-white/10 focus:border-gold/50 focus:ring-0 rounded-none transition-all outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div className="md:col-span-1">
                    <label className="block text-xxs uppercase tracking-widest text-cream/60 mb-2 font-medium">Email Address</label>
                    <input
                      type="email"
                      required
                      {...register('email')}
                      placeholder="victoria@example.com"
                      className="w-full bg-obsidian text-cream text-sm px-4 py-3 border border-white/10 focus:border-gold/50 focus:ring-0 rounded-none transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xxs uppercase tracking-widest text-cream/60 mb-2 font-medium">Inquiry Subject</label>
                  <select
                    required
                    {...register('subject')}
                    className="w-full bg-obsidian text-cream text-sm px-4 py-3 border border-white/10 focus:border-gold/50 focus:ring-0 rounded-none transition-all outline-none"
                  >
                    <option value="">Select a subject</option>
                    <option value="academy">Academy Scholarship</option>
                    <option value="bridal">Bridal Booking</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xxs uppercase tracking-widest text-cream/60 mb-2 font-medium">Message Body</label>
                  <textarea
                    required
                    {...register('message')}
                    rows={6}
                    placeholder="Describe your inquiry in detail..."
                    className="w-full bg-obsidian text-cream text-sm px-4 py-3 border border-white/10 focus:border-gold/50 focus:ring-0 rounded-none transition-all outline-none resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <Button type="submit" variant="primary" size="md" className="w-full" magnetic>
                    Send Message <Send className="w-4 h-4 ml-1.5" />
                  </Button>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 bg-obsidian-slate border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <FadeIn direction="up">
              <span className="text-gold text-xs font-medium uppercase tracking-widest block mb-3">FAQ</span>
              <h2 className="font-serif text-3xl md:text-4xl text-cream font-light">Frequently Asked Questions</h2>
            </FadeIn>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <FadeIn key={idx} direction="up" delay={idx * 0.05}>
                  <div className="border border-white/5 bg-obsidian-charcoal">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left p-6 flex justify-between items-center gap-4 transition-colors hover:bg-white/[0.01]"
                    >
                      <span className="font-serif text-base md:text-lg text-cream tracking-wide font-medium">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-sm text-cream/60 leading-relaxed font-light border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
};
