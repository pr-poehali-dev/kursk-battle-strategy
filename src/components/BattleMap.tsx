
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const BattleMap = () => {
  return (
    <div className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-oswald font-bold text-center mb-6">КАРТА СРАЖЕНИЯ</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Курская битва разворачивалась на территории нескольких областей и включала в себя множество операций. Изучите карты основных направлений и этапов сражения.
        </p>

        <Tabs defaultValue="overview" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="overview">Общий план</TabsTrigger>
            <TabsTrigger value="north">Северный фас</TabsTrigger>
            <TabsTrigger value="south">Южный фас</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-0">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Общий план Курской битвы</CardTitle>
                <CardDescription>
                  Курский выступ ("дуга") - май-август 1943 года
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-[4/3] md:aspect-[16/9] bg-gray-200 rounded-md overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=2000" 
                    alt="Карта Курской битвы" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Info" className="h-4 w-4 text-yellow-400" />
                      <span>Курский выступ представлял собой дугу протяженностью около 550 км и глубиной до 150 км</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                    <h4 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
                      <Icon name="Shield" className="h-5 w-5" />
                      Советские войска
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Центральный фронт (Рокоссовский К.К.)</li>
                      <li>• Воронежский фронт (Ватутин Н.Ф.)</li>
                      <li>• Степной фронт (Конев И.С.)</li>
                      <li>• Брянский фронт (Попов М.М.)</li>
                      <li>• Юго-Западный фронт (Малиновский Р.Я.)</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-md border border-red-100">
                    <h4 className="font-medium text-red-800 mb-2 flex items-center gap-2">
                      <Icon name="Swords" className="h-5 w-5" fallback="Shield" />
                      Немецкие войска
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Группа армий "Центр" (Клюге Г.)</li>
                      <li>• Группа армий "Юг" (Манштейн Э.)</li>
                      <li>• 9-я армия (Модель В.)</li>
                      <li>• 4-я танковая армия (Гот Г.)</li>
                      <li>• Оперативная группа "Кемпф" (Кемпф В.)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="north" className="mt-0">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Северный фас Курской дуги</CardTitle>
                <CardDescription>
                  Наступление 9-й армии Моделя на Центральный фронт Рокоссовского
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-[4/3] md:aspect-[16/9] bg-gray-200 rounded-md overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1597409586605-27975e738f13?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=2000" 
                    alt="Карта северного фаса Курской дуги" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Milestone" className="h-4 w-4 text-yellow-400" />
                      <span>Немецкое наступление было остановлено после продвижения всего на 10-12 км</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-semibold">Ключевые события</h3>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="bg-gray-200 text-gray-800 font-medium px-2 py-1 rounded text-sm whitespace-nowrap">5-6 июля</div>
                      <p className="text-gray-700">Начало наступления 9-й армии вермахта. Советские войска организовали глубоко эшелонированную оборону.</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="bg-gray-200 text-gray-800 font-medium px-2 py-1 rounded text-sm whitespace-nowrap">7-9 июля</div>
                      <p className="text-gray-700">Ожесточенные бои в районе Понырей и Ольховатки. Немецкое наступление замедляется.</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="bg-gray-200 text-gray-800 font-medium px-2 py-1 rounded text-sm whitespace-nowrap">10-12 июля</div>
                      <p className="text-gray-700">Исчерпав свои возможности, немецкие войска на северном фасе перешли к обороне.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="south" className="mt-0">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Южный фас Курской дуги</CardTitle>
                <CardDescription>
                  Наступление 4-й танковой армии Гота и оперативной группы "Кемпф"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-[4/3] md:aspect-[16/9] bg-gray-200 rounded-md overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1557686413-2534ec560843?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=2000" 
                    alt="Карта южного фаса Курской дуги" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Flame" className="h-4 w-4 text-orange-400" />
                      <span>Здесь произошло крупнейшее танковое сражение под Прохоровкой 12 июля 1943 г.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-semibold">Ключевые события</h3>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="bg-gray-200 text-gray-800 font-medium px-2 py-1 rounded text-sm whitespace-nowrap">5-9 июля</div>
                      <p className="text-gray-700">Немецкие войска прорвали первую полосу обороны и продвинулись на 35 км вглубь советской территории.</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="bg-gray-200 text-gray-800 font-medium px-2 py-1 rounded text-sm whitespace-nowrap">12 июля</div>
                      <p className="text-gray-700">Танковое сражение под Прохоровкой. С обеих сторон участвовало до 1200 танков и самоходных орудий.</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="bg-gray-200 text-gray-800 font-medium px-2 py-1 rounded text-sm whitespace-nowrap">16-23 июля</div>
                      <p className="text-gray-700">Отступление немецких войск на исходные позиции. Начало контрнаступления советских войск.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Примечание: Представленные карты являются схематичными и предназначены для общего ознакомления. Для детального изучения рекомендуется обращаться к специализированным историческим атласам.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BattleMap;
