import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
import "./WeatherApp.css"

export default function WeatherApp() {

    const [weatherInfo,SetWeatherInfo] = useState({
        city : "Demoland",
        feelsLike: 25,
        humidity: 50,
        temp: 25,
        tempMax: 25,
        tempMin: 25,
        weather: "light rain"
    })


    let updateInfo = (newInfo) => {
        SetWeatherInfo(newInfo);
    }

    return(
        <div className="all" style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo = {updateInfo}></SearchBox>
            <InfoBox info = {weatherInfo}></InfoBox>
        </div>
    )
}