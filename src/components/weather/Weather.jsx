import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWeather } from "../../features/weather/hooks/useWeather";
import WeatherSearch from "./WeatherSearch";
import WeatherCard from "./WeatherCard";
const Weather = () => {
  const {
    city,
    searchText,
    setSearchText,
    imgSrc,
    getWeather,
    loading,
    error,
    weather,
  } = useWeather();

  return (
    <div
      className="min-w-full sm:min-w-[420px] max-w-md mx-auto 
      min-h-[65vh] flex flex-col gap-6 
      p-6 bg-white/20 backdrop-blur-md 
      rounded-3xl shadow-lg transition-all"
    >
      <WeatherSearch
        searchText={searchText}
        getWeather={getWeather}
        setSearchText={setSearchText}
        loading={loading}
      />

      <AnimatePresence>
        {error && (
          <motion.p
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-red-200 font-semibold text-center"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
      {weather && !loading && (
        <WeatherCard weather={weather} imgSrc={imgSrc} city={city} />
      )}
    </div>
  );
};

export default memo(Weather);
