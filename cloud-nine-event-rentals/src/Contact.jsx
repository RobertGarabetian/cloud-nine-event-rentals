import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="w-screen h-screen grid grid-cols-2 grid-rows-5 md:grid-rows-6">
      <div className="p-4 md:p-10 bg-slate-400 row-span-1 md:row-span-2 col-span-2 flex items-end">
        <h1 class="p-2 text-6xl md:text-8xl font-bold text-white">Contact</h1>
      </div>
      <div
        className="col-start-1 col-span-2 md:col-span-1 row-start-2 md:row-start-3 md:row-span-4 bg-white origin-bottom flex flex-col justify-center text-center">
        <h3 className="text-4xl text-slate-400 font-bold">
          Feel free to contact us any time!
        </h3>
      </div>
      
      
      <motion.div
        className="col-start-1 col-span-2 md:col-start-2 md:col-span-1 row-start-3 row-span-1 bg-blue-500 origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5 }}
      >
        <a
          href="mailto:cloudnineventrentals@gmail.com"
          className="grid place-content-center h-full w-full text-2xl md:text-5xl relative overflow-hidden bg-gradient-to-r from-blue-400 to-blue-600 text-white font-normal py-2 px-4 group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10">cloudnineventrentals@gmail.com</span>
        </a>
      </motion.div>
      
      <motion.div
        className="col-start-1 col-span-2 md:col-start-2 md:col-span-1 row-start-4 row-span-1 bg-yellow-400 origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <a
          href="https://www.instagram.com/cloudnine_rentals?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          className="grid place-content-center h-full w-full text-2xl md:text-5xl relative overflow-hidden bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-normal py-2 px-4 group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10">@cloudnine_rentals</span>
        </a>
      </motion.div>
      
      <motion.div
        className="col-start-1 col-span-2 md:col-start-2 md:col-span-1 row-start-5 row-span-1 bg-red-700 origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <a
          href="tel:+18184955594"
          className="grid place-content-center h-full w-full text-2xl md:text-5xl relative overflow-hidden bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-normal py-2 px-4 group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-600 to-green-700 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10">(818) 495-5594</span>
        </a>
      
      
      
      </motion.div>
      <div
        className="col-start-2 col-span-1 row-start-6 row-span-1 bg-white origin-bottom hidden md:flex">

      </div>
    </div>
  );
};

export default Contact;
