interface LoadingModalProps {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
}

export const LoadingModal: React.FC<LoadingModalProps> = ({ dialogRef }) => {
  return (
    <dialog className='modal modal-bottom sm:modal-middle' ref={dialogRef}>
      <div className='modal-box font-body min-w-3xl bg-(--bg-color)/10 p-7 backdrop-blur-xl'>
        <h2 className='font-display text-bright text-3xl'>Loading...</h2>
      </div>
    </dialog>
  );
};
