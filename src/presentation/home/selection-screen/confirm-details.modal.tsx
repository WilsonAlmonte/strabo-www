import { StoryPremise } from '@/core/premise.interface';
import { BookMarkedIcon, MapPinnedIcon } from 'lucide-react';

interface ConfirmDetailsModalProps {
  selectedPremise: StoryPremise | null;
  selectedSetup: string | null;
  selectedCharacterName: string;
  onBackClick: () => void;
  onConfirmClick: () => void;
  dialogRef: React.RefObject<HTMLDialogElement | null>;
}

export const ConfirmDetailsModal: React.FC<ConfirmDetailsModalProps> = ({
  selectedPremise,
  selectedSetup,
  selectedCharacterName,
  onBackClick,
  onConfirmClick,
  dialogRef,
}) => {
  return (
    <dialog className='modal modal-bottom sm:modal-middle' ref={dialogRef}>
      <div className='modal-box font-body min-w-3xl bg-(--bg-color)/10 p-7 backdrop-blur-xl'>
        <h2 className='font-display text-bright text-3xl'>
          {selectedPremise?.title}
        </h2>
        <div className='mt-5 flex flex-col gap-5'>
          <div className='flex flex-col text-lg'>
            <div className='text-primary flex items-center gap-1'>
              <BookMarkedIcon size={18} />
              <p className='font-elements text-xl'>Premise</p>
            </div>
            <p>{selectedPremise?.premise}</p>
          </div>
          <div className='flex flex-col text-lg'>
            <div className='text-primary flex items-center gap-1'>
              <MapPinnedIcon size={18} />
              <p className='font-elements text-xl'>Where?</p>
            </div>
            <p>{selectedPremise?.context}</p>
          </div>
          <div className='flex flex-col text-lg'>
            <div className='text-primary flex items-center gap-1'>
              <p className='text-xl'>
                Your choice for{' '}
                <span className='font-display'>{selectedCharacterName}</span>
              </p>
            </div>
            <p>{selectedSetup}</p>
          </div>
          <div className='flex justify-center gap-5'>
            <button
              onClick={onBackClick}
              className='str-btn btn btn-ghost btn-accent'
            >
              <span>Back</span>
            </button>
            <button onClick={onConfirmClick} className='gradient-btn btn'>
              <span>CONFIRM</span>
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};
