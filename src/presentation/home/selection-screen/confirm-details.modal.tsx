import { StoryPremise } from "@/core/premise.interface";
import { BookMarkedIcon, MapPinnedIcon } from "lucide-react";

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
    <dialog className="modal modal-bottom sm:modal-middle" ref={dialogRef}>
      <div className="modal-box bg-(--bg-color)/10 backdrop-blur-xl min-w-3xl font-body p-7">
        <h2 className="text-3xl font-display text-bright">
          {selectedPremise?.title}
        </h2>
        <div className="flex flex-col gap-5 mt-5">
          <div className="flex flex-col text-lg">
            <div className="flex items-center gap-1 text-primary">
              <BookMarkedIcon size={18} />
              <p className="text-xl font-elements">Premise</p>
            </div>
            <p>{selectedPremise?.premise}</p>
          </div>
          <div className="flex flex-col text-lg">
            <div className="flex items-center gap-1 text-primary">
              <MapPinnedIcon size={18} />
              <p className="text-xl font-elements">Where?</p>
            </div>
            <p>{selectedPremise?.setting}</p>
          </div>
          <div className="flex flex-col text-lg">
            <div className="flex items-center gap-1 text-primary">
              <p className="text-xl">
                Your choice for{" "}
                <span className="font-display">{selectedCharacterName}</span>
              </p>
            </div>
            <p>{selectedSetup}</p>
          </div>
          <div className="flex justify-center gap-5">
            <button
              onClick={onBackClick}
              className="str-btn btn btn-ghost btn-accent"
            >
              <span>Back</span>
            </button>
            <button onClick={onConfirmClick} className="gradient-btn btn">
              <span>CONFIRM</span>
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};
