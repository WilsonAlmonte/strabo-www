export const HomeHero = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="hero min-h-screen bg-[url(/bk/red.jpg)] bg-center bg-cover flex flex-col relative"
      style={{
        maskImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 80%, transparent 100%)",
      }}
    >
      {children}
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
          <a className="gradient-btn btn btn-lg" href="#character-selection">
            <span className="font-display">Start your journey</span>
          </a>
        </div>
      </div>
    </div>
  );
};
