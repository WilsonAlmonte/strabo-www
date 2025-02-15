'use client';

import {
  StoryCharacterCard,
  StoryCharacterData,
} from '@/core/character.interface';
import { hover, useAnimate } from 'motion/react';
import Image from 'next/image';
import { useEffect, useImperativeHandle } from 'react';

export interface CardAnimationTriggers {
  flipCard: () => Promise<void>;
}

interface CharacterCardProps {
  data: StoryCharacterData;
  characterSelected?: (characterId: string) => void;
  isSelected?: boolean;
  ref?: React.RefObject<CardAnimationTriggers | null>;
}

const showBackAnimation = [
  [
    '#card-back',
    { rotateY: -90 },
    {
      duration: 0.01,
    },
  ],
  [
    '#card-front',
    { rotateY: -90 },
    {
      duration: 0.06,
    },
  ],
  [
    '#card-back',
    { rotateY: 0 },
    {
      duration: 0.06,
    },
  ],
];
const showFront = [
  [
    '#card-front',
    { rotateY: -90 },
    {
      duration: 0.01,
    },
  ],
  [
    '#card-back',
    { rotateY: 90 },
    {
      duration: 0.06,
    },
  ],
  [
    '#card-front',
    { rotateY: 0 },
    {
      duration: 0.06,
    },
  ],
];
const cardFlipAnimation = [...showBackAnimation, ...showFront];
export const CharacterCard: React.FC<CharacterCardProps> = ({
  data,
  characterSelected,
  isSelected,
  ref,
}) => {
  const [scope, animate] = useAnimate();
  const selectedSound = new Howl({
    src: ['/sound/selected.mp3'],
    loop: false,
    volume: 0.2,
  });
  const hoverSound = new Howl({
    src: ['/sound/hover.m4a'],
    loop: false,
    volume: 0.1,
  });

  const flipCard = async () => {
    selectedSound.play();
    await animate(scope.current, { y: 50 }, { duration: 0.4 });
    await animate([...cardFlipAnimation], {
      repeat: 2,
      repeatType: 'loop',
      ease: 'easeIn',
    });
    await animate(scope.current, { y: 0 }, { duration: 0.2, ease: 'easeIn' });
  };

  useEffect(() => {
    if (scope.current) {
      hover(scope.current, () => {
        animate([...showBackAnimation], {}).then(() => {
          hoverSound.play();
        });
        return async () => {
          await animate([...showFront], {});
        };
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope, animate]);

  useImperativeHandle(ref, () => ({
    flipCard,
  }));

  const character = new StoryCharacterCard(data);

  const handleCardClick = () => {
    if (characterSelected) {
      characterSelected(character.id);
    }
  };

  return (
    <div
      ref={scope}
      className='group relative mt-2 h-fit'
      onClick={handleCardClick}
      rel='button'
      style={
        {
          cursor: isSelected ? 'default' : 'pointer',
          '--bg-color': `var(--color-${
            character?.color ? character.color + '-900' : 'neutral'
          })`,
          '--char-color': `var(--color-${
            character?.color ? character.color + '-500' : 'neutral'
          })`,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any
      }
    >
      <div
        id='card-back'
        className='ard ring-primary absolute h-full w-full rounded-sm bg-gradient-to-br from-(--char-color)/10 to-(--bg-color)/10 p-2 ring-4 backdrop-blur-xl ring-inset transform-3d group-hover:rotate-0'
      >
        <div className='flex h-full w-full items-center justify-center'>
          <div className='absolute'>
            <Image
              src={'/logo.png'}
              width={200}
              height={200}
              alt='logo'
              className='opacity-5 mix-blend-overlay grayscale filter'
            />
          </div>
          <div className='flex flex-col items-center px-4'>
            <span className='font-body text-center text-lg'>
              {character.personality}
            </span>
          </div>
        </div>
      </div>
      <div id='card-front' className='perspective-normal transform-3d'>
        <div className='cursor-pointer'>
          <div
            className={`card from-base-100 to-primary shadow-primary group-hover:shadow-primary w-80 rounded-sm bg-gradient-to-br p-1 ring-0 shadow-sm group-hover:shadow-lg`}
          >
            <figure className='relative overflow-hidden rounded-sm'>
              <div
                className={`group-hover:inset-shadow-primary absolute z-10 h-full w-full group-hover:inset-shadow-sm`}
              >
                <div className='flex h-full items-end justify-center'>
                  <div className='from-base-100 to-primary rounded-t-xs bg-gradient-to-br px-5'>
                    <h2 className='card-title text-primary-content font-elements justify-center text-xl'>
                      {character.fullName}
                    </h2>
                  </div>
                </div>
              </div>
              <Image
                className='max-h-80 max-w-80 object-cover'
                height={320}
                width={320}
                src={character.avatarUrl}
                alt={character.fullName}
              />
            </figure>
            {isSelected && (
              <p className='font-body text-primary-content p-2 text-center text-lg'>
                {character.specialAbility}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
