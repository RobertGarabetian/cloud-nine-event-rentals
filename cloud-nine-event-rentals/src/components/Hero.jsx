import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const Picture= (id) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);
  
    return (
      <section>
        <div ref={ref}>
          <img src={`/${id}.jpg`} alt="A London skyscraper" />
        </div>
        <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
      </section>
    );
  }
  
const Hero = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
  
    return (
      <>
        {[1, 2, 3, 4, 5].map((image) => 
        (
          <Picture id={image} key={image} />
        )
        )}
        <motion.div className="progress" style={{ scaleX }} />
      </>
    )
}

// FOR THIS TO WORK, I HAVE TO HAVE 5 IMAGES IN PUBLIC DIRECTORY NAMED 1.jpg, 2.jpg, ...
export default Hero