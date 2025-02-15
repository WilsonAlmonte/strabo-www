import Image from 'next/image';

export const CharacterSelectionWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      id='character-selection'
      className='flex min-h-screen flex-col items-center justify-center p-10'
    >
      <Image
        src='/line.png'
        width={300}
        height={31.25}
        alt='line'
        className='mb-10'
      />
      <div className='max-w-5xl text-center'>
        <h1 className='font-elements text-bright mb-5 text-5xl font-bold'>
          Choose your Character <br />
        </h1>

        <p className='font-body text-base-100 text-2xl'>
          Step into a world where your choices shape the story. Unleash your
          imagination, explore enchanted lands, and meet unforgettable
          characters. Whether you&apos;re a hero, a rogue, or a dreamer, every
          decision leads to a tale uniquely yours. Begin your journey and let
          the story unfold—your story awaits!
        </p>
      </div>
      {children}
    </div>
  );
};
