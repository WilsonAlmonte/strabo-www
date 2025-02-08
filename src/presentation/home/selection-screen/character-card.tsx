"use client";

import {
  StoryCharacterCard,
  StoryCharacterData,
} from "@/core/character.interface";
import { hover, useAnimate } from "motion/react";
import Image from "next/image";
import { useEffect, useImperativeHandle } from "react";

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
    "#card-back",
    { rotateY: -90 },
    {
      duration: 0.01,
    },
  ],
  [
    "#card-front",
    { rotateY: -90 },
    {
      duration: 0.06,
    },
  ],
  [
    "#card-back",
    { rotateY: 0 },
    {
      duration: 0.06,
    },
  ],
];
const showFront = [
  [
    "#card-front",
    { rotateY: -90 },
    {
      duration: 0.01,
    },
  ],
  [
    "#card-back",
    { rotateY: 90 },
    {
      duration: 0.06,
    },
  ],
  [
    "#card-front",
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
    src: ["/sound/selected.mp3"],
    loop: false,
    volume: 0.2,
  });
  const hoverSound = new Howl({
    src: ["/sound/hover.m4a"],
    loop: false,
    volume: 0.1,
  });

  const flipCard = async () => {
    selectedSound.play();
    await animate(scope.current, { y: 50 }, { duration: 0.4 });
    await animate([...cardFlipAnimation], {
      repeat: 2,
      repeatType: "loop",
      ease: "easeIn",
    });
    await animate(scope.current, { y: 0 }, { duration: 0.2, ease: "easeIn" });
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
  const getCharacterImage = (id: string) => {
    return `/characters/${id}.webp`;
  };

  const handleCardClick = () => {
    if (characterSelected) {
      characterSelected(character.id);
    }
  };

  return (
    <div
      ref={scope}
      className="mt-2 h-fit relative group"
      onClick={handleCardClick}
      rel="button"
      style={
        {
          cursor: isSelected ? "default" : "pointer",
          "--bg-color": `var(--color-${
            character?.color ? character.color + "-900" : "neutral"
          })`,
          "--char-color": `var(--color-${
            character?.color ? character.color + "-500" : "neutral"
          })`,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any
      }
    >
      <div
        id="card-back"
        className="h-full w-full absolute ard bg-gradient-to-br from-(--char-color)/10 to-(--bg-color)/10 backdrop-blur-xl ring-primary rounded-sm ring-4 ring-inset p-2 group-hover:rotate-0 transform-3d"
      >
        <div className="h-full w-full flex items-center justify-center">
          <div className="absolute">
            <Image
              src={"/logo.png"}
              width={200}
              height={200}
              alt="logo"
              className="filter grayscale mix-blend-overlay opacity-5"
            />
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-center font-body text-lg">
              {character.personality}
            </span>
          </div>
        </div>
      </div>
      <div id="card-front" className="perspective-normal transform-3d">
        <div className="cursor-pointer">
          <div
            className={`card bg-gradient-to-br from-base-100 to-primary w-80 rounded-sm shadow-primary ring-0  shadow-sm group-hover:shadow-lg  group-hover:shadow-primary p-1`}
          >
            <figure className="overflow-hidden relative rounded-sm">
              <div
                className={`h-full w-full absolute z-10 group-hover:inset-shadow-sm group-hover:inset-shadow-primary`}
              >
                <div className="flex justify-center items-end h-full">
                  <div className="bg-gradient-to-br from-base-100 to-primary px-5 rounded-t-xs">
                    <h2 className="card-title text-primary-content justify-center font-elements text-xl">
                      {character.fullName}
                    </h2>
                  </div>
                </div>
              </div>
              <Image
                className="max-h-80 max-w-80 object-cover"
                height={320}
                width={320}
                src={getCharacterImage(character.id)}
                alt={character.fullName}
              />
            </figure>
            {isSelected && (
              <p className="text-center font-body p-2 text-lg text-primary-content">
                {character.specialAbility}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
