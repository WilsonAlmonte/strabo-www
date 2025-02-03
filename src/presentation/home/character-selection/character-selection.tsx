import Image from "next/image";
import { CharacterCard } from "./character-card";
import { characters } from "@/data/characters.fixture";
// import { CharactersCarousel } from "./character-carousel";
export const CharacterSelection = async () => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <Image
        src="/line.png"
        width={300}
        height={300}
        alt="line"
        className="mb-10"
      />
      <div className="max-w-5xl text-center z-20">
        <h1 className="text-5xl font-bold font-elements text-bright mb-5">
          Choose your Character <br />
        </h1>

        <p className="text-2xl font-body text-base-100">
          Step into a world where your choices shape the story. Unleash your
          imagination, explore enchanted lands, and meet unforgettable
          characters. Whether you&apos;re a hero, a rogue, or a dreamer, every
          decision leads to a tale uniquely yours. Begin your journey and let
          the story unfold—your story awaits!
        </p>
      </div>
      {/* <div>
        <CharactersCarousel />
      </div> */}
      <div className="flex gap-10 justify-center flex-wrap mt-20 container mx-auto">
        {characters.map((character) => (
          <CharacterCard key={character.id} data={character} />
        ))}
      </div>
    </div>
  );
};
