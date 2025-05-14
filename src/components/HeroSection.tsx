
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-black">
        <img 
          src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=2000" 
          alt="Военная техника времен Великой Отечественной войны" 
          className="object-cover w-full h-full opacity-40"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-oswald tracking-wider">
          КУРСКАЯ БИТВА
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-6 max-w-3xl">
          5 июля — 23 августа 1943 года
        </p>
        <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl">
          Одно из ключевых сражений Великой Отечественной войны, переломный момент в истории противостояния советских и немецких войск
        </p>
        <Button className="bg-red-600 hover:bg-red-700" size="lg">
          Узнать больше
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
