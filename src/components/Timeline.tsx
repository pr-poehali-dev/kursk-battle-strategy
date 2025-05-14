
import React from 'react';

const Timeline = () => {
  const events = [
    {
      date: '5 июля 1943',
      title: 'Начало операции «Цитадель»',
      description: 'Немецкие войска переходят в наступление на северном и южном фасах Курского выступа.'
    },
    {
      date: '12 июля 1943',
      title: 'Танковое сражение под Прохоровкой',
      description: 'Крупнейшее встречное танковое сражение Второй мировой войны, в котором участвовало до 1200 танков и самоходных орудий.'
    },
    {
      date: '15-23 июля 1943',
      title: 'Контрнаступление советских войск',
      description: 'Войска Брянского и Центрального фронтов начинают наступление на орловском направлении.'
    },
    {
      date: '3-23 августа 1943',
      title: 'Белгородско-Харьковская операция',
      description: 'Советские войска освобождают Белгород и Харьков, завершая Курскую битву.'
    }
  ];

  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-oswald font-bold text-center mb-16">ХРОНОЛОГИЯ СРАЖЕНИЯ</h2>
        
        <div className="relative border-l-4 border-red-600 ml-6 md:ml-0 md:mx-auto md:max-w-3xl pl-6 md:pl-0">
          {events.map((event, index) => (
            <div key={index} className={`mb-16 md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8 md:text-right'}`}>
              <div className="absolute -left-3 md:left-1/2 md:-ml-2 flex items-center justify-center w-6 h-6 bg-red-600 rounded-full">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <span className="inline-block px-3 py-1 mb-3 text-sm font-semibold text-white bg-gray-800 rounded">
                  {event.date}
                </span>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
