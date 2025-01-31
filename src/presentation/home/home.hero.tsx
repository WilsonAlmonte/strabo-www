export const HomeHero = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="hero min-h-[850px] bg-[url(/bk/red.jpeg)] bg-cover bg-center flex flex-col relative"
      style={{
        maskImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 80%, transparent 100%)",
      }}
    >
      {children}
      <div className="col-start-1 row-start-1 h-full w-full absolute"></div>
      <div className="hero-content text-neutral-content text-center flex-1">
        <div className="max-w-2xl z-20">
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
          <button className="btn text-xl bg-base-100/20 hover:text-base-content backdrop-blur-sm btn-lg hover:bg-gradient-to-bl hover:from-base-100 hover:to-warning transition-all text-base-200 font-display">
            Start your journey
          </button>
        </div>
      </div>
    </div>
  );
};
