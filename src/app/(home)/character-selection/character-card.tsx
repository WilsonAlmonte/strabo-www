"use client";

import {
  StoryCharacterCard,
  StoryCharacterData,
} from "@/core/character.interface";
import Image from "next/image";

interface CharacterCardProps {
  data: StoryCharacterData;
}
export const CharacterCard: React.FC<CharacterCardProps> = ({ data }) => {
  const character = new StoryCharacterCard(data);
  const getCharacterImage = (id: string) => {
    return `/characters/${id}.webp`;
  };

  return (
    <div
      rel="button"
      className="group my-2 cursor-pointer"
      style={
        {
          "--char-color": `var(--color-${character.color})`,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any
      }
    >
      <div
        className={`card bg-gradient-to-br from-base-100 to-primary w-80 rounded-sm shadow-primary ring-0 transition-all shadow-sm group-hover:shadow-lg  group-hover:shadow-(color:--char-color) p-1`}
      >
        <figure className="overflow-hidden relative rounded-sm">
          <div
            className={`h-full w-full absolute z-10 group-hover:inset-shadow-sm transition-all group-hover:inset-shadow-(color:--char-color)`}
          >
            <div className="flex justify-center items-end h-full">
              <div className="bg-gradient-to-br from-base-100 to-primary px-5 rounded-t-xs transition-all">
                <h2 className="card-title text-base-content transition-all justify-center font-elements text-xl">
                  {character.full_name}
                </h2>
              </div>
            </div>
          </div>
          <Image
            className="max-h-80 max-w-80 object-cover"
            height={320}
            width={320}
            src={getCharacterImage(character.id)}
            alt={character.full_name}
          />
        </figure>
      </div>
    </div>
  );
};
