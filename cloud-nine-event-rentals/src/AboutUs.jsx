import "./styles.css";
import { motion } from "framer-motion";

const AboutUs = () => {
  window.scrollTo(0, 0);

  return (
    <div className="w-screen h-screen grid grid-cols-5 grid-rows-5 md:grid-rows-3">
      <div className="p-4 md:p-10 bg-slate-400 row-span-1 col-span-5 md:col-span-2 flex items-end">
        <h1 class="p-2 text-6xl md:text-8xl font-bold text-white">About Us</h1>
      </div>
      <motion.div
        initial={{ width: "0px" }} // Initial height
        animate={{ width: "100%" }} // Target height
        transition={{ delay: 0.5, duration: 0.5 }} // Transition duration
        className="bg-slate-100 col-span-3 row-span-3 col-start-3 text-center hidden md:flex md:flex-col"
      >
        <div className="h-1/6 w-full bg-slate-400 " />
        <div className="w-full h-5/6 bg-white ">
          <motion.div
            className="text-slate-400 h-full text-center px-4 md:px-20
            font-light flex flex-col justify-center "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <h1 className="text-3xl md:text-6xl font-bold">
              At Cloud 9 Event Rentals, we believe that every event deserves to
              be <span className="text-purple-300">memorable...</span>
            </h1>
            <p className="text-base md:text-3xl font-medium text-left py-8 md:py-16">
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
        className="bg-white md:bg-slate-400 col-span-5 md:col-span-2 row-span-4 col-start-1 row-start-2 flex items-center"
      >
        
        <motion.div
          className="text-slate-400 h-full text-center px-12
            font-light flex md:hidden flex-col justify-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className="text-4xl font-bold">
            At Cloud 9 Event Rentals, we believe that every event deserves to be{" "}
            <span className="text-purple-300">memorable...</span>
          </h1>
          <p className="text-xl font-medium text-left py-8">
            whether it's a wedding, birthday party, corporate event, or any
            special occasion, we're here to add that extra spark that makes your
            event truly unforgettable. With our state-of-the-art photobooths and
            a wide range of fun props, backgrounds, and customization options,
            we'll turn any gathering into an epic celebration.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
