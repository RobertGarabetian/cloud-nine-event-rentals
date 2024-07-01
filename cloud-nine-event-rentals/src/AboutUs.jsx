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
        className="bg-slate-100 col-span-3 row-span-3 col-start-3 text-center"
      >
        <div className="h-28 w-full bg-slate-400 " />
        <div className="w-full h-full bg-white ">
          <motion.div
            className="text-slate-400 h-full text-center px-20
            font-light flex flex-col justify-center "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <h1 className="text-6xl font-bold">
              At Cloud 9 Event Rentals, we believe that every event deserves to
              be <span className="text-purple-300">memorable...</span>
            </h1>
            <p className="text-3xl font-medium text-left py-16">
              whether it's a wedding, birthday party, corporate event, or any
              special occasion, we're here to add that extra spark that makes
              your event truly unforgettable. With our state-of-the-art
              photobooths and a wide range of fun props, backgrounds, and
              customization options, we'll turn any gathering into an epic
              celebration.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ height: "0" }} // Initial height
        animate={{ height: "100%" }} // Target height
        transition={{ duration: 0.5 }} // Transition duration
        className="bg-slate-400 col-span-2 row-span-2 col-start-1 row-start-2 flex items-center"
      >
        {/*         
          <motion.h3 
          className="text-white text-3xl px-16 text-center font-light "
          initial = {{opacity: 0}}
          animate = {{opacity: 1}}
          transition = {{delay: 1, duration: 1}}
          >
          Welcome to Cloud 9 Event Rentals, where memories come to life through 
          the magic of photography! We are two young and passionate 
          entrepreneurs who share a love for capturing unforgettable moments and spreading 
          joy through our work.
          </motion.h3> */}
      </motion.div>
    </div>
  );
};

export default AboutUs;
