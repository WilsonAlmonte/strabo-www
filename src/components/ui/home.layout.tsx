'use client';
import { useGameFlowStore } from '@/store/game-flow.store';
import { characters } from '@/data/characters.fixture';
import { HomeHero } from '@/presentation/home/home.hero';
import { useRouter } from 'next/navigation';
import { useShallow } from 'zustand/shallow';
import { motion } from 'motion/react';

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  const router = useRouter();
  const {
    selectedCharacter,
    setAvailableStoryCharacters,
    availableStoryCharacters,
    error,
  } = useGameFlowStore(
    useShallow((state) => ({
      selectedCharacter: state.selectedCharacter,
      setAvailableStoryCharacters: state.setAvailableStoryCharacters,
      availableStoryCharacters: state.availableStoryCharacters,
      error: state.error,
    }))
  );

  const handleHeroClick = () => {
    if (availableStoryCharacters.length === 0)
      setAvailableStoryCharacters(characters);
    router.push('#character-selection');
  };

  return (
    <div className='relative flex-1'>
      <div className='absolute z-50 h-full w-full opacity-15'>
        <video autoPlay loop muted className='h-full w-full object-fill'>
          <source src='/bg-video.mp4' type='video/mp4' />
        </video>
      </div>
      <div
        style={
          {
            '--bg-color': `var(--color-${
              selectedCharacter?.color
                ? selectedCharacter.color + '-900'
                : 'neutral'
            })`,
            '--char-color': `var(--color-${
              selectedCharacter?.color
                ? selectedCharacter.color + '-500'
                : 'neutral'
            })`,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } as any
        }
        className='drawer-content to-neutral flex h-full flex-col bg-linear-to-b from-(--bg-color) via-[#0e1215] via-70% transition-colors duration-500'
      >
        <HomeHero onStartClick={handleHeroClick} />

        <main className='flex-1'>
          {/* Page content here */}
          <div className=''>{children}</div>
        </main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: error ? 1 : 0 }}
          className='toast toast-top toast-center z-50'
        >
          <div className='alert alert-error'>
            <span>An error occurred while fetching the next story branch</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
