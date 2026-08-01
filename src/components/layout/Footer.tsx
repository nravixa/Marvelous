import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to our luxury newsletter!');
  };

  return (
    <footer className="bg-obsidian-dark border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Brand Info */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-3 focus:outline-none">
            <img src="/src/assets/logo.svg" alt="Marvelous Unisex Salon Logo" className="h-10 w-10" />
            <span className="font-serif text-lg font-semibold uppercase tracking-[0.2em] text-cream">
              MARVELOUS
            </span>
          </Link>
          <p className="text-sm text-cream/60 leading-relaxed font-light">
            Indulge in couture beauty services at our premium unisex salon, or learn the art of cosmetology from master educators at our professional academy.
          </p>
          <div className="flex items-center gap-4 text-cream/70">
            <a href="https://www.instagram.com/marvelous_unisex_salon_academy/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Column 2: Working Hours */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-lg font-medium text-gold tracking-wide">Working Hours</h4>
          <ul className="flex flex-col gap-3 text-sm text-cream/70 font-light">
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Mon - Sun</span>
              <span className="text-cream font-medium">9:00 AM - 9:00 PM</span>
            </li>
            <li className="text-[11px] text-cream/40 italic mt-1">
              * Open Daily for luxury beauty treatments and academy sessions.
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Details */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-lg font-medium text-gold tracking-wide">Contact Us</h4>
          <ul className="flex flex-col gap-4 text-sm text-cream/70 font-light">
            <li className="flex gap-3 items-start">
              <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <a href="https://maps.app.goo.gl/JPiLWSQCEqFmpoBE8" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                Shop No.36 Kakde Plaza, Opp. Kakade City,<br />Karvenagar, Pune, Maharashtra 411052
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="w-5 h-5 text-gold shrink-0" />
              <a href="tel:+919730766355" className="hover:text-gold transition-colors">+91 97307 66355</a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="w-5 h-5 text-gold shrink-0" />
              <a href="mailto:concierge@marvelous.com" className="hover:text-gold transition-colors">concierge@marvelous.com</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-lg font-medium text-gold tracking-wide">Newsletter</h4>
          <p className="text-sm text-cream/60 leading-relaxed font-light">
            Subscribe to receive luxury trend reports, beauty advice, and course updates.
          </p>
          <form onSubmit={handleSubscribe} className="relative mt-2">
            <input
              type="email"
              required
              placeholder="Your email address"
              className="w-full bg-obsidian-charcoal text-cream text-sm px-4 py-3 border border-white/10 focus:border-gold/50 focus:ring-0 rounded-none transition-all outline-none pr-12 font-light"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 bottom-0 px-4 text-gold hover:text-white transition-colors duration-300"
              aria-label="Subscribe"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/40">
        <div>
          &copy; {currentYear} <a href="https://nravixa.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300">NRAVIXA</a>. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:underline hover:text-cream transition-colors">Privacy Policy</a>
          <a href="#" className="hover:underline hover:text-cream transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
