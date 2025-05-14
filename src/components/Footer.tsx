
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-white">Курская битва</h3>
            <p className="text-sm">Историческая память о великом сражении</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div>
              <h4 className="text-white font-medium mb-2">Ссылки</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-white transition-colors">О проекте</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Источники</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-2">Рекомендуемые материалы</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-white transition-colors">Музей Курской битвы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Исторические документы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Библиография</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} · Все права защищены · Информационно-исторический ресурс</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
