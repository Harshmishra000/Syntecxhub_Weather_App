import InfoBox from "./InfoBox"
import Search from "./Search";
import {useState} from "react";

export default function WheatherApp (){
    let [weatherInfo, setWeatherInfo] = useState({
        city: "pune",
        feelslike: 17.47,
        temp: 17.83,
        tempMin: 1.83,
        tempMax: 19.67,
        humidity: 69,
        weather: "few Cloud"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };
    return(
        <div style={{textAlign: "center"}}>
            <h1>Weather App</h1>
            <Search updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}