interface GameOverModalProps {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({ dialogRef }) => {
  const closeModal = () => dialogRef.current && dialogRef.current.close();
  return (
    <dialog className='modal modal-bottom sm:modal-middle' ref={dialogRef}>
      <div className='modal-box font-body min-w-3xl bg-(--bg-color)/10 p-7 backdrop-blur-xl'>
        <h2 className='font-display text-bright text-3xl'>
          You&apos;ve reached the end!
        </h2>
        <p className='text-xl'>
          Congratulations on completing your story. We hope you enjoyed your
          journey.
        </p>
        <div className='flex justify-center gap-5'>
          <button onClick={closeModal} className='gradient-btn btn'>
            <span>Close</span>
          </button>
        </div>
      </div>
    </dialog>
  );
};
