import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const background = useTransform(
    scrollYProgress,
    [0, 0.5482],
    ["rgba(99, 102, 241, 0)", "rgba(99, 102, 241, 0.8)"]
  );

  


  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  return (
    <motion.div
      style={{ background }}
      className="navbar bg-base-100 fixed z-20 top-0 left-0 bg-transparent w-screen"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
            <button onClick={() => navigate("/packages")} className="">Packages</button>
          </li>
          <li>
            <button onClick={()=> navigate("/aboutus")} className="">About Us</button>
          </li>
          <li>
            <button onClick={()=>navigate("/contact")} className="">Contact</button>
          </li>
          </ul>
        </div>
        <button onClick={()=>navigate("/")}className="btn btn-ghost font-medium text-2xl px-10 hover:bg-[#6366f1]">
          Cloud Nine Event Rentals
        </button>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-10 font-normal text-xl text-white">
          <li>
            <button onClick={() => navigate("/packages")} className="btn btn-ghost text-xl hover:bg-[#6366f1]">Packages</button>
          </li>
          <li>
            <button onClick={()=> navigate("/aboutus")} className="btn btn-ghost text-xl hover:bg-[#6366f1]">About Us</button>
          </li>
          <li>
            <button onClick={()=>navigate("/contact")} className="btn btn-ghost text-xl hover:bg-[#6366f1]">Contact</button>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
