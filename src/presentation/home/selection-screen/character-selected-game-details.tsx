'use client';
import { StoryPremise } from '@/core/premise.interface';
import { CardAnimationTriggers, CharacterCard } from './character-card';
import { StoryCharacterData } from '@/core/character.interface';
import { ArrowLeftCircleIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import { ConfirmDetailsModal } from './confirm-details.modal';
import { SelectionScreenPathOption } from './selection-screen.path-option';
interface CharacterSelectedGameDetailsProps {
  selectedCharacter: StoryCharacterData;
  onPremiseSelected: (premise: StoryPremise) => void;
  selectedPremise: StoryPremise | null;
  makeInitialChoice: (choice: string) => void;
  confirmChoice: () => void;
  resetGame: () => void;
  selectedSetup: string | null;
}
export const CharacterSelectedGameDetails: React.FC<
  CharacterSelectedGameDetailsProps
> = ({
  selectedCharacter,
  onPremiseSelected,
  selectedPremise,
  makeInitialChoice,
  selectedSetup,
  confirmChoice,
  resetGame,
}) => {
  const characterCardRef = useRef<CardAnimationTriggers>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!!selectedSetup) {
      dialogRef.current?.showModal();
    }
  }, [selectedSetup]);

  const handleBackClick = () => {
    dialogRef.current?.close();
  };

  const handleConfirmClick = async () => {
    dialogRef.current?.close();
    if (characterCardRef.current) {
      await characterCardRef.current.flipCard();
    }
    confirmChoice();
  };

  return (
    <>
      <button onClick={resetGame} className='str-btn btn btn-primary'>
        <ArrowLeftCircleIcon size={24} />
        Back to selection
      </button>
      <div className='relative flex-col'>
        <div className='flex gap-10'>
          <CharacterCard
            ref={characterCardRef}
            data={selectedCharacter}
            isSelected
          />
          <div className='character-info max-w-full'>
            <h3 className='text-bright font-display text-3xl font-bold'>
              {selectedCharacter.full_name}
            </h3>
            <p className='text-base-100 font-body mt-2 text-lg'>
              {selectedCharacter.backstory}
            </p>
            <div className='mb-5'>
              <h2 className='font-elements text-primary my-5 text-2xl font-bold underline'>
                Select your starting point
              </h2>
              <div className='flex max-w-xl flex-col'>
                {selectedCharacter.premises.map((premise, index) => (
                  <SelectionScreenPathOption
                    label={premise.title}
                    key={premise.title}
                    order={index + 1}
                    content={premise.premise}
                    onSelected={() => onPremiseSelected(premise)}
                    selected={selectedPremise?.title === premise.title}
                    optionTip='Start here'
                    showDivider={
                      index !== selectedCharacter.premises.length - 1
                    }
                  />
                ))}
              </div>
            </div>
            {selectedPremise?.title && (
              <div>
                <h2 className='font-elements text-primary my-5 text-2xl font-bold underline'>
                  What is going to be your first choice?
                </h2>
                <motion.ul layout className='flex max-w-3xl flex-col gap-4'>
                  {selectedPremise?.choices.map((choice, index) => (
                    <motion.li
                      key={choice}
                      animate={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <SelectionScreenPathOption
                        label={choice}
                        order={index + 1}
                        onSelected={() => makeInitialChoice(choice)}
                        optionTip='Choose this one'
                        selected={selectedSetup === choice}
                      />
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            )}
          </div>
        </div>
        <ConfirmDetailsModal
          dialogRef={dialogRef}
          onBackClick={handleBackClick}
          onConfirmClick={handleConfirmClick}
          selectedPremise={selectedPremise}
          selectedCharacterName={selectedCharacter.full_name}
          selectedSetup={selectedSetup}
        />
      </div>
    </>
  );
};
