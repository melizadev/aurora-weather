import { motion } from "framer-motion";
import Weather from "../../components/weather/Weather";
import { container, titleVariant, weatherVariant } from "./home.animations";
const Home = ({ title = "Aurora Weather" }) => {
  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full min-h-screen flex flex-col items-center justify-center gap-2 p-6"
    >
      <motion.h1
        variants={titleVariant}
        className="text-4xl font-bold text-emerald-50 drop-shadow-lg"
      >
        {title}
      </motion.h1>
      <motion.p
        variants={titleVariant}
        className="text-emerald-100 text-sm sm:text-base text-center max-w-md"
      >
        Search the current weather by city name. Type a city and get real-time
        weather information instantly.
      </motion.p>

      <motion.div
        variants={weatherVariant}
        className="w-full flex justify-center"
      >
        <Weather />
      </motion.div>
    </motion.main>
  );
};

export default Home;
