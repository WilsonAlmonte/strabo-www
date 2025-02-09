import { motion } from "motion/react";
import { CharacterCard } from "./character-card";
import { StoryCharacterData } from "@/core/character.interface";

interface CharacterSelectionCardGroupProps {
  avaliableCharacters: StoryCharacterData[];
  onCharacterSelected: (characterId: string) => void;
}

export const CharacterSelectionCardGroup: React.FC<
  CharacterSelectionCardGroupProps
> = ({ avaliableCharacters, onCharacterSelected }) => {
  return (
    <>
      {avaliableCharacters.map((character, index) => (
        <motion.div
          key={character.id}
          initial={{ opacity: 0, y: -300 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.5 + index * 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <CharacterCard
            characterSelected={onCharacterSelected}
            data={character}
          />
        </motion.div>
      ))}
    </>
  );
};
