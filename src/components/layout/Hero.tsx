import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroMain from '@/assets/hero-main.jpg';
import educationHero from '@/assets/education-hero.jpg';
import plantationHero from '@/assets/plantation-hero.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden md:-ml-8 md:-mr-8">
      <div className="absolute inset-0 bg-gradient-brand opacity-75"></div>
      <img
        src={educationHero}
        alt="Child studying"
        className="absolute top-0 right-0 h-1/2 w-1/3 object-cover opacity-50 hidden md:block"
      />
      <img
        src={plantationHero}
        alt="Planting trees"
        className="absolute bottom-0 right-1/4 h-1/3 w-1/4 object-cover opacity-50 hidden md:block"
      />
       <img
        src={heroMain}
        alt="Community gathering"
        className="absolute bottom-0 left-0 h-1/4 w-1/3 object-cover opacity-50 hidden md:block"
      />
      <div className="relative z-10 text-center md:text-left text-white max-w-4xl mx-auto px-4">
        <h1 className="font-manrope font-extrabold text-5xl md:text-8xl mb-6 animate-fade-in">
          Creating a brighter tomorrow
        </h1>
        <p className="font-manrope text-lg md:text-2xl mb-8 animate-fade-in max-w-xl">
          121 million children of primary and lower secondary school age do not have access to education.
        </p>
        <div className="flex justify-center md:justify-start gap-4 animate-fade-in">
          <Button size="lg" asChild className="shadow-hero bg-brand-yellow text-brand-dark font-bold hover:bg-yellow-400">
            <Link to="/donate">Make a Donation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
