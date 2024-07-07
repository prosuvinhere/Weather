import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp() {

    const [weatherInfo,SetWeatherInfo] = useState({
        city : "Wonderland",
        feelsLike: 26.22,
        humidity: 81,
        temp: 25.5,
        tempMax: 25.5,
        tempMin: 25.5,
        weather: "light rain"
    })

    let updateInfo = (newInfo) => {
        SetWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo = {updateInfo}></SearchBox>
            <InfoBox info = {weatherInfo}></InfoBox>
        </div>
    )
}