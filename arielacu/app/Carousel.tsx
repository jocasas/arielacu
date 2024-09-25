import { useEffect, useState } from 'react';
import Image from 'next/image';

type Slide = {
  title: string;
  imageUrl: string;
};

interface CarouselProps {
  slides: Slide[];
}

const Carousel = ({ slides }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setIsAnimating(false);
      }, 1000); // Match this to the animation duration (1s)
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const nextSlide = (currentSlide + 1) % slides.length;

  return (
    <div className="relative h-[550px] overflow-hidden">
      {/* Current Slide */}
      <div
        className={`absolute inset-0 h-full w-full transition-all duration-1000 ease-in-out ${isAnimating ? 'animate-slideOutLeft' : ''
          }`}
      >
        <Image
          src={slides[currentSlide].imageUrl}
          alt={slides[currentSlide].title}
          fill={true}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Next Slide */}
      <div
        className={`absolute inset-0 h-full w-full transition-all duration-1000 ease-in-out ${isAnimating ? 'animate-slideLeft' : 'hidden'
          }`}
      >
        <Image
          src={slides[nextSlide].imageUrl}
          alt={slides[nextSlide].title}
          fill={true}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />

      </div>
    </div>
  );
};

export default Carousel;
