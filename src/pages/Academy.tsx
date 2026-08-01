import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { GraduationCap, BookOpen, User, Phone, Mail, Award, Sparkles, CheckCircle } from 'lucide-react';
import { coursesData } from '../data/coursesData';
import { Button } from '../components/ui/Button';
import { FadeIn } from '../components/animations/FadeIn';
import { PageTransition } from '../components/animations/PageTransition';

import academyHeroImage from '../components/images/academy.jpg';

interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  experience: string;
  statement: string;
}

export const Academy: React.FC = () => {
  const [activeCourseId, setActiveCourseId] = useState<string | null>(coursesData[0]?.id || null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, reset } = useForm<InquiryFormData>({
    defaultValues: {
      course: coursesData[0]?.name || '',
      experience: 'none',
    }
  });

  const onSubmit = (data: InquiryFormData) => {
    console.info('Academy Inquiry submitted:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const selectedCourse = coursesData.find(c => c.id === activeCourseId);

  return (
    <PageTransition>
      <div className="relative w-full">
        {/* 1. Page Header */}
      <section className="relative pt-40 pb-20 bg-obsidian-slate border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={academyHeroImage} alt="Marvelous Vocational Academy" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-slate via-obsidian-slate/80 to-obsidian-slate/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <FadeIn direction="down">
            <span className="text-gold text-xs font-medium uppercase tracking-widest block mb-3">Vanguard Cosmetology Education</span>
            <h1 className="font-serif text-4xl md:text-6xl text-cream tracking-wide mb-6">
              Marvelous Vocational Academy
            </h1>
            <p className="text-cream/60 max-w-2xl mx-auto text-sm font-light leading-relaxed">
              Accelerate your artistic and business journey. Study beauty sciences under internationally certified educators with real-world salon practical hours.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Course Catalog Detail Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Course Selection List (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-gold text-xs font-medium uppercase tracking-widest block mb-2">Academic Programs</span>
            {coursesData.map((course) => (
              <button
                key={course.id}
                onClick={() => setActiveCourseId(course.id)}
                className={`w-full text-left p-6 glass-card transition-all duration-300 relative ${
                  activeCourseId === course.id
                    ? 'border-l-4 border-l-gold bg-white-alpha-3'
                    : 'hover:bg-white-alpha-1'
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xxs uppercase tracking-widest text-gold font-medium">{course.level}</span>
                  <span className="text-xxs text-cream/40">{course.duration}</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-cream">
                  {course.name}
                </h3>
                <div className="flex-grow">
                  <p className="text-xs-plus text-cream/50 leading-relaxed font-light">
                    {course.description}
                  </p>
                </div>
              </button>
            ))}

            {/* Accreditation Badge */}
            <div className="mt-6 p-6 border border-white/5 bg-obsidian-charcoal">
              <div className="flex gap-3 items-start">
                <Award className="w-8 h-8 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-base text-cream mb-1">Global Accreditations</h4>
                  <p className="text-[11px] text-cream/50 leading-relaxed font-light">
                    Our diplomas are globally recognized by leading aesthetic organizations. Graduation awards CIDESCO compliance coordinates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Selected Course Detailed View (8 cols) */}
          <div className="lg:col-span-8">
            {selectedCourse ? (
              <FadeIn key={selectedCourse.id} direction="none" duration={0.5}>
                <div className="glass-card p-8 md:p-10">
                  {/* Banner Image */}
                  <div className="h-64 w-full overflow-hidden bg-obsidian-slate mb-8 relative">
                    <img src={selectedCourse.imageUrl} alt={selectedCourse.name} className="w-full h-full object-cover opacity-75" />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
                    <span className="absolute bottom-6 left-6 bg-gold text-obsidian text-xs uppercase tracking-widest font-semibold px-3 py-1.5">
                      {selectedCourse.certification}
                    </span>
                  </div>

                  {/* Header Title */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6 mb-6">
                    <div>
                      <h2 className="font-serif text-3xl font-light text-cream">{selectedCourse.name}</h2>
                      <span className="text-xs text-gold/80 mt-1 block">Level: {selectedCourse.level} | {selectedCourse.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-cream/70 text-sm font-light leading-relaxed mb-8">
                    {selectedCourse.description}
                  </p>

                  <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-end">
                    <div>
                      <span className="block text-xxs text-cream/40 uppercase tracking-widest">Enrollment Fee</span>
                      <span className="font-serif text-2xl text-cream">{selectedCourse.price}</span>
                    </div>
                  </div>

                  {/* Syllabus / Modules Accordion */}
                  <div className="mb-8">
                    <h3 className="font-serif text-xl font-medium text-cream mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-gold" /> Curriculum Outline
                    </h3>
                    <div className="space-y-4">
                      {selectedCourse.modules.map((mod, index) => (
                        <div key={index} className="p-4 bg-obsidian border border-white/5">
                          <h4 className="text-sm font-medium text-gold mb-1">{mod.title}</h4>
                          <p className="text-xs text-cream/60 leading-relaxed font-light">{mod.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Career Pathways */}
                  <div>
                    <h3 className="font-serif text-xl font-medium text-cream mb-4 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-gold" /> Graduate Career Outcomes
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedCourse.careerPathways.map((path, idx) => (
                        <div key={idx} className="flex gap-2 items-center text-xs text-cream/70 font-light">
                          <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                          <span>{path}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </FadeIn>
            ) : (
              <div className="glass-card p-12 text-center text-cream/40 font-light">
                Select a course on the left to view detailed syllabus coordinates.
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 3. Admission Inquiry Form */}
      <section className="py-24 bg-obsidian-charcoal border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-12">
            <FadeIn direction="up">
              <span className="text-gold text-xs font-medium uppercase tracking-widest block mb-2">Admissions Office</span>
              <h2 className="font-serif text-3xl md:text-4xl text-cream font-light">Request Enrollment Information</h2>
              <p className="text-cream/50 text-xs mt-3 max-w-sm mx-auto font-light">
                Interested in professional certification? Fill in our inquiries form. An academic advisor will reach out to scheduling a campus tour.
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="up">
            <div className="glass-card p-8 md:p-12 relative">
              {isSubmitted && (
                <div className="absolute inset-0 bg-obsidian/95 backdrop-blur-md z-10 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center mb-4 text-gold">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl text-cream mb-2">Admission Ticket Logged</h3>
                  <p className="text-cream/60 max-w-md text-xs leading-relaxed font-light">
                    Our admissions director will contact you via email/phone coordinates within 24 hours to guide you through registration metrics and catalog downloads.
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
                        {...register('name')}
                        placeholder="Marcus Helena"
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
                        {...register('email')}
                        placeholder="marcus@example.com"
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
                        {...register('phone')}
                        placeholder="+1 (555) 019-2834"
                        className="w-full bg-obsidian text-cream text-sm pl-10 pr-4 py-3 border border-white/10 focus:border-gold/50 focus:ring-0 rounded-none transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Selected Course */}
                  <div>
                    <label className="block text-xxs uppercase tracking-widest text-cream/60 mb-2 font-medium">Selected Program</label>
                    <select
                      {...register('course')}
                      className="w-full bg-obsidian text-cream text-sm px-4 py-3 border border-white/10 focus:border-gold/50 focus:ring-0 rounded-none transition-all outline-none cursor-pointer"
                    >
                      {coursesData.map(c => (
                        <option key={c.id} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Background Qualification */}
                  <div>
                    <label className="block text-xxs uppercase tracking-widest text-cream/60 mb-2 font-medium">Prior Beauty Experience</label>
                    <select
                      {...register('experience')}
                      className="w-full bg-obsidian text-cream text-sm px-4 py-3 border border-white/10 focus:border-gold/50 focus:ring-0 rounded-none transition-all outline-none cursor-pointer"
                    >
                      <option value="none">None - Complete Beginner</option>
                      <option value="basic">Self-taught / Basic tutorials</option>
                      <option value="licensed">Licensed / Professional experience</option>
                    </select>
                  </div>

                  {/* Statement of Interest */}
                  <div className="mt-6">
                    <label className="block text-xxs uppercase tracking-widest text-cream/60 mb-2 font-medium">Statement of Intent</label>
                    <textarea
                      required
                      {...register('statement')}
                      placeholder="Briefly state your career aspiration..."
                      className="w-full bg-obsidian text-cream text-sm px-4 py-3 border border-white/10 focus:border-gold/50 focus:ring-0 rounded-none transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto" magnetic>
                    Submit Admissions Inquiry
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
