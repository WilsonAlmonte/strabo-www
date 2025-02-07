"use client";

import {
  StoryCharacterCard,
  StoryCharacterData,
} from "@/core/character.interface";
import Image from "next/image";

interface CharacterCardProps {
  data: StoryCharacterData;
  characterSelected?: (characterId: string) => void;
  isSelected?: boolean;
}
export const CharacterCard: React.FC<CharacterCardProps> = ({
  data,
  characterSelected,
  isSelected,
}) => {
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
      onClick={handleCardClick}
      rel="button"
      className="group cursor-pointer"
    >
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
            {character.personality}
          </p>
        )}
      </div>
    </div>
  );
};
