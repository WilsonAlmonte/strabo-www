"use client";
import { useGameFlowStore } from "@/context/game-flow.store";
import { HomeHero } from "@/presentation/home/home.hero";
import { useShallow } from "zustand/shallow";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  const { selectedCharacter } = useGameFlowStore(
    useShallow((state) => ({ selectedCharacter: state.selectedCharacter }))
  );
  return (
    <div className="flex-1 relative">
      <div className=" w-full absolute h-full opacity-15">
        <video autoPlay loop muted className="h-full w-full object-fill">
          <source src="/bk/bk-video.mp4" type="video/mp4" />
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
        <HomeHero>
          <nav className="navbar backdrop-blur-2xl w-full z-10 ">
            <div className="mx-2 px-2 text-3xl flex-1 font-display text-base-100 flex items-center gap-2">
              STRABO
            </div>
            <div className="flex gap-2 font-elements pr-2">
              <a>How to play?</a>
            </div>
          </nav>
        </HomeHero>
        <main className="flex-1">
          {/* Page content here */}
          <div className="">{children}</div>
        </main>
      </div>
    </div>
  );
};
