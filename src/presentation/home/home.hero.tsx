import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import bgYellow from "@/assets/bk/yellow.jpg";
import bgRed from "@/assets/bk/red.jpg";
import bgDark from "@/assets/bk/dark.jpg";
import bgRuins from "@/assets/bk/ruins.png";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";
const imageList = [bgYellow, bgRed, bgDark, bgRuins];
export const HomeHero = ({ onStartClick }: { onStartClick: () => void }) => {
  const [selectedImage, setSelectedImage] = useState(imageList[0]);
  const [isFistLoad, setIsFirstLoad] = useState(true);
  const [transitionX, setTransitionX] = useState(500);
  const prevSlide = () => {
    setTransitionX(-500);
    const currentIndex = imageList.indexOf(selectedImage);
    const nextIndex =
      currentIndex === 0 ? imageList.length - 1 : currentIndex - 1;
    setSelectedImage(imageList[nextIndex]);
    if (isFistLoad) setIsFirstLoad(false);
  };
  const nextSlide = () => {
    setTransitionX(500);
    const currentIndex = imageList.indexOf(selectedImage);
    const nextIndex =
      currentIndex === imageList.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(imageList[nextIndex]);
    if (isFistLoad) setIsFirstLoad(false);
  };
  return (
    <div
      className="hero min-h-screen flex flex-col relative transition-all duration-500 overflow-x-hidden"
      style={{
        maskImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 80%, transparent 100%)",
      }}
    >
      <AnimatePresence>
        <motion.div
          className="min-h-screen absolute inset-0 z-0 "
          initial={{ opacity: 0, x: isFistLoad ? 0 : -transitionX }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
          key={selectedImage.src}
          exit={{ x: transitionX, opacity: 0, transition: { duration: 0.5 } }}
        >
          <Image
            priority
            alt="Background"
            src={selectedImage}
            placeholder="blur"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </motion.div>
      </AnimatePresence>
      <nav className="navbar backdrop-blur-2xl w-full z-10 ">
        <div className="mx-2 px-2 text-3xl flex-1 font-display text-base-100 flex items-center gap-2">
          STRABO
        </div>
        <div className="flex gap-2 font-elements pr-2">
          <a>How to play?</a>
        </div>
      </nav>
      <div className="col-start-1 row-start-1 h-full w-full absolute bg-neutral/50"></div>
      <div className="hero-content text-neutral-content text-center flex-1 items-center">
        <div className="max-w-2xl z-20 mb-20">
          <div className="font-display text-center">
            <h1 className="mb-5 text-6xl font-bold">
              <span className="text-bright">Welcome</span>
            </h1>
            <h1 className="mb-5 text-5xl font-bold">
              <span className="text-bright">to</span>
            </h1>
            <h1 className="mb-5 text-9xl font-bold">
              <span className="text-bright">STRABO</span>
            </h1>
          </div>
          <div className="flex justify-center gap-10 items-center text-primary">
            <button className="gradient-btn btn" onClick={prevSlide}>
              <ArrowLeftIcon size={30} />
            </button>
            <button className="gradient-btn btn btn-lg" onClick={onStartClick}>
              <span className="font-display">Start your journey</span>
            </button>
            <button className="gradient-btn btn" onClick={nextSlide}>
              <ArrowRightIcon size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
