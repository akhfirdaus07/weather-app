const weather = (() => {
  function convertData(data) {
    const {
        location: { name : cityName},
        current: {temp_c: temperature, feelslike_c: feelsLike, humidity, wind_kph: windSpeed}
    } = data;
    return { cityName, temperature, feelsLike, humidity, windSpeed };
  }

  async function getData(city) {
    const endpoint = `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}`;
    try {
      const response = await fetch(endpoint, { mode: "cors" });
      if (!response.ok) throw new Error(`City ${city} not found`);
      const data = convertData(await response.json());
      return data;
    } 
    catch (error) {
      alert(error);
      return null;
    }
  }
  return { getData };
})();

export default weather;
