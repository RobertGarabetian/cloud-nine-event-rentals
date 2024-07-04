import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="hero h-5/6 fixed top-0 left-0 z-0"
      style={{
        backgroundImage: "url(4.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-white mb-5 text-7xl font-bold">Cloud Nine Event Rentals</h1>
          <h2 className="mb-5 text-slate-200 text-xl font-semibold ">
            Make Your Memories Last a Lifetime!
          </h2>
          <button onClick={()=>navigate("/contact")} className="btn btn-primary">Get in Contact!</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
