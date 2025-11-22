import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({ info, isCelsius }) {
  const convertTemp = (temp) =>
    isCelsius ? temp.toFixed(1) : (temp * 9 / 5 + 32).toFixed(1);
  const unit = isCelsius ? "°C" : "°F";

  const HOT_URL = "https://images.unsplash.com/photo-1494548162494-384bba4ab999?q=80&w=880&auto=format&fit=crop";
  const COLD_URL = "https://images.unsplash.com/photo-1476400424721-e25994a9f0ff?q=80&w=1047&auto=format&fit=crop";
  const RAIN_URL = "https://images.unsplash.com/photo-1549931791-fd34647748ed?w=500&auto=format&fit=crop&q=60";

  return (
    <div className="info">
      <div className="card">
        <Card sx={{ maxWidth: 500, margin : "auto" }} className="weather-card">
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
            title="weather image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              <b>{info.city}</b> {
                info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <SunnyIcon /> : <AcUnitIcon />
              }
            </Typography>
            <Typography variant="body2" style={{ color: "black" }}>
              <p>Temperature: {convertTemp(info.temp)}{unit}</p>
              <p>Min Temp: {convertTemp(info.tempMin)}{unit}</p>
              <p>Max Temp: {convertTemp(info.tempMax)}{unit}</p>
              <p>Feels Like: {convertTemp(info.feelsLike)}{unit}</p>
              <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}{unit}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
