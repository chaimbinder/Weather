let ApiKey = "b57e0f6c16644bce70a5181cc70b7d42";
export const getWeatherByCity = async (city) => {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        city.latitude +
        "&lon=" +
        city.longitude +
        "&exclude=current,hourly,minutely,alerts&units=metric&appid=" +
        ApiKey +
        "&lang=he"
    );
    const data = await response.json();
    return data;
  } catch {
    throw new Error("Error fetching weather");
  }
}
