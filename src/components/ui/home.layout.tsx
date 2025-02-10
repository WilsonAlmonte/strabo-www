"use client";
import { useGameFlowStore } from "@/context/game-flow.store";
import { characters } from "@/data/characters.fixture";
import { HomeHero } from "@/presentation/home/home.hero";
import { useRouter } from "next/navigation";
import { useShallow } from "zustand/shallow";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  const router = useRouter();
  const {
    selectedCharacter,
    setAvailableStoryCharacters,
    availableStoryCharacters,
  } = useGameFlowStore(
    useShallow((state) => ({
      selectedCharacter: state.selectedCharacter,
      setAvailableStoryCharacters: state.setAvailableStoryCharacters,
      availableStoryCharacters: state.availableStoryCharacters,
    }))
  );

  const handleHeroClick = () => {
    if (availableStoryCharacters.length === 0)
      setAvailableStoryCharacters(characters);
    router.push("#character-selection");
  };

  return (
    <div className="flex-1 relative">
      <div className=" w-full absolute h-full opacity-15">
        <video autoPlay loop muted className="h-full w-full object-fill">
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        style={
          {
            "--bk-color": `var(--color-${
              selectedCharacter?.color
                ? selectedCharacter.color + "-900"
                : "neutral"
            })`,
            "--char-color": `var(--color-${
              selectedCharacter?.color
                ? selectedCharacter.color + "-500"
                : "neutral"
            })`,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } as any
        }
        className="drawer-content flex flex-col h-full from-(--bk-color) via-[#0e1215] via-70% to-neutral bg-linear-to-b transition-colors duration-500"
      >
        <HomeHero onStartClick={handleHeroClick} />

        <main className="flex-1">
          {/* Page content here */}
          <div className="">{children}</div>
        </main>
      </div>
    </div>
  );
};
