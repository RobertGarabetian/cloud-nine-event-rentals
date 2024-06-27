import { useInView } from "framer-motion";
import { useRef } from "react";

const Cards = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div
      ref={ref}
      className="card lg:card-side bg-base-100 shadow-xl w-4/5 bg-transparent"
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
      }}
    >
      <figure
        className="lg:w-2/5 w-full h-96 overflow-hidden"
        
      >
        <img
          src={props.image}
          alt="Album"
          className="w-full h-full object-cover"
        />
      </figure>
      <div
        className="card-body text-black w-full lg:w-3/5 grid content-center "
      >
        <p className="text-center text-xl border-violet-400 border-2 rounded p-8 lg:p-12">{props.text}</p>

      </div>
    </div>
  );
};

export default Cards;
