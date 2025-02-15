'use client';
import { useGameFlowStore } from '@/store/game-flow.store';
import { characters } from '@/data/characters.fixture';
import { HomeHero } from '@/presentation/home/home.hero';
import { useRouter } from 'next/navigation';
import { useShallow } from 'zustand/shallow';

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  const router = useRouter();
  const {
    selectedCharacter,
    setAvailableStoryCharacters,
    availableStoryCharacters,
  } = useGameFlowStore(
    useShallow((state) => ({
      selectedCharacter: state.selectedCharacter,
      setAvailableStoryCharacters: state.setAvailableStoryCharacters,
      availableStoryCharacters: state.availableStoryCharacters,
    }))
  );

  const handleHeroClick = () => {
    if (availableStoryCharacters.length === 0)
      setAvailableStoryCharacters(characters);
    router.push('#character-selection');
  };

  return (
    <div className='relative flex-1'>
      <div className='absolute h-full w-full opacity-15'>
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
      </div>
    </div>
  );
};
