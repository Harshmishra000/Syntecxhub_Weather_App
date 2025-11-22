import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Search.css";

export default function Search({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "2044de0bd35f6622aba28643e3b9b67a";

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      return {
        city: data.name,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        feelsLike: data.main.feels_like,
        humidity: data.main.humidity,
        weather: data.weather[0].description
      };
    } catch {
      throw new Error("City not found");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const weatherData = await getWeatherInfo();
      updateInfo(weatherData);
      setCity("");
      setError(false);
    } catch {
      setError(true);
    }
  };

  return (
    <div className="searchbox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City name"
          variant="outlined"
          value={city}
          required
          onChange={(e) => setCity(e.target.value)}
        />
        <br /><br />
        <Button variant="contained" type="submit">Search</Button>

      </form>
      {error && <p style={{ color: "red" }}>No such place exist!</p>}
    </div>
  );
}
