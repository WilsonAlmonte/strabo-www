"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
const imageList = [
  "/bk/red.jpg",
  "/bk/dark.jpg",
  "/bk/ruins.png",
  "/bk/yellow.jpg",
];
export const HomeHero = ({ onStartClick }: { onStartClick: () => void }) => {
  const initialImage = imageList[0];
  const [selectedImage, setSelectedImage] = useState(initialImage);
  const prevSlide = () => {
    const currentIndex = imageList.indexOf(selectedImage);
    const nextIndex =
      currentIndex === 0 ? imageList.length - 1 : currentIndex - 1;
    setSelectedImage(imageList[nextIndex]);
  };
  const nextSlide = () => {
    const currentIndex = imageList.indexOf(selectedImage);
    const nextIndex =
      currentIndex === imageList.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(imageList[nextIndex]);
  };
  return (
    <motion.div
      initial={{
        backgroundImage: `url(${imageList[0]})`,
      }}
      animate={{
        backgroundImage: `url(${selectedImage})`,
      }}
      className="hero min-h-screen bg-center bg-cover flex flex-col relative transition-all duration-500"
      style={{
        maskImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 80%, transparent 100%)",
      }}
    >
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
    </motion.div>
  );
};
