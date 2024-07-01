import "./styles.css";
import { motion } from "framer-motion";

const AboutUs = () => {
  window.scrollTo(0, 0);

  return (
    <div className="w-screen h-screen grid grid-cols-5 grid-rows-3">
      <div className="p-4 md:p-10 bg-slate-400 row-span-1 col-span-2 flex items-end">
        <h1 class="p-2 text-6xl md:text-8xl font-bold text-white">About Us</h1>
      </div>
      <motion.div
        initial={{ width: "0px" }} // Initial height
        animate={{ width: "100%" }} // Target height
        transition={{ delay: 0.5, duration: 0.5 }} // Transition duration
        className="bg-slate-400 col-span-3 row-span-3 col-start-3 flex flex-col justify-center text-center"
      >
        <motion.div 
        className="text-black text-3xl px-16"
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        transition = {{delay: 1, duration: 1}}
        >
          <h3 className="">
          Welcome to Cloud 9 Event Rentals, where memories come to life through 
          the magic of photography! We are Levon and Andre, two young and passionate 
          entrepreneurs who share a love for capturing unforgettable moments and spreading 
          joy through our work.
          </h3>

        </motion.div>
      </motion.div>
      <motion.div
        initial={{ height: "0" }} // Initial height
        animate={{ height: "100%" }} // Target height
        transition={{ duration: 0.5 }} // Transition duration
        className="bg-slate-400 col-span-2 row-span-2 col-start-1 row-start-2"
      ></motion.div>
    </div>
  );
};

export default AboutUs;
