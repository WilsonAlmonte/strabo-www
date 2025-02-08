"use client";
import { useGameFlowStore } from "@/context/game-flow.store";
import { useShallow } from "zustand/react/shallow";
import { CharacterSelectionWrapper } from "./character-selection-wrapper";
import { CharacterSelectionCardGroup } from "./character-selection.card-group";
import { AnimatePresence, motion } from "motion/react";
import { CharacterSelectedGameDetails } from "./character-selected-game-details";

export const CharacterSelection = () => {
  const {
    availableStoryCharacters,
    startStory,
    selectedCharacter,
    resetGame,
    selectPremise,
    selectedPremise,
    onInitialChoice,
    selectedSetup,
    confirmChoice,
  } = useGameFlowStore(
    useShallow((state) => ({
      availableStoryCharacters: state.availableStoryCharacters,
      selectedPremise: state.selectedPremise,
      startStory: state.startStory,
      resetGame: state.resetGame,
      selectedCharacter: state.selectedCharacter,
      selectPremise: state.selectPremise,
      onInitialChoice: state.setSelectedSetup,
      selectedSetup: state.selectedSetup,
      confirmChoice: state.fetchNextStoryBranch,
    }))
  );

  const onCharacterSelected = (characterId: string) => {
    startStory(characterId);
  };

  return (
    <CharacterSelectionWrapper>
      <section className="my-30 container mx-auto z-50 height-auto">
        <AnimatePresence mode="wait">
          {!selectedCharacter?.id && (
            <motion.div
              key={"available-characters-10"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
              className={"flex gap-10 justify-center flex-wrap"}
            >
              <CharacterSelectionCardGroup
                avaliableCharacters={availableStoryCharacters}
                onCharacterSelected={onCharacterSelected}
              />
            </motion.div>
          )}
          {selectedCharacter?.id && (
            <motion.div
              exit={{ opacity: 0, transition: { duration: 0.2, delay: 0 } }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={selectedCharacter.id}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <CharacterSelectedGameDetails
                resetGame={resetGame}
                confirmChoice={confirmChoice}
                selectedPremise={selectedPremise}
                selectedSetup={selectedSetup}
                onPremiseSelected={selectPremise}
                makeInitialChoice={onInitialChoice}
                selectedCharacter={selectedCharacter}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </CharacterSelectionWrapper>
  );
};
