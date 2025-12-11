import { motion, AnimatePresence } from "framer-motion";
import WeatherImg from "../weather/WeatherImg";
import WeatherInfo from "../weather/WeatherInfo";
const WeatherCard = ({ weather, imgSrc, city }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="weather-card"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 15, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center justify-center gap-4 
                       p-6 rounded-2xl w-full bg-white/10 backdrop-blur-xl 
                       shadow-inner text-center"
      >
        <WeatherImg imgSrc={imgSrc} />
        <WeatherInfo city={city} weather={weather} />
      </motion.div>
    </AnimatePresence>
  );
};

export default WeatherCard;
