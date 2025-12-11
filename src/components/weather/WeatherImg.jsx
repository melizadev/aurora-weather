import { motion, AnimatePresence } from "framer-motion";
const WeatherImg = ({ imgSrc }) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={imgSrc}
        className="w-32 h-32 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <img
          src={imgSrc}
          alt="Weather"
          className="w-full h-full object-contain opacity-90 drop-shadow"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default WeatherImg;
