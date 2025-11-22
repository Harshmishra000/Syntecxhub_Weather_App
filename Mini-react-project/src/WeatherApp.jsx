import InfoBox from "./InfoBox";
import Search from "./Search";
import { useState } from "react";


export default function WheatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Pune",
    temp: 17.83,
    tempMin: 1.83,
    tempMax: 19.67,
    feelsLike: 17.47,
    humidity: 69,
    weather: "few Clouds"
  });

  const [isCelsius, setIsCelsius] = useState(true);

  const updateInfo = (newInfo) => {
    if (newInfo) setWeatherInfo(newInfo);
  };

  const toggleTempUnit = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>

      <Search updateInfo={updateInfo} />
      <br></br>
        <div style={{ marginBottom: "10px" }}>
        <button onClick={toggleTempUnit} variant="contained" >
          {isCelsius ? "Show °F" : "Show °C"}
        </button>
      </div>
     <InfoBox info={weatherInfo} isCelsius={isCelsius} />

    </div>
  );
}
