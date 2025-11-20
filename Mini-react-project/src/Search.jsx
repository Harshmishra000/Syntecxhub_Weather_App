import {useState} from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "./Search.css"
import { jsx } from "react/jsx-runtime";

export default function Search({updateInfo}){
        let [city, setCity] = useState("");
        let [error, setError] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "2044de0bd35f6622aba28643e3b9b67a"


    
    let getWeatherInfo = async () => {

        try{

            let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponce = await responce.json();
            let result = {
                city: city,
                temp: jsonResponce.main.temp,
                tempMin: jsonResponce.main.temp_min,
                tempMax: jsonResponce.main.temp_max,
                humidity: jsonResponce.main.humidity,
                feelsLike: jsonResponce.main.feels_like,          
                weather: jsonResponce.weather[0].description
    
            };
            console.log(result)
            return result;
        }catch(error){
           throw error;
        }

    }


    let handelCityName = (event) => {
        setCity(event.target.value);
    };

    let handelSubmit = async (event) => {
        try{

            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(error){
            setError(true)
        }
    };
    return(
           <div className='searchbox'>
              <form onSubmit={handelSubmit}>
                 <TextField 
                 id="city" 
                 label="City name" 
                 variant="outlined" 
                 value={city} 
                 required
                 onChange={handelCityName}/>
                 <br></br>
                 <br></br>
                  <Button variant="contained" type="submit">
                    Send
                  </Button>
                {error && <p style={{color: "red"}}>No such place exist!</p>}
              </form>
           </div>
    )
}