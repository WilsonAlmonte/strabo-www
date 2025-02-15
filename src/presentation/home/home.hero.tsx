import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import bgYellow from '@/assets/bk/yellow.jpg';
import bgRed from '@/assets/bk/red.jpg';
import bgDark from '@/assets/bk/dark.jpg';
import bgRuins from '@/assets/bk/ruins.png';
import { motion } from 'motion/react';
import { useState } from 'react';
import Image from 'next/image';
const imageList = [bgYellow, bgRed, bgDark, bgRuins];
export const HomeHero = ({ onStartClick }: { onStartClick: () => void }) => {
  const [selectedImage, setSelectedImage] = useState(imageList[0]);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const prevSlide = () => {
    const currentIndex = imageList.indexOf(selectedImage);
    const nextIndex =
      currentIndex === 0 ? imageList.length - 1 : currentIndex - 1;
    setSelectedImage(imageList[nextIndex]);
  };

  const imageLoaded = (image: string) => {
    setLoadedImages([...loadedImages, image]);
  };

  const nextSlide = () => {
    const currentIndex = imageList.indexOf(selectedImage);
    const nextIndex =
      currentIndex === imageList.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(imageList[nextIndex]);
  };
  return (
    <div
      className='hero relative flex min-h-screen flex-col overflow-x-hidden transition-all duration-500'
      style={{
        maskImage:
          'linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 80%, transparent 100%)',
      }}
    >
      {imageList.map((img) => (
        <motion.div
          className='absolute inset-0 z-0 min-h-screen'
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: selectedImage.src === img.src ? 1 : 0,
            transition: {
              duration: 0.5,
              ease: selectedImage.src === img.src ? 'circInOut' : 'anticipate',
            },
          }}
          key={img.src}
        >
          <Image
            priority
            alt='Background'
            src={img}
            placeholder='empty'
            fill
            onLoad={() => imageLoaded('yello')}
            sizes='100vw'
            style={{
              objectFit: 'cover',
            }}
          />
        </motion.div>
      ))}

      <nav className='navbar z-10 w-full backdrop-blur-2xl'>
        <div className='font-display text-base-100 mx-2 flex flex-1 items-center gap-2 px-2 text-3xl'>
          STRABO
        </div>
        <div className='font-elements flex gap-2 pr-2'>
          <a>How to play?</a>
        </div>
      </nav>
      <div className='bg-neutral/50 absolute col-start-1 row-start-1 h-full w-full'></div>
      <div className='hero-content text-neutral-content flex-1 items-center text-center'>
        <div className='z-20 mb-20 max-w-2xl'>
          <div className='font-display text-center'>
            <h1 className='mb-5 text-6xl font-bold'>
              <span className='text-bright'>Welcome</span>
            </h1>
            <h1 className='mb-5 text-5xl font-bold'>
              <span className='text-bright'>to</span>
            </h1>
            <h1 className='mb-5 text-9xl font-bold'>
              <span className='text-bright'>STRABO</span>
            </h1>
          </div>
          <div className='text-primary flex items-center justify-center gap-10'>
            <button className='gradient-btn btn' onClick={prevSlide}>
              <ArrowLeftIcon size={30} />
            </button>
            <button className='gradient-btn btn btn-lg' onClick={onStartClick}>
              <span className='font-display'>Start your journey</span>
            </button>
            <button className='gradient-btn btn' onClick={nextSlide}>
              <ArrowRightIcon size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
