import { useState, useCallback } from "react";
import { fetchGeo } from "../services/fetchGeo";
import { fetchWeather } from "../services/fetchWeather";
import { getWeatherType } from "../utils/getWeatherType";
import { images } from "../constants/images";

export const useWeather = () => {
  const [searchText, setSearchText] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [imgSrc, setImgSrc] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const showError = (msg) => {
    setError(msg);
    setTimeout(() => setError(""), 3000);
  };

  const getWeather = useCallback(async () => {
    setError("");
    setWeather(null);
    setSearchText("");

    if (!searchText.trim()) {
      showError("Enter a valid city");
      return;
    }

    try {
      setLoading(true);
      const geo = await fetchGeo(searchText);
      const current = await fetchWeather(geo.latitude, geo.longitude);
      const type = getWeatherType(current.temperature);

      setWeather(current);
      setImgSrc(images[type]);
      setCity(geo.city);
    } catch (err) {
      showError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }, [searchText]);

  return {
    city,
    weather,
    imgSrc,
    loading,
    error,
    searchText,
    setSearchText,
    getWeather,
  };
};
