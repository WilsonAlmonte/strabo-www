export const Gameplay = () => {
  // const {
  //   availableStoryCharacters,
  //   startStory,
  //   confirmChoice,
  //   selectedCharacter,
  //   resetGame,
  //   selectPremise,
  //   selectedPremise,
  //   onInitialChoice,
  //   selectedSetup,
  // } = useGameFlowStore(
  //   useShallow((state) => ({
  //     availableStoryCharacters: state.availableStoryCharacters,
  //     selectedPremise: state.selectedPremise,
  //     startStory: state.startStory,
  //     confirmChoice: state.confirmChoice,
  //     resetGame: state.resetGame,
  //     selectedCharacter: state.selectedCharacter,
  //     selectPremise: state.selectPremise,
  //     onInitialChoice: state.setSelectedSetup,
  //     selectedSetup: state.selectedSetup,
  //   }))
  // );
  return (
    <div className='container mx-auto flex min-h-screen flex-col items-center justify-center'>
      <h1 className='font-display text-6xl'>Gameplay in progress</h1>
      <p className='mt-3'>
        This is the gameplay screen. The user will be able to interact with the
        game here.
      </p>
    </div>
  );
};
