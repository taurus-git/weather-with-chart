import axios from "axios";

let WeatherForecast = async (city) => {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    return await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=16&APPID=${API_KEY}`
    )
}

export default WeatherForecast;