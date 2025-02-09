"use client";
//TODO: sound need refactor
import { useGameFlowStore } from "@/context/game-flow.store";
import { CharacterSelection } from "@/presentation/home/selection-screen/character-selection";
import { Howl } from "howler";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Volume2Icon, VolumeOffIcon } from "lucide-react";
import { Gameplay } from "@/presentation/home/gameplay-screen/gameplay";
import { useShallow } from "zustand/react/shallow";

export default function Home() {
  const [soundOn, setSoundOn] = useState<boolean | null>(null);
  const sound = new Howl({
    src: ["/sound/bg-song.mp3"],
    loop: true,
    volume: 0.1,
  });

  const changeSoundMode = (mode: boolean) => {
    localStorage.setItem("soundOn", mode.toString());
    setSoundOn(mode);
  };

  useEffect(() => {
    const soundOn = localStorage.getItem("soundOn");
    if (soundOn === null) {
      localStorage.setItem("soundOn", "true");
      setSoundOn(true);
    } else if (soundOn === "true") setSoundOn(true);
    else setSoundOn(false);
  }, []);

  useEffect(() => {
    if (soundOn) {
      sound.play();
    }
    return () => {
      sound.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [soundOn]);

  const { storyTree, availableStoryCharacters } = useGameFlowStore(
    useShallow((state) => ({
      storyTree: state.storyTree,
      availableStoryCharacters: state.availableStoryCharacters,
    }))
  );

  return (
    <AnimatePresence>
      {availableStoryCharacters.length > 0 && storyTree.length === 0 && (
        <motion.div
          key={"selection-root"}
          exit={{
            opacity: 0,
            transition: { duration: 1, ease: "easeInOut" },
          }}
        >
          <CharacterSelection />
        </motion.div>
      )}
      {storyTree.length > 0 && (
        <motion.div
          key={"gamelay-root"}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 3,
              ease: "easeInOut",
            },
          }}
          exit={{ opacity: 0 }}
        >
          <Gameplay />
        </motion.div>
      )}
      <div className="group fixed bottom-1 right-2 p-2  flex items-end justify-end w-24 h-24 ">
        <button
          className="btn btn-circle btn-primary"
          onClick={() => changeSoundMode(!soundOn)}
        >
          {soundOn ? <Volume2Icon size={24} /> : <VolumeOffIcon size={24} />}
        </button>
      </div>
    </AnimatePresence>
  );
}
