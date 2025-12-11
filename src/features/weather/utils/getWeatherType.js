export const getWeatherType = (temp) => {
  if (temp <= 5) return "snowy";
  if (temp <= 18) return "cloudy";
  return "sunny";
};
