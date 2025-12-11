export const fetchGeo = async (city) => {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
  );

  if (!res.ok) throw new Error("Error buscando la ciudad");

  const data = await res.json();
  if (!data.results || data.results.length === 0) {
    throw new Error("Ciudad no encontrada");
  }

  const result = data.results[0];

  return {
    city: result.name,
    latitude: result.latitude,
    longitude: result.longitude,
  };
};
