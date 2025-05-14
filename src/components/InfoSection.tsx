
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const InfoSection = () => {
  const facts = [
    {
      icon: 'Users',
      title: 'Участники',
      content: 'С советской стороны около 1,3 млн человек, с немецкой — около 900 тыс. человек'
    },
    {
      icon: 'Tank',
      title: 'Техника',
      content: 'СССР: около 3600 танков; Германия: около 2700 танков и штурмовых орудий'
    },
    {
      icon: 'MapPin',
      title: 'Место',
      content: 'Курская дуга — выступ советско-германского фронта протяженностью 550 км'
    },
    {
      icon: 'Calendar',
      title: 'Продолжительность',
      content: '50 дней ожесточенных боев, включая крупнейшее танковое сражение под Прохоровкой'
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-oswald font-bold text-center mb-12">ОСНОВНЫЕ ФАКТЫ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg border-gray-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-red-600 p-3 rounded-full mb-4">
                    <Icon name={fact.icon} className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{fact.title}</h3>
                  <p className="text-gray-600">{fact.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-md p-6 md:p-8">
          <h3 className="text-2xl font-semibold mb-4">Историческое значение</h3>
          <p className="text-gray-700 mb-4">
            Курская битва стала решающим сражением в ходе Великой Отечественной войны. После поражения в этой битве стратегическая инициатива окончательно перешла к Красной армии, которая удерживала её до конца войны.
          </p>
          <p className="text-gray-700">
            Немецкие войска понесли невосполнимые потери, особенно в бронетехнике. Операция «Цитадель» стала последней стратегической наступательной операцией германских войск на Восточном фронте.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
