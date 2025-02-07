import { CharacterSelection } from "@/presentation/home/character-selection/character-selection";

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

  const { storyTree, setAvailableStoryCharacters } = useGameFlowStore(
    useShallow((state) => ({
      storyTree: state.storyTree,
      setAvailableStoryCharacters: state.setAvailableStoryCharacters,
    }))
  );

  useEffect(() => {
    setAvailableStoryCharacters(characters);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <CharacterSelection />
    </>
  );
}
