const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(4.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-white mb-5 text-7xl font-bold">Cloud Nine Event Rentals</h1>
          <h2 className="mb-5 text-slate-200 text-xl font-semibold ">
            Make Your Memories Last a Lifetime!
          </h2>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
