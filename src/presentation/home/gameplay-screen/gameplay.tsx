import { useGameFlowStore } from '@/store/game-flow.store';
import { useShallow } from 'zustand/shallow';
import { motion } from 'motion/react';
import { SelectionScreenPathOption } from '../selection-screen/selection-screen.path-option';
import { useEffect, useRef } from 'react';
import { LoadingModal } from './loading.modal';
import { GameOverModal } from './game-over.modal';

export const Gameplay = () => {
  const {
    selectedCharacter,
    selectedPremise,
    storyTree,
    isLoading,
    selectedSetup,
    confirmChoice,
    selectSetup,
    availableChoices,
    gameIsOver,
  } = useGameFlowStore(
    useShallow((state) => ({
      selectedPremise: state.selectedPremise,
      currentDepth: state.currentDepth,
      selectSetup: state.setSelectedSetup,
      confirmChoice: state.fetchNextStoryBranch,
      selectedCharacter: state.selectedCharacter,
      selectedSetup: state.selectedSetup,
      storyTree: state.storyTree,
      availableChoices: state.availableChoices,
      isLoading: state.loading,
      gameIsOver: state.gameIsOver,
    }))
  );
  const formatForHTML = (text: string): string => {
    return text.trim().replace(/\n/g, '<br>'); // Converts line breaks to <br> for HTML rendering
  };
  const storyRef = useRef<HTMLDivElement>(null);

  const loadingDialogRef = useRef<HTMLDialogElement>(null);
  const gameOverModalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!loadingDialogRef.current) return;
    if (isLoading) {
      loadingDialogRef.current.showModal();
    } else {
      loadingDialogRef.current.close();
    }
  }, [isLoading]);

  useEffect(() => {
    if (!gameOverModalRef.current) return;
    if (gameIsOver) {
      gameOverModalRef.current?.showModal();
    }
  }, [gameIsOver]);

  return (
    <div className='relative flex min-h-screen w-full flex-col' ref={storyRef}>
      <motion.div
        className='absolute z-0 h-full w-full bg-cover bg-fixed opacity-50'
        style={{
          backgroundImage: "url('bk/dark.jpg')",
          maskImage:
            'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0) 100%)',
        }}
        animate={{
          maskImage: [
            'radial-gradient(circle at 30% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0) 100%)',
            'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0) 100%)',
            'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0) 100%)',
            'radial-gradient(circle at 60% 60%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0) 100%)',
            'radial-gradient(circle at 100% 100%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0) 100%)',
            'radial-gradient(circle at 0% 100%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0) 100%)',
            'radial-gradient(circle at 10% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0) 100%)',
            'radial-gradient(circle at 30% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0) 100%)',
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: 'easeInOut',
          repeatType: 'loop',
        }}
      ></motion.div>
      <div className='z-50 container mx-auto flex flex-col gap-5 py-10'>
        <div className=''>
          <motion.div
            animate={{
              opacity: 1,
              transition: { delay: 0.5, duration: 1 },
            }}
            initial={{ opacity: 0 }}
            className='z-50 flex max-w-4xl flex-col'
          >
            <h1 className='font-display text-5xl'>
              <span className='text-bright'>
                {selectedCharacter?.full_name}
              </span>
            </h1>
            <div className='font-body pl-2 text-lg'>
              <h2 className='text-primary text-2xl'>
                {selectedPremise?.title}
              </h2>
              {/* <p className='text-primary/80'>{selectedPremise?.context}</p> */}

              <p className='text-primary/90 mt-4'>{selectedPremise?.premise}</p>
            </div>
          </motion.div>
        </div>
        <div className='py-5'>
          <div className='z-50'>
            {/* <motion.div
              className='bg-primary/50 rounded-2xl'
              id='scroll-indicator'
              style={{
                scaleX: scrollYProgress,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: 7,
                originX: 0,
              }}
            /> */}
            {storyTree.map((branch, index) => (
              <motion.div
                id={branch.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onAnimationComplete={() => {
                  storyRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'end',
                  });
                }}
                key={branch.id}
                className={
                  index === 0 ? 'font-body text-lg' : 'font-body mt-4 text-lg'
                }
              >
                <p className='text-primary/70'>{branch.setup}</p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: formatForHTML(branch.outcome),
                  }}
                ></p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className='flex flex-col items-center gap-3'>
          {availableChoices && availableChoices.length > 0 && (
            <ul className='mt-4 flex max-w-3xl flex-col gap-4'>
              {availableChoices.map((choice, index) => (
                <motion.li
                  key={choice}
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <SelectionScreenPathOption
                    label={choice}
                    order={index + 1}
                    onSelected={() => selectSetup(choice)}
                    optionTip='Choose this one'
                    selected={selectedSetup === choice}
                  />
                </motion.li>
              ))}
            </ul>
          )}
          {selectedSetup && (
            <div className='mt-4 flex justify-start'>
              <button
                className='gradient-btn btn btn-lg'
                onClick={confirmChoice}
              >
                <span className='font-display text-sm'>Confirm Choice</span>
              </button>
            </div>
          )}
        </div>
        <LoadingModal dialogRef={loadingDialogRef} />
        <GameOverModal dialogRef={gameOverModalRef} />
      </div>
    </div>
  );
};
