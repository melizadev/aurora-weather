import { motion } from "framer-motion";
import { FaWind } from "react-icons/fa";

const WeatherInfo = ({ city, weather }) => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl text-white font-semibold"
      >
        {city}
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-5xl text-white font-bold mb-3 drop-shadow-md"
      >
        {weather.temperature}°C
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center gap-3 
                         text-white font-semibold text-xl"
      >
        <FaWind size={22} className="opacity-90" />
        {weather.windspeed} km/h
      </motion.p>
    </>
  );
};

export default WeatherInfo;
