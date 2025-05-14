
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Gallery = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1596450514735-111a27de3791?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1000',
      caption: 'Советские танки Т-34 на поле боя'
    },
    {
      url: 'https://images.unsplash.com/photo-1557690756-62754e561982?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1000',
      caption: 'Советская артиллерия на Курской дуге'
    },
    {
      url: 'https://images.unsplash.com/photo-1560704194-8afbc567f38d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1000',
      caption: 'Военная техника периода Великой Отечественной войны'
    },
    {
      url: 'https://images.unsplash.com/photo-1580254084584-0ea7864c8034?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1000',
      caption: 'Памятник героям Курской битвы'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-oswald font-bold text-center mb-12">ФОТОГАЛЕРЕЯ</h2>
        
        <div className="w-full max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="border-0">
                    <CardContent className="p-0">
                      <div className="relative aspect-video">
                        <img
                          src={image.url}
                          alt={image.caption}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 rounded-b-lg">
                          <p>{image.caption}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static mr-2 translate-y-0" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            Примечание: Изображения используются в качестве иллюстраций и могут не в полной мере отражать исторические события Курской битвы.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
