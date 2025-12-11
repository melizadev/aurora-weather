export const fetchWeather = async (lat, lon) => {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
  );

  if (!res.ok) throw new Error("Error obteniendo el clima");

  const data = await res.json();
  return data.current_weather;
};
